// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as DNSAPI from '../../email-routing/dns';
import { DNSRecordsSinglePage } from '../../email-routing/dns';

export class DNS extends APIResource {
  /**
   * Returns the expected DNS records for a sending subdomain.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const dnsRecord of client.emailSending.subdomains.dns.get(
   *   'aabbccdd11223344aabbccdd11223344',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  get(
    subdomainId: string,
    params: DNSGetParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DNSRecordsSinglePage, DNSAPI.DNSRecord> {
    const { zone_id } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/email/sending/subdomains/${subdomainId}/dns`,
      DNSRecordsSinglePage,
      options,
    );
  }
}

export interface DNSGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export declare namespace DNS {
  export { type DNSGetParams as DNSGetParams };
}

export { DNSRecordsSinglePage };
