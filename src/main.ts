import chalk from "chalk";
import * as is from "is";

export const getLogger = ({ log } = { log: console.log }) => {
  return {
    info: (message: any) =>
      log(`
ℹ️ : ${chalk.yellow(
        is.object(message) ? JSON.stringify(message, null, 2) : message
      )}
`),
    success: (message: any) =>
      log(`
✅ : ${chalk.green.bold(
        is.object(message) ? JSON.stringify(message, null, 2) : message
      )}
`),
    error: (message: any) =>
      log(`
🔥 : ${chalk.red.bold(
        is.object(message) ? JSON.stringify(message, null, 2) : message
      )}
    `)
  };
};
