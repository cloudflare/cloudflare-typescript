// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as RulesAPI from './rules';
import * as Shared from '../shared';
import { SinglePage } from '../../pagination';

export class Rules extends APIResource {
  /**
   * Put Rules
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
   * Rules
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
   * Delete All Rules
   */
  delete(params: RuleDeleteParams, options?: Core.RequestOptions): Core.APIPromise<RuleDeleteResponse> {
    const { zone_id } = params;
    return this._client.delete(`/zones/${zone_id}/snippets/snippet_rules`, options);
  }
}

export class RuleListResponsesSinglePage extends SinglePage<RuleListResponse> {}

/**
 * List of snippet rules
 */
export type RuleUpdateResponse = Array<RuleUpdateResponse.RuleUpdateResponseItem>;

export namespace RuleUpdateResponse {
  export interface RuleUpdateResponseItem {
    description?: string;

    enabled?: boolean;

    expression?: string;

    /**
     * Snippet identifying name
     */
    snippet_name?: string;
  }
}

export interface RuleListResponse {
  description?: string;

  enabled?: boolean;

  expression?: string;

  /**
   * Snippet identifying name
   */
  snippet_name?: string;
}

export interface RuleDeleteResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export interface RuleUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: List of snippet rules
   */
  rules?: Array<RuleUpdateParams.Rule>;
}

export namespace RuleUpdateParams {
  export interface Rule {
    description?: string;

    enabled?: boolean;

    expression?: string;

    /**
     * Snippet identifying name
     */
    snippet_name?: string;
  }
}

export interface RuleListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface RuleDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Rules {
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleListResponsesSinglePage = RulesAPI.RuleListResponsesSinglePage;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
}
