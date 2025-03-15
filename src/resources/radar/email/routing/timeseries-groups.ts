// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as EmailAPI from '../email';

export class TimeseriesGroups extends APIResource {
  /**
   * Retrieves the distribution of emails by ARC (Authenticated Received Chain)
   * validation over time.
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
      this._client.get('/radar/email/routing/timeseries_groups/arc', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupARCResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of emails by DKIM (DomainKeys Identified Mail)
   * validation over time.
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
      this._client.get('/radar/email/routing/timeseries_groups/dkim', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupDKIMResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of emails by DMARC (Domain-based Message
   * Authentication, Reporting and Conformance) validation over time.
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
      this._client.get('/radar/email/routing/timeseries_groups/dmarc', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupDMARCResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of emails by encryption status (encrypted vs.
   * not-encrypted) over time.
   */
  encrypted(
    query?: TimeseriesGroupEncryptedParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupEncryptedResponse>;
  encrypted(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupEncryptedResponse>;
  encrypted(
    query: TimeseriesGroupEncryptedParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupEncryptedResponse> {
    if (isRequestOptions(query)) {
      return this.encrypted({}, query);
    }
    return (
      this._client.get('/radar/email/routing/timeseries_groups/encrypted', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupEncryptedResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of emails by IP version over time.
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
      this._client.get('/radar/email/routing/timeseries_groups/ip_version', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupIPVersionResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of emails by SPF (Sender Policy Framework) validation
   * over time.
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
      this._client.get('/radar/email/routing/timeseries_groups/spf', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupSPFResponse }>
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

export interface TimeseriesGroupEncryptedResponse {
  meta: unknown;

  serie_0: TimeseriesGroupEncryptedResponse.Serie0;
}

export namespace TimeseriesGroupEncryptedResponse {
  export interface Serie0 {
    ENCRYPTED: Array<string>;

    NOT_ENCRYPTED: Array<string>;
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

export interface TimeseriesGroupSPFResponse {
  meta: unknown;

  serie_0: EmailAPI.RadarEmailSeries;
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
   * Filters results by DKIM (DomainKeys Identified Mail) validation status.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by DMARC (Domain-based Message Authentication, Reporting and
   * Conformance) validation status.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by encryption status (encrypted vs. not-encrypted).
   */
  encrypted?: Array<'ENCRYPTED' | 'NOT_ENCRYPTED'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by SPF (Sender Policy Framework) validation status.
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
   * Filters results by ARC (Authenticated Received Chain) validation.
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

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
   * Filters results by DMARC (Domain-based Message Authentication, Reporting and
   * Conformance) validation status.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by encryption status (encrypted vs. not-encrypted).
   */
  encrypted?: Array<'ENCRYPTED' | 'NOT_ENCRYPTED'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by SPF (Sender Policy Framework) validation status.
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
   * Filters results by ARC (Authenticated Received Chain) validation.
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

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
   * Filters results by DKIM (DomainKeys Identified Mail) validation status.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by encryption status (encrypted vs. not-encrypted).
   */
  encrypted?: Array<'ENCRYPTED' | 'NOT_ENCRYPTED'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by SPF (Sender Policy Framework) validation status.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;
}

export interface TimeseriesGroupEncryptedParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Filters results by ARC (Authenticated Received Chain) validation.
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

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
   * Filters results by DKIM (DomainKeys Identified Mail) validation status.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by DMARC (Domain-based Message Authentication, Reporting and
   * Conformance) validation status.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by SPF (Sender Policy Framework) validation status.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;
}

export interface TimeseriesGroupIPVersionParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Filters results by ARC (Authenticated Received Chain) validation.
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

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
   * Filters results by DKIM (DomainKeys Identified Mail) validation status.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by DMARC (Domain-based Message Authentication, Reporting and
   * Conformance) validation status.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by encryption status (encrypted vs. not-encrypted).
   */
  encrypted?: Array<'ENCRYPTED' | 'NOT_ENCRYPTED'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by SPF (Sender Policy Framework) validation status.
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
   * Filters results by ARC (Authenticated Received Chain) validation.
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

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
   * Filters results by DKIM (DomainKeys Identified Mail) validation status.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by DMARC (Domain-based Message Authentication, Reporting and
   * Conformance) validation status.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by encryption status (encrypted vs. not-encrypted).
   */
  encrypted?: Array<'ENCRYPTED' | 'NOT_ENCRYPTED'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export declare namespace TimeseriesGroups {
  export {
    type TimeseriesGroupARCResponse as TimeseriesGroupARCResponse,
    type TimeseriesGroupDKIMResponse as TimeseriesGroupDKIMResponse,
    type TimeseriesGroupDMARCResponse as TimeseriesGroupDMARCResponse,
    type TimeseriesGroupEncryptedResponse as TimeseriesGroupEncryptedResponse,
    type TimeseriesGroupIPVersionResponse as TimeseriesGroupIPVersionResponse,
    type TimeseriesGroupSPFResponse as TimeseriesGroupSPFResponse,
    type TimeseriesGroupARCParams as TimeseriesGroupARCParams,
    type TimeseriesGroupDKIMParams as TimeseriesGroupDKIMParams,
    type TimeseriesGroupDMARCParams as TimeseriesGroupDMARCParams,
    type TimeseriesGroupEncryptedParams as TimeseriesGroupEncryptedParams,
    type TimeseriesGroupIPVersionParams as TimeseriesGroupIPVersionParams,
    type TimeseriesGroupSPFParams as TimeseriesGroupSPFParams,
  };
}
