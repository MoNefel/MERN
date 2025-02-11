import { formatISODate, formatRelativeTime, formatFullDate, formatShortDate } from './utils/formatDate.js';
import chalk from 'chalk'; // chalk is a library that allows you to colorize your console output

const sampleISODate = "2023-10-05T14:48:00.000Z";

console.log(chalk.blue("ISO Date:"), chalk.green(formatISODate(sampleISODate)));
console.log(chalk.blue("Relative Time:"), chalk.green(formatRelativeTime(sampleISODate)));
console.log(chalk.blue("Full Date:"), chalk.green(formatFullDate(sampleISODate)));
console.log(chalk.blue("Short Date:"), chalk.green(formatShortDate(sampleISODate)));
