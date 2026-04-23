// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Rules extends APIResource {
  /**
   * Updates all snippet rules belonging to the zone.
   */
  update(params: RuleUpdateParams, options?: Core.RequestOptions): Core.APIPromise<RuleUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/snippets/snippet_rules`, { body, ...options }) as Core.APIPromise<{
        result: RuleUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all snippet rules belonging to the zone.
   */
  list(params: RuleListParams, options?: Core.RequestOptions): Core.APIPromise<RuleListResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/snippets/snippet_rules`, options) as Core.APIPromise<{
        result: RuleListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes all snippet rules belonging to the zone.
   */
  delete(params: RuleDeleteParams, options?: Core.RequestOptions): Core.APIPromise<RuleDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}/snippets/snippet_rules`, options) as Core.APIPromise<{
        result: RuleDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Contain the response result.
 */
export type RuleUpdateResponse = unknown;

/**
 * Contain the response result.
 */
export type RuleListResponse = unknown;

/**
 * Contain the response result.
 */
export type RuleDeleteResponse = unknown;

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

export declare namespace Rules {
  export {
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
  };
}
