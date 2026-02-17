'use client';

import SectionTitle from '../global/SectionTitle';
import 'react-vertical-timeline-component/style.min.css';

function About() {
	return (
		<div className='flex flex-col text-left justify-between pt-8 relative'>
			<div id='about'>
				<SectionTitle title="Here's some info about me:" />
			</div>

			<div className='w-full mb-5 p-4 text-center rounded-lg shadow sm:p-8'>
				<p className='mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400'>
					I'm a software engineer with expertise in architecting scalable systems
					and leading technical initiatives. Since beginning my journey in 2018, I've evolved
					from building foundational skills to designing complex distributed systems and
					mentoring. My approach combines deep technical knowledge with strategic thinking, whether it's optimizing performance bottlenecks, establishing
					engineering best practices, or driving architectural decisions that impact product
					direction. I thrive in collaborative environments where I can leverage my experience
					to solve challenging problems and deliver high-quality solutions. Outside of software,
					I enjoy golf, soccer, and following F1.
				</p>
			</div>
		</div>
	);
}

export default About;
