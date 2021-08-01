import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {useDispatch, useSelector} from "react-redux";
import {collapse, expand} from "../redux/slices/drawerStateSlice";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function PapDrawer() {
    const classes = useStyles();
    const drawer = useSelector((state) => state.drawerState.value)
    const dispatch = useDispatch()

    const toggleDrawer = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        if(drawer){
            dispatch(collapse())
        }else{
            dispatch(expand())
        }
    };

    const menuItemList = () => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: false,
            })}
            role="presentation"
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <Drawer anchor={'left'}
                    open={drawer}
                    onClose={toggleDrawer()}>
                {menuItemList()}
            </Drawer>
        </div>
    );
}
