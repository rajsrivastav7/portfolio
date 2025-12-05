import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-2 px-6 md:px-10 bg-[#F0EFE6]/90 backdrop-blur-sm border-b border-[#1D1D1F]/5">
      
      {/* BRAND */}
      <Link href="/" className="font-mono text-lg md:text-xl font-bold tracking-tight text-[#1D1D1F] hover:opacity-70 transition-opacity">
        Raj // WebDev // AI
      </Link>

      {/* LINKS */}
      <div className="hidden md:flex gap-8 font-serif text-lg font-medium tracking-tight text-[#1D1D1F]">
        <Link href="/" className="hover:underline underline-offset-4 decoration-1">Home</Link>
        
        {/* FIXED: Changed href from '/projects' to '/experience' */}
        <Link href="/experience" className="hover:underline underline-offset-4 decoration-1">Experience</Link>
        
        <Link href="/projects" className="hover:underline underline-offset-4 decoration-1">Projects</Link>
        <Link href="/articles" className="hover:underline underline-offset-4 decoration-1">Articles</Link>
        <Link href="/about" className="hover:underline underline-offset-4 decoration-1">About</Link>
        <Link href="/contact" className="hover:underline underline-offset-4 decoration-1">Contact</Link>
      </div>

    </nav>
  );
}