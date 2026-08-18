// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { pino, type Level, type Logger } from 'pino';
import pretty from 'pino-pretty';

let _logger: Logger | undefined;

export function configureLogger({ level, pretty: usePretty }: { level: Level; pretty: boolean }): void {
  _logger = pino(
    {
      level,
      timestamp: pino.stdTimeFunctions.isoTime,
      formatters: {
        level(label) {
          return { level: label };
        },
      },
    },
    usePretty ? pretty({ colorize: true, levelFirst: true, destination: 2 }) : process.stderr,
  );
}

export function getLogger(): Logger {
  if (!_logger) {
    throw new Error('Logger has not been configured. Call configureLogger() before using the logger.');
  }
  return _logger;
}
