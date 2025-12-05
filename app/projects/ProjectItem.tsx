'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProjectItem({ 
  id, 
  title, 
  category, 
  description, 
  image, 
  children 
}: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className="group cursor-pointer border-b border-[#1D1D1F]/20 pb-12"
    >
      {/* 1. HEADER */}
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tighter hover:opacity-70 transition-opacity duration-300">
          {title}
        </h2>
        <div className="flex items-center gap-4">
           <span className="font-mono text-xs border border-[#1D1D1F] px-2 py-1 rounded-full">
            {category}
          </span>
          <span className="font-mono text-xl">
            {isOpen ? "−" : "+"}
          </span>
        </div>
      </div>

      {/* 2. DESCRIPTION (Strictly closed here) */}
      <p className="font-sans text-lg opacity-70 max-w-lg leading-relaxed">
        {description}
      </p>

      {/* 3. EXPANDABLE CONTENT (Separate sibling, not child) */}
      <div 
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-10' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
      >
        <div className="overflow-hidden cursor-default" onClick={(e) => e.stopPropagation()}>
          
          {/* Markdown Content Wrapper */}
          <div className="font-serif text-xl leading-relaxed text-justify opacity-90 w-full mb-12 space-y-6">
            {children}
          </div>

          {/* Image */}
          {image && (
             <div className="relative h-[400px] w-full bg-[#E4E2D5] border border-[#1D1D1F]/10 rounded-sm overflow-hidden flex items-center justify-center">
               <Image 
                 src={image} 
                 alt={title} 
                 width={800} 
                 height={400}
                 className="object-cover w-full h-full opacity-90"
               />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}