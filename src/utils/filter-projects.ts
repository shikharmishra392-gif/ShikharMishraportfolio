import { Project } from '../types';

export function filterProjects(
  projects: Project[],
  category: string,
  searchQuery: string = ''
): Project[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      category === 'all' ? true : project.category === category;

    if (!matchesCategory) return false;

    if (!query) return true;

    const inTitle = project.title.toLowerCase().includes(query);
    const inSubtitle = project.subtitle.toLowerCase().includes(query);
    const inDesc = project.description.toLowerCase().includes(query);
    const inTech = project.technologies.some((t) =>
      t.toLowerCase().includes(query)
    );

    return inTitle || inSubtitle || inDesc || inTech;
  });
}
