// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { isRequestOptions } from '../../../../../core';
import { APIPromise } from '../../../../../core';
import * as Core from '../../../../../core';
import * as LocationsAPI from './locations';

export class Locations extends APIResource {
  /**
   * Get the top origin locations of and by layer 7 attacks. Values are a percentage
   * out of the total layer 7 attacks. The origin location is determined by the
   * client IP.
   */
  origin(query?: LocationOriginParams, options?: Core.RequestOptions): Core.APIPromise<LocationOriginResponse>
  origin(options?: Core.RequestOptions): Core.APIPromise<LocationOriginResponse>
  origin(query: LocationOriginParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<LocationOriginResponse> {
    if (isRequestOptions(query)) {
      return this.origin({}, query);
    }
    return (this._client.get('/radar/attacks/layer7/top/locations/origin', { query, ...options }) as Core.APIPromise<{ result: LocationOriginResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the top target locations of and by layer 7 attacks. Values are a percentage
   * out of the total layer 7 attacks. The target location is determined by the
   * attacked zone's billing country, when available.
   */
  target(query?: LocationTargetParams, options?: Core.RequestOptions): Core.APIPromise<LocationTargetResponse>
  target(options?: Core.RequestOptions): Core.APIPromise<LocationTargetResponse>
  target(query: LocationTargetParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<LocationTargetResponse> {
    if (isRequestOptions(query)) {
      return this.target({}, query);
    }
    return (this._client.get('/radar/attacks/layer7/top/locations/target', { query, ...options }) as Core.APIPromise<{ result: LocationTargetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface LocationOriginResponse {
  meta: LocationOriginResponse.Meta;

  top_0: Array<LocationOriginResponse.Top0>;
}

export namespace LocationOriginResponse {
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

    rank: number;

    value: string;
  }
}

export interface LocationTargetResponse {
  meta: LocationTargetResponse.Meta;

  top_0: Array<LocationTargetResponse.Top0>;
}

export namespace LocationTargetResponse {
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
    rank: number;

    targetCountryAlpha2: string;

    targetCountryName: string;

    value: string;
  }
}

export interface LocationOriginParams {
  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * Array of comma separated list of continents (alpha-2 continent codes). Start
   * with `-` to exclude from results. For example, `-EU,NA` excludes results from
   * Europe, but includes results from North America.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for http method.
   */
  httpMethod?: Array<'GET' | 'POST' | 'DELETE' | 'PUT' | 'HEAD' | 'PURGE' | 'OPTIONS' | 'PROPFIND' | 'MKCOL' | 'PATCH' | 'ACL' | 'BCOPY' | 'BDELETE' | 'BMOVE' | 'BPROPFIND' | 'BPROPPATCH' | 'CHECKIN' | 'CHECKOUT' | 'CONNECT' | 'COPY' | 'LABEL' | 'LOCK' | 'MERGE' | 'MKACTIVITY' | 'MKWORKSPACE' | 'MOVE' | 'NOTIFY' | 'ORDERPATCH' | 'POLL' | 'PROPPATCH' | 'REPORT' | 'SEARCH' | 'SUBSCRIBE' | 'TRACE' | 'UNCHECKOUT' | 'UNLOCK' | 'UNSUBSCRIBE' | 'UPDATE' | 'VERSIONCONTROL' | 'BASELINECONTROL' | 'XMSENUMATTS' | 'RPC_OUT_DATA' | 'RPC_IN_DATA' | 'JSON' | 'COOK' | 'TRACK'>;

  /**
   * Filter for http version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of L7 mitigation products.
   */
  mitigationProduct?: Array<'DDOS' | 'WAF' | 'BOT_MANAGEMENT' | 'ACCESS_RULES' | 'IP_REPUTATION' | 'API_SHIELD' | 'DATA_LOSS_PREVENTION'>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export interface LocationTargetParams {
  /**
   * Array of comma separated list of continents (alpha-2 continent codes). Start
   * with `-` to exclude from results. For example, `-EU,NA` excludes results from
   * Europe, but includes results from North America.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for http method.
   */
  httpMethod?: Array<'GET' | 'POST' | 'DELETE' | 'PUT' | 'HEAD' | 'PURGE' | 'OPTIONS' | 'PROPFIND' | 'MKCOL' | 'PATCH' | 'ACL' | 'BCOPY' | 'BDELETE' | 'BMOVE' | 'BPROPFIND' | 'BPROPPATCH' | 'CHECKIN' | 'CHECKOUT' | 'CONNECT' | 'COPY' | 'LABEL' | 'LOCK' | 'MERGE' | 'MKACTIVITY' | 'MKWORKSPACE' | 'MOVE' | 'NOTIFY' | 'ORDERPATCH' | 'POLL' | 'PROPPATCH' | 'REPORT' | 'SEARCH' | 'SUBSCRIBE' | 'TRACE' | 'UNCHECKOUT' | 'UNLOCK' | 'UNSUBSCRIBE' | 'UPDATE' | 'VERSIONCONTROL' | 'BASELINECONTROL' | 'XMSENUMATTS' | 'RPC_OUT_DATA' | 'RPC_IN_DATA' | 'JSON' | 'COOK' | 'TRACK'>;

  /**
   * Filter for http version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of L7 mitigation products.
   */
  mitigationProduct?: Array<'DDOS' | 'WAF' | 'BOT_MANAGEMENT' | 'ACCESS_RULES' | 'IP_REPUTATION' | 'API_SHIELD' | 'DATA_LOSS_PREVENTION'>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export namespace Locations {
  export import LocationOriginResponse = LocationsAPI.LocationOriginResponse;
  export import LocationTargetResponse = LocationsAPI.LocationTargetResponse;
  export import LocationOriginParams = LocationsAPI.LocationOriginParams;
  export import LocationTargetParams = LocationsAPI.LocationTargetParams;
}
