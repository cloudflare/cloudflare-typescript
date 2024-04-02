// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/waiting-rooms/rules';

export class Rules extends APIResource {}

export interface WaitingroomRule {
  /**
   * The ID of the rule.
   */
  id?: string;

  /**
   * The action to take when the expression matches.
   */
  action?: 'bypass_waiting_room';

  /**
   * The description of the rule.
   */
  description?: string;

  /**
   * When set to true, the rule is enabled.
   */
  enabled?: boolean;

  /**
   * Criteria defining when there is a match for the current rule.
   */
  expression?: string;

  last_updated?: string;

  /**
   * The version of the rule.
   */
  version?: string;
}

export namespace Rules {
  export import WaitingroomRule = RulesAPI.WaitingroomRule;
}
