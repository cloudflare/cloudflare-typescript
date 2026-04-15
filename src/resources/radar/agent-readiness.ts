// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class AgentReadiness extends APIResource {
  /**
   * Returns a summary of AI agent readiness scores across scanned domains, grouped
   * by the specified dimension. Data is sourced from weekly bulk scans. All values
   * are raw domain counts.
   *
   * @example
   * ```ts
   * const response = await client.radar.agentReadiness.summary(
   *   'CHECK',
   * );
   * ```
   */
  summary(
    dimension: 'CHECK',
    query?: AgentReadinessSummaryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentReadinessSummaryResponse>;
  summary(dimension: 'CHECK', options?: Core.RequestOptions): Core.APIPromise<AgentReadinessSummaryResponse>;
  summary(
    dimension: 'CHECK',
    query: AgentReadinessSummaryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentReadinessSummaryResponse> {
    if (isRequestOptions(query)) {
      return this.summary(dimension, {}, query);
    }
    return (
      this._client.get(`/radar/agent_readiness/summary/${dimension}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: AgentReadinessSummaryResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AgentReadinessSummaryResponse {
  meta: AgentReadinessSummaryResponse.Meta;

  summary_0: { [key: string]: string };
}

export namespace AgentReadinessSummaryResponse {
  export interface Meta {
    /**
     * Date of the returned scan (YYYY-MM-DD). May differ from the requested date if no
     * scan exists for that exact date.
     */
    date: string;

    /**
     * Available domain sub-categories with their scan counts. Use as filter options
     * for the domainCategory parameter.
     */
    domainCategories: Array<Meta.DomainCategory>;

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
     * Domains successfully scanned (excludes errors).
     */
    successfulDomains: number;

    /**
     * Total domains attempted in the scan.
     */
    totalDomains: number;

    /**
     * Measurement units for the results.
     */
    units: Array<Meta.Unit>;
  }

  export namespace Meta {
    export interface DomainCategory {
      /**
       * Sub-category name.
       */
      name: string;

      /**
       * Number of successfully scanned domains in this sub-category.
       */
      value: number;
    }

    export interface Unit {
      name: string;

      value: string;
    }
  }
}

export interface AgentReadinessSummaryParams {
  /**
   * Filters results by the specified date.
   */
  date?: string;

  /**
   * Filters results by domain category.
   */
  domainCategory?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export declare namespace AgentReadiness {
  export {
    type AgentReadinessSummaryResponse as AgentReadinessSummaryResponse,
    type AgentReadinessSummaryParams as AgentReadinessSummaryParams,
  };
}
