export function calculateYearsOfExperience(startYear: number, startMonth: number): number {
	const now = new Date();
	const currentYear = now.getFullYear();
	const currentMonth = now.getMonth() + 1; // JavaScript months are 0-indexed

	let years = currentYear - startYear;
	let months = currentMonth - startMonth;

	if (months < 0) {
		years--;
		months += 12;
	}

	// Return years with decimal (e.g., 5.5 years)
	return parseFloat((years + months / 12).toFixed(1));
}

export function formatExperience(years: number): string {
	const wholeYears = Math.floor(years);
	const months = Math.round((years - wholeYears) * 12);

	if (months === 0) {
		return `${wholeYears}+ year${wholeYears !== 1 ? 's' : ''}`;
	}
	
	return `${wholeYears}+ year${wholeYears !== 1 ? 's' : ''}`;
}
