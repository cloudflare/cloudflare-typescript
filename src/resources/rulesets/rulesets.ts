// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RulesAPI from './rules';
import {
  BlockRule,
  CompressResponseRule,
  DDoSDynamicRule,
  ExecuteRule,
  ForceConnectionCloseRule,
  LogCustomFieldRule,
  LogRule,
  Logging,
  ManagedChallengeRule,
  RedirectRule,
  RewriteRule,
  RouteRule,
  Rules,
  RulesetRule,
  ScoreRule,
  ServeErrorRule,
  SetCacheSettingsRule,
  SetConfigRule,
  SkipRule,
} from './rules';
import * as VersionsAPI from './versions';
import { Versions } from './versions';
import * as PhasesAPI from './phases/phases';
import { Phases } from './phases/phases';

export class Rulesets extends APIResource {
  phases: PhasesAPI.Phases = new PhasesAPI.Phases(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
}

/**
 * The kind of the ruleset.
 */
export type Kind = 'managed' | 'custom' | 'root' | 'zone';

/**
 * The phase of the ruleset.
 */
export type Phase =
  | 'ddos_l4'
  | 'ddos_l7'
  | 'http_config_settings'
  | 'http_custom_errors'
  | 'http_log_custom_fields'
  | 'http_ratelimit'
  | 'http_request_cache_settings'
  | 'http_request_dynamic_redirect'
  | 'http_request_firewall_custom'
  | 'http_request_firewall_managed'
  | 'http_request_late_transform'
  | 'http_request_origin'
  | 'http_request_redirect'
  | 'http_request_sanitize'
  | 'http_request_sbfm'
  | 'http_request_transform'
  | 'http_response_cache_settings'
  | 'http_response_compression'
  | 'http_response_firewall_managed'
  | 'http_response_headers_transform'
  | 'magic_transit'
  | 'magic_transit_ids_managed'
  | 'magic_transit_managed'
  | 'magic_transit_ratelimit';

/**
 * A ruleset object.
 */
export interface Ruleset {
  /**
   * The unique ID of the ruleset.
   */
  id: string;

  /**
   * The timestamp of when the ruleset was last modified.
   */
  last_updated: string;

  /**
   * The version of the ruleset.
   */
  version: string;

  /**
   * An informative description of the ruleset.
   */
  description?: string;

  /**
   * The human-readable name of the ruleset.
   */
  name?: string;
}

Rulesets.Phases = Phases;
Rulesets.Rules = Rules;
Rulesets.Versions = Versions;

export declare namespace Rulesets {
  export { type Kind as Kind, type Phase as Phase, type Ruleset as Ruleset };

  export { Phases as Phases };

  export {
    Rules as Rules,
    type BlockRule as BlockRule,
    type CompressResponseRule as CompressResponseRule,
    type DDoSDynamicRule as DDoSDynamicRule,
    type ExecuteRule as ExecuteRule,
    type ForceConnectionCloseRule as ForceConnectionCloseRule,
    type LogCustomFieldRule as LogCustomFieldRule,
    type LogRule as LogRule,
    type Logging as Logging,
    type ManagedChallengeRule as ManagedChallengeRule,
    type RedirectRule as RedirectRule,
    type RewriteRule as RewriteRule,
    type RouteRule as RouteRule,
    type RulesetRule as RulesetRule,
    type ScoreRule as ScoreRule,
    type ServeErrorRule as ServeErrorRule,
    type SetCacheSettingsRule as SetCacheSettingsRule,
    type SetConfigRule as SetConfigRule,
    type SkipRule as SkipRule,
  };

  export { Versions as Versions };
}
