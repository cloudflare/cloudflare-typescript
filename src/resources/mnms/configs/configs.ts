// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/mnms/configs/configs';
import * as FullsAPI from 'cloudflare/resources/mnms/configs/fulls';

export class Configs extends APIResource {
  fulls: FullsAPI.Fulls = new FullsAPI.Fulls(this._client);

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
   * Create a new network monitoring configuration.
   */
  magicNetworkMonitoringConfigurationCreateAccountConfiguration(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigMagicNetworkMonitoringConfigurationCreateAccountConfigurationResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/mnm/config`, options) as Core.APIPromise<{
        result: ConfigMagicNetworkMonitoringConfigurationCreateAccountConfigurationResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists default sampling and router IPs for account.
   */
  magicNetworkMonitoringConfigurationListAccountConfiguration(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigMagicNetworkMonitoringConfigurationListAccountConfigurationResponse> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/mnm/config`, options) as Core.APIPromise<{
        result: ConfigMagicNetworkMonitoringConfigurationListAccountConfigurationResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update fields in an existing network monitoring configuration.
   */
  magicNetworkMonitoringConfigurationUpdateAccountConfigurationFields(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigMagicNetworkMonitoringConfigurationUpdateAccountConfigurationFieldsResponse> {
    return (
      this._client.patch(`/accounts/${accountIdentifier}/mnm/config`, options) as Core.APIPromise<{
        result: ConfigMagicNetworkMonitoringConfigurationUpdateAccountConfigurationFieldsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing network monitoring configuration, requires the entire
   * configuration to be updated at once.
   */
  magicNetworkMonitoringConfigurationUpdateAnEntireAccountConfiguration(
    accountIdentifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigMagicNetworkMonitoringConfigurationUpdateAnEntireAccountConfigurationResponse> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/mnm/config`, options) as Core.APIPromise<{
        result: ConfigMagicNetworkMonitoringConfigurationUpdateAnEntireAccountConfigurationResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
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
}

export interface ConfigMagicNetworkMonitoringConfigurationCreateAccountConfigurationResponse {
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

export interface ConfigMagicNetworkMonitoringConfigurationListAccountConfigurationResponse {
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

export interface ConfigMagicNetworkMonitoringConfigurationUpdateAccountConfigurationFieldsResponse {
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

export interface ConfigMagicNetworkMonitoringConfigurationUpdateAnEntireAccountConfigurationResponse {
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
  export import ConfigDeleteResponse = ConfigsAPI.ConfigDeleteResponse;
  export import ConfigMagicNetworkMonitoringConfigurationCreateAccountConfigurationResponse = ConfigsAPI.ConfigMagicNetworkMonitoringConfigurationCreateAccountConfigurationResponse;
  export import ConfigMagicNetworkMonitoringConfigurationListAccountConfigurationResponse = ConfigsAPI.ConfigMagicNetworkMonitoringConfigurationListAccountConfigurationResponse;
  export import ConfigMagicNetworkMonitoringConfigurationUpdateAccountConfigurationFieldsResponse = ConfigsAPI.ConfigMagicNetworkMonitoringConfigurationUpdateAccountConfigurationFieldsResponse;
  export import ConfigMagicNetworkMonitoringConfigurationUpdateAnEntireAccountConfigurationResponse = ConfigsAPI.ConfigMagicNetworkMonitoringConfigurationUpdateAnEntireAccountConfigurationResponse;
  export import Fulls = FullsAPI.Fulls;
  export import FullMagicNetworkMonitoringConfigurationListRulesAndAccountConfigurationResponse = FullsAPI.FullMagicNetworkMonitoringConfigurationListRulesAndAccountConfigurationResponse;
}
