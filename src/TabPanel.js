// Library imports
import React from 'react';
// UI imports
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// TabPanel wraps the content that appears under a tabbed component
export default function TabPanel({ children, value, index, spacing, ...other }) {
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`side-tabpanel-${index}`}
            aria-labelledby={`side-panel-tab-${index}`}
            {...other}
        >
            <Box p={spacing}>
                {value === index && children}
            </Box>
        </Typography>
    );
}
