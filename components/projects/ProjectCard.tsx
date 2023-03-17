import React from 'react';
import Image from 'next/image';
import { kebabCase } from '@/utils/utils';
import Link from 'next/link';
import { RxExternalLink, RxGithubLogo } from 'react-icons/rx';

function ProjectCard({ project }) {
	return (
		<div
			className='max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center'
			key={project.id}
		>
			<a
				href={project.link || project.github}
				target='_blank'
				className={`w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard`}
			>
				<img className='w-full rounded-md' src={project.img} />
			</a>
			<div className='w-full mt-5'>
				<div className='flex projects-center justify-between'>
					<a href={project.link || project.github} target='_blank'>
						<h3 className='text-lg font-bold'>{project.title}</h3>
					</a>
					<div className='space-x-2 flex'>
						{project.link && (
							<a href={project.link} target='_blank' rel='noreferrer'>
								<RxExternalLink className='text-fun-pink' />
							</a>
						)}
						{project.github && (
							<a href={project.github} target='_blank' rel='noreferrer'>
								<RxGithubLogo className='text-fun-pink' />
							</a>
						)}
					</div>
				</div>
				<p className='text-fun-gray text-left text-sm'>{project.desc}</p>
				<ul className='flex flex-wrap items-center mt-2 -ml-2 list-none'>
					{project.tags.map((tag, index) => {
						return (
							<li key={tag}>
								<Link href={`/projects/tag/${kebabCase(tag)}`}>
									<div className='m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75'>
										{tag}
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default ProjectCard;
