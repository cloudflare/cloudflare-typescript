// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Rules extends APIResource {
  /**
   * Creates a new rule in a Web Analytics ruleset.
   */
  create(rulesetID: string, params: RuleCreateParams, options?: RequestOptions): APIPromise<RUMRule> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/rum/v2/${rulesetID}/rule`, {
        body,
        ...options,
      }) as APIPromise<{ result: RUMRule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a rule in a Web Analytics ruleset.
   */
  update(ruleID: string, params: RuleUpdateParams, options?: RequestOptions): APIPromise<RUMRule> {
    const { account_id, ruleset_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/rum/v2/${ruleset_id}/rule/${ruleID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: RUMRule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all the rules in a Web Analytics ruleset.
   */
  list(rulesetID: string, params: RuleListParams, options?: RequestOptions): APIPromise<RuleListResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/rum/v2/${rulesetID}/rules`, options) as APIPromise<{
        result: RuleListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an existing rule from a Web Analytics ruleset.
   */
  delete(ruleID: string, params: RuleDeleteParams, options?: RequestOptions): APIPromise<RuleDeleteResponse> {
    const { account_id, ruleset_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/rum/v2/${ruleset_id}/rule/${ruleID}`,
        options,
      ) as APIPromise<{ result: RuleDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modifies one or more rules in a Web Analytics ruleset with a single request.
   */
  bulkCreate(
    rulesetID: string,
    params: RuleBulkCreateParams,
    options?: RequestOptions,
  ): APIPromise<RuleBulkCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/rum/v2/${rulesetID}/rules`, {
        body,
        ...options,
      }) as APIPromise<{ result: RuleBulkCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RUMRule {
  /**
   * The Web Analytics rule identifier.
   */
  id?: string;

  created?: string;

  /**
   * The hostname the rule will be applied to.
   */
  host?: string;

  /**
   * Whether the rule includes or excludes traffic from being measured.
   */
  inclusive?: boolean;

  /**
   * Whether the rule is paused or not.
   */
  is_paused?: boolean;

  /**
   * The paths the rule will be applied to.
   */
  paths?: Array<string>;

  priority?: number;
}

export interface RuleListResponse {
  /**
   * A list of rules.
   */
  rules?: Array<RUMRule>;

  ruleset?: RuleListResponse.Ruleset;
}

export namespace RuleListResponse {
  export interface Ruleset {
    /**
     * The Web Analytics ruleset identifier.
     */
    id?: string;

    /**
     * Whether the ruleset is enabled.
     */
    enabled?: boolean;

    zone_name?: string;

    /**
     * The zone identifier.
     */
    zone_tag?: string;
  }
}

export interface RuleDeleteResponse {
  /**
   * The Web Analytics rule identifier.
   */
  id?: string;
}

export interface RuleBulkCreateResponse {
  /**
   * A list of rules.
   */
  rules?: Array<RUMRule>;

  ruleset?: RuleBulkCreateResponse.Ruleset;
}

export namespace RuleBulkCreateResponse {
  export interface Ruleset {
    /**
     * The Web Analytics ruleset identifier.
     */
    id?: string;

    /**
     * Whether the ruleset is enabled.
     */
    enabled?: boolean;

    zone_name?: string;

    /**
     * The zone identifier.
     */
    zone_tag?: string;
  }
}

export interface RuleCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  host?: string;

  /**
   * Body param: Whether the rule includes or excludes traffic from being measured.
   */
  inclusive?: boolean;

  /**
   * Body param: Whether the rule is paused or not.
   */
  is_paused?: boolean;

  /**
   * Body param:
   */
  paths?: Array<string>;
}

export interface RuleUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Path param: The Web Analytics ruleset identifier.
   */
  ruleset_id: string;

  /**
   * Body param:
   */
  host?: string;

  /**
   * Body param: Whether the rule includes or excludes traffic from being measured.
   */
  inclusive?: boolean;

  /**
   * Body param: Whether the rule is paused or not.
   */
  is_paused?: boolean;

  /**
   * Body param:
   */
  paths?: Array<string>;
}

export interface RuleListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface RuleDeleteParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * The Web Analytics ruleset identifier.
   */
  ruleset_id: string;
}

export interface RuleBulkCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: A list of rule identifiers to delete.
   */
  delete_rules?: Array<string>;

  /**
   * Body param: A list of rules to create or update.
   */
  rules?: Array<RuleBulkCreateParams.Rule>;
}

export namespace RuleBulkCreateParams {
  export interface Rule {
    /**
     * The Web Analytics rule identifier.
     */
    id?: string;

    host?: string;

    inclusive?: boolean;

    is_paused?: boolean;

    paths?: Array<string>;
  }
}

export declare namespace Rules {
  export {
    type RUMRule as RUMRule,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleBulkCreateResponse as RuleBulkCreateResponse,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleBulkCreateParams as RuleBulkCreateParams,
  };
}
