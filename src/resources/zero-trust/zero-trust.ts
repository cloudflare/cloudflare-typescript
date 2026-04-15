// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConnectivitySettingsAPI from './connectivity-settings';
import {
  BaseConnectivitySettings,
  ConnectivitySettingEditParams,
  ConnectivitySettingEditResponse,
  ConnectivitySettingGetParams,
  ConnectivitySettingGetResponse,
  ConnectivitySettings,
} from './connectivity-settings';
import * as SeatsAPI from './seats';
import { BaseSeats, Seat, SeatEditParams, Seats, SeatsSinglePage } from './seats';
import * as AccessAPI from './access/access';
import { Access, BaseAccess } from './access/access';
import * as DevicesAPI from './devices/devices';
import {
  BaseDevices,
  Device,
  DeviceGetParams,
  DeviceGetResponse,
  DeviceListParams,
  Devices,
  DevicesSinglePage,
} from './devices/devices';
import * as DEXAPI from './dex/dex';
import {
  BaseDEX,
  DEX,
  DigitalExperienceMonitor,
  NetworkPath,
  NetworkPathResponse,
  Percentiles,
} from './dex/dex';
import * as DLPAPI from './dlp/dlp';
import { BaseDLP, DLP } from './dlp/dlp';
import * as GatewayAPI from './gateway/gateway';
import {
  BaseGateway,
  Gateway,
  GatewayCreateParams,
  GatewayCreateResponse,
  GatewayListParams,
  GatewayListResponse,
} from './gateway/gateway';
import * as IdentityProvidersAPI from './identity-providers/identity-providers';
import {
  AzureAD,
  BaseIdentityProviders,
  GenericOAuthConfig,
  IdentityProvider,
  IdentityProviderCreateParams,
  IdentityProviderDeleteParams,
  IdentityProviderDeleteResponse,
  IdentityProviderGetParams,
  IdentityProviderListParams,
  IdentityProviderListResponse,
  IdentityProviderListResponsesV4PagePaginationArray,
  IdentityProviderSCIMConfig,
  IdentityProviderType,
  IdentityProviderUpdateParams,
  IdentityProviders,
} from './identity-providers/identity-providers';
import * as NetworksAPI from './networks/networks';
import { BaseNetworks, Networks } from './networks/networks';
import * as OrganizationsAPI from './organizations/organizations';
import {
  BaseOrganizations,
  LoginDesign,
  Organization,
  OrganizationCreateParams,
  OrganizationListParams,
  OrganizationRevokeUsersParams,
  OrganizationRevokeUsersResponse,
  OrganizationUpdateParams,
  Organizations,
} from './organizations/organizations';
import * as RiskScoringAPI from './risk-scoring/risk-scoring';
import {
  BaseRiskScoring,
  RiskScoring,
  RiskScoringGetParams,
  RiskScoringGetResponse,
  RiskScoringResetParams,
  RiskScoringResetResponse,
} from './risk-scoring/risk-scoring';
import * as TunnelsAPI from './tunnels/tunnels';
import {
  BaseTunnels,
  Connection,
  TunnelListParams,
  TunnelListResponse,
  TunnelListResponsesV4PagePaginationArray,
  Tunnels,
} from './tunnels/tunnels';

export class BaseZeroTrust extends APIResource {
  static override readonly _key: readonly ['zeroTrust'] = Object.freeze(['zeroTrust'] as const);
}
export class ZeroTrust extends BaseZeroTrust {
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);
  identityProviders: IdentityProvidersAPI.IdentityProviders = new IdentityProvidersAPI.IdentityProviders(
    this._client,
  );
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  seats: SeatsAPI.Seats = new SeatsAPI.Seats(this._client);
  access: AccessAPI.Access = new AccessAPI.Access(this._client);
  dex: DEXAPI.DEX = new DEXAPI.DEX(this._client);
  tunnels: TunnelsAPI.Tunnels = new TunnelsAPI.Tunnels(this._client);
  connectivitySettings: ConnectivitySettingsAPI.ConnectivitySettings =
    new ConnectivitySettingsAPI.ConnectivitySettings(this._client);
  dlp: DLPAPI.DLP = new DLPAPI.DLP(this._client);
  gateway: GatewayAPI.Gateway = new GatewayAPI.Gateway(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
  riskScoring: RiskScoringAPI.RiskScoring = new RiskScoringAPI.RiskScoring(this._client);
}

ZeroTrust.Devices = Devices;
ZeroTrust.BaseDevices = BaseDevices;
ZeroTrust.IdentityProviders = IdentityProviders;
ZeroTrust.BaseIdentityProviders = BaseIdentityProviders;
ZeroTrust.Organizations = Organizations;
ZeroTrust.BaseOrganizations = BaseOrganizations;
ZeroTrust.Seats = Seats;
ZeroTrust.BaseSeats = BaseSeats;
ZeroTrust.Access = Access;
ZeroTrust.BaseAccess = BaseAccess;
ZeroTrust.DEX = DEX;
ZeroTrust.BaseDEX = BaseDEX;
ZeroTrust.Tunnels = Tunnels;
ZeroTrust.BaseTunnels = BaseTunnels;
ZeroTrust.ConnectivitySettings = ConnectivitySettings;
ZeroTrust.BaseConnectivitySettings = BaseConnectivitySettings;
ZeroTrust.DLP = DLP;
ZeroTrust.BaseDLP = BaseDLP;
ZeroTrust.Gateway = Gateway;
ZeroTrust.BaseGateway = BaseGateway;
ZeroTrust.Networks = Networks;
ZeroTrust.BaseNetworks = BaseNetworks;
ZeroTrust.RiskScoring = RiskScoring;
ZeroTrust.BaseRiskScoring = BaseRiskScoring;

export declare namespace ZeroTrust {
  export {
    Devices as Devices,
    BaseDevices as BaseDevices,
    type Device as Device,
    type DeviceGetResponse as DeviceGetResponse,
    type DevicesSinglePage as DevicesSinglePage,
    type DeviceListParams as DeviceListParams,
    type DeviceGetParams as DeviceGetParams,
  };

  export {
    IdentityProviders as IdentityProviders,
    BaseIdentityProviders as BaseIdentityProviders,
    type AzureAD as AzureAD,
    type GenericOAuthConfig as GenericOAuthConfig,
    type IdentityProvider as IdentityProvider,
    type IdentityProviderSCIMConfig as IdentityProviderSCIMConfig,
    type IdentityProviderType as IdentityProviderType,
    type IdentityProviderListResponse as IdentityProviderListResponse,
    type IdentityProviderDeleteResponse as IdentityProviderDeleteResponse,
    type IdentityProviderListResponsesV4PagePaginationArray as IdentityProviderListResponsesV4PagePaginationArray,
    type IdentityProviderCreateParams as IdentityProviderCreateParams,
    type IdentityProviderUpdateParams as IdentityProviderUpdateParams,
    type IdentityProviderListParams as IdentityProviderListParams,
    type IdentityProviderDeleteParams as IdentityProviderDeleteParams,
    type IdentityProviderGetParams as IdentityProviderGetParams,
  };

  export {
    Organizations as Organizations,
    BaseOrganizations as BaseOrganizations,
    type LoginDesign as LoginDesign,
    type Organization as Organization,
    type OrganizationRevokeUsersResponse as OrganizationRevokeUsersResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationListParams as OrganizationListParams,
    type OrganizationRevokeUsersParams as OrganizationRevokeUsersParams,
  };

  export {
    Seats as Seats,
    BaseSeats as BaseSeats,
    type Seat as Seat,
    type SeatsSinglePage as SeatsSinglePage,
    type SeatEditParams as SeatEditParams,
  };

  export { Access as Access, BaseAccess as BaseAccess };

  export {
    DEX as DEX,
    BaseDEX as BaseDEX,
    type DigitalExperienceMonitor as DigitalExperienceMonitor,
    type NetworkPath as NetworkPath,
    type NetworkPathResponse as NetworkPathResponse,
    type Percentiles as Percentiles,
  };

  export {
    Tunnels as Tunnels,
    BaseTunnels as BaseTunnels,
    type Connection as Connection,
    type TunnelListResponse as TunnelListResponse,
    type TunnelListResponsesV4PagePaginationArray as TunnelListResponsesV4PagePaginationArray,
    type TunnelListParams as TunnelListParams,
  };

  export {
    ConnectivitySettings as ConnectivitySettings,
    BaseConnectivitySettings as BaseConnectivitySettings,
    type ConnectivitySettingEditResponse as ConnectivitySettingEditResponse,
    type ConnectivitySettingGetResponse as ConnectivitySettingGetResponse,
    type ConnectivitySettingEditParams as ConnectivitySettingEditParams,
    type ConnectivitySettingGetParams as ConnectivitySettingGetParams,
  };

  export { DLP as DLP, BaseDLP as BaseDLP };

  export {
    Gateway as Gateway,
    BaseGateway as BaseGateway,
    type GatewayCreateResponse as GatewayCreateResponse,
    type GatewayListResponse as GatewayListResponse,
    type GatewayCreateParams as GatewayCreateParams,
    type GatewayListParams as GatewayListParams,
  };

  export { Networks as Networks, BaseNetworks as BaseNetworks };

  export {
    RiskScoring as RiskScoring,
    BaseRiskScoring as BaseRiskScoring,
    type RiskScoringGetResponse as RiskScoringGetResponse,
    type RiskScoringResetResponse as RiskScoringResetResponse,
    type RiskScoringGetParams as RiskScoringGetParams,
    type RiskScoringResetParams as RiskScoringResetParams,
  };
}
