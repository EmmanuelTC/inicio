import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    TextoDrawer: {
        color: '#ffffff',
    },
    list: {
/*        backgroundColor:'grey',
        borderRightWidth:'10px',
        borderStyle:'solid',
        borderWidth:'0px',
        borderRightColor:'#000000',*/
        width: 250,
        color: '#ffffff',
        fontWeight:'bold'
    },
    fullList: {
        width: 'auto',
    },
    paper: {
        background: 'black',
        borderRightWidth:'10px',
        borderStyle:'solid',
        borderWidth:'0px',
        borderRightColor:'#ffffff',
    }
});

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem component={Link} to="/" button selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                    <ListItemIcon><InboxIcon style={{ color: 'white' }}/></ListItemIcon>
                    <ListItemText primary="Inicio" />
                </ListItem>
                <ListItem component={Link} to="/curriculum" button selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
                    <ListItemIcon><MailIcon style={{ color: 'white' }}/></ListItemIcon>
                    <ListItemText primary="Curriculum" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem component={Link} to="/proximamente" button selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
                    <ListItemIcon><InboxIcon style={{ color: 'white' }}/></ListItemIcon>
                    <ListItemText primary="Proximamente" />
                </ListItem>
                <ListItem component={Link} to="/contacto" button selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
                    <ListItemIcon><MailIcon style={{ color: 'white' }}/></ListItemIcon>
                    <ListItemText primary="Contacto" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.TextoDrawer}>

                <React.Fragment key={"left"}>
                    <Button className={classes.TextoDrawer} onClick={toggleDrawer("left", true)}><MenuIcon />{""}</Button>
                    <SwipeableDrawer
                        classes={{ paper: classes.paper }}
                        anchor="left"
                        open={state["left"]}
                        onClose={toggleDrawer("left", false)}
                        onOpen={toggleDrawer("left", true)}
                    >
                        {list("left")}
                    </SwipeableDrawer>
                </React.Fragment>

{/*
                <React.Fragment key={"right"}>
                    <Button className={classes.TextoDrawer} onClick={toggleDrawer("right", true)}><MenuIcon />{""}</Button>
                    <SwipeableDrawer
                        anchor="right"
                        open={state["right"]}
                        onClose={toggleDrawer("right", false)}
                        onOpen={toggleDrawer("right", true)}
                    >
                        {list("right")}
                    </SwipeableDrawer>
                </React.Fragment>
                
                <React.Fragment key={"top"}>
                    <Button className={classes.TextoDrawer} onClick={toggleDrawer("top", true)}><MenuIcon />{""}</Button>
                    <SwipeableDrawer
                        anchor="top"
                        open={state["top"]}
                        onClose={toggleDrawer("top", false)}
                        onOpen={toggleDrawer("top", true)}
                    >
                        {list("top")}
                    </SwipeableDrawer>
                </React.Fragment>

                <React.Fragment key={"bottom"}>
                    <Button className={classes.TextoDrawer} onClick={toggleDrawer("bottom", true)}><MenuIcon />{""}</Button>
                    <SwipeableDrawer
                        anchor="bottom"
                        open={state["bottom"]}
                        onClose={toggleDrawer("bottom", false)}
                        onOpen={toggleDrawer("bottom", true)}
                    >
                        {list("bottom")}
                    </SwipeableDrawer>
                </React.Fragment>
*/}

            {/*
            {['left', 'right', 'top', 'bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button className={classes.TextoDrawer} onClick={toggleDrawer(anchor, true)}><MenuIcon />{anchor}</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
            */}
        </div>
    );
}
