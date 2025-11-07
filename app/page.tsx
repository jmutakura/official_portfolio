import CTA from '@/components/home/CTA';
import Hero from '@/components/home/Hero';
import Page from '@/components/utility/Page';
import Projects from '@/components/home/Projects';
import Skills from '@/components/home/Skills';
import About from '@/components/home/About';

export const metadata = {
    title: 'Jonathan Mutakura - Web Developer',
    description: "I'm a passionate web developer coding amazing websites and apps.",
};

export default function Home() {
    return (
        <Page currentPage="Home" meta={{ desc: "I'm a passionate web developer coding amazing websites and apps." }}>
            <Hero />
            <div className="mt-20 space-y-32">
                <About />
                <Projects />
                <Skills />
            </div>
            <CTA />
        </Page>
    );
}
