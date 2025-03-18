// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as DomainAPI from './domain';
import { Domain, DomainGetParams, DomainGetResponse } from './domain';
import * as InternetServicesAPI from './internet-services';
import {
  InternetServiceCategoriesParams,
  InternetServiceCategoriesResponse,
  InternetServiceTimeseriesGroupsParams,
  InternetServiceTimeseriesGroupsResponse,
  InternetServiceTopParams,
  InternetServiceTopResponse,
  InternetServices,
} from './internet-services';

export class Ranking extends APIResource {
  domain: DomainAPI.Domain = new DomainAPI.Domain(this._client);
  internetServices: InternetServicesAPI.InternetServices = new InternetServicesAPI.InternetServices(
    this._client,
  );

  /**
   * Retrieves domains rank over time.
   */
  timeseriesGroups(
    query?: RankingTimeseriesGroupsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RankingTimeseriesGroupsResponse>;
  timeseriesGroups(options?: Core.RequestOptions): Core.APIPromise<RankingTimeseriesGroupsResponse>;
  timeseriesGroups(
    query: RankingTimeseriesGroupsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RankingTimeseriesGroupsResponse> {
    if (isRequestOptions(query)) {
      return this.timeseriesGroups({}, query);
    }
    return (
      this._client.get('/radar/ranking/timeseries_groups', { query, ...options }) as Core.APIPromise<{
        result: RankingTimeseriesGroupsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the top or trending domains based on their rank. Popular domains are
   * domains of broad appeal based on how people use the Internet. Trending domains
   * are domains that are generating a surge in interest. For more information on top
   * domains, see https://blog.cloudflare.com/radar-domain-rankings/.
   */
  top(query?: RankingTopParams, options?: Core.RequestOptions): Core.APIPromise<RankingTopResponse>;
  top(options?: Core.RequestOptions): Core.APIPromise<RankingTopResponse>;
  top(
    query: RankingTopParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RankingTopResponse> {
    if (isRequestOptions(query)) {
      return this.top({}, query);
    }
    return (
      this._client.get('/radar/ranking/top', { query, ...options }) as Core.APIPromise<{
        result: RankingTopResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RankingTimeseriesGroupsResponse {
  meta: RankingTimeseriesGroupsResponse.Meta;

  serie_0: RankingTimeseriesGroupsResponse.Serie0;
}

export namespace RankingTimeseriesGroupsResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;
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
  }

  export interface Serie0 {
    timestamps: Array<string>;
    [k: string]: Array<string | number> | Array<string> | undefined;
  }
}

export interface RankingTopResponse {
  meta: RankingTopResponse.Meta;

  top_0: Array<RankingTopResponse.Top0>;
}

export namespace RankingTopResponse {
  export interface Meta {
    top_0: Meta.Top0;
  }

  export namespace Meta {
    export interface Top0 {
      date: string;
    }
  }

  export interface Top0 {
    categories: Array<Top0.Category>;

    domain: string;

    rank: number;

    /**
     * Only available in TRENDING rankings.
     */
    pctRankChange?: number;
  }

  export namespace Top0 {
    export interface Category {
      id: number;

      name: string;

      superCategoryId: number;
    }
  }
}

export interface RankingTimeseriesGroupsParams {
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
   * Filters results by domain category.
   */
  domainCategory?: Array<string>;

  /**
   * Comma-separated list of domain names.
   */
  domains?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Comma-separated list of locations (alpha-2 codes).
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Ranking type.
   */
  rankingType?: 'POPULAR' | 'TRENDING_RISE' | 'TRENDING_STEADY';
}

export interface RankingTopParams {
  /**
   * Array of dates to filter the results.
   */
  date?: Array<string>;

  /**
   * Filters results by domain category.
   */
  domainCategory?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Comma-separated list of locations (alpha-2 codes).
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Ranking type.
   */
  rankingType?: 'POPULAR' | 'TRENDING_RISE' | 'TRENDING_STEADY';
}

Ranking.Domain = Domain;
Ranking.InternetServices = InternetServices;

export declare namespace Ranking {
  export {
    type RankingTimeseriesGroupsResponse as RankingTimeseriesGroupsResponse,
    type RankingTopResponse as RankingTopResponse,
    type RankingTimeseriesGroupsParams as RankingTimeseriesGroupsParams,
    type RankingTopParams as RankingTopParams,
  };

  export {
    Domain as Domain,
    type DomainGetResponse as DomainGetResponse,
    type DomainGetParams as DomainGetParams,
  };

  export {
    InternetServices as InternetServices,
    type InternetServiceCategoriesResponse as InternetServiceCategoriesResponse,
    type InternetServiceTimeseriesGroupsResponse as InternetServiceTimeseriesGroupsResponse,
    type InternetServiceTopResponse as InternetServiceTopResponse,
    type InternetServiceCategoriesParams as InternetServiceCategoriesParams,
    type InternetServiceTimeseriesGroupsParams as InternetServiceTimeseriesGroupsParams,
    type InternetServiceTopParams as InternetServiceTopParams,
  };
}
