// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Rules extends APIResource {
  /**
   * Updates all snippet rules belonging to the zone.
   */
  update(
    params: RuleUpdateParams,
    options?: RequestOptions,
  ): PagePromise<RuleUpdateResponsesSinglePage, RuleUpdateResponse> {
    const { zone_id, body } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/snippets/snippet_rules`,
      SinglePage<RuleUpdateResponse>,
      { body: body, method: 'put', ...options },
    );
  }

  /**
   * Fetches all snippet rules belonging to the zone.
   */
  list(
    params: RuleListParams,
    options?: RequestOptions,
  ): PagePromise<RuleListResponsesSinglePage, RuleListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/snippets/snippet_rules`,
      SinglePage<RuleListResponse>,
      options,
    );
  }

  /**
   * Deletes all snippet rules belonging to the zone.
   */
  delete(
    params: RuleDeleteParams,
    options?: RequestOptions,
  ): PagePromise<RuleDeleteResponsesSinglePage, RuleDeleteResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/snippets/snippet_rules`,
      SinglePage<RuleDeleteResponse>,
      { method: 'delete', ...options },
    );
  }
}

export type RuleUpdateResponsesSinglePage = SinglePage<RuleUpdateResponse>;

export type RuleListResponsesSinglePage = SinglePage<RuleListResponse>;

export type RuleDeleteResponsesSinglePage = SinglePage<RuleDeleteResponse>;

/**
 * A snippet rule.
 */
export interface RuleUpdateResponse {
  /**
   * The unique ID of the rule.
   */
  id: string;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression: string;

  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The identifying name of the snippet.
   */
  snippet_name: string;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;
}

/**
 * A snippet rule.
 */
export interface RuleListResponse {
  /**
   * The unique ID of the rule.
   */
  id: string;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression: string;

  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The identifying name of the snippet.
   */
  snippet_name: string;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;
}

/**
 * A snippet rule.
 */
export interface RuleDeleteResponse {
  /**
   * The unique ID of the rule.
   */
  id: string;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression: string;

  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The identifying name of the snippet.
   */
  snippet_name: string;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;
}

export interface RuleUpdateParams {
  /**
   * Path param: The unique ID of the zone.
   */
  zone_id: string;

  /**
   * Body param: A list of snippet rules.
   */
  body: Array<RuleUpdateParams.Body>;
}

export namespace RuleUpdateParams {
  /**
   * A snippet rule.
   */
  export interface Body {
    /**
     * The expression defining which traffic will match the rule.
     */
    expression: string;

    /**
     * The identifying name of the snippet.
     */
    snippet_name: string;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;
  }
}

export interface RuleListParams {
  /**
   * The unique ID of the zone.
   */
  zone_id: string;
}

export interface RuleDeleteParams {
  /**
   * The unique ID of the zone.
   */
  zone_id: string;
}

export declare namespace Rules {
  export {
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleUpdateResponsesSinglePage as RuleUpdateResponsesSinglePage,
    type RuleListResponsesSinglePage as RuleListResponsesSinglePage,
    type RuleDeleteResponsesSinglePage as RuleDeleteResponsesSinglePage,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
  };
}
