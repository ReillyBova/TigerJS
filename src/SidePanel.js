// Library imports
import React, { useEffect, useRef } from 'react';
// Project imports
import TabPanel from './TabPanel';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import TuneIcon from '@material-ui/icons/Tune';
import ToolboxIcon from 'mdi-material-ui/Toolbox';
import Tooltip from '@material-ui/core/Tooltip';

// Computes the accessibility labels for the side panel
function accessibilityProps(index) {
    return {
        id: `side-panel-tab-${index}`,
        'aria-controls': `side-panel-tabpanel-${index}`,
    };
}

// Styling for the side panel
const sidePanelStyles = makeStyles((theme) => ({
    // Wrapper for the panel
    root: {
        backgroundColor: theme.palette.background.paper,
        minWidth: 200,
    },
    // Allow for smaller buttons
    tabButton: {
        minWidth: 0,
    },
}));

// Panel on the side of the screen to manage components and properties
export default function SidePanel() {
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

    // Value is the index of the current active tab
    const [value, setValue] = React.useState(0);

    // Helper function to set active tab on tab click
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Helper function to set active tab on view swipe
    const handleChangeIndex = (index) => {
        setValue(index);
    };

    // Spacing passed to tab panels depends on layout
    const spacing = layout ? 3 : 1;

    // Render the side panel in a tabbed layout
    return (
        <div ref={ref} className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="side-panel"
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
                axis={'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} spacing={spacing}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1} spacing={spacing}>
                    Item Two
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
