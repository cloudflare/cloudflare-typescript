// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Analytics } from './analytics/analytics';
import { Apps } from './apps';
import * as AppsAPI from './apps';
import * as AnalyticsAPI from './analytics/analytics';

export class Spectrum extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
}

/**
 * The name and type of DNS record for the Spectrum application.
 */
export interface DNS {
  /**
   * The name of the DNS record associated with the application.
   */
  name?: string;

  /**
   * The type of DNS record associated with the application.
   */
  type?: 'CNAME' | 'ADDRESS';
}

/**
 * The name and type of DNS record for the Spectrum application.
 */
export interface DNSParam {
  /**
   * The name of the DNS record associated with the application.
   */
  name?: string;

  /**
   * The type of DNS record associated with the application.
   */
  type?: 'CNAME' | 'ADDRESS';
}

/**
 * The anycast edge IP configuration for the hostname of this application.
 */
export type EdgeIPs = EdgeIPs.UnionMember0 | EdgeIPs.UnionMember1

export namespace EdgeIPs {
  export interface UnionMember0 {
    /**
     * The IP versions supported for inbound connections on Spectrum anycast IPs.
     */
    connectivity?: 'all' | 'ipv4' | 'ipv6';

    /**
     * The type of edge IP configuration specified. Dynamically allocated edge IPs use
     * Spectrum anycast IPs in accordance with the connectivity you specify. Only valid
     * with CNAME DNS names.
     */
    type?: 'dynamic';
  }

  export interface UnionMember1 {
    /**
     * The array of customer owned IPs we broadcast via anycast for this hostname and
     * application.
     */
    ips?: Array<string>;

    /**
     * The type of edge IP configuration specified. Statically allocated edge IPs use
     * customer IPs in accordance with the ips array you specify. Only valid with
     * ADDRESS DNS names.
     */
    type?: 'static';
  }
}

/**
 * The anycast edge IP configuration for the hostname of this application.
 */
export type EdgeIPsParam = EdgeIPsParam.UnionMember0 | EdgeIPsParam.UnionMember1

export namespace EdgeIPsParam {
  export interface UnionMember0 {
    /**
     * The IP versions supported for inbound connections on Spectrum anycast IPs.
     */
    connectivity?: 'all' | 'ipv4' | 'ipv6';

    /**
     * The type of edge IP configuration specified. Dynamically allocated edge IPs use
     * Spectrum anycast IPs in accordance with the connectivity you specify. Only valid
     * with CNAME DNS names.
     */
    type?: 'dynamic';
  }

  export interface UnionMember1 {
    /**
     * The array of customer owned IPs we broadcast via anycast for this hostname and
     * application.
     */
    ips?: Array<string>;

    /**
     * The type of edge IP configuration specified. Statically allocated edge IPs use
     * customer IPs in accordance with the ips array you specify. Only valid with
     * ADDRESS DNS names.
     */
    type?: 'static';
  }
}

/**
 * The name and type of DNS record for the Spectrum application.
 */
export interface OriginDNS {
  /**
   * The name of the DNS record associated with the origin.
   */
  name?: string;

  /**
   * The TTL of our resolution of your DNS record in seconds.
   */
  ttl?: number;

  /**
   * The type of DNS record associated with the origin. "" is used to specify a
   * combination of A/AAAA records.
   */
  type?: '' | 'A' | 'AAAA' | 'SRV';
}

/**
 * The name and type of DNS record for the Spectrum application.
 */
export interface OriginDNSParam {
  /**
   * The name of the DNS record associated with the origin.
   */
  name?: string;

  /**
   * The TTL of our resolution of your DNS record in seconds.
   */
  ttl?: number;

  /**
   * The type of DNS record associated with the origin. "" is used to specify a
   * combination of A/AAAA records.
   */
  type?: '' | 'A' | 'AAAA' | 'SRV';
}

/**
 * The destination port at the origin. Only specified in conjunction with
 * origin_dns. May use an integer to specify a single origin port, for example
 * `1000`, or a string to specify a range of origin ports, for example
 * `"1000-2000"`. Notes: If specifying a port range, the number of ports in the
 * range must match the number of ports specified in the "protocol" field.
 */
export type OriginPort = number | string

/**
 * The destination port at the origin. Only specified in conjunction with
 * origin_dns. May use an integer to specify a single origin port, for example
 * `1000`, or a string to specify a range of origin ports, for example
 * `"1000-2000"`. Notes: If specifying a port range, the number of ports in the
 * range must match the number of ports specified in the "protocol" field.
 */
export type OriginPortParam = number | string

export namespace Spectrum {
  export import Analytics = AnalyticsAPI.Analytics;
  export import Apps = AppsAPI.Apps;
  export import AppCreateResponse = AppsAPI.AppCreateResponse;
  export import AppUpdateResponse = AppsAPI.AppUpdateResponse;
  export import AppListResponse = AppsAPI.AppListResponse;
  export import AppDeleteResponse = AppsAPI.AppDeleteResponse;
  export import AppGetResponse = AppsAPI.AppGetResponse;
  export import AppCreateParams = AppsAPI.AppCreateParams;
  export import AppUpdateParams = AppsAPI.AppUpdateParams;
  export import AppListParams = AppsAPI.AppListParams;
  export import AppDeleteParams = AppsAPI.AppDeleteParams;
  export import AppGetParams = AppsAPI.AppGetParams;
}
