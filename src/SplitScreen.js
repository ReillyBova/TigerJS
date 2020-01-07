// Libary imports
import React, { Fragment, createRef, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
// Project imports
import { computeWindowWidth } from './utils.js';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// Constant that defines column divider width
const DIV_WIDTH = 3;

// Styling for the split screen component
const splitScreenStyles = makeStyles((theme) => ({
    // Wrapper for the split screen
    root: {
        display: 'flex',
        position: 'relative',
        height: '100%',
        '&.resizing': {
            cursor: 'col-resize',
        },
    },
    // Divider between the screens
    divider: {
        width: DIV_WIDTH,
        flex: 'initial',
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
        cursor: 'col-resize',
        '&:hover:not(.inActive), &.active': {
            backgroundColor: theme.palette.secondary.main,
        },
        boxShadow: theme.shadows[3],
    },
    // Wrapper for screens that stretch as the window grows
    screenWrapperFluid: {
        position: 'relative',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '0%',
        overflow: 'scroll',
    },
    // Wrapper for screens that do not stretch as the window grows
    screenWrapperFixed: {
        position: 'relative',
        flex: 'initial',
        overflow: 'scroll',
    },
    // Wrapper for hidden/disabled screens
    screenWrapperHidden: {
        display: 'none',
    },
    // Wrapper for message when there are no screens
    noScreens: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
}));

// Measure the visible width of each screen and return the widths as an array
const computeScreenWidths = (refs) => {
    return refs.map((ref) => {
        if (!ref || !ref.current) {
            return 0;
        } else {
            return ref.current.clientWidth;
        }
    });
};

// Apply the screen widths directly to the DOM's CSS
const setScreenWidths = (
    refs,
    screenWidths,
    resizeBehaviors,
    isRefresh,
    fixedOnly
) => {
    // Boolean to keep track if we need to rerender or not
    let triggeredReflow = false;

    // For each screen...
    refs.forEach((ref, i) => {
        if (!ref || !ref.current) {
            // "Continue"
            return;
        } else if (resizeBehaviors[i].isVisible) {
            if (resizeBehaviors[i].isFixed) {
                // If visible and FIXED
                const newWidth = fixedOnly
                    ? `${screenWidths[i]}%`
                    : `${screenWidths[i]}px`;
                // Only rerender if necessary
                if (ref.current.style.width !== newWidth) {
                    ref.current.style.width = newWidth;
                    triggeredReflow = true;
                }
            } else {
                // If visible and FLUID
                const newFlex = screenWidths[i].toFixed(1);
                const oldFlex = parseFloat(ref.current.style.flexGrow).toFixed(
                    1
                );
                const widthCache = ref.current.widthCache;

                // Only rerender if necessary
                if (
                    oldFlex !== newFlex &&
                    (oldFlex > 0 || screenWidths[i] > 0)
                ) {
                    // Normal case, where flexGrow = pixel width
                    ref.current.style.flexGrow = newFlex;
                    triggeredReflow = true;

                    if (widthCache) {
                        delete ref.current.widthCache;
                    }
                } else if (widthCache && isRefresh) {
                    // This screen was just hidden; need to adjust its size
                    let totalFluidPixels = 0;
                    screenWidths.forEach((width, j) => {
                        if (!resizeBehaviors[j].isFixed && j !== i) {
                            totalFluidPixels += width;
                        }
                    });
                    if (totalFluidPixels <= 0) {
                        // This is the only fluid screen, so it can be large
                        ref.current.style.flexGrow = computeWindowWidth();
                    } else if (widthCache >= 1) {
                        // There was the last fluid screen so it can be anything
                        ref.current.style.flexGrow = totalFluidPixels;
                    } else {
                        /*
                         * Maintain the percentage of fluid pixels this screen
                         * used before it disappeared: ratio = me/(Total + me).
                         *
                         * Total = totalFluidPixels, ratio = widthCache.
                         * Solve for me.
                         */
                        ref.current.style.flexGrow =
                            (totalFluidPixels * widthCache) /
                            (1.0 - widthCache);
                    }
                    triggeredReflow = true;
                }
            }
        } else if (isRefresh) {
            // This screen is invisible, BUT (any) visibility state just changed!
            if (!resizeBehaviors[i].isFixed) {
                // Cache the current width percentage if necessary
                if (!ref.current.widthCache) {
                    // Save normalized width
                    let totalFluidPixels = 0;
                    screenWidths.forEach((width, j) => {
                        if (!resizeBehaviors[j].isFixed) {
                            totalFluidPixels += width;
                        }
                    });
                    totalFluidPixels -= DIV_WIDTH;

                    if (totalFluidPixels <= 0) {
                        ref.current.widthCache = 1;
                    } else {
                        ref.current.widthCache = Math.max(
                            0.15,
                            ref.current.style.flexGrow / totalFluidPixels
                        );
                    }
                }
                ref.current.style.flexGrow = 0;
            }
        }
    });

    return triggeredReflow;
};

// Compute the minimum pixel widths allowable for each screen given window width
const computeMinWidths = (resizeBehaviors, winWidth) => {
    // First count total space taken up by minimum widths
    let totalFixedPixels = 0;
    for (const { isFixed, minShrink } of resizeBehaviors) {
        if (isFixed) {
            totalFixedPixels += minShrink;
        } else {
            totalFixedPixels += minShrink * winWidth;
        }
    }

    // If we have too much fixed space allocated, need to scale everything down
    let fixedScaleFactor = 1.0;
    if (totalFixedPixels > winWidth) {
        fixedScaleFactor = winWidth / totalFixedPixels;
        totalFixedPixels = winWidth;
    }

    // Compute and return minwidths
    const totalFluidPixels = winWidth - totalFixedPixels;
    return resizeBehaviors.map(({ isFixed, minShrink }) => {
        if (isFixed) {
            return minShrink * fixedScaleFactor;
        } else {
            return minShrink * totalFluidPixels;
        }
    });
};

// SplitScreen divides its children into resizable columns
export default function SplitScreen({ children, emptyMessage }) {
    // CSS classes for styling
    const classes = splitScreenStyles();

    // Extract children into array of screens/views
    const screens = React.Children.toArray(children);

    // Determine resizing behavior from props
    const resizeBehaviors = screens.map(({ props }) => {
        // Fluid behavior with minWidth=0 by default
        return {
            isVisible: !(props.splitScreenIsHidden || false),
            setState: props.splitScreenSetState || (() => {}),
            isFixed: props.splitScreenBehavior === 'fixed',
            minShrink: props.splitScreenMinShrink || 0,
        };
    });
    const resizeBehaviorSignature = JSON.stringify(resizeBehaviors);

    // Refs to keep track of screens (and set their CSS)
    const screenRefs = useRef(screens.map(() => createRef()));

    // activeSlider is index of the slider being dragged by the user. -1 if none
    const [activeSlider, setActiveSlider] = useState(-1);

    // Effect for resizing columns on mousedrag
    useEffect(() => {
        // Corner cases (ref is bad or no active sliders)
        if (!screenRefs.current || activeSlider < 0) {
            return;
        }

        // Compute constants needed to determine
        const winWidth = computeWindowWidth();
        const screenWidths = computeScreenWidths(screenRefs.current);
        const minWidths = computeMinWidths(resizeBehaviors, winWidth);

        // Mouse move handler
        function handleMouseMove(e) {
            // Mouse position
            const targetX = e.clientX;

            /*
             * Find the divider position, determine the adjacent panes, and
             * check if at least one visible screen is fluid (i.e. not fixed)
             */
            let currentX = -DIV_WIDTH / 2.0;
            let prevPane = 0;
            let nextPane = screens.length - 1;
            let fixedOnly = true;
            for (let i = 0; i <= activeSlider; i++) {
                if (resizeBehaviors[i].isVisible) {
                    prevPane = i;
                    currentX += screenWidths[i] + DIV_WIDTH;

                    if (!resizeBehaviors[i].isFixed) {
                        fixedOnly = false;
                    }
                }
            }

            for (let i = screens.length - 1; i > activeSlider; i--) {
                if (resizeBehaviors[i].isVisible) {
                    nextPane = i;

                    if (!resizeBehaviors[i].isFixed) {
                        fixedOnly = false;
                    }
                }
            }

            // Adjust screens accordingly
            let delta = targetX - currentX;
            if (delta > 0) {
                // Mouse lies to the right of the divider
                for (let i = activeSlider + 1; i < screens.length; i++) {
                    if (resizeBehaviors[i].isVisible) {
                        // Compute (clamped) exchange
                        const newWidth = Math.max(
                            minWidths[i],
                            screenWidths[i] - delta
                        );
                        const totalChange = screenWidths[i] - newWidth;
                        // Exchange width
                        screenWidths[i] = newWidth;
                        delta -= totalChange;
                        screenWidths[prevPane] += totalChange;

                        // Break when we hit the target
                        if (delta <= 0) {
                            break;
                        }
                    }
                }
            } else if (delta < 0) {
                // Mouse lies to the left of the divider
                delta = -delta; // Flip sign for readibility
                for (let i = activeSlider; i >= 0; i--) {
                    if (resizeBehaviors[i].isVisible) {
                        // Compute (clamped) exchange
                        const newWidth = Math.max(
                            minWidths[i],
                            screenWidths[i] - delta
                        );
                        const totalChange = screenWidths[i] - newWidth;
                        // Exchange width
                        screenWidths[i] = newWidth;
                        delta -= totalChange;
                        screenWidths[nextPane] += totalChange;

                        // Break when we hit the target
                        if (delta <= 0) {
                            break;
                        }
                    }
                }
            }

            let triggeredReflow = false;
            if (!fixedOnly) {
                // Apply new widths to DOM
                triggeredReflow = setScreenWidths(
                    screenRefs.current,
                    screenWidths,
                    resizeBehaviors,
                    false,
                    false
                );
            } else {
                // If all screens are fixed, need to rescale to percentages
                const fixedPercentages = screenWidths.map((width, i) => {
                    if (
                        resizeBehaviors[i].isVisible &&
                        resizeBehaviors[i].isFixed
                    ) {
                        return (width / winWidth) * 100.0;
                    } else {
                        return width;
                    }
                });

                // Apply new percentages to DOM
                triggeredReflow = setScreenWidths(
                    screenRefs.current,
                    fixedPercentages,
                    resizeBehaviors,
                    false,
                    true
                );
            }

            /*
             * If triggeredReflow is true, we adjust a column; let children know
             * their size changed by sending a window resize event
             */
            if (triggeredReflow) {
                window.dispatchEvent(new Event('resize'));
            }
        }

        // Mouse up handler
        function handleMouseUp() {
            // Hide any panels with no width
            screenWidths.forEach((width, i) => {
                if (width <= 0 && resizeBehaviors[i].isVisible) {
                    resizeBehaviors[i].setState(false);
                }
            });
            // Disable the (released) slider
            setActiveSlider(-1);
        }

        window.addEventListener('mousemove', handleMouseMove, false);
        window.addEventListener('mouseup', handleMouseUp, false);

        // Cleanup event handlers on unmount
        return function cleanup() {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
        // eslint-disable-next-line
    }, [activeSlider, screens.length, resizeBehaviorSignature]);

    // Effect to ensure proper formatting on init and after visibility change
    useEffect(() => {
        // Corner case (ref is bad)
        if (!screenRefs.current) {
            return;
        }

        // Measure width of screens
        let screenWidths = computeScreenWidths(screenRefs.current);

        /*
         * Determine how much of the window is taken up by the fixed screens.
         * Also, check if there are any visible fluid screens (i.e. not fixed)
         * at all.
         */
        const winWidth = computeWindowWidth();
        let totalFixedPixels = 0;
        let fixedOnly = true;
        screenWidths.forEach((width, i) => {
            if (resizeBehaviors[i].isFixed) {
                totalFixedPixels += width;
            } else if (resizeBehaviors[i].isVisible) {
                fixedOnly = false;
            }
        });

        /*
         * If there is too much fixed space allocated, fixed screens must be
         * scaled down. If all screens are fixed, fixed screens must be scaled
         * exactly to the width of the screen. If fixed screens would eat up all
         * the space of fluid screens, reallocate 10% of the window for the fluid
         * screens.
         */
        let fixedScaleFactor = 1.0;
        let isFluidCompressed = false;
        if (totalFixedPixels > winWidth || fixedOnly) {
            fixedScaleFactor = winWidth / totalFixedPixels;
        } else if (totalFixedPixels > winWidth * 0.9) {
            fixedScaleFactor = (winWidth * 0.9) / totalFixedPixels;

            // Make a note that the fluid screens were compressed
            isFluidCompressed = true;
        }

        // Adjust the screen widths accordingly
        screenWidths = screenWidths.map((width, i) => {
            if (resizeBehaviors[i].isVisible) {
                if (resizeBehaviors[i].isFixed) {
                    // Rescale fixed divs
                    if (fixedOnly) {
                        // Fixed divs use percentage widths
                        return ((width * fixedScaleFactor) / winWidth) * 100;
                    } else {
                        return width * fixedScaleFactor;
                    }
                } else if (
                    isFluidCompressed &&
                    width === 0 &&
                    !screenRefs.current[i].current.widthCache
                ) {
                    // These screens were compressed to zero, so rescale up
                    return winWidth;
                }
            }

            // Use precomputed width by default
            return width;
        });

        // Apply new screen widths
        setScreenWidths(
            screenRefs.current,
            screenWidths,
            resizeBehaviors,
            true,
            fixedOnly
        );

        // Refresh with second pass if necessary
        if (!fixedOnly) {
            screenWidths = computeScreenWidths(screenRefs.current);
            setScreenWidths(
                screenRefs.current,
                screenWidths,
                resizeBehaviors,
                false,
                fixedOnly
            );
        }

        // Trigger a window resize event
        window.dispatchEvent(new Event('resize'));

        // eslint-disable-next-line
    }, [resizeBehaviorSignature]);

    // isPaneVisible is true if and only if at least one screen is visible
    let isPaneVisible = false;
    return (
        <div className={clsx(classes.root, activeSlider > -1 && 'resizing')}>
            {screens.map((screen, i) => {
                // Safely remove splitScreen props from children
                const screenProps = Object.assign({}, screen.props);
                delete screenProps.splitScreenIsHidden;
                delete screenProps.splitScreenSetState;
                delete screenProps.splitScreenBehavior;
                delete screenProps.splitScreenMinShrink;

                // Record if this pane is visible
                if (resizeBehaviors[i].isVisible) {
                    isPaneVisible = true;
                }

                // Render this screen
                return (
                    <Fragment key={screen.key}>
                        <div
                            ref={screenRefs.current[i]}
                            className={clsx(
                                resizeBehaviors[i].isFixed
                                    ? classes.screenWrapperFixed
                                    : classes.screenWrapperFluid,
                                !resizeBehaviors[i].isVisible &&
                                    classes.screenWrapperHidden
                            )}
                        >
                            {resizeBehaviors[i].isVisible &&
                                React.createElement(screen.type, screenProps)}
                        </div>
                        {i < screens.length - 1 &&
                            resizeBehaviors[i + 1].isVisible &&
                            isPaneVisible && (
                                <div
                                    onMouseDown={(e) => {
                                        setActiveSlider(i);
                                        e.preventDefault();
                                    }}
                                    onMouseUp={() => setActiveSlider(-1)}
                                    className={clsx(
                                        classes.divider,
                                        activeSlider === i
                                            ? 'active'
                                            : activeSlider > -1 && 'inActive'
                                    )}
                                />
                            )}
                    </Fragment>
                );
            })}
            {!isPaneVisible && (
                <Container className={classes.noScreens} maxWidth='sm'>
                    <Box my={4}>
                        <Typography variant='h4' component='h1'>
                            {emptyMessage}
                        </Typography>
                    </Box>
                </Container>
            )}
        </div>
    );
}
