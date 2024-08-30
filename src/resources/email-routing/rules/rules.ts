// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as RulesAPI from './rules';
import * as CatchAllsAPI from './catch-alls';

export class Rules extends APIResource {
  catchAlls: CatchAllsAPI.CatchAlls = new CatchAllsAPI.CatchAlls(this._client);
}

/**
 * Actions pattern.
 */
export interface Action {
  /**
   * Type of supported action.
   */
  type: 'drop' | 'forward' | 'worker';

  value: Array<string>;
}

export interface EmailRoutingRule {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions patterns.
   */
  actions?: Array<Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers?: Array<Matcher>;

  /**
   * Routing rule name.
   */
  name?: string;

  /**
   * Priority of the routing rule.
   */
  priority?: number;

  /**
   * @deprecated: Routing rule tag. (Deprecated, replaced by routing rule identifier)
   */
  tag?: string;
}

/**
 * Matching pattern to forward your actions.
 */
export interface Matcher {
  /**
   * Field for type matcher.
   */
  field: 'to';

  /**
   * Type of matcher.
   */
  type: 'literal';

  /**
   * Value for matcher.
   */
  value: string;
}

export namespace Rules {
  export import Action = RulesAPI.Action;
  export import EmailRoutingRule = RulesAPI.EmailRoutingRule;
  export import Matcher = RulesAPI.Matcher;
  export import CatchAlls = CatchAllsAPI.CatchAlls;
  export import CatchAllAction = CatchAllsAPI.CatchAllAction;
  export import CatchAllMatcher = CatchAllsAPI.CatchAllMatcher;
}
