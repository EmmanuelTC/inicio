import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import Drawer from './Drawer';


const useStyles = makeStyles((theme) => ({
    toolbar: {
        flexGrow: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        paddingLeft:"0px",
        paddingRight:"",
    },
    TopBarText: {
        color: 'white',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    tabs: {
        flexGrow: 0,
        //marginLeft: theme.spacing(20)
    },
    title: {
        marginRight: '18%'
    },
    logo: {
        flexGrow: 0,
        marginLeft: theme.spacing(70),
    },
    paper:{
        //        padding: "0px",
        minWidth:"100px",
    }
}))

const TopBar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar style={{height:"6.5vh", paddingLeft: "0px"}} display='flex' position="fixed">
                <Toolbar className={classes.toolbar}>
                    <Box justifyContent="flex-start"><Drawer style={{width:"10vh"}} classes={{paper: classes.paper}} /></Box>

                    <Box justifyContent="center" display='flex' flexGrow={1}><Typography className={(classes.TopBarText, classes.tabs)} variant="h4" style={{fontWeight:'bold', fontSize: "4vh"}} >EmmanuelTC</Typography></Box>

                    <Box justifyContent="flex-end" display="flex">
                        <img style={{paddingright:'7px', paddingLeft:'7px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png' width={"40vh"} alt="NS Logo Blanco" />
                    </Box>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar
