// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/hyperdrive/configs';

export class Configs extends APIResource {
  /**
   * Creates and returns a new Hyperdrive configuration.
   */
  create(
    params: ConfigCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigCreateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/hyperdrive/configs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates and returns the specified Hyperdrive configuration.
   */
  update(
    hyperdriveId: string,
    params: ConfigUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigUpdateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/hyperdrive/configs/${hyperdriveId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a list of Hyperdrives
   */
  list(params: ConfigListParams, options?: Core.RequestOptions): Core.APIPromise<ConfigListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/hyperdrive/configs`, options) as Core.APIPromise<{
        result: ConfigListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes the specified Hyperdrive.
   */
  delete(
    hyperdriveId: string,
    params: ConfigDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/hyperdrive/configs/${hyperdriveId}`,
        options,
      ) as Core.APIPromise<{ result: ConfigDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Patches and returns the specified Hyperdrive configuration. Updates to the
   * origin and caching settings are applied with an all-or-nothing approach.
   */
  edit(
    hyperdriveId: string,
    params: ConfigEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigEditResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/hyperdrive/configs/${hyperdriveId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigEditResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the specified Hyperdrive configuration.
   */
  get(
    hyperdriveId: string,
    params: ConfigGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/hyperdrive/configs/${hyperdriveId}`,
        options,
      ) as Core.APIPromise<{ result: ConfigGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Hyperdrive {
  /**
   * Identifier
   */
  id?: string;
}

export interface ConfigCreateResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface ConfigUpdateResponse {
  /**
   * Identifier
   */
  id?: string;
}

export type ConfigListResponse = Array<ConfigListResponse.ConfigListResponseItem>;

export namespace ConfigListResponse {
  export interface ConfigListResponseItem {
    /**
     * Identifier
     */
    id?: string;
  }
}

export type ConfigDeleteResponse = unknown | string;

export interface ConfigEditResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface ConfigGetResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface ConfigCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  origin: ConfigCreateParams.Origin;
}

export namespace ConfigCreateParams {
  export interface Origin {
    /**
     * The password required to access your origin database. This value is write-only
     * and never returned by the API.
     */
    password: string;
  }
}

export interface ConfigUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  origin: ConfigUpdateParams.Origin;
}

export namespace ConfigUpdateParams {
  export interface Origin {
    /**
     * The password required to access your origin database. This value is write-only
     * and never returned by the API.
     */
    password: string;
  }
}

export interface ConfigListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ConfigDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ConfigEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  origin?: ConfigEditParams.Origin;
}

export namespace ConfigEditParams {
  export interface Origin {
    /**
     * The password required to access your origin database. This value is write-only
     * and never returned by the API.
     */
    password: string;
  }
}

export interface ConfigGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Configs {
  export import Hyperdrive = ConfigsAPI.Hyperdrive;
  export import ConfigCreateResponse = ConfigsAPI.ConfigCreateResponse;
  export import ConfigUpdateResponse = ConfigsAPI.ConfigUpdateResponse;
  export import ConfigListResponse = ConfigsAPI.ConfigListResponse;
  export import ConfigDeleteResponse = ConfigsAPI.ConfigDeleteResponse;
  export import ConfigEditResponse = ConfigsAPI.ConfigEditResponse;
  export import ConfigGetResponse = ConfigsAPI.ConfigGetResponse;
  export import ConfigCreateParams = ConfigsAPI.ConfigCreateParams;
  export import ConfigUpdateParams = ConfigsAPI.ConfigUpdateParams;
  export import ConfigListParams = ConfigsAPI.ConfigListParams;
  export import ConfigDeleteParams = ConfigsAPI.ConfigDeleteParams;
  export import ConfigEditParams = ConfigsAPI.ConfigEditParams;
  export import ConfigGetParams = ConfigsAPI.ConfigGetParams;
}
