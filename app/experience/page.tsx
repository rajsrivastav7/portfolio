export default function Experience() {
  const roles = [
    {
      company: "Inspektlabs, Inc.",
      role: "Software Intern",
      date: "Jan 2025 — May 2025",
      location: "Gurgaon / Remote",
      description: "Developed an Admin Dashboard for a Vehicle Inspection Platform from scratch, building Python/Flask APIs for automated damage assessment. Engineered the backend database using MySQL Workbench to handle large-scale real-time data processing."
    },
    {
      company: "DRDO (Ministry of Defence)",
      role: "Research Intern",
      date: "May 2024 — June 2024",
      location: "New Delhi, India",
      description: "Performed RF characterization on high-frequency devices (HEMTs). Studied and evaluated Quantum Key Distribution (QKD) systems and their critical role in secure communication through quantum cryptography."
    },
    {
      company: "MIT Manipal",
      role: "B.Tech EEE + Computing",
      date: "2021 — 2025",
      location: "Manipal, India",
      description: "Major in Electrical and Electronics Engineering and Minor in Computing. Head of Debate Team (Leaders of Tomorrow). Management Committee at IEEE Student Chapter."
    }
  ];

  return (
    <main className="min-h-screen pt-32 px-6 md:px-10 bg-background text-[#1D1D1F] pb-20">
      
      {/* HEADER */}
      <div className="mb-20 border-b border-[#1D1D1F] pb-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tighter">
          Experience
        </h1>
        <p className="font-mono text-sm mt-4 uppercase tracking-widest opacity-60">
          Career Trajectory
        </p>
      </div>

      {/* TIMELINE */}
      <div className="max-w-4xl mx-auto space-y-16">
        {roles.map((role, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-4">
            
            {/* Left Column: Date & Location */}
            <div className="font-mono text-sm opacity-60 pt-2 border-t md:border-t-0 md:border-l border-[#1D1D1F]/20 md:pl-6">
              <div className="font-bold">{role.date}</div>
              <div>{role.location}</div>
            </div>

            {/* Right Column: Role Details */}
            <div>
              <h3 className="font-serif text-3xl font-medium mb-1">
                {role.company}
              </h3>
              <div className="font-mono text-sm uppercase tracking-wider mb-6 opacity-80 bg-[#E4E2D5] inline-block px-2 py-1 rounded-sm">
                {role.role}
              </div>
              <p className="font-sans text-lg leading-relaxed opacity-80 max-w-xl text-justify">
                {role.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </main>
  );
}