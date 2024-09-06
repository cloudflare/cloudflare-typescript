// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as TopAPI from './top';

export class Top extends APIResource {
  /**
   * Get the top locations by DNS queries DNSSEC support to AS112.
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
   * Get the top locations, by DNS queries EDNS support to AS112.
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
   * Get the top locations by DNS queries IP version to AS112.
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
   * Get the top locations by AS112 DNS queries. Values are a percentage out of the
   * total queries.
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
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export interface TopEdnsParams {
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
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export interface TopIPVersionParams {
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
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export interface TopLocationsParams {
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
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export namespace Top {
  export import TopDNSSECResponse = TopAPI.TopDNSSECResponse;
  export import TopEdnsResponse = TopAPI.TopEdnsResponse;
  export import TopIPVersionResponse = TopAPI.TopIPVersionResponse;
  export import TopLocationsResponse = TopAPI.TopLocationsResponse;
  export import TopDNSSECParams = TopAPI.TopDNSSECParams;
  export import TopEdnsParams = TopAPI.TopEdnsParams;
  export import TopIPVersionParams = TopAPI.TopIPVersionParams;
  export import TopLocationsParams = TopAPI.TopLocationsParams;
}
