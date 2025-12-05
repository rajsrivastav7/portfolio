import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the path to your content folder
const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getProjects() {
  // 1. Get all file names inside content/projects
  const fileNames = fs.readdirSync(projectsDirectory);

  const allProjects = fileNames.map((fileName) => {
    // 2. Remove ".mdx" from file name to create the ID (e.g., "mark-ai")
    const id = fileName.replace(/\.mdx$/, '');

    // 3. Read the file contents
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 4. Parse the metadata (title, category) vs the content (text)
    const { data, content } = matter(fileContents);

    // 5. Return the combined data
    return {
      id,
      content,
      ...data,
    } as any;
  });

  // 6. Sort projects by date (Newest first)
  return allProjects.sort((a, b) => (a.date < b.date ? 1 : -1));
}