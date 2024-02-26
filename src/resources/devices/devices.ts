// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DevicesAPI from 'cloudflare/resources/devices/devices';
import * as DEXTestsAPI from 'cloudflare/resources/devices/dex-tests';
import * as NetworksAPI from 'cloudflare/resources/devices/networks';
import * as OverrideCodesAPI from 'cloudflare/resources/devices/override-codes';
import * as RevokesAPI from 'cloudflare/resources/devices/revokes';
import * as SettingsAPI from 'cloudflare/resources/devices/settings';
import * as UnrevokesAPI from 'cloudflare/resources/devices/unrevokes';
import * as PoliciesAPI from 'cloudflare/resources/devices/policies/policies';
import * as PosturesAPI from 'cloudflare/resources/devices/postures/postures';

export class Devices extends APIResource {
  dexTests: DEXTestsAPI.DEXTests = new DEXTestsAPI.DEXTests(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  postures: PosturesAPI.Postures = new PosturesAPI.Postures(this._client);
  revokes: RevokesAPI.Revokes = new RevokesAPI.Revokes(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  unrevokes: UnrevokesAPI.Unrevokes = new UnrevokesAPI.Unrevokes(this._client);
  overrideCodes: OverrideCodesAPI.OverrideCodes = new OverrideCodesAPI.OverrideCodes(this._client);

  /**
   * Fetches a list of enrolled devices.
   */
  devicesListDevices(
    params: DeviceDevicesListDevicesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeviceDevicesListDevicesResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices`, options) as Core.APIPromise<{
        result: DeviceDevicesListDevicesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
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

export type DeviceDevicesListDevicesResponse =
  Array<DeviceDevicesListDevicesResponse.DeviceDevicesListDevicesResponseItem>;

export namespace DeviceDevicesListDevicesResponse {
  export interface DeviceDevicesListDevicesResponseItem {
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

    user?: DeviceDevicesListDevicesResponseItem.User;

    /**
     * The WARP client version.
     */
    version?: string;
  }

  export namespace DeviceDevicesListDevicesResponseItem {
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
}

export type DeviceGetResponse = unknown | string;

export interface DeviceDevicesListDevicesParams {
  account_id: unknown;
}

export interface DeviceGetParams {
  account_id: unknown;
}

export namespace Devices {
  export import DeviceDevicesListDevicesResponse = DevicesAPI.DeviceDevicesListDevicesResponse;
  export import DeviceGetResponse = DevicesAPI.DeviceGetResponse;
  export import DeviceDevicesListDevicesParams = DevicesAPI.DeviceDevicesListDevicesParams;
  export import DeviceGetParams = DevicesAPI.DeviceGetParams;
  export import DEXTests = DEXTestsAPI.DEXTests;
  export import DEXTestCreateResponse = DEXTestsAPI.DEXTestCreateResponse;
  export import DEXTestUpdateResponse = DEXTestsAPI.DEXTestUpdateResponse;
  export import DEXTestListResponse = DEXTestsAPI.DEXTestListResponse;
  export import DEXTestDeleteResponse = DEXTestsAPI.DEXTestDeleteResponse;
  export import DEXTestGetResponse = DEXTestsAPI.DEXTestGetResponse;
  export import DEXTestCreateParams = DEXTestsAPI.DEXTestCreateParams;
  export import DEXTestUpdateParams = DEXTestsAPI.DEXTestUpdateParams;
  export import DEXTestListParams = DEXTestsAPI.DEXTestListParams;
  export import DEXTestDeleteParams = DEXTestsAPI.DEXTestDeleteParams;
  export import DEXTestGetParams = DEXTestsAPI.DEXTestGetParams;
  export import Networks = NetworksAPI.Networks;
  export import NetworkCreateResponse = NetworksAPI.NetworkCreateResponse;
  export import NetworkUpdateResponse = NetworksAPI.NetworkUpdateResponse;
  export import NetworkListResponse = NetworksAPI.NetworkListResponse;
  export import NetworkDeleteResponse = NetworksAPI.NetworkDeleteResponse;
  export import NetworkGetResponse = NetworksAPI.NetworkGetResponse;
  export import NetworkCreateParams = NetworksAPI.NetworkCreateParams;
  export import NetworkUpdateParams = NetworksAPI.NetworkUpdateParams;
  export import NetworkListParams = NetworksAPI.NetworkListParams;
  export import NetworkDeleteParams = NetworksAPI.NetworkDeleteParams;
  export import NetworkGetParams = NetworksAPI.NetworkGetParams;
  export import Policies = PoliciesAPI.Policies;
  export import PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export import PolicyListResponse = PoliciesAPI.PolicyListResponse;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import PolicyEditResponse = PoliciesAPI.PolicyEditResponse;
  export import PolicyGetResponse = PoliciesAPI.PolicyGetResponse;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyListParams = PoliciesAPI.PolicyListParams;
  export import PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export import PolicyEditParams = PoliciesAPI.PolicyEditParams;
  export import PolicyGetParams = PoliciesAPI.PolicyGetParams;
  export import Postures = PosturesAPI.Postures;
  export import PostureCreateResponse = PosturesAPI.PostureCreateResponse;
  export import PostureUpdateResponse = PosturesAPI.PostureUpdateResponse;
  export import PostureListResponse = PosturesAPI.PostureListResponse;
  export import PostureDeleteResponse = PosturesAPI.PostureDeleteResponse;
  export import PostureGetResponse = PosturesAPI.PostureGetResponse;
  export import PostureCreateParams = PosturesAPI.PostureCreateParams;
  export import PostureUpdateParams = PosturesAPI.PostureUpdateParams;
  export import PostureListParams = PosturesAPI.PostureListParams;
  export import PostureDeleteParams = PosturesAPI.PostureDeleteParams;
  export import PostureGetParams = PosturesAPI.PostureGetParams;
  export import Revokes = RevokesAPI.Revokes;
  export import RevokeCreateResponse = RevokesAPI.RevokeCreateResponse;
  export import RevokeCreateParams = RevokesAPI.RevokeCreateParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingUpdateResponse = SettingsAPI.SettingUpdateResponse;
  export import SettingListResponse = SettingsAPI.SettingListResponse;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
  export import SettingListParams = SettingsAPI.SettingListParams;
  export import Unrevokes = UnrevokesAPI.Unrevokes;
  export import UnrevokeCreateResponse = UnrevokesAPI.UnrevokeCreateResponse;
  export import UnrevokeCreateParams = UnrevokesAPI.UnrevokeCreateParams;
  export import OverrideCodes = OverrideCodesAPI.OverrideCodes;
  export import OverrideCodeListResponse = OverrideCodesAPI.OverrideCodeListResponse;
  export import OverrideCodeListParams = OverrideCodesAPI.OverrideCodeListParams;
}
