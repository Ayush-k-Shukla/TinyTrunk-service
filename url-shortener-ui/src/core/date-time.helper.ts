import dayjs from 'dayjs';

/**
 *  Conver date to format based on the current date
 *
 * @export
 * @param {string} date
 * @return {*}  {string}
 */
export function formatCustomDate(date: string): string {
  const formattedDate = dayjs(date);

  // Check if the date is today
  if (formattedDate.isSame(dayjs(), 'day')) {
    // Format the time if it's today
    return formattedDate.format('h : mm A');
  } else {
    // Format the date if it's not today
    return formattedDate.format('MMM - DD - YYYY');
  }
}
