'use client';

import { useEffect, useState } from 'react';
import { calculateYearsOfExperience, formatExperience } from '@/utils/calculateExperience';

export default function ExperienceBadge() {
    const [experience, setExperience] = useState<string>('5+');

    useEffect(() => {
        // Started in January 2020 based on work history
        const years = calculateYearsOfExperience(2020, 1);
        setExperience(formatExperience(years));
    }, []);

    return (
        <div className='inline-flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 rounded-lg shadow-sm'>
            <svg
                className='w-5 h-5 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
            </svg>
            <span className='text-white font-semibold text-sm'>
                {experience} of experience
            </span>
        </div>
    );
}
