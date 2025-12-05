import { getProjects } from '../lib/mdx';
import ProjectItem from './ProjectItem';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function Projects() {
  const projects = getProjects();

  return (
    <main className="min-h-screen pt-32 px-6 md:px-10 bg-background text-[#1D1D1F] pb-20">
      
      {/* HEADER */}
      <div className="mb-20 border-b border-[#1D1D1F] pb-6 max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tighter">
          Selected Works
        </h1>
        <p className="font-mono text-sm mt-4 uppercase tracking-widest opacity-60">
          Directory // 2024-2025
        </p>
      </div>

      {/* PROJECT LIST */}
      <div className="flex flex-col gap-12 w-full max-w-7xl mx-auto">
        {projects.map((project: any) => (
          <ProjectItem key={project.id} {...project}>
            
            {/* TYPOGRAPHY FIX: 
                1. font-sans: Sets the body text to Helvetica.
                2. prose-headings:font-serif: Forces H1, H2, H3 back to Lora.
            */}
            <div className="prose prose-lg max-w-none font-sans prose-headings:font-serif prose-headings:font-medium prose-p:opacity-90 prose-li:opacity-90 text-justify">
               <MDXRemote source={project.content} />
            </div>

          </ProjectItem>
        ))}
      </div>

    </main>
  );
}