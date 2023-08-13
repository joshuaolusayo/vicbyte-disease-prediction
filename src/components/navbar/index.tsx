"use client";

import Link from "next/link";

type NavLinkProps = {
  name: string;
  url?: string;
};

const NavLink = ({ name, url = "#" }: NavLinkProps) => (
  <Link className="text-lg" href={url}>
    {name}
  </Link>
);

const NavBar = () => {
  return (
    <>
      <div className="flex space-x-8 justify-center items-center py-6 md:py-8 border-b-2">
        <NavLink name="Homepage" url="/" />
        <NavLink name="Predict" url="#" />
        <NavLink name="About" url="#" />
      </div>
    </>
  );
};

export default NavBar;
