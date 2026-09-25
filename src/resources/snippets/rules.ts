// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseRules extends APIResource {
  static override readonly _key: readonly ['snippets', 'rules'] = Object.freeze([
    'snippets',
    'rules',
  ] as const);

  /**
   * Updates all snippet rules belonging to the zone.
   */
  update(
    params: RuleUpdateParams,
    options?: RequestOptions,
  ): PagePromise<RuleUpdateResponsesSinglePage, RuleUpdateResponse> {
    const { zone_id, ...body } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/snippets/snippet_rules`,
      SinglePage<RuleUpdateResponse>,
      { body, method: 'put', ...options },
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

  /**
   * Fetches all snippet rules belonging to the zone.
   */
  get(
    params: RuleGetParams,
    options?: RequestOptions,
  ): PagePromise<RuleGetResponsesSinglePage, RuleGetResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/snippets/snippet_rules`,
      SinglePage<RuleGetResponse>,
      options,
    );
  }
}
export class Rules extends BaseRules {}

export type RuleUpdateResponsesSinglePage = SinglePage<RuleUpdateResponse>;

export type RuleListResponsesSinglePage = SinglePage<RuleListResponse>;

export type RuleDeleteResponsesSinglePage = SinglePage<RuleDeleteResponse>;

export type RuleGetResponsesSinglePage = SinglePage<RuleGetResponse>;

/**
 * Define a snippet rule.
 */
export interface RuleUpdateResponse {
  /**
   * Specify the unique ID of the rule.
   */
  id: string;

  /**
   * Define the expression that determines which traffic matches the rule.
   */
  expression: string;

  /**
   * Specify the timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * Identify the snippet.
   */
  snippet_name: string;

  /**
   * Provide an informative description of the rule.
   */
  description?: string;

  /**
   * Indicate whether to execute the rule.
   */
  enabled?: boolean;
}

/**
 * Define a snippet rule.
 */
export interface RuleListResponse {
  /**
   * Specify the unique ID of the rule.
   */
  id: string;

  /**
   * Define the expression that determines which traffic matches the rule.
   */
  expression: string;

  /**
   * Specify the timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * Identify the snippet.
   */
  snippet_name: string;

  /**
   * Provide an informative description of the rule.
   */
  description?: string;

  /**
   * Indicate whether to execute the rule.
   */
  enabled?: boolean;
}

/**
 * Define a snippet rule.
 */
export interface RuleDeleteResponse {
  /**
   * Specify the unique ID of the rule.
   */
  id: string;

  /**
   * Define the expression that determines which traffic matches the rule.
   */
  expression: string;

  /**
   * Specify the timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * Identify the snippet.
   */
  snippet_name: string;

  /**
   * Provide an informative description of the rule.
   */
  description?: string;

  /**
   * Indicate whether to execute the rule.
   */
  enabled?: boolean;
}

/**
 * Define a snippet rule.
 */
export interface RuleGetResponse {
  /**
   * Specify the unique ID of the rule.
   */
  id: string;

  /**
   * Define the expression that determines which traffic matches the rule.
   */
  expression: string;

  /**
   * Specify the timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * Identify the snippet.
   */
  snippet_name: string;

  /**
   * Provide an informative description of the rule.
   */
  description?: string;

  /**
   * Indicate whether to execute the rule.
   */
  enabled?: boolean;
}

export interface RuleUpdateParams {
  /**
   * Path param: Use this field to specify the unique ID of the zone.
   */
  zone_id: string;

  /**
   * Body param: Lists snippet rules.
   */
  rules: Array<RuleUpdateParams.Rule>;
}

export namespace RuleUpdateParams {
  /**
   * Define a snippet rule.
   */
  export interface Rule {
    /**
     * Define the expression that determines which traffic matches the rule.
     */
    expression: string;

    /**
     * Identify the snippet.
     */
    snippet_name: string;

    /**
     * Provide an informative description of the rule.
     */
    description?: string;

    /**
     * Indicate whether to execute the rule.
     */
    enabled?: boolean;
  }
}

export interface RuleListParams {
  /**
   * Use this field to specify the unique ID of the zone.
   */
  zone_id: string;
}

export interface RuleDeleteParams {
  /**
   * Use this field to specify the unique ID of the zone.
   */
  zone_id: string;
}

export interface RuleGetParams {
  /**
   * Use this field to specify the unique ID of the zone.
   */
  zone_id: string;
}

export declare namespace Rules {
  export {
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleGetResponse as RuleGetResponse,
    type RuleUpdateResponsesSinglePage as RuleUpdateResponsesSinglePage,
    type RuleListResponsesSinglePage as RuleListResponsesSinglePage,
    type RuleDeleteResponsesSinglePage as RuleDeleteResponsesSinglePage,
    type RuleGetResponsesSinglePage as RuleGetResponsesSinglePage,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleGetParams as RuleGetParams,
  };
}
