// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ForceAxfrsAPI from 'cloudflare/resources/secondary-dns/force-axfrs';

export class ForceAxfrs extends APIResource {
  /**
   * Sends AXFR zone transfer request to primary nameserver(s).
   */
  create(zoneId: unknown, options?: Core.RequestOptions): Core.APIPromise<ForceAxfrCreateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/secondary_dns/force_axfr`, options) as Core.APIPromise<{
        result: ForceAxfrCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * When force_axfr query parameter is set to true, the response is a simple string
 */
export type ForceAxfrCreateResponse = string;

export namespace ForceAxfrs {
  export import ForceAxfrCreateResponse = ForceAxfrsAPI.ForceAxfrCreateResponse;
}
