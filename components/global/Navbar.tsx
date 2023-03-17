import Link from 'next/link';
import React from 'react';
import { routes } from '@/data/global';
import { Link as ScrollLink } from 'react-scroll';

function Navbar({ currentPage }) {
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
							className={`list-none text-white ${
								currentPage === item.title
									? 'opacity-100'
									: 'opacity-40 hover:opacity-100 transition-opacity'
							}`}
						>
							{item.path ? (
								<Link href={item.path}>{item.title}</Link>
							) : (
								<ScrollLink
									className='cursor-pointer'
									activeClass='active'
									to={item.scroll}
									spy={true}
									offset={-30}
									smooth={true}
									duration={500}
								>
									{item.title}
								</ScrollLink>
							)}
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navbar;
