// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Rules extends APIResource {
  /**
   * Create a token validation rule.
   *
   * @example
   * ```ts
   * const tokenValidationRule =
   *   await client.tokenValidation.rules.create({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     action: 'log',
   *     description:
   *       'Long description for Token Validation Rule',
   *     enabled: true,
   *     expression:
   *       'is_jwt_valid("52973293-cb04-4a97-8f55-e7d2ad1107dd") or is_jwt_valid("46eab8d1-6376-45e3-968f-2c649d77d423")',
   *     selector: {},
   *     title: 'Example Token Validation Rule',
   *   });
   * ```
   */
  create(params: RuleCreateParams, options?: Core.RequestOptions): Core.APIPromise<TokenValidationRule> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/token_validation/rules`, { body, ...options }) as Core.APIPromise<{
        result: TokenValidationRule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List token validation rules
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tokenValidationRule of client.tokenValidation.rules.list(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RuleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TokenValidationRulesV4PagePaginationArray, TokenValidationRule> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/token_validation/rules`,
      TokenValidationRulesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a zone token validation rule.
   *
   * @example
   * ```ts
   * const rule = await client.tokenValidation.rules.delete(
   *   '4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    ruleId: string,
    params: RuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}/token_validation/rules/${ruleId}`, options) as Core.APIPromise<{
        result: RuleDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Create zone token validation rules.
   *
   * A request can create multiple Token Validation Rules.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tokenValidationRule of client.tokenValidation.rules.bulkCreate(
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [
   *       {
   *         action: 'log',
   *         description:
   *           'Long description for Token Validation Rule',
   *         enabled: true,
   *         expression:
   *           'is_jwt_valid("52973293-cb04-4a97-8f55-e7d2ad1107dd") or is_jwt_valid("46eab8d1-6376-45e3-968f-2c649d77d423")',
   *         selector: {},
   *         title: 'Example Token Validation Rule',
   *       },
   *     ],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  bulkCreate(
    params: RuleBulkCreateParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TokenValidationRulesSinglePage, TokenValidationRule> {
    const { zone_id, body } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/token_validation/rules/bulk`,
      TokenValidationRulesSinglePage,
      { body: body, method: 'post', ...options },
    );
  }

  /**
   * Edit token validation rules.
   *
   * A request can update multiple Token Validation Rules.
   *
   * Rules can be re-ordered using the `position` field.
   *
   * Returns all updated rules.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tokenValidationRule of client.tokenValidation.rules.bulkEdit(
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [{ id: '0d9bf70c-92e1-4bb3-9411-34a3bcc59003' }],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  bulkEdit(
    params: RuleBulkEditParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TokenValidationRulesSinglePage, TokenValidationRule> {
    const { zone_id, body } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/token_validation/rules/bulk`,
      TokenValidationRulesSinglePage,
      { body: body, method: 'patch', ...options },
    );
  }

  /**
   * Edit a zone token validation rule.
   *
   * @example
   * ```ts
   * const tokenValidationRule =
   *   await client.tokenValidation.rules.edit(
   *     '4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  edit(
    ruleId: string,
    params: RuleEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenValidationRule> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/token_validation/rules/${ruleId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TokenValidationRule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a zone token validation rule.
   *
   * @example
   * ```ts
   * const tokenValidationRule =
   *   await client.tokenValidation.rules.get(
   *     '4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    ruleId: string,
    params: RuleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenValidationRule> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/token_validation/rules/${ruleId}`, options) as Core.APIPromise<{
        result: TokenValidationRule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class TokenValidationRulesV4PagePaginationArray extends V4PagePaginationArray<TokenValidationRule> {}

export class TokenValidationRulesSinglePage extends SinglePage<TokenValidationRule> {}

/**
 * A Token Validation rule that can enforce security policies using JWT Tokens.
 */
export interface TokenValidationRule {
  /**
   * Action to take on requests that match operations included in `selector` and fail
   * `expression`.
   */
  action: 'log' | 'block';

  /**
   * A human-readable description that gives more details than `title`.
   */
  description: string;

  /**
   * Toggle rule on or off.
   */
  enabled: boolean;

  /**
   * Rule expression. Requests that fail to match this expression will be subject to
   * `action`.
   *
   * For details on expressions, see the
   * [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
   */
  expression: string;

  /**
   * Select operations covered by this rule.
   *
   * For details on selectors, see the
   * [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
   */
  selector: TokenValidationRule.Selector;

  /**
   * A human-readable name for the rule.
   */
  title: string;

  /**
   * UUID.
   */
  id?: string;

  created_at?: string;

  last_updated?: string;
}

export namespace TokenValidationRule {
  /**
   * Select operations covered by this rule.
   *
   * For details on selectors, see the
   * [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
   */
  export interface Selector {
    /**
     * Ignore operations that were otherwise included by `include`.
     */
    exclude?: Array<Selector.Exclude> | null;

    /**
     * Select all matching operations.
     */
    include?: Array<Selector.Include> | null;
  }

  export namespace Selector {
    export interface Exclude {
      /**
       * Excluded operation IDs.
       */
      operation_ids?: Array<string>;
    }

    export interface Include {
      /**
       * Included hostnames.
       */
      host?: Array<string>;
    }
  }
}

export type RuleDeleteResponse = unknown;

export interface RuleCreateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Action to take on requests that match operations included in
   * `selector` and fail `expression`.
   */
  action: 'log' | 'block';

  /**
   * Body param: A human-readable description that gives more details than `title`.
   */
  description: string;

  /**
   * Body param: Toggle rule on or off.
   */
  enabled: boolean;

  /**
   * Body param: Rule expression. Requests that fail to match this expression will be
   * subject to `action`.
   *
   * For details on expressions, see the
   * [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
   */
  expression: string;

  /**
   * Body param: Select operations covered by this rule.
   *
   * For details on selectors, see the
   * [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
   */
  selector: RuleCreateParams.Selector;

  /**
   * Body param: A human-readable name for the rule.
   */
  title: string;
}

export namespace RuleCreateParams {
  /**
   * Select operations covered by this rule.
   *
   * For details on selectors, see the
   * [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
   */
  export interface Selector {
    /**
     * Ignore operations that were otherwise included by `include`.
     */
    exclude?: Array<Selector.Exclude> | null;

    /**
     * Select all matching operations.
     */
    include?: Array<Selector.Include> | null;
  }

  export namespace Selector {
    export interface Exclude {
      /**
       * Excluded operation IDs.
       */
      operation_ids?: Array<string>;
    }

    export interface Include {
      /**
       * Included hostnames.
       */
      host?: Array<string>;
    }
  }
}

export interface RuleListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Query param: Select rules with these IDs.
   */
  id?: string;

  /**
   * Query param: Action to take on requests that match operations included in
   * `selector` and fail `expression`.
   */
  action?: 'log' | 'block';

  /**
   * Query param: Toggle rule on or off.
   */
  enabled?: boolean;

  /**
   * Query param: Select rules with this host in `include`.
   */
  host?: string;

  /**
   * Query param: Select rules with this host in `include`.
   */
  hostname?: string;

  /**
   * Query param: Select rules with these IDs.
   */
  rule_id?: string;

  /**
   * Query param: Select rules using any of these token configurations.
   */
  token_configuration?: Array<string>;
}

export interface RuleDeleteParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface RuleBulkCreateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param
   */
  body: Array<RuleBulkCreateParams.Body>;
}

export namespace RuleBulkCreateParams {
  /**
   * A Token Validation rule that can enforce security policies using JWT Tokens.
   */
  export interface Body {
    /**
     * Action to take on requests that match operations included in `selector` and fail
     * `expression`.
     */
    action: 'log' | 'block';

    /**
     * A human-readable description that gives more details than `title`.
     */
    description: string;

    /**
     * Toggle rule on or off.
     */
    enabled: boolean;

    /**
     * Rule expression. Requests that fail to match this expression will be subject to
     * `action`.
     *
     * For details on expressions, see the
     * [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
     */
    expression: string;

    /**
     * Select operations covered by this rule.
     *
     * For details on selectors, see the
     * [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
     */
    selector: Body.Selector;

    /**
     * A human-readable name for the rule.
     */
    title: string;
  }

  export namespace Body {
    /**
     * Select operations covered by this rule.
     *
     * For details on selectors, see the
     * [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
     */
    export interface Selector {
      /**
       * Ignore operations that were otherwise included by `include`.
       */
      exclude?: Array<Selector.Exclude> | null;

      /**
       * Select all matching operations.
       */
      include?: Array<Selector.Include> | null;
    }

    export namespace Selector {
      export interface Exclude {
        /**
         * Excluded operation IDs.
         */
        operation_ids?: Array<string>;
      }

      export interface Include {
        /**
         * Included hostnames.
         */
        host?: Array<string>;
      }
    }
  }
}

export interface RuleBulkEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param
   */
  body: Array<RuleBulkEditParams.Body>;
}

export namespace RuleBulkEditParams {
  export interface Body {
    /**
     * Rule ID this patch applies to
     */
    id: string;

    /**
     * Action to take on requests that match operations included in `selector` and fail
     * `expression`.
     */
    action?: 'log' | 'block';

    /**
     * A human-readable description that gives more details than `title`.
     */
    description?: string;

    /**
     * Toggle rule on or off.
     */
    enabled?: boolean;

    /**
     * Rule expression. Requests that fail to match this expression will be subject to
     * `action`.
     *
     * For details on expressions, see the
     * [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
     */
    expression?: string;

    /**
     * Update rule order among zone rules.
     */
    position?: Body.APIShieldIndex | Body.APIShieldBefore | Body.APIShieldAfter;

    /**
     * Select operations covered by this rule.
     *
     * For details on selectors, see the
     * [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
     */
    selector?: Body.Selector;

    /**
     * A human-readable name for the rule.
     */
    title?: string;
  }

  export namespace Body {
    export interface APIShieldIndex {
      /**
       * Move rule to this position
       */
      index: number;
    }

    /**
     * Move rule to after rule with ID.
     */
    export interface APIShieldBefore {
      /**
       * Move rule to before rule with this ID.
       */
      before?: string;
    }

    /**
     * Move rule to before rule with ID.
     */
    export interface APIShieldAfter {
      /**
       * Move rule to after rule with this ID.
       */
      after?: string;
    }

    /**
     * Select operations covered by this rule.
     *
     * For details on selectors, see the
     * [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
     */
    export interface Selector {
      /**
       * Ignore operations that were otherwise included by `include`.
       */
      exclude?: Array<Selector.Exclude> | null;

      /**
       * Select all matching operations.
       */
      include?: Array<Selector.Include> | null;
    }

    export namespace Selector {
      export interface Exclude {
        /**
         * Excluded operation IDs.
         */
        operation_ids?: Array<string>;
      }

      export interface Include {
        /**
         * Included hostnames.
         */
        host?: Array<string>;
      }
    }
  }
}

export interface RuleEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Action to take on requests that match operations included in
   * `selector` and fail `expression`.
   */
  action?: 'log' | 'block';

  /**
   * Body param: A human-readable description that gives more details than `title`.
   */
  description?: string;

  /**
   * Body param: Toggle rule on or off.
   */
  enabled?: boolean;

  /**
   * Body param: Rule expression. Requests that fail to match this expression will be
   * subject to `action`.
   *
   * For details on expressions, see the
   * [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
   */
  expression?: string;

  /**
   * Body param: Update rule order among zone rules.
   */
  position?: RuleEditParams.APIShieldIndex | RuleEditParams.APIShieldBefore | RuleEditParams.APIShieldAfter;

  /**
   * Body param: Select operations covered by this rule.
   *
   * For details on selectors, see the
   * [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
   */
  selector?: RuleEditParams.Selector;

  /**
   * Body param: A human-readable name for the rule.
   */
  title?: string;
}

export namespace RuleEditParams {
  export interface APIShieldIndex {
    /**
     * Move rule to this position
     */
    index: number;
  }

  /**
   * Move rule to after rule with ID.
   */
  export interface APIShieldBefore {
    /**
     * Move rule to before rule with this ID.
     */
    before?: string;
  }

  /**
   * Move rule to before rule with ID.
   */
  export interface APIShieldAfter {
    /**
     * Move rule to after rule with this ID.
     */
    after?: string;
  }

  /**
   * Select operations covered by this rule.
   *
   * For details on selectors, see the
   * [Cloudflare Docs](https://developers.cloudflare.com/api-shield/security/jwt-validation/).
   */
  export interface Selector {
    /**
     * Ignore operations that were otherwise included by `include`.
     */
    exclude?: Array<Selector.Exclude> | null;

    /**
     * Select all matching operations.
     */
    include?: Array<Selector.Include> | null;
  }

  export namespace Selector {
    export interface Exclude {
      /**
       * Excluded operation IDs.
       */
      operation_ids?: Array<string>;
    }

    export interface Include {
      /**
       * Included hostnames.
       */
      host?: Array<string>;
    }
  }
}

export interface RuleGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

Rules.TokenValidationRulesV4PagePaginationArray = TokenValidationRulesV4PagePaginationArray;
Rules.TokenValidationRulesSinglePage = TokenValidationRulesSinglePage;

export declare namespace Rules {
  export {
    type TokenValidationRule as TokenValidationRule,
    type RuleDeleteResponse as RuleDeleteResponse,
    TokenValidationRulesV4PagePaginationArray as TokenValidationRulesV4PagePaginationArray,
    TokenValidationRulesSinglePage as TokenValidationRulesSinglePage,
    type RuleCreateParams as RuleCreateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleBulkCreateParams as RuleBulkCreateParams,
    type RuleBulkEditParams as RuleBulkEditParams,
    type RuleEditParams as RuleEditParams,
    type RuleGetParams as RuleGetParams,
  };
}
