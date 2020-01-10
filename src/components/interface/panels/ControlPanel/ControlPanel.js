// Library imports
import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
// Project imports
import { actionCreators } from 'flux';
import { pointIntersectsBoundingBox, useActions, isLeftMouseClick } from 'utils';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const { acClaimDrag, acUnclaimDrag, acRecievedDrop, acStartDrag } = actionCreators;

// Styling for the side panel
const sidePanelStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
    outline: {
        border: `2px solid ${theme.palette.secondary.main}`,
    },
    noOutline: {
        border: '2px solid transparent',
    },
    test: {
        width: 50,
        height: 50,
        margin: 8,
        cursor: 'grab',
        '&:hover': {
            boxShadow: theme.shadows[8],
        },
    },
}));

const CONTROL_PANEL_ID = 'CONTROL_PANEL';

// Panel on the side of the screen to manage components and properties
export default memo(function ControlPanel() {
    // CSS classes for styling
    const classes = sidePanelStyles();

    // Read dragState from the global state
    const isActive = useSelector((state) => state.user_interface.dragState.isActive);
    const claimerID = useSelector((state) => state.user_interface.dragState.claimerID);

    const ref = useRef();

    const [claimDrag, unclaimDrag, recievedDrop] = useActions([acClaimDrag, acUnclaimDrag, acRecievedDrop]);

    const draggedOver = useMemo(() => (isActive &&  claimerID === CONTROL_PANEL_ID), [isActive, claimerID]);

    useEffect(() => {
        // Corner case (no dragging)
        if (!ref || !ref.current || !isActive) {
            return;
        }

        let boundingBox;

        function handleResize() {
            const {
                top,
                bottom,
                left,
                right,
            } = ref.current.getBoundingClientRect();
            boundingBox = { top, bottom, left, right };
        }

        // Mouse move handler
        function handleMouseMove({ clientX, clientY }) {
            if (!ref || !ref.current) {
                return;
            }

            const isMouseOver = pointIntersectsBoundingBox(
                clientX,
                clientY,
                boundingBox
            );
            if (draggedOver) {
                if (!isMouseOver) {
                    unclaimDrag();
                }
            } else {
                if (isMouseOver) {
                    claimDrag(CONTROL_PANEL_ID);
                }
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize, false);
        window.addEventListener('mousemove', handleMouseMove, false);

        // Cleanup event handlers on unmount
        return function cleanup() {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isActive, draggedOver, claimDrag, unclaimDrag]);

    const claimedDrops = useSelector((state) => state.user_interface.dragState.claimedDrops);
    const [kiddies, setKiddies] = useState({});
    useEffect(() => {
        const claimedIDs = [];
        const newKids = {};
        Object.entries(claimedDrops).forEach(([id, draggable]) => {
            if (draggable.claimerID === CONTROL_PANEL_ID) {
                claimedIDs.push(id);
                newKids[id] = draggable;
            }
        });

        if (claimedIDs.length > 0) {
            recievedDrop(claimedIDs);

            let x = 0;
            let y = 0;
            if (containerRef && containerRef.current) {
                const { left, top } = containerRef.current.getBoundingClientRect();
                x = left;
                y = top;
            }

            Object.values(newKids).forEach((draggable) => {
                if (draggable.parentX === "none") {
                    draggable.x = draggable.finalX - x;
                } else {
                    draggable.x = draggable.parentX;
                }
                if (draggable.parentY === "none") {
                    draggable.y = draggable.finalY - y;
                } else {
                    draggable.y = draggable.parentY;
                }

                delete draggable.finalX;
                delete draggable.parentX;
                delete draggable.finalY;
                delete draggable.parentY;
            });

            setKiddies({...kiddies, ...newKids});
        }
    }, [kiddies, claimedDrops, recievedDrop]);
    const containerRef = useRef();

    const triggerStartDrag = useActions(acStartDrag);

    const boxRefs = useRef([]);
    useEffect(() => {
       boxRefs.current = boxRefs.current.slice(0, Object.keys(kiddies).length);
    }, [kiddies]);

    const onMouseDownHandler = (e, id, index, color) => {
        const myRef = boxRefs.current[index];
        if (isLeftMouseClick(e) && myRef) {
            const { left, top } = myRef.getBoundingClientRect();
            const me  = kiddies[id];
            triggerStartDrag(color, id, left, top, e.clientX, e.clientY, me.x, me.y, CONTROL_PANEL_ID);
            e.preventDefault();
        }
    };

    const activeDrag = useSelector((state) => state.user_interface.dragState.activeDrag);

    useEffect(() => {
        if (activeDrag && (activeDrag.id in kiddies)) {
            const newKiddies = {...kiddies};
            delete newKiddies[activeDrag.id];
            setKiddies(newKiddies);
        }
    }, [activeDrag, kiddies]);

    // Render the side panel in a tabbed layout
    return (
        <React.Fragment>
        <div
            ref={ref}
            className={clsx(classes.root, draggedOver ? classes.outline : classes.noOutline)}
        >
        </div>
        <Container ref={containerRef} style={{position: 'absolute'}}>
            <Box my={4}>
                <Typography variant='h4' component='h1' gutterBottom>
                    Control Panel
                </Typography>
            </Box>
            { Object.entries(kiddies).map(([id, draggable], i) => (
                <div key={id} ref={el => boxRefs.current[i] = el} style={{zIndex: 1, display: 'inline-block', position: 'absolute', left: draggable.x, top: draggable.y}}>
                    <Card
                        onMouseDown={(e) =>
                            onMouseDownHandler(e, id, i, draggable.color)
                        }
                        style={{
                            backgroundColor: draggable.color,
                        }}
                        className={classes.test}
                    />
                </div>
            ))}
        </Container>
        </React.Fragment>
    );
});
