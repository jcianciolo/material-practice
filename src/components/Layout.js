import { 
    Drawer, makeStyles, Typography, 
    List, ListItem, ListItemIcon, ListItemText
    } from '@material-ui/core'
import React from 'react'

const drawerWidth = 240

const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    root: {
        display: 'flex'
    }
})

const Layout = ({ children }) => {
    const classes = useStyles()
    
    return (
        <div className={classes.root}>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant="h5">
                        Notes
                    </Typography>
                </div>

                <List>
                    <ListItem>
                        <ListItemText primary="Hello!" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello!" />
                    </ListItem>
                </List>
            </Drawer>

            <div className={classes.page}>
                { children }
            </div>
        </div>
    )
}

export default Layout
