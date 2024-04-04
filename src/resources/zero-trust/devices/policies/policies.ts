// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PoliciesAPI from 'cloudflare/resources/zero-trust/devices/policies/policies';
import * as DefaultPolicyAPI from 'cloudflare/resources/zero-trust/devices/policies/default-policy';
import * as ExcludesAPI from 'cloudflare/resources/zero-trust/devices/policies/excludes';
import * as FallbackDomainsAPI from 'cloudflare/resources/zero-trust/devices/policies/fallback-domains';
import * as IncludesAPI from 'cloudflare/resources/zero-trust/devices/policies/includes';
import { SinglePage } from 'cloudflare/pagination';

export class Policies extends APIResource {
  defaultPolicy: DefaultPolicyAPI.DefaultPolicy = new DefaultPolicyAPI.DefaultPolicy(this._client);
  excludes: ExcludesAPI.Excludes = new ExcludesAPI.Excludes(this._client);
  fallbackDomains: FallbackDomainsAPI.FallbackDomains = new FallbackDomainsAPI.FallbackDomains(this._client);
  includes: IncludesAPI.Includes = new IncludesAPI.Includes(this._client);

  /**
   * Creates a device settings profile to be applied to certain devices matching the
   * criteria.
   */
  create(
    params: PolicyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DevicesDeviceSettingsPolicy | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/devices/policy`, { body, ...options }) as Core.APIPromise<{
        result: DevicesDeviceSettingsPolicy | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a list of the device settings profiles for an account.
   */
  list(
    params: PolicyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DevicesDeviceSettingsPoliciesSinglePage, DevicesDeviceSettingsPolicy> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/policies`,
      DevicesDeviceSettingsPoliciesSinglePage,
      options,
    );
  }

  /**
   * Deletes a device settings profile and fetches a list of the remaining profiles
   * for an account.
   */
  delete(
    policyId: string,
    params: PolicyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyDeleteResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/devices/policy/${policyId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: PolicyDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured device settings profile.
   */
  edit(
    policyId: string,
    params: PolicyEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DevicesDeviceSettingsPolicy | null> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/devices/policy/${policyId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DevicesDeviceSettingsPolicy | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a device settings profile by ID.
   */
  get(
    policyId: string,
    params: PolicyGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DevicesDeviceSettingsPolicy | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/policy/${policyId}`, options) as Core.APIPromise<{
        result: DevicesDeviceSettingsPolicy | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DevicesDeviceSettingsPoliciesSinglePage extends SinglePage<DevicesDeviceSettingsPolicy> {}

export interface DevicesDeviceSettingsPolicy {
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

  exclude?: Array<ExcludesAPI.DevicesSplitTunnel>;

  /**
   * Whether to add Microsoft IPs to Split Tunnel exclusions.
   */
  exclude_office_ips?: boolean;

  fallback_domains?: Array<FallbackDomainsAPI.DevicesFallbackDomain>;

  gateway_unique_id?: string;

  include?: Array<IncludesAPI.DevicesSplitTunnelInclude>;

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

  service_mode_v2?: DevicesDeviceSettingsPolicy.ServiceModeV2;

  /**
   * The URL to launch when the Send Feedback button is clicked.
   */
  support_url?: string;

  /**
   * Whether to allow the user to turn off the WARP switch and disconnect the client.
   */
  switch_locked?: boolean;
}

export namespace DevicesDeviceSettingsPolicy {
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

export interface UnnamedSchemaRefF636ff9f2cb41ff4b715cf8ed8515581 {
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

  exclude?: Array<ExcludesAPI.DevicesSplitTunnel>;

  /**
   * Whether to add Microsoft IPs to Split Tunnel exclusions.
   */
  exclude_office_ips?: boolean;

  fallback_domains?: Array<FallbackDomainsAPI.DevicesFallbackDomain>;

  gateway_unique_id?: string;

  include?: Array<IncludesAPI.DevicesSplitTunnelInclude>;

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

  service_mode_v2?: UnnamedSchemaRefF636ff9f2cb41ff4b715cf8ed8515581.ServiceModeV2;

  /**
   * The URL to launch when the Send Feedback button is clicked.
   */
  support_url?: string;

  /**
   * Whether to allow the user to turn off the WARP switch and disconnect the client.
   */
  switch_locked?: boolean;
}

export namespace UnnamedSchemaRefF636ff9f2cb41ff4b715cf8ed8515581 {
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

export type PolicyDeleteResponse = Array<DevicesDeviceSettingsPolicy>;

export interface PolicyCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The wirefilter expression to match devices.
   */
  match: string;

  /**
   * Body param: The name of the device settings profile.
   */
  name: string;

  /**
   * Body param: The precedence of the policy. Lower values indicate higher
   * precedence. Policies will be evaluated in ascending order of this field.
   */
  precedence: number;

  /**
   * Body param: Whether to allow the user to switch WARP between modes.
   */
  allow_mode_switch?: boolean;

  /**
   * Body param: Whether to receive update notifications when a new version of the
   * client is available.
   */
  allow_updates?: boolean;

  /**
   * Body param: Whether to allow devices to leave the organization.
   */
  allowed_to_leave?: boolean;

  /**
   * Body param: The amount of time in minutes to reconnect after having been
   * disabled.
   */
  auto_connect?: number;

  /**
   * Body param: Turn on the captive portal after the specified amount of time.
   */
  captive_portal?: number;

  /**
   * Body param: A description of the policy.
   */
  description?: string;

  /**
   * Body param: If the `dns_server` field of a fallback domain is not present, the
   * client will fall back to a best guess of the default/system DNS resolvers unless
   * this policy option is set to `true`.
   */
  disable_auto_fallback?: boolean;

  /**
   * Body param: Whether the policy will be applied to matching devices.
   */
  enabled?: boolean;

  /**
   * Body param: Whether to add Microsoft IPs to Split Tunnel exclusions.
   */
  exclude_office_ips?: boolean;

  /**
   * Body param: The amount of time in minutes a user is allowed access to their LAN.
   * A value of 0 will allow LAN access until the next WARP reconnection, such as a
   * reboot or a laptop waking from sleep. Note that this field is omitted from the
   * response if null or unset.
   */
  lan_allow_minutes?: number;

  /**
   * Body param: The size of the subnet for the local access network. Note that this
   * field is omitted from the response if null or unset.
   */
  lan_allow_subnet_size?: number;

  /**
   * Body param:
   */
  service_mode_v2?: PolicyCreateParams.ServiceModeV2;

  /**
   * Body param: The URL to launch when the Send Feedback button is clicked.
   */
  support_url?: string;

  /**
   * Body param: Whether to allow the user to turn off the WARP switch and disconnect
   * the client.
   */
  switch_locked?: boolean;
}

export namespace PolicyCreateParams {
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

export interface PolicyListParams {
  account_id: string;
}

export interface PolicyDeleteParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface PolicyEditParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Whether to allow the user to switch WARP between modes.
   */
  allow_mode_switch?: boolean;

  /**
   * Body param: Whether to receive update notifications when a new version of the
   * client is available.
   */
  allow_updates?: boolean;

  /**
   * Body param: Whether to allow devices to leave the organization.
   */
  allowed_to_leave?: boolean;

  /**
   * Body param: The amount of time in minutes to reconnect after having been
   * disabled.
   */
  auto_connect?: number;

  /**
   * Body param: Turn on the captive portal after the specified amount of time.
   */
  captive_portal?: number;

  /**
   * Body param: A description of the policy.
   */
  description?: string;

  /**
   * Body param: If the `dns_server` field of a fallback domain is not present, the
   * client will fall back to a best guess of the default/system DNS resolvers unless
   * this policy option is set to `true`.
   */
  disable_auto_fallback?: boolean;

  /**
   * Body param: Whether the policy will be applied to matching devices.
   */
  enabled?: boolean;

  /**
   * Body param: Whether to add Microsoft IPs to Split Tunnel exclusions.
   */
  exclude_office_ips?: boolean;

  /**
   * Body param: The wirefilter expression to match devices.
   */
  match?: string;

  /**
   * Body param: The name of the device settings profile.
   */
  name?: string;

  /**
   * Body param: The precedence of the policy. Lower values indicate higher
   * precedence. Policies will be evaluated in ascending order of this field.
   */
  precedence?: number;

  /**
   * Body param:
   */
  service_mode_v2?: PolicyEditParams.ServiceModeV2;

  /**
   * Body param: The URL to launch when the Send Feedback button is clicked.
   */
  support_url?: string;

  /**
   * Body param: Whether to allow the user to turn off the WARP switch and disconnect
   * the client.
   */
  switch_locked?: boolean;
}

export namespace PolicyEditParams {
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

export interface PolicyGetParams {
  account_id: string;
}

export namespace Policies {
  export import DevicesDeviceSettingsPolicy = PoliciesAPI.DevicesDeviceSettingsPolicy;
  export import UnnamedSchemaRefF636ff9f2cb41ff4b715cf8ed8515581 = PoliciesAPI.UnnamedSchemaRefF636ff9f2cb41ff4b715cf8ed8515581;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import DevicesDeviceSettingsPoliciesSinglePage = PoliciesAPI.DevicesDeviceSettingsPoliciesSinglePage;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyListParams = PoliciesAPI.PolicyListParams;
  export import PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export import PolicyEditParams = PoliciesAPI.PolicyEditParams;
  export import PolicyGetParams = PoliciesAPI.PolicyGetParams;
  export import DefaultPolicy = DefaultPolicyAPI.DefaultPolicy;
  export import DefaultPolicyGetResponse = DefaultPolicyAPI.DefaultPolicyGetResponse;
  export import DefaultPolicyGetParams = DefaultPolicyAPI.DefaultPolicyGetParams;
  export import Excludes = ExcludesAPI.Excludes;
  export import DevicesSplitTunnel = ExcludesAPI.DevicesSplitTunnel;
  export import UnnamedSchemaRef0462afe1a32ee90b1999d4277af59fa8 = ExcludesAPI.UnnamedSchemaRef0462afe1a32ee90b1999d4277af59fa8;
  export import ExcludeUpdateResponse = ExcludesAPI.ExcludeUpdateResponse;
  export import ExcludeGetResponse = ExcludesAPI.ExcludeGetResponse;
  export import DevicesSplitTunnelsSinglePage = ExcludesAPI.DevicesSplitTunnelsSinglePage;
  export import ExcludeUpdateParams = ExcludesAPI.ExcludeUpdateParams;
  export import ExcludeListParams = ExcludesAPI.ExcludeListParams;
  export import ExcludeGetParams = ExcludesAPI.ExcludeGetParams;
  export import FallbackDomains = FallbackDomainsAPI.FallbackDomains;
  export import DevicesFallbackDomain = FallbackDomainsAPI.DevicesFallbackDomain;
  export import UnnamedSchemaRef1fbf91ecd61792c751fead58dc8005e6 = FallbackDomainsAPI.UnnamedSchemaRef1fbf91ecd61792c751fead58dc8005e6;
  export import FallbackDomainUpdateResponse = FallbackDomainsAPI.FallbackDomainUpdateResponse;
  export import FallbackDomainGetResponse = FallbackDomainsAPI.FallbackDomainGetResponse;
  export import DevicesFallbackDomainsSinglePage = FallbackDomainsAPI.DevicesFallbackDomainsSinglePage;
  export import FallbackDomainUpdateParams = FallbackDomainsAPI.FallbackDomainUpdateParams;
  export import FallbackDomainListParams = FallbackDomainsAPI.FallbackDomainListParams;
  export import FallbackDomainGetParams = FallbackDomainsAPI.FallbackDomainGetParams;
  export import Includes = IncludesAPI.Includes;
  export import DevicesSplitTunnelInclude = IncludesAPI.DevicesSplitTunnelInclude;
  export import UnnamedSchemaRef5e0c6134a624678286f4a424b001870a = IncludesAPI.UnnamedSchemaRef5e0c6134a624678286f4a424b001870a;
  export import IncludeUpdateResponse = IncludesAPI.IncludeUpdateResponse;
  export import IncludeGetResponse = IncludesAPI.IncludeGetResponse;
  export import DevicesSplitTunnelIncludesSinglePage = IncludesAPI.DevicesSplitTunnelIncludesSinglePage;
  export import IncludeUpdateParams = IncludesAPI.IncludeUpdateParams;
  export import IncludeListParams = IncludesAPI.IncludeListParams;
  export import IncludeGetParams = IncludesAPI.IncludeGetParams;
}
