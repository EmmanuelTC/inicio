import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import logo from '../../logo.svg';
//import NS from '../../assets/NSLogo.png';
import Typical from 'react-typical'
//import FancyText from 'react-fancytext'

const useStyles = makeStyles((theme) => ({
    otro: {
        height: 'auto'
    },
}))

const Inicio = () => {
    const classes = useStyles();
    return (
        <div className={classes.otro}>
            <div style={{ height: "10px", backgroundColor: "#ffffff" }} />
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
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
