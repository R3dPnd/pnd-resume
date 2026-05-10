import './skills.scss';

const skillCategories = [
    {
        category: 'Languages',
        skills: ['C', 'C#', 'Java', 'Scala', 'TypeScript', 'JavaScript', 'Python', 'Go'],
    },
    {
        category: 'Frameworks',
        skills: ['React', '.Net', 'Angular', 'Flask', 'Spring', 'Hibernate'],
    },
    {
        category: 'Infrastructure',
        skills: ['AWS', 'Azure', 'Pivotal Cloud Foundry', 'Terraform', 'Linux', 'PowerShell'],
    },
    {
        category: 'Databases',
        skills: ['PL/SQL', 'PostgreSQL'],
    },
    {
        category: 'Testing',
        skills: ['Puppeteer', 'JUnit'],
    },
    {
        category: 'Technologies',
        skills: ['JSON', 'Unix', 'Docker', 'Kubernetes', 'Microservices', 'Kafka', 'GraphQL', 'REST'],
    },
    {
        category: 'Tools',
        skills: ['Git', 'Visual Studio', 'VS Code', 'IntelliJ', 'Eclipse', 'Azure DevOps', 'Cursor', 'Claude Code'],
    },
];

export default function Skills() {
    return (
        <div className="skills">
            <h2 className="skills__heading">Technical Skills</h2>
            {skillCategories.map(({ category, skills }) => (
                <div key={category} className="skills__category">
                    <h3 className="skills__category-name">{category}</h3>
                    <ul className="skills__list">
                        {skills.map(skill => (
                            <li key={skill} className="skills__item">{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
