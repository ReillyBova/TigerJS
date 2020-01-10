// Library imports
import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
// Project imports
import { actionCreators } from 'flux';
import { computeWindowHeight, computeWindowWidth, useActions, translateCSS } from 'utils';
// UI imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

// Extract relevant actionCreators
const { acEndDrag, acReturnedDrop } = actionCreators;

const duration = 500;

// Styling for DragLayer
const dragLayerStyles = makeStyles((theme) => ({
    // Span the viewport
    root: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: theme.zIndex.modal,
        cursor: 'grabbing',
    },
    allowPointerEvents: {
        pointerEvents: 'none',
    },
    activeDraggable: {
        zIndex: 1,
        willChange: 'transform',
        position: 'absolute',
        cursor: 'grabbing',
    },
    returningDraggable: {
        display: 'inline-block',
        position: 'absolute',
        zIndex: 0,
        transition: `transform ${duration}ms ease-in-out`,
        opacity: 0.5,
    }
}));

/*
 * Renders a container that sits above the rest of the app and spans the entire
 * viewport. Components that are actively dragged are rendered in this container.
 */
export default function DragLayer() {
    // CSS classes for styling
    const classes = dragLayerStyles();

    // Read dragState from the global state
    const activeDrag = useSelector(
        (state) => state.user_interface.dragState.activeDrag
    );

    const ref = useRef();
    const [endDrag, returnedDrop] = useActions([acEndDrag, acReturnedDrop]);

    const [draggables, setDraggables] = useState([]);

    useEffect(() => {
        // Corner cases (ref is bad or no dragging)
        if (!ref || !ref.current || !activeDrag) {
            return;
        }

        const { initX, initY, mouseX, mouseY } = activeDrag;

        const adjustmentX = initX - mouseX;
        const adjustmentY = initY - mouseY;

        let newX;
        let newY;

        const { width, height } = ref.current.getBoundingClientRect();

        const winWidth = computeWindowWidth() - width;
        const winHeight = computeWindowHeight() - height;

        // Mouse move handler
        function handleMouseMove({ clientX, clientY }) {
            if (!ref || !ref.current) {
                return;
            }
            newX = Math.min(Math.max(clientX + adjustmentX, 0), winWidth);
            newY = Math.min(Math.max(clientY + adjustmentY, 0), winHeight);
            // Mouse position
            ref.current.style.transform = translateCSS(newX, newY);
        }

        // Mouse up handler
        function handleMouseUp({ clientX, clientY }) {
            newX = Math.min(Math.max(clientX + adjustmentX, 0), winWidth);
            newY = Math.min(Math.max(clientY + adjustmentY, 0), winHeight);
            endDrag(newX, newY);
        }

        window.addEventListener('mousemove', handleMouseMove, false);
        window.addEventListener('mouseup', handleMouseUp, false);

        // Cleanup event handlers on unmount
        return function cleanup() {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [draggables, activeDrag, endDrag, ref]);

    const dragState = useSelector((state) => state.user_interface.dragState);

    useEffect(() => {
        const newDraggables = {};
        if (dragState.activeDrag) {
            newDraggables[dragState.activeDrag.id] = {...dragState.activeDrag};
            newDraggables[dragState.activeDrag.id].isActive = true;
        }

        const returningIDs = [];
        Object.entries(dragState.returningDrops).forEach(([id, draggable]) => {
            newDraggables[id] = draggable;
            returningIDs.push(id);
        });

        let timeout = null;
        if (returningIDs.length > 0) {
            timeout = setTimeout(() => returnedDrop(returningIDs), duration);
        }

        const ids = Object.keys(newDraggables).sort();
        const result = ids.map((id) => [id, newDraggables[id]]);
        setDraggables(result);

        return function cleanup() {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [dragState.activeDrag, dragState.returningDrops, returnedDrop]);

    // Render the container if on object is being dragged
    if (draggables.length > 0) {
        return (
            <div
                className={clsx(
                    classes.root,
                    !dragState.isActive && classes.allowPointerEvents
                )}
            >
                {draggables.map(([id, draggable]) => {
                    const { color, initX, initY } = draggable;
                    if (draggable.isActive) {
                        return (
                            <div
                                key={id}
                                ref={ref}
                                className={classes.activeDraggable}
                                style={{transform: `scale(1) ${translateCSS(initX, initY)}`}}
                            >
                                <Card
                                    elevation={12}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        margin: 8,
                                        backgroundColor: color,
                                    }}
                                />
                            </div>
                        );
                    } else {
                        return (
                            <div key={id}
                                className={classes.returningDraggable}
                                style={{transform: translateCSS(initX, initY)}
                            }
                            >
                                <Card
                                    style={{
                                        width: 50,
                                        height: 50,
                                        margin: 8,
                                        backgroundColor: color,
                                    }}
                                />
                            </div>
                        );
                    }
                })}
            </div>
        );
    } else {
        return null;
    }
}
