import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Container, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#000000',
        marginTop: '10px'
    },
    footerText:{
        paddingRight: '4px', 
        color: 'white', 
        fontWeight: 'bold', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center'
    },
    logo: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center'
    }

}))

const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.footer} maxWidth="max" position="end">
                <Box display="flex" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                    <Box flexGrow={1} display="flex">
                        <Box flexGrow={1}></Box>
                        <Box style={{ display: 'flex' }} ><Typography className={classes.footerText} textShadow={10} variant="h6" >2021</Typography></Box>
                    </Box>
                    <Box display='flex'><img style={{paddingRight:'3px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png' width={50} alt="NS Logo Blanco" /></Box>
                    <Box display='flex' flexGrow={1}><Typography className={classes.footerText} variant="h6" >EmmanuelTC</Typography></Box>
                </Box>
            </Container>
        </div>
    )
}

export default Footer
