// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as StatusAPI from 'cloudflare/resources/secondary-dns/outgoing/status';

export class Status extends APIResource {
  /**
   * Get primary zone transfer status.
   */
  get(zoneId: unknown, options?: Core.RequestOptions): Core.APIPromise<StatusGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/secondary_dns/outgoing/status`, options) as Core.APIPromise<{
        result: StatusGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The zone transfer status of a primary zone
 */
export type StatusGetResponse = string;

export namespace Status {
  export import StatusGetResponse = StatusAPI.StatusGetResponse;
}
