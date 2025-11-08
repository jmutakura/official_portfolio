'use client';

import React from 'react';
import SectionTitle from '../global/SectionTitle';
import work from '@/data/content/work';
import TimelineCard from '../about/TimelineCard';
import ExperienceBadge from '../about/ExperienceBadge';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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

			<div className='w-full'>
				<div className='flex flex-col items-center mb-10'>
					<h2 className='text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4'>
						Work Experience
					</h2>
					<ExperienceBadge />
				</div>

				<VerticalTimeline lineColor='rgba(139, 92, 246, 0.3)'>
					{work.map((item, index) => {
						return <TimelineCard key={`${item.company}-${index}`} work={item} />;
					})}
				</VerticalTimeline>

				<p className='mt-10 text-center text-sm text-gray-500 dark:text-gray-400'>
					View my full professional profile on{' '}
					<a
						className='text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors'
						href='https://www.linkedin.com/in/jonathan-mutakura-477023172/'
						target='_blank'
						rel='noopener noreferrer'
					>
						LinkedIn
					</a>
				</p>
			</div>
		</div>
	);
}

export default About;
