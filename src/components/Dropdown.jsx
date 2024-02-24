import React, { useState } from 'react';

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={toggleMenu}
                className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                Playlists
            </button>
            {isOpen && (
                <ul
                    role="menu"
                    className="absolute z-10 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
                >
                    <li
                        role="menuitem"
                        className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                    >
                        Menu Item 1
                    </li>
                </ul>
            )}
        </div>
    );
}

export default DropdownMenu;


// import React from "react";
// // import { ChevronUpIcon } from "@heroicons/react/24/solid";
// import {
//     Menu,
//     MenuHandler,
//     MenuList,
//     MenuItem,
//     Button,
// } from "@material-tailwind/react";

// export default function NestedMenu() {
//     const [openMenu, setOpenMenu] = React.useState(false);

//     return (
//         <Menu>
//             <MenuHandler>
//                 <Button> Menu</Button>
//             </MenuHandler>
//             <MenuList>
//                 <MenuItem>Menu Item 1</MenuItem>
//                 <MenuItem>Menu Item 2</MenuItem>
//                 <Menu
//                     placement="right-start"
//                     open={openMenu}
//                     handler={setOpenMenu}
//                     allowHover
//                     offset={15}
//                 >
//                     <MenuHandler className="flex items-center justify-between">
//                         <MenuItem>
//                             Nested Item
//                             {/* <ChevronUpIcon
//                                 strokeWidth={2.5}
//                                 className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-90" : ""
//                                     }`}
//                             /> */}
//                         </MenuItem>
//                     </MenuHandler>
//                     <MenuList>
//                         <MenuItem>Nested Item 1</MenuItem>
//                         <MenuItem>Nested Item 2</MenuItem>
//                         <MenuItem>Nested Item 3</MenuItem>
//                     </MenuList>
//                 </Menu>
//                 <MenuItem>Menu Item 3</MenuItem>
//             </MenuList>
//         </Menu>
//     );
// }