// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/rum/rules';

export class Rules extends APIResource {
  /**
   * Creates a new rule in a Web Analytics ruleset.
   */
  create(
    accountId: string,
    rulesetId: string,
    body: RuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/rum/v2/${rulesetId}/rule`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a rule in a Web Analytics ruleset.
   */
  update(
    accountId: string,
    rulesetId: string,
    ruleId: string,
    body: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/rum/v2/${rulesetId}/rule/${ruleId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all the rules in a Web Analytics ruleset.
   */
  list(
    accountId: string,
    rulesetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleListResponse> {
    return (
      this._client.get(`/accounts/${accountId}/rum/v2/${rulesetId}/rules`, options) as Core.APIPromise<{
        result: RuleListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an existing rule from a Web Analytics ruleset.
   */
  delete(
    accountId: string,
    rulesetId: string,
    ruleId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/rum/v2/${rulesetId}/rule/${ruleId}`,
        options,
      ) as Core.APIPromise<{ result: RuleDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RuleCreateResponse {
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

export interface RuleUpdateResponse {
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
  rules?: Array<RuleListResponse.Rule>;

  ruleset?: RuleListResponse.Ruleset;
}

export namespace RuleListResponse {
  export interface Rule {
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

export interface RuleCreateParams {
  host?: string;

  /**
   * Whether the rule includes or excludes traffic from being measured.
   */
  inclusive?: boolean;

  /**
   * Whether the rule is paused or not.
   */
  is_paused?: boolean;

  paths?: Array<string>;
}

export interface RuleUpdateParams {
  host?: string;

  /**
   * Whether the rule includes or excludes traffic from being measured.
   */
  inclusive?: boolean;

  /**
   * Whether the rule is paused or not.
   */
  is_paused?: boolean;

  paths?: Array<string>;
}

export namespace Rules {
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
}
