// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as ItemsAPI from './items';
import {
  BaseItems,
  ItemDeleteParams,
  ItemDeleteResponse,
  ItemEditParams,
  ItemEditResponse,
  ItemGetParams,
  ItemGetResponse,
  Items,
} from './items';
import { APIPromise } from '../../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseRules extends APIResource {
  static override readonly _key: readonly [
    'DDoSProtection',
    'advancedTCPProtection',
    'synProtection',
    'rules',
  ] = Object.freeze(['DDoSProtection', 'advancedTCPProtection', 'synProtection', 'rules'] as const);

  /**
   * Create a SYN Protection rule for an account.
   *
   * @example
   * ```ts
   * const rule =
   *   await client.DDoSProtection.advancedTCPProtection.synProtection.rules.create(
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       burst_sensitivity: 'burst_sensitivity',
   *       mode: 'mode',
   *       name: 'name',
   *       rate_sensitivity: 'rate_sensitivity',
   *       scope: 'scope',
   *     },
   *   );
   * ```
   */
  create(params: RuleCreateParams, options?: RequestOptions): APIPromise<RuleCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules`,
        { body, ...options },
      ) as APIPromise<{ result: RuleCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all SYN Protection rules for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ruleListResponse of client.DDoSProtection.advancedTCPProtection.synProtection.rules.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RuleListParams,
    options?: RequestOptions,
  ): PagePromise<RuleListResponsesV4PagePaginationArray, RuleListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules`,
      V4PagePaginationArray<RuleListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete all SYN Protection rules for an account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.DDoSProtection.advancedTCPProtection.synProtection.rules.bulkDelete(
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  bulkDelete(params: RuleBulkDeleteParams, options?: RequestOptions): APIPromise<RuleBulkDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules`,
      options,
    );
  }
}
export class Rules extends BaseRules {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
}

export type RuleListResponsesV4PagePaginationArray = V4PagePaginationArray<RuleListResponse>;

export interface RuleCreateResponse {
  /**
   * The unique ID of the SYN Protection rule.
   */
  id: string;

  /**
   * The burst sensitivity. Must be one of 'low', 'medium', 'high'.
   */
  burst_sensitivity: string;

  /**
   * The creation timestamp of the SYN Protection rule.
   */
  created_on: string;

  /**
   * The type of mitigation for SYN Protection. Must be one of 'challenge' or
   * 'retransmit'.
   */
  mitigation_type: string;

  /**
   * The mode for SYN Protection. Must be one of 'enabled', 'disabled', 'monitoring'.
   */
  mode: string;

  /**
   * The last modification timestamp of the SYN Protection rule.
   */
  modified_on: string;

  /**
   * The name of the SYN Protection rule. Value is relative to the 'scope' setting.
   * For 'global' scope, name should be 'global'. For either the 'region' or
   * 'datacenter' scope, name should be the actual name of the region or datacenter,
   * e.g., 'wnam' or 'lax'.
   */
  name: string;

  /**
   * The rate sensitivity. Must be one of 'low', 'medium', 'high'.
   */
  rate_sensitivity: string;

  /**
   * The scope for the SYN Protection rule. Must be one of 'global', 'region', or
   * 'datacenter'.
   */
  scope: string;
}

export interface RuleListResponse {
  /**
   * The unique ID of the SYN Protection rule.
   */
  id: string;

  /**
   * The burst sensitivity. Must be one of 'low', 'medium', 'high'.
   */
  burst_sensitivity: string;

  /**
   * The creation timestamp of the SYN Protection rule.
   */
  created_on: string;

  /**
   * The type of mitigation for SYN Protection. Must be one of 'challenge' or
   * 'retransmit'.
   */
  mitigation_type: string;

  /**
   * The mode for SYN Protection. Must be one of 'enabled', 'disabled', 'monitoring'.
   */
  mode: string;

  /**
   * The last modification timestamp of the SYN Protection rule.
   */
  modified_on: string;

  /**
   * The name of the SYN Protection rule. Value is relative to the 'scope' setting.
   * For 'global' scope, name should be 'global'. For either the 'region' or
   * 'datacenter' scope, name should be the actual name of the region or datacenter,
   * e.g., 'wnam' or 'lax'.
   */
  name: string;

  /**
   * The rate sensitivity. Must be one of 'low', 'medium', 'high'.
   */
  rate_sensitivity: string;

  /**
   * The scope for the SYN Protection rule. Must be one of 'global', 'region', or
   * 'datacenter'.
   */
  scope: string;
}

export interface RuleBulkDeleteResponse {
  errors: Array<RuleBulkDeleteResponse.Error>;

  messages: Array<RuleBulkDeleteResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace RuleBulkDeleteResponse {
  export interface Error {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }
}

export interface RuleCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The burst sensitivity. Must be one of 'low', 'medium', 'high'.
   */
  burst_sensitivity: string;

  /**
   * Body param: The mode for SYN Protection. Must be one of 'enabled', 'disabled',
   * 'monitoring'.
   */
  mode: string;

  /**
   * Body param: The name of the SYN Protection rule. Value is relative to the
   * 'scope' setting. For 'global' scope, name should be 'global'. For either the
   * 'region' or 'datacenter' scope, name should be the actual name of the region or
   * datacenter, e.g., 'wnam' or 'lax'.
   */
  name: string;

  /**
   * Body param: The rate sensitivity. Must be one of 'low', 'medium', 'high'.
   */
  rate_sensitivity: string;

  /**
   * Body param: The scope for the SYN Protection rule. Must be one of 'global',
   * 'region', or 'datacenter'.
   */
  scope: string;

  /**
   * Body param: The type of mitigation. Must be one of 'challenge' or 'retransmit'.
   * Optional. Defaults to 'challenge'.
   */
  mitigation_type?: string;
}

export interface RuleListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: The direction of ordering (ASC or DESC). Defaults to 'ASC'.
   */
  direction?: string;

  /**
   * Query param: The field to order by. Defaults to 'prefix'.
   */
  order?: string;
}

export interface RuleBulkDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

Rules.Items = Items;
Rules.BaseItems = BaseItems;

export declare namespace Rules {
  export {
    type RuleCreateResponse as RuleCreateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleBulkDeleteResponse as RuleBulkDeleteResponse,
    type RuleListResponsesV4PagePaginationArray as RuleListResponsesV4PagePaginationArray,
    type RuleCreateParams as RuleCreateParams,
    type RuleListParams as RuleListParams,
    type RuleBulkDeleteParams as RuleBulkDeleteParams,
  };

  export {
    Items as Items,
    BaseItems as BaseItems,
    type ItemDeleteResponse as ItemDeleteResponse,
    type ItemEditResponse as ItemEditResponse,
    type ItemGetResponse as ItemGetResponse,
    type ItemDeleteParams as ItemDeleteParams,
    type ItemEditParams as ItemEditParams,
    type ItemGetParams as ItemGetParams,
  };
}
