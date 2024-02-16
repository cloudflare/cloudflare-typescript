// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PoliciesAPI from 'cloudflare/resources/devices/policies/policies';
import * as ExcludesAPI from 'cloudflare/resources/devices/policies/excludes';
import * as FallbackDomainsAPI from 'cloudflare/resources/devices/policies/fallback-domains';
import * as IncludesAPI from 'cloudflare/resources/devices/policies/includes';

export class Policies extends APIResource {
  excludes: ExcludesAPI.Excludes = new ExcludesAPI.Excludes(this._client);
  fallbackDomains: FallbackDomainsAPI.FallbackDomains = new FallbackDomainsAPI.FallbackDomains(this._client);
  includes: IncludesAPI.Includes = new IncludesAPI.Includes(this._client);

  /**
   * Updates a configured device settings profile.
   */
  update(
    identifier: unknown,
    uuid: string,
    body: PolicyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyUpdateResponse | null> {
    return (
      this._client.patch(`/accounts/${identifier}/devices/policy/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PolicyUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a device settings profile and fetches a list of the remaining profiles
   * for an account.
   */
  delete(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyDeleteResponse | null> {
    return (
      this._client.delete(`/accounts/${identifier}/devices/policy/${uuid}`, options) as Core.APIPromise<{
        result: PolicyDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates a device settings profile to be applied to certain devices matching the
   * criteria.
   */
  devicesCreateDeviceSettingsPolicy(
    identifier: unknown,
    body: PolicyDevicesCreateDeviceSettingsPolicyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyDevicesCreateDeviceSettingsPolicyResponse | null> {
    return (
      this._client.post(`/accounts/${identifier}/devices/policy`, { body, ...options }) as Core.APIPromise<{
        result: PolicyDevicesCreateDeviceSettingsPolicyResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the default device settings profile for an account.
   */
  devicesGetDefaultDeviceSettingsPolicy(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyDevicesGetDefaultDeviceSettingsPolicyResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/policy`, options) as Core.APIPromise<{
        result: PolicyDevicesGetDefaultDeviceSettingsPolicyResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a list of the device settings profiles for an account.
   */
  devicesListDeviceSettingsPolicies(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyDevicesListDeviceSettingsPoliciesResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/policies`, options) as Core.APIPromise<{
        result: PolicyDevicesListDeviceSettingsPoliciesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the default device settings profile for an account.
   */
  devicesUpdateDefaultDeviceSettingsPolicy(
    identifier: unknown,
    body: PolicyDevicesUpdateDefaultDeviceSettingsPolicyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyDevicesUpdateDefaultDeviceSettingsPolicyResponse | null> {
    return (
      this._client.patch(`/accounts/${identifier}/devices/policy`, { body, ...options }) as Core.APIPromise<{
        result: PolicyDevicesUpdateDefaultDeviceSettingsPolicyResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a device settings profile by ID.
   */
  get(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyGetResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/policy/${uuid}`, options) as Core.APIPromise<{
        result: PolicyGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PolicyUpdateResponse = Array<unknown>;

export type PolicyDeleteResponse = Array<PolicyDeleteResponse.PolicyDeleteResponseItem>;

export namespace PolicyDeleteResponse {
  export interface PolicyDeleteResponseItem {
    /**
     * Whether to allow the user to switch WARP between modes.
     */
    allow_mode_switch?: boolean;

    /**
     * Whether to receive update notifications when a new version of the client is
     * available.
     */
    allow_updates?: boolean;

    /**
     * Whether to allow devices to leave the organization.
     */
    allowed_to_leave?: boolean;

    /**
     * The amount of time in minutes to reconnect after having been disabled.
     */
    auto_connect?: number;

    /**
     * Turn on the captive portal after the specified amount of time.
     */
    captive_portal?: number;

    /**
     * Whether the policy is the default policy for an account.
     */
    default?: boolean;

    /**
     * A description of the policy.
     */
    description?: string;

    /**
     * If the `dns_server` field of a fallback domain is not present, the client will
     * fall back to a best guess of the default/system DNS resolvers unless this policy
     * option is set to `true`.
     */
    disable_auto_fallback?: boolean;

    /**
     * Whether the policy will be applied to matching devices.
     */
    enabled?: boolean;

    exclude?: Array<PolicyDeleteResponseItem.Exclude>;

    /**
     * Whether to add Microsoft IPs to Split Tunnel exclusions.
     */
    exclude_office_ips?: boolean;

    fallback_domains?: Array<PolicyDeleteResponseItem.FallbackDomain>;

    gateway_unique_id?: string;

    include?: Array<PolicyDeleteResponseItem.Include>;

    /**
     * The amount of time in minutes a user is allowed access to their LAN. A value of
     * 0 will allow LAN access until the next WARP reconnection, such as a reboot or a
     * laptop waking from sleep. Note that this field is omitted from the response if
     * null or unset.
     */
    lan_allow_minutes?: number;

    /**
     * The size of the subnet for the local access network. Note that this field is
     * omitted from the response if null or unset.
     */
    lan_allow_subnet_size?: number;

    /**
     * The wirefilter expression to match devices.
     */
    match?: string;

    /**
     * The name of the device settings profile.
     */
    name?: string;

    /**
     * Device ID.
     */
    policy_id?: string;

    /**
     * The precedence of the policy. Lower values indicate higher precedence. Policies
     * will be evaluated in ascending order of this field.
     */
    precedence?: number;

    service_mode_v2?: PolicyDeleteResponseItem.ServiceModeV2;

    /**
     * The URL to launch when the Send Feedback button is clicked.
     */
    support_url?: string;

    /**
     * Whether to allow the user to turn off the WARP switch and disconnect the client.
     */
    switch_locked?: boolean;
  }

  export namespace PolicyDeleteResponseItem {
    export interface Exclude {
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

    export interface FallbackDomain {
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

    export interface Include {
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

    export interface ServiceModeV2 {
      /**
       * The mode to run the WARP client under.
       */
      mode?: string;

      /**
       * The port number when used with proxy mode.
       */
      port?: number;
    }
  }
}

export type PolicyDevicesCreateDeviceSettingsPolicyResponse = Array<unknown>;

export type PolicyDevicesGetDefaultDeviceSettingsPolicyResponse = Array<unknown>;

export type PolicyDevicesListDeviceSettingsPoliciesResponse =
  Array<PolicyDevicesListDeviceSettingsPoliciesResponse.PolicyDevicesListDeviceSettingsPoliciesResponseItem>;

export namespace PolicyDevicesListDeviceSettingsPoliciesResponse {
  export interface PolicyDevicesListDeviceSettingsPoliciesResponseItem {
    /**
     * Whether to allow the user to switch WARP between modes.
     */
    allow_mode_switch?: boolean;

    /**
     * Whether to receive update notifications when a new version of the client is
     * available.
     */
    allow_updates?: boolean;

    /**
     * Whether to allow devices to leave the organization.
     */
    allowed_to_leave?: boolean;

    /**
     * The amount of time in minutes to reconnect after having been disabled.
     */
    auto_connect?: number;

    /**
     * Turn on the captive portal after the specified amount of time.
     */
    captive_portal?: number;

    /**
     * Whether the policy is the default policy for an account.
     */
    default?: boolean;

    /**
     * A description of the policy.
     */
    description?: string;

    /**
     * If the `dns_server` field of a fallback domain is not present, the client will
     * fall back to a best guess of the default/system DNS resolvers unless this policy
     * option is set to `true`.
     */
    disable_auto_fallback?: boolean;

    /**
     * Whether the policy will be applied to matching devices.
     */
    enabled?: boolean;

    exclude?: Array<PolicyDevicesListDeviceSettingsPoliciesResponseItem.Exclude>;

    /**
     * Whether to add Microsoft IPs to Split Tunnel exclusions.
     */
    exclude_office_ips?: boolean;

    fallback_domains?: Array<PolicyDevicesListDeviceSettingsPoliciesResponseItem.FallbackDomain>;

    gateway_unique_id?: string;

    include?: Array<PolicyDevicesListDeviceSettingsPoliciesResponseItem.Include>;

    /**
     * The amount of time in minutes a user is allowed access to their LAN. A value of
     * 0 will allow LAN access until the next WARP reconnection, such as a reboot or a
     * laptop waking from sleep. Note that this field is omitted from the response if
     * null or unset.
     */
    lan_allow_minutes?: number;

    /**
     * The size of the subnet for the local access network. Note that this field is
     * omitted from the response if null or unset.
     */
    lan_allow_subnet_size?: number;

    /**
     * The wirefilter expression to match devices.
     */
    match?: string;

    /**
     * The name of the device settings profile.
     */
    name?: string;

    /**
     * Device ID.
     */
    policy_id?: string;

    /**
     * The precedence of the policy. Lower values indicate higher precedence. Policies
     * will be evaluated in ascending order of this field.
     */
    precedence?: number;

    service_mode_v2?: PolicyDevicesListDeviceSettingsPoliciesResponseItem.ServiceModeV2;

    /**
     * The URL to launch when the Send Feedback button is clicked.
     */
    support_url?: string;

    /**
     * Whether to allow the user to turn off the WARP switch and disconnect the client.
     */
    switch_locked?: boolean;
  }

  export namespace PolicyDevicesListDeviceSettingsPoliciesResponseItem {
    export interface Exclude {
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

    export interface FallbackDomain {
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

    export interface Include {
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

    export interface ServiceModeV2 {
      /**
       * The mode to run the WARP client under.
       */
      mode?: string;

      /**
       * The port number when used with proxy mode.
       */
      port?: number;
    }
  }
}

export type PolicyDevicesUpdateDefaultDeviceSettingsPolicyResponse = Array<unknown>;

export type PolicyGetResponse = Array<unknown>;

export interface PolicyUpdateParams {
  /**
   * Whether to allow the user to switch WARP between modes.
   */
  allow_mode_switch?: boolean;

  /**
   * Whether to receive update notifications when a new version of the client is
   * available.
   */
  allow_updates?: boolean;

  /**
   * Whether to allow devices to leave the organization.
   */
  allowed_to_leave?: boolean;

  /**
   * The amount of time in minutes to reconnect after having been disabled.
   */
  auto_connect?: number;

  /**
   * Turn on the captive portal after the specified amount of time.
   */
  captive_portal?: number;

  /**
   * A description of the policy.
   */
  description?: string;

  /**
   * If the `dns_server` field of a fallback domain is not present, the client will
   * fall back to a best guess of the default/system DNS resolvers unless this policy
   * option is set to `true`.
   */
  disable_auto_fallback?: boolean;

  /**
   * Whether the policy will be applied to matching devices.
   */
  enabled?: boolean;

  /**
   * Whether to add Microsoft IPs to Split Tunnel exclusions.
   */
  exclude_office_ips?: boolean;

  /**
   * The wirefilter expression to match devices.
   */
  match?: string;

  /**
   * The name of the device settings profile.
   */
  name?: string;

  /**
   * The precedence of the policy. Lower values indicate higher precedence. Policies
   * will be evaluated in ascending order of this field.
   */
  precedence?: number;

  service_mode_v2?: PolicyUpdateParams.ServiceModeV2;

  /**
   * The URL to launch when the Send Feedback button is clicked.
   */
  support_url?: string;

  /**
   * Whether to allow the user to turn off the WARP switch and disconnect the client.
   */
  switch_locked?: boolean;
}

export namespace PolicyUpdateParams {
  export interface ServiceModeV2 {
    /**
     * The mode to run the WARP client under.
     */
    mode?: string;

    /**
     * The port number when used with proxy mode.
     */
    port?: number;
  }
}

export interface PolicyDevicesCreateDeviceSettingsPolicyParams {
  /**
   * The wirefilter expression to match devices.
   */
  match: string;

  /**
   * The name of the device settings profile.
   */
  name: string;

  /**
   * The precedence of the policy. Lower values indicate higher precedence. Policies
   * will be evaluated in ascending order of this field.
   */
  precedence: number;

  /**
   * Whether to allow the user to switch WARP between modes.
   */
  allow_mode_switch?: boolean;

  /**
   * Whether to receive update notifications when a new version of the client is
   * available.
   */
  allow_updates?: boolean;

  /**
   * Whether to allow devices to leave the organization.
   */
  allowed_to_leave?: boolean;

  /**
   * The amount of time in minutes to reconnect after having been disabled.
   */
  auto_connect?: number;

  /**
   * Turn on the captive portal after the specified amount of time.
   */
  captive_portal?: number;

  /**
   * A description of the policy.
   */
  description?: string;

  /**
   * If the `dns_server` field of a fallback domain is not present, the client will
   * fall back to a best guess of the default/system DNS resolvers unless this policy
   * option is set to `true`.
   */
  disable_auto_fallback?: boolean;

  /**
   * Whether the policy will be applied to matching devices.
   */
  enabled?: boolean;

  /**
   * Whether to add Microsoft IPs to Split Tunnel exclusions.
   */
  exclude_office_ips?: boolean;

  /**
   * The amount of time in minutes a user is allowed access to their LAN. A value of
   * 0 will allow LAN access until the next WARP reconnection, such as a reboot or a
   * laptop waking from sleep. Note that this field is omitted from the response if
   * null or unset.
   */
  lan_allow_minutes?: number;

  /**
   * The size of the subnet for the local access network. Note that this field is
   * omitted from the response if null or unset.
   */
  lan_allow_subnet_size?: number;

  service_mode_v2?: PolicyDevicesCreateDeviceSettingsPolicyParams.ServiceModeV2;

  /**
   * The URL to launch when the Send Feedback button is clicked.
   */
  support_url?: string;

  /**
   * Whether to allow the user to turn off the WARP switch and disconnect the client.
   */
  switch_locked?: boolean;
}

export namespace PolicyDevicesCreateDeviceSettingsPolicyParams {
  export interface ServiceModeV2 {
    /**
     * The mode to run the WARP client under.
     */
    mode?: string;

    /**
     * The port number when used with proxy mode.
     */
    port?: number;
  }
}

export interface PolicyDevicesUpdateDefaultDeviceSettingsPolicyParams {
  /**
   * Whether to allow the user to switch WARP between modes.
   */
  allow_mode_switch?: boolean;

  /**
   * Whether to receive update notifications when a new version of the client is
   * available.
   */
  allow_updates?: boolean;

  /**
   * Whether to allow devices to leave the organization.
   */
  allowed_to_leave?: boolean;

  /**
   * The amount of time in minutes to reconnect after having been disabled.
   */
  auto_connect?: number;

  /**
   * Turn on the captive portal after the specified amount of time.
   */
  captive_portal?: number;

  /**
   * If the `dns_server` field of a fallback domain is not present, the client will
   * fall back to a best guess of the default/system DNS resolvers unless this policy
   * option is set to `true`.
   */
  disable_auto_fallback?: boolean;

  /**
   * Whether to add Microsoft IPs to Split Tunnel exclusions.
   */
  exclude_office_ips?: boolean;

  service_mode_v2?: PolicyDevicesUpdateDefaultDeviceSettingsPolicyParams.ServiceModeV2;

  /**
   * The URL to launch when the Send Feedback button is clicked.
   */
  support_url?: string;

  /**
   * Whether to allow the user to turn off the WARP switch and disconnect the client.
   */
  switch_locked?: boolean;
}

export namespace PolicyDevicesUpdateDefaultDeviceSettingsPolicyParams {
  export interface ServiceModeV2 {
    /**
     * The mode to run the WARP client under.
     */
    mode?: string;

    /**
     * The port number when used with proxy mode.
     */
    port?: number;
  }
}

export namespace Policies {
  export import PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import PolicyDevicesCreateDeviceSettingsPolicyResponse = PoliciesAPI.PolicyDevicesCreateDeviceSettingsPolicyResponse;
  export import PolicyDevicesGetDefaultDeviceSettingsPolicyResponse = PoliciesAPI.PolicyDevicesGetDefaultDeviceSettingsPolicyResponse;
  export import PolicyDevicesListDeviceSettingsPoliciesResponse = PoliciesAPI.PolicyDevicesListDeviceSettingsPoliciesResponse;
  export import PolicyDevicesUpdateDefaultDeviceSettingsPolicyResponse = PoliciesAPI.PolicyDevicesUpdateDefaultDeviceSettingsPolicyResponse;
  export import PolicyGetResponse = PoliciesAPI.PolicyGetResponse;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export import PolicyDevicesCreateDeviceSettingsPolicyParams = PoliciesAPI.PolicyDevicesCreateDeviceSettingsPolicyParams;
  export import PolicyDevicesUpdateDefaultDeviceSettingsPolicyParams = PoliciesAPI.PolicyDevicesUpdateDefaultDeviceSettingsPolicyParams;
  export import Excludes = ExcludesAPI.Excludes;
  export import ExcludeDevicesGetSplitTunnelExcludeListResponse = ExcludesAPI.ExcludeDevicesGetSplitTunnelExcludeListResponse;
  export import ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse = ExcludesAPI.ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse;
  export import ExcludeDevicesSetSplitTunnelExcludeListResponse = ExcludesAPI.ExcludeDevicesSetSplitTunnelExcludeListResponse;
  export import ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse = ExcludesAPI.ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse;
  export import ExcludeDevicesSetSplitTunnelExcludeListParams = ExcludesAPI.ExcludeDevicesSetSplitTunnelExcludeListParams;
  export import ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyParams = ExcludesAPI.ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyParams;
  export import FallbackDomains = FallbackDomainsAPI.FallbackDomains;
  export import FallbackDomainDevicesGetLocalDomainFallbackListResponse = FallbackDomainsAPI.FallbackDomainDevicesGetLocalDomainFallbackListResponse;
  export import FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse = FallbackDomainsAPI.FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse;
  export import FallbackDomainDevicesSetLocalDomainFallbackListResponse = FallbackDomainsAPI.FallbackDomainDevicesSetLocalDomainFallbackListResponse;
  export import FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse = FallbackDomainsAPI.FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse;
  export import FallbackDomainDevicesSetLocalDomainFallbackListParams = FallbackDomainsAPI.FallbackDomainDevicesSetLocalDomainFallbackListParams;
  export import FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyParams = FallbackDomainsAPI.FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyParams;
  export import Includes = IncludesAPI.Includes;
  export import IncludeDevicesGetSplitTunnelIncludeListResponse = IncludesAPI.IncludeDevicesGetSplitTunnelIncludeListResponse;
  export import IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse = IncludesAPI.IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse;
  export import IncludeDevicesSetSplitTunnelIncludeListResponse = IncludesAPI.IncludeDevicesSetSplitTunnelIncludeListResponse;
  export import IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse = IncludesAPI.IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse;
  export import IncludeDevicesSetSplitTunnelIncludeListParams = IncludesAPI.IncludeDevicesSetSplitTunnelIncludeListParams;
  export import IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyParams = IncludesAPI.IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyParams;
}
