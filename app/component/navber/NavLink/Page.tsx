import Link from 'next/link';
import React, { ReactNode } from 'react';
// Props এর জন্য একটি Interface
interface NavLinkProps{
    href:string;
    children:ReactNode;
}
const NavLink = ({href,children}:NavLinkProps) => {
    return (
        <div>
            <Link href={href}>{children}</Link>
        </div>
    );
};

export default NavLink;