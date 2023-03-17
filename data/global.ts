type Route = {
	title: string;
	path?: string;
	scroll: string;
};

type FooterCol = {
	title: string;
	links: {
		name: string;
		link: string;
		icon?: string;
		leavesWebsite: boolean;
	}[];
};

type Footer = {
	columns: FooterCol[];
};

export const routes: Route[] = [
	{
		title: 'Home',
		path: '/',
		scroll: 'home',
	},
	{
		title: 'About',
		scroll: 'about',
	},
	{
		title: 'Projects',
		scroll: 'projects',
	},
];

export const footer: Footer = {
	columns: [
		{
			title: 'Pages',
			links: [
				{
					name: 'Home',
					link: '/',
					leavesWebsite: false,
				},
				{
					name: 'About',
					link: '/about',
					leavesWebsite: false,
				},
				{
					name: 'Projects',
					link: '/projects',
					leavesWebsite: false,
				},
			],
		},
		{
			title: 'Social',
			links: [
				{
					name: 'GitHub',
					link: 'https://github.com/jmutakura',
					icon: '/static/icons/github-f.svg',
					leavesWebsite: true,
				},
				{
					name: 'LinkedIn',
					link: 'https://www.linkedin.com/in/jonathan-mutakura-477023172/',
					icon: '/static/icons/linkedin-f.svg',
					leavesWebsite: true,
				},
				{
					name: 'Email',
					link: 'mailto:jmutakura@gmail.com',
					icon: '/static/icons/mail-f.svg',
					leavesWebsite: true,
				},
			],
		},
	],
};
