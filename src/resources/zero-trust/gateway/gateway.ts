// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as GatewayAPI from 'cloudflare/resources/zero-trust/gateway/gateway';
import * as AppTypesAPI from 'cloudflare/resources/zero-trust/gateway/app-types';
import * as AuditSSHSettingsAPI from 'cloudflare/resources/zero-trust/gateway/audit-ssh-settings';
import * as CategoriesAPI from 'cloudflare/resources/zero-trust/gateway/categories';
import * as ConfigurationsAPI from 'cloudflare/resources/zero-trust/gateway/configurations';
import * as LocationsAPI from 'cloudflare/resources/zero-trust/gateway/locations';
import * as LoggingAPI from 'cloudflare/resources/zero-trust/gateway/logging';
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
  logging: LoggingAPI.Logging = new LoggingAPI.Logging(this._client);
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
  export import ZeroTrustGatewaySettings = AuditSSHSettingsAPI.ZeroTrustGatewaySettings;
  export import AuditSSHSettingUpdateParams = AuditSSHSettingsAPI.AuditSSHSettingUpdateParams;
  export import AuditSSHSettingGetParams = AuditSSHSettingsAPI.AuditSSHSettingGetParams;
  export import Categories = CategoriesAPI.Categories;
  export import ZeroTrustGatewayCategories = CategoriesAPI.ZeroTrustGatewayCategories;
  export import CategoryListResponse = CategoriesAPI.CategoryListResponse;
  export import CategoryListParams = CategoriesAPI.CategoryListParams;
  export import AppTypes = AppTypesAPI.AppTypes;
  export import ZeroTrustGatewayAppTypes = AppTypesAPI.ZeroTrustGatewayAppTypes;
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
  export import ZeroTrustGatewayLists = ListsAPI.ZeroTrustGatewayLists;
  export import ListCreateResponse = ListsAPI.ListCreateResponse;
  export import ListListResponse = ListsAPI.ListListResponse;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import ListCreateParams = ListsAPI.ListCreateParams;
  export import ListUpdateParams = ListsAPI.ListUpdateParams;
  export import ListListParams = ListsAPI.ListListParams;
  export import ListDeleteParams = ListsAPI.ListDeleteParams;
  export import ListEditParams = ListsAPI.ListEditParams;
  export import ListGetParams = ListsAPI.ListGetParams;
  export import Locations = LocationsAPI.Locations;
  export import ZeroTrustGatewayLocations = LocationsAPI.ZeroTrustGatewayLocations;
  export import LocationListResponse = LocationsAPI.LocationListResponse;
  export import LocationDeleteResponse = LocationsAPI.LocationDeleteResponse;
  export import LocationCreateParams = LocationsAPI.LocationCreateParams;
  export import LocationUpdateParams = LocationsAPI.LocationUpdateParams;
  export import LocationListParams = LocationsAPI.LocationListParams;
  export import LocationDeleteParams = LocationsAPI.LocationDeleteParams;
  export import LocationGetParams = LocationsAPI.LocationGetParams;
  export import Logging = LoggingAPI.Logging;
  export import ZeroTrustGatewayGatewayAccountLoggingSettings = LoggingAPI.ZeroTrustGatewayGatewayAccountLoggingSettings;
  export import LoggingUpdateParams = LoggingAPI.LoggingUpdateParams;
  export import LoggingGetParams = LoggingAPI.LoggingGetParams;
  export import ProxyEndpoints = ProxyEndpointsAPI.ProxyEndpoints;
  export import ZeroTrustGatewayProxyEndpoints = ProxyEndpointsAPI.ZeroTrustGatewayProxyEndpoints;
  export import ProxyEndpointListResponse = ProxyEndpointsAPI.ProxyEndpointListResponse;
  export import ProxyEndpointDeleteResponse = ProxyEndpointsAPI.ProxyEndpointDeleteResponse;
  export import ProxyEndpointCreateParams = ProxyEndpointsAPI.ProxyEndpointCreateParams;
  export import ProxyEndpointListParams = ProxyEndpointsAPI.ProxyEndpointListParams;
  export import ProxyEndpointDeleteParams = ProxyEndpointsAPI.ProxyEndpointDeleteParams;
  export import ProxyEndpointEditParams = ProxyEndpointsAPI.ProxyEndpointEditParams;
  export import ProxyEndpointGetParams = ProxyEndpointsAPI.ProxyEndpointGetParams;
  export import Rules = RulesAPI.Rules;
  export import ZeroTrustGatewayRules = RulesAPI.ZeroTrustGatewayRules;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleGetParams = RulesAPI.RuleGetParams;
}
