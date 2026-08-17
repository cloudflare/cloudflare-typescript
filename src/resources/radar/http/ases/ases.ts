// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BotClassAPI from './bot-class';
import { BaseBotClass, BotClass, BotClassGetParams, BotClassGetResponse } from './bot-class';
import * as BrowserFamilyAPI from './browser-family';
import {
  BaseBrowserFamily,
  BrowserFamily,
  BrowserFamilyGetParams,
  BrowserFamilyGetResponse,
} from './browser-family';
import * as DeviceTypeAPI from './device-type';
import { BaseDeviceType, DeviceType, DeviceTypeGetParams, DeviceTypeGetResponse } from './device-type';
import * as HTTPMethodAPI from './http-method';
import { BaseHTTPMethod, HTTPMethod, HTTPMethodGetParams, HTTPMethodGetResponse } from './http-method';
import * as HTTPProtocolAPI from './http-protocol';
import {
  BaseHTTPProtocol,
  HTTPProtocol,
  HTTPProtocolGetParams,
  HTTPProtocolGetResponse,
} from './http-protocol';
import * as IPVersionAPI from './ip-version';
import { BaseIPVersion, IPVersion, IPVersionGetParams, IPVersionGetResponse } from './ip-version';
import * as OSAPI from './os';
import { BaseOS, OS, OSGetParams, OSGetResponse } from './os';
import * as TLSVersionAPI from './tls-version';
import { BaseTLSVersion, TLSVersion, TLSVersionGetParams, TLSVersionGetResponse } from './tls-version';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class BaseAses extends APIResource {
  static override readonly _key: readonly ['radar', 'http', 'ases'] = Object.freeze([
    'radar',
    'http',
    'ases',
  ] as const);

  /**
   * Retrieves the top autonomous systems by HTTP requests.
   *
   * @example
   * ```ts
   * const ase = await client.radar.http.ases.get();
   * ```
   */
  get(query: AseGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<AseGetResponse> {
    return (
      this._client.get('/radar/http/top/ases', { query, ...options }) as APIPromise<{
        result: AseGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Ases extends BaseAses {
  botClass: BotClassAPI.BotClass = new BotClassAPI.BotClass(this._client);
  deviceType: DeviceTypeAPI.DeviceType = new DeviceTypeAPI.DeviceType(this._client);
  httpProtocol: HTTPProtocolAPI.HTTPProtocol = new HTTPProtocolAPI.HTTPProtocol(this._client);
  httpMethod: HTTPMethodAPI.HTTPMethod = new HTTPMethodAPI.HTTPMethod(this._client);
  ipVersion: IPVersionAPI.IPVersion = new IPVersionAPI.IPVersion(this._client);
  os: OSAPI.OS = new OSAPI.OS(this._client);
  tlsVersion: TLSVersionAPI.TLSVersion = new TLSVersionAPI.TLSVersion(this._client);
  browserFamily: BrowserFamilyAPI.BrowserFamily = new BrowserFamilyAPI.BrowserFamily(this._client);
}

export interface AseGetResponse {
  /**
   * Metadata for the results.
   */
  meta: AseGetResponse.Meta;

  top_0: Array<AseGetResponse.Top0>;
}

export namespace AseGetResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    confidenceInfo: Meta.ConfidenceInfo | null;

    dateRange: Array<Meta.DateRange>;

    /**
     * Timestamp of the last dataset update.
     */
    lastUpdated: string;

    /**
     * Normalization method applied to the results. Refer to
     * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
     */
    normalization:
      | 'PERCENTAGE'
      | 'MIN0_MAX'
      | 'MIN_MAX'
      | 'RAW_VALUES'
      | 'PERCENTAGE_CHANGE'
      | 'ROLLING_AVERAGE'
      | 'OVERLAPPED_PERCENTAGE'
      | 'RATIO';

    /**
     * Measurement units for the results.
     */
    units: Array<Meta.Unit>;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations: Array<ConfidenceInfo.Annotation>;

      /**
       * Provides an indication of how much confidence Cloudflare has in the data.
       */
      level: number;
    }

    export namespace ConfidenceInfo {
      /**
       * Annotation associated with the result (e.g. outage or other type of event).
       */
      export interface Annotation {
        /**
         * Data source for annotations.
         */
        dataSource:
          | 'ALL'
          | 'AI_BOTS'
          | 'AI_GATEWAY'
          | 'BGP'
          | 'BOTS'
          | 'CONNECTION_ANOMALY'
          | 'CT'
          | 'DNS'
          | 'DNS_MAGNITUDE'
          | 'DNS_AS112'
          | 'DOS'
          | 'EMAIL_ROUTING'
          | 'EMAIL_SECURITY'
          | 'FW'
          | 'FW_PG'
          | 'HTTP'
          | 'HTTP_CONTROL'
          | 'HTTP_CRAWLER_REFERER'
          | 'HTTP_ORIGINS'
          | 'IQI'
          | 'LEAKED_CREDENTIALS'
          | 'NET'
          | 'ROBOTS_TXT'
          | 'SPEED'
          | 'WORKERS_AI';

        description: string;

        endDate: string;

        /**
         * Event type for annotations.
         */
        eventType: 'EVENT' | 'GENERAL' | 'OUTAGE' | 'PARTIAL_PROJECTION' | 'PIPELINE' | 'TRAFFIC_ANOMALY';

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;

        tags?: Array<string>;
      }
    }

    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface Unit {
      name: string;

      value: string;
    }
  }

  export interface Top0 {
    clientASN: number;

    clientASName: string;

    /**
     * A numeric string.
     */
    value: string;
  }
}

export interface AseGetParams {
  /**
   * Filters results by Autonomous System. Specify one or more Autonomous System
   * Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from
   * results. For example, `-174, 3356` excludes results from AS174, but includes
   * results from AS3356.
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
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive). Alternative to `dateRange`; provide together
   * with `dateStart`. When requesting comparison series, every series must resolve
   * to the same duration as the main series. Each `dateStart`/`dateEnd` is floored
   * to the nearest 15 minutes before evaluation, so windows whose durations match
   * only before alignment may be rejected.
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by relative date range ending at the current time, with each
   * value producing a separate series. Use `<n>d` for days (up to `364d`) or `<n>w`
   * for weeks (up to `52w`). Append `control` to request the equivalent previous
   * period for comparison: the comparison window is shifted back by the current
   * window's length rounded up to a whole number of weeks, so it keeps the same
   * weekday alignment and does not overlap the current window (e.g. `7dcontrol`
   * covers days -14 to -7, `10dcontrol` covers days -24 to -14). For example, pass
   * `7d` and `7dcontrol` to compare this week with the previous week. All series
   * must resolve to the same duration as the main series; relative ranges (including
   * `control`) satisfy this automatically. Use this parameter or set specific start
   * and end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range. Alternative to `dateRange`; provide together with
   * `dateEnd`. When requesting comparison series, every series must resolve to the
   * same duration as the main series. Each `dateStart`/`dateEnd` is floored to the
   * nearest 15 minutes before evaluation, so windows whose durations match only
   * before alignment may be rejected.
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
   * Filters results by Geolocation. Specify a comma-separated list of GeoNames IDs.
   * Prefix with `-` to exclude geoIds from results. For example, `-2267056,360689`
   * excludes results from the 2267056 (Lisbon), but includes results from 5128638
   * (New York).
   */
  geoId?: Array<string>;

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
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
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

Ases.BotClass = BotClass;
Ases.BaseBotClass = BaseBotClass;
Ases.DeviceType = DeviceType;
Ases.BaseDeviceType = BaseDeviceType;
Ases.HTTPProtocol = HTTPProtocol;
Ases.BaseHTTPProtocol = BaseHTTPProtocol;
Ases.HTTPMethod = HTTPMethod;
Ases.BaseHTTPMethod = BaseHTTPMethod;
Ases.IPVersion = IPVersion;
Ases.BaseIPVersion = BaseIPVersion;
Ases.OS = OS;
Ases.BaseOS = BaseOS;
Ases.TLSVersion = TLSVersion;
Ases.BaseTLSVersion = BaseTLSVersion;
Ases.BrowserFamily = BrowserFamily;
Ases.BaseBrowserFamily = BaseBrowserFamily;

export declare namespace Ases {
  export { type AseGetResponse as AseGetResponse, type AseGetParams as AseGetParams };

  export {
    BotClass as BotClass,
    BaseBotClass as BaseBotClass,
    type BotClassGetResponse as BotClassGetResponse,
    type BotClassGetParams as BotClassGetParams,
  };

  export {
    DeviceType as DeviceType,
    BaseDeviceType as BaseDeviceType,
    type DeviceTypeGetResponse as DeviceTypeGetResponse,
    type DeviceTypeGetParams as DeviceTypeGetParams,
  };

  export {
    HTTPProtocol as HTTPProtocol,
    BaseHTTPProtocol as BaseHTTPProtocol,
    type HTTPProtocolGetResponse as HTTPProtocolGetResponse,
    type HTTPProtocolGetParams as HTTPProtocolGetParams,
  };

  export {
    HTTPMethod as HTTPMethod,
    BaseHTTPMethod as BaseHTTPMethod,
    type HTTPMethodGetResponse as HTTPMethodGetResponse,
    type HTTPMethodGetParams as HTTPMethodGetParams,
  };

  export {
    IPVersion as IPVersion,
    BaseIPVersion as BaseIPVersion,
    type IPVersionGetResponse as IPVersionGetResponse,
    type IPVersionGetParams as IPVersionGetParams,
  };

  export { OS as OS, BaseOS as BaseOS, type OSGetResponse as OSGetResponse, type OSGetParams as OSGetParams };

  export {
    TLSVersion as TLSVersion,
    BaseTLSVersion as BaseTLSVersion,
    type TLSVersionGetResponse as TLSVersionGetResponse,
    type TLSVersionGetParams as TLSVersionGetParams,
  };

  export {
    BrowserFamily as BrowserFamily,
    BaseBrowserFamily as BaseBrowserFamily,
    type BrowserFamilyGetResponse as BrowserFamilyGetResponse,
    type BrowserFamilyGetParams as BrowserFamilyGetParams,
  };
}
