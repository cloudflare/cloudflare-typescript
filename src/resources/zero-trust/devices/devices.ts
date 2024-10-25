// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as DevicesAPI from './devices';
import * as DEXTestsAPI from './dex-tests';
import * as NetworksAPI from './networks';
import * as OverrideCodesAPI from './override-codes';
import * as RevokeAPI from './revoke';
import * as SettingsAPI from './settings';
import * as UnrevokeAPI from './unrevoke';
import * as PoliciesAPI from './policies/policies';
import * as PostureAPI from './posture/posture';
import { SinglePage } from '../../../pagination';

export class Devices extends APIResource {
  dexTests: DEXTestsAPI.DEXTests = new DEXTestsAPI.DEXTests(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
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

export type DeviceGetResponse = unknown | string;

export interface DeviceListParams {
  account_id: string;
}

export interface DeviceGetParams {
  account_id: string;
}

export namespace Devices {
  export type Device = DevicesAPI.Device;
  export type DeviceGetResponse = DevicesAPI.DeviceGetResponse;
  export import DevicesSinglePage = DevicesAPI.DevicesSinglePage;
  export type DeviceListParams = DevicesAPI.DeviceListParams;
  export type DeviceGetParams = DevicesAPI.DeviceGetParams;
  export import DEXTests = DEXTestsAPI.DEXTests;
  export type DEXTest = DEXTestsAPI.DEXTest;
  export type SchemaData = DEXTestsAPI.SchemaData;
  export type SchemaHTTP = DEXTestsAPI.SchemaHTTP;
  export type DEXTestDeleteResponse = DEXTestsAPI.DEXTestDeleteResponse;
  export import SchemaHTTPSSinglePage = DEXTestsAPI.SchemaHTTPSSinglePage;
  export type DEXTestCreateParams = DEXTestsAPI.DEXTestCreateParams;
  export type DEXTestUpdateParams = DEXTestsAPI.DEXTestUpdateParams;
  export type DEXTestListParams = DEXTestsAPI.DEXTestListParams;
  export type DEXTestDeleteParams = DEXTestsAPI.DEXTestDeleteParams;
  export type DEXTestGetParams = DEXTestsAPI.DEXTestGetParams;
  export import Networks = NetworksAPI.Networks;
  export type DeviceNetwork = NetworksAPI.DeviceNetwork;
  export type NetworkDeleteResponse = NetworksAPI.NetworkDeleteResponse;
  export import DeviceNetworksSinglePage = NetworksAPI.DeviceNetworksSinglePage;
  export type NetworkCreateParams = NetworksAPI.NetworkCreateParams;
  export type NetworkUpdateParams = NetworksAPI.NetworkUpdateParams;
  export type NetworkListParams = NetworksAPI.NetworkListParams;
  export type NetworkDeleteParams = NetworksAPI.NetworkDeleteParams;
  export type NetworkGetParams = NetworksAPI.NetworkGetParams;
  export import Policies = PoliciesAPI.Policies;
  export type SettingsPolicy = PoliciesAPI.SettingsPolicy;
  export type PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import SettingsPoliciesSinglePage = PoliciesAPI.SettingsPoliciesSinglePage;
  export type PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export type PolicyListParams = PoliciesAPI.PolicyListParams;
  export type PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export type PolicyEditParams = PoliciesAPI.PolicyEditParams;
  export type PolicyGetParams = PoliciesAPI.PolicyGetParams;
  export import Posture = PostureAPI.Posture;
  export type CarbonblackInput = PostureAPI.CarbonblackInput;
  export type ClientCertificateInput = PostureAPI.ClientCertificateInput;
  export type CrowdstrikeInput = PostureAPI.CrowdstrikeInput;
  export type DeviceInput = PostureAPI.DeviceInput;
  export type DeviceMatch = PostureAPI.DeviceMatch;
  export type DevicePostureRule = PostureAPI.DevicePostureRule;
  export type DiskEncryptionInput = PostureAPI.DiskEncryptionInput;
  export type DomainJoinedInput = PostureAPI.DomainJoinedInput;
  export type FileInput = PostureAPI.FileInput;
  export type FirewallInput = PostureAPI.FirewallInput;
  export type IntuneInput = PostureAPI.IntuneInput;
  export type KolideInput = PostureAPI.KolideInput;
  export type OSVersionInput = PostureAPI.OSVersionInput;
  export type SentineloneInput = PostureAPI.SentineloneInput;
  export type SentineloneS2sInput = PostureAPI.SentineloneS2sInput;
  export type TaniumInput = PostureAPI.TaniumInput;
  export type UniqueClientIDInput = PostureAPI.UniqueClientIDInput;
  export type WorkspaceOneInput = PostureAPI.WorkspaceOneInput;
  export type PostureDeleteResponse = PostureAPI.PostureDeleteResponse;
  export import DevicePostureRulesSinglePage = PostureAPI.DevicePostureRulesSinglePage;
  export type PostureCreateParams = PostureAPI.PostureCreateParams;
  export type PostureUpdateParams = PostureAPI.PostureUpdateParams;
  export type PostureListParams = PostureAPI.PostureListParams;
  export type PostureDeleteParams = PostureAPI.PostureDeleteParams;
  export type PostureGetParams = PostureAPI.PostureGetParams;
  export import Revoke = RevokeAPI.Revoke;
  export type RevokeCreateResponse = RevokeAPI.RevokeCreateResponse;
  export type RevokeCreateParams = RevokeAPI.RevokeCreateParams;
  export import Settings = SettingsAPI.Settings;
  export type DeviceSettings = SettingsAPI.DeviceSettings;
  export type SettingUpdateParams = SettingsAPI.SettingUpdateParams;
  export type SettingListParams = SettingsAPI.SettingListParams;
  export type SettingEditParams = SettingsAPI.SettingEditParams;
  export import Unrevoke = UnrevokeAPI.Unrevoke;
  export type UnrevokeCreateResponse = UnrevokeAPI.UnrevokeCreateResponse;
  export type UnrevokeCreateParams = UnrevokeAPI.UnrevokeCreateParams;
  export import OverrideCodes = OverrideCodesAPI.OverrideCodes;
  export type OverrideCodeListResponse = OverrideCodesAPI.OverrideCodeListResponse;
  export type OverrideCodeListParams = OverrideCodesAPI.OverrideCodeListParams;
}
