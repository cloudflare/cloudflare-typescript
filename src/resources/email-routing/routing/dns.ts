// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DNSAPI from 'cloudflare/resources/email-routing/routing/dns';

export class DNS extends APIResource {
  /**
   * Show the DNS records needed to configure your Email Routing zone.
   */
  get(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<DNSGetResponse | null> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/email/routing/dns`, options) as Core.APIPromise<{
        result: DNSGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DNSGetResponse = Array<DNSGetResponse.DNSGetResponseItem>;

export namespace DNSGetResponse {
  /**
   * List of records needed to enable an Email Routing zone.
   */
  export interface DNSGetResponseItem {
    /**
     * DNS record content.
     */
    content?: string;

    /**
     * DNS record name (or @ for the zone apex).
     */
    name?: string;

    /**
     * Required for MX, SRV and URI records. Unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority?: number;

    /**
     * Time to live, in seconds, of the DNS record. Must be between 60 and 86400, or 1
     * for 'automatic'.
     */
    ttl?: number | 1;

    /**
     * DNS record type.
     */
    type?:
      | 'A'
      | 'AAAA'
      | 'CNAME'
      | 'HTTPS'
      | 'TXT'
      | 'SRV'
      | 'LOC'
      | 'MX'
      | 'NS'
      | 'CERT'
      | 'DNSKEY'
      | 'DS'
      | 'NAPTR'
      | 'SMIMEA'
      | 'SSHFP'
      | 'SVCB'
      | 'TLSA'
      | 'URI';
  }
}

export namespace DNS {
  export import DNSGetResponse = DNSAPI.DNSGetResponse;
}
