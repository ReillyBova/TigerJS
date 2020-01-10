// Return the width of the browser window
export const computeWindowWidth = () => {
    return (
        window.innerWidth ||
        (document.documentElement || document.body).clientWidth
    );
};

// Return the height of the browser window
export const computeWindowHeight = () => {
    return (
        window.innerHeight ||
        (document.documentElement || document.body).clientHeight
    );
};

// Determine if the event is a pure left mouse click
export const isLeftMouseClick = (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
        return false;
    } else if ('buttons' in event) {
        return event.buttons === 1;
    } else if ('which' in event) {
        return event.which === 1;
    } else {
        return event.button === 1 || event.type === 'click';
    }
};

// Return true if (x , y) lies within the bounding box (or along, i.e. edge inclusive)
export const pointIntersectsBoundingBox = (
    x,
    y,
    { top, bottom, left, right }
) => {
    if (left > x || x > right || top > y || y > bottom) {
        return false;
    } else {
        return true;
    }
};

export const translateCSS = (x, y) => `translate(${x}px, ${y}px)`;
