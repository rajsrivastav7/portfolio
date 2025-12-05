'use client'; // Required for the menu interaction

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  // State to track if the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F0EFE6]/90 backdrop-blur-sm border-b border-[#1D1D1F]/5">
      
      {/* MAIN BAR */}
      <div className="flex justify-between items-center py-2 px-6 md:px-10">
        
        {/* BRAND */}
        <Link href="/" className="font-mono text-lg md:text-xl font-bold tracking-tight text-[#1D1D1F] hover:opacity-70 transition-opacity">
          Raj // WebDev // AI
        </Link>

        {/* DESKTOP LINKS (Hidden on mobile) */}
        <div className="hidden md:flex gap-8 font-serif text-lg font-medium tracking-tight text-[#1D1D1F]">
          <Link href="/" className="hover:underline underline-offset-4 decoration-1">Home</Link>
          <Link href="/experience" className="hover:underline underline-offset-4 decoration-1">Experience</Link>
          <Link href="/projects" className="hover:underline underline-offset-4 decoration-1">Projects</Link>
          <Link href="/articles" className="hover:underline underline-offset-4 decoration-1">Articles</Link>
          <Link href="/about" className="hover:underline underline-offset-4 decoration-1">About</Link>
          <Link href="/contact" className="hover:underline underline-offset-4 decoration-1">Contact</Link>
        </div>

        {/* MOBILE MENU BUTTON (Visible on phone only) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden font-mono text-xs font-bold uppercase tracking-widest border border-[#1D1D1F] px-4 py-2 rounded-sm hover:bg-[#1D1D1F] hover:text-[#F0EFE6] transition-colors"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* MOBILE DROPDOWN (Visible only when open) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F0EFE6] border-b border-[#1D1D1F]/10 flex flex-col items-center py-8 gap-6 shadow-lg animate-in slide-in-from-top-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="font-serif text-2xl hover:italic">Home</Link>
          <Link href="/experience" onClick={() => setIsOpen(false)} className="font-serif text-2xl hover:italic">Experience</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="font-serif text-2xl hover:italic">Projects</Link>
          <Link href="/articles" onClick={() => setIsOpen(false)} className="font-serif text-2xl hover:italic">Articles</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="font-serif text-2xl hover:italic">About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="font-serif text-2xl hover:italic">Contact</Link>
        </div>
      )}

    </nav>
  );
}