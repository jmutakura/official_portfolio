import { kebabCase, kebabArray } from '@/utils/utils';
import { Project } from 'types';

const projects: Project[] = [
	{
		id: 0,
		title: 'Cresco Agritech Solutions Ltd.',
		desc: 'Manage and monitor various conditions on your farm.',
		img: '/static/projects/crescoag.png',
		link: 'https://www.crescoag.ca/',
		tags: ['Svelte', 'IOS', 'Android', 'IOT'],
	},
	{
		id: 1,
		title: 'Marii',
		desc: 'App to manage finances & track expenses.',
		img: '/static/projects/quotesio.png',
		link: 'https://www.marii.xyz/',
		tags: ['React Native', 'Expo', 'Firebase', 'IOS', 'Android'],
	},
	{
		id: 2,
		title: 'QuotesIO',
		desc: 'Generate quotes from the brightest minds in history.',
		img: '/static/projects/quotesio.png',
		link: 'https://quotesio.jmutakura.com/',
		github: 'https://github.com/jmutakura/quotesio',
		tags: ['React', 'NextJS', 'TailwindCSS', 'CSS'],
	},
	{
		id: 3,
		title: 'QuotesIO',
		desc: 'Generate quotes from the brightest minds in history.',
		img: '/static/projects/quotesio.png',
		link: 'https://quotesio.jmutakura.com/',
		github: 'https://github.com/jmutakura/quotesio',
		tags: ['React', 'NextJS', 'TailwindCSS', 'CSS'],
	},
	{
		id: 4,
		title: 'QuotesIO',
		desc: 'Generate quotes from the brightest minds in history.',
		img: '/static/projects/quotesio.png',
		link: 'https://quotesio.jmutakura.com/',
		github: 'https://github.com/jmutakura/quotesio',
		tags: ['React', 'NextJS', 'TailwindCSS', 'CSS'],
	},
	{
		id: 5,
		title: 'QuotesIO',
		desc: 'Generate quotes from the brightest minds in history.',
		img: '/static/projects/quotesio.png',
		link: 'https://quotesio.jmutakura.com/',
		github: 'https://github.com/jmutakura/quotesio',
		tags: ['React', 'NextJS', 'TailwindCSS', 'CSS'],
	},
	{
		id: 6,
		title: 'QuotesIO',
		desc: 'Generate quotes from the brightest minds in history.',
		img: '/static/projects/quotesio.png',
		link: 'https://quotesio.jmutakura.com/',
		github: 'https://github.com/jmutakura/quotesio',
		tags: ['React', 'NextJS', 'TailwindCSS', 'CSS'],
	},
	{
		id: 7,
		title: 'QuotesIO',
		desc: 'Generate quotes from the brightest minds in history.',
		img: '/static/projects/quotesio.png',
		link: 'https://quotesio.jmutakura.com/',
		github: 'https://github.com/jmutakura/quotesio',
		tags: ['React', 'NextJS', 'TailwindCSS', 'CSS'],
	}
];

export const allTags: string[] = [];

projects.forEach((project) => {
	project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
