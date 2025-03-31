// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Rules extends APIResource {
  /**
   * Put Rules
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
   * Rules
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
   * Delete All Rules
   */
  delete(params: RuleDeleteParams, options?: RequestOptions): APIPromise<RuleDeleteResponse> {
    const { zone_id } = params;
    return this._client.delete(path`/zones/${zone_id}/snippets/snippet_rules`, options);
  }
}

export type RuleUpdateResponsesSinglePage = SinglePage<RuleUpdateResponse>;

export type RuleListResponsesSinglePage = SinglePage<RuleListResponse>;

export interface RuleUpdateResponse {
  description?: string;

  enabled?: boolean;

  expression?: string;

  /**
   * Snippet identifying name
   */
  snippet_name?: string;
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

export declare namespace Rules {
  export {
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleUpdateResponsesSinglePage as RuleUpdateResponsesSinglePage,
    type RuleListResponsesSinglePage as RuleListResponsesSinglePage,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
  };
}
