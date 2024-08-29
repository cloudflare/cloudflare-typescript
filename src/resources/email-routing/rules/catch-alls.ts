// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as CatchAllsAPI from './catch-alls';

export class CatchAlls extends APIResource {}

/**
 * Action for the catch-all routing rule.
 */
export interface CatchAllAction {
  /**
   * Type of action for catch-all rule.
   */
  type: 'drop' | 'forward' | 'worker';

  value?: Array<string>;
}

/**
 * Matcher for catch-all routing rule.
 */
export interface CatchAllMatcher {
  /**
   * Type of matcher. Default is 'all'.
   */
  type: 'all';
}

export namespace CatchAlls {
  export import CatchAllAction = CatchAllsAPI.CatchAllAction;
  export import CatchAllMatcher = CatchAllsAPI.CatchAllMatcher;
}
