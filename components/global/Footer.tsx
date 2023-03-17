import Link from 'next/link';
import React from 'react';
import { footer } from '@/data/global';
import Image from 'next/image';
import { RxGithubLogo } from 'react-icons/rx';

function Footer() {
	return (
		<footer className='flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg'>
			<div className='w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-2 justify-between'>
				{footer.columns.map((item, index) => {
					return (
						<div key={index} className='mb-5 sm:mb-0 text-center'>
							<h4 className='uppercase text-fun-gray text-sm font-bold'>
								{item.title}
							</h4>
							<div className='content-justify text-center items-center'>
								{item.links.map((item, index) => {
									return (
										<div
											key={index}
											className='flex my-4 text-center content-center'
										>
											{item.leavesWebsite ? (
												<a href={item.link} target='_blank' className='w-full'>
													{item.name}
												</a>
											) : (
												<div className='w-full'>
													<Link href={item.link}>{item.name}</Link>
												</div>
											)}
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
			<div className='max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark'>
				<div className='flex flex-col items-center justify-center '>
					<div className='inline-flex items-center uppercase text-xs font-bold tracking-widest'>
						Made with{' '}
						<div className='space-x-2 inline-flex items-center -mt-1 ml-3'>
							<span>
								<img
									src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
									width='26'
									title='React'
								/>
								<span className='sr-only'>React</span>
							</span>
							<span>
								<img
									src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'
									width='40'
									className='invert'
									title='NextJS'
								/>
								<span className='sr-only'>NextJS</span>
							</span>
							<span>
								<img
									src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
									width='26'
									title='TailwindCSS'
								/>
								<span className='sr-only'>TailwindCSS</span>
							</span>
						</div>
					</div>
					<div className='mt-2 text-xs '>
						Developed by{' '}
						<a
							href='mailto:jmutakura@gmail.com'
							className='text-fun-gray-light font-medium'
						>
							Jonathan Mutakura
						</a>
					</div>
				</div>
			</div>
			<div className='mt-8 text-center sm:text-right sm:-mt-12'>
				<a
					className='w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border border-fun-pink px-4 py-2 rounded-xl text-fun-pink cursor-pointer opacity-50'
					href='https://github.com/jmutakura/official_portfolio'
					target='_blank'
					rel='nooreferrer'
				>
					<RxGithubLogo className='text-fun-pink' size={15} />
					<span className='ml-2'>View Source Code </span>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
