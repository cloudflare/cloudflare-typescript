// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ConnectivitySettingsAPI from './connectivity-settings';
import { ConnectivitySettings } from './connectivity-settings';
import * as SeatsAPI from './seats';
import { Seats } from './seats';
import * as AccessAPI from './access/access';
import { Access } from './access/access';
import * as DevicesAPI from './devices/devices';
import { Devices } from './devices/devices';
import * as DEXAPI from './dex/dex';
import { DEX } from './dex/dex';
import * as DLPAPI from './dlp/dlp';
import { DLP } from './dlp/dlp';
import * as GatewayAPI from './gateway/gateway';
import { Gateway } from './gateway/gateway';
import * as IdentityProvidersAPI from './identity-providers/identity-providers';
import { IdentityProviders } from './identity-providers/identity-providers';
import * as NetworksAPI from './networks/networks';
import { Networks } from './networks/networks';
import * as OrganizationsAPI from './organizations/organizations';
import { Organizations } from './organizations/organizations';
import * as RiskScoringAPI from './risk-scoring/risk-scoring';
import { RiskScoring } from './risk-scoring/risk-scoring';
import * as TunnelsAPI from './tunnels/tunnels';
import { Tunnels } from './tunnels/tunnels';

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
  riskScoring: RiskScoringAPI.RiskScoring = new RiskScoringAPI.RiskScoring(this._client);
}

ZeroTrust.Devices = Devices;
ZeroTrust.IdentityProviders = IdentityProviders;
ZeroTrust.Organizations = Organizations;
ZeroTrust.Seats = Seats;
ZeroTrust.Access = Access;
ZeroTrust.DEX = DEX;
ZeroTrust.Tunnels = Tunnels;
ZeroTrust.ConnectivitySettings = ConnectivitySettings;
ZeroTrust.DLP = DLP;
ZeroTrust.Gateway = Gateway;
ZeroTrust.Networks = Networks;
ZeroTrust.RiskScoring = RiskScoring;

export declare namespace ZeroTrust {
  export { Devices as Devices };

  export { IdentityProviders as IdentityProviders };

  export { Organizations as Organizations };

  export { Seats as Seats };

  export { Access as Access };

  export { DEX as DEX };

  export { Tunnels as Tunnels };

  export { ConnectivitySettings as ConnectivitySettings };

  export { DLP as DLP };

  export { Gateway as Gateway };

  export { Networks as Networks };

  export { RiskScoring as RiskScoring };
}
