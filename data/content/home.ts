import { IconType } from 'react-icons';
import {
	SiAmazonwebservices,
	SiGooglecloud,
	SiTypescript,
	SiTailwindcss,
	SiReact,
	SiVuedotjs,
	SiNextdotjs,
	SiPython,
	SiNodedotjs,
	SiGit,
	SiPostgresql,
	SiMysql,
	SiMongodb,
	SiGo,
	SiDigitalocean,
	SiExpo,
	SiSvelte,
	SiAndroid,
	SiCplusplus,
	SiPhp,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

type Skill = {
	title: string;
	icon: IconType;
	color?: string;
};

type SkillCategory = {
	category: string;
	skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
	{
		category: 'Cloud',
		skills: [
			{
				title: 'AWS',
				icon: SiAmazonwebservices,
				color: '#FF9900',
			},
			{
				title: 'Google Cloud',
				icon: SiGooglecloud,
				color: '#4285F4',
			},
			{
				title: 'Digital Ocean',
				icon: SiDigitalocean,
				color: '#4285F4',
			},
		],
	},
	{
		category: 'Frontend',
		skills: [
			{
				title: 'Expo',
				icon: SiExpo,
				color: '#dce2e7ff',
			},
			{
				title: 'React',
				icon: SiReact,
				color: '#61DAFB',
			},
			{
				title: 'Android',
				icon: SiAndroid,
				color: '#329b48ff',
			},
			{
				title: 'Next.js',
				icon: SiNextdotjs,
				color: '#FFFFFF',
			},
			{
				title: 'Vue',
				icon: SiVuedotjs,
				color: '#4FC08D',
			},
			{
				title: 'Svelte',
				icon: SiSvelte,
				color: '#f96743',
			},
		],
	},
	{
		category: 'Backend',
		skills: [
			{
				title: 'Node.js',
				icon: SiNodedotjs,
				color: '#339933',
			},
			{
				title: 'Python',
				icon: SiPython,
				color: '#3776AB',
			},
			{
				title: 'Java',
				icon: FaJava,
				color: '#961600ff',
			},
			{
				title: 'Go',
				icon: SiGo,
				color: '#00ADD8',
			},
			{
				title: 'PHP',
				icon: SiPhp,
				color: '#8893BE',
			},
			{
				title: 'C/C++',
				icon: SiCplusplus,
				color: '#00ADD8',
			},
			
		],
	},
	{
		category: 'Database',
		skills: [
			{
				title: 'PostgreSQL',
				icon: SiPostgresql,
				color: '#4169E1',
			},
			{
				title: 'MySQL',
				icon: SiMysql,
				color: '#f29111',
			},
			{
				title: 'MongoDB',
				icon: SiMongodb,
				color: '#47A248',
			},
		],
	},
];
