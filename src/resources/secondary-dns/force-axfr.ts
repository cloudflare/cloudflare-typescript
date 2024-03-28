// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ForceAXFRAPI from 'cloudflare/resources/secondary-dns/force-axfr';

export class ForceAXFR extends APIResource {
  /**
   * Sends AXFR zone transfer request to primary nameserver(s).
   */
  create(params: ForceAXFRCreateParams, options?: Core.RequestOptions): Core.APIPromise<SecondaryDNSForce> {
    const { zone_id } = params;
    return (
      this._client.post(`/zones/${zone_id}/secondary_dns/force_axfr`, options) as Core.APIPromise<{
        result: SecondaryDNSForce;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * When force_axfr query parameter is set to true, the response is a simple string
 */
export type SecondaryDNSForce = string;

export interface ForceAXFRCreateParams {
  zone_id: string;
}

export namespace ForceAXFR {
  export import SecondaryDNSForce = ForceAXFRAPI.SecondaryDNSForce;
  export import ForceAXFRCreateParams = ForceAXFRAPI.ForceAXFRCreateParams;
}
