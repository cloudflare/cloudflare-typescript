// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as EmailAPI from '../email';
import { APIPromise } from '../../../../api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class TimeseriesGroups extends APIResource {
  /**
   * Percentage distribution of emails classified by ARC validation over time.
   */
  arc(
    query: TimeseriesGroupARCParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeseriesGroupARCResponse> {
    return (
      this._client.get('/radar/email/security/timeseries_groups/arc', { query, ...options }) as APIPromise<{
        result: TimeseriesGroupARCResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified by DKIM validation over time.
   */
  dkim(
    query: TimeseriesGroupDKIMParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeseriesGroupDKIMResponse> {
    return (
      this._client.get('/radar/email/security/timeseries_groups/dkim', { query, ...options }) as APIPromise<{
        result: TimeseriesGroupDKIMResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified by DMARC validation over time.
   */
  dmarc(
    query: TimeseriesGroupDMARCParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeseriesGroupDMARCResponse> {
    return (
      this._client.get('/radar/email/security/timeseries_groups/dmarc', { query, ...options }) as APIPromise<{
        result: TimeseriesGroupDMARCResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified as MALICIOUS over time.
   */
  malicious(
    query: TimeseriesGroupMaliciousParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeseriesGroupMaliciousResponse> {
    return (
      this._client.get('/radar/email/security/timeseries_groups/malicious', {
        query,
        ...options,
      }) as APIPromise<{ result: TimeseriesGroupMaliciousResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified as SPAM over time.
   */
  spam(
    query: TimeseriesGroupSpamParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeseriesGroupSpamResponse> {
    return (
      this._client.get('/radar/email/security/timeseries_groups/spam', { query, ...options }) as APIPromise<{
        result: TimeseriesGroupSpamResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified by SPF validation over time.
   */
  spf(
    query: TimeseriesGroupSPFParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeseriesGroupSPFResponse> {
    return (
      this._client.get('/radar/email/security/timeseries_groups/spf', { query, ...options }) as APIPromise<{
        result: TimeseriesGroupSPFResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified as SPOOF over time.
   */
  spoof(
    query: TimeseriesGroupSpoofParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeseriesGroupSpoofResponse> {
    return (
      this._client.get('/radar/email/security/timeseries_groups/spoof', { query, ...options }) as APIPromise<{
        result: TimeseriesGroupSpoofResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified by threat category over time.
   */
  threatCategory(
    query: TimeseriesGroupThreatCategoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeseriesGroupThreatCategoryResponse> {
    return (
      this._client.get('/radar/email/security/timeseries_groups/threat_category', {
        query,
        ...options,
      }) as APIPromise<{ result: TimeseriesGroupThreatCategoryResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified by TLS version over time.
   */
  tlsVersion(
    query: TimeseriesGroupTLSVersionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TimeseriesGroupTLSVersionResponse> {
    return (
      this._client.get('/radar/email/security/timeseries_groups/tls_version', {
        query,
        ...options,
      }) as APIPromise<{ result: TimeseriesGroupTLSVersionResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TimeseriesGroupARCResponse {
  meta: unknown;

  serie_0: EmailAPI.RadarEmailSeries;
}

export interface TimeseriesGroupDKIMResponse {
  meta: unknown;

  serie_0: EmailAPI.RadarEmailSeries;
}

export interface TimeseriesGroupDMARCResponse {
  meta: unknown;

  serie_0: EmailAPI.RadarEmailSeries;
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

  serie_0: EmailAPI.RadarEmailSeries;
}

export interface TimeseriesGroupSpoofResponse {
  meta: unknown;

  serie_0: TimeseriesGroupSpoofResponse.Serie0;
}

export namespace TimeseriesGroupSpoofResponse {
  export interface Serie0 {
    NOT_SPOOF: Array<string>;

    SPOOF: Array<string>;
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

export interface TimeseriesGroupTLSVersionResponse {
  meta: unknown;

  serie_0: TimeseriesGroupTLSVersionResponse.Serie0;
}

export namespace TimeseriesGroupTLSVersionResponse {
  export interface Serie0 {
    'TLS 1.0': Array<string>;

    'TLS 1.1': Array<string>;

    'TLS 1.2': Array<string>;

    'TLS 1.3': Array<string>;
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
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3'>;
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
   * Filter for dmarc.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3'>;
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
   * Filter for dkim.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3'>;
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
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3'>;
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
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3'>;
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
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3'>;
}

export interface TimeseriesGroupSpoofParams {
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
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3'>;
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
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3'>;
}

export interface TimeseriesGroupTLSVersionParams {
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
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;
}

export declare namespace TimeseriesGroups {
  export {
    type TimeseriesGroupARCResponse as TimeseriesGroupARCResponse,
    type TimeseriesGroupDKIMResponse as TimeseriesGroupDKIMResponse,
    type TimeseriesGroupDMARCResponse as TimeseriesGroupDMARCResponse,
    type TimeseriesGroupMaliciousResponse as TimeseriesGroupMaliciousResponse,
    type TimeseriesGroupSpamResponse as TimeseriesGroupSpamResponse,
    type TimeseriesGroupSPFResponse as TimeseriesGroupSPFResponse,
    type TimeseriesGroupSpoofResponse as TimeseriesGroupSpoofResponse,
    type TimeseriesGroupThreatCategoryResponse as TimeseriesGroupThreatCategoryResponse,
    type TimeseriesGroupTLSVersionResponse as TimeseriesGroupTLSVersionResponse,
    type TimeseriesGroupARCParams as TimeseriesGroupARCParams,
    type TimeseriesGroupDKIMParams as TimeseriesGroupDKIMParams,
    type TimeseriesGroupDMARCParams as TimeseriesGroupDMARCParams,
    type TimeseriesGroupMaliciousParams as TimeseriesGroupMaliciousParams,
    type TimeseriesGroupSpamParams as TimeseriesGroupSpamParams,
    type TimeseriesGroupSPFParams as TimeseriesGroupSPFParams,
    type TimeseriesGroupSpoofParams as TimeseriesGroupSpoofParams,
    type TimeseriesGroupThreatCategoryParams as TimeseriesGroupThreatCategoryParams,
    type TimeseriesGroupTLSVersionParams as TimeseriesGroupTLSVersionParams,
  };
}
