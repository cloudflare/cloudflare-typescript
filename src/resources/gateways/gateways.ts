// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as GatewaysAPI from 'cloudflare/resources/gateways/gateways';
import * as AppTypesAPI from 'cloudflare/resources/gateways/app-types';
import * as CategoriesAPI from 'cloudflare/resources/gateways/categories';
import * as ConfigurationsAPI from 'cloudflare/resources/gateways/configurations';
import * as LocationsAPI from 'cloudflare/resources/gateways/locations';
import * as LoggingsAPI from 'cloudflare/resources/gateways/loggings';
import * as ProxyEndpointsAPI from 'cloudflare/resources/gateways/proxy-endpoints';
import * as RulesAPI from 'cloudflare/resources/gateways/rules';
import * as ListsAPI from 'cloudflare/resources/gateways/lists/lists';

export class Gateways extends APIResource {
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
  zeroTrustAccountsCreateZeroTrustAccount(
    accountId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GatewayZeroTrustAccountsCreateZeroTrustAccountResponse> {
    return (
      this._client.post(`/accounts/${accountId}/gateway`, options) as Core.APIPromise<{
        result: GatewayZeroTrustAccountsCreateZeroTrustAccountResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets information about the current Zero Trust account.
   */
  zeroTrustAccountsGetZeroTrustAccountInformation(
    accountId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse> {
    return (
      this._client.get(`/accounts/${accountId}/gateway`, options) as Core.APIPromise<{
        result: GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface GatewayZeroTrustAccountsCreateZeroTrustAccountResponse {
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

export interface GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse {
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
  export import GatewayZeroTrustAccountsCreateZeroTrustAccountResponse = GatewaysAPI.GatewayZeroTrustAccountsCreateZeroTrustAccountResponse;
  export import GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse = GatewaysAPI.GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse;
  export import Categories = CategoriesAPI.Categories;
  export import CategoryZeroTrustGatewayCategoriesListCategoriesResponse = CategoriesAPI.CategoryZeroTrustGatewayCategoriesListCategoriesResponse;
  export import AppTypes = AppTypesAPI.AppTypes;
  export import AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse = AppTypesAPI.AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse;
  export import Configurations = ConfigurationsAPI.Configurations;
  export import ConfigurationZeroTrustAccountsGetZeroTrustAccountConfigurationResponse = ConfigurationsAPI.ConfigurationZeroTrustAccountsGetZeroTrustAccountConfigurationResponse;
  export import ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationResponse = ConfigurationsAPI.ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationResponse;
  export import ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationResponse = ConfigurationsAPI.ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationResponse;
  export import ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationParams = ConfigurationsAPI.ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationParams;
  export import ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationParams = ConfigurationsAPI.ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationParams;
  export import Lists = ListsAPI.Lists;
  export import ListUpdateResponse = ListsAPI.ListUpdateResponse;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import ListGetResponse = ListsAPI.ListGetResponse;
  export import ListZeroTrustListsCreateZeroTrustListResponse = ListsAPI.ListZeroTrustListsCreateZeroTrustListResponse;
  export import ListZeroTrustListsListZeroTrustListsResponse = ListsAPI.ListZeroTrustListsListZeroTrustListsResponse;
  export import ListUpdateParams = ListsAPI.ListUpdateParams;
  export import ListZeroTrustListsCreateZeroTrustListParams = ListsAPI.ListZeroTrustListsCreateZeroTrustListParams;
  export import Locations = LocationsAPI.Locations;
  export import LocationUpdateResponse = LocationsAPI.LocationUpdateResponse;
  export import LocationDeleteResponse = LocationsAPI.LocationDeleteResponse;
  export import LocationGetResponse = LocationsAPI.LocationGetResponse;
  export import LocationZeroTrustGatewayLocationsCreateZeroTrustGatewayLocationResponse = LocationsAPI.LocationZeroTrustGatewayLocationsCreateZeroTrustGatewayLocationResponse;
  export import LocationZeroTrustGatewayLocationsListZeroTrustGatewayLocationsResponse = LocationsAPI.LocationZeroTrustGatewayLocationsListZeroTrustGatewayLocationsResponse;
  export import LocationUpdateParams = LocationsAPI.LocationUpdateParams;
  export import LocationZeroTrustGatewayLocationsCreateZeroTrustGatewayLocationParams = LocationsAPI.LocationZeroTrustGatewayLocationsCreateZeroTrustGatewayLocationParams;
  export import Loggings = LoggingsAPI.Loggings;
  export import LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse = LoggingsAPI.LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse;
  export import LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse = LoggingsAPI.LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse;
  export import LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountParams = LoggingsAPI.LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountParams;
  export import ProxyEndpoints = ProxyEndpointsAPI.ProxyEndpoints;
  export import ProxyEndpointUpdateResponse = ProxyEndpointsAPI.ProxyEndpointUpdateResponse;
  export import ProxyEndpointListResponse = ProxyEndpointsAPI.ProxyEndpointListResponse;
  export import ProxyEndpointDeleteResponse = ProxyEndpointsAPI.ProxyEndpointDeleteResponse;
  export import ProxyEndpointGetResponse = ProxyEndpointsAPI.ProxyEndpointGetResponse;
  export import ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse = ProxyEndpointsAPI.ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse;
  export import ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse = ProxyEndpointsAPI.ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse;
  export import ProxyEndpointUpdateParams = ProxyEndpointsAPI.ProxyEndpointUpdateParams;
  export import ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointParams = ProxyEndpointsAPI.ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointParams;
  export import Rules = RulesAPI.Rules;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleZeroTrustGatewayRulesCreateZeroTrustGatewayRuleResponse = RulesAPI.RuleZeroTrustGatewayRulesCreateZeroTrustGatewayRuleResponse;
  export import RuleZeroTrustGatewayRulesListZeroTrustGatewayRulesResponse = RulesAPI.RuleZeroTrustGatewayRulesListZeroTrustGatewayRulesResponse;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleZeroTrustGatewayRulesCreateZeroTrustGatewayRuleParams = RulesAPI.RuleZeroTrustGatewayRulesCreateZeroTrustGatewayRuleParams;
}
