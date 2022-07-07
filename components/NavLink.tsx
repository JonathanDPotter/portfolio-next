import React, { FC, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Iprops {
  to: string;
  className: string;
  activeClassName: string;
  children: ReactNode;
}

const NavLink: FC<Iprops> = ({ to, className, activeClassName, children }) => {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    router.pathname === to ? setIsActive(true) : setIsActive(false);
  }, []);

  return (
    <div className={isActive ? `${className} ${activeClassName}` : className}>
      <Link href={to} tabIndex={isActive ? 0 : -1}>
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
