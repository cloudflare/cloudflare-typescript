// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DevicesAPI from 'cloudflare/resources/zero-trust/devices/devices';
import * as Shared from 'cloudflare/resources/shared';
import * as DEXTestsAPI from 'cloudflare/resources/zero-trust/devices/dex-tests';
import * as NetworksAPI from 'cloudflare/resources/zero-trust/devices/networks';
import * as OverrideCodesAPI from 'cloudflare/resources/zero-trust/devices/override-codes';
import * as RevokeAPI from 'cloudflare/resources/zero-trust/devices/revoke';
import * as SettingsAPI from 'cloudflare/resources/zero-trust/devices/settings';
import * as UnrevokeAPI from 'cloudflare/resources/zero-trust/devices/unrevoke';
import * as PoliciesAPI from 'cloudflare/resources/zero-trust/devices/policies/policies';
import * as PostureAPI from 'cloudflare/resources/zero-trust/devices/posture/posture';
import { SinglePage } from 'cloudflare/pagination';

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
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/${deviceId}`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
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

export interface DeviceListParams {
  account_id: string;
}

export interface DeviceGetParams {
  account_id: string;
}

export namespace Devices {
  export import Device = DevicesAPI.Device;
  export import DevicesSinglePage = DevicesAPI.DevicesSinglePage;
  export import DeviceListParams = DevicesAPI.DeviceListParams;
  export import DeviceGetParams = DevicesAPI.DeviceGetParams;
  export import DEXTests = DEXTestsAPI.DEXTests;
  export import SchemaData = DEXTestsAPI.SchemaData;
  export import SchemaHTTP = DEXTestsAPI.SchemaHTTP;
  export import UnnamedSchemaRef15fd6ef0641450fd873ffb71715170c9 = DEXTestsAPI.UnnamedSchemaRef15fd6ef0641450fd873ffb71715170c9;
  export import DEXTestDeleteResponse = DEXTestsAPI.DEXTestDeleteResponse;
  export import SchemaHTTPSSinglePage = DEXTestsAPI.SchemaHTTPSSinglePage;
  export import DEXTestCreateParams = DEXTestsAPI.DEXTestCreateParams;
  export import DEXTestUpdateParams = DEXTestsAPI.DEXTestUpdateParams;
  export import DEXTestListParams = DEXTestsAPI.DEXTestListParams;
  export import DEXTestDeleteParams = DEXTestsAPI.DEXTestDeleteParams;
  export import DEXTestGetParams = DEXTestsAPI.DEXTestGetParams;
  export import Networks = NetworksAPI.Networks;
  export import DeviceNetwork = NetworksAPI.DeviceNetwork;
  export import UnnamedSchemaRefD2b048663faf5e0cd5c90501b71171de = NetworksAPI.UnnamedSchemaRefD2b048663faf5e0cd5c90501b71171de;
  export import NetworkDeleteResponse = NetworksAPI.NetworkDeleteResponse;
  export import DeviceNetworksSinglePage = NetworksAPI.DeviceNetworksSinglePage;
  export import NetworkCreateParams = NetworksAPI.NetworkCreateParams;
  export import NetworkUpdateParams = NetworksAPI.NetworkUpdateParams;
  export import NetworkListParams = NetworksAPI.NetworkListParams;
  export import NetworkDeleteParams = NetworksAPI.NetworkDeleteParams;
  export import NetworkGetParams = NetworksAPI.NetworkGetParams;
  export import Policies = PoliciesAPI.Policies;
  export import SettingsPolicy = PoliciesAPI.SettingsPolicy;
  export import UnnamedSchemaRefF636ff9f2cb41ff4b715cf8ed8515581 = PoliciesAPI.UnnamedSchemaRefF636ff9f2cb41ff4b715cf8ed8515581;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import SettingsPoliciesSinglePage = PoliciesAPI.SettingsPoliciesSinglePage;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyListParams = PoliciesAPI.PolicyListParams;
  export import PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export import PolicyEditParams = PoliciesAPI.PolicyEditParams;
  export import PolicyGetParams = PoliciesAPI.PolicyGetParams;
  export import Posture = PostureAPI.Posture;
  export import DeviceInput = PostureAPI.DeviceInput;
  export import DeviceMatch = PostureAPI.DeviceMatch;
  export import DevicePostureRule = PostureAPI.DevicePostureRule;
  export import UnnamedSchemaRef34ef0ad73a63c3f76ed170adca181930 = PostureAPI.UnnamedSchemaRef34ef0ad73a63c3f76ed170adca181930;
  export import UnnamedSchemaRef41885dd46b9e0294254c49305a273681 = PostureAPI.UnnamedSchemaRef41885dd46b9e0294254c49305a273681;
  export import UnnamedSchemaRef9e35ef84511131488ae286ce78ac4b27 = PostureAPI.UnnamedSchemaRef9e35ef84511131488ae286ce78ac4b27;
  export import PostureDeleteResponse = PostureAPI.PostureDeleteResponse;
  export import DevicePostureRulesSinglePage = PostureAPI.DevicePostureRulesSinglePage;
  export import PostureCreateParams = PostureAPI.PostureCreateParams;
  export import PostureUpdateParams = PostureAPI.PostureUpdateParams;
  export import PostureListParams = PostureAPI.PostureListParams;
  export import PostureDeleteParams = PostureAPI.PostureDeleteParams;
  export import PostureGetParams = PostureAPI.PostureGetParams;
  export import Revoke = RevokeAPI.Revoke;
  export import RevokeCreateParams = RevokeAPI.RevokeCreateParams;
  export import Settings = SettingsAPI.Settings;
  export import DeviceSettings = SettingsAPI.DeviceSettings;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
  export import SettingListParams = SettingsAPI.SettingListParams;
  export import Unrevoke = UnrevokeAPI.Unrevoke;
  export import UnrevokeCreateParams = UnrevokeAPI.UnrevokeCreateParams;
  export import OverrideCodes = OverrideCodesAPI.OverrideCodes;
  export import OverrideCodeListResponse = OverrideCodesAPI.OverrideCodeListResponse;
  export import OverrideCodeListParams = OverrideCodesAPI.OverrideCodeListParams;
}
