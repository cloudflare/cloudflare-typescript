// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Previews extends APIResource {
  /**
   * Get the result of a previous preview operation using the provided preview_id.
   */
  get(previewID: string, params: PreviewGetParams, options?: RequestOptions): APIPromise<PreviewGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/load_balancers/preview/${previewID}`,
        options,
      ) as APIPromise<{ result: PreviewGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Resulting health data from a preview operation.
 */
export type PreviewGetResponse = Record<string, PreviewGetResponse.item>;

export namespace PreviewGetResponse {
  export interface item {
    healthy?: boolean;

    origins?: Array<Record<string, item.load_balancing_origin_health_data>>;
  }

  export namespace item {
    /**
     * The origin ipv4/ipv6 address or domain name mapped to it's health data.
     */
    export interface load_balancing_origin_health_data {
      failure_reason?: string;

      healthy?: boolean;

      response_code?: number;

      rtt?: string;
    }
  }
}

export interface PreviewGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Previews {
  export { type PreviewGetResponse as PreviewGetResponse, type PreviewGetParams as PreviewGetParams };
}
