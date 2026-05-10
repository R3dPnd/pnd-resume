import { useState } from 'react';
import './work-history.scss';

const jobs = [
    {
        coin: 'coin-microsoft.png',
        company: 'Microsoft',
        title: 'Software Engineer II',
        location: 'Redmond WA',
        startDate: 'May 2022',
        endDate: 'September 2025',
        bullets: [
            'Architected CI/CD pipelines automating testing and deployment of Azure Function Apps, Static Web Apps, and Application Insights telemetry, cutting release cycle time by 30% and eliminating manual deployment steps for a team of 8+ engineers.',
            'Authored technical design documents for cross-team features, accelerating onboarding and reducing ambiguity across multi-team delivery cycles.',
            'Integrated GitHub Copilot-powered form autocompletion into a high-traffic Angular/.NET full-stack application, reducing manual data-entry time for end users and measurably accelerating form completion rates.',
            'Partnered with internal platform teams to build a Copilot-powered deployment risk analysis tool, evaluating Azure deployments for failure indicators and driving a 40% reduction in deployment-related outages.',
        ],
    },
    {
        coin: 'coin-chase.png',
        company: 'JP Morgan Chase',
        title: 'Software Engineer',
        location: 'Seattle WA',
        startDate: 'February 2019',
        endDate: 'May 2022',
        bullets: [
            'Engineered a real-time secure data auditing pipeline synchronizing backend records with the customer-facing loan portal, reducing data discrepancies by an estimated 25% and cutting document turnaround time for borrowers.',
            'Implemented a secure distributed microservice architecture using Java, Spring, and Kafka.',
            'Delivered responsive, accessible UI components in JavaScript, HTML, and CSS integrated into a high-traffic customer loan portal serving 10,000+ borrowers.',
            'Developed a REST API service for generating completed documents for loan processing.',
            'Decomposed a monolithic batch-job application into a modular library package, improving test coverage and reducing average build time for downstream consumers.',
            'Drove Agile delivery by authoring user stories, acceptance criteria, and sprint requirements that aligned engineering output with business objectives across a 6-person scrum team.',
        ],
    },
    {
        coin: 'coin-infosys.png',
        company: 'Boeing',
        title: 'Software Developer',
        location: 'Tukwila WA',
        startDate: 'March 2018',
        endDate: 'February 2019',
        bullets: [
            'Facilitated daily scrum ceremonies, managed source control workflows in GitLab, led Oracle SQL-driven data migrations, and resolved critical production data incidents, maintaining data integrity for a mission-critical internal application.',
            'Translated domain-specific requirements from non-software engineering stakeholders — including teams managing catalogs of plane schematics for resale — into Agile user stories and technical specifications for an internal Java/Spring/Hibernate application hosted on Apache (Linux), backed by a cloud-hosted Oracle SQL database.',
            'Authored system architecture documentation and integration contracts for internal tooling, reducing engineer onboarding time by an estimated 20% and establishing the canonical reference for maintenance workflows.',
        ],
    },
    {
        coin: 'coin-revature.png',
        company: 'Revature',
        title: 'TODO',
        location: 'TODO',
        startDate: 'TODO',
        endDate: 'TODO',
        bullets: [
            'TODO',
        ],
    },
];

export default function WorkHistory() {
    const [selected, setSelected] = useState<number | null>(null);

    const job = selected !== null ? jobs[selected] : null;

    return (
        <div className="work-history">
            <h2 className="work-history__heading">Experience</h2>

            <div className="work-history__coins">
                {jobs.map((j, i) => (
                    <button
                        key={i}
                        className={`work-history__coin${selected === i ? ' work-history__coin--selected' : ''}`}
                        onClick={() => setSelected(selected === i ? null : i)}
                        aria-label={j.company}
                    >
                        <img
                            src={`/icons/coins/${j.coin}`}
                            alt={j.company}
                            className="work-history__coin-img"
                        />
                        <span className="work-history__coin-label">{j.company}</span>
                    </button>
                ))}
            </div>

            {job && (
                <div className="work-history__detail">
                    <div className="work-history__header">
                        <div className="work-history__title-block">
                            <h3 className="work-history__job-title">{job.title}</h3>
                            <span className="work-history__company">{job.company}</span>
                        </div>
                        <div className="work-history__meta">
                            <span className="work-history__dates">{job.startDate} – {job.endDate}</span>
                            <span className="work-history__location">{job.location}</span>
                        </div>
                    </div>
                    <ul className="work-history__bullets">
                        {job.bullets.map((bullet, j) => (
                            <li key={j}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
