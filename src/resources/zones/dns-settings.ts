// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as DNSSettingsAPI from './dns-settings';

export class DNSSettings extends APIResource {
  /**
   * Update DNS settings for a zone
   */
  edit(params: DNSSettingEditParams, options?: Core.RequestOptions): Core.APIPromise<DNSSetting> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/dns_settings`, { body, ...options }) as Core.APIPromise<{
        result: DNSSetting;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show DNS settings for a zone
   */
  get(params: DNSSettingGetParams, options?: Core.RequestOptions): Core.APIPromise<DNSSetting> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/dns_settings`, options) as Core.APIPromise<{ result: DNSSetting }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DNSSetting {
  /**
   * Whether to enable Foundation DNS Advanced Nameservers on the zone.
   */
  foundation_dns?: boolean;

  /**
   * Whether to enable multi-provider DNS, which causes Cloudflare to activate the
   * zone even when non-Cloudflare NS records exist, and to respect NS records at the
   * zone apex during outbound zone transfers.
   */
  multi_provider?: boolean;

  /**
   * Settings determining the nameservers through which the zone should be available.
   */
  nameservers?: Nameserver;

  /**
   * The time to live (TTL) of the zone's nameserver (NS) records.
   */
  ns_ttl?: number;

  /**
   * Allows a Secondary DNS zone to use (proxied) override records and CNAME
   * flattening at the zone apex.
   */
  secondary_overrides?: boolean;

  /**
   * Components of the zone's SOA record.
   */
  soa?: DNSSetting.SOA;

  /**
   * Whether the zone mode is a regular or CDN/DNS only zone.
   */
  zone_mode?: 'standard' | 'cdn_only' | 'dns_only';
}

export namespace DNSSetting {
  /**
   * Components of the zone's SOA record.
   */
  export interface SOA {
    /**
     * Time in seconds of being unable to query the primary server after which
     * secondary servers should stop serving the zone.
     */
    expire: number;

    /**
     * The time to live (TTL) for negative caching of records within the zone.
     */
    min_ttl: number;

    /**
     * The primary nameserver, which may be used for outbound zone transfers.
     */
    mname: string;

    /**
     * Time in seconds after which secondary servers should re-check the SOA record to
     * see if the zone has been updated.
     */
    refresh: number;

    /**
     * Time in seconds after which secondary servers should retry queries after the
     * primary server was unresponsive.
     */
    retry: number;

    /**
     * The email address of the zone administrator, with the first label representing
     * the local part of the email address.
     */
    rname: string;

    /**
     * The time to live (TTL) of the SOA record itself.
     */
    ttl: number;
  }
}

/**
 * Settings determining the nameservers through which the zone should be available.
 */
export interface Nameserver {
  /**
   * Nameserver type
   */
  type: 'cloudflare.standard';
}

/**
 * Settings determining the nameservers through which the zone should be available.
 */
export interface NameserverParam {
  /**
   * Nameserver type
   */
  type: 'cloudflare.standard';
}

export interface DNSSettingEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Whether to enable Foundation DNS Advanced Nameservers on the zone.
   */
  foundation_dns?: boolean;

  /**
   * Body param: Whether to enable multi-provider DNS, which causes Cloudflare to
   * activate the zone even when non-Cloudflare NS records exist, and to respect NS
   * records at the zone apex during outbound zone transfers.
   */
  multi_provider?: boolean;

  /**
   * Body param: Settings determining the nameservers through which the zone should
   * be available.
   */
  nameservers?: NameserverParam;

  /**
   * Body param: The time to live (TTL) of the zone's nameserver (NS) records.
   */
  ns_ttl?: number;

  /**
   * Body param: Allows a Secondary DNS zone to use (proxied) override records and
   * CNAME flattening at the zone apex.
   */
  secondary_overrides?: boolean;

  /**
   * Body param: Components of the zone's SOA record.
   */
  soa?: DNSSettingEditParams.SOA;

  /**
   * Body param: Whether the zone mode is a regular or CDN/DNS only zone.
   */
  zone_mode?: 'standard' | 'cdn_only' | 'dns_only';
}

export namespace DNSSettingEditParams {
  /**
   * Components of the zone's SOA record.
   */
  export interface SOA {
    /**
     * Time in seconds of being unable to query the primary server after which
     * secondary servers should stop serving the zone.
     */
    expire: number;

    /**
     * The time to live (TTL) for negative caching of records within the zone.
     */
    min_ttl: number;

    /**
     * The primary nameserver, which may be used for outbound zone transfers.
     */
    mname: string;

    /**
     * Time in seconds after which secondary servers should re-check the SOA record to
     * see if the zone has been updated.
     */
    refresh: number;

    /**
     * Time in seconds after which secondary servers should retry queries after the
     * primary server was unresponsive.
     */
    retry: number;

    /**
     * The email address of the zone administrator, with the first label representing
     * the local part of the email address.
     */
    rname: string;

    /**
     * The time to live (TTL) of the SOA record itself.
     */
    ttl: number;
  }
}

export interface DNSSettingGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace DNSSettings {
  export import DNSSetting = DNSSettingsAPI.DNSSetting;
  export import Nameserver = DNSSettingsAPI.Nameserver;
  export import DNSSettingEditParams = DNSSettingsAPI.DNSSettingEditParams;
  export import DNSSettingGetParams = DNSSettingsAPI.DNSSettingGetParams;
}
