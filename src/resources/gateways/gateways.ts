// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as GatewaysAPI from 'cloudflare/resources/gateways/gateways';
import * as AppTypesAPI from 'cloudflare/resources/gateways/app-types';
import * as AuditSSHSettingsAPI from 'cloudflare/resources/gateways/audit-ssh-settings';
import * as CategoriesAPI from 'cloudflare/resources/gateways/categories';
import * as ConfigurationsAPI from 'cloudflare/resources/gateways/configurations';
import * as LocationsAPI from 'cloudflare/resources/gateways/locations';
import * as LoggingsAPI from 'cloudflare/resources/gateways/loggings';
import * as ProxyEndpointsAPI from 'cloudflare/resources/gateways/proxy-endpoints';
import * as RulesAPI from 'cloudflare/resources/gateways/rules';
import * as ListsAPI from 'cloudflare/resources/gateways/lists/lists';

export class Gateways extends APIResource {
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
  create(accountId: unknown, options?: Core.RequestOptions): Core.APIPromise<GatewayCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/gateway`, options) as Core.APIPromise<{
        result: GatewayCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets information about the current Zero Trust account.
   */
  list(accountId: unknown, options?: Core.RequestOptions): Core.APIPromise<GatewayListResponse> {
    return (
      this._client.get(`/accounts/${accountId}/gateway`, options) as Core.APIPromise<{
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

export namespace Gateways {
  export import GatewayCreateResponse = GatewaysAPI.GatewayCreateResponse;
  export import GatewayListResponse = GatewaysAPI.GatewayListResponse;
  export import AuditSSHSettings = AuditSSHSettingsAPI.AuditSSHSettings;
  export import AuditSSHSettingGetResponse = AuditSSHSettingsAPI.AuditSSHSettingGetResponse;
  export import AuditSSHSettingReplaceResponse = AuditSSHSettingsAPI.AuditSSHSettingReplaceResponse;
  export import AuditSSHSettingReplaceParams = AuditSSHSettingsAPI.AuditSSHSettingReplaceParams;
  export import Categories = CategoriesAPI.Categories;
  export import CategoryListResponse = CategoriesAPI.CategoryListResponse;
  export import AppTypes = AppTypesAPI.AppTypes;
  export import AppTypeListResponse = AppTypesAPI.AppTypeListResponse;
  export import Configurations = ConfigurationsAPI.Configurations;
  export import ConfigurationUpdateResponse = ConfigurationsAPI.ConfigurationUpdateResponse;
  export import ConfigurationGetResponse = ConfigurationsAPI.ConfigurationGetResponse;
  export import ConfigurationReplaceResponse = ConfigurationsAPI.ConfigurationReplaceResponse;
  export import ConfigurationUpdateParams = ConfigurationsAPI.ConfigurationUpdateParams;
  export import ConfigurationReplaceParams = ConfigurationsAPI.ConfigurationReplaceParams;
  export import Lists = ListsAPI.Lists;
  export import ListCreateResponse = ListsAPI.ListCreateResponse;
  export import ListListResponse = ListsAPI.ListListResponse;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import ListGetResponse = ListsAPI.ListGetResponse;
  export import ListReplaceResponse = ListsAPI.ListReplaceResponse;
  export import ListCreateParams = ListsAPI.ListCreateParams;
  export import ListReplaceParams = ListsAPI.ListReplaceParams;
  export import Locations = LocationsAPI.Locations;
  export import LocationCreateResponse = LocationsAPI.LocationCreateResponse;
  export import LocationListResponse = LocationsAPI.LocationListResponse;
  export import LocationDeleteResponse = LocationsAPI.LocationDeleteResponse;
  export import LocationGetResponse = LocationsAPI.LocationGetResponse;
  export import LocationReplaceResponse = LocationsAPI.LocationReplaceResponse;
  export import LocationCreateParams = LocationsAPI.LocationCreateParams;
  export import LocationReplaceParams = LocationsAPI.LocationReplaceParams;
  export import Loggings = LoggingsAPI.Loggings;
  export import LoggingGetResponse = LoggingsAPI.LoggingGetResponse;
  export import LoggingReplaceResponse = LoggingsAPI.LoggingReplaceResponse;
  export import LoggingReplaceParams = LoggingsAPI.LoggingReplaceParams;
  export import ProxyEndpoints = ProxyEndpointsAPI.ProxyEndpoints;
  export import ProxyEndpointCreateResponse = ProxyEndpointsAPI.ProxyEndpointCreateResponse;
  export import ProxyEndpointUpdateResponse = ProxyEndpointsAPI.ProxyEndpointUpdateResponse;
  export import ProxyEndpointListResponse = ProxyEndpointsAPI.ProxyEndpointListResponse;
  export import ProxyEndpointDeleteResponse = ProxyEndpointsAPI.ProxyEndpointDeleteResponse;
  export import ProxyEndpointGetResponse = ProxyEndpointsAPI.ProxyEndpointGetResponse;
  export import ProxyEndpointCreateParams = ProxyEndpointsAPI.ProxyEndpointCreateParams;
  export import ProxyEndpointUpdateParams = ProxyEndpointsAPI.ProxyEndpointUpdateParams;
  export import Rules = RulesAPI.Rules;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleReplaceResponse = RulesAPI.RuleReplaceResponse;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleReplaceParams = RulesAPI.RuleReplaceParams;
}
