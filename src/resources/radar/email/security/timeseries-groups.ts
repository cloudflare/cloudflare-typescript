// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/email/security/timeseries-groups';

export class TimeseriesGroups extends APIResource {
  /**
   * Percentage distribution of emails classified per Arc validation over time.
   */
  arc(
    query?: TimeseriesGroupARCParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupARCResponse>;
  arc(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupARCResponse>;
  arc(
    query: TimeseriesGroupARCParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupARCResponse> {
    if (isRequestOptions(query)) {
      return this.arc({}, query);
    }
    return (
      this._client.get('/radar/email/security/timeseries_groups/arc', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupARCResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified per DKIM validation over time.
   */
  dkim(
    query?: TimeseriesGroupDKIMParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupDKIMResponse>;
  dkim(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupDKIMResponse>;
  dkim(
    query: TimeseriesGroupDKIMParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupDKIMResponse> {
    if (isRequestOptions(query)) {
      return this.dkim({}, query);
    }
    return (
      this._client.get('/radar/email/security/timeseries_groups/dkim', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupDKIMResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified per DMARC validation over time.
   */
  dmarc(
    query?: TimeseriesGroupDMARCParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupDMARCResponse>;
  dmarc(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupDMARCResponse>;
  dmarc(
    query: TimeseriesGroupDMARCParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupDMARCResponse> {
    if (isRequestOptions(query)) {
      return this.dmarc({}, query);
    }
    return (
      this._client.get('/radar/email/security/timeseries_groups/dmarc', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupDMARCResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified as MALICIOUS over time.
   */
  malicious(
    query?: TimeseriesGroupMaliciousParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupMaliciousResponse>;
  malicious(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupMaliciousResponse>;
  malicious(
    query: TimeseriesGroupMaliciousParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupMaliciousResponse> {
    if (isRequestOptions(query)) {
      return this.malicious({}, query);
    }
    return (
      this._client.get('/radar/email/security/timeseries_groups/malicious', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupMaliciousResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified as SPAM over time.
   */
  spam(
    query?: TimeseriesGroupSpamParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupSpamResponse>;
  spam(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupSpamResponse>;
  spam(
    query: TimeseriesGroupSpamParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupSpamResponse> {
    if (isRequestOptions(query)) {
      return this.spam({}, query);
    }
    return (
      this._client.get('/radar/email/security/timeseries_groups/spam', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupSpamResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified per SPF validation over time.
   */
  spf(
    query?: TimeseriesGroupSPFParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupSPFResponse>;
  spf(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupSPFResponse>;
  spf(
    query: TimeseriesGroupSPFParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupSPFResponse> {
    if (isRequestOptions(query)) {
      return this.spf({}, query);
    }
    return (
      this._client.get('/radar/email/security/timeseries_groups/spf', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupSPFResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified in Threat Categories over time.
   */
  threatCategory(
    query?: TimeseriesGroupThreatCategoryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupThreatCategoryResponse>;
  threatCategory(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupThreatCategoryResponse>;
  threatCategory(
    query: TimeseriesGroupThreatCategoryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupThreatCategoryResponse> {
    if (isRequestOptions(query)) {
      return this.threatCategory({}, query);
    }
    return (
      this._client.get('/radar/email/security/timeseries_groups/threat_category', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupThreatCategoryResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TimeseriesGroupARCResponse {
  meta: unknown;

  serie_0: TimeseriesGroupARCResponse.Serie0;
}

export namespace TimeseriesGroupARCResponse {
  export interface Serie0 {
    FAIL: Array<string>;

    NONE: Array<string>;

    PASS: Array<string>;
  }
}

export interface TimeseriesGroupDKIMResponse {
  meta: unknown;

  serie_0: TimeseriesGroupDKIMResponse.Serie0;
}

export namespace TimeseriesGroupDKIMResponse {
  export interface Serie0 {
    FAIL: Array<string>;

    NONE: Array<string>;

    PASS: Array<string>;
  }
}

export interface TimeseriesGroupDMARCResponse {
  meta: unknown;

  serie_0: TimeseriesGroupDMARCResponse.Serie0;
}

export namespace TimeseriesGroupDMARCResponse {
  export interface Serie0 {
    FAIL: Array<string>;

    NONE: Array<string>;

    PASS: Array<string>;
  }
}

export interface TimeseriesGroupMaliciousResponse {
  meta: unknown;

  serie_0: TimeseriesGroupMaliciousResponse.Serie0;
}

export namespace TimeseriesGroupMaliciousResponse {
  export interface Serie0 {
    MALICIOUS: Array<string>;

    NOT_MALICIOUS: Array<string>;
  }
}

export interface TimeseriesGroupSpamResponse {
  meta: unknown;

  serie_0: TimeseriesGroupSpamResponse.Serie0;
}

export namespace TimeseriesGroupSpamResponse {
  export interface Serie0 {
    NOT_SPAM: Array<string>;

    SPAM: Array<string>;
  }
}

export interface TimeseriesGroupSPFResponse {
  meta: unknown;

  serie_0: TimeseriesGroupSPFResponse.Serie0;
}

export namespace TimeseriesGroupSPFResponse {
  export interface Serie0 {
    FAIL: Array<string>;

    NONE: Array<string>;

    PASS: Array<string>;
  }
}

export interface TimeseriesGroupThreatCategoryResponse {
  meta: unknown;

  serie_0: TimeseriesGroupThreatCategoryResponse.Serie0;
}

export namespace TimeseriesGroupThreatCategoryResponse {
  export interface Serie0 {
    BrandImpersonation: Array<string>;

    CredentialHarvester: Array<string>;

    IdentityDeception: Array<string>;

    Link: Array<string>;
  }
}

export interface TimeseriesGroupARCParams {
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
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl'
  >;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Filter for dkim.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filter for dmarc.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

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
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;
}

export interface TimeseriesGroupDKIMParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Filter for arc (Authenticated Received Chain).
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl'
  >;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Filter for dmarc.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

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
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;
}

export interface TimeseriesGroupDMARCParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Filter for arc (Authenticated Received Chain).
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl'
  >;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Filter for dkim.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

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
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;
}

export interface TimeseriesGroupMaliciousParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Filter for arc (Authenticated Received Chain).
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl'
  >;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Filter for dkim.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filter for dmarc.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

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
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;
}

export interface TimeseriesGroupSpamParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Filter for arc (Authenticated Received Chain).
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl'
  >;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Filter for dkim.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filter for dmarc.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

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
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;
}

export interface TimeseriesGroupSPFParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Filter for arc (Authenticated Received Chain).
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl'
  >;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Filter for dkim.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filter for dmarc.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

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

export interface TimeseriesGroupThreatCategoryParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Filter for arc (Authenticated Received Chain).
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl'
  >;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Filter for dkim.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filter for dmarc.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

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
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;
}

export namespace TimeseriesGroups {
  export import TimeseriesGroupARCResponse = TimeseriesGroupsAPI.TimeseriesGroupARCResponse;
  export import TimeseriesGroupDKIMResponse = TimeseriesGroupsAPI.TimeseriesGroupDKIMResponse;
  export import TimeseriesGroupDMARCResponse = TimeseriesGroupsAPI.TimeseriesGroupDMARCResponse;
  export import TimeseriesGroupMaliciousResponse = TimeseriesGroupsAPI.TimeseriesGroupMaliciousResponse;
  export import TimeseriesGroupSpamResponse = TimeseriesGroupsAPI.TimeseriesGroupSpamResponse;
  export import TimeseriesGroupSPFResponse = TimeseriesGroupsAPI.TimeseriesGroupSPFResponse;
  export import TimeseriesGroupThreatCategoryResponse = TimeseriesGroupsAPI.TimeseriesGroupThreatCategoryResponse;
  export import TimeseriesGroupARCParams = TimeseriesGroupsAPI.TimeseriesGroupARCParams;
  export import TimeseriesGroupDKIMParams = TimeseriesGroupsAPI.TimeseriesGroupDKIMParams;
  export import TimeseriesGroupDMARCParams = TimeseriesGroupsAPI.TimeseriesGroupDMARCParams;
  export import TimeseriesGroupMaliciousParams = TimeseriesGroupsAPI.TimeseriesGroupMaliciousParams;
  export import TimeseriesGroupSpamParams = TimeseriesGroupsAPI.TimeseriesGroupSpamParams;
  export import TimeseriesGroupSPFParams = TimeseriesGroupsAPI.TimeseriesGroupSPFParams;
  export import TimeseriesGroupThreatCategoryParams = TimeseriesGroupsAPI.TimeseriesGroupThreatCategoryParams;
}
