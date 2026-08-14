import { type CollectionEntry, type DataEntryMap, render } from 'astro:content';

type Entry = CollectionEntry<keyof DataEntryMap>;

// Sort entries by a specific time field in descending (default) or ascending order
export const sortEntriesByTime = <T extends Entry, F extends keyof T['data']>(
    entries: T[],
    sortField?: F,
    descending: boolean = true
) => {
    // If no sort field is provided, default to 'date'
    const field = sortField ?? ('date' as F);

    return entries.sort((a, b) => {
        return (
            ((b.data as Record<F, Date>)[field].getTime() -
                (a.data as Record<F, Date>)[field].getTime()) *
            (descending ? 1 : -1)
        );
    });
};

// Format a date range as "MMM YYYY - MMM YYYY"
export const formatPeriod = (
    startDate: Date,
    endDate?: Date,
    includeDay: boolean = false
) => {
    const options: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: includeDay ? 'numeric' : undefined,
        year: 'numeric',
    };
    const start = startDate.toLocaleDateString('en-UK', options);
    const end = endDate
        ? endDate.toLocaleDateString('en-UK', options)
        : 'Present';
    return `${start} - ${end}`;
};

// Get the duration between two dates, rounded to years if specified
export const calculateDuration = (
    startDate: Date,
    endDate?: Date,
    roundYear: boolean = false
): string | null => {
    const start = new Date(startDate);
    const end = new Date(endDate ?? new Date());

    // Calculate the total months between dates
    const totalMonths =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth()) +
        1; // Add 1 to include both start and end months

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    // Format the duration string
    if (years === 0) {
        return `(${months} month${months !== 1 ? 's' : ''})`;
    } else if (months === 0 || roundYear) {
        const years = Math.round(totalMonths / 12);
        return `(${years} year${years !== 1 ? 's' : ''})`;
    } else {
        return `(${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''})`;
    }
};

// Render Markdown content for each entry (call with Promise.all(getEntriesWithContent(entries)))
export const getEntriesWithContent = <T extends Entry>(entries: T[]) =>
    entries.map(async (entry) => {
        const { Content } = await render(entry);
        return { entry, Content };
    });
