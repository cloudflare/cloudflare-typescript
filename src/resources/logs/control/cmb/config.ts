// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseConfig extends APIResource {
  static override readonly _key: readonly ['logs', 'control', 'cmb', 'config'] = Object.freeze([
    'logs',
    'control',
    'cmb',
    'config',
  ] as const);

  /**
   * Updates CMB config.
   *
   * @example
   * ```ts
   * const cmbConfig =
   *   await client.logs.control.cmb.config.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  create(
    params: ConfigCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CmbConfig | null> {
    const { account_id = this._client.accountID, ...body } = params ?? {};
    return (
      this._client.post(path`/accounts/${account_id}/logs/control/cmb/config`, {
        body,
        ...options,
      }) as APIPromise<{ result: CmbConfig | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes CMB config.
   *
   * @example
   * ```ts
   * const config = await client.logs.control.cmb.config.delete({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  delete(
    params: ConfigDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConfigDeleteResponse | null> {
    const { account_id = this._client.accountID } = params ?? {};
    return (
      this._client.delete(path`/accounts/${account_id}/logs/control/cmb/config`, options) as APIPromise<{
        result: ConfigDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets CMB config.
   *
   * @example
   * ```ts
   * const cmbConfig = await client.logs.control.cmb.config.get({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(
    params: ConfigGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CmbConfig | null> {
    const { account_id = this._client.accountID } = params ?? {};
    return (
      this._client.get(path`/accounts/${account_id}/logs/control/cmb/config`, options) as APIPromise<{
        result: CmbConfig | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Config extends BaseConfig {}

export interface CmbConfig {
  /**
   * Allow out of region access
   */
  allow_out_of_region_access?: boolean;

  /**
   * Name of the region.
   */
  regions?: string;
}

export type ConfigDeleteResponse = unknown;

export interface ConfigCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id?: string;

  /**
   * Body param: Allow out of region access
   */
  allow_out_of_region_access?: boolean;

  /**
   * Body param: Name of the region.
   */
  regions?: string;
}

export interface ConfigDeleteParams {
  /**
   * Identifier.
   */
  account_id?: string;
}

export interface ConfigGetParams {
  /**
   * Identifier.
   */
  account_id?: string;
}

export declare namespace Config {
  export {
    type CmbConfig as CmbConfig,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigGetParams as ConfigGetParams,
  };
}
