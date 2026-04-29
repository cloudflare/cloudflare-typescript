// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConnectivitySettingsAPI from './connectivity-settings';
import { BaseConnectivitySettings, ConnectivitySettings } from './connectivity-settings';
import * as SeatsAPI from './seats';
import { BaseSeats, Seats } from './seats';
import * as AccessAPI from './access/access';
import { Access, BaseAccess } from './access/access';
import * as DevicesAPI from './devices/devices';
import { BaseDevices, Devices } from './devices/devices';
import * as DEXAPI from './dex/dex';
import { BaseDEX, DEX } from './dex/dex';
import * as DLPAPI from './dlp/dlp';
import { BaseDLP, DLP } from './dlp/dlp';
import * as GatewayAPI from './gateway/gateway';
import { BaseGateway, Gateway } from './gateway/gateway';
import * as IdentityProvidersAPI from './identity-providers/identity-providers';
import { BaseIdentityProviders, IdentityProviders } from './identity-providers/identity-providers';
import * as NetworksAPI from './networks/networks';
import { BaseNetworks, Networks } from './networks/networks';
import * as OrganizationsAPI from './organizations/organizations';
import { BaseOrganizations, Organizations } from './organizations/organizations';
import * as RiskScoringAPI from './risk-scoring/risk-scoring';
import { BaseRiskScoring, RiskScoring } from './risk-scoring/risk-scoring';
import * as TunnelsAPI from './tunnels/tunnels';
import { BaseTunnels, Tunnels } from './tunnels/tunnels';

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
  export { Devices as Devices, BaseDevices as BaseDevices };

  export { IdentityProviders as IdentityProviders, BaseIdentityProviders as BaseIdentityProviders };

  export { Organizations as Organizations, BaseOrganizations as BaseOrganizations };

  export { Seats as Seats, BaseSeats as BaseSeats };

  export { Access as Access, BaseAccess as BaseAccess };

  export { DEX as DEX, BaseDEX as BaseDEX };

  export { Tunnels as Tunnels, BaseTunnels as BaseTunnels };

  export {
    ConnectivitySettings as ConnectivitySettings,
    BaseConnectivitySettings as BaseConnectivitySettings,
  };

  export { DLP as DLP, BaseDLP as BaseDLP };

  export { Gateway as Gateway, BaseGateway as BaseGateway };

  export { Networks as Networks, BaseNetworks as BaseNetworks };

  export { RiskScoring as RiskScoring, BaseRiskScoring as BaseRiskScoring };
}
