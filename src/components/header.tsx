"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const threshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= threshold) {
        setIsScrolled(false);
      } else if (currentScrollY > lastScrollY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl transition-transform duration-300 select-none ${
        isScrolled ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/min-logo.png"
              alt="Project Wavefront Logo"
              width={40}
              height={40}
            />
            <span className="ml-2 text-base font-bold tracking-[0.12em] sm:text-lg">
              PROJECT WAVEFRONT
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 text-sm font-medium tracking-[0.12em] md:flex">
            <Link
              href="/mark-i"
              className="hover:text-gray-400 hover:scale-105 transition duration-200"
            >
              MARK I
            </Link>
            <Link
              href="/mark-ii"
              className="hover:text-gray-400 hover:scale-105 transition duration-200"
            >
              MARK II
            </Link>
            <Link
              href="/our-team"
              className="hover:text-gray-400 hover:scale-105 transition duration-200"
            >
              TEAM
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-400 hover:scale-105 transition duration-200"
            >
              JOIN US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="space-y-4 border-t border-white/10 bg-black/95 py-4 text-center text-base tracking-[0.1em] backdrop-blur-xl md:hidden">
          <Link
            href="/mark-i"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-gray-400"
          >
            MARK I
          </Link>
          <Link
            href="/mark-ii"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-gray-400"
          >
            MARK II
          </Link>
          <Link
            href="/our-team"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-gray-400"
          >
            TEAM
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-gray-400"
          >
            JOIN US
          </Link>
        </div>
      )}
    </nav>
  );
}
