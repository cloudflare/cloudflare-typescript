// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as LockdownsAPI from './lockdowns';

export class Lockdowns extends APIResource {}

/**
 * A list of IP addresses or CIDR ranges that will be allowed to access the URLs
 * specified in the Zone Lockdown rule. You can include any number of `ip` or
 * `ip_range` configurations.
 */
export type Configuration = LockdownIPConfiguration | LockdownCIDRConfiguration;

export interface Lockdown {
  /**
   * The unique identifier of the Zone Lockdown rule.
   */
  id: string;

  /**
   * A list of IP addresses or CIDR ranges that will be allowed to access the URLs
   * specified in the Zone Lockdown rule. You can include any number of `ip` or
   * `ip_range` configurations.
   */
  configurations: Configuration;

  /**
   * The timestamp of when the rule was created.
   */
  created_on: string;

  /**
   * An informative summary of the rule.
   */
  description: string;

  /**
   * The timestamp of when the rule was last modified.
   */
  modified_on: string;

  /**
   * When true, indicates that the rule is currently paused.
   */
  paused: boolean;

  /**
   * The URLs to include in the rule definition. You can use wildcards. Each entered
   * URL will be escaped before use, which means you can only use simple wildcard
   * patterns.
   */
  urls: Array<LockdownURL>;
}

export interface LockdownCIDRConfiguration {
  /**
   * The configuration target. You must set the target to `ip_range` when specifying
   * an IP address range in the Zone Lockdown rule.
   */
  target?: 'ip_range';

  /**
   * The IP address range to match. You can only use prefix lengths `/16` and `/24`.
   */
  value?: string;
}

export interface LockdownIPConfiguration {
  /**
   * The configuration target. You must set the target to `ip` when specifying an IP
   * address in the Zone Lockdown rule.
   */
  target?: 'ip';

  /**
   * The IP address to match. This address will be compared to the IP address of
   * incoming requests.
   */
  value?: string;
}

export type LockdownURL = string;

export namespace Lockdowns {
  export import Configuration = LockdownsAPI.Configuration;
  export import Lockdown = LockdownsAPI.Lockdown;
  export import LockdownCIDRConfiguration = LockdownsAPI.LockdownCIDRConfiguration;
  export import LockdownIPConfiguration = LockdownsAPI.LockdownIPConfiguration;
  export import LockdownURL = LockdownsAPI.LockdownURL;
}
