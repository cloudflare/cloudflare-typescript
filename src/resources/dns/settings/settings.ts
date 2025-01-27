// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { CloudflareError } from 'cloudflare/error';
import * as ViewsAPI from './views';
import {
  ViewCreateParams,
  ViewCreateResponse,
  ViewDeleteParams,
  ViewDeleteResponse,
  ViewEditParams,
  ViewEditResponse,
  ViewGetParams,
  ViewGetResponse,
  ViewListParams,
  ViewListResponse,
  ViewListResponsesV4PagePaginationArray,
  Views,
} from './views';

export class Settings extends APIResource {
  views: ViewsAPI.Views = new ViewsAPI.Views(this._client);

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
   * Whether to flatten all CNAME records in the zone. Note that, due to DNS
   * limitations, a CNAME record at the zone apex will always be flattened.
   */
  flatten_all_cnames?: boolean;

  /**
   * Whether to enable Foundation DNS Advanced Nameservers on the zone.
   */
  foundation_dns?: boolean;

  /**
   * Settings for this internal zone.
   */
  internal_dns?: DNSSetting.InternalDNS;

  /**
   * Whether to enable multi-provider DNS, which causes Cloudflare to activate the
   * zone even when non-Cloudflare NS records exist, and to respect NS records at the
   * zone apex during outbound zone transfers.
   */
  multi_provider?: boolean;

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
   * Settings for this internal zone.
   */
  export interface InternalDNS {
    /**
     * The ID of the zone to fallback to.
     */
    reference_zone_id?: string;
  }

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

export interface SettingEditResponse {
  zone_defaults?: SettingEditResponse.ZoneDefaults;
}

export namespace SettingEditResponse {
  export interface ZoneDefaults {
    /**
     * Whether to flatten all CNAME records in the zone. Note that, due to DNS
     * limitations, a CNAME record at the zone apex will always be flattened.
     */
    flatten_all_cnames?: boolean;

    /**
     * Whether to enable Foundation DNS Advanced Nameservers on the zone.
     */
    foundation_dns?: boolean;

    /**
     * Settings for this internal zone.
     */
    internal_dns?: ZoneDefaults.InternalDNS;

    /**
     * Whether to enable multi-provider DNS, which causes Cloudflare to activate the
     * zone even when non-Cloudflare NS records exist, and to respect NS records at the
     * zone apex during outbound zone transfers.
     */
    multi_provider?: boolean;

    /**
     * Settings determining the nameservers through which the zone should be available.
     */
    nameservers?: ZoneDefaults.Nameservers;

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
    soa?: ZoneDefaults.SOA;

    /**
     * Whether the zone mode is a regular or CDN/DNS only zone.
     */
    zone_mode?: 'standard' | 'cdn_only' | 'dns_only';
  }

  export namespace ZoneDefaults {
    /**
     * Settings for this internal zone.
     */
    export interface InternalDNS {
      /**
       * The ID of the zone to fallback to.
       */
      reference_zone_id?: string;
    }

    /**
     * Settings determining the nameservers through which the zone should be available.
     */
    export interface Nameservers {
      /**
       * Nameserver type
       */
      type: 'cloudflare.standard' | 'cloudflare.standard.random' | 'custom.account' | 'custom.tenant';
    }

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
}

export interface SettingGetResponse {
  zone_defaults?: SettingGetResponse.ZoneDefaults;
}

export namespace SettingGetResponse {
  export interface ZoneDefaults {
    /**
     * Whether to flatten all CNAME records in the zone. Note that, due to DNS
     * limitations, a CNAME record at the zone apex will always be flattened.
     */
    flatten_all_cnames?: boolean;

    /**
     * Whether to enable Foundation DNS Advanced Nameservers on the zone.
     */
    foundation_dns?: boolean;

    /**
     * Settings for this internal zone.
     */
    internal_dns?: ZoneDefaults.InternalDNS;

    /**
     * Whether to enable multi-provider DNS, which causes Cloudflare to activate the
     * zone even when non-Cloudflare NS records exist, and to respect NS records at the
     * zone apex during outbound zone transfers.
     */
    multi_provider?: boolean;

    /**
     * Settings determining the nameservers through which the zone should be available.
     */
    nameservers?: ZoneDefaults.Nameservers;

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
    soa?: ZoneDefaults.SOA;

    /**
     * Whether the zone mode is a regular or CDN/DNS only zone.
     */
    zone_mode?: 'standard' | 'cdn_only' | 'dns_only';
  }

  export namespace ZoneDefaults {
    /**
     * Settings for this internal zone.
     */
    export interface InternalDNS {
      /**
       * The ID of the zone to fallback to.
       */
      reference_zone_id?: string;
    }

    /**
     * Settings determining the nameservers through which the zone should be available.
     */
    export interface Nameservers {
      /**
       * Nameserver type
       */
      type: 'cloudflare.standard' | 'cloudflare.standard.random' | 'custom.account' | 'custom.tenant';
    }

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
  zone_defaults?: SettingEditParams.ZoneDefaults;
}

export namespace SettingEditParams {
  export interface ZoneDefaults {
    /**
     * Whether to flatten all CNAME records in the zone. Note that, due to DNS
     * limitations, a CNAME record at the zone apex will always be flattened.
     */
    flatten_all_cnames?: boolean;

    /**
     * Whether to enable Foundation DNS Advanced Nameservers on the zone.
     */
    foundation_dns?: boolean;

    /**
     * Settings for this internal zone.
     */
    internal_dns?: ZoneDefaults.InternalDNS;

    /**
     * Whether to enable multi-provider DNS, which causes Cloudflare to activate the
     * zone even when non-Cloudflare NS records exist, and to respect NS records at the
     * zone apex during outbound zone transfers.
     */
    multi_provider?: boolean;

    /**
     * Settings determining the nameservers through which the zone should be available.
     */
    nameservers?: ZoneDefaults.Nameservers;

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
    soa?: ZoneDefaults.SOA;

    /**
     * Whether the zone mode is a regular or CDN/DNS only zone.
     */
    zone_mode?: 'standard' | 'cdn_only' | 'dns_only';
  }

  export namespace ZoneDefaults {
    /**
     * Settings for this internal zone.
     */
    export interface InternalDNS {
      /**
       * The ID of the zone to fallback to.
       */
      reference_zone_id?: string;
    }

    /**
     * Settings determining the nameservers through which the zone should be available.
     */
    export interface Nameservers {
      /**
       * Nameserver type
       */
      type: 'cloudflare.standard' | 'cloudflare.standard.random' | 'custom.account' | 'custom.tenant';
    }

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

Settings.Views = Views;
Settings.ViewListResponsesV4PagePaginationArray = ViewListResponsesV4PagePaginationArray;

export declare namespace Settings {
  export {
    type DNSSetting as DNSSetting,
    type SettingEditResponse as SettingEditResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingEditParams as SettingEditParams,
    type SettingGetParams as SettingGetParams,
  };

  export {
    Views as Views,
    type ViewCreateResponse as ViewCreateResponse,
    type ViewListResponse as ViewListResponse,
    type ViewDeleteResponse as ViewDeleteResponse,
    type ViewEditResponse as ViewEditResponse,
    type ViewGetResponse as ViewGetResponse,
    ViewListResponsesV4PagePaginationArray as ViewListResponsesV4PagePaginationArray,
    type ViewCreateParams as ViewCreateParams,
    type ViewListParams as ViewListParams,
    type ViewDeleteParams as ViewDeleteParams,
    type ViewEditParams as ViewEditParams,
    type ViewGetParams as ViewGetParams,
  };
}
