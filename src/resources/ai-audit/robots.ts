// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseRobots extends APIResource {
  static override readonly _key: readonly ['aiAudit', 'robots'] = Object.freeze([
    'aiAudit',
    'robots',
  ] as const);

  /**
   * Fetches and parses robots.txt files for multiple domains within a zone in a
   * single request. Each domain must belong to the specified zone. Results are keyed
   * by hostname.
   *
   * @example
   * ```ts
   * const response = await client.aiAudit.robots.bulkGet({
   *   zone_id: 'zone_id',
   *   body: ['example.com', 'blog.example.com'],
   * });
   * ```
   */
  bulkGet(params: RobotBulkGetParams, options?: RequestOptions): APIPromise<RobotBulkGetResponse> {
    const { zone_id, body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/ai-audit/robots/bulk`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: RobotBulkGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches and parses the robots.txt file for a zone or a specific subdomain within
   * the zone. Returns parsed user-agent rules, content signals, and sitemaps.
   *
   * @example
   * ```ts
   * const robot = await client.aiAudit.robots.get({
   *   zone_id: 'zone_id',
   * });
   * ```
   */
  get(params: RobotGetParams, options?: RequestOptions): APIPromise<RobotGetResponse> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(path`/zones/${zone_id}/ai-audit/robots`, { query, ...options }) as APIPromise<{
        result: RobotGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Robots extends BaseRobots {}

/**
 * Map of hostname to parsed robots.txt rules.
 */
export type RobotBulkGetResponse = { [key: string]: RobotBulkGetResponse.item };

export namespace RobotBulkGetResponse {
  /**
   * Parsed robots.txt rules for a single domain.
   */
  export interface item {
    /**
     * Map of user-agent string to its parsed rules.
     */
    userAgents: { [key: string]: item.UserAgents };

    /**
     * List of sitemap URLs found in robots.txt.
     */
    sitemaps?: Array<string>;

    /**
     * HTTP status code from fetching the robots.txt file.
     */
    status?: number;
  }

  export namespace item {
    /**
     * Parsed rules for a specific user-agent.
     */
    export interface UserAgents {
      /**
       * List of allowed path patterns.
       */
      allow: Array<string>;

      /**
       * List of disallowed path patterns.
       */
      disallow: Array<string>;

      /**
       * Content signal directives from robots.txt.
       */
      contentSignals?: UserAgents.ContentSignals;

      /**
       * Crawl delay in seconds.
       */
      crawlDelay?: number;
    }

    export namespace UserAgents {
      /**
       * Content signal directives from robots.txt.
       */
      export interface ContentSignals {
        /**
         * Whether AI input usage is permitted.
         */
        'ai-input'?: 'yes' | 'no';

        /**
         * Whether AI training is permitted.
         */
        'ai-train'?: 'yes' | 'no';

        /**
         * Whether search indexing is permitted.
         */
        search?: 'yes' | 'no';
      }
    }
  }
}

/**
 * Parsed robots.txt rules for a single domain.
 */
export interface RobotGetResponse {
  /**
   * Map of user-agent string to its parsed rules.
   */
  userAgents: { [key: string]: RobotGetResponse.UserAgents };

  /**
   * List of sitemap URLs found in robots.txt.
   */
  sitemaps?: Array<string>;

  /**
   * HTTP status code from fetching the robots.txt file.
   */
  status?: number;
}

export namespace RobotGetResponse {
  /**
   * Parsed rules for a specific user-agent.
   */
  export interface UserAgents {
    /**
     * List of allowed path patterns.
     */
    allow: Array<string>;

    /**
     * List of disallowed path patterns.
     */
    disallow: Array<string>;

    /**
     * Content signal directives from robots.txt.
     */
    contentSignals?: UserAgents.ContentSignals;

    /**
     * Crawl delay in seconds.
     */
    crawlDelay?: number;
  }

  export namespace UserAgents {
    /**
     * Content signal directives from robots.txt.
     */
    export interface ContentSignals {
      /**
       * Whether AI input usage is permitted.
       */
      'ai-input'?: 'yes' | 'no';

      /**
       * Whether AI training is permitted.
       */
      'ai-train'?: 'yes' | 'no';

      /**
       * Whether search indexing is permitted.
       */
      search?: 'yes' | 'no';
    }
  }
}

export interface RobotBulkGetParams {
  /**
   * Path param: Identifier of the zone.
   */
  zone_id: string;

  /**
   * Body param: Array of domain hostnames to fetch robots.txt for. Each domain must
   * end with the zone name. Maximum 25 domains per request.
   */
  body: Array<string>;
}

export interface RobotGetParams {
  /**
   * Path param: Identifier of the zone.
   */
  zone_id: string;

  /**
   * Query param: Optional subdomain to fetch robots.txt for. If omitted, fetches
   * robots.txt for the zone apex domain.
   */
  subdomain?: string;
}

export declare namespace Robots {
  export {
    type RobotBulkGetResponse as RobotBulkGetResponse,
    type RobotGetResponse as RobotGetResponse,
    type RobotBulkGetParams as RobotBulkGetParams,
    type RobotGetParams as RobotGetParams,
  };
}
