// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as UserAgentsAPI from './user-agents';
import {
  BaseUserAgents,
  UserAgentDirectiveParams,
  UserAgentDirectiveResponse,
  UserAgents,
} from './user-agents';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class BaseTop extends APIResource {
  static override readonly _key: readonly ['radar', 'robotsTXT', 'top'] = Object.freeze([
    'radar',
    'robotsTXT',
    'top',
  ] as const);

  /**
   * Retrieves the top domain categories by the number of robots.txt files parsed.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.robotsTXT.top.domainCategories();
   * ```
   */
  domainCategories(
    query: TopDomainCategoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TopDomainCategoriesResponse> {
    return (
      this._client.get('/radar/robots_txt/top/domain_categories', { query, ...options }) as APIPromise<{
        result: TopDomainCategoriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Top extends BaseTop {
  userAgents: UserAgentsAPI.UserAgents = new UserAgentsAPI.UserAgents(this._client);
}

export interface TopDomainCategoriesResponse {
  /**
   * Metadata for the results.
   */
  meta: TopDomainCategoriesResponse.Meta;

  top_0: Array<TopDomainCategoriesResponse.Top0>;
}

export namespace TopDomainCategoriesResponse {
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
    name: string;

    value: number;
  }
}

export interface TopDomainCategoriesParams {
  /**
   * Filters results by the specified array of dates.
   */
  date?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by user agent category.
   */
  userAgentCategory?: 'AI';
}

Top.UserAgents = UserAgents;
Top.BaseUserAgents = BaseUserAgents;

export declare namespace Top {
  export {
    type TopDomainCategoriesResponse as TopDomainCategoriesResponse,
    type TopDomainCategoriesParams as TopDomainCategoriesParams,
  };

  export {
    UserAgents as UserAgents,
    BaseUserAgents as BaseUserAgents,
    type UserAgentDirectiveResponse as UserAgentDirectiveResponse,
    type UserAgentDirectiveParams as UserAgentDirectiveParams,
  };
}
