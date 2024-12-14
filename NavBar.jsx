import React from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import { RiShoppingBag3Fill } from "react-icons/ri";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SearchBar from "../../components/layout/SearchBar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import Cart from './Cart'

const NavBar = () => {
  return (
    <header className="bg-white">
      <div className=" mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500">Beauti<span className="text-purple-500 bg-gray-50">fy</span></h2>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="sm:flex sm:gap-4">
              <div className="flex gap-4 mt-3 items-center justify-center">
                <SearchBar />
              </div>
              <div className="flex gap-4 mt-3 items-center justify-center bg-gray-100 w-10 h-10 rounded-full mb-3">
                <Stack spacing={2} direction="row">
                  <Badge badgeContent={4} color="secondary">
                    <Tooltip title="Cart">
                      <IconButton>
                         <Cart/>
                      </IconButton>
                    </Tooltip>
                  </Badge>
                </Stack>
              </div>
              <div className="flex gap-4 items-center mx-5">
                <div className="flex items-center gap-4">
                  <Dropdown placement="bottom-start">
                    <DropdownTrigger>
                      <User
                        as="button"
                        avatarProps={{
                          isBordered: true,
                          src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                        }}
                        className="transition-transform"
                        description="@tonyreichert"
                        name="Tony Reichert"
                      />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="User Actions" variant="flat">
                      <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-bold">Signed in as</p>
                        <p className="font-bold">@tonyreichert</p>
                      </DropdownItem>
                      <DropdownItem key="settings">Admin Dashbord</DropdownItem>
                      <DropdownItem key="notifications">
                        Notifications
                      </DropdownItem>

                      <DropdownItem key="team_settings">
                        <Link to="register"> Sign Up</Link>
                      </DropdownItem>
                      <DropdownItem key="team_settings">
                        <Link to="login">Login</Link>
                      </DropdownItem>
                      <DropdownItem key="help_and_feedback">
                        Help & Feedback
                      </DropdownItem>
                      <DropdownItem
                        className="text-red-500"
                        key="logout"
                        color="danger"
                      >
                        Log Out
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="block md:hidden mx-52">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
