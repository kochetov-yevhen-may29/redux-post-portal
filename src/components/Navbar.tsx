import cn from "classnames";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <header className="container">
      <nav className="navbar max-w-7xl">
        <div className="navbar-start">
          <Link to='/' className="btn btn-ghost normal-case text-xl">Fortune</Link>
        </div>
        <div className="navbar-end">
          <NavLink 
            to='/home' 
            className={({ isActive }) => cn('btn mr-2', {
              'bg-red-500 pointer-events-none': isActive,
            })}
          >Home</NavLink>
          <ul className="menu menu-horizontal px-1">
            <li className="mr-2">
              <NavLink to='/sign-in'>Sign in</NavLink>
            </li>
            <li>
              <NavLink to='/sign-up'>Sign up</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <section className="h-28 flex flex-col items-center justify-center bg-stone-700">
        <h2 className="mb-2 text-3xl font-bold">Fortune</h2>
        <p className="font-thin">A place to share your knowledge</p>
      </section>
    </header>
  );
};
