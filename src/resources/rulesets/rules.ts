// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RulesetsAPI from './rulesets';

export class Rules extends APIResource {}

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
   * Configuration for exposed credential checking.
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
   * An object configuring the rule's rate limit behavior.
   */
  ratelimit?: BlockRule.Ratelimit;

  /**
   * The reference of the rule (the rule's ID by default).
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
   * Configuration for exposed credential checking.
   */
  export interface ExposedCredentialCheck {
    /**
     * An expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * An expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's rate limit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the rate limit counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: number;

    /**
     * An expression that defines when the rate limit counter should be incremented. It
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
     * Whether counting is only performed when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * A response header name provided by the origin, which contains the score to
     * increment rate limit counter with.
     */
    score_response_header_name?: string;
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
   * Configuration for exposed credential checking.
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
   * An object configuring the rule's rate limit behavior.
   */
  ratelimit?: CompressResponseRule.Ratelimit;

  /**
   * The reference of the rule (the rule's ID by default).
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
    algorithms: Array<ActionParameters.Algorithm>;
  }

  export namespace ActionParameters {
    /**
     * Compression algorithm to enable.
     */
    export interface Algorithm {
      /**
       * Name of the compression algorithm to enable.
       */
      name?: 'none' | 'auto' | 'default' | 'gzip' | 'brotli' | 'zstd';
    }
  }

  /**
   * Configuration for exposed credential checking.
   */
  export interface ExposedCredentialCheck {
    /**
     * An expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * An expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's rate limit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the rate limit counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: number;

    /**
     * An expression that defines when the rate limit counter should be incremented. It
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
     * Whether counting is only performed when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * A response header name provided by the origin, which contains the score to
     * increment rate limit counter with.
     */
    score_response_header_name?: string;
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
   * Configuration for exposed credential checking.
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
   * An object configuring the rule's rate limit behavior.
   */
  ratelimit?: DDoSDynamicRule.Ratelimit;

  /**
   * The reference of the rule (the rule's ID by default).
   */
  ref?: string;
}

export namespace DDoSDynamicRule {
  /**
   * Configuration for exposed credential checking.
   */
  export interface ExposedCredentialCheck {
    /**
     * An expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * An expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's rate limit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the rate limit counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: number;

    /**
     * An expression that defines when the rate limit counter should be incremented. It
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
     * Whether counting is only performed when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * A response header name provided by the origin, which contains the score to
     * increment rate limit counter with.
     */
    score_response_header_name?: string;
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
   * Configuration for exposed credential checking.
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
   * An object configuring the rule's rate limit behavior.
   */
  ratelimit?: ExecuteRule.Ratelimit;

  /**
   * The reference of the rule (the rule's ID by default).
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
       * A category-level override.
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
         * The sensitivity level to use for rules in the category. This option is only
         * applicable for DDoS phases.
         */
        sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
      }

      /**
       * A rule-level override.
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
         * The sensitivity level to use for the rule. This option is only applicable for
         * DDoS phases.
         */
        sensitivity_level?: 'default' | 'medium' | 'low' | 'eoff';
      }
    }
  }

  /**
   * Configuration for exposed credential checking.
   */
  export interface ExposedCredentialCheck {
    /**
     * An expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * An expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's rate limit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the rate limit counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: number;

    /**
     * An expression that defines when the rate limit counter should be incremented. It
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
     * Whether counting is only performed when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * A response header name provided by the origin, which contains the score to
     * increment rate limit counter with.
     */
    score_response_header_name?: string;
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
   * Configuration for exposed credential checking.
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
   * An object configuring the rule's rate limit behavior.
   */
  ratelimit?: ForceConnectionCloseRule.Ratelimit;

  /**
   * The reference of the rule (the rule's ID by default).
   */
  ref?: string;
}

export namespace ForceConnectionCloseRule {
  /**
   * Configuration for exposed credential checking.
   */
  export interface ExposedCredentialCheck {
    /**
     * An expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * An expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's rate limit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the rate limit counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: number;

    /**
     * An expression that defines when the rate limit counter should be incremented. It
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
     * Whether counting is only performed when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * A response header name provided by the origin, which contains the score to
     * increment rate limit counter with.
     */
    score_response_header_name?: string;
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
   * Configuration for exposed credential checking.
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
   * An object configuring the rule's rate limit behavior.
   */
  ratelimit?: LogCustomFieldRule.Ratelimit;

  /**
   * The reference of the rule (the rule's ID by default).
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
     * The raw response fields to log.
     */
    raw_response_fields?: Array<ActionParameters.RawResponseField>;

    /**
     * The raw request fields to log.
     */
    request_fields?: Array<ActionParameters.RequestField>;

    /**
     * The transformed response fields to log.
     */
    response_fields?: Array<ActionParameters.ResponseField>;

    /**
     * The transformed request fields to log.
     */
    transformed_request_fields?: Array<ActionParameters.TransformedRequestField>;
  }

  export namespace ActionParameters {
    /**
     * The cookie field to log.
     */
    export interface CookieField {
      /**
       * The name of the cookie.
       */
      name: string;
    }

    /**
     * The raw response field to log.
     */
    export interface RawResponseField {
      /**
       * The name of the response header.
       */
      name: string;

      /**
       * Whether to log duplicate values of the same header.
       */
      preserve_duplicates?: boolean;
    }

    /**
     * The raw request field to log.
     */
    export interface RequestField {
      /**
       * The name of the header.
       */
      name: string;
    }

    /**
     * The transformed response field to log.
     */
    export interface ResponseField {
      /**
       * The name of the response header.
       */
      name: string;

      /**
       * Whether to log duplicate values of the same header.
       */
      preserve_duplicates?: boolean;
    }

    /**
     * The transformed request field to log.
     */
    export interface TransformedRequestField {
      /**
       * The name of the header.
       */
      name: string;
    }
  }

  /**
   * Configuration for exposed credential checking.
   */
  export interface ExposedCredentialCheck {
    /**
     * An expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * An expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's rate limit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the rate limit counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: number;

    /**
     * An expression that defines when the rate limit counter should be incremented. It
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
     * Whether counting is only performed when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * A response header name provided by the origin, which contains the score to
     * increment rate limit counter with.
     */
    score_response_header_name?: string;
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
   * Configuration for exposed credential checking.
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
   * An object configuring the rule's rate limit behavior.
   */
  ratelimit?: LogRule.Ratelimit;

  /**
   * The reference of the rule (the rule's ID by default).
   */
  ref?: string;
}

export namespace LogRule {
  /**
   * Configuration for exposed credential checking.
   */
  export interface ExposedCredentialCheck {
    /**
     * An expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * An expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's rate limit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the rate limit counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: number;

    /**
     * An expression that defines when the rate limit counter should be incremented. It
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
     * Whether counting is only performed when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * A response header name provided by the origin, which contains the score to
     * increment rate limit counter with.
     */
    score_response_header_name?: string;
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
   * Configuration for exposed credential checking.
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
   * An object configuring the rule's rate limit behavior.
   */
  ratelimit?: ManagedChallengeRule.Ratelimit;

  /**
   * The reference of the rule (the rule's ID by default).
   */
  ref?: string;
}

export namespace ManagedChallengeRule {
  /**
   * Configuration for exposed credential checking.
   */
  export interface ExposedCredentialCheck {
    /**
     * An expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * An expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's rate limit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the rate limit counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: number;

    /**
     * An expression that defines when the rate limit counter should be incremented. It
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
     * Whether counting is only performed when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * A response header name provided by the origin, which contains the score to
     * increment rate limit counter with.
     */
    score_response_header_name?: string;
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
   * Configuration for exposed credential checking.
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
   * An object configuring the rule's rate limit behavior.
   */
  ratelimit?: RedirectRule.Ratelimit;

  /**
   * The reference of the rule (the rule's ID by default).
   */
  ref?: string;
}

export namespace RedirectRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * A redirect based on a bulk list lookup.
     */
    from_list?: ActionParameters.FromList;

    /**
     * A redirect based on the request properties.
     */
    from_value?: ActionParameters.FromValue;
  }

  export namespace ActionParameters {
    /**
     * A redirect based on a bulk list lookup.
     */
    export interface FromList {
      /**
       * An expression that evaluates to the list lookup key.
       */
      key: string;

      /**
       * The name of the list to match against.
       */
      name: string;
    }

    /**
     * A redirect based on the request properties.
     */
    export interface FromValue {
      /**
       * A URL to redirect the request to.
       */
      target_url: FromValue.TargetURL;

      /**
       * Whether to keep the query string of the original request.
       */
      preserve_query_string?: boolean;

      /**
       * The status code to use for the redirect.
       */
      status_code?: 301 | 302 | 303 | 307 | 308;
    }

    export namespace FromValue {
      /**
       * A URL to redirect the request to.
       */
      export interface TargetURL {
        /**
         * An expression that evaluates to a URL to redirect the request to.
         */
        expression?: string;

        /**
         * A URL to redirect the request to.
         */
        value?: string;
      }
    }
  }

  /**
   * Configuration for exposed credential checking.
   */
  export interface ExposedCredentialCheck {
    /**
     * An expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * An expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's rate limit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the rate limit counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: number;

    /**
     * An expression that defines when the rate limit counter should be incremented. It
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
     * Whether counting is only performed when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * A response header name provided by the origin, which contains the score to
     * increment rate limit counter with.
     */
    score_response_header_name?: string;
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
   * Configuration for exposed credential checking.
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
   * An object configuring the rule's rate limit behavior.
   */
  ratelimit?: RewriteRule.Ratelimit;

  /**
   * The reference of the rule (the rule's ID by default).
   */
  ref?: string;
}

export namespace RewriteRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * A map of headers to rewrite.
     */
    headers?: {
      [key: string]:
        | ActionParameters.AddStaticHeader
        | ActionParameters.AddDynamicHeader
        | ActionParameters.SetStaticHeader
        | ActionParameters.SetDynamicHeader
        | ActionParameters.RemoveHeader;
    };

    /**
     * A URI path rewrite.
     */
    uri?: ActionParameters.URIPath | ActionParameters.URIQuery;
  }

  export namespace ActionParameters {
    /**
     * A header with a static value to add.
     */
    export interface AddStaticHeader {
      /**
       * The operation to perform on the header.
       */
      operation: 'add';

      /**
       * A static value for the header.
       */
      value: string;
    }

    /**
     * A header with a dynamic value to add.
     */
    export interface AddDynamicHeader {
      /**
       * An expression that evaluates to a value for the header.
       */
      expression: string;

      /**
       * The operation to perform on the header.
       */
      operation: 'add';
    }

    /**
     * A header with a static value to set.
     */
    export interface SetStaticHeader {
      /**
       * The operation to perform on the header.
       */
      operation: 'set';

      /**
       * A static value for the header.
       */
      value: string;
    }

    /**
     * A header with a dynamic value to set.
     */
    export interface SetDynamicHeader {
      /**
       * An expression that evaluates to a value for the header.
       */
      expression: string;

      /**
       * The operation to perform on the header.
       */
      operation: 'set';
    }

    /**
     * A header to remove.
     */
    export interface RemoveHeader {
      /**
       * The operation to perform on the header.
       */
      operation: 'remove';
    }

    /**
     * A URI path rewrite.
     */
    export interface URIPath {
      /**
       * A URI path rewrite.
       */
      path: URIPath.Path;

      /**
       * Whether to propagate the rewritten URI to origin.
       */
      origin?: boolean;
    }

    export namespace URIPath {
      /**
       * A URI path rewrite.
       */
      export interface Path {
        /**
         * An expression that evaluates to a value to rewrite the URI path to.
         */
        expression?: string;

        /**
         * A value to rewrite the URI path to.
         */
        value?: string;
      }
    }

    /**
     * A URI query rewrite.
     */
    export interface URIQuery {
      /**
       * A URI query rewrite.
       */
      query: URIQuery.Query;

      /**
       * Whether to propagate the rewritten URI to origin.
       */
      origin?: boolean;
    }

    export namespace URIQuery {
      /**
       * A URI query rewrite.
       */
      export interface Query {
        /**
         * An expression that evaluates to a value to rewrite the URI query to.
         */
        expression?: string;

        /**
         * A value to rewrite the URI query to.
         */
        value?: string;
      }
    }
  }

  /**
   * Configuration for exposed credential checking.
   */
  export interface ExposedCredentialCheck {
    /**
     * An expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * An expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's rate limit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the rate limit counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: number;

    /**
     * An expression that defines when the rate limit counter should be incremented. It
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
     * Whether counting is only performed when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * A response header name provided by the origin, which contains the score to
     * increment rate limit counter with.
     */
    score_response_header_name?: string;
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
   * Configuration for exposed credential checking.
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
   * An object configuring the rule's rate limit behavior.
   */
  ratelimit?: RouteRule.Ratelimit;

  /**
   * The reference of the rule (the rule's ID by default).
   */
  ref?: string;
}

export namespace RouteRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * A value to rewrite the HTTP host header to.
     */
    host_header?: string;

    /**
     * An origin to route to.
     */
    origin?: ActionParameters.Origin;

    /**
     * A Server Name Indication (SNI) override.
     */
    sni?: ActionParameters.SNI;
  }

  export namespace ActionParameters {
    /**
     * An origin to route to.
     */
    export interface Origin {
      /**
       * A resolved host to route to.
       */
      host?: string;

      /**
       * A destination port to route to.
       */
      port?: number;
    }

    /**
     * A Server Name Indication (SNI) override.
     */
    export interface SNI {
      /**
       * A value to override the SNI to.
       */
      value: string;
    }
  }

  /**
   * Configuration for exposed credential checking.
   */
  export interface ExposedCredentialCheck {
    /**
     * An expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * An expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's rate limit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the rate limit counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: number;

    /**
     * An expression that defines when the rate limit counter should be incremented. It
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
     * Whether counting is only performed when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * A response header name provided by the origin, which contains the score to
     * increment rate limit counter with.
     */
    score_response_header_name?: string;
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
   * Configuration for exposed credential checking.
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
   * An object configuring the rule's rate limit behavior.
   */
  ratelimit?: RulesetRule.Ratelimit;

  /**
   * The reference of the rule (the rule's ID by default).
   */
  ref?: string;
}

export namespace RulesetRule {
  /**
   * Configuration for exposed credential checking.
   */
  export interface ExposedCredentialCheck {
    /**
     * An expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * An expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's rate limit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the rate limit counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: number;

    /**
     * An expression that defines when the rate limit counter should be incremented. It
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
     * Whether counting is only performed when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * A response header name provided by the origin, which contains the score to
     * increment rate limit counter with.
     */
    score_response_header_name?: string;
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
   * Configuration for exposed credential checking.
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
   * An object configuring the rule's rate limit behavior.
   */
  ratelimit?: ScoreRule.Ratelimit;

  /**
   * The reference of the rule (the rule's ID by default).
   */
  ref?: string;
}

export namespace ScoreRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * A delta to change the score by, which can be either positive or negative.
     */
    increment: number;
  }

  /**
   * Configuration for exposed credential checking.
   */
  export interface ExposedCredentialCheck {
    /**
     * An expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * An expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's rate limit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the rate limit counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: number;

    /**
     * An expression that defines when the rate limit counter should be incremented. It
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
     * Whether counting is only performed when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * A response header name provided by the origin, which contains the score to
     * increment rate limit counter with.
     */
    score_response_header_name?: string;
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
  action_parameters?: ServeErrorRule.ActionParametersContent | ServeErrorRule.ActionParametersAsset;

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
   * Configuration for exposed credential checking.
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
   * An object configuring the rule's rate limit behavior.
   */
  ratelimit?: ServeErrorRule.Ratelimit;

  /**
   * The reference of the rule (the rule's ID by default).
   */
  ref?: string;
}

export namespace ServeErrorRule {
  export interface ActionParametersContent {
    /**
     * The response content.
     */
    content: string;

    /**
     * The content type header to set with the error response.
     */
    content_type?: 'application/json' | 'text/html' | 'text/plain' | 'text/xml';

    /**
     * The status code to use for the error.
     */
    status_code?: number;
  }

  export interface ActionParametersAsset {
    /**
     * The name of a custom asset to serve as the error response.
     */
    asset_name: string;

    /**
     * The content type header to set with the error response.
     */
    content_type?: 'application/json' | 'text/html' | 'text/plain' | 'text/xml';

    /**
     * The status code to use for the error.
     */
    status_code?: number;
  }

  /**
   * Configuration for exposed credential checking.
   */
  export interface ExposedCredentialCheck {
    /**
     * An expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * An expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's rate limit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the rate limit counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: number;

    /**
     * An expression that defines when the rate limit counter should be incremented. It
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
     * Whether counting is only performed when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * A response header name provided by the origin, which contains the score to
     * increment rate limit counter with.
     */
    score_response_header_name?: string;
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
   * Configuration for exposed credential checking.
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
   * An object configuring the rule's rate limit behavior.
   */
  ratelimit?: SetCacheSettingsRule.Ratelimit;

  /**
   * The reference of the rule (the rule's ID by default).
   */
  ref?: string;
}

export namespace SetCacheSettingsRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * A list of additional ports that caching should be enabled on.
     */
    additional_cacheable_ports?: Array<number>;

    /**
     * How long client browsers should cache the response. Cloudflare cache purge will
     * not purge content cached on client browsers, so high browser TTLs may lead to
     * stale content.
     */
    browser_ttl?: ActionParameters.BrowserTTL;

    /**
     * Whether the request's response from the origin is eligible for caching. Caching
     * itself will still depend on the cache control header and your other caching
     * configurations.
     */
    cache?: boolean;

    /**
     * Which components of the request are included in or excluded from the cache key
     * Cloudflare uses to store the response in cache.
     */
    cache_key?: ActionParameters.CacheKey;

    /**
     * Settings to determine whether the request's response from origin is eligible for
     * Cache Reserve (requires a Cache Reserve add-on plan).
     */
    cache_reserve?: ActionParameters.CacheReserve;

    /**
     * How long the Cloudflare edge network should cache the response.
     */
    edge_ttl?: ActionParameters.EdgeTTL;

    /**
     * Whether Cloudflare will aim to strictly adhere to RFC 7234.
     */
    origin_cache_control?: boolean;

    /**
     * Whether to generate Cloudflare error pages for issues from the origin server.
     */
    origin_error_page_passthru?: boolean;

    /**
     * A timeout value between two successive read operations to use for your origin
     * server. Historically, the timeout value between two read options from Cloudflare
     * to an origin server is 100 seconds. If you are attempting to reduce HTTP 524
     * errors because of timeouts from an origin server, try increasing this timeout
     * value.
     */
    read_timeout?: number;

    /**
     * Whether Cloudflare should respect strong ETag (entity tag) headers. If false,
     * Cloudflare converts strong ETag headers to weak ETag headers.
     */
    respect_strong_etags?: boolean;

    /**
     * When to serve stale content from cache.
     */
    serve_stale?: ActionParameters.ServeStale;

    /**
     * Configuration for shared dictionary compression. When set, Cloudflare injects
     * Use-As-Dictionary headers on matching cacheable responses.
     */
    shared_dictionary?: ActionParameters.SharedDictionary;

    /**
     * Whether to strip ETag headers from the origin response before caching.
     */
    strip_etags?: boolean;

    /**
     * Whether to strip Last-Modified headers from the origin response before caching.
     */
    strip_last_modified?: boolean;

    /**
     * Whether to strip Set-Cookie headers from the origin response before caching.
     */
    strip_set_cookie?: boolean;
  }

  export namespace ActionParameters {
    /**
     * How long client browsers should cache the response. Cloudflare cache purge will
     * not purge content cached on client browsers, so high browser TTLs may lead to
     * stale content.
     */
    export interface BrowserTTL {
      /**
       * The browser TTL mode.
       */
      mode: 'respect_origin' | 'bypass_by_default' | 'override_origin' | 'bypass';

      /**
       * The browser TTL (in seconds) if you choose the "override_origin" mode.
       */
      default?: number;
    }

    /**
     * Which components of the request are included in or excluded from the cache key
     * Cloudflare uses to store the response in cache.
     */
    export interface CacheKey {
      /**
       * Whether to separate cached content based on the visitor's device type.
       */
      cache_by_device_type?: boolean;

      /**
       * Whether to protect from web cache deception attacks, while allowing static
       * assets to be cached.
       */
      cache_deception_armor?: boolean;

      /**
       * Which components of the request are included or excluded from the cache key.
       */
      custom_key?: CacheKey.CustomKey;

      /**
       * Whether to treat requests with the same query parameters the same, regardless of
       * the order those query parameters are in.
       */
      ignore_query_strings_order?: boolean;
    }

    export namespace CacheKey {
      /**
       * Which components of the request are included or excluded from the cache key.
       */
      export interface CustomKey {
        /**
         * Which cookies to include in the cache key.
         */
        cookie?: CustomKey.Cookie;

        /**
         * Which headers to include in the cache key.
         */
        header?: CustomKey.Header;

        /**
         * How to use the host in the cache key.
         */
        host?: CustomKey.Host;

        /**
         * Which query string parameters to include in or exclude from the cache key.
         */
        query_string?: CustomKey.QueryString;

        /**
         * How to use characteristics of the request user agent in the cache key.
         */
        user?: CustomKey.User;
      }

      export namespace CustomKey {
        /**
         * Which cookies to include in the cache key.
         */
        export interface Cookie {
          /**
           * A list of cookies to check for the presence of. The presence of these cookies is
           * included in the cache key.
           */
          check_presence?: Array<string>;

          /**
           * A list of cookies to include in the cache key.
           */
          include?: Array<string>;
        }

        /**
         * Which headers to include in the cache key.
         */
        export interface Header {
          /**
           * A list of headers to check for the presence of. The presence of these headers is
           * included in the cache key.
           */
          check_presence?: Array<string>;

          /**
           * A mapping of header names to a list of values. If a header is present in the
           * request and contains any of the values provided, its value is included in the
           * cache key.
           */
          contains?: { [key: string]: Array<string> };

          /**
           * Whether to exclude the origin header in the cache key.
           */
          exclude_origin?: boolean;

          /**
           * A list of headers to include in the cache key.
           */
          include?: Array<string>;
        }

        /**
         * How to use the host in the cache key.
         */
        export interface Host {
          /**
           * Whether to use the resolved host in the cache key.
           */
          resolved?: boolean;
        }

        /**
         * Which query string parameters to include in or exclude from the cache key.
         */
        export interface QueryString {
          /**
           * Which query string parameters to exclude from the cache key.
           */
          exclude?: QueryString.Exclude;

          /**
           * Which query string parameters to include in the cache key.
           */
          include?: QueryString.Include;
        }

        export namespace QueryString {
          /**
           * Which query string parameters to exclude from the cache key.
           */
          export interface Exclude {
            /**
             * Whether to exclude all query string parameters from the cache key.
             */
            all?: true;

            /**
             * A list of query string parameters to exclude from the cache key.
             */
            list?: Array<string>;
          }

          /**
           * Which query string parameters to include in the cache key.
           */
          export interface Include {
            /**
             * Whether to include all query string parameters in the cache key.
             */
            all?: true;

            /**
             * A list of query string parameters to include in the cache key.
             */
            list?: Array<string>;
          }
        }

        /**
         * How to use characteristics of the request user agent in the cache key.
         */
        export interface User {
          /**
           * Whether to use the user agent's device type in the cache key.
           */
          device_type?: boolean;

          /**
           * Whether to use the user agents's country in the cache key.
           */
          geo?: boolean;

          /**
           * Whether to use the user agent's language in the cache key.
           */
          lang?: boolean;
        }
      }
    }

    /**
     * Settings to determine whether the request's response from origin is eligible for
     * Cache Reserve (requires a Cache Reserve add-on plan).
     */
    export interface CacheReserve {
      /**
       * Whether Cache Reserve is enabled. If this is true and a request meets
       * eligibility criteria, Cloudflare will write the resource to Cache Reserve.
       */
      eligible: boolean;

      /**
       * The minimum file size eligible for storage in Cache Reserve.
       */
      minimum_file_size?: number;
    }

    /**
     * How long the Cloudflare edge network should cache the response.
     */
    export interface EdgeTTL {
      /**
       * The edge TTL mode.
       */
      mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

      /**
       * The edge TTL (in seconds) if you choose the "override_origin" mode.
       */
      default?: number;

      /**
       * A list of TTLs to apply to specific status codes or status code ranges.
       */
      status_code_ttl?: Array<EdgeTTL.StatusCodeTTL>;
    }

    export namespace EdgeTTL {
      export interface StatusCodeTTL {
        /**
         * The time to cache the response for (in seconds). A value of 0 is equivalent to
         * setting the cache control header with the value "no-cache". A value of -1 is
         * equivalent to setting the cache control header with the value of "no-store".
         */
        value: number;

        /**
         * A single status code to apply the TTL to.
         */
        status_code?: number;

        /**
         * A range of status codes to apply the TTL to.
         */
        status_code_range?: StatusCodeTTL.StatusCodeRange;
      }

      export namespace StatusCodeTTL {
        /**
         * A range of status codes to apply the TTL to.
         */
        export interface StatusCodeRange {
          /**
           * The lower bound of the range.
           */
          from?: number;

          /**
           * The upper bound of the range.
           */
          to?: number;
        }
      }
    }

    /**
     * When to serve stale content from cache.
     */
    export interface ServeStale {
      /**
       * Whether Cloudflare should disable serving stale content while getting the latest
       * content from the origin.
       */
      disable_stale_while_updating?: boolean;
    }

    /**
     * Configuration for shared dictionary compression. When set, Cloudflare injects
     * Use-As-Dictionary headers on matching cacheable responses.
     */
    export interface SharedDictionary {
      /**
       * URL pattern for the Use-As-Dictionary match field. This pattern specifies which
       * URLs can use this response as a dictionary.
       */
      match_pattern: string;
    }
  }

  /**
   * Configuration for exposed credential checking.
   */
  export interface ExposedCredentialCheck {
    /**
     * An expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * An expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's rate limit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the rate limit counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: number;

    /**
     * An expression that defines when the rate limit counter should be incremented. It
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
     * Whether counting is only performed when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * A response header name provided by the origin, which contains the score to
     * increment rate limit counter with.
     */
    score_response_header_name?: string;
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
   * Configuration for exposed credential checking.
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
   * An object configuring the rule's rate limit behavior.
   */
  ratelimit?: SetConfigRule.Ratelimit;

  /**
   * The reference of the rule (the rule's ID by default).
   */
  ref?: string;
}

export namespace SetConfigRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * Whether to enable Automatic HTTPS Rewrites.
     */
    automatic_https_rewrites?: boolean;

    /**
     * Which file extensions to minify automatically.
     */
    autominify?: ActionParameters.Autominify;

    /**
     * Whether to enable Browser Integrity Check (BIC).
     */
    bic?: boolean;

    /**
     * Whether to enable content conversion (e.g., HTML to Markdown).
     */
    content_converter?: boolean;

    /**
     * @deprecated Cloudflare Apps are deprected.
     */
    disable_apps?: true;

    /**
     * Whether to disable Pay Per Crawl.
     */
    disable_pay_per_crawl?: true;

    /**
     * Whether to disable Real User Monitoring (RUM).
     */
    disable_rum?: true;

    /**
     * Whether to disable Zaraz.
     */
    disable_zaraz?: true;

    /**
     * Whether to enable Email Obfuscation.
     */
    email_obfuscation?: boolean;

    /**
     * Whether to enable Cloudflare Fonts.
     */
    fonts?: boolean;

    /**
     * Whether to enable Hotlink Protection.
     */
    hotlink_protection?: boolean;

    /**
     * @deprecated Mirage is deprecated. More information at
     * https://developers.cloudflare.com/speed/optimization/images/mirage/.
     */
    mirage?: boolean;

    /**
     * Whether to enable Opportunistic Encryption.
     */
    opportunistic_encryption?: boolean;

    /**
     * The Polish level to configure.
     */
    polish?: 'off' | 'lossless' | 'lossy' | 'webp';

    /**
     * Whether to redirect verified AI training crawlers to canonical URLs found in the
     * HTML response.
     */
    redirects_for_ai_training?: boolean;

    /**
     * The request body buffering mode.
     */
    request_body_buffering?: 'none' | 'standard' | 'full';

    /**
     * The response body buffering mode.
     */
    response_body_buffering?: 'none' | 'standard';

    /**
     * Whether to enable Rocket Loader.
     */
    rocket_loader?: boolean;

    /**
     * The Security Level to configure.
     */
    security_level?: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';

    /**
     * Whether to enable Server-Side Excludes.
     */
    server_side_excludes?: boolean;

    /**
     * The SSL level to configure.
     */
    ssl?: 'off' | 'flexible' | 'full' | 'strict' | 'origin_pull';

    /**
     * Whether to enable Signed Exchanges (SXG).
     */
    sxg?: boolean;
  }

  export namespace ActionParameters {
    /**
     * Which file extensions to minify automatically.
     */
    export interface Autominify {
      /**
       * Whether to minify CSS files.
       */
      css?: boolean;

      /**
       * Whether to minify HTML files.
       */
      html?: boolean;

      /**
       * Whether to minify JavaScript files.
       */
      js?: boolean;
    }
  }

  /**
   * Configuration for exposed credential checking.
   */
  export interface ExposedCredentialCheck {
    /**
     * An expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * An expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's rate limit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the rate limit counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: number;

    /**
     * An expression that defines when the rate limit counter should be incremented. It
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
     * Whether counting is only performed when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * A response header name provided by the origin, which contains the score to
     * increment rate limit counter with.
     */
    score_response_header_name?: string;
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
   * Configuration for exposed credential checking.
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
   * An object configuring the rule's rate limit behavior.
   */
  ratelimit?: SkipRule.Ratelimit;

  /**
   * The reference of the rule (the rule's ID by default).
   */
  ref?: string;
}

export namespace SkipRule {
  /**
   * The parameters configuring the rule's action.
   */
  export interface ActionParameters {
    /**
     * A phase to skip the execution of. This option is only compatible with the
     * products option.
     */
    phase?: 'current';

    /**
     * A list of phases to skip the execution of. This option is incompatible with the
     * rulesets option.
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
    rules?: { [key: string]: Array<string> };

    /**
     * A ruleset to skip the execution of. This option is incompatible with the
     * rulesets option.
     */
    ruleset?: 'current';

    /**
     * A list of ruleset IDs to skip the execution of. This option is incompatible with
     * the ruleset and phases options.
     */
    rulesets?: Array<string>;
  }

  /**
   * Configuration for exposed credential checking.
   */
  export interface ExposedCredentialCheck {
    /**
     * An expression that selects the password used in the credentials check.
     */
    password_expression: string;

    /**
     * An expression that selects the user ID used in the credentials check.
     */
    username_expression: string;
  }

  /**
   * An object configuring the rule's rate limit behavior.
   */
  export interface Ratelimit {
    /**
     * Characteristics of the request on which the rate limit counter will be
     * incremented.
     */
    characteristics: Array<string>;

    /**
     * Period in seconds over which the counter is being incremented.
     */
    period: number;

    /**
     * An expression that defines when the rate limit counter should be incremented. It
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
     * Whether counting is only performed when an origin is reached.
     */
    requests_to_origin?: boolean;

    /**
     * The score threshold per period for which the action will be executed the first
     * time.
     */
    score_per_period?: number;

    /**
     * A response header name provided by the origin, which contains the score to
     * increment rate limit counter with.
     */
    score_response_header_name?: string;
  }
}

export declare namespace Rules {
  export {
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
}
