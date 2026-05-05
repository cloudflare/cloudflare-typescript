// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DNSAPI from '../../email-routing/dns';
import { DNSRecordsSinglePage } from '../../email-routing/dns';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseDNS extends APIResource {
  static override readonly _key: readonly ['emailSending', 'subdomains', 'dns'] = Object.freeze([
    'emailSending',
    'subdomains',
    'dns',
  ] as const);

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
    subdomainID: string,
    params: DNSGetParams,
    options?: RequestOptions,
  ): PagePromise<DNSRecordsSinglePage, DNSAPI.DNSRecord> {
    const { zone_id } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/email/sending/subdomains/${subdomainID}/dns`,
      SinglePage<DNSAPI.DNSRecord>,
      options,
    );
  }
}
export class DNS extends BaseDNS {}

export interface DNSGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export declare namespace DNS {
  export { type DNSGetParams as DNSGetParams };
}

export { type DNSRecordsSinglePage };
