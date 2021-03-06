import clsx from 'clsx';
import { Divider, Drawer, IconButton, List, useTheme } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useStyles } from '../hook/useStyles';
import { ITEMS_MENU } from '../../config/constants';
import ListItemLink from './ListItemLink';
import { useEffect, useState } from 'react';

const DrawerMenu = ({ open, handleDrawerClose }) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    let isMobile = width <= 768;

    return (
        <Drawer
            variant={isMobile ? 'temporary' : 'permanent'}
            classes={{
                paper: clsx(
                    classes.drawerPaper,
                    !open && classes.drawerPaperClose
                ),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />

            <List>
                {ITEMS_MENU(false, () => {}).map((item) => {
                    return (
                        <ListItemLink
                            to={item.path}
                            primary={item.text}
                            icon={item.icon}
                            key={item.id}
                        />
                        // <Link to={item.path} key={item.id}>
                        //    <ListItem
                        //       button
                        //       selected={item.path === location.pathname}
                        //    >
                        //       <ListItemIcon>{item.icon}</ListItemIcon>
                        //       <ListItemText primary={item.text} />
                        //    </ListItem>
                        // </Link>
                    );
                })}
            </List>
            <Divider />
        </Drawer>
    );
};

export default DrawerMenu;
