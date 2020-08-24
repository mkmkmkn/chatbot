import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Questioner from '../assets/img/questioner.jpg'
import Mk from '../assets/img/mk.jpg'


const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

    return (
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="icon" src={Mk} />
                ) : (
                    <Avatar alt="icon" src={Questioner} />
                )}
            </ListItemAvatar>
            <div className="p-chat__bubble" >{props.text}</div>
        </ListItem>
    )
}

export default Chat;