// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PreviewsAPI from './previews';

export class Previews extends APIResource {
  /**
   * Get the result of a previous preview operation using the provided preview_id.
   */
  get(
    previewId: string,
    params: PreviewGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PreviewGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/load_balancers/preview/${previewId}`,
        options,
      ) as Core.APIPromise<{ result: PreviewGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Resulting health data from a preview operation.
 */
export type PreviewGetResponse = Record<string, PreviewGetResponse.unnamed_schema_with_map_parent_0>;

export namespace PreviewGetResponse {
  export interface unnamed_schema_with_map_parent_0 {
    healthy?: boolean;

    origins?: Array<Record<string, unnamed_schema_with_map_parent_0.load_balancing_origin_health_data>>;
  }

  export namespace unnamed_schema_with_map_parent_0 {
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

export namespace Previews {
  export import PreviewGetResponse = PreviewsAPI.PreviewGetResponse;
  export import PreviewGetParams = PreviewsAPI.PreviewGetParams;
}
