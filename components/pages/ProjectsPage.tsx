
import React from 'react';
import { PROJECTS } from '../../constants';
import ProjectCard from '../ProjectCard';

const ProjectsPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-dark">My Projects</h1>
        <p className="mt-4 text-lg text-gray-600">A selection of my work in data analysis and visualization.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
