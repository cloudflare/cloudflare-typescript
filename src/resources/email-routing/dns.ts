// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DNSAPI from './dns';
import * as EmailRoutingAPI from './email-routing';

export class DNS extends APIResource {
  /**
   * Enable you Email Routing zone. Add and lock the necessary MX and SPF records.
   */
  create(params: DNSCreateParams, options?: Core.RequestOptions): Core.APIPromise<EmailRoutingAPI.Settings> {
    const { zone_id } = params;
    return (
      this._client.post(`/zones/${zone_id}/email/routing/dns`, options) as Core.APIPromise<{
        result: EmailRoutingAPI.Settings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Disable your Email Routing zone. Also removes additional MX records previously
   * required for Email Routing to work.
   */
  delete(params: DNSDeleteParams, options?: Core.RequestOptions): Core.APIPromise<EmailRoutingAPI.Settings> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}/email/routing/dns`, options) as Core.APIPromise<{
        result: EmailRoutingAPI.Settings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Unlock MX Records previously locked by Email Routing.
   */
  edit(params: DNSEditParams, options?: Core.RequestOptions): Core.APIPromise<EmailRoutingAPI.Settings> {
    const { zone_id } = params;
    return (
      this._client.patch(`/zones/${zone_id}/email/routing/dns`, options) as Core.APIPromise<{
        result: EmailRoutingAPI.Settings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show the DNS records needed to configure your Email Routing zone.
   */
  get(params: DNSGetParams, options?: Core.RequestOptions): Core.APIPromise<DNSGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/email/routing/dns`, options) as Core.APIPromise<{
        result: DNSGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
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

export type DNSGetResponse = Array<DNSRecord>;

export interface DNSCreateParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface DNSDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface DNSEditParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface DNSGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace DNS {
  export type DNSRecord = DNSAPI.DNSRecord;
  export type DNSGetResponse = DNSAPI.DNSGetResponse;
  export type DNSCreateParams = DNSAPI.DNSCreateParams;
  export type DNSDeleteParams = DNSAPI.DNSDeleteParams;
  export type DNSEditParams = DNSAPI.DNSEditParams;
  export type DNSGetParams = DNSAPI.DNSGetParams;
}
