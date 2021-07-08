import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
//import './CurriculumStyles.css';
import { Typography, Container, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    hr: {
        height: "1px",
        borderWidth: "1px 0px 1px 0px",
        borderColor: "#ffffff",
        borderStyle: "solid",
    },
    NombreCurriculum: {
        backgroundColor: "#000000",
        margin: "0px",
        color: "#000000",
        fontSize: "40px"
    },
    TextoBordeBlanco: {
        margin: "0px",
        textShadow: "2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff"
    },
    TextoBlanco: {
        color: "#ffffff",
        fontSize: "30px",
    },
    TextoNegritas: {
        fontWeight: "bold",
    },
    Dentro: {
        width: "100px", height: "100px",
        position: "relative", float: "left",
        backgroundColor: "#ffffff",
        margin: "0px 5px",
        color: "#000000",
        fontWeight: "bold"
    },
    TituloHabilidades:{
        fontSize: "25px"
    },
    PuntosHabilidades:{
        fontSize:"15px"
    }
}))

const Curriculum = () => {
    const classes = useStyles();
    return (
        <div>
            <div style={{ height: "10px", backgroundColor: "#ffffff" }} />
            <h1><code>Curriculum</code></h1>

            <div style={{ backgroundColor: "#000000" }}>
                <div className={classes.NombreCurriculum}>
                    <span className={classes.TextoBordeBlanco}>EMMANUEL TRUJILLO CASTILLO</span>
                </div>
                <div className={classes.hr}></div>
                <div>{/* Contenido de Curriculum */}
                    <div style={{ backgroundColor: "#000000", margin: "0px" }}>
                        <span className={`${classes.TextoBlanco} ${classes.TextoNegritas}`}>PERFIL</span><br />
                        <span className={`${classes.TextoBlanco}`} style={{ fontSize: "15px" }}>
                            Mi nombre es Emmanuel, nacido en Hermosillo, Sonora, México, estudie
                            Ingeniería Informática, me gusta aprender de los demás y las novedades
                            para reforzar e innovar.
                        </span>
                    </div><br />
                    <div style={{ backgroundColor: "#000000", margin: "0px" }}>
                        <span className={`${classes.TextoBlanco} ${classes.TextoNegritas}`}>HABILIDADES</span><br />
                        <Container style={{ padding: "10px", color: "#ffffff", fontSize: "20px" }} className={classes.footer} maxWidth="max" position="end">
                            <Box style={{ paddingBottom: "10px" }} display="flex" >
                                <Box flexGrow={1} className={classes.Dentro}>
                                    <Typography className={`${classes.TituloHabilidades} ${classes.TextoNegritas}`}>SOFT</Typography>
                                    <Typography className={classes.PuntosHabilidades}>Punto 1</Typography>
                                </Box>
                                <Box flexGrow={1} className={classes.Dentro}>
                                <Typography className={`${classes.TituloHabilidades} ${classes.TextoNegritas}`}>HARD</Typography>
                                    <Typography className={classes.PuntosHabilidades}>Punto 1</Typography>
                                </Box>
                            </Box>
                            <Box display="flex" >
                                <Box flexGrow={1} className={classes.Dentro}>
                                <Typography className={`${classes.TituloHabilidades} ${classes.TextoNegritas}`}>TOOLS</Typography>
                                    <Typography className={classes.PuntosHabilidades}>Punto 1</Typography>
                                </Box>
                                <Box flexGrow={1} className={classes.Dentro}>
                                <Typography className={`${classes.TituloHabilidades} ${classes.TextoNegritas}`}>FRAMEWORK</Typography>
                                    <Typography className={classes.PuntosHabilidades}>Punto 1</Typography>
                                </Box>
                            </Box>
                        </Container>
                    </div>
                </div>{/* Termina Contenido de Curriculum */}
            </div>
        </div>
    )
}

export default Curriculum
