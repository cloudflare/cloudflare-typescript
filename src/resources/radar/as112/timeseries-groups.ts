// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as TimeseriesGroupsAPI from './timeseries-groups';

export class TimeseriesGroups extends APIResource {
  /**
   * Percentage distribution of DNS AS112 queries by DNSSEC support over time.
   */
  dnssec(
    query?: TimeseriesGroupDNSSECParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupDNSSECResponse>;
  dnssec(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupDNSSECResponse>;
  dnssec(
    query: TimeseriesGroupDNSSECParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupDNSSECResponse> {
    if (isRequestOptions(query)) {
      return this.dnssec({}, query);
    }
    return (
      this._client.get('/radar/as112/timeseries_groups/dnssec', { query, ...options }) as Core.APIPromise<{
        result: TimeseriesGroupDNSSECResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of AS112 DNS queries by EDNS support over time.
   */
  edns(
    query?: TimeseriesGroupEdnsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupEdnsResponse>;
  edns(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupEdnsResponse>;
  edns(
    query: TimeseriesGroupEdnsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupEdnsResponse> {
    if (isRequestOptions(query)) {
      return this.edns({}, query);
    }
    return (
      this._client.get('/radar/as112/timeseries_groups/edns', { query, ...options }) as Core.APIPromise<{
        result: TimeseriesGroupEdnsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of AS112 DNS queries by IP version over time.
   */
  ipVersion(
    query?: TimeseriesGroupIPVersionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupIPVersionResponse>;
  ipVersion(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupIPVersionResponse>;
  ipVersion(
    query: TimeseriesGroupIPVersionParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupIPVersionResponse> {
    if (isRequestOptions(query)) {
      return this.ipVersion({}, query);
    }
    return (
      this._client.get('/radar/as112/timeseries_groups/ip_version', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupIPVersionResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of AS112 DNS requests classified by protocol over time.
   */
  protocol(
    query?: TimeseriesGroupProtocolParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupProtocolResponse>;
  protocol(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupProtocolResponse>;
  protocol(
    query: TimeseriesGroupProtocolParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupProtocolResponse> {
    if (isRequestOptions(query)) {
      return this.protocol({}, query);
    }
    return (
      this._client.get('/radar/as112/timeseries_groups/protocol', { query, ...options }) as Core.APIPromise<{
        result: TimeseriesGroupProtocolResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of AS112 DNS queries by query type over time.
   */
  queryType(
    query?: TimeseriesGroupQueryTypeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupQueryTypeResponse>;
  queryType(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupQueryTypeResponse>;
  queryType(
    query: TimeseriesGroupQueryTypeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupQueryTypeResponse> {
    if (isRequestOptions(query)) {
      return this.queryType({}, query);
    }
    return (
      this._client.get('/radar/as112/timeseries_groups/query_type', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupQueryTypeResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of AS112 DNS requests classified by response code over
   * time.
   */
  responseCodes(
    query?: TimeseriesGroupResponseCodesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupResponseCodesResponse>;
  responseCodes(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupResponseCodesResponse>;
  responseCodes(
    query: TimeseriesGroupResponseCodesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupResponseCodesResponse> {
    if (isRequestOptions(query)) {
      return this.responseCodes({}, query);
    }
    return (
      this._client.get('/radar/as112/timeseries_groups/response_codes', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupResponseCodesResponse }>
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

export namespace TimeseriesGroups {
  export import TimeseriesGroupDNSSECResponse = TimeseriesGroupsAPI.TimeseriesGroupDNSSECResponse;
  export import TimeseriesGroupEdnsResponse = TimeseriesGroupsAPI.TimeseriesGroupEdnsResponse;
  export import TimeseriesGroupIPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupIPVersionResponse;
  export import TimeseriesGroupProtocolResponse = TimeseriesGroupsAPI.TimeseriesGroupProtocolResponse;
  export import TimeseriesGroupQueryTypeResponse = TimeseriesGroupsAPI.TimeseriesGroupQueryTypeResponse;
  export import TimeseriesGroupResponseCodesResponse = TimeseriesGroupsAPI.TimeseriesGroupResponseCodesResponse;
  export import TimeseriesGroupDNSSECParams = TimeseriesGroupsAPI.TimeseriesGroupDNSSECParams;
  export import TimeseriesGroupEdnsParams = TimeseriesGroupsAPI.TimeseriesGroupEdnsParams;
  export import TimeseriesGroupIPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupIPVersionParams;
  export import TimeseriesGroupProtocolParams = TimeseriesGroupsAPI.TimeseriesGroupProtocolParams;
  export import TimeseriesGroupQueryTypeParams = TimeseriesGroupsAPI.TimeseriesGroupQueryTypeParams;
  export import TimeseriesGroupResponseCodesParams = TimeseriesGroupsAPI.TimeseriesGroupResponseCodesParams;
}
