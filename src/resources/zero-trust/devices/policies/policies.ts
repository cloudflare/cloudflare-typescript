// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as CertificatesAPI from './certificates';
import {
  CertificateGetResponse,
  CertificateUpdateParams,
  CertificateUpdateResponse,
  Certificates,
  DevicePolicyCertificates,
} from './certificates';
import * as DefaultPolicyAPI from './default-policy';
import { DefaultPolicy, DefaultPolicyGetParams, DefaultPolicyGetResponse } from './default-policy';
import * as ExcludesAPI from './excludes';
import {
  ExcludeGetParams,
  ExcludeGetResponse,
  ExcludeListParams,
  ExcludeUpdateParams,
  ExcludeUpdateResponse,
  Excludes,
  SplitTunnelExclude,
  SplitTunnelExcludesSinglePage,
} from './excludes';
import * as FallbackDomainsAPI from './fallback-domains';
import {
  FallbackDomain,
  FallbackDomainGetParams,
  FallbackDomainGetResponse,
  FallbackDomainListParams,
  FallbackDomainPolicy,
  FallbackDomainUpdateParams,
  FallbackDomainUpdateResponse,
  FallbackDomains,
  FallbackDomainsSinglePage,
} from './fallback-domains';
import * as IncludesAPI from './includes';
import {
  IncludeGetParams,
  IncludeGetResponse,
  IncludeListParams,
  IncludeUpdateParams,
  IncludeUpdateResponse,
  Includes,
  SplitTunnelInclude,
  SplitTunnelIncludesSinglePage,
} from './includes';
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

Policies.SettingsPoliciesSinglePage = SettingsPoliciesSinglePage;
Policies.Certificates = Certificates;
Policies.DefaultPolicy = DefaultPolicy;
Policies.Excludes = Excludes;
Policies.SplitTunnelExcludesSinglePage = SplitTunnelExcludesSinglePage;
Policies.FallbackDomains = FallbackDomains;
Policies.FallbackDomainsSinglePage = FallbackDomainsSinglePage;
Policies.Includes = Includes;
Policies.SplitTunnelIncludesSinglePage = SplitTunnelIncludesSinglePage;

export declare namespace Policies {
  export {
    type SettingsPolicy as SettingsPolicy,
    type PolicyDeleteResponse as PolicyDeleteResponse,
    SettingsPoliciesSinglePage as SettingsPoliciesSinglePage,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
    type PolicyEditParams as PolicyEditParams,
    type PolicyGetParams as PolicyGetParams,
  };

  export {
    Certificates as Certificates,
    type DevicePolicyCertificates as DevicePolicyCertificates,
    type CertificateUpdateResponse as CertificateUpdateResponse,
    type CertificateGetResponse as CertificateGetResponse,
    type CertificateUpdateParams as CertificateUpdateParams,
  };

  export {
    DefaultPolicy as DefaultPolicy,
    type DefaultPolicyGetResponse as DefaultPolicyGetResponse,
    type DefaultPolicyGetParams as DefaultPolicyGetParams,
  };

  export {
    Excludes as Excludes,
    type SplitTunnelExclude as SplitTunnelExclude,
    type ExcludeUpdateResponse as ExcludeUpdateResponse,
    type ExcludeGetResponse as ExcludeGetResponse,
    SplitTunnelExcludesSinglePage as SplitTunnelExcludesSinglePage,
    type ExcludeUpdateParams as ExcludeUpdateParams,
    type ExcludeListParams as ExcludeListParams,
    type ExcludeGetParams as ExcludeGetParams,
  };

  export {
    FallbackDomains as FallbackDomains,
    type FallbackDomain as FallbackDomain,
    type FallbackDomainPolicy as FallbackDomainPolicy,
    type FallbackDomainUpdateResponse as FallbackDomainUpdateResponse,
    type FallbackDomainGetResponse as FallbackDomainGetResponse,
    FallbackDomainsSinglePage as FallbackDomainsSinglePage,
    type FallbackDomainUpdateParams as FallbackDomainUpdateParams,
    type FallbackDomainListParams as FallbackDomainListParams,
    type FallbackDomainGetParams as FallbackDomainGetParams,
  };

  export {
    Includes as Includes,
    type SplitTunnelInclude as SplitTunnelInclude,
    type IncludeUpdateResponse as IncludeUpdateResponse,
    type IncludeGetResponse as IncludeGetResponse,
    SplitTunnelIncludesSinglePage as SplitTunnelIncludesSinglePage,
    type IncludeUpdateParams as IncludeUpdateParams,
    type IncludeListParams as IncludeListParams,
    type IncludeGetParams as IncludeGetParams,
  };
}
