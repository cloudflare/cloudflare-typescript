// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Top extends APIResource {
  /**
   * Retrieves the top locations of DNS queries to AS112 with DNSSEC (DNS Security
   * Extensions) support.
   */
  dnssec(
    dnssec: 'SUPPORTED' | 'NOT_SUPPORTED',
    query?: TopDNSSECParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopDNSSECResponse>;
  dnssec(
    dnssec: 'SUPPORTED' | 'NOT_SUPPORTED',
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopDNSSECResponse>;
  dnssec(
    dnssec: 'SUPPORTED' | 'NOT_SUPPORTED',
    query: TopDNSSECParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopDNSSECResponse> {
    if (isRequestOptions(query)) {
      return this.dnssec(dnssec, {}, query);
    }
    return (
      this._client.get(`/radar/as112/top/locations/dnssec/${dnssec}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TopDNSSECResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the top locations of DNS queries to AS112 with EDNS (Extension
   * Mechanisms for DNS) support.
   */
  edns(
    edns: 'SUPPORTED' | 'NOT_SUPPORTED',
    query?: TopEdnsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopEdnsResponse>;
  edns(edns: 'SUPPORTED' | 'NOT_SUPPORTED', options?: Core.RequestOptions): Core.APIPromise<TopEdnsResponse>;
  edns(
    edns: 'SUPPORTED' | 'NOT_SUPPORTED',
    query: TopEdnsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopEdnsResponse> {
    if (isRequestOptions(query)) {
      return this.edns(edns, {}, query);
    }
    return (
      this._client.get(`/radar/as112/top/locations/edns/${edns}`, { query, ...options }) as Core.APIPromise<{
        result: TopEdnsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the top locations of DNS queries to AS112 for an IP version.
   */
  ipVersion(
    ipVersion: 'IPv4' | 'IPv6',
    query?: TopIPVersionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopIPVersionResponse>;
  ipVersion(ipVersion: 'IPv4' | 'IPv6', options?: Core.RequestOptions): Core.APIPromise<TopIPVersionResponse>;
  ipVersion(
    ipVersion: 'IPv4' | 'IPv6',
    query: TopIPVersionParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopIPVersionResponse> {
    if (isRequestOptions(query)) {
      return this.ipVersion(ipVersion, {}, query);
    }
    return (
      this._client.get(`/radar/as112/top/locations/ip_version/${ipVersion}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TopIPVersionResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the top locations by AS112 DNS queries.
   */
  locations(query?: TopLocationsParams, options?: Core.RequestOptions): Core.APIPromise<TopLocationsResponse>;
  locations(options?: Core.RequestOptions): Core.APIPromise<TopLocationsResponse>;
  locations(
    query: TopLocationsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopLocationsResponse> {
    if (isRequestOptions(query)) {
      return this.locations({}, query);
    }
    return (
      this._client.get('/radar/as112/top/locations', { query, ...options }) as Core.APIPromise<{
        result: TopLocationsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TopDNSSECResponse {
  meta: TopDNSSECResponse.Meta;

  top_0: Array<TopDNSSECResponse.Top0>;
}

export namespace TopDNSSECResponse {
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
    clientCountryAlpha2: string;

    clientCountryName: string;

    value: string;
  }
}

export interface TopEdnsResponse {
  meta: TopEdnsResponse.Meta;

  top_0: Array<TopEdnsResponse.Top0>;
}

export namespace TopEdnsResponse {
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
    clientCountryAlpha2: string;

    clientCountryName: string;

    value: string;
  }
}

export interface TopIPVersionResponse {
  meta: TopIPVersionResponse.Meta;

  top_0: Array<TopIPVersionResponse.Top0>;
}

export namespace TopIPVersionResponse {
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
    clientCountryAlpha2: string;

    clientCountryName: string;

    value: string;
  }
}

export interface TopLocationsResponse {
  meta: TopLocationsResponse.Meta;

  top_0: Array<TopLocationsResponse.Top0>;
}

export namespace TopLocationsResponse {
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
    clientCountryAlpha2: string;

    clientCountryName: string;

    value: string;
  }
}

export interface TopDNSSECParams {
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
   * Comma-separated list of locations (alpha-2 codes). Prefix with `-` to exclude
   * locations from results. For example, `-US,PT` excludes results from the US, but
   * includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export interface TopEdnsParams {
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
   * Comma-separated list of locations (alpha-2 codes). Prefix with `-` to exclude
   * locations from results. For example, `-US,PT` excludes results from the US, but
   * includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export interface TopIPVersionParams {
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
   * Comma-separated list of locations (alpha-2 codes). Prefix with `-` to exclude
   * locations from results. For example, `-US,PT` excludes results from the US, but
   * includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export interface TopLocationsParams {
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
   * Comma-separated list of locations (alpha-2 codes). Prefix with `-` to exclude
   * locations from results. For example, `-US,PT` excludes results from the US, but
   * includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export declare namespace Top {
  export {
    type TopDNSSECResponse as TopDNSSECResponse,
    type TopEdnsResponse as TopEdnsResponse,
    type TopIPVersionResponse as TopIPVersionResponse,
    type TopLocationsResponse as TopLocationsResponse,
    type TopDNSSECParams as TopDNSSECParams,
    type TopEdnsParams as TopEdnsParams,
    type TopIPVersionParams as TopIPVersionParams,
    type TopLocationsParams as TopLocationsParams,
  };
}
