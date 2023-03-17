import { kebabCase, kebabArray } from '@/utils/utils';
import { Project } from 'types';

const projects: Project[] = [
	{
		id: 0,
		title: 'QuotesIO',
		desc: 'Generate quotes from the brightest minds in history.',
		img: '/static/projects/quotesio.png',
		link: 'https://quotesio.jmutakura.com/',
		github: 'https://github.com/jmutakura/quotesio',
		tags: ['React', 'NextJS', 'TailwindCSS', 'CSS'],
	},
	{
		id: 1,
		title: 'Mario Task Manager',
		desc: 'Beautiful UI with a mario inspired theme.',
		img: '/static/projects/mario-task-manager.png',
		link: 'https://mario-task-manager.jmutakura.com/',
		github: 'https://github.com/jmutakura/mario-task-manager',
		tags: ['React', 'ChakraUI', 'JSON'],
	},
	{
		id: 2,
		title: 'Demo Landing Page',
		desc: 'A stunning demo landing page for a SaaS company with multiple informational sections.',
		img: '/static/projects/demo-landing-page.png',
		link: 'https://demo-landing-page.jmutakura.com/',
		github: 'https://github.com/jmutakura/demo-landing-page',
		tags: ['NextJS', 'ChakraUI', 'JSON'],
	},
];

export const allTags = [];

projects.forEach((project) => {
	project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
