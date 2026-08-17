// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountRulesAPI from '../account-rules';
import { AccountRulesV4PagePaginationArray } from '../account-rules';
import * as CatchAllsAPI from './catch-alls';
import {
  BaseCatchAlls,
  CatchAllAction,
  CatchAllGetParams,
  CatchAllGetResponse,
  CatchAllMatcher,
  CatchAllUpdateParams,
  CatchAllUpdateResponse,
  CatchAlls,
} from './catch-alls';
import { APIPromise } from '../../../core/api-promise';
import { CloudflareError } from '../../../core/error';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseRules extends APIResource {
  static override readonly _key: readonly ['emailRouting', 'rules'] = Object.freeze([
    'emailRouting',
    'rules',
  ] as const);

  /**
   * Rules consist of a set of criteria for matching emails (such as an email being
   * sent to a specific custom email address) plus a set of actions to take on the
   * email (like forwarding it to a specific destination address). Forward actions
   * require exactly one verified destination address.
   *
   * @example
   * ```ts
   * const emailRoutingRule =
   *   await client.emailRouting.rules.create({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     actions: [{ type: 'forward' }],
   *     matchers: [{ type: 'literal' }],
   *   });
   * ```
   */
  create(params: RuleCreateParams, options?: RequestOptions): APIPromise<EmailRoutingRule> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/email/routing/rules`, { body, ...options }) as APIPromise<{
        result: EmailRoutingRule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update actions and matches, or enable/disable specific routing rules. Forward
   * actions require exactly one verified destination address.
   *
   * @example
   * ```ts
   * const emailRoutingRule =
   *   await client.emailRouting.rules.update(
   *     'a7e6fb77503c41d8a7f3113c6918f10c',
   *     {
   *       zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       actions: [{ type: 'forward' }],
   *       matchers: [{ type: 'literal' }],
   *     },
   *   );
   * ```
   */
  update(
    ruleIdentifier: string,
    params: RuleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EmailRoutingRule> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/email/routing/rules/${ruleIdentifier}`, {
        body,
        ...options,
      }) as APIPromise<{ result: EmailRoutingRule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists existing routing rules across all zones in the account or zone.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const accountRule of client.emailRouting.rules.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RuleListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountRulesV4PagePaginationArray, AccountRulesAPI.AccountRule> {
    const { account_id, zone_id, ...query } = params ?? {};
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
    return this._client.getAPIList(
      path`/${accountOrZone}/${accountOrZoneId}/email/routing/rules`,
      V4PagePaginationArray<AccountRulesAPI.AccountRule>,
      { query, ...options },
    );
  }

  /**
   * Delete a specific routing rule.
   *
   * @example
   * ```ts
   * const emailRoutingRule =
   *   await client.emailRouting.rules.delete(
   *     'a7e6fb77503c41d8a7f3113c6918f10c',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    ruleIdentifier: string,
    params: RuleDeleteParams,
    options?: RequestOptions,
  ): APIPromise<EmailRoutingRule> {
    const { zone_id } = params;
    return (
      this._client.delete(
        path`/zones/${zone_id}/email/routing/rules/${ruleIdentifier}`,
        options,
      ) as APIPromise<{ result: EmailRoutingRule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information for a specific routing rule already created.
   *
   * @example
   * ```ts
   * const emailRoutingRule =
   *   await client.emailRouting.rules.get(
   *     'a7e6fb77503c41d8a7f3113c6918f10c',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(ruleIdentifier: string, params: RuleGetParams, options?: RequestOptions): APIPromise<EmailRoutingRule> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/email/routing/rules/${ruleIdentifier}`, options) as APIPromise<{
        result: EmailRoutingRule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Rules extends BaseRules {
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

  value?: Array<string>;
}

/**
 * Actions pattern.
 */
export interface ActionParam {
  /**
   * Type of supported action.
   */
  type: 'drop' | 'forward' | 'worker';

  value?: Array<string>;
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
   * Who manages the rule. `api` covers dashboard, generic API, and Terraform;
   * `wrangler` means the rule is managed by a Worker's wrangler.jsonc. Defaults to
   * `api` when omitted on write.
   */
  source?: 'api' | 'wrangler';

  /**
   * @deprecated Routing rule tag. (Deprecated, replaced by routing rule identifier)
   */
  tag?: string;
}

/**
 * Matching pattern to forward your actions.
 */
export interface Matcher {
  /**
   * Type of matcher.
   */
  type: 'all' | 'literal';

  /**
   * Field for type matcher.
   */
  field?: 'to';

  /**
   * Value for matcher.
   */
  value?: string;
}

/**
 * Matching pattern to forward your actions.
 */
export interface MatcherParam {
  /**
   * Type of matcher.
   */
  type: 'all' | 'literal';

  /**
   * Field for type matcher.
   */
  field?: 'to';

  /**
   * Value for matcher.
   */
  value?: string;
}

export interface RuleCreateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: List actions patterns.
   */
  actions: Array<ActionParam>;

  /**
   * Body param: Matching patterns to forward to your actions.
   */
  matchers: Array<MatcherParam>;

  /**
   * Body param: Routing rule status.
   */
  enabled?: true | false;

  /**
   * Body param: Routing rule name.
   */
  name?: string;

  /**
   * Body param: Public tag (script_tag) of the Worker that owns this rule. Required
   * when `source` is `wrangler`.
   */
  owner_worker_tag?: string;

  /**
   * Body param: Priority of the routing rule.
   */
  priority?: number;

  /**
   * Body param: Who manages the rule. `api` covers dashboard, generic API, and
   * Terraform; `wrangler` means the rule is managed by a Worker's wrangler.jsonc.
   * Defaults to `api` when omitted on write.
   */
  source?: 'api' | 'wrangler';
}

export interface RuleUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: List actions patterns.
   */
  actions: Array<ActionParam>;

  /**
   * Body param: Matching patterns to forward to your actions.
   */
  matchers: Array<MatcherParam>;

  /**
   * Body param: Routing rule status.
   */
  enabled?: true | false;

  /**
   * Body param: Routing rule name.
   */
  name?: string;

  /**
   * Body param: Public tag (script_tag) of the Worker that owns this rule. Required
   * when `source` is `wrangler`.
   */
  owner_worker_tag?: string;

  /**
   * Body param: Priority of the routing rule.
   */
  priority?: number;

  /**
   * Body param: Who manages the rule. `api` covers dashboard, generic API, and
   * Terraform; `wrangler` means the rule is managed by a Worker's wrangler.jsonc.
   * Defaults to `api` when omitted on write.
   */
  source?: 'api' | 'wrangler';
}

export interface RuleListParams extends V4PagePaginationArrayParams {
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
   * Query param: Filter by enabled routing rules.
   */
  enabled?: true | false;
}

export interface RuleDeleteParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface RuleGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

Rules.CatchAlls = CatchAlls;
Rules.BaseCatchAlls = BaseCatchAlls;

export declare namespace Rules {
  export {
    type Action as Action,
    type EmailRoutingRule as EmailRoutingRule,
    type Matcher as Matcher,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleGetParams as RuleGetParams,
  };

  export {
    CatchAlls as CatchAlls,
    BaseCatchAlls as BaseCatchAlls,
    type CatchAllAction as CatchAllAction,
    type CatchAllMatcher as CatchAllMatcher,
    type CatchAllUpdateResponse as CatchAllUpdateResponse,
    type CatchAllGetResponse as CatchAllGetResponse,
    type CatchAllUpdateParams as CatchAllUpdateParams,
    type CatchAllGetParams as CatchAllGetParams,
  };
}

export { type AccountRulesV4PagePaginationArray };
