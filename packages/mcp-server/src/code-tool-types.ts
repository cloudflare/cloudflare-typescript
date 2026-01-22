// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ClientOptions } from 'cloudflare';

export type WorkerInput = {
  project_name: string;
  code: string;
  client_opts: ClientOptions;
  intent?: string | undefined;
};
export type WorkerOutput = {
  is_error: boolean;
  result: unknown | null;
  log_lines: string[];
  err_lines: string[];
};
