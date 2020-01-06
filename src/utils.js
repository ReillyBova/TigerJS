// Return the width of the browser window
export const computeWindowWidth = () => {
    return (
        window.innerWidth ||
        (document.documentElement || document.body).clientWidth
    );
};
