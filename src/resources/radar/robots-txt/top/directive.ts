// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as DirectiveAPI from './directive';

export class Directive extends APIResource {
  /**
   * Get the top User-Agents on robots.txt files by directive.
   */
  get(
    directive: 'ALLOW' | 'DISALLOW',
    query?: DirectiveGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DirectiveGetResponse>;
  get(directive: 'ALLOW' | 'DISALLOW', options?: Core.RequestOptions): Core.APIPromise<DirectiveGetResponse>;
  get(
    directive: 'ALLOW' | 'DISALLOW',
    query: DirectiveGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DirectiveGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(directive, {}, query);
    }
    return (
      this._client.get(`/radar/robots_txt/top/${directive}`, { query, ...options }) as Core.APIPromise<{
        result: DirectiveGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DirectiveGetResponse {
  meta: DirectiveGetResponse.Meta;

  top_0: Array<DirectiveGetResponse.Top0>;
}

export namespace DirectiveGetResponse {
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
    fully: number;

    partially: number;

    total: number;

    userAgent: string;
  }
}

export interface DirectiveGetParams {
  /**
   * Filter by user agent category.
   */
  agentCategory?: 'AI';

  /**
   * Date to filter the ranking.
   */
  date?: string;

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
}

export namespace Directive {
  export import DirectiveGetResponse = DirectiveAPI.DirectiveGetResponse;
  export import DirectiveGetParams = DirectiveAPI.DirectiveGetParams;
}
