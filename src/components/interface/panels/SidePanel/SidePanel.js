// Library imports
import React, { useEffect, useRef, memo } from 'react';
import { useSelector } from 'react-redux';
import Draggable from 'react-draggable';
// Project imports
import { TabPanel } from 'components';
import { actionCreators } from 'flux';
import { useActions } from 'utils';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import TuneIcon from '@material-ui/icons/Tune';
import ToolboxIcon from 'mdi-material-ui/Toolbox';
import Tooltip from '@material-ui/core/Tooltip';

// Extract relevant actionCreators
const { setSidePanelTabIndex } = actionCreators;

// Computes the accessibility labels for the side panel
function accessibilityProps(index) {
    return {
        id: `side-panel-tab-${index}`,
        'aria-controls': `side-panel-tabpanel-${index}`,
    };
}

// Styling for the side panel
const sidePanelStyles = makeStyles(() => ({
    // Wrapper for the panel
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 200,
    },
    // panelTabs have fixed height
    panelTabs: {
        flexGrow: 0,
    },
    panelBody: {
        position: 'relative',
        flexGrow: 1,
        '&>div': {
            position: 'absolute',
            overflowY: 'scroll',
            height: '100%',
            width: '100%',
        },
    },
    // Allow for smaller buttons
    tabButton: {
        minWidth: 0,
    },
}));

// Panel on the side of the screen to manage components and properties
export default memo(function SidePanel() {
    // CSS classes for styling
    const classes = sidePanelStyles();

    // Layout is 1 if the panel is in wide mode; 0 if in narrow mode
    const [layout, setLayout] = React.useState(0);

    // Ref for tracking panel width
    const ref = useRef();

    // Effect for measuring panel width on resize
    useEffect(() => {
        // Resize handler
        function handleResize() {
            if (!ref || !ref.current) {
                return;
            }

            if (ref.current.clientWidth > 350) {
                // Wide layout
                setLayout(1);
            } else {
                // Narrow layout
                setLayout(0);
            }
        }

        window.addEventListener('resize', handleResize, false);
        handleResize();

        // Cleanup event handlers on unmount
        return function cleanup() {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Retrieve properties from the global state
    const sidePanelFluxState = useSelector(
        (state) => state.user_interface.sidePanel
    );

    // ActiveIndex is the index of the tab currently in view
    const [activeIndex, setActiveIndex] = [
        sidePanelFluxState.activeTabIndex,
        useActions(setSidePanelTabIndex),
    ];

    // Helper function to set active tab on tab click
    const handleChange = (event, newValue) => {
        setActiveIndex(newValue);
    };

    // Helper function to set active tab on view swipe
    const handleChangeIndex = (index) => {
        setActiveIndex(index);
    };

    // Spacing passed to tab panels depends on layout
    const spacing = layout ? 3 : 1;

    // Render the side panel in a tabbed layout
    return (
        <div ref={ref} className={classes.root}>
            <AppBar
                className={classes.panelTabs}
                component='div'
                position='static'
                color='default'
            >
                <Tabs
                    value={activeIndex}
                    onChange={handleChange}
                    indicatorColor='primary'
                    textColor='primary'
                    variant='fullWidth'
                    aria-label='side-panel'
                >
                    <Tooltip title={layout ? '' : 'Components'}>
                        <Tab
                            className={classes.tabButton}
                            label={layout ? 'Components' : ''}
                            icon={<ToolboxIcon />}
                            {...accessibilityProps(0)}
                        />
                    </Tooltip>
                    <Tooltip title={layout ? '' : 'Properties'}>
                        <Tab
                            className={classes.tabButton}
                            label={layout ? 'Properties' : ''}
                            icon={<TuneIcon />}
                            {...accessibilityProps(1)}
                        />
                    </Tooltip>
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis='x'
                index={activeIndex}
                onChangeIndex={handleChangeIndex}
                className={classes.panelBody}
            >
                <TabPanel value={activeIndex} index={0} spacing={spacing}>
                    <Draggable>
                        <Card>Item One</Card>
                    </Draggable>
                </TabPanel>
                <TabPanel value={activeIndex} index={1} spacing={spacing}>
                    Item Two
                </TabPanel>
            </SwipeableViews>
        </div>
    );
});
