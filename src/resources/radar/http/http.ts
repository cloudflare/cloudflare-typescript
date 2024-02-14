// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as HTTPAPI from 'cloudflare/resources/radar/http/http';
import * as TLSVersionAPI from 'cloudflare/resources/radar/http/tls-version';

export class HTTP extends APIResource {
  tlsVersion: TLSVersionAPI.TLSVersion = new TLSVersionAPI.TLSVersion(this._client);

  /**
   * Get a time series of the percentage distribution of traffic classified as
   * automated or human. Visit
   * https://developers.cloudflare.com/radar/concepts/bot-classes/ for more
   * information.
   */
  botClasses(
    query?: HTTPBotClassesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPBotClassesResponse>;
  botClasses(options?: Core.RequestOptions): Core.APIPromise<HTTPBotClassesResponse>;
  botClasses(
    query: HTTPBotClassesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPBotClassesResponse> {
    if (isRequestOptions(query)) {
      return this.botClasses({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries_groups/bot_class', { query, ...options }) as Core.APIPromise<{
        result: HTTPBotClassesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series of the percentage distribution of traffic of the top user
   * agents aggregated in families.
   */
  browserFamilies(
    query?: HTTPBrowserFamiliesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPBrowserFamiliesResponse>;
  browserFamilies(options?: Core.RequestOptions): Core.APIPromise<HTTPBrowserFamiliesResponse>;
  browserFamilies(
    query: HTTPBrowserFamiliesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPBrowserFamiliesResponse> {
    if (isRequestOptions(query)) {
      return this.browserFamilies({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries_groups/browser_family', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: HTTPBrowserFamiliesResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series of the percentage distribution of traffic of the top user
   * agents.
   */
  browsers(query?: HTTPBrowsersParams, options?: Core.RequestOptions): Core.APIPromise<HTTPBrowsersResponse>;
  browsers(options?: Core.RequestOptions): Core.APIPromise<HTTPBrowsersResponse>;
  browsers(
    query: HTTPBrowsersParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPBrowsersResponse> {
    if (isRequestOptions(query)) {
      return this.browsers({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries_groups/browser', { query, ...options }) as Core.APIPromise<{
        result: HTTPBrowsersResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series of the percentage distribution of traffic per device type.
   */
  deviceTypes(
    query?: HTTPDeviceTypesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPDeviceTypesResponse>;
  deviceTypes(options?: Core.RequestOptions): Core.APIPromise<HTTPDeviceTypesResponse>;
  deviceTypes(
    query: HTTPDeviceTypesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPDeviceTypesResponse> {
    if (isRequestOptions(query)) {
      return this.deviceTypes({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries_groups/device_type', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: HTTPDeviceTypesResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series of the percentage distribution of traffic per HTTP protocol.
   */
  httpProtocols(
    query?: HTTPHTTPProtocolsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPHTTPProtocolsResponse>;
  httpProtocols(options?: Core.RequestOptions): Core.APIPromise<HTTPHTTPProtocolsResponse>;
  httpProtocols(
    query: HTTPHTTPProtocolsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPHTTPProtocolsResponse> {
    if (isRequestOptions(query)) {
      return this.httpProtocols({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries_groups/http_protocol', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: HTTPHTTPProtocolsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series of the percentage distribution of traffic per HTTP protocol
   * version.
   */
  httpVersions(
    query?: HTTPHTTPVersionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPHTTPVersionsResponse>;
  httpVersions(options?: Core.RequestOptions): Core.APIPromise<HTTPHTTPVersionsResponse>;
  httpVersions(
    query: HTTPHTTPVersionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPHTTPVersionsResponse> {
    if (isRequestOptions(query)) {
      return this.httpVersions({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries_groups/http_version', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: HTTPHTTPVersionsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series of the percentage distribution of traffic per IP protocol
   * version.
   */
  ipVersions(
    query?: HTTPIPVersionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPIPVersionsResponse>;
  ipVersions(options?: Core.RequestOptions): Core.APIPromise<HTTPIPVersionsResponse>;
  ipVersions(
    query: HTTPIPVersionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPIPVersionsResponse> {
    if (isRequestOptions(query)) {
      return this.ipVersions({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries_groups/ip_version', { query, ...options }) as Core.APIPromise<{
        result: HTTPIPVersionsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series of the percentage distribution of traffic of the top operating
   * systems.
   */
  oss(query?: HTTPOssParams, options?: Core.RequestOptions): Core.APIPromise<HTTPOssResponse>;
  oss(options?: Core.RequestOptions): Core.APIPromise<HTTPOssResponse>;
  oss(
    query: HTTPOssParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPOssResponse> {
    if (isRequestOptions(query)) {
      return this.oss({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries_groups/os', { query, ...options }) as Core.APIPromise<{
        result: HTTPOssResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface HTTPBotClassesResponse {
  meta: unknown;

  serie_0: HTTPBotClassesResponse.Serie0;
}

export namespace HTTPBotClassesResponse {
  export interface Serie0 {
    bot: Array<string>;

    human: Array<string>;

    timestamps: Array<string>;
  }
}

export interface HTTPBrowserFamiliesResponse {
  meta: unknown;

  serie_0: HTTPBrowserFamiliesResponse.Serie0;
}

export namespace HTTPBrowserFamiliesResponse {
  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string>;
  }
}

export interface HTTPBrowsersResponse {
  meta: unknown;

  serie_0: HTTPBrowsersResponse.Serie0;
}

export namespace HTTPBrowsersResponse {
  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string>;
  }
}

export interface HTTPDeviceTypesResponse {
  meta: unknown;

  serie_0: HTTPDeviceTypesResponse.Serie0;
}

export namespace HTTPDeviceTypesResponse {
  export interface Serie0 {
    desktop: Array<string>;

    mobile: Array<string>;

    other: Array<string>;

    timestamps: Array<string>;
  }
}

export interface HTTPHTTPProtocolsResponse {
  meta: unknown;

  serie_0: HTTPHTTPProtocolsResponse.Serie0;
}

export namespace HTTPHTTPProtocolsResponse {
  export interface Serie0 {
    http: Array<string>;

    https: Array<string>;

    timestamps: Array<string>;
  }
}

export interface HTTPHTTPVersionsResponse {
  meta: unknown;

  serie_0: HTTPHTTPVersionsResponse.Serie0;
}

export namespace HTTPHTTPVersionsResponse {
  export interface Serie0 {
    'HTTP/1.x': Array<string>;

    'HTTP/2': Array<string>;

    'HTTP/3': Array<string>;

    timestamps: Array<string>;
  }
}

export interface HTTPIPVersionsResponse {
  meta: unknown;

  serie_0: HTTPIPVersionsResponse.Serie0;
}

export namespace HTTPIPVersionsResponse {
  export interface Serie0 {
    IPv4: Array<string>;

    IPv6: Array<string>;

    timestamps: Array<string>;
  }
}

export interface HTTPOssResponse {
  meta: unknown;

  serie_0: HTTPOssResponse.Serie0;
}

export namespace HTTPOssResponse {
  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string>;
  }
}

export interface HTTPBotClassesParams {
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

export interface HTTPBrowserFamiliesParams {
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

export interface HTTPBrowsersParams {
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

export interface HTTPDeviceTypesParams {
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

export interface HTTPHTTPProtocolsParams {
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

export interface HTTPHTTPVersionsParams {
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

export interface HTTPIPVersionsParams {
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

export interface HTTPOssParams {
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

export namespace HTTP {
  export import HTTPBotClassesResponse = HTTPAPI.HTTPBotClassesResponse;
  export import HTTPBrowserFamiliesResponse = HTTPAPI.HTTPBrowserFamiliesResponse;
  export import HTTPBrowsersResponse = HTTPAPI.HTTPBrowsersResponse;
  export import HTTPDeviceTypesResponse = HTTPAPI.HTTPDeviceTypesResponse;
  export import HTTPHTTPProtocolsResponse = HTTPAPI.HTTPHTTPProtocolsResponse;
  export import HTTPHTTPVersionsResponse = HTTPAPI.HTTPHTTPVersionsResponse;
  export import HTTPIPVersionsResponse = HTTPAPI.HTTPIPVersionsResponse;
  export import HTTPOssResponse = HTTPAPI.HTTPOssResponse;
  export import HTTPBotClassesParams = HTTPAPI.HTTPBotClassesParams;
  export import HTTPBrowserFamiliesParams = HTTPAPI.HTTPBrowserFamiliesParams;
  export import HTTPBrowsersParams = HTTPAPI.HTTPBrowsersParams;
  export import HTTPDeviceTypesParams = HTTPAPI.HTTPDeviceTypesParams;
  export import HTTPHTTPProtocolsParams = HTTPAPI.HTTPHTTPProtocolsParams;
  export import HTTPHTTPVersionsParams = HTTPAPI.HTTPHTTPVersionsParams;
  export import HTTPIPVersionsParams = HTTPAPI.HTTPIPVersionsParams;
  export import HTTPOssParams = HTTPAPI.HTTPOssParams;
  export import TLSVersion = TLSVersionAPI.TLSVersion;
  export import TLSVersionListResponse = TLSVersionAPI.TLSVersionListResponse;
  export import TLSVersionListParams = TLSVersionAPI.TLSVersionListParams;
}
