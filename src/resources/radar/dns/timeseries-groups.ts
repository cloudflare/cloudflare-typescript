// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as TimeseriesGroupsAPI from './timeseries-groups';

export class TimeseriesGroups extends APIResource {
  /**
   * Percentage breakdown of DNS queries/responses per Cache Hit status over time.
   */
  cacheHit(
    query?: TimeseriesGroupCacheHitParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupCacheHitResponse>;
  cacheHit(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupCacheHitResponse>;
  cacheHit(
    query: TimeseriesGroupCacheHitParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupCacheHitResponse> {
    if (isRequestOptions(query)) {
      return this.cacheHit({}, query);
    }
    return (
      this._client.get('/radar/dns/timeseries_groups/cache_hit', { query, ...options }) as Core.APIPromise<{
        result: TimeseriesGroupCacheHitResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage breakdown of DNS responses by DNSSEC support over time.
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
      this._client.get('/radar/dns/timeseries_groups/dnssec', { query, ...options }) as Core.APIPromise<{
        result: TimeseriesGroupDNSSECResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of DNS queries by DNSSEC awareness over time.
   */
  dnssecAware(
    query?: TimeseriesGroupDNSSECAwareParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupDNSSECAwareResponse>;
  dnssecAware(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupDNSSECAwareResponse>;
  dnssecAware(
    query: TimeseriesGroupDNSSECAwareParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupDNSSECAwareResponse> {
    if (isRequestOptions(query)) {
      return this.dnssecAware({}, query);
    }
    return (
      this._client.get('/radar/dns/timeseries_groups/dnssec_aware', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupDNSSECAwareResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage breakdown of DNS queries/responses per end-to-end security status
   * over time.
   */
  dnssecE2E(
    query?: TimeseriesGroupDNSSECE2EParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupDNSSECE2EResponse>;
  dnssecE2E(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupDNSSECE2EResponse>;
  dnssecE2E(
    query: TimeseriesGroupDNSSECE2EParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupDNSSECE2EResponse> {
    if (isRequestOptions(query)) {
      return this.dnssecE2E({}, query);
    }
    return (
      this._client.get('/radar/dns/timeseries_groups/dnssec_e2e', { query, ...options }) as Core.APIPromise<{
        result: TimeseriesGroupDNSSECE2EResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage breakdown of DNS queries per IP version used over time.
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
      this._client.get('/radar/dns/timeseries_groups/ip_version', { query, ...options }) as Core.APIPromise<{
        result: TimeseriesGroupIPVersionResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage breakdown of DNS queries with/without matching answers over time.
   */
  matchingAnswer(
    query?: TimeseriesGroupMatchingAnswerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupMatchingAnswerResponse>;
  matchingAnswer(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupMatchingAnswerResponse>;
  matchingAnswer(
    query: TimeseriesGroupMatchingAnswerParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupMatchingAnswerResponse> {
    if (isRequestOptions(query)) {
      return this.matchingAnswer({}, query);
    }
    return (
      this._client.get('/radar/dns/timeseries_groups/matching_answer', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupMatchingAnswerResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage breakdown of DNS queries per DNS transport protocol used over time.
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
      this._client.get('/radar/dns/timeseries_groups/protocol', { query, ...options }) as Core.APIPromise<{
        result: TimeseriesGroupProtocolResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of DNS queries per query type over time.
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
      this._client.get('/radar/dns/timeseries_groups/query_type', { query, ...options }) as Core.APIPromise<{
        result: TimeseriesGroupQueryTypeResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage breakdown of DNS responses per response code over time.
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
      this._client.get('/radar/dns/timeseries_groups/response_codes', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupResponseCodesResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage breakdown of DNS queries per minimum answer TTL over time.
   */
  responseTTL(
    query?: TimeseriesGroupResponseTTLParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupResponseTTLResponse>;
  responseTTL(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupResponseTTLResponse>;
  responseTTL(
    query: TimeseriesGroupResponseTTLParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupResponseTTLResponse> {
    if (isRequestOptions(query)) {
      return this.responseTTL({}, query);
    }
    return (
      this._client.get('/radar/dns/timeseries_groups/response_ttl', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupResponseTTLResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TimeseriesGroupCacheHitResponse {
  meta: unknown;

  serie_0: TimeseriesGroupCacheHitResponse.Serie0;
}

export namespace TimeseriesGroupCacheHitResponse {
  export interface Serie0 {
    NEGATIVE: Array<string>;

    POSITIVE: Array<string>;
  }
}

export interface TimeseriesGroupDNSSECResponse {
  meta: unknown;

  serie_0: TimeseriesGroupDNSSECResponse.Serie0;
}

export namespace TimeseriesGroupDNSSECResponse {
  export interface Serie0 {
    INSECURE: Array<string>;

    INVALID: Array<string>;

    OTHER: Array<string>;

    SECURE: Array<string>;
  }
}

export interface TimeseriesGroupDNSSECAwareResponse {
  meta: unknown;

  serie_0: TimeseriesGroupDNSSECAwareResponse.Serie0;
}

export namespace TimeseriesGroupDNSSECAwareResponse {
  export interface Serie0 {
    NOT_SUPPORTED: Array<string>;

    SUPPORTED: Array<string>;
  }
}

export interface TimeseriesGroupDNSSECE2EResponse {
  meta: unknown;

  serie_0: TimeseriesGroupDNSSECE2EResponse.Serie0;
}

export namespace TimeseriesGroupDNSSECE2EResponse {
  export interface Serie0 {
    NEGATIVE: Array<string>;

    POSITIVE: Array<string>;
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

export interface TimeseriesGroupMatchingAnswerResponse {
  meta: unknown;

  serie_0: TimeseriesGroupMatchingAnswerResponse.Serie0;
}

export namespace TimeseriesGroupMatchingAnswerResponse {
  export interface Serie0 {
    NEGATIVE: Array<string>;

    POSITIVE: Array<string>;
  }
}

export interface TimeseriesGroupProtocolResponse {
  meta: unknown;

  serie_0: TimeseriesGroupProtocolResponse.Serie0;
}

export namespace TimeseriesGroupProtocolResponse {
  export interface Serie0 {
    HTTPS: Array<string>;

    TCP: Array<string>;

    TLS: Array<string>;

    UDP: Array<string>;
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

    HTTPS: Array<string>;

    NS: Array<string>;

    PTR: Array<string>;
  }
}

export interface TimeseriesGroupResponseCodesResponse {
  meta: unknown;

  serie_0: TimeseriesGroupResponseCodesResponse.Serie0;
}

export namespace TimeseriesGroupResponseCodesResponse {
  export interface Serie0 {
    NOERROR: Array<string>;

    NOTIMP: Array<string>;

    NXDOMAIN: Array<string>;

    REFUSED: Array<string>;

    SERVFAIL: Array<string>;
  }
}

export interface TimeseriesGroupResponseTTLResponse {
  meta: unknown;

  serie_0: TimeseriesGroupResponseTTLResponse.Serie0;
}

export namespace TimeseriesGroupResponseTTLResponse {
  export interface Serie0 {
    '<=0m': Array<string>;

    '<=15m': Array<string>;

    '<=1d': Array<string>;

    '<=1h': Array<string>;

    '<=1m': Array<string>;

    '<=1w': Array<string>;

    '<=1y': Array<string>;

    '<=5m': Array<string>;

    '>1y': Array<string>;
  }
}

export interface TimeseriesGroupCacheHitParams {
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

  /**
   * Filter for ccTLD.
   */
  tld?: Array<string>;
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

  /**
   * Filter for ccTLD.
   */
  tld?: Array<string>;
}

export interface TimeseriesGroupDNSSECAwareParams {
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

  /**
   * Filter for ccTLD.
   */
  tld?: Array<string>;
}

export interface TimeseriesGroupDNSSECE2EParams {
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

  /**
   * Filter for ccTLD.
   */
  tld?: Array<string>;
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

  /**
   * Filter for ccTLD.
   */
  tld?: Array<string>;
}

export interface TimeseriesGroupMatchingAnswerParams {
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

  /**
   * Filter for ccTLD.
   */
  tld?: Array<string>;
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

  /**
   * Filter for ccTLD.
   */
  tld?: Array<string>;
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

  /**
   * Filter for ccTLD.
   */
  tld?: Array<string>;
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

  /**
   * Filter for ccTLD.
   */
  tld?: Array<string>;
}

export interface TimeseriesGroupResponseTTLParams {
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

  /**
   * Filter for ccTLD.
   */
  tld?: Array<string>;
}

export namespace TimeseriesGroups {
  export import TimeseriesGroupCacheHitResponse = TimeseriesGroupsAPI.TimeseriesGroupCacheHitResponse;
  export import TimeseriesGroupDNSSECResponse = TimeseriesGroupsAPI.TimeseriesGroupDNSSECResponse;
  export import TimeseriesGroupDNSSECAwareResponse = TimeseriesGroupsAPI.TimeseriesGroupDNSSECAwareResponse;
  export import TimeseriesGroupDNSSECE2EResponse = TimeseriesGroupsAPI.TimeseriesGroupDNSSECE2EResponse;
  export import TimeseriesGroupIPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupIPVersionResponse;
  export import TimeseriesGroupMatchingAnswerResponse = TimeseriesGroupsAPI.TimeseriesGroupMatchingAnswerResponse;
  export import TimeseriesGroupProtocolResponse = TimeseriesGroupsAPI.TimeseriesGroupProtocolResponse;
  export import TimeseriesGroupQueryTypeResponse = TimeseriesGroupsAPI.TimeseriesGroupQueryTypeResponse;
  export import TimeseriesGroupResponseCodesResponse = TimeseriesGroupsAPI.TimeseriesGroupResponseCodesResponse;
  export import TimeseriesGroupResponseTTLResponse = TimeseriesGroupsAPI.TimeseriesGroupResponseTTLResponse;
  export import TimeseriesGroupCacheHitParams = TimeseriesGroupsAPI.TimeseriesGroupCacheHitParams;
  export import TimeseriesGroupDNSSECParams = TimeseriesGroupsAPI.TimeseriesGroupDNSSECParams;
  export import TimeseriesGroupDNSSECAwareParams = TimeseriesGroupsAPI.TimeseriesGroupDNSSECAwareParams;
  export import TimeseriesGroupDNSSECE2EParams = TimeseriesGroupsAPI.TimeseriesGroupDNSSECE2EParams;
  export import TimeseriesGroupIPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupIPVersionParams;
  export import TimeseriesGroupMatchingAnswerParams = TimeseriesGroupsAPI.TimeseriesGroupMatchingAnswerParams;
  export import TimeseriesGroupProtocolParams = TimeseriesGroupsAPI.TimeseriesGroupProtocolParams;
  export import TimeseriesGroupQueryTypeParams = TimeseriesGroupsAPI.TimeseriesGroupQueryTypeParams;
  export import TimeseriesGroupResponseCodesParams = TimeseriesGroupsAPI.TimeseriesGroupResponseCodesParams;
  export import TimeseriesGroupResponseTTLParams = TimeseriesGroupsAPI.TimeseriesGroupResponseTTLParams;
}
