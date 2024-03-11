// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ForceAXFRAPI from 'cloudflare/resources/secondary-dns/force-axfr';

export class ForceAXFR extends APIResource {
  /**
   * Sends AXFR zone transfer request to primary nameserver(s).
   */
  create(
    params: ForceAXFRCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecondaryDNSForceResult> {
    const { zone_id } = params;
    return (
      this._client.post(`/zones/${zone_id}/secondary_dns/force_axfr`, options) as Core.APIPromise<{
        result: SecondaryDNSForceResult;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * When force_axfr query parameter is set to true, the response is a simple string
 */
export type SecondaryDNSForceResult = string;

export interface ForceAXFRCreateParams {
  zone_id: unknown;
}

export namespace ForceAXFR {
  export import SecondaryDNSForceResult = ForceAXFRAPI.SecondaryDNSForceResult;
  export import ForceAXFRCreateParams = ForceAXFRAPI.ForceAXFRCreateParams;
}
