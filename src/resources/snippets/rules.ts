// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class Rules extends APIResource {
  /**
   * Updates all snippet rules belonging to the zone.
   */
  update(
    params: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RuleUpdateResponsesSinglePage, RuleUpdateResponse> {
    const { zone_id, ...body } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/snippets/snippet_rules`,
      RuleUpdateResponsesSinglePage,
      { body, method: 'put', ...options },
    );
  }

  /**
   * Fetches all snippet rules belonging to the zone.
   */
  list(
    params: RuleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RuleListResponsesSinglePage, RuleListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/snippets/snippet_rules`,
      RuleListResponsesSinglePage,
      options,
    );
  }

  /**
   * Deletes all snippet rules belonging to the zone.
   */
  delete(
    params: RuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RuleDeleteResponsesSinglePage, RuleDeleteResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/snippets/snippet_rules`,
      RuleDeleteResponsesSinglePage,
      { method: 'delete', ...options },
    );
  }
}

export class RuleUpdateResponsesSinglePage extends SinglePage<RuleUpdateResponse> {}

export class RuleListResponsesSinglePage extends SinglePage<RuleListResponse> {}

export class RuleDeleteResponsesSinglePage extends SinglePage<RuleDeleteResponse> {}

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
  rules: Array<RuleUpdateParams.Rule>;
}

export namespace RuleUpdateParams {
  /**
   * A snippet rule.
   */
  export interface Rule {
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

Rules.RuleUpdateResponsesSinglePage = RuleUpdateResponsesSinglePage;
Rules.RuleListResponsesSinglePage = RuleListResponsesSinglePage;
Rules.RuleDeleteResponsesSinglePage = RuleDeleteResponsesSinglePage;

export declare namespace Rules {
  export {
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    RuleUpdateResponsesSinglePage as RuleUpdateResponsesSinglePage,
    RuleListResponsesSinglePage as RuleListResponsesSinglePage,
    RuleDeleteResponsesSinglePage as RuleDeleteResponsesSinglePage,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
  };
}
