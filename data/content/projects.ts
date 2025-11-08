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
	}
];

export const allTags = [];

projects.forEach((project) => {
	project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
