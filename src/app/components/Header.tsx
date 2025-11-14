"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-red-600" onClick={closeMenu}>
        MovieFlix
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 text-white font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} color="#fff" /> : <FaBars size={24} color="#fff" />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link href="/" onClick={closeMenu} className="text-white text-lg">
            Home
          </Link>
          <Link href="/about" onClick={closeMenu} className="text-white text-lg">
            About
          </Link>
          <Link href="/contact" onClick={closeMenu} className="text-white text-lg">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
