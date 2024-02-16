// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FallbackDomainsAPI from 'cloudflare/resources/devices/policies/fallback-domains';

export class FallbackDomains extends APIResource {
  /**
   * Fetches a list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead.
   */
  devicesGetLocalDomainFallbackList(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackDomainDevicesGetLocalDomainFallbackListResponse | null> {
    return (
      this._client.get(
        `/accounts/${identifier}/devices/policy/fallback_domains`,
        options,
      ) as Core.APIPromise<{ result: FallbackDomainDevicesGetLocalDomainFallbackListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the list of domains to bypass Gateway DNS resolution from a specified
   * device settings profile. These domains will use the specified local DNS resolver
   * instead.
   */
  devicesGetLocalDomainFallbackListForADeviceSettingsPolicy(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse | null> {
    return (
      this._client.get(
        `/accounts/${identifier}/devices/policy/${uuid}/fallback_domains`,
        options,
      ) as Core.APIPromise<{
        result: FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Sets the list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead.
   */
  devicesSetLocalDomainFallbackList(
    identifier: unknown,
    body: FallbackDomainDevicesSetLocalDomainFallbackListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackDomainDevicesSetLocalDomainFallbackListResponse | null> {
    return (
      this._client.put(`/accounts/${identifier}/devices/policy/fallback_domains`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FallbackDomainDevicesSetLocalDomainFallbackListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Sets the list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead. This will only apply to the
   * specified device settings profile.
   */
  devicesSetLocalDomainFallbackListForADeviceSettingsPolicy(
    identifier: unknown,
    uuid: string,
    body: FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse | null> {
    return (
      this._client.put(`/accounts/${identifier}/devices/policy/${uuid}/fallback_domains`, {
        body,
        ...options,
      }) as Core.APIPromise<{
        result: FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type FallbackDomainDevicesGetLocalDomainFallbackListResponse =
  Array<FallbackDomainDevicesGetLocalDomainFallbackListResponse.FallbackDomainDevicesGetLocalDomainFallbackListResponseItem>;

export namespace FallbackDomainDevicesGetLocalDomainFallbackListResponse {
  export interface FallbackDomainDevicesGetLocalDomainFallbackListResponseItem {
    /**
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
  }
}

export type FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse =
  Array<FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse.FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponseItem>;

export namespace FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse {
  export interface FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponseItem {
    /**
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
  }
}

export type FallbackDomainDevicesSetLocalDomainFallbackListResponse =
  Array<FallbackDomainDevicesSetLocalDomainFallbackListResponse.FallbackDomainDevicesSetLocalDomainFallbackListResponseItem>;

export namespace FallbackDomainDevicesSetLocalDomainFallbackListResponse {
  export interface FallbackDomainDevicesSetLocalDomainFallbackListResponseItem {
    /**
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
  }
}

export type FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse =
  Array<FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse.FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponseItem>;

export namespace FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse {
  export interface FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponseItem {
    /**
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
  }
}

export type FallbackDomainDevicesSetLocalDomainFallbackListParams =
  Array<FallbackDomainDevicesSetLocalDomainFallbackListParams.Body>;

export namespace FallbackDomainDevicesSetLocalDomainFallbackListParams {
  export interface Body {
    /**
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
  }
}

export type FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyParams =
  Array<FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyParams.Body>;

export namespace FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyParams {
  export interface Body {
    /**
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
  }
}

export namespace FallbackDomains {
  export import FallbackDomainDevicesGetLocalDomainFallbackListResponse = FallbackDomainsAPI.FallbackDomainDevicesGetLocalDomainFallbackListResponse;
  export import FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse = FallbackDomainsAPI.FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse;
  export import FallbackDomainDevicesSetLocalDomainFallbackListResponse = FallbackDomainsAPI.FallbackDomainDevicesSetLocalDomainFallbackListResponse;
  export import FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse = FallbackDomainsAPI.FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse;
  export import FallbackDomainDevicesSetLocalDomainFallbackListParams = FallbackDomainsAPI.FallbackDomainDevicesSetLocalDomainFallbackListParams;
  export import FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyParams = FallbackDomainsAPI.FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyParams;
}
