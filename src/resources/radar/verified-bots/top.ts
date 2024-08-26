// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as TopAPI from './top';

export class Top extends APIResource {
  /**
   * Get top verified bots by HTTP requests, with owner and category.
   */
  bots(query?: TopBotsParams, options?: Core.RequestOptions): Core.APIPromise<TopBotsResponse>
  bots(options?: Core.RequestOptions): Core.APIPromise<TopBotsResponse>
  bots(query: TopBotsParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<TopBotsResponse> {
    if (isRequestOptions(query)) {
      return this.bots({}, query);
    }
    return (this._client.get('/radar/verified_bots/top/bots', { query, ...options }) as Core.APIPromise<{ result: TopBotsResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get top verified bot categories by HTTP requests, along with their corresponding
   * percentage, over the total verified bot HTTP requests.
   */
  categories(query?: TopCategoriesParams, options?: Core.RequestOptions): Core.APIPromise<TopCategoriesResponse>
  categories(options?: Core.RequestOptions): Core.APIPromise<TopCategoriesResponse>
  categories(query: TopCategoriesParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<TopCategoriesResponse> {
    if (isRequestOptions(query)) {
      return this.categories({}, query);
    }
    return (this._client.get('/radar/verified_bots/top/categories', { query, ...options }) as Core.APIPromise<{ result: TopCategoriesResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface TopBotsResponse {
  meta: TopBotsResponse.Meta;

  top_0: Array<TopBotsResponse.Top0>;
}

export namespace TopBotsResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

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
    botCategory: string;

    botName: string;

    botOwner: string;

    value: string;
  }
}

export interface TopCategoriesResponse {
  meta: TopCategoriesResponse.Meta;

  top_0: Array<TopCategoriesResponse.Top0>;
}

export namespace TopCategoriesResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

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
    botCategory: string;

    value: string;
  }
}

export interface TopBotsParams {
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
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

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
}

export interface TopCategoriesParams {
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
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

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
}

export namespace Top {
  export import TopBotsResponse = TopAPI.TopBotsResponse;
  export import TopCategoriesResponse = TopAPI.TopCategoriesResponse;
  export import TopBotsParams = TopAPI.TopBotsParams;
  export import TopCategoriesParams = TopAPI.TopCategoriesParams;
}
