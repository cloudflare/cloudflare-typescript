// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseItems extends APIResource {
  static override readonly _key: readonly ['DDoSProtection', 'advancedTCPProtection', 'allowlist', 'items'] =
    Object.freeze(['DDoSProtection', 'advancedTCPProtection', 'allowlist', 'items'] as const);

  /**
   * Delete the allowlist prefix for an account given a UUID.
   *
   * @example
   * ```ts
   * const item =
   *   await client.DDoSProtection.advancedTCPProtection.allowlist.items.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    prefixID: string,
    params: ItemDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ItemDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/magic/advanced_tcp_protection/configs/allowlist/${prefixID}`,
      options,
    );
  }

  /**
   * Update an allowlist prefix specified by the given UUID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.DDoSProtection.advancedTCPProtection.allowlist.items.edit(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  edit(prefixID: string, params: ItemEditParams, options?: RequestOptions): APIPromise<ItemEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        path`/accounts/${account_id}/magic/advanced_tcp_protection/configs/allowlist/${prefixID}`,
        { body, ...options },
      ) as APIPromise<{ result: ItemEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get an allowlist prefix specified by the given UUID.
   *
   * @example
   * ```ts
   * const item =
   *   await client.DDoSProtection.advancedTCPProtection.allowlist.items.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(prefixID: string, params: ItemGetParams, options?: RequestOptions): APIPromise<ItemGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/magic/advanced_tcp_protection/configs/allowlist/${prefixID}`,
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
   * The unique ID of the allowlist prefix.
   */
  id: string;

  /**
   * An optional comment describing the allowlist prefix.
   */
  comment: string;

  /**
   * The creation timestamp of the allowlist prefix.
   */
  created_on: string;

  /**
   * Whether to enable the allowlist prefix into effect. Defaults to false.
   */
  enabled: boolean;

  /**
   * The last modification timestamp of the allowlist prefix.
   */
  modified_on: string;

  /**
   * The allowlist prefix in CIDR format.
   */
  prefix: string;
}

export interface ItemGetResponse {
  /**
   * The unique ID of the allowlist prefix.
   */
  id: string;

  /**
   * An optional comment describing the allowlist prefix.
   */
  comment: string;

  /**
   * The creation timestamp of the allowlist prefix.
   */
  created_on: string;

  /**
   * Whether to enable the allowlist prefix into effect. Defaults to false.
   */
  enabled: boolean;

  /**
   * The last modification timestamp of the allowlist prefix.
   */
  modified_on: string;

  /**
   * The allowlist prefix in CIDR format.
   */
  prefix: string;
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
   * Body param: A comment describing the allowlist prefix. Optional.
   */
  comment?: string;

  /**
   * Body param: Whether to enable the allowlist prefix into effect. Optional.
   */
  enabled?: boolean;
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
