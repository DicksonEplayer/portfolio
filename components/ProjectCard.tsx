
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const SourceCodeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col">
      <img className="w-full h-48 object-cover" src={project.imageUrl} alt={project.title} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-dark">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
                <span key={tag} className="bg-blue-100 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
            ))}
        </div>
        <p className="text-gray-600 text-sm flex-grow">{project.description}</p>
        <div className="mt-6 flex items-center space-x-4">
            {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                    <ExternalLinkIcon className="h-4 w-4 mr-2" />
                    Live Demo
                </a>
            )}
            {project.sourceUrl && (
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                    <SourceCodeIcon className="h-4 w-4 mr-2" />
                    Source Code
                </a>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
