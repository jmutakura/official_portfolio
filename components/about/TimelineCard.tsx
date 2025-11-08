import { Work } from 'types';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function TimelineCard({ work }: { work: Work }) {
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--work"
			contentStyle={{
				background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
				backdropFilter: 'blur(10px)',
				border: '1px solid rgba(139, 92, 246, 0.2)',
				borderRadius: '16px',
				boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.15)',
				padding: '24px',
			}}
			contentArrowStyle={{
				borderRight: '7px solid rgba(139, 92, 246, 0.2)',
			}}
			date={`${work.startDate} - ${work.endDate}`}
			iconStyle={{
				background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
				color: '#fff',
				boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)',
			}}
			icon={
				<div className="flex items-center justify-center h-full">
					<svg
						className="w-6 h-6"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
							clipRule="evenodd"
						/>
						<path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
					</svg>
				</div>
			}
		>
			<div className="group">
				<div className="flex items-start justify-between mb-3">
					<div className="flex-1">
						<h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-1 group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">
							{work.title}
						</h3>
						<h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
							<svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
							</svg>
							{work.company}
						</h4>
						{work.location && (
							<p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1 mt-1">
								<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								{work.location}
							</p>
						)}
					</div>
				</div>

				<div className="h-px bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-600 to-transparent mb-4"></div>

				<p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
					{work.desc}
				</p>

				{work.technologies && work.technologies.length > 0 && (
					<div className="flex flex-wrap gap-2 mt-4">
						{work.technologies.map((tech) => (
							<span
								key={tech}
								className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 text-indigo-700 dark:text-indigo-300 rounded-lg border border-indigo-200 dark:border-indigo-500/30 hover:border-indigo-400 dark:hover:border-indigo-400 hover:shadow-md transition-all duration-200 cursor-default"
							>
								{tech}
							</span>
						))}
					</div>
				)}
			</div>
		</VerticalTimelineElement>
	);
}
