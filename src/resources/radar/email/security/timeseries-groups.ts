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
      this._client.get('/radar/email/security/timeseries_groups/arc', {
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
      this._client.get('/radar/email/security/timeseries_groups/dkim', {
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
      this._client.get('/radar/email/security/timeseries_groups/dmarc', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupDMARCResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of emails by malicious classification over time.
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
   * Retrieves the distribution of emails by spam classification (spam vs. non-spam)
   * over time.
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
      this._client.get('/radar/email/security/timeseries_groups/spf', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupSPFResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of emails by spoof classification (spoof vs.
   * non-spoof) over time.
   */
  spoof(
    query?: TimeseriesGroupSpoofParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupSpoofResponse>;
  spoof(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupSpoofResponse>;
  spoof(
    query: TimeseriesGroupSpoofParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupSpoofResponse> {
    if (isRequestOptions(query)) {
      return this.spoof({}, query);
    }
    return (
      this._client.get('/radar/email/security/timeseries_groups/spoof', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupSpoofResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of emails by threat category over time.
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

  /**
   * Retrieves the distribution of emails by TLS version over time.
   */
  tlsVersion(
    query?: TimeseriesGroupTLSVersionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupTLSVersionResponse>;
  tlsVersion(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupTLSVersionResponse>;
  tlsVersion(
    query: TimeseriesGroupTLSVersionParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupTLSVersionResponse> {
    if (isRequestOptions(query)) {
      return this.tlsVersion({}, query);
    }
    return (
      this._client.get('/radar/email/security/timeseries_groups/tls_version', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupTLSVersionResponse }>
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
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by SPF (Sender Policy Framework) validation status.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by TLS version.
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

  /**
   * Filters results by TLS version.
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

  /**
   * Filters results by TLS version.
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
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by SPF (Sender Policy Framework) validation status.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by TLS version.
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
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by SPF (Sender Policy Framework) validation status.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by TLS version.
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
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by TLS version.
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
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by SPF (Sender Policy Framework) validation status.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by TLS version.
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
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by SPF (Sender Policy Framework) validation status.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by TLS version.
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
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by SPF (Sender Policy Framework) validation status.
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
