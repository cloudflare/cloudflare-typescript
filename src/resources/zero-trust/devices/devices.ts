// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as DEXTestsAPI from './dex-tests';
import {
  DEXTest,
  DEXTestCreateParams,
  DEXTestDeleteParams,
  DEXTestDeleteResponse,
  DEXTestGetParams,
  DEXTestListParams,
  DEXTestUpdateParams,
  DEXTests,
  SchemaData,
  SchemaHTTP,
  SchemaHTTPSSinglePage,
} from './dex-tests';
import * as FleetStatusAPI from './fleet-status';
import { FleetStatus, FleetStatusGetParams, FleetStatusGetResponse } from './fleet-status';
import * as NetworksAPI from './networks';
import {
  DeviceNetwork,
  DeviceNetworksSinglePage,
  NetworkCreateParams,
  NetworkDeleteParams,
  NetworkGetParams,
  NetworkListParams,
  NetworkUpdateParams,
  Networks,
} from './networks';
import * as OverrideCodesAPI from './override-codes';
import { OverrideCodeListParams, OverrideCodeListResponse, OverrideCodes } from './override-codes';
import * as RevokeAPI from './revoke';
import { Revoke, RevokeCreateParams, RevokeCreateResponse } from './revoke';
import * as SettingsAPI from './settings';
import {
  DeviceSettings,
  SettingEditParams,
  SettingListParams,
  SettingUpdateParams,
  Settings,
} from './settings';
import * as UnrevokeAPI from './unrevoke';
import { Unrevoke, UnrevokeCreateParams, UnrevokeCreateResponse } from './unrevoke';
import * as PoliciesAPI from './policies/policies';
import {
  DevicePolicyCertificates,
  FallbackDomain,
  FallbackDomainPolicy,
  Policies,
  SettingsPolicy,
  SplitTunnelExclude,
  SplitTunnelInclude,
} from './policies/policies';
import * as PostureAPI from './posture/posture';
import {
  CarbonblackInput,
  ClientCertificateInput,
  CrowdstrikeInput,
  DeviceInput,
  DeviceMatch,
  DevicePostureRule,
  DevicePostureRulesSinglePage,
  DiskEncryptionInput,
  DomainJoinedInput,
  FileInput,
  FirewallInput,
  IntuneInput,
  KolideInput,
  OSVersionInput,
  Posture,
  PostureCreateParams,
  PostureDeleteParams,
  PostureDeleteResponse,
  PostureGetParams,
  PostureListParams,
  PostureUpdateParams,
  SentineloneInput,
  SentineloneS2sInput,
  TaniumInput,
  UniqueClientIDInput,
  WorkspaceOneInput,
} from './posture/posture';
import { SinglePage } from '../../../pagination';

export class Devices extends APIResource {
  dexTests: DEXTestsAPI.DEXTests = new DEXTestsAPI.DEXTests(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
  fleetStatus: FleetStatusAPI.FleetStatus = new FleetStatusAPI.FleetStatus(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  posture: PostureAPI.Posture = new PostureAPI.Posture(this._client);
  revoke: RevokeAPI.Revoke = new RevokeAPI.Revoke(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  unrevoke: UnrevokeAPI.Unrevoke = new UnrevokeAPI.Unrevoke(this._client);
  overrideCodes: OverrideCodesAPI.OverrideCodes = new OverrideCodesAPI.OverrideCodes(this._client);

  /**
   * Fetches a list of enrolled devices.
   */
  list(params: DeviceListParams, options?: Core.RequestOptions): Core.PagePromise<DevicesSinglePage, Device> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/devices`, DevicesSinglePage, options);
  }

  /**
   * Fetches details for a single device.
   */
  get(
    deviceId: string,
    params: DeviceGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeviceGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/${deviceId}`, options) as Core.APIPromise<{
        result: DeviceGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DevicesSinglePage extends SinglePage<Device> {}

export interface Device {
  /**
   * Device ID.
   */
  id?: string;

  /**
   * When the device was created.
   */
  created?: string;

  /**
   * True if the device was deleted.
   */
  deleted?: boolean;

  device_type?: 'windows' | 'mac' | 'linux' | 'android' | 'ios';

  /**
   * IPv4 or IPv6 address.
   */
  ip?: string;

  /**
   * The device's public key.
   */
  key?: string;

  /**
   * When the device last connected to Cloudflare services.
   */
  last_seen?: string;

  /**
   * The device mac address.
   */
  mac_address?: string;

  /**
   * The device manufacturer name.
   */
  manufacturer?: string;

  /**
   * The device model name.
   */
  model?: string;

  /**
   * The device name.
   */
  name?: string;

  /**
   * The Linux distro name.
   */
  os_distro_name?: string;

  /**
   * The Linux distro revision.
   */
  os_distro_revision?: string;

  /**
   * The operating system version.
   */
  os_version?: string;

  /**
   * The operating system version extra parameter.
   */
  os_version_extra?: string;

  /**
   * When the device was revoked.
   */
  revoked_at?: string;

  /**
   * The device serial number.
   */
  serial_number?: string;

  /**
   * When the device was updated.
   */
  updated?: string;

  user?: Device.User;

  /**
   * The WARP client version.
   */
  version?: string;
}

export namespace Device {
  export interface User {
    /**
     * UUID
     */
    id?: string;

    /**
     * The contact email address of the user.
     */
    email?: string;

    /**
     * The enrolled device user's name.
     */
    name?: string;
  }
}

export interface DeviceGetResponse {
  /**
   * Device ID.
   */
  id?: string;

  account?: DeviceGetResponse.Account;

  /**
   * When the device was created.
   */
  created?: string;

  /**
   * True if the device was deleted.
   */
  deleted?: boolean;

  device_type?: string;

  /**
   * @deprecated
   */
  gateway_device_id?: string;

  /**
   * IPv4 or IPv6 address.
   */
  ip?: string;

  /**
   * The device's public key.
   */
  key?: string;

  /**
   * Type of the key.
   */
  key_type?: string;

  /**
   * When the device last connected to Cloudflare services.
   */
  last_seen?: string;

  /**
   * The device mac address.
   */
  mac_address?: string;

  /**
   * The device model name.
   */
  model?: string;

  /**
   * The device name.
   */
  name?: string;

  /**
   * The operating system version.
   */
  os_version?: string;

  /**
   * The device serial number.
   */
  serial_number?: string;

  /**
   * Type of the tunnel connection used.
   */
  tunnel_type?: string;

  /**
   * When the device was updated.
   */
  updated?: string;

  user?: DeviceGetResponse.User;

  /**
   * The WARP client version.
   */
  version?: string;
}

export namespace DeviceGetResponse {
  export interface Account {
    /**
     * @deprecated
     */
    id?: string;

    /**
     * @deprecated
     */
    account_type?: string;

    /**
     * The name of the enrolled account.
     */
    name?: string;
  }

  export interface User {
    /**
     * UUID
     */
    id?: string;

    /**
     * The contact email address of the user.
     */
    email?: string;

    /**
     * The enrolled device user's name.
     */
    name?: string;
  }
}

export interface DeviceListParams {
  account_id: string;
}

export interface DeviceGetParams {
  account_id: string;
}

Devices.DevicesSinglePage = DevicesSinglePage;
Devices.DEXTests = DEXTests;
Devices.SchemaHTTPSSinglePage = SchemaHTTPSSinglePage;
Devices.Networks = Networks;
Devices.DeviceNetworksSinglePage = DeviceNetworksSinglePage;
Devices.FleetStatus = FleetStatus;
Devices.Policies = Policies;
Devices.Posture = Posture;
Devices.DevicePostureRulesSinglePage = DevicePostureRulesSinglePage;
Devices.Revoke = Revoke;
Devices.Settings = Settings;
Devices.Unrevoke = Unrevoke;
Devices.OverrideCodes = OverrideCodes;

export declare namespace Devices {
  export {
    type Device as Device,
    type DeviceGetResponse as DeviceGetResponse,
    DevicesSinglePage as DevicesSinglePage,
    type DeviceListParams as DeviceListParams,
    type DeviceGetParams as DeviceGetParams,
  };

  export {
    DEXTests as DEXTests,
    type DEXTest as DEXTest,
    type SchemaData as SchemaData,
    type SchemaHTTP as SchemaHTTP,
    type DEXTestDeleteResponse as DEXTestDeleteResponse,
    SchemaHTTPSSinglePage as SchemaHTTPSSinglePage,
    type DEXTestCreateParams as DEXTestCreateParams,
    type DEXTestUpdateParams as DEXTestUpdateParams,
    type DEXTestListParams as DEXTestListParams,
    type DEXTestDeleteParams as DEXTestDeleteParams,
    type DEXTestGetParams as DEXTestGetParams,
  };

  export {
    Networks as Networks,
    type DeviceNetwork as DeviceNetwork,
    DeviceNetworksSinglePage as DeviceNetworksSinglePage,
    type NetworkCreateParams as NetworkCreateParams,
    type NetworkUpdateParams as NetworkUpdateParams,
    type NetworkListParams as NetworkListParams,
    type NetworkDeleteParams as NetworkDeleteParams,
    type NetworkGetParams as NetworkGetParams,
  };

  export {
    FleetStatus as FleetStatus,
    type FleetStatusGetResponse as FleetStatusGetResponse,
    type FleetStatusGetParams as FleetStatusGetParams,
  };

  export {
    Policies as Policies,
    type DevicePolicyCertificates as DevicePolicyCertificates,
    type FallbackDomain as FallbackDomain,
    type FallbackDomainPolicy as FallbackDomainPolicy,
    type SettingsPolicy as SettingsPolicy,
    type SplitTunnelExclude as SplitTunnelExclude,
    type SplitTunnelInclude as SplitTunnelInclude,
  };

  export {
    Posture as Posture,
    type CarbonblackInput as CarbonblackInput,
    type ClientCertificateInput as ClientCertificateInput,
    type CrowdstrikeInput as CrowdstrikeInput,
    type DeviceInput as DeviceInput,
    type DeviceMatch as DeviceMatch,
    type DevicePostureRule as DevicePostureRule,
    type DiskEncryptionInput as DiskEncryptionInput,
    type DomainJoinedInput as DomainJoinedInput,
    type FileInput as FileInput,
    type FirewallInput as FirewallInput,
    type IntuneInput as IntuneInput,
    type KolideInput as KolideInput,
    type OSVersionInput as OSVersionInput,
    type SentineloneInput as SentineloneInput,
    type SentineloneS2sInput as SentineloneS2sInput,
    type TaniumInput as TaniumInput,
    type UniqueClientIDInput as UniqueClientIDInput,
    type WorkspaceOneInput as WorkspaceOneInput,
    type PostureDeleteResponse as PostureDeleteResponse,
    DevicePostureRulesSinglePage as DevicePostureRulesSinglePage,
    type PostureCreateParams as PostureCreateParams,
    type PostureUpdateParams as PostureUpdateParams,
    type PostureListParams as PostureListParams,
    type PostureDeleteParams as PostureDeleteParams,
    type PostureGetParams as PostureGetParams,
  };

  export {
    Revoke as Revoke,
    type RevokeCreateResponse as RevokeCreateResponse,
    type RevokeCreateParams as RevokeCreateParams,
  };

  export {
    Settings as Settings,
    type DeviceSettings as DeviceSettings,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingListParams as SettingListParams,
    type SettingEditParams as SettingEditParams,
  };

  export {
    Unrevoke as Unrevoke,
    type UnrevokeCreateResponse as UnrevokeCreateResponse,
    type UnrevokeCreateParams as UnrevokeCreateParams,
  };

  export {
    OverrideCodes as OverrideCodes,
    type OverrideCodeListResponse as OverrideCodeListResponse,
    type OverrideCodeListParams as OverrideCodeListParams,
  };
}
