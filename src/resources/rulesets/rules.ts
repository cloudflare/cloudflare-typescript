// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { CloudflareError } from '../../error';
import * as RulesAPI from './rules';
import * as RulesetsAPI from './rulesets';

export class Rules extends APIResource {
  /**
   * Adds a new rule to an account or zone ruleset. The rule will be added to the end
   * of the existing list of rules in the ruleset by default.
   */
  create(
    rulesetId: string,
    params: RuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleCreateResponse> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}/rules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an existing rule from an account or zone ruleset.
   */
  delete(
    rulesetId: string,
    ruleId: string,
    params?: RuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse>;
  delete(
    rulesetId: string,
    ruleId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse>;
  delete(
    rulesetId: string,
    ruleId: string,
    params: RuleDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(rulesetId, ruleId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.delete(
        `/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}/rules/${ruleId}`,
        options,
      ) as Core.APIPromise<{ result: RuleDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing rule in an account or zone ruleset.
   */
  edit(
    rulesetId: string,
    ruleId: string,
    params: RuleEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleEditResponse> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.patch(`/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}/rules/${ruleId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RuleEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface BlockRule {
  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The version of the rule.
   */
  version: string;

  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'block';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: BlockRule.ActionParameters;

  /**
   * The categories of the rule.
   */
  categories?: Array<string>;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: BlockRule.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: Logging;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: BlockRule.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace BlockRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * The response to show when the block is applied.
     */
    response?: ActionParameters.Response;
  }

  export namespace ActionParameters {
    /**
     * The response to show when the block is applied.
     */
    export interface Response {
      /**
       * The content to return.
       */
      content: string;

      /**
       * The type of the content to return.
       */
      content_type: string;

      /**
       * The status code to return.
       */
      status_code: number;
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface BlockRuleParam {
  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'block';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: BlockRuleParam.ActionParameters;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: BlockRuleParam.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: LoggingParam;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: BlockRuleParam.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace BlockRuleParam {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * The response to show when the block is applied.
     */
    response?: ActionParameters.Response;
  }

  export namespace ActionParameters {
    /**
     * The response to show when the block is applied.
     */
    export interface Response {
      /**
       * The content to return.
       */
      content: string;

      /**
       * The type of the content to return.
       */
      content_type: string;

      /**
       * The status code to return.
       */
      status_code: number;
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface CompressResponseRule {
  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The version of the rule.
   */
  version: string;

  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'compress_response';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: CompressResponseRule.ActionParameters;

  /**
   * The categories of the rule.
   */
  categories?: Array<string>;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: CompressResponseRule.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: Logging;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: CompressResponseRule.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace CompressResponseRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * Custom order for compression algorithms.
     */
    algorithms?: Array<ActionParameters.Algorithm>;
  }

  export namespace ActionParameters {
    /**
     * Compression algorithm to enable.
     */
    export interface Algorithm {
      /**
       * Name of compression algorithm to enable.
       */
      name?: 'none' | 'auto' | 'default' | 'gzip' | 'brotli';
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface CompressResponseRuleParam {
  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'compress_response';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: CompressResponseRuleParam.ActionParameters;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: CompressResponseRuleParam.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: LoggingParam;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: CompressResponseRuleParam.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace CompressResponseRuleParam {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * Custom order for compression algorithms.
     */
    algorithms?: Array<ActionParameters.Algorithm>;
  }

  export namespace ActionParameters {
    /**
     * Compression algorithm to enable.
     */
    export interface Algorithm {
      /**
       * Name of compression algorithm to enable.
       */
      name?: 'none' | 'auto' | 'default' | 'gzip' | 'brotli';
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface DDoSDynamicRule {
  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The version of the rule.
   */
  version: string;

  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'ddos_dynamic';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: unknown;

  /**
   * The categories of the rule.
   */
  categories?: Array<string>;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: DDoSDynamicRule.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: Logging;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: DDoSDynamicRule.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace DDoSDynamicRule {
  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface DDoSDynamicRuleParam {
  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'ddos_dynamic';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: unknown;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: DDoSDynamicRuleParam.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: LoggingParam;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: DDoSDynamicRuleParam.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace DDoSDynamicRuleParam {
  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface ExecuteRule {
  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The version of the rule.
   */
  version: string;

  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'execute';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: ExecuteRule.ActionParameters;

  /**
   * The categories of the rule.
   */
  categories?: Array<string>;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: ExecuteRule.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: Logging;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: ExecuteRule.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace ExecuteRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * The ID of the ruleset to execute.
     */
    id: string;

    /**
     * The configuration to use for matched data logging.
     */
    matched_data?: ActionParameters.MatchedData;

    /**
     * A set of overrides to apply to the target ruleset.
     */
    overrides?: ActionParameters.Overrides;
  }

  export namespace ActionParameters {
    /**
     * The configuration to use for matched data logging.
     */
    export interface MatchedData {
      /**
       * The public key to encrypt matched data logs with.
       */
      public_key: string;
    }

    /**
     * A set of overrides to apply to the target ruleset.
     */
    export interface Overrides {
      /**
       * An action to override all rules with. This option has lower precedence than rule
       * and category overrides.
       */
      action?: string;

      /**
       * A list of category-level overrides. This option has the second-highest
       * precedence after rule-level overrides.
       */
      categories?: Array<Overrides.Category>;

      /**
       * Whether to enable execution of all rules. This option has lower precedence than
       * rule and category overrides.
       */
      enabled?: boolean;

      /**
       * A list of rule-level overrides. This option has the highest precedence.
       */
      rules?: Array<Overrides.Rule>;

      /**
       * A sensitivity level to set for all rules. This option has lower precedence than
       * rule and category overrides and is only applicable for DDoS phases.
       */
      sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
    }

    export namespace Overrides {
      /**
       * A category-level override
       */
      export interface Category {
        /**
         * The name of the category to override.
         */
        category: string;

        /**
         * The action to override rules in the category with.
         */
        action?: string;

        /**
         * Whether to enable execution of rules in the category.
         */
        enabled?: boolean;

        /**
         * The sensitivity level to use for rules in the category.
         */
        sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
      }

      /**
       * A rule-level override
       */
      export interface Rule {
        /**
         * The ID of the rule to override.
         */
        id: string;

        /**
         * The action to override the rule with.
         */
        action?: string;

        /**
         * Whether to enable execution of the rule.
         */
        enabled?: boolean;

        /**
         * The score threshold to use for the rule.
         */
        score_threshold?: number;

        /**
         * The sensitivity level to use for the rule.
         */
        sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
      }
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface ExecuteRuleParam {
  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'execute';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: ExecuteRuleParam.ActionParameters;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: ExecuteRuleParam.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: LoggingParam;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: ExecuteRuleParam.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace ExecuteRuleParam {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * The ID of the ruleset to execute.
     */
    id: string;

    /**
     * The configuration to use for matched data logging.
     */
    matched_data?: ActionParameters.MatchedData;

    /**
     * A set of overrides to apply to the target ruleset.
     */
    overrides?: ActionParameters.Overrides;
  }

  export namespace ActionParameters {
    /**
     * The configuration to use for matched data logging.
     */
    export interface MatchedData {
      /**
       * The public key to encrypt matched data logs with.
       */
      public_key: string;
    }

    /**
     * A set of overrides to apply to the target ruleset.
     */
    export interface Overrides {
      /**
       * An action to override all rules with. This option has lower precedence than rule
       * and category overrides.
       */
      action?: string;

      /**
       * A list of category-level overrides. This option has the second-highest
       * precedence after rule-level overrides.
       */
      categories?: Array<Overrides.Category>;

      /**
       * Whether to enable execution of all rules. This option has lower precedence than
       * rule and category overrides.
       */
      enabled?: boolean;

      /**
       * A list of rule-level overrides. This option has the highest precedence.
       */
      rules?: Array<Overrides.Rule>;

      /**
       * A sensitivity level to set for all rules. This option has lower precedence than
       * rule and category overrides and is only applicable for DDoS phases.
       */
      sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
    }

    export namespace Overrides {
      /**
       * A category-level override
       */
      export interface Category {
        /**
         * The name of the category to override.
         */
        category: string;

        /**
         * The action to override rules in the category with.
         */
        action?: string;

        /**
         * Whether to enable execution of rules in the category.
         */
        enabled?: boolean;

        /**
         * The sensitivity level to use for rules in the category.
         */
        sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
      }

      /**
       * A rule-level override
       */
      export interface Rule {
        /**
         * The ID of the rule to override.
         */
        id: string;

        /**
         * The action to override the rule with.
         */
        action?: string;

        /**
         * Whether to enable execution of the rule.
         */
        enabled?: boolean;

        /**
         * The score threshold to use for the rule.
         */
        score_threshold?: number;

        /**
         * The sensitivity level to use for the rule.
         */
        sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
      }
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface ForceConnectionCloseRule {
  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The version of the rule.
   */
  version: string;

  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'force_connection_close';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: unknown;

  /**
   * The categories of the rule.
   */
  categories?: Array<string>;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: ForceConnectionCloseRule.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: Logging;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: ForceConnectionCloseRule.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace ForceConnectionCloseRule {
  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface ForceConnectionCloseRuleParam {
  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'force_connection_close';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: unknown;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: ForceConnectionCloseRuleParam.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: LoggingParam;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: ForceConnectionCloseRuleParam.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace ForceConnectionCloseRuleParam {
  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface LogCustomFieldRule {
  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The version of the rule.
   */
  version: string;

  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'log_custom_field';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: LogCustomFieldRule.ActionParameters;

  /**
   * The categories of the rule.
   */
  categories?: Array<string>;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: LogCustomFieldRule.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: Logging;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: LogCustomFieldRule.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace LogCustomFieldRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * The cookie fields to log.
     */
    cookie_fields?: Array<ActionParameters.CookieField>;

    /**
     * The request fields to log.
     */
    request_fields?: Array<ActionParameters.RequestField>;

    /**
     * The response fields to log.
     */
    response_fields?: Array<ActionParameters.ResponseField>;
  }

  export namespace ActionParameters {
    /**
     * The cookie field to log.
     */
    export interface CookieField {
      /**
       * The name of the field.
       */
      name: string;
    }

    /**
     * The request field to log.
     */
    export interface RequestField {
      /**
       * The name of the field.
       */
      name: string;
    }

    /**
     * The response field to log.
     */
    export interface ResponseField {
      /**
       * The name of the field.
       */
      name: string;
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface LogCustomFieldRuleParam {
  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'log_custom_field';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: LogCustomFieldRuleParam.ActionParameters;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: LogCustomFieldRuleParam.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: LoggingParam;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: LogCustomFieldRuleParam.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace LogCustomFieldRuleParam {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * The cookie fields to log.
     */
    cookie_fields?: Array<ActionParameters.CookieField>;

    /**
     * The request fields to log.
     */
    request_fields?: Array<ActionParameters.RequestField>;

    /**
     * The response fields to log.
     */
    response_fields?: Array<ActionParameters.ResponseField>;
  }

  export namespace ActionParameters {
    /**
     * The cookie field to log.
     */
    export interface CookieField {
      /**
       * The name of the field.
       */
      name: string;
    }

    /**
     * The request field to log.
     */
    export interface RequestField {
      /**
       * The name of the field.
       */
      name: string;
    }

    /**
     * The response field to log.
     */
    export interface ResponseField {
      /**
       * The name of the field.
       */
      name: string;
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface LogRule {
  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The version of the rule.
   */
  version: string;

  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'log';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: unknown;

  /**
   * The categories of the rule.
   */
  categories?: Array<string>;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: LogRule.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: Logging;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: LogRule.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace LogRule {
  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface LogRuleParam {
  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'log';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: unknown;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: LogRuleParam.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: LoggingParam;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: LogRuleParam.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace LogRuleParam {
  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

/**
 * An object configuring the rule's logging behavior.
 */
export interface Logging {
  /**
   * Whether to generate a log when the rule matches.
   */
  enabled: boolean;
}

/**
 * An object configuring the rule's logging behavior.
 */
export interface LoggingParam {
  /**
   * Whether to generate a log when the rule matches.
   */
  enabled: boolean;
}

export interface ManagedChallengeRule {
  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The version of the rule.
   */
  version: string;

  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'managed_challenge';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: unknown;

  /**
   * The categories of the rule.
   */
  categories?: Array<string>;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: ManagedChallengeRule.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: Logging;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: ManagedChallengeRule.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace ManagedChallengeRule {
  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface ManagedChallengeRuleParam {
  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'managed_challenge';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: unknown;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: ManagedChallengeRuleParam.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: LoggingParam;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: ManagedChallengeRuleParam.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace ManagedChallengeRuleParam {
  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface RedirectRule {
  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The version of the rule.
   */
  version: string;

  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'redirect';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: RedirectRule.ActionParameters;

  /**
   * The categories of the rule.
   */
  categories?: Array<string>;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: RedirectRule.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: Logging;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: RedirectRule.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace RedirectRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * Serve a redirect based on a bulk list lookup.
     */
    from_list?: ActionParameters.FromList;

    /**
     * Serve a redirect based on the request properties.
     */
    from_value?: ActionParameters.FromValue;
  }

  export namespace ActionParameters {
    /**
     * Serve a redirect based on a bulk list lookup.
     */
    export interface FromList {
      /**
       * Expression that evaluates to the list lookup key.
       */
      key?: string;

      /**
       * The name of the list to match against.
       */
      name?: string;
    }

    /**
     * Serve a redirect based on the request properties.
     */
    export interface FromValue {
      /**
       * Keep the query string of the original request.
       */
      preserve_query_string?: boolean;

      /**
       * The status code to be used for the redirect.
       */
      status_code?: 301 | 302 | 303 | 307 | 308;

      /**
       * The URL to redirect the request to.
       */
      target_url?: FromValue.StaticURLRedirect | FromValue.DynamicURLRedirect;
    }

    export namespace FromValue {
      export interface StaticURLRedirect {
        /**
         * The URL to redirect the request to.
         */
        value?: string;
      }

      export interface DynamicURLRedirect {
        /**
         * An expression to evaluate to get the URL to redirect the request to.
         */
        expression?: string;
      }
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface RedirectRuleParam {
  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'redirect';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: RedirectRuleParam.ActionParameters;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: RedirectRuleParam.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: LoggingParam;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: RedirectRuleParam.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace RedirectRuleParam {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * Serve a redirect based on a bulk list lookup.
     */
    from_list?: ActionParameters.FromList;

    /**
     * Serve a redirect based on the request properties.
     */
    from_value?: ActionParameters.FromValue;
  }

  export namespace ActionParameters {
    /**
     * Serve a redirect based on a bulk list lookup.
     */
    export interface FromList {
      /**
       * Expression that evaluates to the list lookup key.
       */
      key?: string;

      /**
       * The name of the list to match against.
       */
      name?: string;
    }

    /**
     * Serve a redirect based on the request properties.
     */
    export interface FromValue {
      /**
       * Keep the query string of the original request.
       */
      preserve_query_string?: boolean;

      /**
       * The status code to be used for the redirect.
       */
      status_code?: 301 | 302 | 303 | 307 | 308;

      /**
       * The URL to redirect the request to.
       */
      target_url?: FromValue.StaticURLRedirect | FromValue.DynamicURLRedirect;
    }

    export namespace FromValue {
      export interface StaticURLRedirect {
        /**
         * The URL to redirect the request to.
         */
        value?: string;
      }

      export interface DynamicURLRedirect {
        /**
         * An expression to evaluate to get the URL to redirect the request to.
         */
        expression?: string;
      }
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface RewriteRule {
  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The version of the rule.
   */
  version: string;

  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'rewrite';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: RewriteRule.ActionParameters;

  /**
   * The categories of the rule.
   */
  categories?: Array<string>;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: RewriteRule.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: Logging;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: RewriteRule.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace RewriteRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * Map of request headers to modify.
     */
    headers?: Record<
      string,
      ActionParameters.RemoveHeader | ActionParameters.StaticHeader | ActionParameters.DynamicHeader
    >;

    /**
     * URI to rewrite the request to.
     */
    uri?: ActionParameters.URI;
  }

  export namespace ActionParameters {
    /**
     * Remove the header from the request.
     */
    export interface RemoveHeader {
      operation: 'remove';
    }

    /**
     * Set a request header with a static value.
     */
    export interface StaticHeader {
      operation: 'set';

      /**
       * Static value for the header.
       */
      value: string;
    }

    /**
     * Set a request header with a dynamic value.
     */
    export interface DynamicHeader {
      /**
       * Expression for the header value.
       */
      expression: string;

      operation: 'set';
    }

    /**
     * URI to rewrite the request to.
     */
    export interface URI {
      /**
       * Path portion rewrite.
       */
      path?: RulesAPI.RewriteURIPart;

      /**
       * Query portion rewrite.
       */
      query?: RulesAPI.RewriteURIPart;
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface RewriteRuleParam {
  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'rewrite';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: RewriteRuleParam.ActionParameters;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: RewriteRuleParam.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: LoggingParam;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: RewriteRuleParam.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace RewriteRuleParam {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * Map of request headers to modify.
     */
    headers?: Record<
      string,
      ActionParameters.RemoveHeader | ActionParameters.StaticHeader | ActionParameters.DynamicHeader
    >;

    /**
     * URI to rewrite the request to.
     */
    uri?: ActionParameters.URI;
  }

  export namespace ActionParameters {
    /**
     * Remove the header from the request.
     */
    export interface RemoveHeader {
      operation: 'remove';
    }

    /**
     * Set a request header with a static value.
     */
    export interface StaticHeader {
      operation: 'set';

      /**
       * Static value for the header.
       */
      value: string;
    }

    /**
     * Set a request header with a dynamic value.
     */
    export interface DynamicHeader {
      /**
       * Expression for the header value.
       */
      expression: string;

      operation: 'set';
    }

    /**
     * URI to rewrite the request to.
     */
    export interface URI {
      /**
       * Path portion rewrite.
       */
      path?: RulesAPI.RewriteURIPartParam;

      /**
       * Query portion rewrite.
       */
      query?: RulesAPI.RewriteURIPartParam;
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export type RewriteURIPart = RewriteURIPart.StaticValue | RewriteURIPart.DynamicValue;

export namespace RewriteURIPart {
  export interface StaticValue {
    /**
     * Predefined replacement value.
     */
    value: string;
  }

  export interface DynamicValue {
    /**
     * Expression to evaluate for the replacement value.
     */
    expression: string;
  }
}

export type RewriteURIPartParam = RewriteURIPartParam.StaticValue | RewriteURIPartParam.DynamicValue;

export namespace RewriteURIPartParam {
  export interface StaticValue {
    /**
     * Predefined replacement value.
     */
    value: string;
  }

  export interface DynamicValue {
    /**
     * Expression to evaluate for the replacement value.
     */
    expression: string;
  }
}

export interface RouteRule {
  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The version of the rule.
   */
  version: string;

  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'route';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: RouteRule.ActionParameters;

  /**
   * The categories of the rule.
   */
  categories?: Array<string>;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: RouteRule.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: Logging;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: RouteRule.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace RouteRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * Rewrite the HTTP Host header.
     */
    host_header?: string;

    /**
     * Override the IP/TCP destination.
     */
    origin?: ActionParameters.Origin;

    /**
     * Override the Server Name Indication (SNI).
     */
    sni?: ActionParameters.SNI;
  }

  export namespace ActionParameters {
    /**
     * Override the IP/TCP destination.
     */
    export interface Origin {
      /**
       * Override the resolved hostname.
       */
      host?: string;

      /**
       * Override the destination port.
       */
      port?: number;
    }

    /**
     * Override the Server Name Indication (SNI).
     */
    export interface SNI {
      /**
       * The SNI override.
       */
      value: string;
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface RouteRuleParam {
  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'route';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: RouteRuleParam.ActionParameters;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: RouteRuleParam.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: LoggingParam;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: RouteRuleParam.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace RouteRuleParam {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * Rewrite the HTTP Host header.
     */
    host_header?: string;

    /**
     * Override the IP/TCP destination.
     */
    origin?: ActionParameters.Origin;

    /**
     * Override the Server Name Indication (SNI).
     */
    sni?: ActionParameters.SNI;
  }

  export namespace ActionParameters {
    /**
     * Override the IP/TCP destination.
     */
    export interface Origin {
      /**
       * Override the resolved hostname.
       */
      host?: string;

      /**
       * Override the destination port.
       */
      port?: number;
    }

    /**
     * Override the Server Name Indication (SNI).
     */
    export interface SNI {
      /**
       * The SNI override.
       */
      value: string;
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface RulesetRule {
  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The version of the rule.
   */
  version: string;

  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: string;

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: unknown;

  /**
   * The categories of the rule.
   */
  categories?: Array<string>;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: RulesetRule.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: Logging;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: RulesetRule.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace RulesetRule {
  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface ScoreRule {
  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The version of the rule.
   */
  version: string;

  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'score';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: ScoreRule.ActionParameters;

  /**
   * The categories of the rule.
   */
  categories?: Array<string>;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: ScoreRule.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: Logging;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: ScoreRule.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace ScoreRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * Increment contains the delta to change the score and can be either positive or
     * negative.
     */
    increment?: number;
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface ScoreRuleParam {
  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'score';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: ScoreRuleParam.ActionParameters;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: ScoreRuleParam.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: LoggingParam;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: ScoreRuleParam.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace ScoreRuleParam {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * Increment contains the delta to change the score and can be either positive or
     * negative.
     */
    increment?: number;
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface ServeErrorRule {
  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The version of the rule.
   */
  version: string;

  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'serve_error';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: ServeErrorRule.ActionParameters;

  /**
   * The categories of the rule.
   */
  categories?: Array<string>;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: ServeErrorRule.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: Logging;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: ServeErrorRule.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace ServeErrorRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * Error response content.
     */
    content?: string;

    /**
     * Content-type header to set with the response.
     */
    content_type?: 'application/json' | 'text/xml' | 'text/plain' | 'text/html';

    /**
     * The status code to use for the error.
     */
    status_code?: number;
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface ServeErrorRuleParam {
  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'serve_error';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: ServeErrorRuleParam.ActionParameters;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: ServeErrorRuleParam.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: LoggingParam;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: ServeErrorRuleParam.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace ServeErrorRuleParam {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * Error response content.
     */
    content?: string;

    /**
     * Content-type header to set with the response.
     */
    content_type?: 'application/json' | 'text/xml' | 'text/plain' | 'text/html';

    /**
     * The status code to use for the error.
     */
    status_code?: number;
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface SetCacheSettingsRule {
  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The version of the rule.
   */
  version: string;

  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'set_cache_settings';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: SetCacheSettingsRule.ActionParameters;

  /**
   * The categories of the rule.
   */
  categories?: Array<string>;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: SetCacheSettingsRule.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: Logging;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: SetCacheSettingsRule.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace SetCacheSettingsRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * List of additional ports that caching can be enabled on.
     */
    additional_cacheable_ports?: Array<number>;

    /**
     * Specify how long client browsers should cache the response. Cloudflare cache
     * purge will not purge content cached on client browsers, so high browser TTLs may
     * lead to stale content.
     */
    browser_ttl?: ActionParameters.BrowserTTL;

    /**
     * Mark whether the request’s response from origin is eligible for caching. Caching
     * itself will still depend on the cache-control header and your other caching
     * configurations.
     */
    cache?: boolean;

    /**
     * Define which components of the request are included or excluded from the cache
     * key Cloudflare uses to store the response in cache.
     */
    cache_key?: ActionParameters.CacheKey;

    /**
     * Mark whether the request's response from origin is eligible for Cache Reserve
     * (requires a Cache Reserve add-on plan).
     */
    cache_reserve?: ActionParameters.CacheReserve;

    /**
     * TTL (Time to Live) specifies the maximum time to cache a resource in the
     * Cloudflare edge network.
     */
    edge_ttl?: ActionParameters.EdgeTTL;

    /**
     * When enabled, Cloudflare will aim to strictly adhere to RFC 7234.
     */
    origin_cache_control?: boolean;

    /**
     * Generate Cloudflare error pages from issues sent from the origin server. When
     * on, error pages will trigger for issues from the origin
     */
    origin_error_page_passthru?: boolean;

    /**
     * Define a timeout value between two successive read operations to your origin
     * server. Historically, the timeout value between two read options from Cloudflare
     * to an origin server is 100 seconds. If you are attempting to reduce HTTP 524
     * errors because of timeouts from an origin server, try increasing this timeout
     * value.
     */
    read_timeout?: number;

    /**
     * Specify whether or not Cloudflare should respect strong ETag (entity tag)
     * headers. When off, Cloudflare converts strong ETag headers to weak ETag headers.
     */
    respect_strong_etags?: boolean;

    /**
     * Define if Cloudflare should serve stale content while getting the latest content
     * from the origin. If on, Cloudflare will not serve stale content while getting
     * the latest content from the origin.
     */
    serve_stale?: ActionParameters.ServeStale;
  }

  export namespace ActionParameters {
    /**
     * Specify how long client browsers should cache the response. Cloudflare cache
     * purge will not purge content cached on client browsers, so high browser TTLs may
     * lead to stale content.
     */
    export interface BrowserTTL {
      /**
       * Determines which browser ttl mode to use.
       */
      mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

      /**
       * The TTL (in seconds) if you choose override_origin mode.
       */
      default?: number;
    }

    /**
     * Define which components of the request are included or excluded from the cache
     * key Cloudflare uses to store the response in cache.
     */
    export interface CacheKey {
      /**
       * Separate cached content based on the visitor’s device type
       */
      cache_by_device_type?: boolean;

      /**
       * Protect from web cache deception attacks while allowing static assets to be
       * cached
       */
      cache_deception_armor?: boolean;

      /**
       * Customize which components of the request are included or excluded from the
       * cache key.
       */
      custom_key?: CacheKey.CustomKey;

      /**
       * Treat requests with the same query parameters the same, regardless of the order
       * those query parameters are in. A value of true ignores the query strings' order.
       */
      ignore_query_strings_order?: boolean;
    }

    export namespace CacheKey {
      /**
       * Customize which components of the request are included or excluded from the
       * cache key.
       */
      export interface CustomKey {
        /**
         * The cookies to include in building the cache key.
         */
        cookie?: CustomKey.Cookie;

        /**
         * The header names and values to include in building the cache key.
         */
        header?: CustomKey.Header;

        /**
         * Whether to use the original host or the resolved host in the cache key.
         */
        host?: CustomKey.Host;

        /**
         * Use the presence or absence of parameters in the query string to build the cache
         * key.
         */
        query_string?: CustomKey.QueryString;

        /**
         * Characteristics of the request user agent used in building the cache key.
         */
        user?: CustomKey.User;
      }

      export namespace CustomKey {
        /**
         * The cookies to include in building the cache key.
         */
        export interface Cookie {
          /**
           * Checks for the presence of these cookie names. The presence of these cookies is
           * used in building the cache key.
           */
          check_presence?: Array<string>;

          /**
           * Include these cookies' names and their values.
           */
          include?: Array<string>;
        }

        /**
         * The header names and values to include in building the cache key.
         */
        export interface Header {
          /**
           * Checks for the presence of these header names. The presence of these headers is
           * used in building the cache key.
           */
          check_presence?: Array<string>;

          /**
           * For each header name and list of values combination, check if the request header
           * contains any of the values provided. The presence of the request header and
           * whether any of the values provided are contained in the request header value is
           * used in building the cache key.
           */
          contains?: Record<string, Array<string>>;

          /**
           * Whether or not to include the origin header. A value of true will exclude the
           * origin header in the cache key.
           */
          exclude_origin?: boolean;

          /**
           * Include these headers' names and their values.
           */
          include?: Array<string>;
        }

        /**
         * Whether to use the original host or the resolved host in the cache key.
         */
        export interface Host {
          /**
           * Use the resolved host in the cache key. A value of true will use the resolved
           * host, while a value or false will use the original host.
           */
          resolved?: boolean;
        }

        /**
         * Use the presence or absence of parameters in the query string to build the cache
         * key.
         */
        export interface QueryString {
          /**
           * build the cache key using all query string parameters EXCECPT these excluded
           * parameters
           */
          exclude?: QueryString.Exclude;

          /**
           * build the cache key using a list of query string parameters that ARE in the
           * request.
           */
          include?: QueryString.Include;
        }

        export namespace QueryString {
          /**
           * build the cache key using all query string parameters EXCECPT these excluded
           * parameters
           */
          export interface Exclude {
            /**
             * Exclude all query string parameters from use in building the cache key.
             */
            all?: boolean;

            /**
             * A list of query string parameters NOT used to build the cache key. All
             * parameters present in the request but missing in this list will be used to build
             * the cache key.
             */
            list?: Array<string>;
          }

          /**
           * build the cache key using a list of query string parameters that ARE in the
           * request.
           */
          export interface Include {
            /**
             * Use all query string parameters in the cache key.
             */
            all?: boolean;

            /**
             * A list of query string parameters used to build the cache key.
             */
            list?: Array<string>;
          }
        }

        /**
         * Characteristics of the request user agent used in building the cache key.
         */
        export interface User {
          /**
           * Use the user agent's device type in the cache key.
           */
          device_type?: boolean;

          /**
           * Use the user agents's country in the cache key.
           */
          geo?: boolean;

          /**
           * Use the user agent's language in the cache key.
           */
          lang?: boolean;
        }
      }
    }

    /**
     * Mark whether the request's response from origin is eligible for Cache Reserve
     * (requires a Cache Reserve add-on plan).
     */
    export interface CacheReserve {
      /**
       * Determines whether cache reserve is enabled. If this is true and a request meets
       * eligibility criteria, Cloudflare will write the resource to cache reserve.
       */
      eligible: boolean;

      /**
       * The minimum file size eligible for store in cache reserve.
       */
      minimum_file_size: number;
    }

    /**
     * TTL (Time to Live) specifies the maximum time to cache a resource in the
     * Cloudflare edge network.
     */
    export interface EdgeTTL {
      /**
       * The TTL (in seconds) if you choose override_origin mode.
       */
      default: number;

      /**
       * edge ttl options
       */
      mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

      /**
       * List of single status codes, or status code ranges to apply the selected mode
       */
      status_code_ttl: Array<EdgeTTL.StatusCodeTTL>;
    }

    export namespace EdgeTTL {
      /**
       * Specify how long Cloudflare should cache the response based on the status code
       * from the origin. Can be a single status code or a range or status codes
       */
      export interface StatusCodeTTL {
        /**
         * Time to cache a response (in seconds). A value of 0 is equivalent to setting the
         * Cache-Control header with the value "no-cache". A value of -1 is equivalent to
         * setting Cache-Control header with the value of "no-store".
         */
        value: number;

        /**
         * The range of status codes used to apply the selected mode.
         */
        status_code_range?: StatusCodeTTL.StatusCodeRange;

        /**
         * Set the ttl for responses with this specific status code
         */
        status_code_value?: number;
      }

      export namespace StatusCodeTTL {
        /**
         * The range of status codes used to apply the selected mode.
         */
        export interface StatusCodeRange {
          /**
           * response status code lower bound
           */
          from: number;

          /**
           * response status code upper bound
           */
          to: number;
        }
      }
    }

    /**
     * Define if Cloudflare should serve stale content while getting the latest content
     * from the origin. If on, Cloudflare will not serve stale content while getting
     * the latest content from the origin.
     */
    export interface ServeStale {
      /**
       * Defines whether Cloudflare should serve stale content while updating. If true,
       * Cloudflare will not serve stale content while getting the latest content from
       * the origin.
       */
      disable_stale_while_updating: boolean;
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface SetCacheSettingsRuleParam {
  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'set_cache_settings';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: SetCacheSettingsRuleParam.ActionParameters;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: SetCacheSettingsRuleParam.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: LoggingParam;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: SetCacheSettingsRuleParam.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace SetCacheSettingsRuleParam {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * List of additional ports that caching can be enabled on.
     */
    additional_cacheable_ports?: Array<number>;

    /**
     * Specify how long client browsers should cache the response. Cloudflare cache
     * purge will not purge content cached on client browsers, so high browser TTLs may
     * lead to stale content.
     */
    browser_ttl?: ActionParameters.BrowserTTL;

    /**
     * Mark whether the request’s response from origin is eligible for caching. Caching
     * itself will still depend on the cache-control header and your other caching
     * configurations.
     */
    cache?: boolean;

    /**
     * Define which components of the request are included or excluded from the cache
     * key Cloudflare uses to store the response in cache.
     */
    cache_key?: ActionParameters.CacheKey;

    /**
     * Mark whether the request's response from origin is eligible for Cache Reserve
     * (requires a Cache Reserve add-on plan).
     */
    cache_reserve?: ActionParameters.CacheReserve;

    /**
     * TTL (Time to Live) specifies the maximum time to cache a resource in the
     * Cloudflare edge network.
     */
    edge_ttl?: ActionParameters.EdgeTTL;

    /**
     * When enabled, Cloudflare will aim to strictly adhere to RFC 7234.
     */
    origin_cache_control?: boolean;

    /**
     * Generate Cloudflare error pages from issues sent from the origin server. When
     * on, error pages will trigger for issues from the origin
     */
    origin_error_page_passthru?: boolean;

    /**
     * Define a timeout value between two successive read operations to your origin
     * server. Historically, the timeout value between two read options from Cloudflare
     * to an origin server is 100 seconds. If you are attempting to reduce HTTP 524
     * errors because of timeouts from an origin server, try increasing this timeout
     * value.
     */
    read_timeout?: number;

    /**
     * Specify whether or not Cloudflare should respect strong ETag (entity tag)
     * headers. When off, Cloudflare converts strong ETag headers to weak ETag headers.
     */
    respect_strong_etags?: boolean;

    /**
     * Define if Cloudflare should serve stale content while getting the latest content
     * from the origin. If on, Cloudflare will not serve stale content while getting
     * the latest content from the origin.
     */
    serve_stale?: ActionParameters.ServeStale;
  }

  export namespace ActionParameters {
    /**
     * Specify how long client browsers should cache the response. Cloudflare cache
     * purge will not purge content cached on client browsers, so high browser TTLs may
     * lead to stale content.
     */
    export interface BrowserTTL {
      /**
       * Determines which browser ttl mode to use.
       */
      mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

      /**
       * The TTL (in seconds) if you choose override_origin mode.
       */
      default?: number;
    }

    /**
     * Define which components of the request are included or excluded from the cache
     * key Cloudflare uses to store the response in cache.
     */
    export interface CacheKey {
      /**
       * Separate cached content based on the visitor’s device type
       */
      cache_by_device_type?: boolean;

      /**
       * Protect from web cache deception attacks while allowing static assets to be
       * cached
       */
      cache_deception_armor?: boolean;

      /**
       * Customize which components of the request are included or excluded from the
       * cache key.
       */
      custom_key?: CacheKey.CustomKey;

      /**
       * Treat requests with the same query parameters the same, regardless of the order
       * those query parameters are in. A value of true ignores the query strings' order.
       */
      ignore_query_strings_order?: boolean;
    }

    export namespace CacheKey {
      /**
       * Customize which components of the request are included or excluded from the
       * cache key.
       */
      export interface CustomKey {
        /**
         * The cookies to include in building the cache key.
         */
        cookie?: CustomKey.Cookie;

        /**
         * The header names and values to include in building the cache key.
         */
        header?: CustomKey.Header;

        /**
         * Whether to use the original host or the resolved host in the cache key.
         */
        host?: CustomKey.Host;

        /**
         * Use the presence or absence of parameters in the query string to build the cache
         * key.
         */
        query_string?: CustomKey.QueryString;

        /**
         * Characteristics of the request user agent used in building the cache key.
         */
        user?: CustomKey.User;
      }

      export namespace CustomKey {
        /**
         * The cookies to include in building the cache key.
         */
        export interface Cookie {
          /**
           * Checks for the presence of these cookie names. The presence of these cookies is
           * used in building the cache key.
           */
          check_presence?: Array<string>;

          /**
           * Include these cookies' names and their values.
           */
          include?: Array<string>;
        }

        /**
         * The header names and values to include in building the cache key.
         */
        export interface Header {
          /**
           * Checks for the presence of these header names. The presence of these headers is
           * used in building the cache key.
           */
          check_presence?: Array<string>;

          /**
           * For each header name and list of values combination, check if the request header
           * contains any of the values provided. The presence of the request header and
           * whether any of the values provided are contained in the request header value is
           * used in building the cache key.
           */
          contains?: Record<string, Array<string>>;

          /**
           * Whether or not to include the origin header. A value of true will exclude the
           * origin header in the cache key.
           */
          exclude_origin?: boolean;

          /**
           * Include these headers' names and their values.
           */
          include?: Array<string>;
        }

        /**
         * Whether to use the original host or the resolved host in the cache key.
         */
        export interface Host {
          /**
           * Use the resolved host in the cache key. A value of true will use the resolved
           * host, while a value or false will use the original host.
           */
          resolved?: boolean;
        }

        /**
         * Use the presence or absence of parameters in the query string to build the cache
         * key.
         */
        export interface QueryString {
          /**
           * build the cache key using all query string parameters EXCECPT these excluded
           * parameters
           */
          exclude?: QueryString.Exclude;

          /**
           * build the cache key using a list of query string parameters that ARE in the
           * request.
           */
          include?: QueryString.Include;
        }

        export namespace QueryString {
          /**
           * build the cache key using all query string parameters EXCECPT these excluded
           * parameters
           */
          export interface Exclude {
            /**
             * Exclude all query string parameters from use in building the cache key.
             */
            all?: boolean;

            /**
             * A list of query string parameters NOT used to build the cache key. All
             * parameters present in the request but missing in this list will be used to build
             * the cache key.
             */
            list?: Array<string>;
          }

          /**
           * build the cache key using a list of query string parameters that ARE in the
           * request.
           */
          export interface Include {
            /**
             * Use all query string parameters in the cache key.
             */
            all?: boolean;

            /**
             * A list of query string parameters used to build the cache key.
             */
            list?: Array<string>;
          }
        }

        /**
         * Characteristics of the request user agent used in building the cache key.
         */
        export interface User {
          /**
           * Use the user agent's device type in the cache key.
           */
          device_type?: boolean;

          /**
           * Use the user agents's country in the cache key.
           */
          geo?: boolean;

          /**
           * Use the user agent's language in the cache key.
           */
          lang?: boolean;
        }
      }
    }

    /**
     * Mark whether the request's response from origin is eligible for Cache Reserve
     * (requires a Cache Reserve add-on plan).
     */
    export interface CacheReserve {
      /**
       * Determines whether cache reserve is enabled. If this is true and a request meets
       * eligibility criteria, Cloudflare will write the resource to cache reserve.
       */
      eligible: boolean;

      /**
       * The minimum file size eligible for store in cache reserve.
       */
      minimum_file_size: number;
    }

    /**
     * TTL (Time to Live) specifies the maximum time to cache a resource in the
     * Cloudflare edge network.
     */
    export interface EdgeTTL {
      /**
       * The TTL (in seconds) if you choose override_origin mode.
       */
      default: number;

      /**
       * edge ttl options
       */
      mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

      /**
       * List of single status codes, or status code ranges to apply the selected mode
       */
      status_code_ttl: Array<EdgeTTL.StatusCodeTTL>;
    }

    export namespace EdgeTTL {
      /**
       * Specify how long Cloudflare should cache the response based on the status code
       * from the origin. Can be a single status code or a range or status codes
       */
      export interface StatusCodeTTL {
        /**
         * Time to cache a response (in seconds). A value of 0 is equivalent to setting the
         * Cache-Control header with the value "no-cache". A value of -1 is equivalent to
         * setting Cache-Control header with the value of "no-store".
         */
        value: number;

        /**
         * The range of status codes used to apply the selected mode.
         */
        status_code_range?: StatusCodeTTL.StatusCodeRange;

        /**
         * Set the ttl for responses with this specific status code
         */
        status_code_value?: number;
      }

      export namespace StatusCodeTTL {
        /**
         * The range of status codes used to apply the selected mode.
         */
        export interface StatusCodeRange {
          /**
           * response status code lower bound
           */
          from: number;

          /**
           * response status code upper bound
           */
          to: number;
        }
      }
    }

    /**
     * Define if Cloudflare should serve stale content while getting the latest content
     * from the origin. If on, Cloudflare will not serve stale content while getting
     * the latest content from the origin.
     */
    export interface ServeStale {
      /**
       * Defines whether Cloudflare should serve stale content while updating. If true,
       * Cloudflare will not serve stale content while getting the latest content from
       * the origin.
       */
      disable_stale_while_updating: boolean;
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface SetConfigRule {
  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The version of the rule.
   */
  version: string;

  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'set_config';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: SetConfigRule.ActionParameters;

  /**
   * The categories of the rule.
   */
  categories?: Array<string>;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: SetConfigRule.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: Logging;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: SetConfigRule.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace SetConfigRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * Turn on or off Automatic HTTPS Rewrites.
     */
    automatic_https_rewrites?: boolean;

    /**
     * Select which file extensions to minify automatically.
     */
    autominify?: ActionParameters.Autominify;

    /**
     * Turn on or off Browser Integrity Check.
     */
    bic?: boolean;

    /**
     * Turn off all active Cloudflare Apps.
     */
    disable_apps?: true;

    /**
     * Turn off Real User Monitoring (RUM).
     */
    disable_rum?: true;

    /**
     * Turn off Zaraz.
     */
    disable_zaraz?: true;

    /**
     * Turn on or off Email Obfuscation.
     */
    email_obfuscation?: boolean;

    /**
     * Turn on or off Cloudflare Fonts.
     */
    fonts?: boolean;

    /**
     * Turn on or off the Hotlink Protection.
     */
    hotlink_protection?: boolean;

    /**
     * Turn on or off Mirage.
     */
    mirage?: boolean;

    /**
     * Turn on or off Opportunistic Encryption.
     */
    opportunistic_encryption?: boolean;

    /**
     * Configure the Polish level.
     */
    polish?: 'off' | 'lossless' | 'lossy';

    /**
     * Turn on or off Rocket Loader
     */
    rocket_loader?: boolean;

    /**
     * Configure the Security Level.
     */
    security_level?: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';

    /**
     * Turn on or off Server Side Excludes.
     */
    server_side_excludes?: boolean;

    /**
     * Configure the SSL level.
     */
    ssl?: 'off' | 'flexible' | 'full' | 'strict' | 'origin_pull';

    /**
     * Turn on or off Signed Exchanges (SXG).
     */
    sxg?: boolean;
  }

  export namespace ActionParameters {
    /**
     * Select which file extensions to minify automatically.
     */
    export interface Autominify {
      /**
       * Minify CSS files.
       */
      css?: boolean;

      /**
       * Minify HTML files.
       */
      html?: boolean;

      /**
       * Minify JS files.
       */
      js?: boolean;
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface SetConfigRuleParam {
  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'set_config';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: SetConfigRuleParam.ActionParameters;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: SetConfigRuleParam.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: LoggingParam;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: SetConfigRuleParam.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace SetConfigRuleParam {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * Turn on or off Automatic HTTPS Rewrites.
     */
    automatic_https_rewrites?: boolean;

    /**
     * Select which file extensions to minify automatically.
     */
    autominify?: ActionParameters.Autominify;

    /**
     * Turn on or off Browser Integrity Check.
     */
    bic?: boolean;

    /**
     * Turn off all active Cloudflare Apps.
     */
    disable_apps?: true;

    /**
     * Turn off Real User Monitoring (RUM).
     */
    disable_rum?: true;

    /**
     * Turn off Zaraz.
     */
    disable_zaraz?: true;

    /**
     * Turn on or off Email Obfuscation.
     */
    email_obfuscation?: boolean;

    /**
     * Turn on or off Cloudflare Fonts.
     */
    fonts?: boolean;

    /**
     * Turn on or off the Hotlink Protection.
     */
    hotlink_protection?: boolean;

    /**
     * Turn on or off Mirage.
     */
    mirage?: boolean;

    /**
     * Turn on or off Opportunistic Encryption.
     */
    opportunistic_encryption?: boolean;

    /**
     * Configure the Polish level.
     */
    polish?: 'off' | 'lossless' | 'lossy';

    /**
     * Turn on or off Rocket Loader
     */
    rocket_loader?: boolean;

    /**
     * Configure the Security Level.
     */
    security_level?: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';

    /**
     * Turn on or off Server Side Excludes.
     */
    server_side_excludes?: boolean;

    /**
     * Configure the SSL level.
     */
    ssl?: 'off' | 'flexible' | 'full' | 'strict' | 'origin_pull';

    /**
     * Turn on or off Signed Exchanges (SXG).
     */
    sxg?: boolean;
  }

  export namespace ActionParameters {
    /**
     * Select which file extensions to minify automatically.
     */
    export interface Autominify {
      /**
       * Minify CSS files.
       */
      css?: boolean;

      /**
       * Minify HTML files.
       */
      html?: boolean;

      /**
       * Minify JS files.
       */
      js?: boolean;
    }
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface SkipRule {
  /**
   * The timestamp of when the rule was last modified.
   */
  last_updated: string;

  /**
   * The version of the rule.
   */
  version: string;

  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'skip';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: SkipRule.ActionParameters;

  /**
   * The categories of the rule.
   */
  categories?: Array<string>;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: SkipRule.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: Logging;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: SkipRule.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace SkipRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * A list of phases to skip the execution of. This option is incompatible with the
     * ruleset and rulesets options.
     */
    phases?: Array<RulesetsAPI.Phase>;

    /**
     * A list of legacy security products to skip the execution of.
     */
    products?: Array<'bic' | 'hot' | 'rateLimit' | 'securityLevel' | 'uaBlock' | 'waf' | 'zoneLockdown'>;

    /**
     * A mapping of ruleset IDs to a list of rule IDs in that ruleset to skip the
     * execution of. This option is incompatible with the ruleset option.
     */
    rules?: Record<string, Array<string>>;

    /**
     * A ruleset to skip the execution of. This option is incompatible with the
     * rulesets, rules and phases options.
     */
    ruleset?: 'current';

    /**
     * A list of ruleset IDs to skip the execution of. This option is incompatible with
     * the ruleset and phases options.
     */
    rulesets?: Array<string>;
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

export interface SkipRuleParam {
  /**
   * The unique ID of the rule.
   */
  id?: string;

  /**
   * The action to perform when the rule matches.
   */
  action?: 'skip';

  /**
   * The parameters configuring the rule's action.
   */
  action_parameters?: SkipRuleParam.ActionParameters;

  /**
   * An informative description of the rule.
   */
  description?: string;

  /**
   * Whether the rule should be executed.
   */
  enabled?: boolean;

  /**
   * Configure checks for exposed credentials.
   */
  exposed_credential_check?: SkipRuleParam.ExposedCredentialCheck;

  /**
   * The expression defining which traffic will match the rule.
   */
  expression?: string;

  /**
   * An object configuring the rule's logging behavior.
   */
  logging?: LoggingParam;

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  ratelimit?: SkipRuleParam.Ratelimit;

  /**
   * The reference of the rule (the rule ID by default).
   */
  ref?: string;
}

export namespace SkipRuleParam {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * A list of phases to skip the execution of. This option is incompatible with the
     * ruleset and rulesets options.
     */
    phases?: Array<RulesetsAPI.PhaseParam>;

    /**
     * A list of legacy security products to skip the execution of.
     */
    products?: Array<'bic' | 'hot' | 'rateLimit' | 'securityLevel' | 'uaBlock' | 'waf' | 'zoneLockdown'>;

    /**
     * A mapping of ruleset IDs to a list of rule IDs in that ruleset to skip the
     * execution of. This option is incompatible with the ruleset option.
     */
    rules?: Record<string, Array<string>>;

    /**
     * A ruleset to skip the execution of. This option is incompatible with the
     * rulesets, rules and phases options.
     */
    ruleset?: 'current';

    /**
     * A list of ruleset IDs to skip the execution of. This option is incompatible with
     * the ruleset and phases options.
     */
    rulesets?: Array<string>;
  }

  /**
   * Configure checks for exposed credentials.
   */
  export interface ExposedCredentialCheck {
    /**
     * Expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * Expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's ratelimit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the ratelimiter counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: 10 | 60 | 600 | 3600;

    /**
     * Defines when the ratelimit counter should be incremented. It is optional and
     * defaults to the same as the rule's expression.
     */
    counting_expression?: string;

    /**
     * Period of time in seconds after which the action will be disabled following its
     * first execution.
     */
    mitigation_timeout?: number;

    /**
     * The threshold of requests per period after which the action will be executed for
     * the first time.
     */
    requests_per_period?: number;

    /**
     * Defines if ratelimit counting is only done when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * The response header name provided by the origin which should contain the score
     * to increment ratelimit counter on.
     */
    score_response_header_name?: number;
  }
}

/**
 * A ruleset object.
 */
export interface RuleCreateResponse {
  /**
   * The unique ID of the ruleset.
   */
  id: string;

  /**
   * The kind of the ruleset.
   */
  kind: RulesetsAPI.Kind;

  /**
   * The timestamp of when the ruleset was last modified.
   */
  last_updated: string;

  /**
   * The human-readable name of the ruleset.
   */
  name: string;

  /**
   * The phase of the ruleset.
   */
  phase: RulesetsAPI.Phase;

  /**
   * The list of rules in the ruleset.
   */
  rules: Array<
    | BlockRule
    | RuleCreateResponse.RulesetsChallengeRule
    | CompressResponseRule
    | ExecuteRule
    | RuleCreateResponse.RulesetsJSChallengeRule
    | LogRule
    | ManagedChallengeRule
    | RedirectRule
    | RewriteRule
    | RouteRule
    | ScoreRule
    | ServeErrorRule
    | SetConfigRule
    | SkipRule
    | SetCacheSettingsRule
    | LogCustomFieldRule
    | DDoSDynamicRule
    | ForceConnectionCloseRule
  >;

  /**
   * The version of the ruleset.
   */
  version: string;

  /**
   * An informative description of the ruleset.
   */
  description?: string;
}

export namespace RuleCreateResponse {
  export interface RulesetsChallengeRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Configure checks for exposed credentials.
     */
    exposed_credential_check?: RulesetsChallengeRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RulesetsChallengeRule.Ratelimit;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsChallengeRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface RulesetsJSChallengeRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'js_challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Configure checks for exposed credentials.
     */
    exposed_credential_check?: RulesetsJSChallengeRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RulesetsJSChallengeRule.Ratelimit;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsJSChallengeRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }
}

/**
 * A ruleset object.
 */
export interface RuleDeleteResponse {
  /**
   * The unique ID of the ruleset.
   */
  id: string;

  /**
   * The kind of the ruleset.
   */
  kind: RulesetsAPI.Kind;

  /**
   * The timestamp of when the ruleset was last modified.
   */
  last_updated: string;

  /**
   * The human-readable name of the ruleset.
   */
  name: string;

  /**
   * The phase of the ruleset.
   */
  phase: RulesetsAPI.Phase;

  /**
   * The list of rules in the ruleset.
   */
  rules: Array<
    | BlockRule
    | RuleDeleteResponse.RulesetsChallengeRule
    | CompressResponseRule
    | ExecuteRule
    | RuleDeleteResponse.RulesetsJSChallengeRule
    | LogRule
    | ManagedChallengeRule
    | RedirectRule
    | RewriteRule
    | RouteRule
    | ScoreRule
    | ServeErrorRule
    | SetConfigRule
    | SkipRule
    | SetCacheSettingsRule
    | LogCustomFieldRule
    | DDoSDynamicRule
    | ForceConnectionCloseRule
  >;

  /**
   * The version of the ruleset.
   */
  version: string;

  /**
   * An informative description of the ruleset.
   */
  description?: string;
}

export namespace RuleDeleteResponse {
  export interface RulesetsChallengeRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Configure checks for exposed credentials.
     */
    exposed_credential_check?: RulesetsChallengeRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RulesetsChallengeRule.Ratelimit;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsChallengeRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface RulesetsJSChallengeRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'js_challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Configure checks for exposed credentials.
     */
    exposed_credential_check?: RulesetsJSChallengeRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RulesetsJSChallengeRule.Ratelimit;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsJSChallengeRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }
}

/**
 * A ruleset object.
 */
export interface RuleEditResponse {
  /**
   * The unique ID of the ruleset.
   */
  id: string;

  /**
   * The kind of the ruleset.
   */
  kind: RulesetsAPI.Kind;

  /**
   * The timestamp of when the ruleset was last modified.
   */
  last_updated: string;

  /**
   * The human-readable name of the ruleset.
   */
  name: string;

  /**
   * The phase of the ruleset.
   */
  phase: RulesetsAPI.Phase;

  /**
   * The list of rules in the ruleset.
   */
  rules: Array<
    | BlockRule
    | RuleEditResponse.RulesetsChallengeRule
    | CompressResponseRule
    | ExecuteRule
    | RuleEditResponse.RulesetsJSChallengeRule
    | LogRule
    | ManagedChallengeRule
    | RedirectRule
    | RewriteRule
    | RouteRule
    | ScoreRule
    | ServeErrorRule
    | SetConfigRule
    | SkipRule
    | SetCacheSettingsRule
    | LogCustomFieldRule
    | DDoSDynamicRule
    | ForceConnectionCloseRule
  >;

  /**
   * The version of the ruleset.
   */
  version: string;

  /**
   * An informative description of the ruleset.
   */
  description?: string;
}

export namespace RuleEditResponse {
  export interface RulesetsChallengeRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Configure checks for exposed credentials.
     */
    exposed_credential_check?: RulesetsChallengeRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RulesetsChallengeRule.Ratelimit;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsChallengeRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface RulesetsJSChallengeRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'js_challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Configure checks for exposed credentials.
     */
    exposed_credential_check?: RulesetsJSChallengeRule.ExposedCredentialCheck;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RulesetsJSChallengeRule.Ratelimit;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsJSChallengeRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }
}

export type RuleCreateParams =
  | RuleCreateParams.BlockRule
  | RuleCreateParams.RulesetsChallengeRule
  | RuleCreateParams.CompressResponseRule
  | RuleCreateParams.ExecuteRule
  | RuleCreateParams.RulesetsJSChallengeRule
  | RuleCreateParams.LogRule
  | RuleCreateParams.ManagedChallengeRule
  | RuleCreateParams.RedirectRule
  | RuleCreateParams.RewriteRule
  | RuleCreateParams.RouteRule
  | RuleCreateParams.ScoreRule
  | RuleCreateParams.ServeErrorRule
  | RuleCreateParams.SetConfigRule
  | RuleCreateParams.SkipRule
  | RuleCreateParams.SetCacheSettingsRule
  | RuleCreateParams.LogCustomFieldRule
  | RuleCreateParams.DDoSDynamicRule
  | RuleCreateParams.ForceConnectionCloseRule;

export namespace RuleCreateParams {
  export interface BlockRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'block';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleCreateParams.BlockRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.BlockRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.BlockRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace BlockRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The response to show when the block is applied.
       */
      response?: ActionParameters.Response;
    }

    export namespace ActionParameters {
      /**
       * The response to show when the block is applied.
       */
      export interface Response {
        /**
         * The content to return.
         */
        content: string;

        /**
         * The type of the content to return.
         */
        content_type: string;

        /**
         * The status code to return.
         */
        status_code: number;
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface RulesetsChallengeRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'challenge';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.RulesetsChallengeRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.RulesetsChallengeRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsChallengeRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface CompressResponseRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'compress_response';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleCreateParams.CompressResponseRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.CompressResponseRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.CompressResponseRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace CompressResponseRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Custom order for compression algorithms.
       */
      algorithms?: Array<ActionParameters.Algorithm>;
    }

    export namespace ActionParameters {
      /**
       * Compression algorithm to enable.
       */
      export interface Algorithm {
        /**
         * Name of compression algorithm to enable.
         */
        name?: 'none' | 'auto' | 'default' | 'gzip' | 'brotli';
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface ExecuteRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'execute';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleCreateParams.ExecuteRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.ExecuteRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.ExecuteRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace ExecuteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The ID of the ruleset to execute.
       */
      id: string;

      /**
       * The configuration to use for matched data logging.
       */
      matched_data?: ActionParameters.MatchedData;

      /**
       * A set of overrides to apply to the target ruleset.
       */
      overrides?: ActionParameters.Overrides;
    }

    export namespace ActionParameters {
      /**
       * The configuration to use for matched data logging.
       */
      export interface MatchedData {
        /**
         * The public key to encrypt matched data logs with.
         */
        public_key: string;
      }

      /**
       * A set of overrides to apply to the target ruleset.
       */
      export interface Overrides {
        /**
         * An action to override all rules with. This option has lower precedence than rule
         * and category overrides.
         */
        action?: string;

        /**
         * A list of category-level overrides. This option has the second-highest
         * precedence after rule-level overrides.
         */
        categories?: Array<Overrides.Category>;

        /**
         * Whether to enable execution of all rules. This option has lower precedence than
         * rule and category overrides.
         */
        enabled?: boolean;

        /**
         * A list of rule-level overrides. This option has the highest precedence.
         */
        rules?: Array<Overrides.Rule>;

        /**
         * A sensitivity level to set for all rules. This option has lower precedence than
         * rule and category overrides and is only applicable for DDoS phases.
         */
        sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
      }

      export namespace Overrides {
        /**
         * A category-level override
         */
        export interface Category {
          /**
           * The name of the category to override.
           */
          category: string;

          /**
           * The action to override rules in the category with.
           */
          action?: string;

          /**
           * Whether to enable execution of rules in the category.
           */
          enabled?: boolean;

          /**
           * The sensitivity level to use for rules in the category.
           */
          sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
        }

        /**
         * A rule-level override
         */
        export interface Rule {
          /**
           * The ID of the rule to override.
           */
          id: string;

          /**
           * The action to override the rule with.
           */
          action?: string;

          /**
           * Whether to enable execution of the rule.
           */
          enabled?: boolean;

          /**
           * The score threshold to use for the rule.
           */
          score_threshold?: number;

          /**
           * The sensitivity level to use for the rule.
           */
          sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
        }
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface RulesetsJSChallengeRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'js_challenge';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.RulesetsJSChallengeRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.RulesetsJSChallengeRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsJSChallengeRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface LogRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'log';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.LogRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.LogRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace LogRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface ManagedChallengeRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'managed_challenge';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.ManagedChallengeRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.ManagedChallengeRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace ManagedChallengeRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface RedirectRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'redirect';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleCreateParams.RedirectRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.RedirectRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.RedirectRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RedirectRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Serve a redirect based on a bulk list lookup.
       */
      from_list?: ActionParameters.FromList;

      /**
       * Serve a redirect based on the request properties.
       */
      from_value?: ActionParameters.FromValue;
    }

    export namespace ActionParameters {
      /**
       * Serve a redirect based on a bulk list lookup.
       */
      export interface FromList {
        /**
         * Expression that evaluates to the list lookup key.
         */
        key?: string;

        /**
         * The name of the list to match against.
         */
        name?: string;
      }

      /**
       * Serve a redirect based on the request properties.
       */
      export interface FromValue {
        /**
         * Keep the query string of the original request.
         */
        preserve_query_string?: boolean;

        /**
         * The status code to be used for the redirect.
         */
        status_code?: 301 | 302 | 303 | 307 | 308;

        /**
         * The URL to redirect the request to.
         */
        target_url?: FromValue.StaticURLRedirect | FromValue.DynamicURLRedirect;
      }

      export namespace FromValue {
        export interface StaticURLRedirect {
          /**
           * The URL to redirect the request to.
           */
          value?: string;
        }

        export interface DynamicURLRedirect {
          /**
           * An expression to evaluate to get the URL to redirect the request to.
           */
          expression?: string;
        }
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface RewriteRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'rewrite';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleCreateParams.RewriteRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.RewriteRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.RewriteRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RewriteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Map of request headers to modify.
       */
      headers?: Record<
        string,
        ActionParameters.RemoveHeader | ActionParameters.StaticHeader | ActionParameters.DynamicHeader
      >;

      /**
       * URI to rewrite the request to.
       */
      uri?: ActionParameters.URI;
    }

    export namespace ActionParameters {
      /**
       * Remove the header from the request.
       */
      export interface RemoveHeader {
        operation: 'remove';
      }

      /**
       * Set a request header with a static value.
       */
      export interface StaticHeader {
        operation: 'set';

        /**
         * Static value for the header.
         */
        value: string;
      }

      /**
       * Set a request header with a dynamic value.
       */
      export interface DynamicHeader {
        /**
         * Expression for the header value.
         */
        expression: string;

        operation: 'set';
      }

      /**
       * URI to rewrite the request to.
       */
      export interface URI {
        /**
         * Path portion rewrite.
         */
        path?: RulesAPI.RewriteURIPartParam;

        /**
         * Query portion rewrite.
         */
        query?: RulesAPI.RewriteURIPartParam;
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface RouteRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'route';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleCreateParams.RouteRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.RouteRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.RouteRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RouteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Rewrite the HTTP Host header.
       */
      host_header?: string;

      /**
       * Override the IP/TCP destination.
       */
      origin?: ActionParameters.Origin;

      /**
       * Override the Server Name Indication (SNI).
       */
      sni?: ActionParameters.SNI;
    }

    export namespace ActionParameters {
      /**
       * Override the IP/TCP destination.
       */
      export interface Origin {
        /**
         * Override the resolved hostname.
         */
        host?: string;

        /**
         * Override the destination port.
         */
        port?: number;
      }

      /**
       * Override the Server Name Indication (SNI).
       */
      export interface SNI {
        /**
         * The SNI override.
         */
        value: string;
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface ScoreRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'score';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleCreateParams.ScoreRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.ScoreRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.ScoreRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace ScoreRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Increment contains the delta to change the score and can be either positive or
       * negative.
       */
      increment?: number;
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface ServeErrorRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'serve_error';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleCreateParams.ServeErrorRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.ServeErrorRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.ServeErrorRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace ServeErrorRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Error response content.
       */
      content?: string;

      /**
       * Content-type header to set with the response.
       */
      content_type?: 'application/json' | 'text/xml' | 'text/plain' | 'text/html';

      /**
       * The status code to use for the error.
       */
      status_code?: number;
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface SetConfigRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'set_config';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleCreateParams.SetConfigRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.SetConfigRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.SetConfigRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace SetConfigRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Turn on or off Automatic HTTPS Rewrites.
       */
      automatic_https_rewrites?: boolean;

      /**
       * Select which file extensions to minify automatically.
       */
      autominify?: ActionParameters.Autominify;

      /**
       * Turn on or off Browser Integrity Check.
       */
      bic?: boolean;

      /**
       * Turn off all active Cloudflare Apps.
       */
      disable_apps?: true;

      /**
       * Turn off Real User Monitoring (RUM).
       */
      disable_rum?: true;

      /**
       * Turn off Zaraz.
       */
      disable_zaraz?: true;

      /**
       * Turn on or off Email Obfuscation.
       */
      email_obfuscation?: boolean;

      /**
       * Turn on or off Cloudflare Fonts.
       */
      fonts?: boolean;

      /**
       * Turn on or off the Hotlink Protection.
       */
      hotlink_protection?: boolean;

      /**
       * Turn on or off Mirage.
       */
      mirage?: boolean;

      /**
       * Turn on or off Opportunistic Encryption.
       */
      opportunistic_encryption?: boolean;

      /**
       * Configure the Polish level.
       */
      polish?: 'off' | 'lossless' | 'lossy';

      /**
       * Turn on or off Rocket Loader
       */
      rocket_loader?: boolean;

      /**
       * Configure the Security Level.
       */
      security_level?: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';

      /**
       * Turn on or off Server Side Excludes.
       */
      server_side_excludes?: boolean;

      /**
       * Configure the SSL level.
       */
      ssl?: 'off' | 'flexible' | 'full' | 'strict' | 'origin_pull';

      /**
       * Turn on or off Signed Exchanges (SXG).
       */
      sxg?: boolean;
    }

    export namespace ActionParameters {
      /**
       * Select which file extensions to minify automatically.
       */
      export interface Autominify {
        /**
         * Minify CSS files.
         */
        css?: boolean;

        /**
         * Minify HTML files.
         */
        html?: boolean;

        /**
         * Minify JS files.
         */
        js?: boolean;
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface SkipRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'skip';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleCreateParams.SkipRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.SkipRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.SkipRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace SkipRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * A list of phases to skip the execution of. This option is incompatible with the
       * ruleset and rulesets options.
       */
      phases?: Array<RulesetsAPI.PhaseParam>;

      /**
       * A list of legacy security products to skip the execution of.
       */
      products?: Array<'bic' | 'hot' | 'rateLimit' | 'securityLevel' | 'uaBlock' | 'waf' | 'zoneLockdown'>;

      /**
       * A mapping of ruleset IDs to a list of rule IDs in that ruleset to skip the
       * execution of. This option is incompatible with the ruleset option.
       */
      rules?: Record<string, Array<string>>;

      /**
       * A ruleset to skip the execution of. This option is incompatible with the
       * rulesets, rules and phases options.
       */
      ruleset?: 'current';

      /**
       * A list of ruleset IDs to skip the execution of. This option is incompatible with
       * the ruleset and phases options.
       */
      rulesets?: Array<string>;
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface SetCacheSettingsRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'set_cache_settings';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleCreateParams.SetCacheSettingsRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.SetCacheSettingsRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.SetCacheSettingsRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace SetCacheSettingsRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * List of additional ports that caching can be enabled on.
       */
      additional_cacheable_ports?: Array<number>;

      /**
       * Specify how long client browsers should cache the response. Cloudflare cache
       * purge will not purge content cached on client browsers, so high browser TTLs may
       * lead to stale content.
       */
      browser_ttl?: ActionParameters.BrowserTTL;

      /**
       * Mark whether the request’s response from origin is eligible for caching. Caching
       * itself will still depend on the cache-control header and your other caching
       * configurations.
       */
      cache?: boolean;

      /**
       * Define which components of the request are included or excluded from the cache
       * key Cloudflare uses to store the response in cache.
       */
      cache_key?: ActionParameters.CacheKey;

      /**
       * Mark whether the request's response from origin is eligible for Cache Reserve
       * (requires a Cache Reserve add-on plan).
       */
      cache_reserve?: ActionParameters.CacheReserve;

      /**
       * TTL (Time to Live) specifies the maximum time to cache a resource in the
       * Cloudflare edge network.
       */
      edge_ttl?: ActionParameters.EdgeTTL;

      /**
       * When enabled, Cloudflare will aim to strictly adhere to RFC 7234.
       */
      origin_cache_control?: boolean;

      /**
       * Generate Cloudflare error pages from issues sent from the origin server. When
       * on, error pages will trigger for issues from the origin
       */
      origin_error_page_passthru?: boolean;

      /**
       * Define a timeout value between two successive read operations to your origin
       * server. Historically, the timeout value between two read options from Cloudflare
       * to an origin server is 100 seconds. If you are attempting to reduce HTTP 524
       * errors because of timeouts from an origin server, try increasing this timeout
       * value.
       */
      read_timeout?: number;

      /**
       * Specify whether or not Cloudflare should respect strong ETag (entity tag)
       * headers. When off, Cloudflare converts strong ETag headers to weak ETag headers.
       */
      respect_strong_etags?: boolean;

      /**
       * Define if Cloudflare should serve stale content while getting the latest content
       * from the origin. If on, Cloudflare will not serve stale content while getting
       * the latest content from the origin.
       */
      serve_stale?: ActionParameters.ServeStale;
    }

    export namespace ActionParameters {
      /**
       * Specify how long client browsers should cache the response. Cloudflare cache
       * purge will not purge content cached on client browsers, so high browser TTLs may
       * lead to stale content.
       */
      export interface BrowserTTL {
        /**
         * Determines which browser ttl mode to use.
         */
        mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

        /**
         * The TTL (in seconds) if you choose override_origin mode.
         */
        default?: number;
      }

      /**
       * Define which components of the request are included or excluded from the cache
       * key Cloudflare uses to store the response in cache.
       */
      export interface CacheKey {
        /**
         * Separate cached content based on the visitor’s device type
         */
        cache_by_device_type?: boolean;

        /**
         * Protect from web cache deception attacks while allowing static assets to be
         * cached
         */
        cache_deception_armor?: boolean;

        /**
         * Customize which components of the request are included or excluded from the
         * cache key.
         */
        custom_key?: CacheKey.CustomKey;

        /**
         * Treat requests with the same query parameters the same, regardless of the order
         * those query parameters are in. A value of true ignores the query strings' order.
         */
        ignore_query_strings_order?: boolean;
      }

      export namespace CacheKey {
        /**
         * Customize which components of the request are included or excluded from the
         * cache key.
         */
        export interface CustomKey {
          /**
           * The cookies to include in building the cache key.
           */
          cookie?: CustomKey.Cookie;

          /**
           * The header names and values to include in building the cache key.
           */
          header?: CustomKey.Header;

          /**
           * Whether to use the original host or the resolved host in the cache key.
           */
          host?: CustomKey.Host;

          /**
           * Use the presence or absence of parameters in the query string to build the cache
           * key.
           */
          query_string?: CustomKey.QueryString;

          /**
           * Characteristics of the request user agent used in building the cache key.
           */
          user?: CustomKey.User;
        }

        export namespace CustomKey {
          /**
           * The cookies to include in building the cache key.
           */
          export interface Cookie {
            /**
             * Checks for the presence of these cookie names. The presence of these cookies is
             * used in building the cache key.
             */
            check_presence?: Array<string>;

            /**
             * Include these cookies' names and their values.
             */
            include?: Array<string>;
          }

          /**
           * The header names and values to include in building the cache key.
           */
          export interface Header {
            /**
             * Checks for the presence of these header names. The presence of these headers is
             * used in building the cache key.
             */
            check_presence?: Array<string>;

            /**
             * For each header name and list of values combination, check if the request header
             * contains any of the values provided. The presence of the request header and
             * whether any of the values provided are contained in the request header value is
             * used in building the cache key.
             */
            contains?: Record<string, Array<string>>;

            /**
             * Whether or not to include the origin header. A value of true will exclude the
             * origin header in the cache key.
             */
            exclude_origin?: boolean;

            /**
             * Include these headers' names and their values.
             */
            include?: Array<string>;
          }

          /**
           * Whether to use the original host or the resolved host in the cache key.
           */
          export interface Host {
            /**
             * Use the resolved host in the cache key. A value of true will use the resolved
             * host, while a value or false will use the original host.
             */
            resolved?: boolean;
          }

          /**
           * Use the presence or absence of parameters in the query string to build the cache
           * key.
           */
          export interface QueryString {
            /**
             * build the cache key using all query string parameters EXCECPT these excluded
             * parameters
             */
            exclude?: QueryString.Exclude;

            /**
             * build the cache key using a list of query string parameters that ARE in the
             * request.
             */
            include?: QueryString.Include;
          }

          export namespace QueryString {
            /**
             * build the cache key using all query string parameters EXCECPT these excluded
             * parameters
             */
            export interface Exclude {
              /**
               * Exclude all query string parameters from use in building the cache key.
               */
              all?: boolean;

              /**
               * A list of query string parameters NOT used to build the cache key. All
               * parameters present in the request but missing in this list will be used to build
               * the cache key.
               */
              list?: Array<string>;
            }

            /**
             * build the cache key using a list of query string parameters that ARE in the
             * request.
             */
            export interface Include {
              /**
               * Use all query string parameters in the cache key.
               */
              all?: boolean;

              /**
               * A list of query string parameters used to build the cache key.
               */
              list?: Array<string>;
            }
          }

          /**
           * Characteristics of the request user agent used in building the cache key.
           */
          export interface User {
            /**
             * Use the user agent's device type in the cache key.
             */
            device_type?: boolean;

            /**
             * Use the user agents's country in the cache key.
             */
            geo?: boolean;

            /**
             * Use the user agent's language in the cache key.
             */
            lang?: boolean;
          }
        }
      }

      /**
       * Mark whether the request's response from origin is eligible for Cache Reserve
       * (requires a Cache Reserve add-on plan).
       */
      export interface CacheReserve {
        /**
         * Determines whether cache reserve is enabled. If this is true and a request meets
         * eligibility criteria, Cloudflare will write the resource to cache reserve.
         */
        eligible: boolean;

        /**
         * The minimum file size eligible for store in cache reserve.
         */
        minimum_file_size: number;
      }

      /**
       * TTL (Time to Live) specifies the maximum time to cache a resource in the
       * Cloudflare edge network.
       */
      export interface EdgeTTL {
        /**
         * The TTL (in seconds) if you choose override_origin mode.
         */
        default: number;

        /**
         * edge ttl options
         */
        mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

        /**
         * List of single status codes, or status code ranges to apply the selected mode
         */
        status_code_ttl: Array<EdgeTTL.StatusCodeTTL>;
      }

      export namespace EdgeTTL {
        /**
         * Specify how long Cloudflare should cache the response based on the status code
         * from the origin. Can be a single status code or a range or status codes
         */
        export interface StatusCodeTTL {
          /**
           * Time to cache a response (in seconds). A value of 0 is equivalent to setting the
           * Cache-Control header with the value "no-cache". A value of -1 is equivalent to
           * setting Cache-Control header with the value of "no-store".
           */
          value: number;

          /**
           * The range of status codes used to apply the selected mode.
           */
          status_code_range?: StatusCodeTTL.StatusCodeRange;

          /**
           * Set the ttl for responses with this specific status code
           */
          status_code_value?: number;
        }

        export namespace StatusCodeTTL {
          /**
           * The range of status codes used to apply the selected mode.
           */
          export interface StatusCodeRange {
            /**
             * response status code lower bound
             */
            from: number;

            /**
             * response status code upper bound
             */
            to: number;
          }
        }
      }

      /**
       * Define if Cloudflare should serve stale content while getting the latest content
       * from the origin. If on, Cloudflare will not serve stale content while getting
       * the latest content from the origin.
       */
      export interface ServeStale {
        /**
         * Defines whether Cloudflare should serve stale content while updating. If true,
         * Cloudflare will not serve stale content while getting the latest content from
         * the origin.
         */
        disable_stale_while_updating: boolean;
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface LogCustomFieldRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'log_custom_field';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleCreateParams.LogCustomFieldRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.LogCustomFieldRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.LogCustomFieldRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace LogCustomFieldRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The cookie fields to log.
       */
      cookie_fields?: Array<ActionParameters.CookieField>;

      /**
       * The request fields to log.
       */
      request_fields?: Array<ActionParameters.RequestField>;

      /**
       * The response fields to log.
       */
      response_fields?: Array<ActionParameters.ResponseField>;
    }

    export namespace ActionParameters {
      /**
       * The cookie field to log.
       */
      export interface CookieField {
        /**
         * The name of the field.
         */
        name: string;
      }

      /**
       * The request field to log.
       */
      export interface RequestField {
        /**
         * The name of the field.
         */
        name: string;
      }

      /**
       * The response field to log.
       */
      export interface ResponseField {
        /**
         * The name of the field.
         */
        name: string;
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface DDoSDynamicRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'ddos_dynamic';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.DDoSDynamicRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.DDoSDynamicRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace DDoSDynamicRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface ForceConnectionCloseRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'force_connection_close';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleCreateParams.ForceConnectionCloseRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleCreateParams.ForceConnectionCloseRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace ForceConnectionCloseRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }
}

export interface RuleDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export type RuleEditParams =
  | RuleEditParams.BlockRule
  | RuleEditParams.RulesetsChallengeRule
  | RuleEditParams.CompressResponseRule
  | RuleEditParams.ExecuteRule
  | RuleEditParams.RulesetsJSChallengeRule
  | RuleEditParams.LogRule
  | RuleEditParams.ManagedChallengeRule
  | RuleEditParams.RedirectRule
  | RuleEditParams.RewriteRule
  | RuleEditParams.RouteRule
  | RuleEditParams.ScoreRule
  | RuleEditParams.ServeErrorRule
  | RuleEditParams.SetConfigRule
  | RuleEditParams.SkipRule
  | RuleEditParams.SetCacheSettingsRule
  | RuleEditParams.LogCustomFieldRule
  | RuleEditParams.DDoSDynamicRule
  | RuleEditParams.ForceConnectionCloseRule;

export namespace RuleEditParams {
  export interface BlockRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'block';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleEditParams.BlockRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.BlockRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.BlockRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace BlockRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The response to show when the block is applied.
       */
      response?: ActionParameters.Response;
    }

    export namespace ActionParameters {
      /**
       * The response to show when the block is applied.
       */
      export interface Response {
        /**
         * The content to return.
         */
        content: string;

        /**
         * The type of the content to return.
         */
        content_type: string;

        /**
         * The status code to return.
         */
        status_code: number;
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface RulesetsChallengeRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'challenge';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.RulesetsChallengeRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.RulesetsChallengeRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsChallengeRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface CompressResponseRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'compress_response';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleEditParams.CompressResponseRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.CompressResponseRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.CompressResponseRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace CompressResponseRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Custom order for compression algorithms.
       */
      algorithms?: Array<ActionParameters.Algorithm>;
    }

    export namespace ActionParameters {
      /**
       * Compression algorithm to enable.
       */
      export interface Algorithm {
        /**
         * Name of compression algorithm to enable.
         */
        name?: 'none' | 'auto' | 'default' | 'gzip' | 'brotli';
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface ExecuteRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'execute';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleEditParams.ExecuteRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.ExecuteRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.ExecuteRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace ExecuteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The ID of the ruleset to execute.
       */
      id: string;

      /**
       * The configuration to use for matched data logging.
       */
      matched_data?: ActionParameters.MatchedData;

      /**
       * A set of overrides to apply to the target ruleset.
       */
      overrides?: ActionParameters.Overrides;
    }

    export namespace ActionParameters {
      /**
       * The configuration to use for matched data logging.
       */
      export interface MatchedData {
        /**
         * The public key to encrypt matched data logs with.
         */
        public_key: string;
      }

      /**
       * A set of overrides to apply to the target ruleset.
       */
      export interface Overrides {
        /**
         * An action to override all rules with. This option has lower precedence than rule
         * and category overrides.
         */
        action?: string;

        /**
         * A list of category-level overrides. This option has the second-highest
         * precedence after rule-level overrides.
         */
        categories?: Array<Overrides.Category>;

        /**
         * Whether to enable execution of all rules. This option has lower precedence than
         * rule and category overrides.
         */
        enabled?: boolean;

        /**
         * A list of rule-level overrides. This option has the highest precedence.
         */
        rules?: Array<Overrides.Rule>;

        /**
         * A sensitivity level to set for all rules. This option has lower precedence than
         * rule and category overrides and is only applicable for DDoS phases.
         */
        sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
      }

      export namespace Overrides {
        /**
         * A category-level override
         */
        export interface Category {
          /**
           * The name of the category to override.
           */
          category: string;

          /**
           * The action to override rules in the category with.
           */
          action?: string;

          /**
           * Whether to enable execution of rules in the category.
           */
          enabled?: boolean;

          /**
           * The sensitivity level to use for rules in the category.
           */
          sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
        }

        /**
         * A rule-level override
         */
        export interface Rule {
          /**
           * The ID of the rule to override.
           */
          id: string;

          /**
           * The action to override the rule with.
           */
          action?: string;

          /**
           * Whether to enable execution of the rule.
           */
          enabled?: boolean;

          /**
           * The score threshold to use for the rule.
           */
          score_threshold?: number;

          /**
           * The sensitivity level to use for the rule.
           */
          sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
        }
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface RulesetsJSChallengeRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'js_challenge';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.RulesetsJSChallengeRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.RulesetsJSChallengeRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsJSChallengeRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface LogRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'log';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.LogRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.LogRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace LogRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface ManagedChallengeRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'managed_challenge';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.ManagedChallengeRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.ManagedChallengeRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace ManagedChallengeRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface RedirectRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'redirect';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleEditParams.RedirectRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.RedirectRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.RedirectRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RedirectRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Serve a redirect based on a bulk list lookup.
       */
      from_list?: ActionParameters.FromList;

      /**
       * Serve a redirect based on the request properties.
       */
      from_value?: ActionParameters.FromValue;
    }

    export namespace ActionParameters {
      /**
       * Serve a redirect based on a bulk list lookup.
       */
      export interface FromList {
        /**
         * Expression that evaluates to the list lookup key.
         */
        key?: string;

        /**
         * The name of the list to match against.
         */
        name?: string;
      }

      /**
       * Serve a redirect based on the request properties.
       */
      export interface FromValue {
        /**
         * Keep the query string of the original request.
         */
        preserve_query_string?: boolean;

        /**
         * The status code to be used for the redirect.
         */
        status_code?: 301 | 302 | 303 | 307 | 308;

        /**
         * The URL to redirect the request to.
         */
        target_url?: FromValue.StaticURLRedirect | FromValue.DynamicURLRedirect;
      }

      export namespace FromValue {
        export interface StaticURLRedirect {
          /**
           * The URL to redirect the request to.
           */
          value?: string;
        }

        export interface DynamicURLRedirect {
          /**
           * An expression to evaluate to get the URL to redirect the request to.
           */
          expression?: string;
        }
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface RewriteRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'rewrite';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleEditParams.RewriteRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.RewriteRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.RewriteRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RewriteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Map of request headers to modify.
       */
      headers?: Record<
        string,
        ActionParameters.RemoveHeader | ActionParameters.StaticHeader | ActionParameters.DynamicHeader
      >;

      /**
       * URI to rewrite the request to.
       */
      uri?: ActionParameters.URI;
    }

    export namespace ActionParameters {
      /**
       * Remove the header from the request.
       */
      export interface RemoveHeader {
        operation: 'remove';
      }

      /**
       * Set a request header with a static value.
       */
      export interface StaticHeader {
        operation: 'set';

        /**
         * Static value for the header.
         */
        value: string;
      }

      /**
       * Set a request header with a dynamic value.
       */
      export interface DynamicHeader {
        /**
         * Expression for the header value.
         */
        expression: string;

        operation: 'set';
      }

      /**
       * URI to rewrite the request to.
       */
      export interface URI {
        /**
         * Path portion rewrite.
         */
        path?: RulesAPI.RewriteURIPartParam;

        /**
         * Query portion rewrite.
         */
        query?: RulesAPI.RewriteURIPartParam;
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface RouteRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'route';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleEditParams.RouteRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.RouteRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.RouteRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RouteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Rewrite the HTTP Host header.
       */
      host_header?: string;

      /**
       * Override the IP/TCP destination.
       */
      origin?: ActionParameters.Origin;

      /**
       * Override the Server Name Indication (SNI).
       */
      sni?: ActionParameters.SNI;
    }

    export namespace ActionParameters {
      /**
       * Override the IP/TCP destination.
       */
      export interface Origin {
        /**
         * Override the resolved hostname.
         */
        host?: string;

        /**
         * Override the destination port.
         */
        port?: number;
      }

      /**
       * Override the Server Name Indication (SNI).
       */
      export interface SNI {
        /**
         * The SNI override.
         */
        value: string;
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface ScoreRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'score';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleEditParams.ScoreRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.ScoreRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.ScoreRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace ScoreRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Increment contains the delta to change the score and can be either positive or
       * negative.
       */
      increment?: number;
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface ServeErrorRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'serve_error';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleEditParams.ServeErrorRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.ServeErrorRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.ServeErrorRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace ServeErrorRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Error response content.
       */
      content?: string;

      /**
       * Content-type header to set with the response.
       */
      content_type?: 'application/json' | 'text/xml' | 'text/plain' | 'text/html';

      /**
       * The status code to use for the error.
       */
      status_code?: number;
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface SetConfigRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'set_config';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleEditParams.SetConfigRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.SetConfigRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.SetConfigRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace SetConfigRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Turn on or off Automatic HTTPS Rewrites.
       */
      automatic_https_rewrites?: boolean;

      /**
       * Select which file extensions to minify automatically.
       */
      autominify?: ActionParameters.Autominify;

      /**
       * Turn on or off Browser Integrity Check.
       */
      bic?: boolean;

      /**
       * Turn off all active Cloudflare Apps.
       */
      disable_apps?: true;

      /**
       * Turn off Real User Monitoring (RUM).
       */
      disable_rum?: true;

      /**
       * Turn off Zaraz.
       */
      disable_zaraz?: true;

      /**
       * Turn on or off Email Obfuscation.
       */
      email_obfuscation?: boolean;

      /**
       * Turn on or off Cloudflare Fonts.
       */
      fonts?: boolean;

      /**
       * Turn on or off the Hotlink Protection.
       */
      hotlink_protection?: boolean;

      /**
       * Turn on or off Mirage.
       */
      mirage?: boolean;

      /**
       * Turn on or off Opportunistic Encryption.
       */
      opportunistic_encryption?: boolean;

      /**
       * Configure the Polish level.
       */
      polish?: 'off' | 'lossless' | 'lossy';

      /**
       * Turn on or off Rocket Loader
       */
      rocket_loader?: boolean;

      /**
       * Configure the Security Level.
       */
      security_level?: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';

      /**
       * Turn on or off Server Side Excludes.
       */
      server_side_excludes?: boolean;

      /**
       * Configure the SSL level.
       */
      ssl?: 'off' | 'flexible' | 'full' | 'strict' | 'origin_pull';

      /**
       * Turn on or off Signed Exchanges (SXG).
       */
      sxg?: boolean;
    }

    export namespace ActionParameters {
      /**
       * Select which file extensions to minify automatically.
       */
      export interface Autominify {
        /**
         * Minify CSS files.
         */
        css?: boolean;

        /**
         * Minify HTML files.
         */
        html?: boolean;

        /**
         * Minify JS files.
         */
        js?: boolean;
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface SkipRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'skip';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleEditParams.SkipRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.SkipRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.SkipRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace SkipRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * A list of phases to skip the execution of. This option is incompatible with the
       * ruleset and rulesets options.
       */
      phases?: Array<RulesetsAPI.PhaseParam>;

      /**
       * A list of legacy security products to skip the execution of.
       */
      products?: Array<'bic' | 'hot' | 'rateLimit' | 'securityLevel' | 'uaBlock' | 'waf' | 'zoneLockdown'>;

      /**
       * A mapping of ruleset IDs to a list of rule IDs in that ruleset to skip the
       * execution of. This option is incompatible with the ruleset option.
       */
      rules?: Record<string, Array<string>>;

      /**
       * A ruleset to skip the execution of. This option is incompatible with the
       * rulesets, rules and phases options.
       */
      ruleset?: 'current';

      /**
       * A list of ruleset IDs to skip the execution of. This option is incompatible with
       * the ruleset and phases options.
       */
      rulesets?: Array<string>;
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface SetCacheSettingsRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'set_cache_settings';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleEditParams.SetCacheSettingsRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.SetCacheSettingsRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.SetCacheSettingsRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace SetCacheSettingsRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * List of additional ports that caching can be enabled on.
       */
      additional_cacheable_ports?: Array<number>;

      /**
       * Specify how long client browsers should cache the response. Cloudflare cache
       * purge will not purge content cached on client browsers, so high browser TTLs may
       * lead to stale content.
       */
      browser_ttl?: ActionParameters.BrowserTTL;

      /**
       * Mark whether the request’s response from origin is eligible for caching. Caching
       * itself will still depend on the cache-control header and your other caching
       * configurations.
       */
      cache?: boolean;

      /**
       * Define which components of the request are included or excluded from the cache
       * key Cloudflare uses to store the response in cache.
       */
      cache_key?: ActionParameters.CacheKey;

      /**
       * Mark whether the request's response from origin is eligible for Cache Reserve
       * (requires a Cache Reserve add-on plan).
       */
      cache_reserve?: ActionParameters.CacheReserve;

      /**
       * TTL (Time to Live) specifies the maximum time to cache a resource in the
       * Cloudflare edge network.
       */
      edge_ttl?: ActionParameters.EdgeTTL;

      /**
       * When enabled, Cloudflare will aim to strictly adhere to RFC 7234.
       */
      origin_cache_control?: boolean;

      /**
       * Generate Cloudflare error pages from issues sent from the origin server. When
       * on, error pages will trigger for issues from the origin
       */
      origin_error_page_passthru?: boolean;

      /**
       * Define a timeout value between two successive read operations to your origin
       * server. Historically, the timeout value between two read options from Cloudflare
       * to an origin server is 100 seconds. If you are attempting to reduce HTTP 524
       * errors because of timeouts from an origin server, try increasing this timeout
       * value.
       */
      read_timeout?: number;

      /**
       * Specify whether or not Cloudflare should respect strong ETag (entity tag)
       * headers. When off, Cloudflare converts strong ETag headers to weak ETag headers.
       */
      respect_strong_etags?: boolean;

      /**
       * Define if Cloudflare should serve stale content while getting the latest content
       * from the origin. If on, Cloudflare will not serve stale content while getting
       * the latest content from the origin.
       */
      serve_stale?: ActionParameters.ServeStale;
    }

    export namespace ActionParameters {
      /**
       * Specify how long client browsers should cache the response. Cloudflare cache
       * purge will not purge content cached on client browsers, so high browser TTLs may
       * lead to stale content.
       */
      export interface BrowserTTL {
        /**
         * Determines which browser ttl mode to use.
         */
        mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

        /**
         * The TTL (in seconds) if you choose override_origin mode.
         */
        default?: number;
      }

      /**
       * Define which components of the request are included or excluded from the cache
       * key Cloudflare uses to store the response in cache.
       */
      export interface CacheKey {
        /**
         * Separate cached content based on the visitor’s device type
         */
        cache_by_device_type?: boolean;

        /**
         * Protect from web cache deception attacks while allowing static assets to be
         * cached
         */
        cache_deception_armor?: boolean;

        /**
         * Customize which components of the request are included or excluded from the
         * cache key.
         */
        custom_key?: CacheKey.CustomKey;

        /**
         * Treat requests with the same query parameters the same, regardless of the order
         * those query parameters are in. A value of true ignores the query strings' order.
         */
        ignore_query_strings_order?: boolean;
      }

      export namespace CacheKey {
        /**
         * Customize which components of the request are included or excluded from the
         * cache key.
         */
        export interface CustomKey {
          /**
           * The cookies to include in building the cache key.
           */
          cookie?: CustomKey.Cookie;

          /**
           * The header names and values to include in building the cache key.
           */
          header?: CustomKey.Header;

          /**
           * Whether to use the original host or the resolved host in the cache key.
           */
          host?: CustomKey.Host;

          /**
           * Use the presence or absence of parameters in the query string to build the cache
           * key.
           */
          query_string?: CustomKey.QueryString;

          /**
           * Characteristics of the request user agent used in building the cache key.
           */
          user?: CustomKey.User;
        }

        export namespace CustomKey {
          /**
           * The cookies to include in building the cache key.
           */
          export interface Cookie {
            /**
             * Checks for the presence of these cookie names. The presence of these cookies is
             * used in building the cache key.
             */
            check_presence?: Array<string>;

            /**
             * Include these cookies' names and their values.
             */
            include?: Array<string>;
          }

          /**
           * The header names and values to include in building the cache key.
           */
          export interface Header {
            /**
             * Checks for the presence of these header names. The presence of these headers is
             * used in building the cache key.
             */
            check_presence?: Array<string>;

            /**
             * For each header name and list of values combination, check if the request header
             * contains any of the values provided. The presence of the request header and
             * whether any of the values provided are contained in the request header value is
             * used in building the cache key.
             */
            contains?: Record<string, Array<string>>;

            /**
             * Whether or not to include the origin header. A value of true will exclude the
             * origin header in the cache key.
             */
            exclude_origin?: boolean;

            /**
             * Include these headers' names and their values.
             */
            include?: Array<string>;
          }

          /**
           * Whether to use the original host or the resolved host in the cache key.
           */
          export interface Host {
            /**
             * Use the resolved host in the cache key. A value of true will use the resolved
             * host, while a value or false will use the original host.
             */
            resolved?: boolean;
          }

          /**
           * Use the presence or absence of parameters in the query string to build the cache
           * key.
           */
          export interface QueryString {
            /**
             * build the cache key using all query string parameters EXCECPT these excluded
             * parameters
             */
            exclude?: QueryString.Exclude;

            /**
             * build the cache key using a list of query string parameters that ARE in the
             * request.
             */
            include?: QueryString.Include;
          }

          export namespace QueryString {
            /**
             * build the cache key using all query string parameters EXCECPT these excluded
             * parameters
             */
            export interface Exclude {
              /**
               * Exclude all query string parameters from use in building the cache key.
               */
              all?: boolean;

              /**
               * A list of query string parameters NOT used to build the cache key. All
               * parameters present in the request but missing in this list will be used to build
               * the cache key.
               */
              list?: Array<string>;
            }

            /**
             * build the cache key using a list of query string parameters that ARE in the
             * request.
             */
            export interface Include {
              /**
               * Use all query string parameters in the cache key.
               */
              all?: boolean;

              /**
               * A list of query string parameters used to build the cache key.
               */
              list?: Array<string>;
            }
          }

          /**
           * Characteristics of the request user agent used in building the cache key.
           */
          export interface User {
            /**
             * Use the user agent's device type in the cache key.
             */
            device_type?: boolean;

            /**
             * Use the user agents's country in the cache key.
             */
            geo?: boolean;

            /**
             * Use the user agent's language in the cache key.
             */
            lang?: boolean;
          }
        }
      }

      /**
       * Mark whether the request's response from origin is eligible for Cache Reserve
       * (requires a Cache Reserve add-on plan).
       */
      export interface CacheReserve {
        /**
         * Determines whether cache reserve is enabled. If this is true and a request meets
         * eligibility criteria, Cloudflare will write the resource to cache reserve.
         */
        eligible: boolean;

        /**
         * The minimum file size eligible for store in cache reserve.
         */
        minimum_file_size: number;
      }

      /**
       * TTL (Time to Live) specifies the maximum time to cache a resource in the
       * Cloudflare edge network.
       */
      export interface EdgeTTL {
        /**
         * The TTL (in seconds) if you choose override_origin mode.
         */
        default: number;

        /**
         * edge ttl options
         */
        mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

        /**
         * List of single status codes, or status code ranges to apply the selected mode
         */
        status_code_ttl: Array<EdgeTTL.StatusCodeTTL>;
      }

      export namespace EdgeTTL {
        /**
         * Specify how long Cloudflare should cache the response based on the status code
         * from the origin. Can be a single status code or a range or status codes
         */
        export interface StatusCodeTTL {
          /**
           * Time to cache a response (in seconds). A value of 0 is equivalent to setting the
           * Cache-Control header with the value "no-cache". A value of -1 is equivalent to
           * setting Cache-Control header with the value of "no-store".
           */
          value: number;

          /**
           * The range of status codes used to apply the selected mode.
           */
          status_code_range?: StatusCodeTTL.StatusCodeRange;

          /**
           * Set the ttl for responses with this specific status code
           */
          status_code_value?: number;
        }

        export namespace StatusCodeTTL {
          /**
           * The range of status codes used to apply the selected mode.
           */
          export interface StatusCodeRange {
            /**
             * response status code lower bound
             */
            from: number;

            /**
             * response status code upper bound
             */
            to: number;
          }
        }
      }

      /**
       * Define if Cloudflare should serve stale content while getting the latest content
       * from the origin. If on, Cloudflare will not serve stale content while getting
       * the latest content from the origin.
       */
      export interface ServeStale {
        /**
         * Defines whether Cloudflare should serve stale content while updating. If true,
         * Cloudflare will not serve stale content while getting the latest content from
         * the origin.
         */
        disable_stale_while_updating: boolean;
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface LogCustomFieldRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'log_custom_field';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: RuleEditParams.LogCustomFieldRule.ActionParameters;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.LogCustomFieldRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.LogCustomFieldRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace LogCustomFieldRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * The cookie fields to log.
       */
      cookie_fields?: Array<ActionParameters.CookieField>;

      /**
       * The request fields to log.
       */
      request_fields?: Array<ActionParameters.RequestField>;

      /**
       * The response fields to log.
       */
      response_fields?: Array<ActionParameters.ResponseField>;
    }

    export namespace ActionParameters {
      /**
       * The cookie field to log.
       */
      export interface CookieField {
        /**
         * The name of the field.
         */
        name: string;
      }

      /**
       * The request field to log.
       */
      export interface RequestField {
        /**
         * The name of the field.
         */
        name: string;
      }

      /**
       * The response field to log.
       */
      export interface ResponseField {
        /**
         * The name of the field.
         */
        name: string;
      }
    }

    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface DDoSDynamicRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'ddos_dynamic';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.DDoSDynamicRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.DDoSDynamicRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace DDoSDynamicRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }

  export interface ForceConnectionCloseRule {
    /**
     * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
     * Zone ID.
     */
    account_id?: string;

    /**
     * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
     * Account ID.
     */
    zone_id?: string;

    /**
     * Body param: The unique ID of the rule.
     */
    id?: string;

    /**
     * Body param: The action to perform when the rule matches.
     */
    action?: 'force_connection_close';

    /**
     * Body param: The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * Body param: An informative description of the rule.
     */
    description?: string;

    /**
     * Body param: Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * Body param: Configure checks for exposed credentials.
     */
    exposed_credential_check?: RuleEditParams.ForceConnectionCloseRule.ExposedCredentialCheck;

    /**
     * Body param: The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * Body param: An object configuring the rule's logging behavior.
     */
    logging?: LoggingParam;

    /**
     * Body param: An object configuring the rule's ratelimit behavior.
     */
    ratelimit?: RuleEditParams.ForceConnectionCloseRule.Ratelimit;

    /**
     * Body param: The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace ForceConnectionCloseRule {
    /**
     * Configure checks for exposed credentials.
     */
    export interface ExposedCredentialCheck {
      /**
       * Expression that selects the password used in the credentials check.
       */
      password_expression: string;

      /**
       * Expression that selects the user ID used in the credentials check.
       */
      username_expression: string;
    }

    /**
     * An object configuring the rule's ratelimit behavior.
     */
    export interface Ratelimit {
      /**
       * Characteristics of the request on which the ratelimiter counter will be
       * incremented.
       */
      characteristics: Array<string>;

      /**
       * Period in seconds over which the counter is being incremented.
       */
      period: 10 | 60 | 600 | 3600;

      /**
       * Defines when the ratelimit counter should be incremented. It is optional and
       * defaults to the same as the rule's expression.
       */
      counting_expression?: string;

      /**
       * Period of time in seconds after which the action will be disabled following its
       * first execution.
       */
      mitigation_timeout?: number;

      /**
       * The threshold of requests per period after which the action will be executed for
       * the first time.
       */
      requests_per_period?: number;

      /**
       * Defines if ratelimit counting is only done when an origin is reached.
       */
      requests_to_origin?: boolean;

      /**
       * The score threshold per period for which the action will be executed the first
       * time.
       */
      score_per_period?: number;

      /**
       * The response header name provided by the origin which should contain the score
       * to increment ratelimit counter on.
       */
      score_response_header_name?: number;
    }
  }
}

export namespace Rules {
  export import BlockRule = RulesAPI.BlockRule;
  export import CompressResponseRule = RulesAPI.CompressResponseRule;
  export import DDoSDynamicRule = RulesAPI.DDoSDynamicRule;
  export import ExecuteRule = RulesAPI.ExecuteRule;
  export import ForceConnectionCloseRule = RulesAPI.ForceConnectionCloseRule;
  export import LogCustomFieldRule = RulesAPI.LogCustomFieldRule;
  export import LogRule = RulesAPI.LogRule;
  export import Logging = RulesAPI.Logging;
  export import ManagedChallengeRule = RulesAPI.ManagedChallengeRule;
  export import RedirectRule = RulesAPI.RedirectRule;
  export import RewriteRule = RulesAPI.RewriteRule;
  export import RewriteURIPart = RulesAPI.RewriteURIPart;
  export import RouteRule = RulesAPI.RouteRule;
  export import RulesetRule = RulesAPI.RulesetRule;
  export import ScoreRule = RulesAPI.ScoreRule;
  export import ServeErrorRule = RulesAPI.ServeErrorRule;
  export import SetCacheSettingsRule = RulesAPI.SetCacheSettingsRule;
  export import SetConfigRule = RulesAPI.SetConfigRule;
  export import SkipRule = RulesAPI.SkipRule;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleEditResponse = RulesAPI.RuleEditResponse;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleEditParams = RulesAPI.RuleEditParams;
}
