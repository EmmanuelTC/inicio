import React from 'react'
//import Badge from '@material-ui/core/Badge'
//import { makeStyles, withStyles } from '@material-ui/core/styles'
//import { Avatar/*, Box*/ } from '@material-ui/core';
/*import { TwitchChat, TwitchPlayer } from 'react-twitch-embed';*/


/*const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#ff0000',
        color: '#ff0000',
        boxShadow: `0 0 0 7px #990000`,
        '&::after': {
            position: 'absolute',
            top: -1,
            left: -1,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '100%': {
            transform: 'scale(4.8)',
            opacity: 0,
        },
        '10%': {
            transform: 'scale(2.4)',
            opacity: 1,
        },
    },
}))(Badge);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    AvatarSize: {
        width: '100px',
        height: '100px'
    }
}));

const SmallAvatar = withStyles((theme) => ({
    root: {
        width: 40,
        height: 40,
        border: `2px solid ${theme.palette.background.paper}`,
    },
    badgeOffline: {
        backgroundColor: '#cccccc',
        color: '#cccccc',
        boxShadow: `0 0 0 7px #999999`,
        '&::after': {
            position: 'absolute',
            top: -1,
            left: -1,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    }
}))(Avatar);*/

const Curriculum = () => {
//    const classes = useStyles();
    return (
        <div>
            <div style={{ height: "10px", backgroundColor: "#ffffff" }} />
            <h1><code>Curriculum</code></h1>
{/*            <hr />
            <div>
                <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} variant="dot" >
                    <Badge overlap="circle" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} badgeContent={<SmallAvatar alt="NorsuisoSquad" src="https://avatars.githubusercontent.com/u/81671829" />} >
                        <Avatar className={classes.AvatarSize} alt="EmmanuelTC" src="https://static-cdn.jtvnw.net/jtv_user_pictures/04fc7ed0-e995-4d2a-82c0-e9bbc2b48dc2-profile_image-300x300.png" />
                    </Badge>
                </StyledBadge>

                <br /><br />
            </div>*/}
        </div>
    )
}

export default Curriculum
