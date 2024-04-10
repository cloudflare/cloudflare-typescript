// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/hyperdrive/configs';
import * as HyperdriveAPI from 'cloudflare/resources/hyperdrive/hyperdrive';
import { HyperdrivesSinglePage } from 'cloudflare/resources/hyperdrive/hyperdrive';

export class Configs extends APIResource {
  /**
   * Creates and returns a new Hyperdrive configuration.
   */
  create(
    params: ConfigCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HyperdriveAPI.Hyperdrive | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/hyperdrive/configs`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HyperdriveAPI.Hyperdrive | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates and returns the specified Hyperdrive configuration.
   */
  update(
    hyperdriveId: string,
    params: ConfigUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HyperdriveAPI.Hyperdrive | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/hyperdrive/configs/${hyperdriveId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HyperdriveAPI.Hyperdrive | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a list of Hyperdrives
   */
  list(
    params: ConfigListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<HyperdrivesSinglePage, HyperdriveAPI.Hyperdrive> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/hyperdrive/configs`,
      HyperdrivesSinglePage,
      options,
    );
  }

  /**
   * Deletes the specified Hyperdrive.
   */
  delete(
    hyperdriveId: string,
    params: ConfigDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/hyperdrive/configs/${hyperdriveId}`,
        options,
      ) as Core.APIPromise<{ result: ConfigDeleteResponse }>
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
  ): Core.APIPromise<HyperdriveAPI.Hyperdrive | null> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/hyperdrive/configs/${hyperdriveId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HyperdriveAPI.Hyperdrive | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the specified Hyperdrive configuration.
   */
  get(
    hyperdriveId: string,
    params: ConfigGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HyperdriveAPI.Hyperdrive | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/hyperdrive/configs/${hyperdriveId}`,
        options,
      ) as Core.APIPromise<{ result: HyperdriveAPI.Hyperdrive | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ConfigDeleteResponse = unknown | string | null;

export interface ConfigCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  name: unknown;

  /**
   * Body param:
   */
  origin: HyperdriveAPI.Configuration;
}

export interface ConfigUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  name: unknown;

  /**
   * Body param:
   */
  origin: HyperdriveAPI.Configuration;
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
  origin?: HyperdriveAPI.Configuration;
}

export interface ConfigGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Configs {
  export import ConfigDeleteResponse = ConfigsAPI.ConfigDeleteResponse;
  export import ConfigCreateParams = ConfigsAPI.ConfigCreateParams;
  export import ConfigUpdateParams = ConfigsAPI.ConfigUpdateParams;
  export import ConfigListParams = ConfigsAPI.ConfigListParams;
  export import ConfigDeleteParams = ConfigsAPI.ConfigDeleteParams;
  export import ConfigEditParams = ConfigsAPI.ConfigEditParams;
  export import ConfigGetParams = ConfigsAPI.ConfigGetParams;
}

export { HyperdrivesSinglePage };
