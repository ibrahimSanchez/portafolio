import {
    FaReact,
    FaNodeJs,
    FaWordpress,
    FaBootstrap,
    FaGitAlt,
    FaDatabase,
    FaPython,
} from 'react-icons/fa';

import {
    SiExpress,
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiTypescript,
    SiJavascript,
    SiVisualstudiocode,
    SiRedux,
} from 'react-icons/si';

export const TechnologiesSection: React.FC = () => {
    const technologies = [
        { name: 'React.js', icon: <FaReact size={40} className="text-blue-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs size={40} className="text-gray-600" /> },
        { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
        { name: 'Express.js', icon: <SiExpress size={40} className="text-yellow-500" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-teal-400" /> },
        { name: 'Bootstrap', icon: <FaBootstrap size={40} className="text-purple-500" /> },
        { name: 'WordPress', icon: <FaWordpress size={40} className="text-blue-600" /> },
        { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql size={40} className="text-blue-600" /> },
        { name: 'TypeScript', icon: <SiTypescript size={40} className="text-blue-500" /> },
        { name: 'JavaScript', icon: <SiJavascript size={40} className="text-yellow-500" /> },
        { name: 'Git', icon: <FaGitAlt size={40} className="text-red-500" /> },
        { name: 'Visual Studio Code', icon: <SiVisualstudiocode size={40} className="text-blue-600" /> },
        { name: 'SQL', icon: <FaDatabase size={40} className="text-gray-500" /> },
        { name: 'Redux', icon: <SiRedux size={40} className="text-purple-500" /> },
        { name: 'Python', icon: <FaPython size={40} className="text-blue-400" /> },

    ];

    return (
        <section className="min-h-screen bg-section-gradient-top px-8 md:px-16 py-16">
            <h2 className="text-4xl md:text-6xl font-bold text-heading-base text-center mb-6">
                Technologies I Use
            </h2>
            <div className='bg-button-primary h-[2px] w-full mb-12' />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center space-y-4 bg-background-secondary rounded-lg p-6 shadow-md hover:shadow-bottom transition-all duration-300 w-[-120px] xl:w-[200px]"
                    >
                        {tech.icon}
                        <span className="text-text-base text-lg font-semibold">{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
