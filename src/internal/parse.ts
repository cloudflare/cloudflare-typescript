// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { FinalRequestOptions } from './request-options';
import { type Cloudflare } from '../client';
import { logger } from './utils/log';

export type APIResponseProps = {
  response: Response;
  options: FinalRequestOptions;
  controller: AbortController;
};

export async function defaultParseResponse<T>(client: Cloudflare, props: APIResponseProps): Promise<T> {
  const { response } = props;

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

    logger(client).debug('response', response.status, response.url, response.headers, json);

    return json as T;
  }

  const text = await response.text();
  logger(client).debug('response', response.status, response.url, response.headers, text);

  // TODO handle blob, arraybuffer, other content types, etc.
  return text as unknown as T;
}
