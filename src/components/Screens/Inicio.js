import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import logo from '../../logo.svg';
import ReactJSsvg from '../../assets/ReactLogoSVG.svg';
import NETsvg from '../../assets/NETlogoSVG.svg';
import NET from '../../assets/NETlogo.png';
import Typical from 'react-typical';
//import FancyText from 'react-fancytext'
import { Typography, Container, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    otro: {
        height: 'auto'
    },
    Dentro: {
        width: "100px", height: "100px",
        position: "relative", float: "left",
        backgroundColor: "#000000",
        margin: "0px 5px",
        color: "#ffffff",
        fontWeight: "bold"
    },
    column: {
        float: "left",
        width: "33.33%",
        padding: "5px"
    }
}))

const Inicio = () => {
    const classes = useStyles();
    return (
        <div className={classes.otro}>
            <div style={{ height: "1vh", backgroundColor: "#ffffff" }} />
            <div className="App">
                <header className="App-header">

                    <Box display="flex" width="100%" justifyContent="center" alignItems="center">

                        {/*<div style={{width:"10vh"}}/>*/}
                        <Box width="20%">{/*Item 1*/}</Box>
                        <a href="https://emmanueltc.github.io/inicio/">
                            <img src={ReactJSsvg} className="App-logo" alt="logo" />
                        </a>

                        <Box width="40%">{/*Item 2*/}</Box>

                        <a href="https://emmanueltc.github.io/net/">
                            <img style={{ marginTop: "50px", width: "30vmin", height: "15vmin", margin: "7vmin 0px" }} id="slide" src={NETsvg} className="NET_logo" alt="NETlogo" />
                        </a>
                        <Box width="20%">{/*Item 3*/}</Box>
                    </Box>

                   {/*<Container style={{ padding: "10px", color: "#ffffff", fontSize: "20px" }} className={classes.footer} maxWidth="max" position="end">
                        <Box style={{ paddingBottom: "20vmin" }} display="flex" >
                            <Box flexGrow={1} className={classes.Dentro}>
                                <img src={ReactJSsvg} className="App-logo" alt="logo" />
                            </Box>
                            <Box flexGrow={1} className={classes.Dentro}>
                                <img style={{ marginTop: "50px", width: "30vmin", height: "15vmin", margin: "7vmin 0px" }} id="slide" src={NET} className="NET_logo" alt="NETlogo" />
                            </Box>
                        </Box>
                    </Container>*/}

                    {/*                    <img src={logo} className="App-logo" alt="logo" />
                    <img id="slide" src={NET} className="NET_logo" alt="NETlogo" />*/}
                    <h2><code>Emmanuel Trujillo Castillo</code></h2>
                    {/*                   <FancyText>a</FancyText>*/}


                    <p style={{ fontFamily: 'monospace' }}>
                        <Typical
                            style={{ fontFamily: 'monospace' }}
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                '',
                                2000,
                                'De',
                                200,
                                'Desa',
                                200,
                                'Desarro',
                                200,
                                'Desarrolla',
                                200,
                                'Desarrollador',
                                3000,
                                'Desarrolla',
                                100,
                                'Desarro',
                                100,
                                'Desa',
                                100,
                                'De',
                                100,
                                'Deve',
                                200,
                                'Develo',
                                200,
                                'Developer',
                                3000,
                                'Develo',
                                100,
                                'Deve',
                                100,
                                'De',
                                100
                                /*'Streamer',
                                1000*/
                            ]}
                        />
                    </p>

                    <br />

                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                        React.JS
                    </a>
                </header>
            </div>
        </div>
    )

    //---------------------------------------------------------------------------
    /*   function EmmanuelTC_Offline() {
                        document.getElementById('EmmanuelTC').style.display = 'block';
                    document.getElementById('EmmanuelTC_Chat').style.display = 'block';
                    document.getElementById('LiveEmmanuelTC').style.display = 'block';
       }*/
}

export default Inicio
