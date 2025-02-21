// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class TimeseriesGroups extends APIResource {
  /**
   * Percentage distribution of AS112 DNS queries by DNSSEC support over time.
   */
  dnssec(
    query: TimeseriesGroupDNSSECParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeseriesGroupDNSSECResponse> {
    return (
      this._client.get('/radar/as112/timeseries_groups/dnssec', { query, ...options }) as APIPromise<{
        result: TimeseriesGroupDNSSECResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of AS112 DNS queries by EDNS support over time.
   */
  edns(
    query: TimeseriesGroupEdnsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeseriesGroupEdnsResponse> {
    return (
      this._client.get('/radar/as112/timeseries_groups/edns', { query, ...options }) as APIPromise<{
        result: TimeseriesGroupEdnsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of AS112 DNS queries by IP version over time.
   */
  ipVersion(
    query: TimeseriesGroupIPVersionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeseriesGroupIPVersionResponse> {
    return (
      this._client.get('/radar/as112/timeseries_groups/ip_version', { query, ...options }) as APIPromise<{
        result: TimeseriesGroupIPVersionResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of AS112 DNS requests classified by protocol over time.
   */
  protocol(
    query: TimeseriesGroupProtocolParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeseriesGroupProtocolResponse> {
    return (
      this._client.get('/radar/as112/timeseries_groups/protocol', { query, ...options }) as APIPromise<{
        result: TimeseriesGroupProtocolResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of AS112 DNS queries by query type over time.
   */
  queryType(
    query: TimeseriesGroupQueryTypeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeseriesGroupQueryTypeResponse> {
    return (
      this._client.get('/radar/as112/timeseries_groups/query_type', { query, ...options }) as APIPromise<{
        result: TimeseriesGroupQueryTypeResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of AS112 DNS requests classified by response code over
   * time.
   */
  responseCodes(
    query: TimeseriesGroupResponseCodesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeseriesGroupResponseCodesResponse> {
    return (
      this._client.get('/radar/as112/timeseries_groups/response_codes', { query, ...options }) as APIPromise<{
        result: TimeseriesGroupResponseCodesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TimeseriesGroupDNSSECResponse {
  meta: unknown;

  serie_0: TimeseriesGroupDNSSECResponse.Serie0;
}

export namespace TimeseriesGroupDNSSECResponse {
  export interface Serie0 {
    NOT_SUPPORTED: Array<string>;

    SUPPORTED: Array<string>;
  }
}

export interface TimeseriesGroupEdnsResponse {
  meta: unknown;

  serie_0: TimeseriesGroupEdnsResponse.Serie0;
}

export namespace TimeseriesGroupEdnsResponse {
  export interface Serie0 {
    NOT_SUPPORTED: Array<string>;

    SUPPORTED: Array<string>;
  }
}

export interface TimeseriesGroupIPVersionResponse {
  meta: unknown;

  serie_0: TimeseriesGroupIPVersionResponse.Serie0;
}

export namespace TimeseriesGroupIPVersionResponse {
  export interface Serie0 {
    IPv4: Array<string>;

    IPv6: Array<string>;
  }
}

export interface TimeseriesGroupProtocolResponse {
  meta: unknown;

  serie_0: TimeseriesGroupProtocolResponse.Serie0;
}

export namespace TimeseriesGroupProtocolResponse {
  export interface Serie0 {
    tcp: Array<string>;

    udp: Array<string>;
  }
}

export interface TimeseriesGroupQueryTypeResponse {
  meta: unknown;

  serie_0: TimeseriesGroupQueryTypeResponse.Serie0;
}

export namespace TimeseriesGroupQueryTypeResponse {
  export interface Serie0 {
    A: Array<string>;

    AAAA: Array<string>;

    PTR: Array<string>;

    SOA: Array<string>;

    SRV: Array<string>;
  }
}

export interface TimeseriesGroupResponseCodesResponse {
  meta: unknown;

  serie_0: TimeseriesGroupResponseCodesResponse.Serie0;
}

export namespace TimeseriesGroupResponseCodesResponse {
  export interface Serie0 {
    NOERROR: Array<string>;

    NXDOMAIN: Array<string>;
  }
}

export interface TimeseriesGroupDNSSECParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

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

export interface TimeseriesGroupEdnsParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

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

export interface TimeseriesGroupIPVersionParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

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

export interface TimeseriesGroupProtocolParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

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

export interface TimeseriesGroupQueryTypeParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

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
   * Limit the number of objects (e.g., browsers, verticals, etc.) to the top items
   * within the specified time range. If the limitPerGroup is set, the response will
   * include that number of items, with the remaining items grouped together under an
   * "other" category.
   */
  limitPerGroup?: number;

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

export interface TimeseriesGroupResponseCodesParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

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
   * Limit the number of objects (e.g., browsers, verticals, etc.) to the top items
   * within the specified time range. If the limitPerGroup is set, the response will
   * include that number of items, with the remaining items grouped together under an
   * "other" category.
   */
  limitPerGroup?: number;

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

export declare namespace TimeseriesGroups {
  export {
    type TimeseriesGroupDNSSECResponse as TimeseriesGroupDNSSECResponse,
    type TimeseriesGroupEdnsResponse as TimeseriesGroupEdnsResponse,
    type TimeseriesGroupIPVersionResponse as TimeseriesGroupIPVersionResponse,
    type TimeseriesGroupProtocolResponse as TimeseriesGroupProtocolResponse,
    type TimeseriesGroupQueryTypeResponse as TimeseriesGroupQueryTypeResponse,
    type TimeseriesGroupResponseCodesResponse as TimeseriesGroupResponseCodesResponse,
    type TimeseriesGroupDNSSECParams as TimeseriesGroupDNSSECParams,
    type TimeseriesGroupEdnsParams as TimeseriesGroupEdnsParams,
    type TimeseriesGroupIPVersionParams as TimeseriesGroupIPVersionParams,
    type TimeseriesGroupProtocolParams as TimeseriesGroupProtocolParams,
    type TimeseriesGroupQueryTypeParams as TimeseriesGroupQueryTypeParams,
    type TimeseriesGroupResponseCodesParams as TimeseriesGroupResponseCodesParams,
  };
}
