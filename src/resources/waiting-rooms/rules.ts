// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as RulesAPI from './rules';

export class Rules extends APIResource {
  /**
   * Only available for the Waiting Room Advanced subscription. Creates a rule for a
   * waiting room.
   */
  create(
    waitingRoomId: string,
    params: RuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleCreateResponse | null> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/waiting_rooms/${waitingRoomId}/rules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Only available for the Waiting Room Advanced subscription. Replaces all rules
   * for a waiting room.
   */
  update(
    waitingRoomId: string,
    params: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse | null> {
    const { zone_id, body } = params;
    return (
      this._client.put(`/zones/${zone_id}/waiting_rooms/${waitingRoomId}/rules`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: RuleUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a rule for a waiting room.
   */
  delete(
    waitingRoomId: string,
    ruleId: string,
    params: RuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse | null> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/waiting_rooms/${waitingRoomId}/rules/${ruleId}`,
        options,
      ) as Core.APIPromise<{ result: RuleDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Patches a rule for a waiting room.
   */
  edit(
    waitingRoomId: string,
    ruleId: string,
    params: RuleEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleEditResponse | null> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/waiting_rooms/${waitingRoomId}/rules/${ruleId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleEditResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists rules for a waiting room.
   */
  get(
    waitingRoomId: string,
    params: RuleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleGetResponse | null> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/waiting_rooms/${waitingRoomId}/rules`, options) as Core.APIPromise<{
        result: RuleGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface WaitingRoomRule {
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

export type RuleCreateResponse = Array<WaitingRoomRule>;

export type RuleUpdateResponse = Array<WaitingRoomRule>;

export type RuleDeleteResponse = Array<WaitingRoomRule>;

export type RuleEditResponse = Array<WaitingRoomRule>;

export type RuleGetResponse = Array<WaitingRoomRule>;

export interface RuleCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The action to take when the expression matches.
   */
  action: 'bypass_waiting_room';

  /**
   * Body param: Criteria defining when there is a match for the current rule.
   */
  expression: string;

  /**
   * Body param: The description of the rule.
   */
  description?: string;

  /**
   * Body param: When set to true, the rule is enabled.
   */
  enabled?: boolean;
}

export interface RuleUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: Array<RuleUpdateParams.Body>;
}

export namespace RuleUpdateParams {
  export interface Body {
    /**
     * The action to take when the expression matches.
     */
    action: 'bypass_waiting_room';

    /**
     * Criteria defining when there is a match for the current rule.
     */
    expression: string;

    /**
     * The description of the rule.
     */
    description?: string;

    /**
     * When set to true, the rule is enabled.
     */
    enabled?: boolean;
  }
}

export interface RuleDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface RuleEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The action to take when the expression matches.
   */
  action: 'bypass_waiting_room';

  /**
   * Body param: Criteria defining when there is a match for the current rule.
   */
  expression: string;

  /**
   * Body param: The description of the rule.
   */
  description?: string;

  /**
   * Body param: When set to true, the rule is enabled.
   */
  enabled?: boolean;

  /**
   * Body param: Reorder the position of a rule
   */
  position?: RuleEditParams.Index | RuleEditParams.Before | RuleEditParams.After;
}

export namespace RuleEditParams {
  export interface Index {
    /**
     * Places the rule in the exact position specified by the integer number
     * <POSITION_NUMBER>. Position numbers start with 1. Existing rules in the ruleset
     * from the specified position number onward are shifted one position (no rule is
     * overwritten).
     */
    index?: number;
  }

  export interface Before {
    /**
     * Places the rule before rule <RULE_ID>. Use this argument with an empty rule ID
     * value ("") to set the rule as the first rule in the ruleset.
     */
    before?: string;
  }

  export interface After {
    /**
     * Places the rule after rule <RULE_ID>. Use this argument with an empty rule ID
     * value ("") to set the rule as the last rule in the ruleset.
     */
    after?: string;
  }
}

export interface RuleGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Rules {
  export import WaitingRoomRule = RulesAPI.WaitingRoomRule;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleEditResponse = RulesAPI.RuleEditResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleEditParams = RulesAPI.RuleEditParams;
  export import RuleGetParams = RulesAPI.RuleGetParams;
}
