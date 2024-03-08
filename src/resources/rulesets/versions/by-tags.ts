// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ByTagsAPI from 'cloudflare/resources/rulesets/versions/by-tags';
import * as RulesetsAPI from 'cloudflare/resources/rulesets/rulesets';

export class ByTags extends APIResource {
  /**
   * Fetches the rules of a managed account ruleset version for a given tag.
   */
  get(
    rulesetId: string,
    rulesetVersion: string,
    ruleTag: string,
    params: ByTagGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetsAPI.RulesetsRulesetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/rulesets/${rulesetId}/versions/${rulesetVersion}/by_tag/${ruleTag}`,
        options,
      ) as Core.APIPromise<{ result: RulesetsAPI.RulesetsRulesetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ByTagGetParams {
  /**
   * The unique ID of the account.
   */
  account_id: string;
}

export namespace ByTags {
  export import ByTagGetParams = ByTagsAPI.ByTagGetParams;
}
