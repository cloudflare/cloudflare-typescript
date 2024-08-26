// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as DNSAPI from './dns';
import * as EmailRoutingAPI from './email-routing';

export class DNS extends APIResource {
  /**
   * Enable you Email Routing zone. Add and lock the necessary MX and SPF records.
   */
  create(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<EmailRoutingAPI.Settings> {
    return (this._client.post(`/zones/${zoneIdentifier}/email/routing/dns`, options) as Core.APIPromise<{ result: EmailRoutingAPI.Settings }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Disable your Email Routing zone. Also removes additional MX records previously
   * required for Email Routing to work.
   */
  delete(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<EmailRoutingAPI.Settings> {
    return (this._client.delete(`/zones/${zoneIdentifier}/email/routing/dns`, options) as Core.APIPromise<{ result: EmailRoutingAPI.Settings }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Unlock MX Records previously locked by Email Routing.
   */
  edit(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<EmailRoutingAPI.Settings> {
    return (this._client.patch(`/zones/${zoneIdentifier}/email/routing/dns`, options) as Core.APIPromise<{ result: EmailRoutingAPI.Settings }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show the DNS records needed to configure your Email Routing zone.
   */
  get(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<DNSGetResponse> {
    return (this._client.get(`/zones/${zoneIdentifier}/email/routing/dns`, options) as Core.APIPromise<{ result: DNSGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

/**
 * List of records needed to enable an Email Routing zone.
 */
export interface DNSRecord {
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
  type?: 'A' | 'AAAA' | 'CNAME' | 'HTTPS' | 'TXT' | 'SRV' | 'LOC' | 'MX' | 'NS' | 'CERT' | 'DNSKEY' | 'DS' | 'NAPTR' | 'SMIMEA' | 'SSHFP' | 'SVCB' | 'TLSA' | 'URI';
}

export type DNSGetResponse = Array<DNSRecord>

export namespace DNS {
  export import DNSRecord = DNSAPI.DNSRecord;
  export import DNSGetResponse = DNSAPI.DNSGetResponse;
}
