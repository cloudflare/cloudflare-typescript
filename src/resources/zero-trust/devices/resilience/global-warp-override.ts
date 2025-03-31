// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class GlobalWARPOverride extends APIResource {
  /**
   * Sets the Global WARP override state.
   */
  create(
    params: GlobalWARPOverrideCreateParams,
    options?: RequestOptions,
  ): APIPromise<GlobalWARPOverrideCreateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/devices/resilience/disconnect`, {
        body,
        ...options,
      }) as APIPromise<{ result: GlobalWARPOverrideCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch the Global WARP override state
   */
  get(
    params: GlobalWARPOverrideGetParams,
    options?: RequestOptions,
  ): APIPromise<GlobalWARPOverrideGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/devices/resilience/disconnect`, options) as APIPromise<{
        result: GlobalWARPOverrideGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface GlobalWARPOverrideCreateResponse {
  /**
   * Disconnects all devices on the account using Global WARP override.
   */
  disconnect?: boolean;

  /**
   * When the Global WARP override state was updated.
   */
  timestamp?: string;
}

export interface GlobalWARPOverrideGetResponse {
  /**
   * Disconnects all devices on the account using Global WARP override.
   */
  disconnect?: boolean;

  /**
   * When the Global WARP override state was updated.
   */
  timestamp?: string;
}

export interface GlobalWARPOverrideCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Disconnects all devices on the account using Global WARP override.
   */
  disconnect: boolean;

  /**
   * Body param: Reasoning for setting the Global WARP override state. This will be
   * surfaced in the audit log.
   */
  justification?: string;
}

export interface GlobalWARPOverrideGetParams {
  account_id: string;
}

export declare namespace GlobalWARPOverride {
  export {
    type GlobalWARPOverrideCreateResponse as GlobalWARPOverrideCreateResponse,
    type GlobalWARPOverrideGetResponse as GlobalWARPOverrideGetResponse,
    type GlobalWARPOverrideCreateParams as GlobalWARPOverrideCreateParams,
    type GlobalWARPOverrideGetParams as GlobalWARPOverrideGetParams,
  };
}
