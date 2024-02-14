// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PreviewsAPI from 'cloudflare/resources/load-balancers/previews';

export class Previews extends APIResource {
  /**
   * Get the result of a previous preview operation using the provided preview_id.
   */
  retrieve(
    accountIdentifier: string,
    previewId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PreviewRetrieveResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/load_balancers/preview/${previewId}`,
        options,
      ) as Core.APIPromise<{ result: PreviewRetrieveResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Resulting health data from a preview operation.
 */
export type PreviewRetrieveResponse = Record<
  string,
  PreviewRetrieveResponse.unnamed_schema_with_map_parent_0
>;

export namespace PreviewRetrieveResponse {
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

export namespace Previews {
  export import PreviewRetrieveResponse = PreviewsAPI.PreviewRetrieveResponse;
}
