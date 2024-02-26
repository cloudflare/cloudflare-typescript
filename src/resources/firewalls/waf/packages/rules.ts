// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/firewalls/waf/packages/rules';

export class Rules extends APIResource {
  /**
   * Updates a WAF rule. You can only update the mode/action of the rule.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  edit(
    packageId: string,
    ruleId: string,
    params: RuleEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/firewall/waf/packages/${packageId}/rules/${ruleId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a WAF rule in a WAF package.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  get(
    packageId: string,
    ruleId: string,
    params: RuleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/firewall/waf/packages/${packageId}/rules/${ruleId}`,
        options,
      ) as Core.APIPromise<{ result: RuleGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches WAF rules in a WAF package.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  wafRulesListWAFRules(
    packageId: string,
    params: RuleWAFRulesListWAFRulesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleWAFRulesListWAFRulesResponse | null> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/firewall/waf/packages/${packageId}/rules`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: RuleWAFRulesListWAFRulesResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * When triggered, anomaly detection WAF rules contribute to an overall threat
 * score that will determine if a request is considered malicious. You can
 * configure the total scoring threshold through the 'sensitivity' property of the
 * WAF package.
 */
export type RuleEditResponse =
  | RuleEditResponse.WAFManagedRulesAnomalyRule
  | RuleEditResponse.WAFManagedRulesTraditionalDenyRule
  | RuleEditResponse.WAFManagedRulesTraditionalAllowRule;

export namespace RuleEditResponse {
  /**
   * When triggered, anomaly detection WAF rules contribute to an overall threat
   * score that will determine if a request is considered malicious. You can
   * configure the total scoring threshold through the 'sensitivity' property of the
   * WAF package.
   */
  export interface WAFManagedRulesAnomalyRule {
    /**
     * The unique identifier of the WAF rule.
     */
    id: string;

    /**
     * Defines the available modes for the current WAF rule. Applies to anomaly
     * detection WAF rules.
     */
    allowed_modes: Array<'on' | 'off'>;

    /**
     * The public description of the WAF rule.
     */
    description: string;

    /**
     * The rule group to which the current WAF rule belongs.
     */
    group: WAFManagedRulesAnomalyRule.Group;

    /**
     * When set to `on`, the current WAF rule will be used when evaluating the request.
     * Applies to anomaly detection WAF rules.
     */
    mode: 'on' | 'off';

    /**
     * The unique identifier of a WAF package.
     */
    package_id: string;

    /**
     * The order in which the individual WAF rule is executed within its rule group.
     */
    priority: string;
  }

  export namespace WAFManagedRulesAnomalyRule {
    /**
     * The rule group to which the current WAF rule belongs.
     */
    export interface Group {
      /**
       * The unique identifier of the rule group.
       */
      id?: string;

      /**
       * The name of the rule group.
       */
      name?: string;
    }
  }

  /**
   * When triggered, traditional WAF rules cause the firewall to immediately act upon
   * the request based on the configuration of the rule. A 'deny' rule will
   * immediately respond to the request based on the configured rule action/mode (for
   * example, 'block') and no other rules will be processed.
   */
  export interface WAFManagedRulesTraditionalDenyRule {
    /**
     * The unique identifier of the WAF rule.
     */
    id: string;

    /**
     * The list of possible actions of the WAF rule when it is triggered.
     */
    allowed_modes: Array<'default' | 'disable' | 'simulate' | 'block' | 'challenge'>;

    /**
     * The default action/mode of a rule.
     */
    default_mode: 'disable' | 'simulate' | 'block' | 'challenge';

    /**
     * The public description of the WAF rule.
     */
    description: string;

    /**
     * The rule group to which the current WAF rule belongs.
     */
    group: WAFManagedRulesTraditionalDenyRule.Group;

    /**
     * The action that the current WAF rule will perform when triggered. Applies to
     * traditional (deny) WAF rules.
     */
    mode: 'default' | 'disable' | 'simulate' | 'block' | 'challenge';

    /**
     * The unique identifier of a WAF package.
     */
    package_id: string;

    /**
     * The order in which the individual WAF rule is executed within its rule group.
     */
    priority: string;
  }

  export namespace WAFManagedRulesTraditionalDenyRule {
    /**
     * The rule group to which the current WAF rule belongs.
     */
    export interface Group {
      /**
       * The unique identifier of the rule group.
       */
      id?: string;

      /**
       * The name of the rule group.
       */
      name?: string;
    }
  }

  /**
   * When triggered, traditional WAF rules cause the firewall to immediately act on
   * the request based on the rule configuration. An 'allow' rule will immediately
   * allow the request and no other rules will be processed.
   */
  export interface WAFManagedRulesTraditionalAllowRule {
    /**
     * The unique identifier of the WAF rule.
     */
    id: string;

    /**
     * Defines the available modes for the current WAF rule.
     */
    allowed_modes: Array<'on' | 'off'>;

    /**
     * The public description of the WAF rule.
     */
    description: string;

    /**
     * The rule group to which the current WAF rule belongs.
     */
    group: WAFManagedRulesTraditionalAllowRule.Group;

    /**
     * When set to `on`, the current rule will be used when evaluating the request.
     * Applies to traditional (allow) WAF rules.
     */
    mode: 'on' | 'off';

    /**
     * The unique identifier of a WAF package.
     */
    package_id: string;

    /**
     * The order in which the individual WAF rule is executed within its rule group.
     */
    priority: string;
  }

  export namespace WAFManagedRulesTraditionalAllowRule {
    /**
     * The rule group to which the current WAF rule belongs.
     */
    export interface Group {
      /**
       * The unique identifier of the rule group.
       */
      id?: string;

      /**
       * The name of the rule group.
       */
      name?: string;
    }
  }
}

export type RuleGetResponse = unknown | Array<unknown> | string;

export type RuleWAFRulesListWAFRulesResponse = Array<
  | RuleWAFRulesListWAFRulesResponse.WAFManagedRulesAnomalyRule
  | RuleWAFRulesListWAFRulesResponse.WAFManagedRulesTraditionalDenyRule
  | RuleWAFRulesListWAFRulesResponse.WAFManagedRulesTraditionalAllowRule
>;

export namespace RuleWAFRulesListWAFRulesResponse {
  /**
   * When triggered, anomaly detection WAF rules contribute to an overall threat
   * score that will determine if a request is considered malicious. You can
   * configure the total scoring threshold through the 'sensitivity' property of the
   * WAF package.
   */
  export interface WAFManagedRulesAnomalyRule {
    /**
     * The unique identifier of the WAF rule.
     */
    id: string;

    /**
     * Defines the available modes for the current WAF rule. Applies to anomaly
     * detection WAF rules.
     */
    allowed_modes: Array<'on' | 'off'>;

    /**
     * The public description of the WAF rule.
     */
    description: string;

    /**
     * The rule group to which the current WAF rule belongs.
     */
    group: WAFManagedRulesAnomalyRule.Group;

    /**
     * When set to `on`, the current WAF rule will be used when evaluating the request.
     * Applies to anomaly detection WAF rules.
     */
    mode: 'on' | 'off';

    /**
     * The unique identifier of a WAF package.
     */
    package_id: string;

    /**
     * The order in which the individual WAF rule is executed within its rule group.
     */
    priority: string;
  }

  export namespace WAFManagedRulesAnomalyRule {
    /**
     * The rule group to which the current WAF rule belongs.
     */
    export interface Group {
      /**
       * The unique identifier of the rule group.
       */
      id?: string;

      /**
       * The name of the rule group.
       */
      name?: string;
    }
  }

  /**
   * When triggered, traditional WAF rules cause the firewall to immediately act upon
   * the request based on the configuration of the rule. A 'deny' rule will
   * immediately respond to the request based on the configured rule action/mode (for
   * example, 'block') and no other rules will be processed.
   */
  export interface WAFManagedRulesTraditionalDenyRule {
    /**
     * The unique identifier of the WAF rule.
     */
    id: string;

    /**
     * The list of possible actions of the WAF rule when it is triggered.
     */
    allowed_modes: Array<'default' | 'disable' | 'simulate' | 'block' | 'challenge'>;

    /**
     * The default action/mode of a rule.
     */
    default_mode: 'disable' | 'simulate' | 'block' | 'challenge';

    /**
     * The public description of the WAF rule.
     */
    description: string;

    /**
     * The rule group to which the current WAF rule belongs.
     */
    group: WAFManagedRulesTraditionalDenyRule.Group;

    /**
     * The action that the current WAF rule will perform when triggered. Applies to
     * traditional (deny) WAF rules.
     */
    mode: 'default' | 'disable' | 'simulate' | 'block' | 'challenge';

    /**
     * The unique identifier of a WAF package.
     */
    package_id: string;

    /**
     * The order in which the individual WAF rule is executed within its rule group.
     */
    priority: string;
  }

  export namespace WAFManagedRulesTraditionalDenyRule {
    /**
     * The rule group to which the current WAF rule belongs.
     */
    export interface Group {
      /**
       * The unique identifier of the rule group.
       */
      id?: string;

      /**
       * The name of the rule group.
       */
      name?: string;
    }
  }

  /**
   * When triggered, traditional WAF rules cause the firewall to immediately act on
   * the request based on the rule configuration. An 'allow' rule will immediately
   * allow the request and no other rules will be processed.
   */
  export interface WAFManagedRulesTraditionalAllowRule {
    /**
     * The unique identifier of the WAF rule.
     */
    id: string;

    /**
     * Defines the available modes for the current WAF rule.
     */
    allowed_modes: Array<'on' | 'off'>;

    /**
     * The public description of the WAF rule.
     */
    description: string;

    /**
     * The rule group to which the current WAF rule belongs.
     */
    group: WAFManagedRulesTraditionalAllowRule.Group;

    /**
     * When set to `on`, the current rule will be used when evaluating the request.
     * Applies to traditional (allow) WAF rules.
     */
    mode: 'on' | 'off';

    /**
     * The unique identifier of a WAF package.
     */
    package_id: string;

    /**
     * The order in which the individual WAF rule is executed within its rule group.
     */
    priority: string;
  }

  export namespace WAFManagedRulesTraditionalAllowRule {
    /**
     * The rule group to which the current WAF rule belongs.
     */
    export interface Group {
      /**
       * The unique identifier of the rule group.
       */
      id?: string;

      /**
       * The name of the rule group.
       */
      name?: string;
    }
  }
}

export interface RuleEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The mode/action of the rule when triggered. You must use a value
   * from the `allowed_modes` array of the current rule.
   */
  mode?: 'default' | 'disable' | 'simulate' | 'block' | 'challenge' | 'on' | 'off';
}

export interface RuleGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface RuleWAFRulesListWAFRulesParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: The direction used to sort returned rules.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: When set to `all`, all the search requirements must match. When set
   * to `any`, only one of the search requirements has to match.
   */
  match?: 'any' | 'all';

  /**
   * Query param: The action/mode a rule has been overridden to perform.
   */
  mode?: 'DIS' | 'CHL' | 'BLK' | 'SIM';

  /**
   * Query param: The field used to sort returned rules.
   */
  order?: 'priority' | 'group_id' | 'description';

  /**
   * Query param: The page number of paginated results.
   */
  page?: number;

  /**
   * Query param: The number of rules per page.
   */
  per_page?: number;
}

export namespace Rules {
  export import RuleEditResponse = RulesAPI.RuleEditResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleWAFRulesListWAFRulesResponse = RulesAPI.RuleWAFRulesListWAFRulesResponse;
  export import RuleEditParams = RulesAPI.RuleEditParams;
  export import RuleGetParams = RulesAPI.RuleGetParams;
  export import RuleWAFRulesListWAFRulesParams = RulesAPI.RuleWAFRulesListWAFRulesParams;
}
