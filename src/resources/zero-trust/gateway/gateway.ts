// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as GatewayAPI from './gateway';
import * as AppTypesAPI from './app-types';
import * as AuditSSHSettingsAPI from './audit-ssh-settings';
import * as CategoriesAPI from './categories';
import * as CertificatesAPI from './certificates';
import * as ConfigurationsAPI from './configurations';
import * as LocationsAPI from './locations';
import * as LoggingAPI from './logging';
import * as ProxyEndpointsAPI from './proxy-endpoints';
import * as RulesAPI from './rules';
import * as ListsAPI from './lists/lists';

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
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);

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
  account_id: string;
}

export interface GatewayListParams {
  account_id: string;
}

export namespace Gateway {
  export import GatewayCreateResponse = GatewayAPI.GatewayCreateResponse;
  export import GatewayListResponse = GatewayAPI.GatewayListResponse;
  export import GatewayCreateParams = GatewayAPI.GatewayCreateParams;
  export import GatewayListParams = GatewayAPI.GatewayListParams;
  export import AuditSSHSettings = AuditSSHSettingsAPI.AuditSSHSettings;
  export import GatewaySettings = AuditSSHSettingsAPI.GatewaySettings;
  export import AuditSSHSettingUpdateParams = AuditSSHSettingsAPI.AuditSSHSettingUpdateParams;
  export import AuditSSHSettingGetParams = AuditSSHSettingsAPI.AuditSSHSettingGetParams;
  export import Categories = CategoriesAPI.Categories;
  export import Category = CategoriesAPI.Category;
  export import CategoriesSinglePage = CategoriesAPI.CategoriesSinglePage;
  export import CategoryListParams = CategoriesAPI.CategoryListParams;
  export import AppTypes = AppTypesAPI.AppTypes;
  export import AppType = AppTypesAPI.AppType;
  export import AppTypesSinglePage = AppTypesAPI.AppTypesSinglePage;
  export import AppTypeListParams = AppTypesAPI.AppTypeListParams;
  export import Configurations = ConfigurationsAPI.Configurations;
  export import ActivityLogSettings = ConfigurationsAPI.ActivityLogSettings;
  export import AntiVirusSettings = ConfigurationsAPI.AntiVirusSettings;
  export import BlockPageSettings = ConfigurationsAPI.BlockPageSettings;
  export import BodyScanningSettings = ConfigurationsAPI.BodyScanningSettings;
  export import BrowserIsolationSettings = ConfigurationsAPI.BrowserIsolationSettings;
  export import CustomCertificateSettings = ConfigurationsAPI.CustomCertificateSettings;
  export import ExtendedEmailMatching = ConfigurationsAPI.ExtendedEmailMatching;
  export import FipsSettings = ConfigurationsAPI.FipsSettings;
  export import GatewayConfigurationSettings = ConfigurationsAPI.GatewayConfigurationSettings;
  export import NotificationSettings = ConfigurationsAPI.NotificationSettings;
  export import ProtocolDetection = ConfigurationsAPI.ProtocolDetection;
  export import TLSSettings = ConfigurationsAPI.TLSSettings;
  export import ConfigurationUpdateResponse = ConfigurationsAPI.ConfigurationUpdateResponse;
  export import ConfigurationEditResponse = ConfigurationsAPI.ConfigurationEditResponse;
  export import ConfigurationGetResponse = ConfigurationsAPI.ConfigurationGetResponse;
  export import ConfigurationUpdateParams = ConfigurationsAPI.ConfigurationUpdateParams;
  export import ConfigurationEditParams = ConfigurationsAPI.ConfigurationEditParams;
  export import ConfigurationGetParams = ConfigurationsAPI.ConfigurationGetParams;
  export import Lists = ListsAPI.Lists;
  export import GatewayItem = ListsAPI.GatewayItem;
  export import GatewayList = ListsAPI.GatewayList;
  export import ListCreateResponse = ListsAPI.ListCreateResponse;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import GatewayListsSinglePage = ListsAPI.GatewayListsSinglePage;
  export import ListCreateParams = ListsAPI.ListCreateParams;
  export import ListUpdateParams = ListsAPI.ListUpdateParams;
  export import ListListParams = ListsAPI.ListListParams;
  export import ListDeleteParams = ListsAPI.ListDeleteParams;
  export import ListEditParams = ListsAPI.ListEditParams;
  export import ListGetParams = ListsAPI.ListGetParams;
  export import Locations = LocationsAPI.Locations;
  export import DOHEndpoint = LocationsAPI.DOHEndpoint;
  export import DOTEndpoint = LocationsAPI.DOTEndpoint;
  export import Endpoint = LocationsAPI.Endpoint;
  export import IPNetwork = LocationsAPI.IPNetwork;
  export import IPV4Endpoint = LocationsAPI.IPV4Endpoint;
  export import IPV6Endpoint = LocationsAPI.IPV6Endpoint;
  export import IPV6Network = LocationsAPI.IPV6Network;
  export import Location = LocationsAPI.Location;
  export import LocationDeleteResponse = LocationsAPI.LocationDeleteResponse;
  export import LocationsSinglePage = LocationsAPI.LocationsSinglePage;
  export import LocationCreateParams = LocationsAPI.LocationCreateParams;
  export import LocationUpdateParams = LocationsAPI.LocationUpdateParams;
  export import LocationListParams = LocationsAPI.LocationListParams;
  export import LocationDeleteParams = LocationsAPI.LocationDeleteParams;
  export import LocationGetParams = LocationsAPI.LocationGetParams;
  export import Logging = LoggingAPI.Logging;
  export import LoggingSetting = LoggingAPI.LoggingSetting;
  export import LoggingUpdateParams = LoggingAPI.LoggingUpdateParams;
  export import LoggingGetParams = LoggingAPI.LoggingGetParams;
  export import ProxyEndpoints = ProxyEndpointsAPI.ProxyEndpoints;
  export import GatewayIPs = ProxyEndpointsAPI.GatewayIPs;
  export import ProxyEndpoint = ProxyEndpointsAPI.ProxyEndpoint;
  export import ProxyEndpointDeleteResponse = ProxyEndpointsAPI.ProxyEndpointDeleteResponse;
  export import ProxyEndpointGetResponse = ProxyEndpointsAPI.ProxyEndpointGetResponse;
  export import ProxyEndpointCreateParams = ProxyEndpointsAPI.ProxyEndpointCreateParams;
  export import ProxyEndpointListParams = ProxyEndpointsAPI.ProxyEndpointListParams;
  export import ProxyEndpointDeleteParams = ProxyEndpointsAPI.ProxyEndpointDeleteParams;
  export import ProxyEndpointEditParams = ProxyEndpointsAPI.ProxyEndpointEditParams;
  export import ProxyEndpointGetParams = ProxyEndpointsAPI.ProxyEndpointGetParams;
  export import Rules = RulesAPI.Rules;
  export import DNSResolverSettingsV4 = RulesAPI.DNSResolverSettingsV4;
  export import DNSResolverSettingsV6 = RulesAPI.DNSResolverSettingsV6;
  export import GatewayFilter = RulesAPI.GatewayFilter;
  export import GatewayRule = RulesAPI.GatewayRule;
  export import RuleSetting = RulesAPI.RuleSetting;
  export import Schedule = RulesAPI.Schedule;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import GatewayRulesSinglePage = RulesAPI.GatewayRulesSinglePage;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleGetParams = RulesAPI.RuleGetParams;
  export import Certificates = CertificatesAPI.Certificates;
  export import CertificateCreateResponse = CertificatesAPI.CertificateCreateResponse;
  export import CertificateListResponse = CertificatesAPI.CertificateListResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificateActivateResponse = CertificatesAPI.CertificateActivateResponse;
  export import CertificateDeactivateResponse = CertificatesAPI.CertificateDeactivateResponse;
  export import CertificateGetResponse = CertificatesAPI.CertificateGetResponse;
  export import CertificateListResponsesSinglePage = CertificatesAPI.CertificateListResponsesSinglePage;
  export import CertificateCreateParams = CertificatesAPI.CertificateCreateParams;
  export import CertificateListParams = CertificatesAPI.CertificateListParams;
  export import CertificateDeleteParams = CertificatesAPI.CertificateDeleteParams;
  export import CertificateActivateParams = CertificatesAPI.CertificateActivateParams;
  export import CertificateDeactivateParams = CertificatesAPI.CertificateDeactivateParams;
  export import CertificateGetParams = CertificatesAPI.CertificateGetParams;
}
