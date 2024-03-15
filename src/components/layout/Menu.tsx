"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { ArrowRight, MenuIcon } from 'lucide-react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const BREEEW_LINK = "https://insightpal.breeew.com/sign-in"


const Menu = () => {
    /*
        Hamburger menu on small screens, full nav on larger screens
    */

    const [showMenu, setShowMenu] = useState(false);
    const hideMenu = () => setShowMenu(false);
    return (
        <nav>
            <div className="p-4 hidden lg:flex flex-row items-center gap-6 font-semibold">
                <Link href="#benefits" className="nav-link">Benefits</Link>
                <Link href="#recent-work" className="nav-link">Recent work</Link>
                <Link href="#compare-us" className="nav-link">Compare us</Link>
                <Link href="#pricing" className="nav-link">Pricing</Link>
                <Link href="#the-faqs" className="nav-link">FAQs</Link>
                <Link target="_blank" href={BREEEW_LINK} className="nav-link">Log in</Link>
                <Link href="#pricing" className="p-2 bg-primary text-primary-foreground px-7 border-border rounded-full flex flex-row gap-2 hover:bg-accent hover:text-accent-foreground transition-all ring-accent hover:ring-[5px]">View Plans</Link>
            </div>
            <Popover open={showMenu} onOpenChange={setShowMenu}>
                <PopoverTrigger asChild>
                    <div
                        // onClick={() => setShowMenu(!showMenu)}
                        className="lg:hidden p-6 cursor-pointer"
                    >
                        <MenuIcon height={20} width={20} color={showMenu ? "hsl(var(--primary))" : "black"} strokeWidth={3} />
                    </div>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] flex flex-col gap-5 text-right p-7">
                    <Link onClick={hideMenu} href="#benefits" className="font-semibold text-md hover:text-muted-foreground">Benefits</Link>
                    <Link onClick={hideMenu} href="#recent-work" className="font-semibold text-md hover:text-muted-foreground">Recent work</Link>
                    <Link onClick={hideMenu} href="#compare-us" className="font-semibold text-md hover:text-muted-foreground">Compare us</Link>
                    <Link onClick={hideMenu} href="#pricing" className="font-semibold text-md hover:text-muted-foreground">Pricing</Link>
                    <Link onClick={hideMenu} href="#the-faqs" className="font-semibold text-md hover:text-muted-foreground">FAQs</Link>
                    {/* <Link target="_blank" href={BREEEW_LINK} className="font-semibold text-md hover:text-muted-foreground">Log in</Link> */}
                    <Link onClick={hideMenu} target="_blank" href={BREEEW_LINK} className="font-semibold text-md hover:text-muted-foreground">Log in</Link>
                    <Link onClick={hideMenu} href="#pricing" className="p-2 bg-primary text-primary-foreground px-7 border-border rounded-full flex flex-row gap-2 hover:bg-accent hover:text-accent-foreground transition-all ring-accent hover:ring-[5px]">View Plans</Link>

                </PopoverContent>
            </Popover>
        </nav>
    )
}

export default Menu