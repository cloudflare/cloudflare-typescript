// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ExcludesAPI from 'cloudflare/resources/devices/policies/excludes';

export class Excludes extends APIResource {
  /**
   * Fetches the list of routes excluded from the WARP client's tunnel.
   */
  devicesGetSplitTunnelExcludeList(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExcludeDevicesGetSplitTunnelExcludeListResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/policy/exclude`, options) as Core.APIPromise<{
        result: ExcludeDevicesGetSplitTunnelExcludeListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the list of routes excluded from the WARP client's tunnel for a specific
   * device settings profile.
   */
  devicesGetSplitTunnelExcludeListForADeviceSettingsPolicy(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/policy/${uuid}/exclude`, options) as Core.APIPromise<{
        result: ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Sets the list of routes excluded from the WARP client's tunnel.
   */
  devicesSetSplitTunnelExcludeList(
    identifier: unknown,
    body: ExcludeDevicesSetSplitTunnelExcludeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExcludeDevicesSetSplitTunnelExcludeListResponse | null> {
    return (
      this._client.put(`/accounts/${identifier}/devices/policy/exclude`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ExcludeDevicesSetSplitTunnelExcludeListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Sets the list of routes excluded from the WARP client's tunnel for a specific
   * device settings profile.
   */
  devicesSetSplitTunnelExcludeListForADeviceSettingsPolicy(
    identifier: unknown,
    uuid: string,
    body: ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse | null> {
    return (
      this._client.put(`/accounts/${identifier}/devices/policy/${uuid}/exclude`, {
        body,
        ...options,
      }) as Core.APIPromise<{
        result: ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ExcludeDevicesGetSplitTunnelExcludeListResponse =
  Array<ExcludeDevicesGetSplitTunnelExcludeListResponse.ExcludeDevicesGetSplitTunnelExcludeListResponseItem>;

export namespace ExcludeDevicesGetSplitTunnelExcludeListResponse {
  export interface ExcludeDevicesGetSplitTunnelExcludeListResponseItem {
    /**
     * The address in CIDR format to exclude from the tunnel. If `address` is present,
     * `host` must not be present.
     */
    address: string;

    /**
     * A description of the Split Tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to exclude from the tunnel. If `host` is present, `address` must
     * not be present.
     */
    host?: string;
  }
}

export type ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse =
  Array<ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse.ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponseItem>;

export namespace ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse {
  export interface ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponseItem {
    /**
     * The address in CIDR format to exclude from the tunnel. If `address` is present,
     * `host` must not be present.
     */
    address: string;

    /**
     * A description of the Split Tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to exclude from the tunnel. If `host` is present, `address` must
     * not be present.
     */
    host?: string;
  }
}

export type ExcludeDevicesSetSplitTunnelExcludeListResponse =
  Array<ExcludeDevicesSetSplitTunnelExcludeListResponse.ExcludeDevicesSetSplitTunnelExcludeListResponseItem>;

export namespace ExcludeDevicesSetSplitTunnelExcludeListResponse {
  export interface ExcludeDevicesSetSplitTunnelExcludeListResponseItem {
    /**
     * The address in CIDR format to exclude from the tunnel. If `address` is present,
     * `host` must not be present.
     */
    address: string;

    /**
     * A description of the Split Tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to exclude from the tunnel. If `host` is present, `address` must
     * not be present.
     */
    host?: string;
  }
}

export type ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse =
  Array<ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse.ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponseItem>;

export namespace ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse {
  export interface ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponseItem {
    /**
     * The address in CIDR format to exclude from the tunnel. If `address` is present,
     * `host` must not be present.
     */
    address: string;

    /**
     * A description of the Split Tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to exclude from the tunnel. If `host` is present, `address` must
     * not be present.
     */
    host?: string;
  }
}

export type ExcludeDevicesSetSplitTunnelExcludeListParams =
  Array<ExcludeDevicesSetSplitTunnelExcludeListParams.Body>;

export namespace ExcludeDevicesSetSplitTunnelExcludeListParams {
  export interface Body {
    /**
     * The address in CIDR format to exclude from the tunnel. If `address` is present,
     * `host` must not be present.
     */
    address: string;

    /**
     * A description of the Split Tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to exclude from the tunnel. If `host` is present, `address` must
     * not be present.
     */
    host?: string;
  }
}

export type ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyParams =
  Array<ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyParams.Body>;

export namespace ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyParams {
  export interface Body {
    /**
     * The address in CIDR format to exclude from the tunnel. If `address` is present,
     * `host` must not be present.
     */
    address: string;

    /**
     * A description of the Split Tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to exclude from the tunnel. If `host` is present, `address` must
     * not be present.
     */
    host?: string;
  }
}

export namespace Excludes {
  export import ExcludeDevicesGetSplitTunnelExcludeListResponse = ExcludesAPI.ExcludeDevicesGetSplitTunnelExcludeListResponse;
  export import ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse = ExcludesAPI.ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse;
  export import ExcludeDevicesSetSplitTunnelExcludeListResponse = ExcludesAPI.ExcludeDevicesSetSplitTunnelExcludeListResponse;
  export import ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse = ExcludesAPI.ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse;
  export import ExcludeDevicesSetSplitTunnelExcludeListParams = ExcludesAPI.ExcludeDevicesSetSplitTunnelExcludeListParams;
  export import ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyParams = ExcludesAPI.ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyParams;
}
