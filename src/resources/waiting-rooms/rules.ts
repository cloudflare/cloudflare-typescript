// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/waiting-rooms/rules';

export class Rules extends APIResource {
  /**
   * Patches a rule for a waiting room.
   */
  update(
    zoneIdentifier: string,
    waitingRoomId: unknown,
    ruleId: string,
    body: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse | null> {
    return (
      this._client.patch(`/zones/${zoneIdentifier}/waiting_rooms/${waitingRoomId}/rules/${ruleId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a rule for a waiting room.
   */
  delete(
    zoneIdentifier: string,
    waitingRoomId: unknown,
    ruleId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse | null> {
    return (
      this._client.delete(
        `/zones/${zoneIdentifier}/waiting_rooms/${waitingRoomId}/rules/${ruleId}`,
        options,
      ) as Core.APIPromise<{ result: RuleDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Only available for the Waiting Room Advanced subscription. Creates a rule for a
   * waiting room.
   */
  waitingRoomCreateWaitingRoomRule(
    zoneIdentifier: string,
    waitingRoomId: unknown,
    body: RuleWaitingRoomCreateWaitingRoomRuleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleWaitingRoomCreateWaitingRoomRuleResponse | null> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/waiting_rooms/${waitingRoomId}/rules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleWaitingRoomCreateWaitingRoomRuleResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists rules for a waiting room.
   */
  waitingRoomListWaitingRoomRules(
    zoneIdentifier: string,
    waitingRoomId: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleWaitingRoomListWaitingRoomRulesResponse | null> {
    return (
      this._client.get(
        `/zones/${zoneIdentifier}/waiting_rooms/${waitingRoomId}/rules`,
        options,
      ) as Core.APIPromise<{ result: RuleWaitingRoomListWaitingRoomRulesResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Only available for the Waiting Room Advanced subscription. Replaces all rules
   * for a waiting room.
   */
  waitingRoomReplaceWaitingRoomRules(
    zoneIdentifier: string,
    waitingRoomId: unknown,
    body: RuleWaitingRoomReplaceWaitingRoomRulesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleWaitingRoomReplaceWaitingRoomRulesResponse | null> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/waiting_rooms/${waitingRoomId}/rules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleWaitingRoomReplaceWaitingRoomRulesResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RuleUpdateResponse = Array<RuleUpdateResponse.RuleUpdateResponseItem>;

export namespace RuleUpdateResponse {
  export interface RuleUpdateResponseItem {
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
}

export type RuleDeleteResponse = Array<RuleDeleteResponse.RuleDeleteResponseItem>;

export namespace RuleDeleteResponse {
  export interface RuleDeleteResponseItem {
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
}

export type RuleWaitingRoomCreateWaitingRoomRuleResponse =
  Array<RuleWaitingRoomCreateWaitingRoomRuleResponse.RuleWaitingRoomCreateWaitingRoomRuleResponseItem>;

export namespace RuleWaitingRoomCreateWaitingRoomRuleResponse {
  export interface RuleWaitingRoomCreateWaitingRoomRuleResponseItem {
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
}

export type RuleWaitingRoomListWaitingRoomRulesResponse =
  Array<RuleWaitingRoomListWaitingRoomRulesResponse.RuleWaitingRoomListWaitingRoomRulesResponseItem>;

export namespace RuleWaitingRoomListWaitingRoomRulesResponse {
  export interface RuleWaitingRoomListWaitingRoomRulesResponseItem {
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
}

export type RuleWaitingRoomReplaceWaitingRoomRulesResponse =
  Array<RuleWaitingRoomReplaceWaitingRoomRulesResponse.RuleWaitingRoomReplaceWaitingRoomRulesResponseItem>;

export namespace RuleWaitingRoomReplaceWaitingRoomRulesResponse {
  export interface RuleWaitingRoomReplaceWaitingRoomRulesResponseItem {
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
}

export interface RuleUpdateParams {
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

  /**
   * Reorder the position of a rule
   */
  position?: RuleUpdateParams.Index | RuleUpdateParams.Before | RuleUpdateParams.After;
}

export namespace RuleUpdateParams {
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

export interface RuleWaitingRoomCreateWaitingRoomRuleParams {
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

export type RuleWaitingRoomReplaceWaitingRoomRulesParams =
  Array<RuleWaitingRoomReplaceWaitingRoomRulesParams.Body>;

export namespace RuleWaitingRoomReplaceWaitingRoomRulesParams {
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

export namespace Rules {
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleWaitingRoomCreateWaitingRoomRuleResponse = RulesAPI.RuleWaitingRoomCreateWaitingRoomRuleResponse;
  export import RuleWaitingRoomListWaitingRoomRulesResponse = RulesAPI.RuleWaitingRoomListWaitingRoomRulesResponse;
  export import RuleWaitingRoomReplaceWaitingRoomRulesResponse = RulesAPI.RuleWaitingRoomReplaceWaitingRoomRulesResponse;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleWaitingRoomCreateWaitingRoomRuleParams = RulesAPI.RuleWaitingRoomCreateWaitingRoomRuleParams;
  export import RuleWaitingRoomReplaceWaitingRoomRulesParams = RulesAPI.RuleWaitingRoomReplaceWaitingRoomRulesParams;
}
