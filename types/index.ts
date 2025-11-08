export type Project = {
	id: number;
	title: string;
	desc: string;
	img: string;
	link?: string;
	github?: string;
	tags: string[];
};

export type Work = {
	startDate: string;
	endDate: string;
	title: string;
	company: string;
	location?: string;
	desc: string;
	technologies?: string[];
};
