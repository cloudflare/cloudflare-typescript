// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as GatewayAPI from './gateway';
import * as AppTypesAPI from './app-types';
import * as AuditSSHSettingsAPI from './audit-ssh-settings';
import * as CategoriesAPI from './categories';
import * as CertificatesAPI from './certificates';
import * as LocationsAPI from './locations';
import * as LoggingAPI from './logging';
import * as ProxyEndpointsAPI from './proxy-endpoints';
import * as RulesAPI from './rules';
import * as ConfigurationsAPI from './configurations/configurations';
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
  export type GatewayCreateResponse = GatewayAPI.GatewayCreateResponse;
  export type GatewayListResponse = GatewayAPI.GatewayListResponse;
  export type GatewayCreateParams = GatewayAPI.GatewayCreateParams;
  export type GatewayListParams = GatewayAPI.GatewayListParams;
  export import AuditSSHSettings = AuditSSHSettingsAPI.AuditSSHSettings;
  export type GatewaySettings = AuditSSHSettingsAPI.GatewaySettings;
  export type AuditSSHSettingUpdateParams = AuditSSHSettingsAPI.AuditSSHSettingUpdateParams;
  export type AuditSSHSettingGetParams = AuditSSHSettingsAPI.AuditSSHSettingGetParams;
  export type AuditSSHSettingRotateSeedParams = AuditSSHSettingsAPI.AuditSSHSettingRotateSeedParams;
  export import Categories = CategoriesAPI.Categories;
  export type Category = CategoriesAPI.Category;
  export import CategoriesSinglePage = CategoriesAPI.CategoriesSinglePage;
  export type CategoryListParams = CategoriesAPI.CategoryListParams;
  export import AppTypes = AppTypesAPI.AppTypes;
  export type AppType = AppTypesAPI.AppType;
  export import AppTypesSinglePage = AppTypesAPI.AppTypesSinglePage;
  export type AppTypeListParams = AppTypesAPI.AppTypeListParams;
  export import Configurations = ConfigurationsAPI.Configurations;
  export type ActivityLogSettings = ConfigurationsAPI.ActivityLogSettings;
  export type AntiVirusSettings = ConfigurationsAPI.AntiVirusSettings;
  export type BlockPageSettings = ConfigurationsAPI.BlockPageSettings;
  export type BodyScanningSettings = ConfigurationsAPI.BodyScanningSettings;
  export type BrowserIsolationSettings = ConfigurationsAPI.BrowserIsolationSettings;
  export type CustomCertificateSettings = ConfigurationsAPI.CustomCertificateSettings;
  export type ExtendedEmailMatching = ConfigurationsAPI.ExtendedEmailMatching;
  export type FipsSettings = ConfigurationsAPI.FipsSettings;
  export type GatewayConfigurationSettings = ConfigurationsAPI.GatewayConfigurationSettings;
  export type NotificationSettings = ConfigurationsAPI.NotificationSettings;
  export type ProtocolDetection = ConfigurationsAPI.ProtocolDetection;
  export type TLSSettings = ConfigurationsAPI.TLSSettings;
  export type ConfigurationUpdateResponse = ConfigurationsAPI.ConfigurationUpdateResponse;
  export type ConfigurationEditResponse = ConfigurationsAPI.ConfigurationEditResponse;
  export type ConfigurationGetResponse = ConfigurationsAPI.ConfigurationGetResponse;
  export type ConfigurationUpdateParams = ConfigurationsAPI.ConfigurationUpdateParams;
  export type ConfigurationEditParams = ConfigurationsAPI.ConfigurationEditParams;
  export type ConfigurationGetParams = ConfigurationsAPI.ConfigurationGetParams;
  export import Lists = ListsAPI.Lists;
  export type GatewayItem = ListsAPI.GatewayItem;
  export type GatewayList = ListsAPI.GatewayList;
  export type ListCreateResponse = ListsAPI.ListCreateResponse;
  export type ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import GatewayListsSinglePage = ListsAPI.GatewayListsSinglePage;
  export type ListCreateParams = ListsAPI.ListCreateParams;
  export type ListUpdateParams = ListsAPI.ListUpdateParams;
  export type ListListParams = ListsAPI.ListListParams;
  export type ListDeleteParams = ListsAPI.ListDeleteParams;
  export type ListEditParams = ListsAPI.ListEditParams;
  export type ListGetParams = ListsAPI.ListGetParams;
  export import Locations = LocationsAPI.Locations;
  export type DOHEndpoint = LocationsAPI.DOHEndpoint;
  export type DOTEndpoint = LocationsAPI.DOTEndpoint;
  export type Endpoint = LocationsAPI.Endpoint;
  export type IPNetwork = LocationsAPI.IPNetwork;
  export type IPV4Endpoint = LocationsAPI.IPV4Endpoint;
  export type IPV6Endpoint = LocationsAPI.IPV6Endpoint;
  export type IPV6Network = LocationsAPI.IPV6Network;
  export type Location = LocationsAPI.Location;
  export type LocationDeleteResponse = LocationsAPI.LocationDeleteResponse;
  export import LocationsSinglePage = LocationsAPI.LocationsSinglePage;
  export type LocationCreateParams = LocationsAPI.LocationCreateParams;
  export type LocationUpdateParams = LocationsAPI.LocationUpdateParams;
  export type LocationListParams = LocationsAPI.LocationListParams;
  export type LocationDeleteParams = LocationsAPI.LocationDeleteParams;
  export type LocationGetParams = LocationsAPI.LocationGetParams;
  export import Logging = LoggingAPI.Logging;
  export type LoggingSetting = LoggingAPI.LoggingSetting;
  export type LoggingUpdateParams = LoggingAPI.LoggingUpdateParams;
  export type LoggingGetParams = LoggingAPI.LoggingGetParams;
  export import ProxyEndpoints = ProxyEndpointsAPI.ProxyEndpoints;
  export type GatewayIPs = ProxyEndpointsAPI.GatewayIPs;
  export type ProxyEndpoint = ProxyEndpointsAPI.ProxyEndpoint;
  export type ProxyEndpointDeleteResponse = ProxyEndpointsAPI.ProxyEndpointDeleteResponse;
  export type ProxyEndpointGetResponse = ProxyEndpointsAPI.ProxyEndpointGetResponse;
  export type ProxyEndpointCreateParams = ProxyEndpointsAPI.ProxyEndpointCreateParams;
  export type ProxyEndpointListParams = ProxyEndpointsAPI.ProxyEndpointListParams;
  export type ProxyEndpointDeleteParams = ProxyEndpointsAPI.ProxyEndpointDeleteParams;
  export type ProxyEndpointEditParams = ProxyEndpointsAPI.ProxyEndpointEditParams;
  export type ProxyEndpointGetParams = ProxyEndpointsAPI.ProxyEndpointGetParams;
  export import Rules = RulesAPI.Rules;
  export type DNSResolverSettingsV4 = RulesAPI.DNSResolverSettingsV4;
  export type DNSResolverSettingsV6 = RulesAPI.DNSResolverSettingsV6;
  export type GatewayFilter = RulesAPI.GatewayFilter;
  export type GatewayRule = RulesAPI.GatewayRule;
  export type RuleSetting = RulesAPI.RuleSetting;
  export type Schedule = RulesAPI.Schedule;
  export type RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import GatewayRulesSinglePage = RulesAPI.GatewayRulesSinglePage;
  export type RuleCreateParams = RulesAPI.RuleCreateParams;
  export type RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export type RuleListParams = RulesAPI.RuleListParams;
  export type RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export type RuleGetParams = RulesAPI.RuleGetParams;
  export type RuleResetExpirationParams = RulesAPI.RuleResetExpirationParams;
  export import Certificates = CertificatesAPI.Certificates;
  export type CertificateCreateResponse = CertificatesAPI.CertificateCreateResponse;
  export type CertificateListResponse = CertificatesAPI.CertificateListResponse;
  export type CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export type CertificateActivateResponse = CertificatesAPI.CertificateActivateResponse;
  export type CertificateDeactivateResponse = CertificatesAPI.CertificateDeactivateResponse;
  export type CertificateGetResponse = CertificatesAPI.CertificateGetResponse;
  export import CertificateListResponsesSinglePage = CertificatesAPI.CertificateListResponsesSinglePage;
  export type CertificateCreateParams = CertificatesAPI.CertificateCreateParams;
  export type CertificateListParams = CertificatesAPI.CertificateListParams;
  export type CertificateDeleteParams = CertificatesAPI.CertificateDeleteParams;
  export type CertificateActivateParams = CertificatesAPI.CertificateActivateParams;
  export type CertificateDeactivateParams = CertificatesAPI.CertificateDeactivateParams;
  export type CertificateGetParams = CertificatesAPI.CertificateGetParams;
}
