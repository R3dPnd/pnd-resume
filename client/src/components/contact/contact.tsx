import './contact.scss';

const contactInfo = [
    { label: 'Tacoma WA 98446' },
    { label: '970-518-2916' },
    { label: 'prestonharms5@gmail.com', href: 'mailto:prestonharms5@gmail.com' },
    { label: 'linkedin.com/in/preston-harms-399017139', href: 'https://linkedin.com/in/preston-harms-399017139' },
    { label: 'github.com/R3dPnd', href: 'https://github.com/R3dPnd' },
];

export default function Contact() {
    return (
        <div className="contact">
            <h2 className="contact__heading">Contact</h2>
            <ul className="contact__list">
                {contactInfo.map(({ label, href }) => (
                    <li key={label} className="contact__item">
                        {href ? <a href={href} target="_blank" rel="noreferrer">{label}</a> : label}
                    </li>
                ))}
            </ul>
        </div>
    );
}
