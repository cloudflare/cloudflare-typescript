// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DevicesDevicesAPI from './devices_';
import { BaseDevices as DevicesAPIBaseDevices, Devices as DevicesAPIDevices } from './devices_';
import * as DEXTestsAPI from './dex-tests';
import { BaseDEXTests, DEXTests } from './dex-tests';
import * as FleetStatusAPI from './fleet-status';
import { BaseFleetStatus, FleetStatus } from './fleet-status';
import * as IPProfilesAPI from './ip-profiles';
import { BaseIPProfiles, IPProfiles } from './ip-profiles';
import * as NetworksAPI from './networks';
import { BaseNetworks, Networks } from './networks';
import * as OverrideCodesAPI from './override-codes';
import { BaseOverrideCodes, OverrideCodes } from './override-codes';
import * as RegistrationsAPI from './registrations';
import { BaseRegistrations, Registrations } from './registrations';
import * as RevokeAPI from './revoke';
import { BaseRevoke, Revoke } from './revoke';
import * as SettingsAPI from './settings';
import { BaseSettings, Settings } from './settings';
import * as UnrevokeAPI from './unrevoke';
import { BaseUnrevoke, Unrevoke } from './unrevoke';
import * as PoliciesAPI from './policies/policies';
import { BasePolicies, Policies } from './policies/policies';
import * as PostureAPI from './posture/posture';
import { BasePosture, Posture } from './posture/posture';
import * as ResilienceAPI from './resilience/resilience';
import { BaseResilience, Resilience } from './resilience/resilience';

export class BaseDevices extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices'] = Object.freeze([
    'zeroTrust',
    'devices',
  ] as const);
}
export class Devices extends BaseDevices {
  devices: DevicesDevicesAPI.Devices = new DevicesDevicesAPI.Devices(this._client);
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
Devices.BaseDevices = DevicesAPIBaseDevices;
Devices.Resilience = Resilience;
Devices.BaseResilience = BaseResilience;
Devices.Registrations = Registrations;
Devices.BaseRegistrations = BaseRegistrations;
Devices.DEXTests = DEXTests;
Devices.BaseDEXTests = BaseDEXTests;
Devices.IPProfiles = IPProfiles;
Devices.BaseIPProfiles = BaseIPProfiles;
Devices.Networks = Networks;
Devices.BaseNetworks = BaseNetworks;
Devices.FleetStatus = FleetStatus;
Devices.BaseFleetStatus = BaseFleetStatus;
Devices.Policies = Policies;
Devices.BasePolicies = BasePolicies;
Devices.Posture = Posture;
Devices.BasePosture = BasePosture;
Devices.Revoke = Revoke;
Devices.BaseRevoke = BaseRevoke;
Devices.Settings = Settings;
Devices.BaseSettings = BaseSettings;
Devices.Unrevoke = Unrevoke;
Devices.BaseUnrevoke = BaseUnrevoke;
Devices.OverrideCodes = OverrideCodes;
Devices.BaseOverrideCodes = BaseOverrideCodes;

export declare namespace Devices {
  export { DevicesAPIDevices as Devices, DevicesAPIBaseDevices as BaseDevices };

  export { Resilience as Resilience, BaseResilience as BaseResilience };

  export { Registrations as Registrations, BaseRegistrations as BaseRegistrations };

  export { DEXTests as DEXTests, BaseDEXTests as BaseDEXTests };

  export { IPProfiles as IPProfiles, BaseIPProfiles as BaseIPProfiles };

  export { Networks as Networks, BaseNetworks as BaseNetworks };

  export { FleetStatus as FleetStatus, BaseFleetStatus as BaseFleetStatus };

  export { Policies as Policies, BasePolicies as BasePolicies };

  export { Posture as Posture, BasePosture as BasePosture };

  export { Revoke as Revoke, BaseRevoke as BaseRevoke };

  export { Settings as Settings, BaseSettings as BaseSettings };

  export { Unrevoke as Unrevoke, BaseUnrevoke as BaseUnrevoke };

  export { OverrideCodes as OverrideCodes, BaseOverrideCodes as BaseOverrideCodes };
}
