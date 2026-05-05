// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseURLs extends APIResource {
  static override readonly _key: readonly ['aiGateway', 'urls'] = Object.freeze([
    'aiGateway',
    'urls',
  ] as const);

  /**
   * Retrieves the endpoint URL for an AI Gateway.
   *
   * @example
   * ```ts
   * const url = await client.aiGateway.urls.get('workers-ai', {
   *   account_id: '0d37909e38d3e99c29fa2cd343ac421a',
   *   gateway_id: 'my-gateway',
   * });
   * ```
   */
  get(provider: string, params: URLGetParams, options?: RequestOptions): APIPromise<URLGetResponse> {
    const { account_id, gateway_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/url/${provider}`,
        options,
      ) as APIPromise<{ result: URLGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class URLs extends BaseURLs {}

export type URLGetResponse = string;

export interface URLGetParams {
  account_id: string;

  /**
   * gateway id
   */
  gateway_id: string;
}

export declare namespace URLs {
  export { type URLGetResponse as URLGetResponse, type URLGetParams as URLGetParams };
}
