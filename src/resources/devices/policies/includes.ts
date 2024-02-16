// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IncludesAPI from 'cloudflare/resources/devices/policies/includes';

export class Includes extends APIResource {
  /**
   * Fetches the list of routes included in the WARP client's tunnel.
   */
  devicesGetSplitTunnelIncludeList(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncludeDevicesGetSplitTunnelIncludeListResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/policy/include`, options) as Core.APIPromise<{
        result: IncludeDevicesGetSplitTunnelIncludeListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the list of routes included in the WARP client's tunnel for a specific
   * device settings profile.
   */
  devicesGetSplitTunnelIncludeListForADeviceSettingsPolicy(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/policy/${uuid}/include`, options) as Core.APIPromise<{
        result: IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Sets the list of routes included in the WARP client's tunnel.
   */
  devicesSetSplitTunnelIncludeList(
    identifier: unknown,
    body: IncludeDevicesSetSplitTunnelIncludeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncludeDevicesSetSplitTunnelIncludeListResponse | null> {
    return (
      this._client.put(`/accounts/${identifier}/devices/policy/include`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IncludeDevicesSetSplitTunnelIncludeListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Sets the list of routes included in the WARP client's tunnel for a specific
   * device settings profile.
   */
  devicesSetSplitTunnelIncludeListForADeviceSettingsPolicy(
    identifier: unknown,
    uuid: string,
    body: IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse | null> {
    return (
      this._client.put(`/accounts/${identifier}/devices/policy/${uuid}/include`, {
        body,
        ...options,
      }) as Core.APIPromise<{
        result: IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type IncludeDevicesGetSplitTunnelIncludeListResponse =
  Array<IncludeDevicesGetSplitTunnelIncludeListResponse.IncludeDevicesGetSplitTunnelIncludeListResponseItem>;

export namespace IncludeDevicesGetSplitTunnelIncludeListResponse {
  export interface IncludeDevicesGetSplitTunnelIncludeListResponseItem {
    /**
     * The address in CIDR format to include in the tunnel. If address is present, host
     * must not be present.
     */
    address: string;

    /**
     * A description of the split tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to include in the tunnel. If host is present, address must not
     * be present.
     */
    host?: string;
  }
}

export type IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse =
  Array<IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse.IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponseItem>;

export namespace IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse {
  export interface IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponseItem {
    /**
     * The address in CIDR format to include in the tunnel. If address is present, host
     * must not be present.
     */
    address: string;

    /**
     * A description of the split tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to include in the tunnel. If host is present, address must not
     * be present.
     */
    host?: string;
  }
}

export type IncludeDevicesSetSplitTunnelIncludeListResponse =
  Array<IncludeDevicesSetSplitTunnelIncludeListResponse.IncludeDevicesSetSplitTunnelIncludeListResponseItem>;

export namespace IncludeDevicesSetSplitTunnelIncludeListResponse {
  export interface IncludeDevicesSetSplitTunnelIncludeListResponseItem {
    /**
     * The address in CIDR format to include in the tunnel. If address is present, host
     * must not be present.
     */
    address: string;

    /**
     * A description of the split tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to include in the tunnel. If host is present, address must not
     * be present.
     */
    host?: string;
  }
}

export type IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse =
  Array<IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse.IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponseItem>;

export namespace IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse {
  export interface IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponseItem {
    /**
     * The address in CIDR format to include in the tunnel. If address is present, host
     * must not be present.
     */
    address: string;

    /**
     * A description of the split tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to include in the tunnel. If host is present, address must not
     * be present.
     */
    host?: string;
  }
}

export type IncludeDevicesSetSplitTunnelIncludeListParams =
  Array<IncludeDevicesSetSplitTunnelIncludeListParams.Body>;

export namespace IncludeDevicesSetSplitTunnelIncludeListParams {
  export interface Body {
    /**
     * The address in CIDR format to include in the tunnel. If address is present, host
     * must not be present.
     */
    address: string;

    /**
     * A description of the split tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to include in the tunnel. If host is present, address must not
     * be present.
     */
    host?: string;
  }
}

export type IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyParams =
  Array<IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyParams.Body>;

export namespace IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyParams {
  export interface Body {
    /**
     * The address in CIDR format to include in the tunnel. If address is present, host
     * must not be present.
     */
    address: string;

    /**
     * A description of the split tunnel item, displayed in the client UI.
     */
    description: string;

    /**
     * The domain name to include in the tunnel. If host is present, address must not
     * be present.
     */
    host?: string;
  }
}

export namespace Includes {
  export import IncludeDevicesGetSplitTunnelIncludeListResponse = IncludesAPI.IncludeDevicesGetSplitTunnelIncludeListResponse;
  export import IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse = IncludesAPI.IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse;
  export import IncludeDevicesSetSplitTunnelIncludeListResponse = IncludesAPI.IncludeDevicesSetSplitTunnelIncludeListResponse;
  export import IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse = IncludesAPI.IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse;
  export import IncludeDevicesSetSplitTunnelIncludeListParams = IncludesAPI.IncludeDevicesSetSplitTunnelIncludeListParams;
  export import IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyParams = IncludesAPI.IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyParams;
}
