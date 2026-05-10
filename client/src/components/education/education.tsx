import './education.scss';

const education = [
    {
        school: 'University of Northern Colorado',
        degree: 'BS, Applied Mathematics',
        location: '',
        startYear: '',
        endYear: 'May 2015',
        notes: 'Graduated',
    },
    {
        school: 'University of Tacoma',
        degree: 'Graduate Certificate in Software Development Engineering',
        location: '',
        startYear: 'August 2024',
        endYear: 'May 2025',
        notes: '',
    },
];

export default function Education() {
    return (
        <div className="education">
            <h2 className="education__heading">Education</h2>
            {education.map((edu, i) => (
                <div key={i} className="education__entry">
                    <div className="education__header">
                        <div className="education__title-block">
                            <h3 className="education__school">{edu.school}</h3>
                            <span className="education__degree">{edu.degree}</span>
                        </div>
                        <div className="education__meta">
                            <span className="education__years">
                                {edu.startYear ? `${edu.startYear} – ${edu.endYear}` : edu.endYear}
                            </span>
                            {edu.location && <span className="education__location">{edu.location}</span>}
                        </div>
                    </div>
                    {edu.notes && <p className="education__notes">{edu.notes}</p>}
                </div>
            ))}
        </div>
    );
}
