// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as FullAPI from './full';
import { Full, FullGetParams, FullGetResponse } from './full';

export class Configs extends APIResource {
  full: FullAPI.Full = new FullAPI.Full(this._client);

  /**
   * Create a new network monitoring configuration.
   */
  create(params: ConfigCreateParams, options?: Core.RequestOptions): Core.APIPromise<ConfigCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/mnm/config`, { body, ...options }) as Core.APIPromise<{
        result: ConfigCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing network monitoring configuration, requires the entire
   * configuration to be updated at once.
   */
  update(params: ConfigUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ConfigUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/mnm/config`, { body, ...options }) as Core.APIPromise<{
        result: ConfigUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete an existing network monitoring configuration.
   */
  delete(params: ConfigDeleteParams, options?: Core.RequestOptions): Core.APIPromise<ConfigDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/mnm/config`, options) as Core.APIPromise<{
        result: ConfigDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update fields in an existing network monitoring configuration.
   */
  edit(params: ConfigEditParams, options?: Core.RequestOptions): Core.APIPromise<ConfigEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/mnm/config`, { body, ...options }) as Core.APIPromise<{
        result: ConfigEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists default sampling, router IPs and warp devices for account.
   */
  get(params: ConfigGetParams, options?: Core.RequestOptions): Core.APIPromise<ConfigGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/mnm/config`, options) as Core.APIPromise<{
        result: ConfigGetResponse;
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

  warp_devices: Array<ConfigCreateResponse.WARPDevice>;
}

export namespace ConfigCreateResponse {
  /**
   * Object representing a warp device with an ID and name.
   */
  export interface WARPDevice {
    /**
     * Unique identifier for the warp device.
     */
    id: string;

    /**
     * Name of the warp device.
     */
    name: string;

    /**
     * IPv4 CIDR of the router sourcing flow data associated with this warp device.
     * Only /32 addresses are currently supported.
     */
    router_ip: string;
  }
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

  warp_devices: Array<ConfigUpdateResponse.WARPDevice>;
}

export namespace ConfigUpdateResponse {
  /**
   * Object representing a warp device with an ID and name.
   */
  export interface WARPDevice {
    /**
     * Unique identifier for the warp device.
     */
    id: string;

    /**
     * Name of the warp device.
     */
    name: string;

    /**
     * IPv4 CIDR of the router sourcing flow data associated with this warp device.
     * Only /32 addresses are currently supported.
     */
    router_ip: string;
  }
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

  warp_devices: Array<ConfigDeleteResponse.WARPDevice>;
}

export namespace ConfigDeleteResponse {
  /**
   * Object representing a warp device with an ID and name.
   */
  export interface WARPDevice {
    /**
     * Unique identifier for the warp device.
     */
    id: string;

    /**
     * Name of the warp device.
     */
    name: string;

    /**
     * IPv4 CIDR of the router sourcing flow data associated with this warp device.
     * Only /32 addresses are currently supported.
     */
    router_ip: string;
  }
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

  warp_devices: Array<ConfigEditResponse.WARPDevice>;
}

export namespace ConfigEditResponse {
  /**
   * Object representing a warp device with an ID and name.
   */
  export interface WARPDevice {
    /**
     * Unique identifier for the warp device.
     */
    id: string;

    /**
     * Name of the warp device.
     */
    name: string;

    /**
     * IPv4 CIDR of the router sourcing flow data associated with this warp device.
     * Only /32 addresses are currently supported.
     */
    router_ip: string;
  }
}

export interface ConfigGetResponse {
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

  warp_devices: Array<ConfigGetResponse.WARPDevice>;
}

export namespace ConfigGetResponse {
  /**
   * Object representing a warp device with an ID and name.
   */
  export interface WARPDevice {
    /**
     * Unique identifier for the warp device.
     */
    id: string;

    /**
     * Name of the warp device.
     */
    name: string;

    /**
     * IPv4 CIDR of the router sourcing flow data associated with this warp device.
     * Only /32 addresses are currently supported.
     */
    router_ip: string;
  }
}

export interface ConfigCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Fallback sampling rate of flow messages being sent in packets per
   * second. This should match the packet sampling rate configured on the router.
   */
  default_sampling: number;

  /**
   * Body param: The account name.
   */
  name: string;

  /**
   * Body param:
   */
  router_ips?: Array<string>;

  /**
   * Body param:
   */
  warp_devices?: Array<ConfigCreateParams.WARPDevice>;
}

export namespace ConfigCreateParams {
  /**
   * Object representing a warp device with an ID and name.
   */
  export interface WARPDevice {
    /**
     * Unique identifier for the warp device.
     */
    id: string;

    /**
     * Name of the warp device.
     */
    name: string;

    /**
     * IPv4 CIDR of the router sourcing flow data associated with this warp device.
     * Only /32 addresses are currently supported.
     */
    router_ip: string;
  }
}

export interface ConfigUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Fallback sampling rate of flow messages being sent in packets per
   * second. This should match the packet sampling rate configured on the router.
   */
  default_sampling: number;

  /**
   * Body param: The account name.
   */
  name: string;

  /**
   * Body param:
   */
  router_ips?: Array<string>;

  /**
   * Body param:
   */
  warp_devices?: Array<ConfigUpdateParams.WARPDevice>;
}

export namespace ConfigUpdateParams {
  /**
   * Object representing a warp device with an ID and name.
   */
  export interface WARPDevice {
    /**
     * Unique identifier for the warp device.
     */
    id: string;

    /**
     * Name of the warp device.
     */
    name: string;

    /**
     * IPv4 CIDR of the router sourcing flow data associated with this warp device.
     * Only /32 addresses are currently supported.
     */
    router_ip: string;
  }
}

export interface ConfigDeleteParams {
  account_id: string;
}

export interface ConfigEditParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Fallback sampling rate of flow messages being sent in packets per
   * second. This should match the packet sampling rate configured on the router.
   */
  default_sampling?: number;

  /**
   * Body param: The account name.
   */
  name?: string;

  /**
   * Body param:
   */
  router_ips?: Array<string>;

  /**
   * Body param:
   */
  warp_devices?: Array<ConfigEditParams.WARPDevice>;
}

export namespace ConfigEditParams {
  /**
   * Object representing a warp device with an ID and name.
   */
  export interface WARPDevice {
    /**
     * Unique identifier for the warp device.
     */
    id: string;

    /**
     * Name of the warp device.
     */
    name: string;

    /**
     * IPv4 CIDR of the router sourcing flow data associated with this warp device.
     * Only /32 addresses are currently supported.
     */
    router_ip: string;
  }
}

export interface ConfigGetParams {
  account_id: string;
}

Configs.Full = Full;

export declare namespace Configs {
  export {
    type ConfigCreateResponse as ConfigCreateResponse,
    type ConfigUpdateResponse as ConfigUpdateResponse,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigEditResponse as ConfigEditResponse,
    type ConfigGetResponse as ConfigGetResponse,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigUpdateParams as ConfigUpdateParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigEditParams as ConfigEditParams,
    type ConfigGetParams as ConfigGetParams,
  };

  export { Full as Full, type FullGetResponse as FullGetResponse, type FullGetParams as FullGetParams };
}
