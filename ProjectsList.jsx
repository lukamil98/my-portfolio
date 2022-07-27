import React, {useState} from "react";
import "./projects.scss";
import data from "./data";
import List from "./List"

export default function ProjectsList() {
    const [projects, setProjects] = useState(data);
    return (
        <main>
            <h1 className="titleprojects" id="projectslist">PROJECTS</h1>
            <section className="container">
            <List projects={projects} />
            </section>
        </main>
        
    )
        
}