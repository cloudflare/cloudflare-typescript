// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Top extends APIResource {
  /**
   * Retrieves the top locations of DNS queries to AS112 with DNSSEC (DNS Security
   * Extensions) support.
   */
  dnssec(
    dnssec: 'SUPPORTED' | 'NOT_SUPPORTED',
    query: TopDNSSECParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TopDNSSECResponse> {
    return (
      this._client.get(path`/radar/as112/top/locations/dnssec/${dnssec}`, {
        query,
        ...options,
      }) as APIPromise<{ result: TopDNSSECResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the top locations of DNS queries to AS112 with EDNS (Extension
   * Mechanisms for DNS) support.
   */
  edns(
    edns: 'SUPPORTED' | 'NOT_SUPPORTED',
    query: TopEdnsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TopEdnsResponse> {
    return (
      this._client.get(path`/radar/as112/top/locations/edns/${edns}`, { query, ...options }) as APIPromise<{
        result: TopEdnsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the top locations of DNS queries to AS112 for an IP version.
   */
  ipVersion(
    ipVersion: 'IPv4' | 'IPv6',
    query: TopIPVersionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TopIPVersionResponse> {
    return (
      this._client.get(path`/radar/as112/top/locations/ip_version/${ipVersion}`, {
        query,
        ...options,
      }) as APIPromise<{ result: TopIPVersionResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the top locations by AS112 DNS queries.
   */
  locations(
    query: TopLocationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TopLocationsResponse> {
    return (
      this._client.get('/radar/as112/top/locations', { query, ...options }) as APIPromise<{
        result: TopLocationsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TopDNSSECResponse {
  meta: TopDNSSECResponse.Meta;

  top_0: Array<unknown>;
}

export namespace TopDNSSECResponse {
  export interface Meta {
    dateRange: Array<unknown>;

    lastUpdated: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations?: Array<unknown>;

      level?: number;
    }
  }
}

export interface TopEdnsResponse {
  meta: TopEdnsResponse.Meta;

  top_0: Array<unknown>;
}

export namespace TopEdnsResponse {
  export interface Meta {
    dateRange: Array<unknown>;

    lastUpdated: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations?: Array<unknown>;

      level?: number;
    }
  }
}

export interface TopIPVersionResponse {
  meta: TopIPVersionResponse.Meta;

  top_0: Array<unknown>;
}

export namespace TopIPVersionResponse {
  export interface Meta {
    dateRange: Array<unknown>;

    lastUpdated: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations?: Array<unknown>;

      level?: number;
    }
  }
}

export interface TopLocationsResponse {
  meta: TopLocationsResponse.Meta;

  top_0: Array<unknown>;
}

export namespace TopLocationsResponse {
  export interface Meta {
    dateRange: Array<unknown>;

    lastUpdated: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations?: Array<unknown>;

      level?: number;
    }
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
