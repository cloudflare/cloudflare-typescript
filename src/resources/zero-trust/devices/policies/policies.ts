// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as CustomAPI from './custom/custom';
import {
  Custom,
  CustomCreateParams,
  CustomDeleteParams,
  CustomDeleteResponse,
  CustomEditParams,
  CustomGetParams,
  CustomListParams,
} from './custom/custom';
import * as DefaultAPI from './default/default';
import {
  Default,
  DefaultEditParams,
  DefaultEditResponse,
  DefaultGetParams,
  DefaultGetResponse,
} from './default/default';
import { SinglePage } from '../../../../pagination';

export class Policies extends APIResource {
  default: DefaultAPI.Default = new DefaultAPI.Default(this._client);
  custom: CustomAPI.Custom = new CustomAPI.Custom(this._client);
}

export class SettingsPoliciesSinglePage extends SinglePage<SettingsPolicy> {}

export interface DevicePolicyCertificates {
  /**
   * The current status of the device policy certificate provisioning feature for
   * WARP clients.
   */
  enabled: boolean;
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
  dns_server?: Array<string>;
}

export interface FallbackDomainParam {
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
  dns_server?: Array<string>;
}

export type FallbackDomainPolicy = Array<FallbackDomain>;

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

  exclude?: Array<SplitTunnelExclude>;

  /**
   * Whether to add Microsoft IPs to Split Tunnel exclusions.
   */
  exclude_office_ips?: boolean;

  fallback_domains?: Array<FallbackDomain>;

  gateway_unique_id?: string;

  include?: Array<SplitTunnelInclude>;

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

export interface SplitTunnelExclude {
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

export interface SplitTunnelExcludeParam {
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

export interface SplitTunnelInclude {
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

export interface SplitTunnelIncludeParam {
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

Policies.Default = Default;
Policies.Custom = Custom;

export declare namespace Policies {
  export {
    type DevicePolicyCertificates as DevicePolicyCertificates,
    type FallbackDomain as FallbackDomain,
    type FallbackDomainPolicy as FallbackDomainPolicy,
    type SettingsPolicy as SettingsPolicy,
    type SplitTunnelExclude as SplitTunnelExclude,
    type SplitTunnelInclude as SplitTunnelInclude,
  };

  export {
    Default as Default,
    type DefaultEditResponse as DefaultEditResponse,
    type DefaultGetResponse as DefaultGetResponse,
    type DefaultEditParams as DefaultEditParams,
    type DefaultGetParams as DefaultGetParams,
  };

  export {
    Custom as Custom,
    type CustomDeleteResponse as CustomDeleteResponse,
    type CustomCreateParams as CustomCreateParams,
    type CustomListParams as CustomListParams,
    type CustomDeleteParams as CustomDeleteParams,
    type CustomEditParams as CustomEditParams,
    type CustomGetParams as CustomGetParams,
  };
}
