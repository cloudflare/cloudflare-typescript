// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DNSSettingsAPI from 'cloudflare/resources/zones/dns-settings';

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
   * Allows a Secondary DNS zone to use (proxied) override records and CNAME
   * flattening at the zone apex.
   */
  secondary_overrides?: boolean;
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
  nameservers?: Nameserver;

  /**
   * Body param: Allows a Secondary DNS zone to use (proxied) override records and
   * CNAME flattening at the zone apex.
   */
  secondary_overrides?: boolean;
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
