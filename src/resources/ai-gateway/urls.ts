// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class URLs extends APIResource {
  /**
   * Retrieves the endpoint URL for an AI Gateway.
   *
   * @example
   * ```ts
   * const url = await client.aiGateway.urls.get(
   *   'my-gateway',
   *   'workers-ai',
   *   { account_id: '0d37909e38d3e99c29fa2cd343ac421a' },
   * );
   * ```
   */
  get(
    gatewayId: string,
    provider: string,
    params?: URLGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLGetResponse>;
  get(gatewayId: string, provider: string, options?: Core.RequestOptions): Core.APIPromise<URLGetResponse>;
  get(
    gatewayId: string,
    provider: string,
    params: URLGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(gatewayId, provider, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/url/${provider}`,
        options,
      ) as Core.APIPromise<{ result: URLGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type URLGetResponse = string;

export interface URLGetParams {
  account_id?: string;
}

export declare namespace URLs {
  export { type URLGetResponse as URLGetResponse, type URLGetParams as URLGetParams };
}
