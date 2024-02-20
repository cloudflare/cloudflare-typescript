// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/hyperdrive/configs';

export class Configs extends APIResource {
  /**
   * Creates and returns a new Hyperdrive configuration.
   */
  create(
    accountId: string,
    body: ConfigCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigCreateResponse | null> {
    return (
      this._client.post(`/accounts/${accountId}/hyperdrive/configs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a list of Hyperdrives
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<ConfigListResponse> {
    return (
      this._client.get(`/accounts/${accountId}/hyperdrive/configs`, options) as Core.APIPromise<{
        result: ConfigListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes the specified Hyperdrive.
   */
  delete(
    accountId: string,
    hyperdriveId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigDeleteResponse | null> {
    return (
      this._client.delete(
        `/accounts/${accountId}/hyperdrive/configs/${hyperdriveId}`,
        options,
      ) as Core.APIPromise<{ result: ConfigDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the specified Hyperdrive configuration.
   */
  get(
    accountId: string,
    hyperdriveId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigGetResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountId}/hyperdrive/configs/${hyperdriveId}`,
        options,
      ) as Core.APIPromise<{ result: ConfigGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates and returns the specified Hyperdrive configuration.
   */
  replace(
    accountId: string,
    hyperdriveId: string,
    body: ConfigReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigReplaceResponse | null> {
    return (
      this._client.put(`/accounts/${accountId}/hyperdrive/configs/${hyperdriveId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigReplaceResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ConfigCreateResponse {
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

export interface ConfigGetResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface ConfigReplaceResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface ConfigCreateParams {
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

export interface ConfigReplaceParams {
  origin: ConfigReplaceParams.Origin;
}

export namespace ConfigReplaceParams {
  export interface Origin {
    /**
     * The password required to access your origin database. This value is write-only
     * and never returned by the API.
     */
    password: string;
  }
}

export namespace Configs {
  export import ConfigCreateResponse = ConfigsAPI.ConfigCreateResponse;
  export import ConfigListResponse = ConfigsAPI.ConfigListResponse;
  export import ConfigDeleteResponse = ConfigsAPI.ConfigDeleteResponse;
  export import ConfigGetResponse = ConfigsAPI.ConfigGetResponse;
  export import ConfigReplaceResponse = ConfigsAPI.ConfigReplaceResponse;
  export import ConfigCreateParams = ConfigsAPI.ConfigCreateParams;
  export import ConfigReplaceParams = ConfigsAPI.ConfigReplaceParams;
}
