function formatEpochTime(epochTime: number) {
  // Convert epoch time to milliseconds
  const milliseconds = epochTime * 1000;

  // Create a Date object
  const date = new Date(milliseconds);

  // Extract the components (hours, minutes, day, month, year)
  const hours = date.getHours();
  const amOrPm = hours >= 12 ? 'PM' : 'AM';
  const hours12 = (hours % 12 || 12).toString().padStart(2, '0'); // Convert to 12-hour format

  const minutes = date.getMinutes().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Months are 0-indexed
  const year = date.getFullYear();

  // Format the date and time
  const formattedDateTime = `${hours12}:${minutes} ${amOrPm} ${day}-${month}-${year}`;

  return formattedDateTime;
}

export default formatEpochTime;
