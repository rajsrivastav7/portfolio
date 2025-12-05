export default function About() {
  return (
    <main className="min-h-screen pt-32 px-6 md:px-10 bg-background text-[#1D1D1F] pb-20">
      
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tighter mb-12">
          About Me.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-12 items-start">
          
          {/* LEFT COLUMN: Bio & Skills */}
          <div>
            {/* Main Bio */}
            <div className="font-sans text-lg md:text-xl leading-relaxed space-y-8 text-justify opacity-90 mb-16">
              <p>
                I am Raj Srivastav, a full-stack and MERN-stack web developer and AI & Automation Engineer based in Gurgaon, India. I care about building systems that are both elegant and reliable—software that looks simple on the surface but hides a lot of careful engineering underneath.
              </p>
              <p>
              At Inspektlabs, I worked as a Software Intern on a production vehicle-inspection platform, where I built Python/Flask APIs, designed the MySQL database, and shipped an admin dashboard through CI/CD pipelines used by real automotive clients. At DRDO, I shifted gears into research, learning about RF measurements and studying technologies like Quantum Key Distribution—work that taught me how to be precise with data, documentation, and experiments.
              </p>
              <p>
               Most of my free time goes into projects that combine AI, automation, and finance. I have built an AI procurement negotiator that uses game theory and reinforcement learning to run end-to-end INR negotiations, a RAGOps “control tower” that reuses past answers and cuts model spend, a Monte Carlo portfolio engine for optimal stock allocation, a risk-based loan pricing optimiser with an executive Power BI view, and a website performance accelerator that improves load time and conversions, and much more. Each project is designed to be measurable in terms of savings, uplift, or reliability—not just “cool tech.”
              </p>
              <p>
                Beyond code, I led the Leaders of Tomorrow debate team at MIT Manipal and served on the IEEE student chapter management committee. Those experiences made me comfortable owning outcomes, working with diverse teams, and communicating complex ideas clearly. I am still early in my journey, but I am very serious about doing deep work, learning fast, and building products that actually move the needle for the business.
              </p>
            </div>

            {/* NEW SKILLSET SECTION - Consolas Bold */}
            <div className="border-t border-[#1D1D1F]/20 pt-8">
              <h3 className="font-mono text-sm uppercase tracking-widest mb-8 opacity-50">
                Skillset 
              </h3>
              
              <div className="space-y-8">
                
                {/* Languages */}
                <div>
                  <span className="font-mono text-sm uppercase tracking-widest mb-8 opacity-50">Languages:</span>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm uppercase tracking-wider">
                    <span>Python</span>
                    <span>SQL</span>
                    <span>JavaScript</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>C++</span>
                    <span>LaTeX</span>
                  </div>
                </div>

                {/* Frameworks */}
                <div>
                  <span className="font-mono text-sm uppercase tracking-widest mb-8 opacity-50">Frameworks & Libraries:</span>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm uppercase tracking-wider">
                    <span>Flask</span>
                    <span>FastAPI</span>
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>React</span>
                    <span>Angular</span>
                    <span>Pandas</span>
                    <span>NumPy</span>
                    <span>Nashpy</span>
                    <span>Scikit-learn</span>
                    <span>Streamlit</span>
                    <span>Plotly Dash</span>

                  </div>
                  
                </div>

                {/* AI & Tools */}
                <div>
                  <span className="font-mono text-sm uppercase tracking-widest mb-8 opacity-50">Databases & Tools:</span>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm uppercase tracking-wider">
                    <span>MySQL</span>
                    <span>MongoDB</span>
                    <span>Zapier</span>
                    <span>Tavily</span>
                    <span>Airtable</span>
                    <span>n8n</span>
                    <span>LangChain</span>
                    <span>LangGraph</span>
                    <span>Power BI</span>
                    <span>CI/CD</span>
                    <span>Git</span>
                  </div>
                </div>
                  <div>
                  <span className="font-mono text-sm uppercase tracking-widest mb-8 opacity-50">AI & ML:</span>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm uppercase tracking-wider">
                    <span>Generative AI</span>
                    <span>Retrieval-Augmented Generation (RAG)</span>
                    <span>Embeddings</span>
                    <span>Agentic AI</span>
                    <span>Automation</span>
                    <span>Reinforcement Learning (RL)</span>
                    <span>Vector Search</span>
                    <span>FAISS</span>
                  
                  </div>
                </div>
                  <div>
                  <span className="font-mono text-sm uppercase tracking-widest mb-8 opacity-50">Softskills:</span>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm uppercase tracking-wider">
                    <span>Effective Communication</span>
                    
                  </div>
                </div>                

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Side Details */}
          <div className="font-mono text-xs space-y-6 border-l border-[#1D1D1F]/20 pl-6 sticky top-32">
            <div>
              <strong className="block uppercase tracking-widest mb-1 opacity-50">Location</strong>
              Gurgaon, India
            </div>
            <div>
              <strong className="block uppercase tracking-widest mb-1 opacity-50">Education</strong>
              B.Tech EEE<br/>MIT Manipal
            </div>
            <div>
              <strong className="block uppercase tracking-widest mb-1 opacity-50">Focus</strong>
              AI & Automation<br/>Web Development<br/>Analytics
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}