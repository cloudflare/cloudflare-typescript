// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as TimeseriesGroupsAPI from './timeseries-groups';

export class TimeseriesGroups extends APIResource {
  /**
   * Get a time series of the percentage distribution of traffic classified as
   * automated or human. Visit
   * https://developers.cloudflare.com/radar/concepts/bot-classes/ for more
   * information.
   */
  botClass(
    query?: TimeseriesGroupBotClassParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupBotClassResponse>;
  botClass(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupBotClassResponse>;
  botClass(
    query: TimeseriesGroupBotClassParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupBotClassResponse> {
    if (isRequestOptions(query)) {
      return this.botClass({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries_groups/bot_class', { query, ...options }) as Core.APIPromise<{
        result: TimeseriesGroupBotClassResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series of the percentage distribution of traffic of the top user
   * agents.
   */
  browser(
    query?: TimeseriesGroupBrowserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupBrowserResponse>;
  browser(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupBrowserResponse>;
  browser(
    query: TimeseriesGroupBrowserParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupBrowserResponse> {
    if (isRequestOptions(query)) {
      return this.browser({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries_groups/browser', { query, ...options }) as Core.APIPromise<{
        result: TimeseriesGroupBrowserResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series of the percentage distribution of traffic of the top user
   * agents aggregated in families.
   */
  browserFamily(
    query?: TimeseriesGroupBrowserFamilyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupBrowserFamilyResponse>;
  browserFamily(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupBrowserFamilyResponse>;
  browserFamily(
    query: TimeseriesGroupBrowserFamilyParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupBrowserFamilyResponse> {
    if (isRequestOptions(query)) {
      return this.browserFamily({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries_groups/browser_family', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupBrowserFamilyResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series of the percentage distribution of traffic per device type.
   */
  deviceType(
    query?: TimeseriesGroupDeviceTypeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupDeviceTypeResponse>;
  deviceType(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupDeviceTypeResponse>;
  deviceType(
    query: TimeseriesGroupDeviceTypeParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupDeviceTypeResponse> {
    if (isRequestOptions(query)) {
      return this.deviceType({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries_groups/device_type', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupDeviceTypeResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series of the percentage distribution of traffic per HTTP protocol.
   */
  httpProtocol(
    query?: TimeseriesGroupHTTPProtocolParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupHTTPProtocolResponse>;
  httpProtocol(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupHTTPProtocolResponse>;
  httpProtocol(
    query: TimeseriesGroupHTTPProtocolParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupHTTPProtocolResponse> {
    if (isRequestOptions(query)) {
      return this.httpProtocol({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries_groups/http_protocol', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupHTTPProtocolResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series of the percentage distribution of traffic per HTTP protocol
   * version.
   */
  httpVersion(
    query?: TimeseriesGroupHTTPVersionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupHTTPVersionResponse>;
  httpVersion(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupHTTPVersionResponse>;
  httpVersion(
    query: TimeseriesGroupHTTPVersionParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupHTTPVersionResponse> {
    if (isRequestOptions(query)) {
      return this.httpVersion({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries_groups/http_version', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupHTTPVersionResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series of the percentage distribution of traffic per IP protocol
   * version.
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
      this._client.get('/radar/http/timeseries_groups/ip_version', { query, ...options }) as Core.APIPromise<{
        result: TimeseriesGroupIPVersionResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series of the percentage distribution of traffic of the top operating
   * systems.
   */
  os(
    query?: TimeseriesGroupOSParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupOSResponse>;
  os(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupOSResponse>;
  os(
    query: TimeseriesGroupOSParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupOSResponse> {
    if (isRequestOptions(query)) {
      return this.os({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries_groups/os', { query, ...options }) as Core.APIPromise<{
        result: TimeseriesGroupOSResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series of the percentage distribution of traffic per Post Quantum
   * suport.
   */
  postQuantum(
    query?: TimeseriesGroupPostQuantumParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupPostQuantumResponse>;
  postQuantum(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupPostQuantumResponse>;
  postQuantum(
    query: TimeseriesGroupPostQuantumParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupPostQuantumResponse> {
    if (isRequestOptions(query)) {
      return this.postQuantum({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries_groups/post_quantum', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupPostQuantumResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series of the percentage distribution of traffic per TLS protocol
   * version.
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
      this._client.get('/radar/http/timeseries_groups/tls_version', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupTLSVersionResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TimeseriesGroupBotClassResponse {
  meta: unknown;

  serie_0: TimeseriesGroupBotClassResponse.Serie0;
}

export namespace TimeseriesGroupBotClassResponse {
  export interface Serie0 {
    bot: Array<string>;

    human: Array<string>;

    timestamps: Array<string>;
  }
}

export interface TimeseriesGroupBrowserResponse {
  meta: unknown;

  serie_0: TimeseriesGroupBrowserResponse.Serie0;
}

export namespace TimeseriesGroupBrowserResponse {
  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string> | undefined;
  }
}

export interface TimeseriesGroupBrowserFamilyResponse {
  meta: unknown;

  serie_0: TimeseriesGroupBrowserFamilyResponse.Serie0;
}

export namespace TimeseriesGroupBrowserFamilyResponse {
  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string> | undefined;
  }
}

export interface TimeseriesGroupDeviceTypeResponse {
  meta: unknown;

  serie_0: TimeseriesGroupDeviceTypeResponse.Serie0;
}

export namespace TimeseriesGroupDeviceTypeResponse {
  export interface Serie0 {
    desktop: Array<string>;

    mobile: Array<string>;

    other: Array<string>;

    timestamps: Array<string>;
  }
}

export interface TimeseriesGroupHTTPProtocolResponse {
  meta: unknown;

  serie_0: TimeseriesGroupHTTPProtocolResponse.Serie0;
}

export namespace TimeseriesGroupHTTPProtocolResponse {
  export interface Serie0 {
    http: Array<string>;

    https: Array<string>;

    timestamps: Array<string>;
  }
}

export interface TimeseriesGroupHTTPVersionResponse {
  meta: unknown;

  serie_0: TimeseriesGroupHTTPVersionResponse.Serie0;
}

export namespace TimeseriesGroupHTTPVersionResponse {
  export interface Serie0 {
    'HTTP/1.x': Array<string>;

    'HTTP/2': Array<string>;

    'HTTP/3': Array<string>;

    timestamps: Array<string>;
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

    timestamps: Array<string>;
  }
}

export interface TimeseriesGroupOSResponse {
  meta: unknown;

  serie_0: TimeseriesGroupOSResponse.Serie0;
}

export namespace TimeseriesGroupOSResponse {
  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string> | undefined;
  }
}

export interface TimeseriesGroupPostQuantumResponse {
  meta: unknown;

  serie_0: TimeseriesGroupPostQuantumResponse.Serie0;
}

export namespace TimeseriesGroupPostQuantumResponse {
  export interface Serie0 {
    NOT_SUPPORTED: Array<string>;

    SUPPORTED: Array<string>;

    timestamps: Array<string>;
  }
}

export interface TimeseriesGroupTLSVersionResponse {
  meta: unknown;

  serie_0: TimeseriesGroupTLSVersionResponse.Serie0;
}

export namespace TimeseriesGroupTLSVersionResponse {
  export interface Serie0 {
    timestamps: Array<string>;

    'TLS 1.0': Array<string>;

    'TLS 1.1': Array<string>;

    'TLS 1.2': Array<string>;

    'TLS 1.3': Array<string>;

    'TLS QUIC': Array<string>;
  }
}

export interface TimeseriesGroupBotClassParams {
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
   * Filter for device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for http protocol.
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filter for http version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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
   * Filter for os name.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | 'TLSvQUIC'>;
}

export interface TimeseriesGroupBrowserParams {
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
   * Filter for bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

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
   * Filter for device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for http protocol.
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filter for http version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limit the number of objects (eg browsers, verticals, etc) to the top items over
   * the time range.
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

  /**
   * Filter for os name.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | 'TLSvQUIC'>;
}

export interface TimeseriesGroupBrowserFamilyParams {
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
   * Filter for bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

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
   * Filter for device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for http protocol.
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filter for http version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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
   * Filter for os name.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | 'TLSvQUIC'>;
}

export interface TimeseriesGroupDeviceTypeParams {
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
   * Filter for bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

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
   * Filter for http protocol.
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filter for http version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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
   * Filter for os name.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | 'TLSvQUIC'>;
}

export interface TimeseriesGroupHTTPProtocolParams {
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
   * Filter for bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

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
   * Filter for device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for http version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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
   * Filter for os name.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | 'TLSvQUIC'>;
}

export interface TimeseriesGroupHTTPVersionParams {
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
   * Filter for bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

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
   * Filter for device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for http protocol.
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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
   * Filter for os name.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | 'TLSvQUIC'>;
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
   * Filter for bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

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
   * Filter for device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for http protocol.
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filter for http version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

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
   * Filter for os name.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | 'TLSvQUIC'>;
}

export interface TimeseriesGroupOSParams {
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
   * Filter for bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

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
   * Filter for device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for http protocol.
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filter for http version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | 'TLSvQUIC'>;
}

export interface TimeseriesGroupPostQuantumParams {
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
   * Filter for bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

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
   * Filter for device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for http protocol.
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filter for http version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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
   * Filter for os name.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | 'TLSvQUIC'>;
}

export interface TimeseriesGroupTLSVersionParams {
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
   * Filter for bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

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
   * Filter for device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for http protocol.
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filter for http version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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
   * Filter for os name.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;
}

export namespace TimeseriesGroups {
  export import TimeseriesGroupBotClassResponse = TimeseriesGroupsAPI.TimeseriesGroupBotClassResponse;
  export import TimeseriesGroupBrowserResponse = TimeseriesGroupsAPI.TimeseriesGroupBrowserResponse;
  export import TimeseriesGroupBrowserFamilyResponse = TimeseriesGroupsAPI.TimeseriesGroupBrowserFamilyResponse;
  export import TimeseriesGroupDeviceTypeResponse = TimeseriesGroupsAPI.TimeseriesGroupDeviceTypeResponse;
  export import TimeseriesGroupHTTPProtocolResponse = TimeseriesGroupsAPI.TimeseriesGroupHTTPProtocolResponse;
  export import TimeseriesGroupHTTPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupHTTPVersionResponse;
  export import TimeseriesGroupIPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupIPVersionResponse;
  export import TimeseriesGroupOSResponse = TimeseriesGroupsAPI.TimeseriesGroupOSResponse;
  export import TimeseriesGroupPostQuantumResponse = TimeseriesGroupsAPI.TimeseriesGroupPostQuantumResponse;
  export import TimeseriesGroupTLSVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupTLSVersionResponse;
  export import TimeseriesGroupBotClassParams = TimeseriesGroupsAPI.TimeseriesGroupBotClassParams;
  export import TimeseriesGroupBrowserParams = TimeseriesGroupsAPI.TimeseriesGroupBrowserParams;
  export import TimeseriesGroupBrowserFamilyParams = TimeseriesGroupsAPI.TimeseriesGroupBrowserFamilyParams;
  export import TimeseriesGroupDeviceTypeParams = TimeseriesGroupsAPI.TimeseriesGroupDeviceTypeParams;
  export import TimeseriesGroupHTTPProtocolParams = TimeseriesGroupsAPI.TimeseriesGroupHTTPProtocolParams;
  export import TimeseriesGroupHTTPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupHTTPVersionParams;
  export import TimeseriesGroupIPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupIPVersionParams;
  export import TimeseriesGroupOSParams = TimeseriesGroupsAPI.TimeseriesGroupOSParams;
  export import TimeseriesGroupPostQuantumParams = TimeseriesGroupsAPI.TimeseriesGroupPostQuantumParams;
  export import TimeseriesGroupTLSVersionParams = TimeseriesGroupsAPI.TimeseriesGroupTLSVersionParams;
}
