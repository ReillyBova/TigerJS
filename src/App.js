import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Navbar from './Navbar';
import SplitScreen from './SplitScreen';
import ThreeContainer from './ThreeContainer';

const useStyles = makeStyles(() => ({
    fullHeight: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    stretchToBottom: {
        flexGrow: 1,
    },
}));

export default function App() {
    const classes = useStyles();
    return (
        <div className={classes.fullHeight}>
            <Navbar />
            <div className={classes.stretchToBottom}>
                <SplitScreen>
                    <ThreeContainer/>
                    <Container maxWidth="sm">
                        <Box my={4}>
                            <Typography
                                variant="h4"
                                component="h1"
                                gutterBottom
                            >
                                Some Controls Here
                            </Typography>
                        </Box>
                    </Container>
                    <Container maxWidth="sm">
                        <Box my={4}>
                            <Typography
                                variant="h4"
                                component="h1"
                                gutterBottom
                            >
                                More Controls Here
                            </Typography>
                        </Box>
                    </Container>
                </SplitScreen>
            </div>
        </div>
    );
}
