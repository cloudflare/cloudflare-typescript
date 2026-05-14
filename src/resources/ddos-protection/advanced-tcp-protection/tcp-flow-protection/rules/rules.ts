// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import * as ItemsAPI from './items';
import {
  ItemDeleteParams,
  ItemDeleteResponse,
  ItemEditParams,
  ItemEditResponse,
  ItemGetParams,
  ItemGetResponse,
  Items,
} from './items';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../../pagination';

export class Rules extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Create a TCP Flow Protection rule for an account.
   *
   * @example
   * ```ts
   * const rule =
   *   await client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.create(
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
  create(params: RuleCreateParams, options?: Core.RequestOptions): Core.APIPromise<RuleCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules`,
        { body, ...options },
      ) as Core.APIPromise<{ result: RuleCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all TCP Flow Protection rules for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ruleListResponse of client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RuleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RuleListResponsesV4PagePaginationArray, RuleListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules`,
      RuleListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete all TCP Flow Protection rules for an account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.bulkDelete(
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  bulkDelete(
    params: RuleBulkDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleBulkDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules`,
      options,
    );
  }
}

export class RuleListResponsesV4PagePaginationArray extends V4PagePaginationArray<RuleListResponse> {}

export interface RuleCreateResponse {
  /**
   * The unique ID of the TCP Flow Protection rule.
   */
  id: string;

  /**
   * The burst sensitivity. Must be one of 'low', 'medium', 'high'.
   */
  burst_sensitivity: string;

  /**
   * The creation timestamp of the TCP Flow Protection rule.
   */
  created_on: string;

  /**
   * The mode for TCP Flow Protection. Must be one of 'enabled', 'disabled',
   * 'monitoring'.
   */
  mode: string;

  /**
   * The last modification timestamp of the TCP Flow Protection rule.
   */
  modified_on: string;

  /**
   * The name of the TCP Flow Protection rule. Value is relative to the 'scope'
   * setting. For 'global' scope, name should be 'global'. For either the 'region' or
   * 'datacenter' scope, name should be the actual name of the region or datacenter,
   * e.g., 'wnam' or 'lax'.
   */
  name: string;

  /**
   * The rate sensitivity. Must be one of 'low', 'medium', 'high'.
   */
  rate_sensitivity: string;

  /**
   * The scope for the TCP Flow Protection rule. Must be one of 'global', 'region',
   * or 'datacenter'.
   */
  scope: string;
}

export interface RuleListResponse {
  /**
   * The unique ID of the TCP Flow Protection rule.
   */
  id: string;

  /**
   * The burst sensitivity. Must be one of 'low', 'medium', 'high'.
   */
  burst_sensitivity: string;

  /**
   * The creation timestamp of the TCP Flow Protection rule.
   */
  created_on: string;

  /**
   * The mode for TCP Flow Protection. Must be one of 'enabled', 'disabled',
   * 'monitoring'.
   */
  mode: string;

  /**
   * The last modification timestamp of the TCP Flow Protection rule.
   */
  modified_on: string;

  /**
   * The name of the TCP Flow Protection rule. Value is relative to the 'scope'
   * setting. For 'global' scope, name should be 'global'. For either the 'region' or
   * 'datacenter' scope, name should be the actual name of the region or datacenter,
   * e.g., 'wnam' or 'lax'.
   */
  name: string;

  /**
   * The rate sensitivity. Must be one of 'low', 'medium', 'high'.
   */
  rate_sensitivity: string;

  /**
   * The scope for the TCP Flow Protection rule. Must be one of 'global', 'region',
   * or 'datacenter'.
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
   * Body param: The mode for the TCP Flow Protection. Must be one of 'enabled',
   * 'disabled', 'monitoring'.
   */
  mode: string;

  /**
   * Body param: The name of the TCP Flow Protection rule. Value is relative to the
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
   * Body param: The scope for the TCP Flow Protection rule.
   */
  scope: string;
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

Rules.RuleListResponsesV4PagePaginationArray = RuleListResponsesV4PagePaginationArray;
Rules.Items = Items;

export declare namespace Rules {
  export {
    type RuleCreateResponse as RuleCreateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleBulkDeleteResponse as RuleBulkDeleteResponse,
    RuleListResponsesV4PagePaginationArray as RuleListResponsesV4PagePaginationArray,
    type RuleCreateParams as RuleCreateParams,
    type RuleListParams as RuleListParams,
    type RuleBulkDeleteParams as RuleBulkDeleteParams,
  };

  export {
    Items as Items,
    type ItemDeleteResponse as ItemDeleteResponse,
    type ItemEditResponse as ItemEditResponse,
    type ItemGetResponse as ItemGetResponse,
    type ItemDeleteParams as ItemDeleteParams,
    type ItemEditParams as ItemEditParams,
    type ItemGetParams as ItemGetParams,
  };
}
