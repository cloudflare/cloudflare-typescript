// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import * as VersionsAPI from 'cloudflare/resources/rulesets/versions/versions';
import * as RulesetsAPI from 'cloudflare/resources/rulesets/rulesets';
import * as ByTagAPI from 'cloudflare/resources/rulesets/versions/by-tag';

export class Versions extends APIResource {
  byTag: ByTagAPI.ByTag = new ByTagAPI.ByTag(this._client);

  /**
   * Fetches the versions of an account or zone ruleset.
   */
  list(
    rulesetId: string,
    params?: VersionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetsAPI.RulesetsRulesetsResponse>;
  list(
    rulesetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetsAPI.RulesetsRulesetsResponse>;
  list(
    rulesetId: string,
    params: VersionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetsAPI.RulesetsRulesetsResponse> {
    if (isRequestOptions(params)) {
      return this.list(rulesetId, {}, params);
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
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}/versions`,
        options,
      ) as Core.APIPromise<{ result: RulesetsAPI.RulesetsRulesetsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an existing version of an account or zone ruleset.
   */
  delete(
    rulesetId: string,
    rulesetVersion: string,
    params?: VersionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  delete(rulesetId: string, rulesetVersion: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    rulesetId: string,
    rulesetVersion: string,
    params: VersionDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(rulesetId, rulesetVersion, {}, params);
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
    return this._client.delete(
      `/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}/versions/${rulesetVersion}`,
      { ...options, headers: { Accept: '*/*', ...options?.headers } },
    );
  }

  /**
   * Fetches a specific version of an account or zone ruleset.
   */
  get(
    rulesetId: string,
    rulesetVersion: string,
    params?: VersionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetsAPI.RulesetsRulesetResponse>;
  get(
    rulesetId: string,
    rulesetVersion: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetsAPI.RulesetsRulesetResponse>;
  get(
    rulesetId: string,
    rulesetVersion: string,
    params: VersionGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetsAPI.RulesetsRulesetResponse> {
    if (isRequestOptions(params)) {
      return this.get(rulesetId, rulesetVersion, {}, params);
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
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}/versions/${rulesetVersion}`,
        options,
      ) as Core.APIPromise<{ result: RulesetsAPI.RulesetsRulesetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface VersionListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface VersionDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface VersionGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace Versions {
  export import VersionListParams = VersionsAPI.VersionListParams;
  export import VersionDeleteParams = VersionsAPI.VersionDeleteParams;
  export import VersionGetParams = VersionsAPI.VersionGetParams;
  export import ByTag = ByTagAPI.ByTag;
  export import ByTagGetParams = ByTagAPI.ByTagGetParams;
}
