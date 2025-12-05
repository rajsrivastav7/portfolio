export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-12 px-6 bg-background pt-20">
      
      {/* MAIN HEADING - The "Ollivere" Style */}
      <div className="text-center space-y-2">
        <h1 className="font-serif text-7xl md:text-9xl font-medium tracking-tighter leading-[0.9] text-[#1D1D1F]">
          Raj Srivastav<br /> Portfolio.
        </h1>
        
        <p className="font-serif text-xl md:text-2xl italic opacity-80 mt-4">
          
        </p>
      </div>

      <p className="font-sans text-lg md:text-xl max-w-xl text-center leading-relaxed opacity-80 text-[#333]">
        Greetings, <br />I am Raj, a B Tech grad from MIT Manipal.<br />I am a web developer and AI & Automation Engineer.
        <br />
        NOTE: This website is currently underconstuction.
      </p>

      {/* THE RESUME BUTTON */}
      {/* logic: downloads 'resume.pdf' from your public folder */}
      <a 
        href="/Raj_Srivastav_Resume.pdf" 
        download="Raj_Srivastav_Resume.pdf"
        className="group relative px-8 py-4 bg-transparent border-2 border-[#1D1D1F] font-mono text-sm uppercase tracking-widest hover:bg-[#1D1D1F] hover:text-[#F0EFE6] transition-all duration-300 cursor-pointer"
      >
        Download Résumé
      </a>

    </main>
  );
}