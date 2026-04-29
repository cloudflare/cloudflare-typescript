// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as DevicesAPI from './devices_';
import { Devices as DevicesAPIDevices } from './devices_';
import * as DEXTestsAPI from './dex-tests';
import { DEXTests } from './dex-tests';
import * as FleetStatusAPI from './fleet-status';
import { FleetStatus } from './fleet-status';
import * as IPProfilesAPI from './ip-profiles';
import { IPProfiles } from './ip-profiles';
import * as NetworksAPI from './networks';
import { Networks } from './networks';
import * as OverrideCodesAPI from './override-codes';
import { OverrideCodes } from './override-codes';
import * as RegistrationsAPI from './registrations';
import { Registrations } from './registrations';
import * as RevokeAPI from './revoke';
import { Revoke } from './revoke';
import * as SettingsAPI from './settings';
import { Settings } from './settings';
import * as UnrevokeAPI from './unrevoke';
import { Unrevoke } from './unrevoke';
import * as PoliciesAPI from './policies/policies';
import { Policies } from './policies/policies';
import * as PostureAPI from './posture/posture';
import { Posture } from './posture/posture';
import * as ResilienceAPI from './resilience/resilience';
import { Resilience } from './resilience/resilience';

export class Devices extends APIResource {
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);
  resilience: ResilienceAPI.Resilience = new ResilienceAPI.Resilience(this._client);
  registrations: RegistrationsAPI.Registrations = new RegistrationsAPI.Registrations(this._client);
  dexTests: DEXTestsAPI.DEXTests = new DEXTestsAPI.DEXTests(this._client);
  ipProfiles: IPProfilesAPI.IPProfiles = new IPProfilesAPI.IPProfiles(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
  fleetStatus: FleetStatusAPI.FleetStatus = new FleetStatusAPI.FleetStatus(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  posture: PostureAPI.Posture = new PostureAPI.Posture(this._client);
  revoke: RevokeAPI.Revoke = new RevokeAPI.Revoke(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  unrevoke: UnrevokeAPI.Unrevoke = new UnrevokeAPI.Unrevoke(this._client);
  overrideCodes: OverrideCodesAPI.OverrideCodes = new OverrideCodesAPI.OverrideCodes(this._client);
}

Devices.Devices = DevicesAPIDevices;
Devices.Resilience = Resilience;
Devices.Registrations = Registrations;
Devices.DEXTests = DEXTests;
Devices.IPProfiles = IPProfiles;
Devices.Networks = Networks;
Devices.FleetStatus = FleetStatus;
Devices.Policies = Policies;
Devices.Posture = Posture;
Devices.Revoke = Revoke;
Devices.Settings = Settings;
Devices.Unrevoke = Unrevoke;
Devices.OverrideCodes = OverrideCodes;

export declare namespace Devices {
  export { DevicesAPIDevices as Devices };

  export { Resilience as Resilience };

  export { Registrations as Registrations };

  export { DEXTests as DEXTests };

  export { IPProfiles as IPProfiles };

  export { Networks as Networks };

  export { FleetStatus as FleetStatus };

  export { Policies as Policies };

  export { Posture as Posture };

  export { Revoke as Revoke };

  export { Settings as Settings };

  export { Unrevoke as Unrevoke };

  export { OverrideCodes as OverrideCodes };
}
