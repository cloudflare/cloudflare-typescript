// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from 'cloudflare/client';

export type WorkerInput = {
  opts: ClientOptions;
  code: string;
};
export type WorkerSuccess = {
  result: unknown | null;
  logLines: string[];
  errLines: string[];
};
export type WorkerError = { message: string | undefined };
