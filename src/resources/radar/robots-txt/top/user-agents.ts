// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';

export class UserAgents extends APIResource {
  /**
   * Get the top user agents on robots.txt files by directive.
   */
  directive(
    query?: UserAgentDirectiveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserAgentDirectiveResponse>;
  directive(options?: Core.RequestOptions): Core.APIPromise<UserAgentDirectiveResponse>;
  directive(
    query: UserAgentDirectiveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserAgentDirectiveResponse> {
    if (isRequestOptions(query)) {
      return this.directive({}, query);
    }
    return (
      this._client.get('/radar/robots_txt/top/user_agents/directive', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: UserAgentDirectiveResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface UserAgentDirectiveResponse {
  meta: UserAgentDirectiveResponse.Meta;

  top_0: Array<UserAgentDirectiveResponse.Top0>;
}

export namespace UserAgentDirectiveResponse {
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

    fully?: number;

    partially?: number;
  }
}

export interface UserAgentDirectiveParams {
  /**
   * Array of dates to filter the ranking.
   */
  date?: Array<string>;

  /**
   * Filter by directive.
   */
  directive?: 'ALLOW' | 'DISALLOW';

  /**
   * Filter by domain category.
   */
  domainCategory?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter by user agent category.
   */
  userAgentCategory?: 'AI';
}

export declare namespace UserAgents {
  export {
    type UserAgentDirectiveResponse as UserAgentDirectiveResponse,
    type UserAgentDirectiveParams as UserAgentDirectiveParams,
  };
}
