// Library imports
import React, { useState } from 'react';
// Project imports
import Navbar from './Navbar';
import SplitScreen from './SplitScreen';
import ThreeContainer from './ThreeContainer';
import SidePanel from './SidePanel';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// Styling for App wrapper
const appStyles = makeStyles(() => ({
    // Wrapper spanning the height of the browser
    fullHeight: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    // Ensure content below navbar stretches to bottom of the screen
    stretchToBottom: {
        flexGrow: 1,
    },
}));

// The root component of the project
export default function App() {
    // CSS classes for styling
    const classes = appStyles();

    // Visibility states for columns
    const [showViz, setViz] = useState(true);
    const [showControl, setControl] = useState(true);
    const [showSide, setSide] = useState(true);

    // Compute the number of active panels
    let activePanelCount = 0;
    if (showViz) {
        activePanelCount += 1;
    }
    if (showControl) {
        activePanelCount += 1;
    }
    if (showSide) {
        activePanelCount += 1;
    }

    // We cannot disable any more panels when there is only one left
    const canDisablePanels = (activePanelCount > 1);

    // Function to ensure there is always one panel active
    const setStateFilter = (state, setState) => {
        if (state || canDisablePanels) {
            setState(state);
        }
    };

    // setState functions wrapped in the filter
    const toggleViz = (state) => setStateFilter(state, setViz);
    const toggleControl = (state) => setStateFilter(state, setControl);
    const toggleSide = (state) => setStateFilter(state, setSide);

    // Render three panels: Visualization | Control | Side
    return (
        <div className={classes.fullHeight}>
            <Navbar
                showViz={showViz}
                showControl={showControl}
                showSide={showSide}
                setViz={toggleViz}
                setControl={toggleControl}
                setSide={toggleSide}
                canDisablePanels={canDisablePanels}
            />
            <div className={classes.stretchToBottom}>
                <SplitScreen
                    emptyMessage={
                        `Hmmm...   it looks like something went wrong!
                        Use Navbar to toggle a panel back into view :P`
                    }
                >
                    <ThreeContainer
                        splitScreenIsHidden={!showViz}
                        splitScreenSetState={toggleViz}
                        splitScreenMinShrink={0}
                    />
                    <Container
                        splitScreenIsHidden={!showControl}
                        splitScreenSetState={toggleControl}
                        splitScreenMinShrink={0}
                        maxWidth="sm"
                    >
                        <Box my={4}>
                            <Typography
                                variant="h4"
                                component="h1"
                                gutterBottom
                            >
                                Flow Panel
                            </Typography>
                        </Box>
                    </Container>
                    <SidePanel
                        splitScreenIsHidden={!showSide}
                        splitScreenSetState={toggleSide}
                        splitScreenBehavior={'fixed'}
                        splitScreenMinShrink={200}
                    />
                </SplitScreen>
            </div>
        </div>
    );
}
