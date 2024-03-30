import React from 'react';
import { slide as Menuu } from 'react-burger-menu';
import { MenuItem, SubMenu, Menu } from 'react-pro-sidebar';

export default function Slider() {
    return (
        <>
        
            <Menuu>
            <div style={{background:"#232f3f" , padding:"20px"}}> 

                    <h6 style={{color:"white"}}>Hello , Signin</h6>


                </div>
                <Menu>
                    <div style={{ borderTop: "1px solid #e6e8e8" }}>
                        <p>Digital Content & Devices</p>
                        <SubMenu label="Amazon Music" style={{ color: "#696969" }}>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                        <SubMenu label="Kindle E-readers & Books" style={{ color: "#696969" }}>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                        <SubMenu label="Amazon AppStore " style={{ color: "#696969" }}>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>

                    </div>
                    <div style={{ borderTop: "1px solid #e6e8e8" }}>
                        <p>Shop By Department</p>
                        <SubMenu label="Amazon Music" style={{ color: "#696969" }}>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                        <SubMenu label="Kindle E-readers & Books" style={{ color: "#696969" }}>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                        <SubMenu label="Amazon AppStore " style={{ color: "#696969" }}>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>

                    </div>
                    <div style={{ borderTop: "1px solid #e6e8e8" }}>
                        <p>Programs & Features</p>
                        <SubMenu label="Amazon Music" style={{ color: "#696969" }}>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                        <SubMenu label="Kindle E-readers & Books" style={{ color: "#696969" }}>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                        <SubMenu label="Amazon AppStore " style={{ color: "#696969" }}>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>

                    </div>
                    <div style={{ borderTop: "1px solid #e6e8e8" }}>
                        <p>Help & Setting</p>
                        <SubMenu label="Amazon Music" style={{ color: "#696969" }}>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                        <SubMenu label="Kindle E-readers & Books" style={{ color: "#696969" }}>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                        <SubMenu label="Amazon AppStore " style={{ color: "#696969" }}>
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>

                    </div>


                </Menu>
            </Menuu>
        </>
    );
};