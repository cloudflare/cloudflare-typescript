// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as BotClassAPI from './bot-class';

export class BotClass extends APIResource {
  /**
   * Get the top autonomous systems (AS), by HTTP traffic, of the requested bot
   * class. These two categories use Cloudflare's bot score - refer to
   * [Bot Scores](https://developers.cloudflare.com/bots/concepts/bot-score) for more
   * information. Values are a percentage out of the total traffic.
   */
  get(
    botClass: 'LIKELY_AUTOMATED' | 'LIKELY_HUMAN',
    query?: BotClassGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BotClassGetResponse>;
  get(
    botClass: 'LIKELY_AUTOMATED' | 'LIKELY_HUMAN',
    options?: Core.RequestOptions,
  ): Core.APIPromise<BotClassGetResponse>;
  get(
    botClass: 'LIKELY_AUTOMATED' | 'LIKELY_HUMAN',
    query: BotClassGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BotClassGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(botClass, {}, query);
    }
    return (
      this._client.get(`/radar/http/top/ases/bot_class/${botClass}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: BotClassGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface BotClassGetResponse {
  meta: BotClassGetResponse.Meta;

  top_0: Array<BotClassGetResponse.Top0>;
}

export namespace BotClassGetResponse {
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
    clientASN: number;

    clientASName: string;

    value: string;
  }
}

export interface BotClassGetParams {
  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

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

export namespace BotClass {
  export import BotClassGetResponse = BotClassAPI.BotClassGetResponse;
  export import BotClassGetParams = BotClassAPI.BotClassGetParams;
}
