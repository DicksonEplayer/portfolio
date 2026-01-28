
import React from 'react';

const AboutPage: React.FC = () => {
  const skills = ['Python (Pandas, NumPy, Scikit-learn)', 'SQL', 'R', 'Power BI', 'Tableau', 'Excel', 'Statistical Analysis', 'Machine Learning'];

  return (
    <div className="animate-fade-in">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <img 
              src="https://photos.app.goo.gl/DQ1cUKAxyKt6bSeGA" 
              alt="Ainamani Dickson"
              className="rounded-full h-48 w-48 md:h-64 md:w-64 object-cover border-4 border-primary shadow-md"
            />
          </div>
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Hi, I'm Ainamani Dickson
            </h1>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              A Passionate Data Analyst
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I transform complex data into actionable insights. With a keen eye for detail and a love for storytelling through numbers, I help businesses make smarter, data-driven decisions. My expertise lies in statistical analysis, machine learning, and creating intuitive data visualizations that bring clarity to complex datasets.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether it's predicting market trends, optimizing business processes, or uncovering hidden patterns, I am dedicated to leveraging data to solve real-world problems.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-3xl font-bold text-center text-dark mb-8">My Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white text-secondary font-medium px-4 py-2 rounded-full shadow-sm border border-blue-100">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
