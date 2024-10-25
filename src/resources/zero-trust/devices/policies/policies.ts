// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as PoliciesAPI from './policies';
import * as CertificatesAPI from './certificates';
import * as DefaultPolicyAPI from './default-policy';
import * as ExcludesAPI from './excludes';
import * as FallbackDomainsAPI from './fallback-domains';
import * as IncludesAPI from './includes';
import { SinglePage } from '../../../../pagination';

export class Policies extends APIResource {
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);
  defaultPolicy: DefaultPolicyAPI.DefaultPolicy = new DefaultPolicyAPI.DefaultPolicy(this._client);
  excludes: ExcludesAPI.Excludes = new ExcludesAPI.Excludes(this._client);
  fallbackDomains: FallbackDomainsAPI.FallbackDomains = new FallbackDomainsAPI.FallbackDomains(this._client);
  includes: IncludesAPI.Includes = new IncludesAPI.Includes(this._client);

  /**
   * Creates a device settings profile to be applied to certain devices matching the
   * criteria.
   */
  create(params: PolicyCreateParams, options?: Core.RequestOptions): Core.APIPromise<SettingsPolicy | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/devices/policy`, { body, ...options }) as Core.APIPromise<{
        result: SettingsPolicy | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a list of the device settings profiles for an account.
   */
  list(
    params: PolicyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SettingsPoliciesSinglePage, SettingsPolicy> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/devices/policies`,
      SettingsPoliciesSinglePage,
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
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/devices/policy/${policyId}`, options) as Core.APIPromise<{
        result: PolicyDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured device settings profile.
   */
  edit(
    policyId: string,
    params: PolicyEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingsPolicy | null> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/devices/policy/${policyId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SettingsPolicy | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a device settings profile by ID.
   */
  get(
    policyId: string,
    params: PolicyGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingsPolicy | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/policy/${policyId}`, options) as Core.APIPromise<{
        result: SettingsPolicy | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SettingsPoliciesSinglePage extends SinglePage<SettingsPolicy> {}

export interface SettingsPolicy {
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

  exclude?: Array<ExcludesAPI.SplitTunnelExclude>;

  /**
   * Whether to add Microsoft IPs to Split Tunnel exclusions.
   */
  exclude_office_ips?: boolean;

  fallback_domains?: Array<FallbackDomainsAPI.FallbackDomain>;

  gateway_unique_id?: string;

  include?: Array<IncludesAPI.SplitTunnelInclude>;

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

  service_mode_v2?: SettingsPolicy.ServiceModeV2;

  /**
   * The URL to launch when the Send Feedback button is clicked.
   */
  support_url?: string;

  /**
   * Whether to allow the user to turn off the WARP switch and disconnect the client.
   */
  switch_locked?: boolean;

  target_tests?: Array<SettingsPolicy.TargetTest>;

  /**
   * Determines which tunnel protocol to use.
   */
  tunnel_protocol?: string;
}

export namespace SettingsPolicy {
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

  export interface TargetTest {
    /**
     * The id of the DEX test targeting this policy
     */
    id?: string;

    /**
     * The name of the DEX test targeting this policy
     */
    name?: string;
  }
}

export type PolicyDeleteResponse = Array<SettingsPolicy>;

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

  /**
   * Body param: Determines which tunnel protocol to use.
   */
  tunnel_protocol?: string;
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
  account_id: string;
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

  /**
   * Body param: Determines which tunnel protocol to use.
   */
  tunnel_protocol?: string;
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
  export type SettingsPolicy = PoliciesAPI.SettingsPolicy;
  export type PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import SettingsPoliciesSinglePage = PoliciesAPI.SettingsPoliciesSinglePage;
  export type PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export type PolicyListParams = PoliciesAPI.PolicyListParams;
  export type PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export type PolicyEditParams = PoliciesAPI.PolicyEditParams;
  export type PolicyGetParams = PoliciesAPI.PolicyGetParams;
  export import Certificates = CertificatesAPI.Certificates;
  export type DevicePolicyCertificates = CertificatesAPI.DevicePolicyCertificates;
  export type CertificateUpdateResponse = CertificatesAPI.CertificateUpdateResponse;
  export type CertificateGetResponse = CertificatesAPI.CertificateGetResponse;
  export type CertificateUpdateParams = CertificatesAPI.CertificateUpdateParams;
  export import DefaultPolicy = DefaultPolicyAPI.DefaultPolicy;
  export type DefaultPolicyGetResponse = DefaultPolicyAPI.DefaultPolicyGetResponse;
  export type DefaultPolicyGetParams = DefaultPolicyAPI.DefaultPolicyGetParams;
  export import Excludes = ExcludesAPI.Excludes;
  export type SplitTunnelExclude = ExcludesAPI.SplitTunnelExclude;
  export type ExcludeUpdateResponse = ExcludesAPI.ExcludeUpdateResponse;
  export type ExcludeGetResponse = ExcludesAPI.ExcludeGetResponse;
  export import SplitTunnelExcludesSinglePage = ExcludesAPI.SplitTunnelExcludesSinglePage;
  export type ExcludeUpdateParams = ExcludesAPI.ExcludeUpdateParams;
  export type ExcludeListParams = ExcludesAPI.ExcludeListParams;
  export type ExcludeGetParams = ExcludesAPI.ExcludeGetParams;
  export import FallbackDomains = FallbackDomainsAPI.FallbackDomains;
  export type FallbackDomain = FallbackDomainsAPI.FallbackDomain;
  export type FallbackDomainPolicy = FallbackDomainsAPI.FallbackDomainPolicy;
  export type FallbackDomainUpdateResponse = FallbackDomainsAPI.FallbackDomainUpdateResponse;
  export type FallbackDomainGetResponse = FallbackDomainsAPI.FallbackDomainGetResponse;
  export import FallbackDomainsSinglePage = FallbackDomainsAPI.FallbackDomainsSinglePage;
  export type FallbackDomainUpdateParams = FallbackDomainsAPI.FallbackDomainUpdateParams;
  export type FallbackDomainListParams = FallbackDomainsAPI.FallbackDomainListParams;
  export type FallbackDomainGetParams = FallbackDomainsAPI.FallbackDomainGetParams;
  export import Includes = IncludesAPI.Includes;
  export type SplitTunnelInclude = IncludesAPI.SplitTunnelInclude;
  export type IncludeUpdateResponse = IncludesAPI.IncludeUpdateResponse;
  export type IncludeGetResponse = IncludesAPI.IncludeGetResponse;
  export import SplitTunnelIncludesSinglePage = IncludesAPI.SplitTunnelIncludesSinglePage;
  export type IncludeUpdateParams = IncludesAPI.IncludeUpdateParams;
  export type IncludeListParams = IncludesAPI.IncludeListParams;
  export type IncludeGetParams = IncludesAPI.IncludeGetParams;
}
