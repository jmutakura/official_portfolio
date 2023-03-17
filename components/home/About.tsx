import Link from 'next/link';
import React from 'react';
import SectionTitle from '../global/SectionTitle';
import work from '@/data/content/work';

import TimelineCard from '../about/TimelineCard';

function About() {
	return (
		<div className='flex flex-col text-left justify-between pt-8 relative'>
			<div id='about'>
				<SectionTitle title="Here's some info about me:" />
			</div>

			<div className='w-full mb-5 p-4 text-center rounded-lg shadow sm:p-8'>
				<p className='mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400'>
					I'm a software developer and engineer, who started coding in 2018
					after getting my first laptop. At the "Co-Hack" hackathon, my team won
					the people's choice award, which showcased my ability to collaborate
					and solve problems efficiently. I'm passionate about software
					development and staying up-to-date with the latest technology. Outside
					of work, I enjoy playing golf, basketball and following F1.
				</p>
			</div>

			<div className='max-w-2xl mx-auto'>
				<h1 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white'>
					Work Experience
				</h1>
				<ol className='relative border-l border-gray-200 dark:border-gray-700'>
					{work.map((item) => {
						return <TimelineCard key={item.title} work={item} />;
					})}
				</ol>

				<p className='mt-5'>
					This timeline provides information about my prior work experience and
					internships throughout the years that I have worked in the indestry.
					More info can be found on my :{' '}
					<a
						className='text-blue-600 hover:underline'
						href='https://www.linkedin.com/in/jonathan-mutakura-477023172/'
						target='_blank'
					>
						Linkedin Profile
					</a>
					.
				</p>
			</div>
		</div>
	);
}

export default About;
