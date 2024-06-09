
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import {setToken} from "@/redux/slices/token";
import {useDispatch} from "react-redux";

const ProfileDropdown = () => {
    const dispatch=useDispatch()
    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(setToken(null))
        window.location.reload();
    }
    return (
        <>
            <Menu className="relative inline-block text-left">
                <MenuHandler>
                    <button
                        type="button"
                        className="flex w-10 h-10 items-center bg-primary bg-opacity-10 rounded-full p-1"
                    >
                        <Image
                            src="/img/user.png"
                            className="object-cover rounded-full aspect-square w-full"
                            alt=""
                            width={32}
                            height={32}
                        />
                    </button>
                </MenuHandler>
                <MenuList className="w-[200px] p-3 bg-section border-none shadow-none">
                    <MenuItem className="py-1">
                        <Link href="/" className="flex gap-2 text-[16px] font-[500] items-center">
                            Profile
                        </Link>
                    </MenuItem>
                    <MenuItem className="py-1">
                        <Link href="/event" className="flex gap-2 text-[16px] font-[500] items-center">
                            Creat Event
                        </Link>
                    </MenuItem>
                    <MenuItem className="text-[16px] font-[500]" onClick={handleLogout}>
                        Logout
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    );
};

export default ProfileDropdown;
