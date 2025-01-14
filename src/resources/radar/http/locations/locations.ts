// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as BotClassAPI from './bot-class';
import { BotClass, BotClassGetParams, BotClassGetResponse } from './bot-class';
import * as BrowserFamilyAPI from './browser-family';
import { BrowserFamily, BrowserFamilyGetParams, BrowserFamilyGetResponse } from './browser-family';
import * as DeviceTypeAPI from './device-type';
import { DeviceType, DeviceTypeGetParams, DeviceTypeGetResponse } from './device-type';
import * as HTTPMethodAPI from './http-method';
import { HTTPMethod, HTTPMethodGetParams, HTTPMethodGetResponse } from './http-method';
import * as HTTPProtocolAPI from './http-protocol';
import { HTTPProtocol, HTTPProtocolGetParams, HTTPProtocolGetResponse } from './http-protocol';
import * as IPVersionAPI from './ip-version';
import { IPVersion, IPVersionGetParams, IPVersionGetResponse } from './ip-version';
import * as OSAPI from './os';
import { OS, OSGetParams, OSGetResponse } from './os';
import * as TLSVersionAPI from './tls-version';
import { TLSVersion, TLSVersionGetParams, TLSVersionGetResponse } from './tls-version';

export class Locations extends APIResource {
  botClass: BotClassAPI.BotClass = new BotClassAPI.BotClass(this._client);
  deviceType: DeviceTypeAPI.DeviceType = new DeviceTypeAPI.DeviceType(this._client);
  httpProtocol: HTTPProtocolAPI.HTTPProtocol = new HTTPProtocolAPI.HTTPProtocol(this._client);
  httpMethod: HTTPMethodAPI.HTTPMethod = new HTTPMethodAPI.HTTPMethod(this._client);
  ipVersion: IPVersionAPI.IPVersion = new IPVersionAPI.IPVersion(this._client);
  os: OSAPI.OS = new OSAPI.OS(this._client);
  tlsVersion: TLSVersionAPI.TLSVersion = new TLSVersionAPI.TLSVersion(this._client);
  browserFamily: BrowserFamilyAPI.BrowserFamily = new BrowserFamilyAPI.BrowserFamily(this._client);

  /**
   * Get the top locations by HTTP traffic. Values are a percentage out of the total
   * traffic.
   */
  get(query?: LocationGetParams, options?: Core.RequestOptions): Core.APIPromise<LocationGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<LocationGetResponse>;
  get(
    query: LocationGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocationGetResponse> {
    if (isRequestOptions(query)) {
      return this.get({}, query);
    }
    return (
      this._client.get('/radar/http/top/locations', { query, ...options }) as Core.APIPromise<{
        result: LocationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LocationGetResponse {
  meta: LocationGetResponse.Meta;

  top_0: Array<LocationGetResponse.Top0>;
}

export namespace LocationGetResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
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

    export interface ConfidenceInfo {
      annotations?: Array<ConfidenceInfo.Annotation>;

      level?: number;
    }

    export namespace ConfidenceInfo {
      export interface Annotation {
        dataSource: string;

        description: string;

        eventType: string;

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Top0 {
    clientCountryAlpha2: string;

    clientCountryName: string;

    value: string;
  }
}

export interface LocationGetParams {
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
   * Filter for browser family.
   */
  browserFamily?: Array<'CHROME' | 'EDGE' | 'FIREFOX' | 'SAFARI'>;

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
   * Limit the number of objects in the response.
   */
  limit?: number;

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

Locations.BotClass = BotClass;
Locations.DeviceType = DeviceType;
Locations.HTTPProtocol = HTTPProtocol;
Locations.HTTPMethod = HTTPMethod;
Locations.IPVersion = IPVersion;
Locations.OS = OS;
Locations.TLSVersion = TLSVersion;
Locations.BrowserFamily = BrowserFamily;

export declare namespace Locations {
  export { type LocationGetResponse as LocationGetResponse, type LocationGetParams as LocationGetParams };

  export {
    BotClass as BotClass,
    type BotClassGetResponse as BotClassGetResponse,
    type BotClassGetParams as BotClassGetParams,
  };

  export {
    DeviceType as DeviceType,
    type DeviceTypeGetResponse as DeviceTypeGetResponse,
    type DeviceTypeGetParams as DeviceTypeGetParams,
  };

  export {
    HTTPProtocol as HTTPProtocol,
    type HTTPProtocolGetResponse as HTTPProtocolGetResponse,
    type HTTPProtocolGetParams as HTTPProtocolGetParams,
  };

  export {
    HTTPMethod as HTTPMethod,
    type HTTPMethodGetResponse as HTTPMethodGetResponse,
    type HTTPMethodGetParams as HTTPMethodGetParams,
  };

  export {
    IPVersion as IPVersion,
    type IPVersionGetResponse as IPVersionGetResponse,
    type IPVersionGetParams as IPVersionGetParams,
  };

  export { OS as OS, type OSGetResponse as OSGetResponse, type OSGetParams as OSGetParams };

  export {
    TLSVersion as TLSVersion,
    type TLSVersionGetResponse as TLSVersionGetResponse,
    type TLSVersionGetParams as TLSVersionGetParams,
  };

  export {
    BrowserFamily as BrowserFamily,
    type BrowserFamilyGetResponse as BrowserFamilyGetResponse,
    type BrowserFamilyGetParams as BrowserFamilyGetParams,
  };
}
