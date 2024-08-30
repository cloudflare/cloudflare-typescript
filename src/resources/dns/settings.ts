// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { CloudflareError } from '../../error';
import * as SettingsAPI from './settings';

export class Settings extends APIResource {
  /**
   * Update DNS settings for an account or zone
   */
  edit(params: SettingEditParams, options?: Core.RequestOptions): Core.APIPromise<SettingEditResponse> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.patch(`/${accountOrZone}/${accountOrZoneId}/dns_settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SettingEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show DNS settings for an account or zone
   */
  get(params?: SettingGetParams, options?: Core.RequestOptions): Core.APIPromise<SettingGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<SettingGetResponse>;
  get(
    params: SettingGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingGetResponse> {
    if (isRequestOptions(params)) {
      return this.get({}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(`/${accountOrZone}/${accountOrZoneId}/dns_settings`, options) as Core.APIPromise<{
        result: SettingGetResponse;
      }>
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

export interface DNSSettingParam {
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
  nameservers?: NameserverParam;

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
  soa?: DNSSettingParam.SOA;

  /**
   * Whether the zone mode is a regular or CDN/DNS only zone.
   */
  zone_mode?: 'standard' | 'cdn_only' | 'dns_only';
}

export namespace DNSSettingParam {
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

export interface SettingEditResponse {
  zone_defaults?: DNSSetting;
}

export interface SettingGetResponse {
  zone_defaults?: DNSSetting;
}

export interface SettingEditParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param:
   */
  zone_defaults?: DNSSettingParam;
}

export interface SettingGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace Settings {
  export import DNSSetting = SettingsAPI.DNSSetting;
  export import Nameserver = SettingsAPI.Nameserver;
  export import SettingEditResponse = SettingsAPI.SettingEditResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
}
