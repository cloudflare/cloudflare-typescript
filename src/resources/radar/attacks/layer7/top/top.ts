// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { isRequestOptions } from '../../../../../core';
import * as Core from '../../../../../core';
import * as AsesAPI from './ases';
import { AseOriginParams, AseOriginResponse, Ases } from './ases';
import * as LocationsAPI from './locations';
import {
  LocationOriginParams,
  LocationOriginResponse,
  LocationTargetParams,
  LocationTargetResponse,
  Locations,
} from './locations';

export class Top extends APIResource {
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  ases: AsesAPI.Ases = new AsesAPI.Ases(this._client);

  /**
   * Retrieves the top attacks from origin to target location. Values are percentages
   * of the total layer 7 attacks (with billing country). The attack magnitude can be
   * defined by the number of mitigated requests or by the number of zones affected.
   * You can optionally limit the number of attacks by origin/target location (useful
   * if all the top attacks are from or to the same location).
   */
  attacks(query?: TopAttacksParams, options?: Core.RequestOptions): Core.APIPromise<TopAttacksResponse>;
  attacks(options?: Core.RequestOptions): Core.APIPromise<TopAttacksResponse>;
  attacks(
    query: TopAttacksParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopAttacksResponse> {
    if (isRequestOptions(query)) {
      return this.attacks({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer7/top/attacks', { query, ...options }) as Core.APIPromise<{
        result: TopAttacksResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the industries targeted by layer 7 attacks.
   */
  industry(query?: TopIndustryParams, options?: Core.RequestOptions): Core.APIPromise<TopIndustryResponse>;
  industry(options?: Core.RequestOptions): Core.APIPromise<TopIndustryResponse>;
  industry(
    query: TopIndustryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopIndustryResponse> {
    if (isRequestOptions(query)) {
      return this.industry({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer7/top/industry', { query, ...options }) as Core.APIPromise<{
        result: TopIndustryResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the verticals targeted by layer 7 attacks.
   */
  vertical(query?: TopVerticalParams, options?: Core.RequestOptions): Core.APIPromise<TopVerticalResponse>;
  vertical(options?: Core.RequestOptions): Core.APIPromise<TopVerticalResponse>;
  vertical(
    query: TopVerticalParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopVerticalResponse> {
    if (isRequestOptions(query)) {
      return this.vertical({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer7/top/vertical', { query, ...options }) as Core.APIPromise<{
        result: TopVerticalResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TopAttacksResponse {
  meta: TopAttacksResponse.Meta;

  top_0: Array<TopAttacksResponse.Top0>;
}

export namespace TopAttacksResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface ConfidenceInfo {
      annotations?: Array<ConfidenceInfo.Annotation>;

      level?: number;
    }

    export namespace ConfidenceInfo {
      export interface Annotation {
        dataSource: string;

        description: string;

        eventType: string;

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Top0 {
    originCountryAlpha2: string;

    originCountryName: string;

    targetCountryAlpha2: string;

    targetCountryName: string;

    value: string;
  }
}

export interface TopIndustryResponse {
  meta: TopIndustryResponse.Meta;

  top_0: Array<TopIndustryResponse.Top0>;
}

export namespace TopIndustryResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface ConfidenceInfo {
      annotations?: Array<ConfidenceInfo.Annotation>;

      level?: number;
    }

    export namespace ConfidenceInfo {
      export interface Annotation {
        dataSource: string;

        description: string;

        eventType: string;

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Top0 {
    name: string;

    value: string;
  }
}

export interface TopVerticalResponse {
  meta: TopVerticalResponse.Meta;

  top_0: Array<TopVerticalResponse.Top0>;
}

export namespace TopVerticalResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface ConfidenceInfo {
      annotations?: Array<ConfidenceInfo.Annotation>;

      level?: number;
    }

    export namespace ConfidenceInfo {
      export interface Annotation {
        dataSource: string;

        description: string;

        eventType: string;

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Top0 {
    name: string;

    value: string;
  }
}

export interface TopAttacksParams {
  /**
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Comma-separated list of continents (alpha-2 continent codes). Prefix with `-` to
   * exclude continents from results. For example, `-EU,NA` excludes results from EU,
   * but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by the specified date range. For example, use `7d` and
   * `7dcontrol` to compare this week with the previous week. Use this parameter or
   * set specific start and end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Array of attack origin/target location attack limits. Together with
   * `limitPerLocation`, limits how many objects will be fetched per origin/target
   * location.
   */
  limitDirection?: 'ORIGIN' | 'TARGET';

  /**
   * Limits the number of attacks per origin/target (refer to `limitDirection`
   * parameter) location.
   */
  limitPerLocation?: number;

  /**
   * Comma-separated list of locations (alpha-2 codes). Prefix with `-` to exclude
   * locations from results. For example, `-US,PT` excludes results from the US, but
   * includes results from PT.
   */
  location?: Array<string>;

  /**
   * This parameter is deprecated. In the future, we will only support attack
   * magnitude defined by the total number of mitigated requests
   * (MITIGATED_REQUESTS).
   */
  magnitude?: 'AFFECTED_ZONES' | 'MITIGATED_REQUESTS';

  /**
   * Array of L7 mitigation products.
   */
  mitigationProduct?: Array<
    | 'DDOS'
    | 'WAF'
    | 'BOT_MANAGEMENT'
    | 'ACCESS_RULES'
    | 'IP_REPUTATION'
    | 'API_SHIELD'
    | 'DATA_LOSS_PREVENTION'
  >;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE' | 'MIN_MAX';
}

export interface TopIndustryParams {
  /**
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Comma-separated list of continents (alpha-2 continent codes). Prefix with `-` to
   * exclude continents from results. For example, `-EU,NA` excludes results from EU,
   * but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by the specified date range. For example, use `7d` and
   * `7dcontrol` to compare this week with the previous week. Use this parameter or
   * set specific start and end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by HTTP method.
   */
  httpMethod?: Array<
    | 'GET'
    | 'POST'
    | 'DELETE'
    | 'PUT'
    | 'HEAD'
    | 'PURGE'
    | 'OPTIONS'
    | 'PROPFIND'
    | 'MKCOL'
    | 'PATCH'
    | 'ACL'
    | 'BCOPY'
    | 'BDELETE'
    | 'BMOVE'
    | 'BPROPFIND'
    | 'BPROPPATCH'
    | 'CHECKIN'
    | 'CHECKOUT'
    | 'CONNECT'
    | 'COPY'
    | 'LABEL'
    | 'LOCK'
    | 'MERGE'
    | 'MKACTIVITY'
    | 'MKWORKSPACE'
    | 'MOVE'
    | 'NOTIFY'
    | 'ORDERPATCH'
    | 'POLL'
    | 'PROPPATCH'
    | 'REPORT'
    | 'SEARCH'
    | 'SUBSCRIBE'
    | 'TRACE'
    | 'UNCHECKOUT'
    | 'UNLOCK'
    | 'UNSUBSCRIBE'
    | 'UPDATE'
    | 'VERSIONCONTROL'
    | 'BASELINECONTROL'
    | 'XMSENUMATTS'
    | 'RPC_OUT_DATA'
    | 'RPC_IN_DATA'
    | 'JSON'
    | 'COOK'
    | 'TRACK'
  >;

  /**
   * Filters results by HTTP version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Comma-separated list of locations (alpha-2 codes). Prefix with `-` to exclude
   * locations from results. For example, `-US,PT` excludes results from the US, but
   * includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of L7 mitigation products.
   */
  mitigationProduct?: Array<
    | 'DDOS'
    | 'WAF'
    | 'BOT_MANAGEMENT'
    | 'ACCESS_RULES'
    | 'IP_REPUTATION'
    | 'API_SHIELD'
    | 'DATA_LOSS_PREVENTION'
  >;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export interface TopVerticalParams {
  /**
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Comma-separated list of continents (alpha-2 continent codes). Prefix with `-` to
   * exclude continents from results. For example, `-EU,NA` excludes results from EU,
   * but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by the specified date range. For example, use `7d` and
   * `7dcontrol` to compare this week with the previous week. Use this parameter or
   * set specific start and end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by HTTP method.
   */
  httpMethod?: Array<
    | 'GET'
    | 'POST'
    | 'DELETE'
    | 'PUT'
    | 'HEAD'
    | 'PURGE'
    | 'OPTIONS'
    | 'PROPFIND'
    | 'MKCOL'
    | 'PATCH'
    | 'ACL'
    | 'BCOPY'
    | 'BDELETE'
    | 'BMOVE'
    | 'BPROPFIND'
    | 'BPROPPATCH'
    | 'CHECKIN'
    | 'CHECKOUT'
    | 'CONNECT'
    | 'COPY'
    | 'LABEL'
    | 'LOCK'
    | 'MERGE'
    | 'MKACTIVITY'
    | 'MKWORKSPACE'
    | 'MOVE'
    | 'NOTIFY'
    | 'ORDERPATCH'
    | 'POLL'
    | 'PROPPATCH'
    | 'REPORT'
    | 'SEARCH'
    | 'SUBSCRIBE'
    | 'TRACE'
    | 'UNCHECKOUT'
    | 'UNLOCK'
    | 'UNSUBSCRIBE'
    | 'UPDATE'
    | 'VERSIONCONTROL'
    | 'BASELINECONTROL'
    | 'XMSENUMATTS'
    | 'RPC_OUT_DATA'
    | 'RPC_IN_DATA'
    | 'JSON'
    | 'COOK'
    | 'TRACK'
  >;

  /**
   * Filters results by HTTP version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Comma-separated list of locations (alpha-2 codes). Prefix with `-` to exclude
   * locations from results. For example, `-US,PT` excludes results from the US, but
   * includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of L7 mitigation products.
   */
  mitigationProduct?: Array<
    | 'DDOS'
    | 'WAF'
    | 'BOT_MANAGEMENT'
    | 'ACCESS_RULES'
    | 'IP_REPUTATION'
    | 'API_SHIELD'
    | 'DATA_LOSS_PREVENTION'
  >;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

Top.Locations = Locations;
Top.Ases = Ases;

export declare namespace Top {
  export {
    type TopAttacksResponse as TopAttacksResponse,
    type TopIndustryResponse as TopIndustryResponse,
    type TopVerticalResponse as TopVerticalResponse,
    type TopAttacksParams as TopAttacksParams,
    type TopIndustryParams as TopIndustryParams,
    type TopVerticalParams as TopVerticalParams,
  };

  export {
    Locations as Locations,
    type LocationOriginResponse as LocationOriginResponse,
    type LocationTargetResponse as LocationTargetResponse,
    type LocationOriginParams as LocationOriginParams,
    type LocationTargetParams as LocationTargetParams,
  };

  export {
    Ases as Ases,
    type AseOriginResponse as AseOriginResponse,
    type AseOriginParams as AseOriginParams,
  };
}
