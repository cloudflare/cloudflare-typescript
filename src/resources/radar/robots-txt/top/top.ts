// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as UserAgentsAPI from './user-agents';
import { UserAgentDirectiveParams, UserAgentDirectiveResponse, UserAgents } from './user-agents';

export class Top extends APIResource {
  userAgents: UserAgentsAPI.UserAgents = new UserAgentsAPI.UserAgents(this._client);

  /**
   * Retrieves the top domain categories by the number of robots.txt files parsed.
   */
  domainCategories(
    query?: TopDomainCategoriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopDomainCategoriesResponse>;
  domainCategories(options?: Core.RequestOptions): Core.APIPromise<TopDomainCategoriesResponse>;
  domainCategories(
    query: TopDomainCategoriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopDomainCategoriesResponse> {
    if (isRequestOptions(query)) {
      return this.domainCategories({}, query);
    }
    return (
      this._client.get('/radar/robots_txt/top/domain_categories', { query, ...options }) as Core.APIPromise<{
        result: TopDomainCategoriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TopDomainCategoriesResponse {
  meta: TopDomainCategoriesResponse.Meta;

  top_0: Array<TopDomainCategoriesResponse.Top0>;
}

export namespace TopDomainCategoriesResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    normalization: string;

    confidenceInfo?: Meta.ConfidenceInfo;

    units?: Array<Meta.Unit>;
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
   * Array of dates to filter the results.
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

export declare namespace Top {
  export {
    type TopDomainCategoriesResponse as TopDomainCategoriesResponse,
    type TopDomainCategoriesParams as TopDomainCategoriesParams,
  };

  export {
    UserAgents as UserAgents,
    type UserAgentDirectiveResponse as UserAgentDirectiveResponse,
    type UserAgentDirectiveParams as UserAgentDirectiveParams,
  };
}
