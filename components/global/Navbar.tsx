'use client';

import Link from 'next/link';
import { routes } from '@/data/global';

function Navbar({ currentPage }) {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const offset = 30;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;
			window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
		}
	};
	return (
		<nav className='flex items-center justify-between'>
			<li className='list-none font-bold text-lg cursor-pointer'>
				<Link href='/'>
					<span className='font-black text-xl flex items-center'>
						{'Jonathan Mutakura'.split('').map((letter, index) => {
							return (
								<span
									key={index}
									className='hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim'
								>
									{letter}
								</span>
							);
						})}
					</span>
				</Link>
			</li>
			<ul className='flex items-center space-x-10'>
				{routes.map((item, index) => {
					return (
						<li
							key={index}
							className={`list-none text-white ${currentPage === item.title
								? 'opacity-100'
								: 'opacity-40 hover:opacity-100 transition-opacity'
								}`}
						>
							{item.path ? (
								<Link href={item.path}>{item.title}</Link>
							) : (
								<button
									onClick={() => scrollToSection(item.scroll)}
									className='cursor-pointer'
								>
									{item.title}
								</button>
							)}
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navbar;
