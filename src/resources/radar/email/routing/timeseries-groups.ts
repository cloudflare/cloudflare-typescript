// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import * as EmailAPI from '../email';

export class TimeseriesGroups extends APIResource {
  /**
   * Percentage distribution of emails classified per Arc validation over time.
   */
  arc(query?: TimeseriesGroupARCParams, options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupARCResponse>
  arc(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupARCResponse>
  arc(query: TimeseriesGroupARCParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupARCResponse> {
    if (isRequestOptions(query)) {
      return this.arc({}, query);
    }
    return (this._client.get('/radar/email/routing/timeseries_groups/arc', { query, ...options }) as Core.APIPromise<{ result: TimeseriesGroupARCResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified per DKIM validation over time.
   */
  dkim(query?: TimeseriesGroupDKIMParams, options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupDKIMResponse>
  dkim(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupDKIMResponse>
  dkim(query: TimeseriesGroupDKIMParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupDKIMResponse> {
    if (isRequestOptions(query)) {
      return this.dkim({}, query);
    }
    return (this._client.get('/radar/email/routing/timeseries_groups/dkim', { query, ...options }) as Core.APIPromise<{ result: TimeseriesGroupDKIMResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified per DMARC validation over time.
   */
  dmarc(query?: TimeseriesGroupDMARCParams, options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupDMARCResponse>
  dmarc(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupDMARCResponse>
  dmarc(query: TimeseriesGroupDMARCParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupDMARCResponse> {
    if (isRequestOptions(query)) {
      return this.dmarc({}, query);
    }
    return (this._client.get('/radar/email/routing/timeseries_groups/dmarc', { query, ...options }) as Core.APIPromise<{ result: TimeseriesGroupDMARCResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails by Encrypted over time.
   */
  encrypted(query?: TimeseriesGroupEncryptedParams, options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupEncryptedResponse>
  encrypted(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupEncryptedResponse>
  encrypted(query: TimeseriesGroupEncryptedParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupEncryptedResponse> {
    if (isRequestOptions(query)) {
      return this.encrypted({}, query);
    }
    return (this._client.get('/radar/email/routing/timeseries_groups/encrypted', { query, ...options }) as Core.APIPromise<{ result: TimeseriesGroupEncryptedResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails by Ip Version over time.
   */
  ipVersion(query?: TimeseriesGroupIPVersionParams, options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupIPVersionResponse>
  ipVersion(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupIPVersionResponse>
  ipVersion(query: TimeseriesGroupIPVersionParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupIPVersionResponse> {
    if (isRequestOptions(query)) {
      return this.ipVersion({}, query);
    }
    return (this._client.get('/radar/email/routing/timeseries_groups/ip_version', { query, ...options }) as Core.APIPromise<{ result: TimeseriesGroupIPVersionResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Percentage distribution of emails classified per SPF validation over time.
   */
  spf(query?: TimeseriesGroupSPFParams, options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupSPFResponse>
  spf(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupSPFResponse>
  spf(query: TimeseriesGroupSPFParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupSPFResponse> {
    if (isRequestOptions(query)) {
      return this.spf({}, query);
    }
    return (this._client.get('/radar/email/routing/timeseries_groups/spf', { query, ...options }) as Core.APIPromise<{ result: TimeseriesGroupSPFResponse }>)._thenUnwrap((obj) => obj.result);
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
   * Filter for encrypted emails.
   */
  encrypted?: Array<'ENCRYPTED' | 'NOT_ENCRYPTED'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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
   * Filter for encrypted emails.
   */
  encrypted?: Array<'ENCRYPTED' | 'NOT_ENCRYPTED'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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
   * Filter for encrypted emails.
   */
  encrypted?: Array<'ENCRYPTED' | 'NOT_ENCRYPTED'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for spf.
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
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for spf.
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
   * Filter for encrypted emails.
   */
  encrypted?: Array<'ENCRYPTED' | 'NOT_ENCRYPTED'>;

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
   * Filter for encrypted emails.
   */
  encrypted?: Array<'ENCRYPTED' | 'NOT_ENCRYPTED'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export namespace TimeseriesGroups {
  export import TimeseriesGroupARCResponse = TimeseriesGroupsAPI.TimeseriesGroupARCResponse;
  export import TimeseriesGroupDKIMResponse = TimeseriesGroupsAPI.TimeseriesGroupDKIMResponse;
  export import TimeseriesGroupDMARCResponse = TimeseriesGroupsAPI.TimeseriesGroupDMARCResponse;
  export import TimeseriesGroupEncryptedResponse = TimeseriesGroupsAPI.TimeseriesGroupEncryptedResponse;
  export import TimeseriesGroupIPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupIPVersionResponse;
  export import TimeseriesGroupSPFResponse = TimeseriesGroupsAPI.TimeseriesGroupSPFResponse;
  export import TimeseriesGroupARCParams = TimeseriesGroupsAPI.TimeseriesGroupARCParams;
  export import TimeseriesGroupDKIMParams = TimeseriesGroupsAPI.TimeseriesGroupDKIMParams;
  export import TimeseriesGroupDMARCParams = TimeseriesGroupsAPI.TimeseriesGroupDMARCParams;
  export import TimeseriesGroupEncryptedParams = TimeseriesGroupsAPI.TimeseriesGroupEncryptedParams;
  export import TimeseriesGroupIPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupIPVersionParams;
  export import TimeseriesGroupSPFParams = TimeseriesGroupsAPI.TimeseriesGroupSPFParams;
}
