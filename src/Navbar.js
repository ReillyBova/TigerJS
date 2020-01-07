// Library imports
import React from 'react';
// Project imports
import SitemapOutlineIcon from './SitemapOutline';
import { makeStyles } from '@material-ui/core/styles';
// UI imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CubeFilledIcon from 'mdi-material-ui/Cube';
import CubeOutlineIcon from 'mdi-material-ui/CubeOutline';
import SitemapFilledIcon from 'mdi-material-ui/Sitemap';
import WrenchFilledIcon from 'mdi-material-ui/Wrench';
import WrenchOutlineIcon from 'mdi-material-ui/WrenchOutline';

// Styling for Navbar
const navStyles = makeStyles(() => ({
    // Fixed height navbar
    root: {
        flexGrow: 0,
    },
    // Fill space between title and control buttons
    title: {
        flexGrow: 1,
    },
}));

// Renders a Navbar across the top of the screen; contains a few simple controls.
export default function Navbar({
    showViz,
    showControl,
    showSide,
    setViz,
    setControl,
    setSide,
    canDisablePanels,
}) {
    // CSS classes for styling
    const classes = navStyles();

    // Format tool tip strings
    const titleTooltip = (state, name) => {
        if (state) {
            return `Hide ${name}`;
        } else {
            return `Show ${name}`;
        }
    };

    // Render the Navbar and buttons
    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        {'TigerJS'}
                    </Typography>
                    <Tooltip title={titleTooltip(showViz, 'Visualization')}>
                        <IconButton
                            onClick={() => setViz(!showViz)}
                            aria-label='toggle-visualization-panel'
                            disabled={showViz && !canDisablePanels}
                        >
                            {showViz ? <CubeFilledIcon /> : <CubeOutlineIcon />}
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={titleTooltip(showControl, 'Control Panel')}>
                        <IconButton
                            onClick={() => setControl(!showControl)}
                            aria-label='toggle-control-panel'
                            disabled={showControl && !canDisablePanels}
                        >
                            {showControl ? (
                                <SitemapFilledIcon />
                            ) : (
                                <SitemapOutlineIcon />
                            )}
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={titleTooltip(showSide, 'Side Panel')}>
                        <IconButton
                            onClick={() => setSide(!showSide)}
                            aria-label='toggle-side-panel'
                            disabled={showSide && !canDisablePanels}
                            edge='end'
                        >
                            {showSide ? (
                                <WrenchFilledIcon />
                            ) : (
                                <WrenchOutlineIcon />
                            )}
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </div>
    );
}
