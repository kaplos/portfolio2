'use client'

import NavBar from './NavBar';

export default function NavBarLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}