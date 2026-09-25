// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EmailRoutingAPI from './email-routing';
import { APIPromise } from '../../core/api-promise';
import { SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseDNS extends APIResource {
  static override readonly _key: readonly ['emailRouting', 'dns'] = Object.freeze([
    'emailRouting',
    'dns',
  ] as const);

  /**
   * Enable your Email Routing zone. Add and lock the necessary MX and SPF records.
   *
   * @example
   * ```ts
   * const settings = await client.emailRouting.dns.create({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  create(params: DNSCreateParams, options?: RequestOptions): APIPromise<EmailRoutingAPI.Settings> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/email/routing/dns`, { body, ...options }) as APIPromise<{
        result: EmailRoutingAPI.Settings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Disable your Email Routing zone. Also removes additional MX records previously
   * required for Email Routing to work.
   *
   * @example
   * ```ts
   * const settings = await client.emailRouting.dns.delete({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  delete(params: DNSDeleteParams, options?: RequestOptions): APIPromise<EmailRoutingAPI.Settings> {
    const { zone_id } = params;
    return (
      this._client.delete(path`/zones/${zone_id}/email/routing/dns`, options) as APIPromise<{
        result: EmailRoutingAPI.Settings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Unlock MX Records previously locked by Email Routing.
   *
   * @example
   * ```ts
   * const settings = await client.emailRouting.dns.edit({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  edit(params: DNSEditParams, options?: RequestOptions): APIPromise<EmailRoutingAPI.Settings> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/email/routing/dns`, { body, ...options }) as APIPromise<{
        result: EmailRoutingAPI.Settings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show the DNS records needed to configure your Email Routing zone.
   *
   * @example
   * ```ts
   * const dnsRecords = await client.emailRouting.dns.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: DNSGetParams, options?: RequestOptions): APIPromise<DNSGetResponse> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(path`/zones/${zone_id}/email/routing/dns`, { query, ...options }) as APIPromise<{
        result: DNSGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class DNS extends BaseDNS {}

export type DNSRecordsSinglePage = SinglePage<DNSRecord>;

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
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Domain of your zone.
   */
  name?: string;
}

export interface DNSDeleteParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface DNSEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Domain of your zone.
   */
  name?: string;
}

export interface DNSGetParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Query param: Deprecated. When supplied, the response shape differs from the
   * documented default and is not modeled in generated SDKs. Do not rely on this
   * parameter.
   */
  subdomain?: string;
}

export declare namespace DNS {
  export {
    type DNSRecord as DNSRecord,
    type DNSGetResponse as DNSGetResponse,
    type DNSCreateParams as DNSCreateParams,
    type DNSDeleteParams as DNSDeleteParams,
    type DNSEditParams as DNSEditParams,
    type DNSGetParams as DNSGetParams,
  };
}
