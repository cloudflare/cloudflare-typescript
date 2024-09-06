// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as RankingAPI from './ranking';
import * as DomainAPI from './domain';

export class Ranking extends APIResource {
  domain: DomainAPI.Domain = new DomainAPI.Domain(this._client);

  /**
   * Gets Domains Rank updates change over time. Raw values are returned.
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
   * Get top or trending domains based on their rank. Popular domains are domains of
   * broad appeal based on how people use the Internet. Trending domains are domains
   * that are generating a surge in interest. For more information on top domains,
   * see https://blog.cloudflare.com/radar-domain-rankings/.
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
   * Array of comma separated list of domains names.
   */
  domains?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of locations (alpha-2 country codes).
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * The ranking type.
   */
  rankingType?: 'POPULAR' | 'TRENDING_RISE' | 'TRENDING_STEADY';
}

export interface RankingTopParams {
  /**
   * Array of dates to filter the ranking.
   */
  date?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of locations (alpha-2 country codes).
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * The ranking type.
   */
  rankingType?: 'POPULAR' | 'TRENDING_RISE' | 'TRENDING_STEADY';
}

export namespace Ranking {
  export import RankingTimeseriesGroupsResponse = RankingAPI.RankingTimeseriesGroupsResponse;
  export import RankingTopResponse = RankingAPI.RankingTopResponse;
  export import RankingTimeseriesGroupsParams = RankingAPI.RankingTimeseriesGroupsParams;
  export import RankingTopParams = RankingAPI.RankingTopParams;
  export import Domain = DomainAPI.Domain;
  export import DomainGetResponse = DomainAPI.DomainGetResponse;
  export import DomainGetParams = DomainAPI.DomainGetParams;
}
