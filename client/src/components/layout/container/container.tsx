import AboutMe from "../../about-me/about-me";
import Contact from "../../contact/contact";
import Skills from "../../skills/skills";
import WorkHistory from "../../work-history/work-history";

import './container.scss';

export default function Container() {
    return (
        <div className="container">
            <div className="left-panel">
                <AboutMe />
                <Contact />
                <Skills />
            </div>
            <div className="main-content">
                <WorkHistory />

            </div>
        </div>
    )
}