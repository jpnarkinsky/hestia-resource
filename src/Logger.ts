import { createLogger, transports, format } from "winston";

export const logger = createLogger({
  transports: [
    new transports.Console({
      stderrLevels: ["debug", "info", "error", "warn"],
    }),
  ],
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),
});
