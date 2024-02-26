// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as StatusAPI from 'cloudflare/resources/secondary-dns/outgoing/status';

export class Status extends APIResource {
  /**
   * Get primary zone transfer status.
   */
  get(params: StatusGetParams, options?: Core.RequestOptions): Core.APIPromise<StatusGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/secondary_dns/outgoing/status`, options) as Core.APIPromise<{
        result: StatusGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The zone transfer status of a primary zone
 */
export type StatusGetResponse = string;

export interface StatusGetParams {
  zone_id: unknown;
}

export namespace Status {
  export import StatusGetResponse = StatusAPI.StatusGetResponse;
  export import StatusGetParams = StatusAPI.StatusGetParams;
}
