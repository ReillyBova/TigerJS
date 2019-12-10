import React, { Fragment, createRef, useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

// Constant that defines column divider width
const DIV_WIDTH = 3;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'relative',
        height: '100%',
    },
    divider: {
        maxWidth: DIV_WIDTH,
        width: '100%',
        backgroundColor: '#222222',
        cursor: 'col-resize',
        '&:hover, &.active': {
            backgroundColor: theme.palette.secondary.main,
        },
        boxShadow: theme.shadows[3],
    },
    screenWrapper: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
    },
}));

// Compute window width
const computeWindowWidth = () => {
    return (
        window.innerWidth ||
        (document.documentElement || document.body).clientWidth
    );
};

// Compute screen widths as an array
const computeScreenWidths = (refs) => {
    return refs.map((ref) => {
        if (!ref || !ref.current) {
            return 0;
        } else {
            return ref.current.clientWidth;
        }
    });
};

// Set screen widths on DOM
const setScreenWidths = (refs, screenWidths, winWidth) => {
    refs.forEach((ref, i) => {
        if (!ref || !ref.current) {
            return;
        } else {
            // Compute new width as percentage
            const percentageOfScreen = (screenWidths[i] / winWidth) * 100.0;
            ref.current.style.width = `${percentageOfScreen}%`;
        }
    });
};

export default function SplitScreen({ children, minShrink = 0.15 }) {
    const screens = React.Children.toArray(children);

    // Refs to keep track of (and set width percentages); initialize to evenly-spaced
    const screenRefs = useRef(screens.map(() => createRef()));
    const [activeSlider, setActiveSlider] = useState(-1);

    useEffect(() => {
        // Corner case (no active sliders)
        if (activeSlider < 0 || !screenRefs.current) {
            return;
        }

        // Otherwise, set up sliding behavior
        let winWidth = computeWindowWidth();
        let screenWidths = computeScreenWidths(screenRefs.current);
        let minWidth = minShrink * winWidth * (1.0 / screens.length);

        // Resize handler
        function handleResize() {
            // Update window dimensions
            winWidth = winWidth();
            screenWidths = screenWidths(screenRefs.current);
            minWidth = minShrink * winWidth * (1.0 / screens.length);
        }
        // Mouse move handler
        function handleMouseMove(e) {
            // Mouse position
            const targetX = e.clientX;
            // Find barrier position
            let currentX = -DIV_WIDTH / 2.0;
            for (let i = 0; i <= activeSlider; i++) {
                currentX += screenWidths[i] + DIV_WIDTH;
            }

            // Adjust accordingly
            let delta = targetX - currentX;
            if (delta > 0) {
                for (let i = activeSlider + 1; i < screens.length; i++) {
                    // Compute (clamped) exchange
                    const newWidth = Math.max(
                        minWidth,
                        screenWidths[i] - delta
                    );
                    const totalChange = screenWidths[i] - newWidth;
                    // Exchange width
                    screenWidths[i] = newWidth;
                    delta -= totalChange;
                    screenWidths[activeSlider] += totalChange;

                    // Break when we hit the target
                    if (delta <= 0) {
                        break;
                    }
                }
            } else if (delta < 0) {
                delta = -delta; // Flip sign for readibility
                for (let i = activeSlider; i >= 0; i--) {
                    // Compute (clamped) exchange
                    const newWidth = Math.max(
                        minWidth,
                        screenWidths[i] - delta
                    );
                    const totalChange = screenWidths[i] - newWidth;
                    // Exchange width
                    screenWidths[i] = newWidth;
                    delta -= totalChange;
                    screenWidths[activeSlider + 1] += totalChange;

                    // Break when we hit the target
                    if (delta <= 0) {
                        break;
                    }
                }
            }
            // Apply new widths to DOM
            setScreenWidths(screenRefs.current, screenWidths, winWidth);
        }
        // Mouse up handler
        function handleMouseUp() {
            // Disable slider
            setActiveSlider(-1);
        }

        window.addEventListener('resize', handleResize, false);
        window.addEventListener('mousemove', handleMouseMove, false);
        window.addEventListener('mouseup', handleMouseUp, false);
        // Cleanup event handlers on unmount
        return function cleanup() {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [activeSlider, minShrink, screens.length]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {screens.map((screen, i) => {
                return (
                    <Fragment key={screen.key}>
                        <div
                            ref={screenRefs.current[i]}
                            className={classes.screenWrapper}
                        >
                            {screen}
                        </div>
                        {i < screens.length - 1 && (
                            <div
                                onMouseDown={(e) => {
                                    setActiveSlider(i);
                                    e.preventDefault();
                                }}
                                onMouseUp={() => setActiveSlider(-1)}
                                className={clsx(
                                    classes.divider,
                                    activeSlider === i && 'active'
                                )}
                            />
                        )}
                    </Fragment>
                );
            })}
        </div>
    );
}
