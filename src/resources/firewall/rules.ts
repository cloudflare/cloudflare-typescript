// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RulesAPI from './rules';
import * as FiltersAPI from '../filters';
import * as RateLimitsAPI from '../rate-limits';

export class Rules extends APIResource {}

export interface FirewallRule {
  /**
   * The unique identifier of the firewall rule.
   */
  id?: string;

  /**
   * The action to apply to a matched request. The `log` action is only available on
   * an Enterprise plan.
   */
  action?: RateLimitsAPI.Action;

  /**
   * An informative summary of the firewall rule.
   */
  description?: string;

  filter?: FiltersAPI.FirewallFilter | DeletedFilter;

  /**
   * When true, indicates that the firewall rule is currently paused.
   */
  paused?: boolean;

  /**
   * The priority of the rule. Optional value used to define the processing order. A
   * lower number indicates a higher priority. If not provided, rules with a defined
   * priority will be processed before rules without a priority.
   */
  priority?: number;

  products?: Array<Product>;

  /**
   * A short reference tag. Allows you to select related firewall rules.
   */
  ref?: string;
}

/**
 * A list of products to bypass for a request when using the `bypass` action.
 */
export type Product = 'zoneLockdown' | 'uaBlock' | 'bic' | 'hot' | 'securityLevel' | 'rateLimit' | 'waf';

export interface DeletedFilter {
  /**
   * The unique identifier of the filter.
   */
  id: string;

  /**
   * When true, indicates that the firewall rule was deleted.
   */
  deleted: boolean;
}

export namespace Rules {
  export import FirewallRule = RulesAPI.FirewallRule;
  export import Product = RulesAPI.Product;
  export import DeletedFilter = RulesAPI.DeletedFilter;
}
