// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as GatewayAPI from 'cloudflare/resources/zero-trust/gateway/gateway';
import * as AppTypesAPI from 'cloudflare/resources/zero-trust/gateway/app-types';
import * as AuditSSHSettingsAPI from 'cloudflare/resources/zero-trust/gateway/audit-ssh-settings';
import * as CategoriesAPI from 'cloudflare/resources/zero-trust/gateway/categories';
import * as ConfigurationsAPI from 'cloudflare/resources/zero-trust/gateway/configurations';
import * as LocationsAPI from 'cloudflare/resources/zero-trust/gateway/locations';
import * as LoggingsAPI from 'cloudflare/resources/zero-trust/gateway/loggings';
import * as ProxyEndpointsAPI from 'cloudflare/resources/zero-trust/gateway/proxy-endpoints';
import * as RulesAPI from 'cloudflare/resources/zero-trust/gateway/rules';
import * as ListsAPI from 'cloudflare/resources/zero-trust/gateway/lists/lists';

export class Gateway extends APIResource {
  auditSSHSettings: AuditSSHSettingsAPI.AuditSSHSettings = new AuditSSHSettingsAPI.AuditSSHSettings(
    this._client,
  );
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
  appTypes: AppTypesAPI.AppTypes = new AppTypesAPI.AppTypes(this._client);
  configurations: ConfigurationsAPI.Configurations = new ConfigurationsAPI.Configurations(this._client);
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  loggings: LoggingsAPI.Loggings = new LoggingsAPI.Loggings(this._client);
  proxyEndpoints: ProxyEndpointsAPI.ProxyEndpoints = new ProxyEndpointsAPI.ProxyEndpoints(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);

  /**
   * Creates a Zero Trust account with an existing Cloudflare account.
   */
  create(params: GatewayCreateParams, options?: Core.RequestOptions): Core.APIPromise<GatewayCreateResponse> {
    const { account_id } = params;
    return (
      this._client.post(`/accounts/${account_id}/gateway`, options) as Core.APIPromise<{
        result: GatewayCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets information about the current Zero Trust account.
   */
  list(params: GatewayListParams, options?: Core.RequestOptions): Core.APIPromise<GatewayListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/gateway`, options) as Core.APIPromise<{
        result: GatewayListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface GatewayCreateResponse {
  /**
   * Cloudflare account ID.
   */
  id?: string;

  /**
   * Gateway internal ID.
   */
  gateway_tag?: string;

  /**
   * The name of the provider. Usually Cloudflare.
   */
  provider_name?: string;
}

export interface GatewayListResponse {
  /**
   * Cloudflare account ID.
   */
  id?: string;

  /**
   * Gateway internal ID.
   */
  gateway_tag?: string;

  /**
   * The name of the provider. Usually Cloudflare.
   */
  provider_name?: string;
}

export interface GatewayCreateParams {
  account_id: unknown;
}

export interface GatewayListParams {
  account_id: unknown;
}

export namespace Gateway {
  export import GatewayCreateResponse = GatewayAPI.GatewayCreateResponse;
  export import GatewayListResponse = GatewayAPI.GatewayListResponse;
  export import GatewayCreateParams = GatewayAPI.GatewayCreateParams;
  export import GatewayListParams = GatewayAPI.GatewayListParams;
  export import AuditSSHSettings = AuditSSHSettingsAPI.AuditSSHSettings;
  export import AuditSSHSettingUpdateResponse = AuditSSHSettingsAPI.AuditSSHSettingUpdateResponse;
  export import AuditSSHSettingGetResponse = AuditSSHSettingsAPI.AuditSSHSettingGetResponse;
  export import AuditSSHSettingUpdateParams = AuditSSHSettingsAPI.AuditSSHSettingUpdateParams;
  export import AuditSSHSettingGetParams = AuditSSHSettingsAPI.AuditSSHSettingGetParams;
  export import Categories = CategoriesAPI.Categories;
  export import CategoryListResponse = CategoriesAPI.CategoryListResponse;
  export import CategoryListParams = CategoriesAPI.CategoryListParams;
  export import AppTypes = AppTypesAPI.AppTypes;
  export import AppTypeListResponse = AppTypesAPI.AppTypeListResponse;
  export import AppTypeListParams = AppTypesAPI.AppTypeListParams;
  export import Configurations = ConfigurationsAPI.Configurations;
  export import ConfigurationUpdateResponse = ConfigurationsAPI.ConfigurationUpdateResponse;
  export import ConfigurationEditResponse = ConfigurationsAPI.ConfigurationEditResponse;
  export import ConfigurationGetResponse = ConfigurationsAPI.ConfigurationGetResponse;
  export import ConfigurationUpdateParams = ConfigurationsAPI.ConfigurationUpdateParams;
  export import ConfigurationEditParams = ConfigurationsAPI.ConfigurationEditParams;
  export import ConfigurationGetParams = ConfigurationsAPI.ConfigurationGetParams;
  export import Lists = ListsAPI.Lists;
  export import ListCreateResponse = ListsAPI.ListCreateResponse;
  export import ListUpdateResponse = ListsAPI.ListUpdateResponse;
  export import ListListResponse = ListsAPI.ListListResponse;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import ListEditResponse = ListsAPI.ListEditResponse;
  export import ListGetResponse = ListsAPI.ListGetResponse;
  export import ListCreateParams = ListsAPI.ListCreateParams;
  export import ListUpdateParams = ListsAPI.ListUpdateParams;
  export import ListListParams = ListsAPI.ListListParams;
  export import ListDeleteParams = ListsAPI.ListDeleteParams;
  export import ListEditParams = ListsAPI.ListEditParams;
  export import ListGetParams = ListsAPI.ListGetParams;
  export import Locations = LocationsAPI.Locations;
  export import LocationCreateResponse = LocationsAPI.LocationCreateResponse;
  export import LocationUpdateResponse = LocationsAPI.LocationUpdateResponse;
  export import LocationListResponse = LocationsAPI.LocationListResponse;
  export import LocationDeleteResponse = LocationsAPI.LocationDeleteResponse;
  export import LocationGetResponse = LocationsAPI.LocationGetResponse;
  export import LocationCreateParams = LocationsAPI.LocationCreateParams;
  export import LocationUpdateParams = LocationsAPI.LocationUpdateParams;
  export import LocationListParams = LocationsAPI.LocationListParams;
  export import LocationDeleteParams = LocationsAPI.LocationDeleteParams;
  export import LocationGetParams = LocationsAPI.LocationGetParams;
  export import Loggings = LoggingsAPI.Loggings;
  export import LoggingUpdateResponse = LoggingsAPI.LoggingUpdateResponse;
  export import LoggingGetResponse = LoggingsAPI.LoggingGetResponse;
  export import LoggingUpdateParams = LoggingsAPI.LoggingUpdateParams;
  export import LoggingGetParams = LoggingsAPI.LoggingGetParams;
  export import ProxyEndpoints = ProxyEndpointsAPI.ProxyEndpoints;
  export import ProxyEndpointCreateResponse = ProxyEndpointsAPI.ProxyEndpointCreateResponse;
  export import ProxyEndpointListResponse = ProxyEndpointsAPI.ProxyEndpointListResponse;
  export import ProxyEndpointDeleteResponse = ProxyEndpointsAPI.ProxyEndpointDeleteResponse;
  export import ProxyEndpointEditResponse = ProxyEndpointsAPI.ProxyEndpointEditResponse;
  export import ProxyEndpointGetResponse = ProxyEndpointsAPI.ProxyEndpointGetResponse;
  export import ProxyEndpointCreateParams = ProxyEndpointsAPI.ProxyEndpointCreateParams;
  export import ProxyEndpointListParams = ProxyEndpointsAPI.ProxyEndpointListParams;
  export import ProxyEndpointDeleteParams = ProxyEndpointsAPI.ProxyEndpointDeleteParams;
  export import ProxyEndpointEditParams = ProxyEndpointsAPI.ProxyEndpointEditParams;
  export import ProxyEndpointGetParams = ProxyEndpointsAPI.ProxyEndpointGetParams;
  export import Rules = RulesAPI.Rules;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleGetParams = RulesAPI.RuleGetParams;
}
