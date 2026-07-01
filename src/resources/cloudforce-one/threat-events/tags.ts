// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Tags extends APIResource {
  /**
   * Creates a new tag to be used accross threat events.
   *
   * @example
   * ```ts
   * const tag =
   *   await client.cloudforceOne.threatEvents.tags.create({
   *     account_id: 'account_id',
   *     value: 'APT28',
   *   });
   * ```
   */
  create(params: TagCreateParams, options?: Core.RequestOptions): Core.APIPromise<TagCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/cloudforce-one/events/tags/create`, {
      body,
      ...options,
    });
  }
}

export interface TagCreateResponse {
  uuid: string;

  value: string;

  activeDuration?: string;

  actorCategory?: string;

  /**
   * Confidence (1-10) in the actor variety (actorCategory). CFONE-only: stripped
   * from responses to non-CFONE accounts.
   */
  actorCategoryConfidence?: number;

  /**
   * Structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: stripped from
   * responses to non-CFONE accounts.
   */
  aliases?: Array<TagCreateResponse.Alias>;

  aliasGroupNames?: Array<string>;

  aliasGroupNamesInternal?: Array<string>;

  analyticPriority?: number;

  attributionConfidence?: string;

  attributionConfidenceScore?: number;

  attributionOrganization?: string;

  categoryName?: string;

  categoryUuid?: string;

  dateOfDiscovery?: string;

  externalReferenceLinks?: Array<string>;

  /**
   * Structured external references ({ url, description }). Public: returned to all
   * accounts.
   */
  externalReferences?: Array<TagCreateResponse.ExternalReference>;

  /**
   * Internal structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: never
   * returned to non-CFONE accounts.
   */
  internalAliases?: Array<TagCreateResponse.InternalAlias>;

  internalDescription?: string;

  motive?: string;

  /**
   * Confidence (1-10) in the actor motive. CFONE-only: stripped from responses to
   * non-CFONE accounts.
   */
  motiveConfidence?: number;

  opsecLevel?: string;

  /**
   * Confidence (1-10) in the origin-country attribution. CFONE-only: stripped from
   * responses to non-CFONE accounts.
   */
  originCountryConfidence?: number;

  originCountryISO?: string;

  originCountryISOAlpha3?: string;

  /**
   * TLP marking for the origin-country attribution. CFONE-only: stripped from
   * responses to non-CFONE accounts.
   */
  originCountryTlp?: 'red' | 'amber' | 'green' | 'white';

  priority?: number;

  sophisticationLevel?: string;
}

export namespace TagCreateResponse {
  export interface Alias {
    value: string;

    confidence?: number | null;

    tlp?: 'red' | 'amber' | 'green' | 'white' | null;
  }

  export interface ExternalReference {
    url: string;

    description?: string | null;
  }

  export interface InternalAlias {
    value: string;

    confidence?: number | null;

    tlp?: 'red' | 'amber' | 'green' | 'white' | null;
  }
}

export interface TagCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param
   */
  value: string;

  /**
   * Body param
   */
  activeDuration?: string;

  /**
   * Body param: Actor variety. Allowed values: Activist, Competitor, Customer, Crime
   * Syndicate, Former Employee, Nation State, Organized Crime, Nation State
   * Affiliated, Terrorist, Unaffiliated.
   */
  actorCategory?: string;

  /**
   * Body param: Confidence (1-10) in the actor variety (actorCategory). CFONE-only:
   * stripped from responses to non-CFONE accounts.
   */
  actorCategoryConfidence?: number;

  /**
   * Body param: Structured aliases ({ value, confidence 1-10, tlp }). CFONE-only:
   * stripped from responses to non-CFONE accounts.
   */
  aliases?: Array<TagCreateParams.Alias>;

  /**
   * Body param
   */
  aliasGroupNames?: Array<string>;

  /**
   * Body param
   */
  aliasGroupNamesInternal?: Array<string>;

  /**
   * Body param
   */
  analyticPriority?: number;

  /**
   * Body param
   */
  attributionConfidence?: string;

  /**
   * Body param
   */
  attributionConfidenceScore?: number;

  /**
   * Body param
   */
  attributionOrganization?: string;

  /**
   * Body param
   */
  categoryUuid?: string;

  /**
   * Body param: Date the actor was discovered (ISO YYYY-MM-DD).
   */
  dateOfDiscovery?: string;

  /**
   * Body param
   */
  externalReferenceLinks?: Array<string>;

  /**
   * Body param: Structured external references ({ url, description }). Public:
   * returned to all accounts.
   */
  externalReferences?: Array<TagCreateParams.ExternalReference>;

  /**
   * Body param: Internal structured aliases ({ value, confidence 1-10, tlp }).
   * CFONE-only: never returned to non-CFONE accounts.
   */
  internalAliases?: Array<TagCreateParams.InternalAlias>;

  /**
   * Body param
   */
  internalDescription?: string;

  /**
   * Body param: Actor motive. Allowed values: Convenience, Fear, Fun, Financial,
   * Grudge, Ideology, Espionage.
   */
  motive?: string;

  /**
   * Body param: Confidence (1-10) in the actor motive. CFONE-only: stripped from
   * responses to non-CFONE accounts.
   */
  motiveConfidence?: number;

  /**
   * Body param
   */
  opsecLevel?: string;

  /**
   * Body param: Confidence (1-10) in the origin-country attribution. CFONE-only:
   * stripped from responses to non-CFONE accounts.
   */
  originCountryConfidence?: number;

  /**
   * Body param
   */
  originCountryISO?: string;

  /**
   * Body param: TLP marking for the origin-country attribution. CFONE-only: stripped
   * from responses to non-CFONE accounts.
   */
  originCountryTlp?: 'red' | 'amber' | 'green' | 'white';

  /**
   * Body param
   */
  priority?: number;

  /**
   * Body param
   */
  sophisticationLevel?: string;
}

export namespace TagCreateParams {
  export interface Alias {
    value: string;

    confidence?: number | null;

    tlp?: 'red' | 'amber' | 'green' | 'white' | null;
  }

  export interface ExternalReference {
    url: string;

    description?: string | null;
  }

  export interface InternalAlias {
    value: string;

    confidence?: number | null;

    tlp?: 'red' | 'amber' | 'green' | 'white' | null;
  }
}

export declare namespace Tags {
  export { type TagCreateResponse as TagCreateResponse, type TagCreateParams as TagCreateParams };
}
