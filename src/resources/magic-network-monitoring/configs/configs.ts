// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/magic-network-monitoring/configs/configs';
import * as FullsAPI from 'cloudflare/resources/magic-network-monitoring/configs/fulls';

export class Configs extends APIResource {
  fulls: FullsAPI.Fulls = new FullsAPI.Fulls(this._client);

  /**
   * Create a new network monitoring configuration.
   */
  create(accountIdentifier: unknown, options?: Core.RequestOptions): Core.APIPromise<ConfigCreateResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/mnm/config`, options) as Core.APIPromise<{
        result: ConfigCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing network monitoring configuration, requires the entire
   * configuration to be updated at once.
   */
  update(accountIdentifier: unknown, options?: Core.RequestOptions): Core.APIPromise<ConfigUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/mnm/config`, options) as Core.APIPromise<{
        result: ConfigUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists default sampling and router IPs for account.
   */
  list(accountIdentifier: unknown, options?: Core.RequestOptions): Core.APIPromise<ConfigListResponse> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/mnm/config`, options) as Core.APIPromise<{
        result: ConfigListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete an existing network monitoring configuration.
   */
  delete(accountIdentifier: unknown, options?: Core.RequestOptions): Core.APIPromise<ConfigDeleteResponse> {
    return (
      this._client.delete(`/accounts/${accountIdentifier}/mnm/config`, options) as Core.APIPromise<{
        result: ConfigDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update fields in an existing network monitoring configuration.
   */
  edit(accountIdentifier: unknown, options?: Core.RequestOptions): Core.APIPromise<ConfigEditResponse> {
    return (
      this._client.patch(`/accounts/${accountIdentifier}/mnm/config`, options) as Core.APIPromise<{
        result: ConfigEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ConfigCreateResponse {
  /**
   * Fallback sampling rate of flow messages being sent in packets per second. This
   * should match the packet sampling rate configured on the router.
   */
  default_sampling: number;

  /**
   * The account name.
   */
  name: string;

  router_ips: Array<string>;
}

export interface ConfigUpdateResponse {
  /**
   * Fallback sampling rate of flow messages being sent in packets per second. This
   * should match the packet sampling rate configured on the router.
   */
  default_sampling: number;

  /**
   * The account name.
   */
  name: string;

  router_ips: Array<string>;
}

export interface ConfigListResponse {
  /**
   * Fallback sampling rate of flow messages being sent in packets per second. This
   * should match the packet sampling rate configured on the router.
   */
  default_sampling: number;

  /**
   * The account name.
   */
  name: string;

  router_ips: Array<string>;
}

export interface ConfigDeleteResponse {
  /**
   * Fallback sampling rate of flow messages being sent in packets per second. This
   * should match the packet sampling rate configured on the router.
   */
  default_sampling: number;

  /**
   * The account name.
   */
  name: string;

  router_ips: Array<string>;
}

export interface ConfigEditResponse {
  /**
   * Fallback sampling rate of flow messages being sent in packets per second. This
   * should match the packet sampling rate configured on the router.
   */
  default_sampling: number;

  /**
   * The account name.
   */
  name: string;

  router_ips: Array<string>;
}

export namespace Configs {
  export import ConfigCreateResponse = ConfigsAPI.ConfigCreateResponse;
  export import ConfigUpdateResponse = ConfigsAPI.ConfigUpdateResponse;
  export import ConfigListResponse = ConfigsAPI.ConfigListResponse;
  export import ConfigDeleteResponse = ConfigsAPI.ConfigDeleteResponse;
  export import ConfigEditResponse = ConfigsAPI.ConfigEditResponse;
  export import Fulls = FullsAPI.Fulls;
  export import FullListResponse = FullsAPI.FullListResponse;
}
