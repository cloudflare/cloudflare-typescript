// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as ConnectivitySettingsAPI from 'cloudflare/resources/zero-trust/connectivity-settings';
import * as IdentityProvidersAPI from 'cloudflare/resources/zero-trust/identity-providers';
import * as OrganizationsAPI from 'cloudflare/resources/zero-trust/organizations';
import * as SeatsAPI from 'cloudflare/resources/zero-trust/seats';
import * as AccessAPI from 'cloudflare/resources/zero-trust/access/access';
import * as DevicesAPI from 'cloudflare/resources/zero-trust/devices/devices';
import * as DEXAPI from 'cloudflare/resources/zero-trust/dex/dex';
import * as DLPAPI from 'cloudflare/resources/zero-trust/dlp/dlp';
import * as GatewayAPI from 'cloudflare/resources/zero-trust/gateway/gateway';
import * as NetworksAPI from 'cloudflare/resources/zero-trust/networks/networks';
import * as TunnelsAPI from 'cloudflare/resources/zero-trust/tunnels/tunnels';

export class ZeroTrust extends APIResource {
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
}

export namespace ZeroTrust {
  export import Devices = DevicesAPI.Devices;
  export import Device = DevicesAPI.Device;
  export import DevicesSinglePage = DevicesAPI.DevicesSinglePage;
  export import DeviceListParams = DevicesAPI.DeviceListParams;
  export import DeviceGetParams = DevicesAPI.DeviceGetParams;
  export import IdentityProviders = IdentityProvidersAPI.IdentityProviders;
  export import AzureAD = IdentityProvidersAPI.AzureAD;
  export import GenericOAuthConfig = IdentityProvidersAPI.GenericOAuthConfig;
  export import IdentityProvider = IdentityProvidersAPI.IdentityProvider;
  export import IdentityProviderType = IdentityProvidersAPI.IdentityProviderType;
  export import ScimConfig = IdentityProvidersAPI.ScimConfig;
  export import IdentityProviderListResponse = IdentityProvidersAPI.IdentityProviderListResponse;
  export import IdentityProviderDeleteResponse = IdentityProvidersAPI.IdentityProviderDeleteResponse;
  export import IdentityProviderListResponsesSinglePage = IdentityProvidersAPI.IdentityProviderListResponsesSinglePage;
  export import IdentityProviderCreateParams = IdentityProvidersAPI.IdentityProviderCreateParams;
  export import IdentityProviderUpdateParams = IdentityProvidersAPI.IdentityProviderUpdateParams;
  export import IdentityProviderListParams = IdentityProvidersAPI.IdentityProviderListParams;
  export import IdentityProviderDeleteParams = IdentityProvidersAPI.IdentityProviderDeleteParams;
  export import IdentityProviderGetParams = IdentityProvidersAPI.IdentityProviderGetParams;
  export import Organizations = OrganizationsAPI.Organizations;
  export import LoginDesign = OrganizationsAPI.LoginDesign;
  export import Organization = OrganizationsAPI.Organization;
  export import OrganizationRevokeUsersResponse = OrganizationsAPI.OrganizationRevokeUsersResponse;
  export import OrganizationCreateParams = OrganizationsAPI.OrganizationCreateParams;
  export import OrganizationUpdateParams = OrganizationsAPI.OrganizationUpdateParams;
  export import OrganizationListParams = OrganizationsAPI.OrganizationListParams;
  export import OrganizationRevokeUsersParams = OrganizationsAPI.OrganizationRevokeUsersParams;
  export import Seats = SeatsAPI.Seats;
  export import Seat = SeatsAPI.Seat;
  export import SeatEditResponse = SeatsAPI.SeatEditResponse;
  export import SeatEditParams = SeatsAPI.SeatEditParams;
  export import Access = AccessAPI.Access;
  export import AccessRule = AccessAPI.AccessRule;
  export import DEX = DEXAPI.DEX;
  export import NetworkPath = DEXAPI.NetworkPath;
  export import Percentiles = DEXAPI.Percentiles;
  export import UnnamedSchemaRefBf9e2abcf1b78a6cab8e6e29e2228a11 = DEXAPI.UnnamedSchemaRefBf9e2abcf1b78a6cab8e6e29e2228a11;
  export import Tunnels = TunnelsAPI.Tunnels;
  export import Tunnel = TunnelsAPI.Tunnel;
  export import WARPConnectorTunnel = TunnelsAPI.WARPConnectorTunnel;
  export import TunnelCreateParams = TunnelsAPI.TunnelCreateParams;
  export import TunnelListParams = TunnelsAPI.TunnelListParams;
  export import TunnelDeleteParams = TunnelsAPI.TunnelDeleteParams;
  export import TunnelEditParams = TunnelsAPI.TunnelEditParams;
  export import TunnelGetParams = TunnelsAPI.TunnelGetParams;
  export import ConnectivitySettings = ConnectivitySettingsAPI.ConnectivitySettings;
  export import ConnectivitySettingEditResponse = ConnectivitySettingsAPI.ConnectivitySettingEditResponse;
  export import ConnectivitySettingGetResponse = ConnectivitySettingsAPI.ConnectivitySettingGetResponse;
  export import ConnectivitySettingEditParams = ConnectivitySettingsAPI.ConnectivitySettingEditParams;
  export import ConnectivitySettingGetParams = ConnectivitySettingsAPI.ConnectivitySettingGetParams;
  export import DLP = DLPAPI.DLP;
  export import Gateway = GatewayAPI.Gateway;
  export import GatewayCreateResponse = GatewayAPI.GatewayCreateResponse;
  export import GatewayListResponse = GatewayAPI.GatewayListResponse;
  export import GatewayCreateParams = GatewayAPI.GatewayCreateParams;
  export import GatewayListParams = GatewayAPI.GatewayListParams;
  export import Networks = NetworksAPI.Networks;
}
