'use client';

import { useState } from "react";
import { IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Home as HomeIcon,
  Work as WorkIcon,
  ContactMail as ContactIcon,
  // Devices as DevicesIcon,
  Info as InfoIcon
} from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";



export const ExpandableSideMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const closeMenu = () => {
    setIsExpanded(false);
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, link: "/" },
    { text: "Projects", icon: <WorkIcon />, link: "/projects" },
    { text: "Contact", icon: <ContactIcon />, link: "/contact" },
    // { text: "Platforms", icon: <DevicesIcon />, link: "/platforms" },
    { text: "About Me", icon: <InfoIcon />, link: "/about-me" },
  ];

  const pathname = usePathname();

  return (
    <div>
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu} // Cierra el menú al hacer clic fuera
        />
      )}

      <div
        className={`fixed top-0 left-0 h-screen bg-background-primary transition-all duration-300 z-50 ${isExpanded ? "w-64" : "w-16"
          }`}
      >
        <div className="flex justify-end p-2 mb-4 bg-card-base">
          <IconButton
            className="text-text-base bg-button-primary hover:bg-button-primary-hover"
            onClick={toggleMenu}
          >
            {isExpanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <List>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              onClick={isExpanded ? toggleMenu : () => { }}
            >
              <ListItem
                className={`hover:bg-button-primary-hover text-text-base mb-6 cursor-pointer 
                  ${pathname === item.link && 'bg-button-primary'}
                  `}
              >
                <ListItemIcon className="text-text-base">{item.icon}</ListItemIcon>
                {isExpanded && <ListItemText primary={item.text} />}
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </div>
  );
};
