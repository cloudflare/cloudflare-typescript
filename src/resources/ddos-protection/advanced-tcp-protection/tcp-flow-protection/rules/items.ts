// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseItems extends APIResource {
  static override readonly _key: readonly [
    'DDoSProtection',
    'advancedTCPProtection',
    'tcpFlowProtection',
    'rules',
    'items',
  ] = Object.freeze([
    'DDoSProtection',
    'advancedTCPProtection',
    'tcpFlowProtection',
    'rules',
    'items',
  ] as const);

  /**
   * Delete a TCP Flow Protection rule specified by the given UUID.
   *
   * @example
   * ```ts
   * const item =
   *   await client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.items.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(ruleID: string, params: ItemDeleteParams, options?: RequestOptions): APIPromise<ItemDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/${ruleID}`,
      options,
    );
  }

  /**
   * Update a TCP Flow Protection rule specified by the given UUID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.items.edit(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  edit(ruleID: string, params: ItemEditParams, options?: RequestOptions): APIPromise<ItemEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        path`/accounts/${account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/${ruleID}`,
        { body, ...options },
      ) as APIPromise<{ result: ItemEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a TCP Flow Protection rule specified by the given UUID.
   *
   * @example
   * ```ts
   * const item =
   *   await client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.items.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(ruleID: string, params: ItemGetParams, options?: RequestOptions): APIPromise<ItemGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/${ruleID}`,
        options,
      ) as APIPromise<{ result: ItemGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Items extends BaseItems {}

export interface ItemDeleteResponse {
  errors: Array<ItemDeleteResponse.Error>;

  messages: Array<ItemDeleteResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace ItemDeleteResponse {
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

export interface ItemEditResponse {
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

export interface ItemGetResponse {
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

export interface ItemDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface ItemEditParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The new burst sensitivity. Optional. Must be one of 'low', 'medium',
   * 'high'.
   */
  burst_sensitivity?: string;

  /**
   * Body param: The new mode for TCP Flow Protection. Optional. Must be one of
   * 'enabled', 'disabled', 'monitoring'.
   */
  mode?: string;

  /**
   * Body param: The new rate sensitivity. Optional. Must be one of 'low', 'medium',
   * 'high'.
   */
  rate_sensitivity?: string;
}

export interface ItemGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace Items {
  export {
    type ItemDeleteResponse as ItemDeleteResponse,
    type ItemEditResponse as ItemEditResponse,
    type ItemGetResponse as ItemGetResponse,
    type ItemDeleteParams as ItemDeleteParams,
    type ItemEditParams as ItemEditParams,
    type ItemGetParams as ItemGetParams,
  };
}
