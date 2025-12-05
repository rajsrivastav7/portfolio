export default function Articles() {
  return (
    // LAYOUT: Locked to screen height (h-screen), centered content, no scrollbar.
    // Matches the exact "app-like" feel of your Home page.
    <main className="h-screen w-full overflow-hidden flex flex-col items-center justify-center gap-12 px-6 bg-background pt-20">
      
      <div className="text-center space-y-6">
        {/* BIG HEADING - Lora Font */}
        <h1 className="font-serif text-7xl md:text-9xl font-medium tracking-tighter leading-[0.9] text-[#1D1D1F]">
          Writing.
        </h1>
        
        {/* SUBTEXT - Helvetica Font */}
        <p className="font-sans text-lg md:text-xl max-w-xl text-center leading-relaxed opacity-80 text-[#333]">
          I try to put words to my thoughts and put it in front of others to like or scrutinise.<br/> I read and I write.<br className="hidden md:block" />
        
        </p>
      </div>

      {/* BRUTALIST BUTTON - Same style as Resume button, but links to Medium */}
      <a 
        href="https://medium.com/@rajsrivastav_" // Replace with your actual Medium profile URL later
        target="_blank"
        rel="noopener noreferrer"
        className="group relative px-8 py-4 bg-transparent border-2 border-[#1D1D1F] font-mono text-sm uppercase tracking-widest hover:bg-[#1D1D1F] hover:text-[#F0EFE6] transition-all duration-300 cursor-pointer"
      >
        Read on Medium ↗
      </a>

    </main>
  );
}