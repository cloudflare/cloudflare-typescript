// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class TimeseriesGroups extends APIResource {
  /**
   * Retrieves the distribution of HTTP requests classified as automated or human
   * over time. Visit https://developers.cloudflare.com/radar/concepts/bot-classes/
   * for more information.
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
   * Retrieves the distribution of HTTP requests by user agent over time.
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
   * Retrieves the distribution of HTTP requests by user agent family over time.
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
   * Retrieves the distribution of HTTP requests by device type over time.
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
   * Retrieves the distribution of HTTP requests by HTTP protocol (HTTP vs. HTTPS)
   * over time.
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
   * Retrieves the distribution of HTTP requests by HTTP version over time.
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
   * Retrieves the distribution of HTTP requests by IP version over time.
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
   * Retrieves the distribution of HTTP requests by operating system over time.
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
   * Retrieves the distribution of HTTP requests by post-quantum support over time.
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
   * Retrieves the distribution of HTTP requests by TLS version over time.
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
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by browser family.
   */
  browserFamily?: Array<'CHROME' | 'EDGE' | 'FIREFOX' | 'SAFARI'>;

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
   * Filters results by device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by HTTP protocol (HTTP vs. HTTPS).
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filters results by HTTP version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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

  /**
   * Filters results by operating system.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filters results by TLS version.
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
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

  /**
   * Filters results by browser family.
   */
  browserFamily?: Array<'CHROME' | 'EDGE' | 'FIREFOX' | 'SAFARI'>;

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
   * Filters results by device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by HTTP protocol (HTTP vs. HTTPS).
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filters results by HTTP version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limits the number of objects per group to the top items within the specified
   * time range. If there are more items than the limit, the response will include
   * the count of items, with any remaining items grouped together under an "other"
   * category.
   */
  limitPerGroup?: number;

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

  /**
   * Filters results by operating system.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filters results by TLS version.
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
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

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
   * Filters results by device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by HTTP protocol (HTTP vs. HTTPS).
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filters results by HTTP version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limits the number of objects per group to the top items within the specified
   * time range. If there are more items than the limit, the response will include
   * the count of items, with any remaining items grouped together under an "other"
   * category.
   */
  limitPerGroup?: number;

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

  /**
   * Filters results by operating system.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filters results by TLS version.
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
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

  /**
   * Filters results by browser family.
   */
  browserFamily?: Array<'CHROME' | 'EDGE' | 'FIREFOX' | 'SAFARI'>;

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
   * Filters results by HTTP protocol (HTTP vs. HTTPS).
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filters results by HTTP version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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

  /**
   * Filters results by operating system.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filters results by TLS version.
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
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

  /**
   * Filters results by browser family.
   */
  browserFamily?: Array<'CHROME' | 'EDGE' | 'FIREFOX' | 'SAFARI'>;

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
   * Filters results by device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by HTTP version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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

  /**
   * Filters results by operating system.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filters results by TLS version.
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
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

  /**
   * Filters results by browser family.
   */
  browserFamily?: Array<'CHROME' | 'EDGE' | 'FIREFOX' | 'SAFARI'>;

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
   * Filters results by device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by HTTP protocol (HTTP vs. HTTPS).
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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

  /**
   * Filters results by operating system.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filters results by TLS version.
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
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

  /**
   * Filters results by browser family.
   */
  browserFamily?: Array<'CHROME' | 'EDGE' | 'FIREFOX' | 'SAFARI'>;

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
   * Filters results by device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by HTTP protocol (HTTP vs. HTTPS).
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filters results by HTTP version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

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

  /**
   * Filters results by operating system.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filters results by TLS version.
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
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

  /**
   * Filters results by browser family.
   */
  browserFamily?: Array<'CHROME' | 'EDGE' | 'FIREFOX' | 'SAFARI'>;

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
   * Filters results by device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by HTTP protocol (HTTP vs. HTTPS).
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filters results by HTTP version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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

  /**
   * Filters results by TLS version.
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
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

  /**
   * Filters results by browser family.
   */
  browserFamily?: Array<'CHROME' | 'EDGE' | 'FIREFOX' | 'SAFARI'>;

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
   * Filters results by device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by HTTP protocol (HTTP vs. HTTPS).
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filters results by HTTP version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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

  /**
   * Filters results by operating system.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filters results by TLS version.
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
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

  /**
   * Filters results by browser family.
   */
  browserFamily?: Array<'CHROME' | 'EDGE' | 'FIREFOX' | 'SAFARI'>;

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
   * Filters results by device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by HTTP protocol (HTTP vs. HTTPS).
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filters results by HTTP version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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

  /**
   * Filters results by operating system.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;
}

export declare namespace TimeseriesGroups {
  export {
    type TimeseriesGroupBotClassResponse as TimeseriesGroupBotClassResponse,
    type TimeseriesGroupBrowserResponse as TimeseriesGroupBrowserResponse,
    type TimeseriesGroupBrowserFamilyResponse as TimeseriesGroupBrowserFamilyResponse,
    type TimeseriesGroupDeviceTypeResponse as TimeseriesGroupDeviceTypeResponse,
    type TimeseriesGroupHTTPProtocolResponse as TimeseriesGroupHTTPProtocolResponse,
    type TimeseriesGroupHTTPVersionResponse as TimeseriesGroupHTTPVersionResponse,
    type TimeseriesGroupIPVersionResponse as TimeseriesGroupIPVersionResponse,
    type TimeseriesGroupOSResponse as TimeseriesGroupOSResponse,
    type TimeseriesGroupPostQuantumResponse as TimeseriesGroupPostQuantumResponse,
    type TimeseriesGroupTLSVersionResponse as TimeseriesGroupTLSVersionResponse,
    type TimeseriesGroupBotClassParams as TimeseriesGroupBotClassParams,
    type TimeseriesGroupBrowserParams as TimeseriesGroupBrowserParams,
    type TimeseriesGroupBrowserFamilyParams as TimeseriesGroupBrowserFamilyParams,
    type TimeseriesGroupDeviceTypeParams as TimeseriesGroupDeviceTypeParams,
    type TimeseriesGroupHTTPProtocolParams as TimeseriesGroupHTTPProtocolParams,
    type TimeseriesGroupHTTPVersionParams as TimeseriesGroupHTTPVersionParams,
    type TimeseriesGroupIPVersionParams as TimeseriesGroupIPVersionParams,
    type TimeseriesGroupOSParams as TimeseriesGroupOSParams,
    type TimeseriesGroupPostQuantumParams as TimeseriesGroupPostQuantumParams,
    type TimeseriesGroupTLSVersionParams as TimeseriesGroupTLSVersionParams,
  };
}
