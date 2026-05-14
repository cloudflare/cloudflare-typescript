// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseStatus extends APIResource {
  static override readonly _key: readonly ['DDoSProtection', 'advancedTCPProtection', 'status'] =
    Object.freeze(['DDoSProtection', 'advancedTCPProtection', 'status'] as const);

  /**
   * Update the protection status of the account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.DDoSProtection.advancedTCPProtection.status.edit(
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       enabled: true,
   *     },
   *   );
   * ```
   */
  edit(params: StatusEditParams, options?: RequestOptions): APIPromise<StatusEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        path`/accounts/${account_id}/magic/advanced_tcp_protection/configs/tcp_protection_status`,
        { body, ...options },
      ) as APIPromise<{ result: StatusEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the protection status of the account.
   *
   * @example
   * ```ts
   * const status =
   *   await client.DDoSProtection.advancedTCPProtection.status.get(
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(params: StatusGetParams, options?: RequestOptions): APIPromise<StatusGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/magic/advanced_tcp_protection/configs/tcp_protection_status`,
        options,
      ) as APIPromise<{ result: StatusGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Status extends BaseStatus {}

export interface StatusEditResponse {
  enabled: boolean;
}

export interface StatusGetResponse {
  enabled: boolean;
}

export interface StatusEditParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Enables or disables protection.
   */
  enabled: boolean;
}

export interface StatusGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace Status {
  export {
    type StatusEditResponse as StatusEditResponse,
    type StatusGetResponse as StatusGetResponse,
    type StatusEditParams as StatusEditParams,
    type StatusGetParams as StatusGetParams,
  };
}
