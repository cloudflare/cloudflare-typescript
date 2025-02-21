// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { FinalRequestOptions } from './request-options';
import { type Cloudflare } from '../client';
import { formatRequestDetails, loggerFor } from './utils/log';

export type APIResponseProps = {
  response: Response;
  options: FinalRequestOptions;
  controller: AbortController;
  requestLogID: string;
  retryOfRequestLogID: string | undefined;
  startTime: number;
};

export async function defaultParseResponse<T>(client: Cloudflare, props: APIResponseProps): Promise<T> {
  const { response, requestLogID, retryOfRequestLogID, startTime } = props;
  const body = await (async () => {
    // fetch refuses to read the body when the status code is 204.
    if (response.status === 204) {
      return null as T;
    }

    if (props.options.__binaryResponse) {
      return response as unknown as T;
    }

    const contentType = response.headers.get('content-type');
    const isJSON =
      contentType?.includes('application/json') || contentType?.includes('application/vnd.api+json');
    if (isJSON) {
      const json = await response.json();
      return json as T;
    }

    const text = await response.text();
    return text as unknown as T;
  })();
  loggerFor(client).debug(
    `[${requestLogID}] response parsed`,
    formatRequestDetails({
      retryOfRequestLogID,
      url: response.url,
      status: response.status,
      body,
      durationMs: Date.now() - startTime,
    }),
  );
  return body;
}
