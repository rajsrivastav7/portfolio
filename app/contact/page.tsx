export default function Contact() {
  return (
    <main className="min-h-screen pt-32 px-6 md:px-10 bg-background text-[#1D1D1F] flex flex-col justify-between pb-20">
      
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tighter mb-8">
          Let us Connect.
        </h1>
        <p className="font-sans text-xl opacity-80 max-w-xl">
          I am currently open for full-time roles in AI & Automation, Web Development, Consulting, Data Analytics, Business Analytics, Research.
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <div className="border-t border-[#1D1D1F] pt-8">
          <p className="font-mono text-sm uppercase tracking-widest mb-4 opacity-50">
            Email Me
          </p>
          <a 
            href="mailto:mail4rajsrivastav@gmail.com" 
            className="font-serif text-3xl md:text-5xl transition-all decoration-1 hover:underline underline-offset-8 break-all"
          >
            mail4rajsrivastav@gmail.com
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 font-mono text-sm uppercase tracking-widest">
          <a href="https://linkedin.com/in/rajsr" target="_blank" className="hover:underline">LinkedIn ↗</a>
          <a href="https://github.com/rajsrivastav7" target="_blank" className="hover:underline">GitHub ↗</a>
          
        </div>
      </div>

    </main>
  );
}