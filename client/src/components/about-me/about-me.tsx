import './about-me.scss';

export default function AboutMe() {
    return (
        <div className="about-me">
            <h1 className="about-me__name">Preston Harms</h1>
            <h2 className="about-me__title">Software Engineer</h2>
            <p className="about-me__bio">
                Full-stack Software Engineer with 8+ years building user-centric web
                applications, internal engineering tooling, and monitoring dashboards
                in production — delivering React and TypeScript frontends alongside
                Python/Flask, Go, Java, and C# backends at companies including
                Microsoft, JP Morgan Chase, and Axon.
            </p>
        </div>
    );
}
