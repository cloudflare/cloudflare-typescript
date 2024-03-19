// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import * as RulesAPI from 'cloudflare/resources/rulesets/rules';
import * as RulesetsAPI from 'cloudflare/resources/rulesets/rulesets';

export class Rules extends APIResource {
  /**
   * Adds a new rule to an account or zone ruleset. The rule will be added to the end
   * of the existing list of rules in the ruleset by default.
   */
  create(
    rulesetId: string,
    params: RuleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetsAPI.RulesetsRulesetResponse> {
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
      }) as Core.APIPromise<{ result: RulesetsAPI.RulesetsRulesetResponse }>
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
  ): Core.APIPromise<RulesetsAPI.RulesetsRulesetResponse>;
  delete(
    rulesetId: string,
    ruleId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetsAPI.RulesetsRulesetResponse>;
  delete(
    rulesetId: string,
    ruleId: string,
    params: RuleDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetsAPI.RulesetsRulesetResponse> {
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
      ) as Core.APIPromise<{ result: RulesetsAPI.RulesetsRulesetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing rule in an account ruleset.
   */
  edit(
    rulesetId: string,
    ruleId: string,
    params: RuleEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetsAPI.RulesetsRulesetResponse> {
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
      }) as Core.APIPromise<{ result: RulesetsAPI.RulesetsRulesetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RuleCreateParams {
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
   * Body param: An object configuring where the rule will be placed.
   */
  position?:
    | RuleCreateParams.BeforePosition
    | RuleCreateParams.AfterPosition
    | RuleCreateParams.IndexPosition;
}

export namespace RuleCreateParams {
  /**
   * An object configuring where the rule will be placed.
   */
  export interface BeforePosition {
    /**
     * The ID of another rule to place the rule before. An empty value causes the rule
     * to be placed at the top.
     */
    before?: string;
  }

  /**
   * An object configuring where the rule will be placed.
   */
  export interface AfterPosition {
    /**
     * The ID of another rule to place the rule after. An empty value causes the rule
     * to be placed at the bottom.
     */
    after?: string;
  }

  /**
   * An object configuring where the rule will be placed.
   */
  export interface IndexPosition {
    /**
     * An index at which to place the rule, where index 1 is the first rule.
     */
    index?: number;
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

export interface RuleEditParams {
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
   * Body param: An object configuring where the rule will be placed.
   */
  position?: RuleEditParams.BeforePosition | RuleEditParams.AfterPosition | RuleEditParams.IndexPosition;
}

export namespace RuleEditParams {
  /**
   * An object configuring where the rule will be placed.
   */
  export interface BeforePosition {
    /**
     * The ID of another rule to place the rule before. An empty value causes the rule
     * to be placed at the top.
     */
    before?: string;
  }

  /**
   * An object configuring where the rule will be placed.
   */
  export interface AfterPosition {
    /**
     * The ID of another rule to place the rule after. An empty value causes the rule
     * to be placed at the bottom.
     */
    after?: string;
  }

  /**
   * An object configuring where the rule will be placed.
   */
  export interface IndexPosition {
    /**
     * An index at which to place the rule, where index 1 is the first rule.
     */
    index?: number;
  }
}

export namespace Rules {
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleEditParams = RulesAPI.RuleEditParams;
}
