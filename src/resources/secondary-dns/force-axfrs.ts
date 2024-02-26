// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ForceAxfrsAPI from 'cloudflare/resources/secondary-dns/force-axfrs';

export class ForceAxfrs extends APIResource {
  /**
   * Sends AXFR zone transfer request to primary nameserver(s).
   */
  create(
    params: ForceAxfrCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ForceAxfrCreateResponse> {
    const { zone_id } = params;
    return (
      this._client.post(`/zones/${zone_id}/secondary_dns/force_axfr`, options) as Core.APIPromise<{
        result: ForceAxfrCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * When force_axfr query parameter is set to true, the response is a simple string
 */
export type ForceAxfrCreateResponse = string;

export interface ForceAxfrCreateParams {
  zone_id: unknown;
}

export namespace ForceAxfrs {
  export import ForceAxfrCreateResponse = ForceAxfrsAPI.ForceAxfrCreateResponse;
  export import ForceAxfrCreateParams = ForceAxfrsAPI.ForceAxfrCreateParams;
}
