// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RulesAPI from './rules/rules';
import { CloudflareError } from '../../core/error';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseAccountRules extends APIResource {
  static override readonly _key: readonly ['emailRouting', 'accountRules'] = Object.freeze([
    'emailRouting',
    'accountRules',
  ] as const);

  /**
   * Lists existing routing rules across all zones in the account or zone.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const accountRule of client.emailRouting.accountRules.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: AccountRuleListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountRulesV4PagePaginationArray, AccountRule> {
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
      V4PagePaginationArray<AccountRule>,
      { query, ...options },
    );
  }
}
export class AccountRules extends BaseAccountRules {}

export type AccountRulesV4PagePaginationArray = V4PagePaginationArray<AccountRule>;

export interface AccountRule {
  /**
   * Routing rule identifier.
   */
  id?: string;

  /**
   * List actions patterns.
   */
  actions?: Array<RulesAPI.Action>;

  /**
   * Routing rule status.
   */
  enabled?: true | false;

  /**
   * Matching patterns to forward to your actions.
   */
  matchers?: Array<RulesAPI.Matcher>;

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

  /**
   * Zone information for the routing rule.
   */
  zone?: AccountRule.Zone;
}

export namespace AccountRule {
  /**
   * Zone information for the routing rule.
   */
  export interface Zone {
    /**
     * Zone name.
     */
    name?: string;

    /**
     * Zone tag.
     */
    tag?: string;
  }
}

export interface AccountRuleListParams extends V4PagePaginationArrayParams {
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

export declare namespace AccountRules {
  export {
    type AccountRule as AccountRule,
    type AccountRulesV4PagePaginationArray as AccountRulesV4PagePaginationArray,
    type AccountRuleListParams as AccountRuleListParams,
  };
}
