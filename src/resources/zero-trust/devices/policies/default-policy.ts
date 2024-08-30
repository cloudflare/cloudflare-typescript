// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as DefaultPolicyAPI from './default-policy';
import * as ExcludesAPI from './excludes';
import * as FallbackDomainsAPI from './fallback-domains';
import * as IncludesAPI from './includes';

export class DefaultPolicy extends APIResource {
  /**
   * Fetches the default device settings profile for an account.
   */
  get(
    params: DefaultPolicyGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DefaultPolicyGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/policy`, options) as Core.APIPromise<{
        result: DefaultPolicyGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DefaultPolicyGetResponse {
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
   * Whether the policy will be applied to matching devices.
   */
  default?: boolean;

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

  service_mode_v2?: DefaultPolicyGetResponse.ServiceModeV2;

  /**
   * The URL to launch when the Send Feedback button is clicked.
   */
  support_url?: string;

  /**
   * Whether to allow the user to turn off the WARP switch and disconnect the client.
   */
  switch_locked?: boolean;

  /**
   * Determines which tunnel protocol to use.
   */
  tunnel_protocol?: string;
}

export namespace DefaultPolicyGetResponse {
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

export interface DefaultPolicyGetParams {
  account_id: string;
}

export namespace DefaultPolicy {
  export import DefaultPolicyGetResponse = DefaultPolicyAPI.DefaultPolicyGetResponse;
  export import DefaultPolicyGetParams = DefaultPolicyAPI.DefaultPolicyGetParams;
}
