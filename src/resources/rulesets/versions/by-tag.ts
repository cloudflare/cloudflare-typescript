// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ByTagAPI from 'cloudflare/resources/rulesets/versions/by-tag';
import * as RulesetsAPI from 'cloudflare/resources/rulesets/rulesets';

export class ByTag extends APIResource {
  /**
   * Fetches the rules of a managed account ruleset version for a given tag.
   */
  get(
    rulesetId: string,
    rulesetVersion: string,
    ruleTag: string,
    params: ByTagGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetsAPI.Ruleset> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/rulesets/${rulesetId}/versions/${rulesetVersion}/by_tag/${ruleTag}`,
        options,
      ) as Core.APIPromise<{ result: RulesetsAPI.Ruleset }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ByTagGetParams {
  /**
   * The unique ID of the account.
   */
  account_id: string;
}

export namespace ByTag {
  export import ByTagGetParams = ByTagAPI.ByTagGetParams;
}
