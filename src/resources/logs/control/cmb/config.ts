// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigAPI from 'cloudflare/resources/logs/control/cmb/config';
import * as Shared from 'cloudflare/resources/shared';

export class Config extends APIResource {
  /**
   * Updates CMB config.
   */
  create(params: ConfigCreateParams, options?: Core.RequestOptions): Core.APIPromise<CmbConfig | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/logs/control/cmb/config`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CmbConfig | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes CMB config.
   */
  delete(
    params: ConfigDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef65e3c8c1a9c4638ec25cdbbaca7165c1 | null> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/logs/control/cmb/config`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef65e3c8c1a9c4638ec25cdbbaca7165c1 | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets CMB config.
   */
  get(params: ConfigGetParams, options?: Core.RequestOptions): Core.APIPromise<CmbConfig | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/logs/control/cmb/config`, options) as Core.APIPromise<{
        result: CmbConfig | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CmbConfig {
  /**
   * Comma-separated list of regions.
   */
  regions?: string;
}

export interface ConfigCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Comma-separated list of regions.
   */
  regions?: string;
}

export interface ConfigDeleteParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ConfigGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Config {
  export import CmbConfig = ConfigAPI.CmbConfig;
  export import ConfigCreateParams = ConfigAPI.ConfigCreateParams;
  export import ConfigDeleteParams = ConfigAPI.ConfigDeleteParams;
  export import ConfigGetParams = ConfigAPI.ConfigGetParams;
}
