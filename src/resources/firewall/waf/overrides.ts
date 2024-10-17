// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as OverridesAPI from './overrides';
import { V4PagePaginationArray } from '../../../pagination';

export class Overrides extends APIResource {}

export class WAFRulesV4PagePaginationArray extends V4PagePaginationArray<WAFRule> {}

export interface Override {
  /**
   * The unique identifier of the WAF override.
   */
  id?: string;

  /**
   * An informative summary of the current URI-based WAF override.
   */
  description?: string | null;

  /**
   * An object that allows you to enable or disable WAF rule groups for the current
   * WAF override. Each key of this object must be the ID of a WAF rule group, and
   * each value must be a valid WAF action (usually `default` or `disable`). When
   * creating a new URI-based WAF override, you must provide a `groups` object or a
   * `rules` object.
   */
  groups?: Record<string, unknown>;

  /**
   * When true, indicates that the WAF package is currently paused.
   */
  paused?: boolean;

  /**
   * The relative priority of the current URI-based WAF override when multiple
   * overrides match a single URL. A lower number indicates higher priority. Higher
   * priority overrides may overwrite values set by lower priority overrides.
   */
  priority?: number;

  /**
   * Specifies that, when a WAF rule matches, its configured action will be replaced
   * by the action configured in this object.
   */
  rewrite_action?: RewriteAction;

  /**
   * An object that allows you to override the action of specific WAF rules. Each key
   * of this object must be the ID of a WAF rule, and each value must be a valid WAF
   * action. Unless you are disabling a rule, ensure that you also enable the rule
   * group that this WAF rule belongs to. When creating a new URI-based WAF override,
   * you must provide a `groups` object or a `rules` object.
   */
  rules?: WAFRule;

  /**
   * The URLs to include in the current WAF override. You can use wildcards. Each
   * entered URL will be escaped before use, which means you can only use simple
   * wildcard patterns.
   */
  urls?: Array<OverrideURL>;
}

export type OverrideURL = string;

/**
 * Specifies that, when a WAF rule matches, its configured action will be replaced
 * by the action configured in this object.
 */
export interface RewriteAction {
  /**
   * The WAF rule action to apply.
   */
  block?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

  /**
   * The WAF rule action to apply.
   */
  challenge?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

  /**
   * The WAF rule action to apply.
   */
  default?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

  /**
   * The WAF rule action to apply.
   */
  disable?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

  /**
   * The WAF rule action to apply.
   */
  simulate?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';
}

/**
 * An object that allows you to override the action of specific WAF rules. Each key
 * of this object must be the ID of a WAF rule, and each value must be a valid WAF
 * action. Unless you are disabling a rule, ensure that you also enable the rule
 * group that this WAF rule belongs to. When creating a new URI-based WAF override,
 * you must provide a `groups` object or a `rules` object.
 */
export type WAFRule = Record<string, 'challenge' | 'block' | 'simulate' | 'disable' | 'default'>;

export namespace Overrides {
  export import Override = OverridesAPI.Override;
  export import OverrideURL = OverridesAPI.OverrideURL;
  export import RewriteAction = OverridesAPI.RewriteAction;
  export import WAFRule = OverridesAPI.WAFRule;
}
