const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate.toISOString()}`;

console.log(currentDateFormat);

function formatDateMMDDYYYY(dateObj) {
  return `Formatted Date (MM/DD/YYYY): ${dateObj.toLocaleDateString("en-US")}`;
}

function formatDateLong(dateObj) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return `Formatted Date (Month Day, Year): ${dateObj.toLocaleDateString("en-US", options)}`;
}

console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));
