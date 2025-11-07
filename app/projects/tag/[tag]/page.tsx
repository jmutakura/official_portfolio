import Page from "components/utility/Page";
import { allKebabTags, allTags } from "@/data/content/projects";
import projects from "@/data/content/projects";
import { kebabCase, kebabArray } from "@/utils/utils";
import Projects from "components/projects/Projects";
import Heading from "components/projects/Heading";
import Link from "next/link";

export function generateStaticParams() {
    const allTagsList: string[] = [];
    projects.forEach((project) =>
        project.tags.forEach((tag) => {
            allTagsList.push(tag);
        })
    );
    const uniqueAllTags = [...new Set(allTagsList)];
    return uniqueAllTags.map((tag) => ({
        tag: kebabCase(tag),
    }));
}

export function generateMetadata({ params }: { params: { tag: string } }) {
    const capsTag = allTags[allKebabTags.indexOf(params.tag)];
    return {
        title: `${capsTag} Projects - jmutakura.com`,
        description: `A showcase for all of my ${capsTag} projects.`,
    };
}

export default function TagPage({ params }: { params: { tag: string } }) {
    const { tag } = params;
    const filteredProjects = projects.filter((project) =>
        [...kebabArray(project.tags)].includes(tag)
    );
    const capsTag = allTags[allKebabTags.indexOf(tag)];

    return (
        <Page
            currentPage="Projects"
            meta={{
                title: `${capsTag} Projects`,
                desc: `A showcase for all of my ${capsTag} projects.`,
            }}
        >
            <Heading tag={capsTag} />
            <Projects overwriteProjects={filteredProjects} />

            <Link href="/projects">
                <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
                    View All
                </div>
            </Link>
        </Page>
    );
}
