/**
 * Format date to format "ma 13 Dec"
 *
 * @TODO: ADD YEAR WHEN THE YEAR OF THE DATE IS DIFFERENT THAN THE CURRENT YEAR
 */
export default function displayDate(date: string): string {
  const formattedDate = new Date(date)
  const options: any = {
    weekday: 'short',
    // year: "numeric", --> optional based on current year!!!
    // month: 'short',
    day: 'numeric',
  }

  return (
    new Intl.DateTimeFormat('nl-NL', options)
      .format(formattedDate)
      // Remove `.` that added to the short month
      .replace('.', '')
  )
}
