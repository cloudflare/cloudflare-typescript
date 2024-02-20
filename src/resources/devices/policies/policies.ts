// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PoliciesAPI from 'cloudflare/resources/devices/policies/policies';
import * as DefaultPolicyAPI from 'cloudflare/resources/devices/policies/default-policy';
import * as ExcludesAPI from 'cloudflare/resources/devices/policies/excludes';
import * as FallbackDomainsAPI from 'cloudflare/resources/devices/policies/fallback-domains';
import * as IncludesAPI from 'cloudflare/resources/devices/policies/includes';

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
    identifier: unknown,
    body: PolicyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyCreateResponse | null> {
    return (
      this._client.post(`/accounts/${identifier}/devices/policy`, { body, ...options }) as Core.APIPromise<{
        result: PolicyCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a list of the device settings profiles for an account.
   */
  list(identifier: unknown, options?: Core.RequestOptions): Core.APIPromise<PolicyListResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/policies`, options) as Core.APIPromise<{
        result: PolicyListResponse | null;
      }>
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
   * Updates a configured device settings profile.
   */
  edit(
    identifier: unknown,
    uuid: string,
    body: PolicyEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolicyEditResponse | null> {
    return (
      this._client.patch(`/accounts/${identifier}/devices/policy/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PolicyEditResponse | null }>
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

export type PolicyCreateResponse = Array<unknown>;

export type PolicyListResponse = Array<PolicyListResponse.PolicyListResponseItem>;

export namespace PolicyListResponse {
  export interface PolicyListResponseItem {
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

    exclude?: Array<PolicyListResponseItem.Exclude>;

    /**
     * Whether to add Microsoft IPs to Split Tunnel exclusions.
     */
    exclude_office_ips?: boolean;

    fallback_domains?: Array<PolicyListResponseItem.FallbackDomain>;

    gateway_unique_id?: string;

    include?: Array<PolicyListResponseItem.Include>;

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

    service_mode_v2?: PolicyListResponseItem.ServiceModeV2;

    /**
     * The URL to launch when the Send Feedback button is clicked.
     */
    support_url?: string;

    /**
     * Whether to allow the user to turn off the WARP switch and disconnect the client.
     */
    switch_locked?: boolean;
  }

  export namespace PolicyListResponseItem {
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

export type PolicyEditResponse = Array<unknown>;

export type PolicyGetResponse = Array<unknown>;

export interface PolicyCreateParams {
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

  service_mode_v2?: PolicyCreateParams.ServiceModeV2;

  /**
   * The URL to launch when the Send Feedback button is clicked.
   */
  support_url?: string;

  /**
   * Whether to allow the user to turn off the WARP switch and disconnect the client.
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

export interface PolicyEditParams {
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

  service_mode_v2?: PolicyEditParams.ServiceModeV2;

  /**
   * The URL to launch when the Send Feedback button is clicked.
   */
  support_url?: string;

  /**
   * Whether to allow the user to turn off the WARP switch and disconnect the client.
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

export namespace Policies {
  export import PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export import PolicyListResponse = PoliciesAPI.PolicyListResponse;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import PolicyEditResponse = PoliciesAPI.PolicyEditResponse;
  export import PolicyGetResponse = PoliciesAPI.PolicyGetResponse;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyEditParams = PoliciesAPI.PolicyEditParams;
  export import DefaultPolicy = DefaultPolicyAPI.DefaultPolicy;
  export import DefaultPolicyGetResponse = DefaultPolicyAPI.DefaultPolicyGetResponse;
  export import Excludes = ExcludesAPI.Excludes;
  export import ExcludeUpdateResponse = ExcludesAPI.ExcludeUpdateResponse;
  export import ExcludeListResponse = ExcludesAPI.ExcludeListResponse;
  export import ExcludeUpdateParams = ExcludesAPI.ExcludeUpdateParams;
  export import FallbackDomains = FallbackDomainsAPI.FallbackDomains;
  export import FallbackDomainUpdateResponse = FallbackDomainsAPI.FallbackDomainUpdateResponse;
  export import FallbackDomainListResponse = FallbackDomainsAPI.FallbackDomainListResponse;
  export import FallbackDomainUpdateParams = FallbackDomainsAPI.FallbackDomainUpdateParams;
  export import Includes = IncludesAPI.Includes;
  export import IncludeUpdateResponse = IncludesAPI.IncludeUpdateResponse;
  export import IncludeListResponse = IncludesAPI.IncludeListResponse;
  export import IncludeUpdateParams = IncludesAPI.IncludeUpdateParams;
}
