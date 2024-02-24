import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideComponent from "./SideComponent";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import axios from "axios";



export function DrawerDefault() {
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    // axios.get(`/api/v1/playlist/user/:65cf5fdbcae2c9090e293434`)

    return (

        <React.Fragment>

            <Button color="deep-purple" onClick={openDrawer}><FontAwesomeIcon icon={faBars} size="xl" /></Button>
            <Drawer open={open} onClose={closeDrawer} className="p-4 h-max">
                <div className="mb-6 flex items-center justify-between">
                    <Button onClick={closeDrawer}><FontAwesomeIcon icon={faBars} size="xl" /></Button>
                    <Typography color="gray" variant="h5">Menu</Typography>

                </div>
                <Link to="/"> <SideComponent name={"Home"} /> </Link>
                <Link to="liked-videos"> <SideComponent name={"Liked videos"} /> </Link>
                <Link to="History"> <SideComponent name={"History"} /> </Link>
                <Link to="my videos"> <SideComponent name={"My videos"} /> </Link>
                <Dropdown />
                {/* <Link to="playlists"> <SideComponent name={"Playlists"} /> </Link> */}

            </Drawer>
        </React.Fragment>
    );
}