import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";

export const metadata = {
    title: "Projects - jmutakura.com",
    description: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
};

export default function ProjectsPage() {
    return (
        <Page
            currentPage="Projects"
            meta={{
                title: "Projects",
                desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
            }}
        >
            <Heading />
            <Projects />
            <More />
        </Page>
    );
}
