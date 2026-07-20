// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CategoriesAPI from './categories';
import {
  BaseCategories,
  Categories,
  CategoryCreateParams,
  CategoryCreateResponse,
  CategoryDeleteParams,
  CategoryDeleteResponse,
  CategoryEditParams,
  CategoryEditResponse,
  CategoryListParams,
  CategoryListResponse,
} from './categories';
import * as IndicatorsAPI from './indicators/indicators';
import {
  BaseIndicators,
  IndicatorListParams,
  IndicatorListResponse,
  Indicators,
} from './indicators/indicators';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseTags extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'tags'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'tags',
  ] as const);

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
  create(params: TagCreateParams, options?: RequestOptions): APIPromise<TagCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(path`/accounts/${account_id}/cloudforce-one/events/tags/create`, {
      body,
      ...options,
    });
  }

  /**
   * Returns all Source-of-Truth tags for an account. Supports legacy free-text
   * `search` on tag value and `categoryUuid` exact match, plus a structured
   * `filters` JSON array for filtering by metadata fields (originCountryISO,
   * actorCategory, motive, priority, etc.). Country values may be passed as alpha-2,
   * alpha-3, name, or common alias.
   *
   * @example
   * ```ts
   * const tags =
   *   await client.cloudforceOne.threatEvents.tags.list({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  list(params: TagListParams, options?: RequestOptions): APIPromise<TagListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/tags`, { query, ...options });
  }

  /**
   * Deletes a Source-of-Truth tag by UUID.
   *
   * @example
   * ```ts
   * const tag =
   *   await client.cloudforceOne.threatEvents.tags.delete(
   *     'tag_uuid',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(tagUUID: string, params: TagDeleteParams, options?: RequestOptions): APIPromise<TagDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(path`/accounts/${account_id}/cloudforce-one/events/tags/${tagUUID}`, options);
  }

  /**
   * Updates a Source-of-Truth tag by UUID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cloudforceOne.threatEvents.tags.edit(
   *     'tag_uuid',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  edit(tagUUID: string, params: TagEditParams, options?: RequestOptions): APIPromise<TagEditResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/accounts/${account_id}/cloudforce-one/events/tags/${tagUUID}`, {
      body,
      ...options,
    });
  }
}
export class Tags extends BaseTags {
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
  indicators: IndicatorsAPI.Indicators = new IndicatorsAPI.Indicators(this._client);
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

export interface TagListResponse {
  pagination: TagListResponse.Pagination;

  tags: Array<TagListResponse.Tag>;
}

export namespace TagListResponse {
  export interface Pagination {
    page: number;

    pageSize: number;

    totalCount: number;

    totalPages: number;
  }

  export interface Tag {
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
    aliases?: Array<Tag.Alias>;

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
    externalReferences?: Array<Tag.ExternalReference>;

    /**
     * Internal structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: never
     * returned to non-CFONE accounts.
     */
    internalAliases?: Array<Tag.InternalAlias>;

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

  export namespace Tag {
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
}

export interface TagDeleteResponse {
  uuid: string;
}

export interface TagEditResponse {
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
  aliases?: Array<TagEditResponse.Alias>;

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
  externalReferences?: Array<TagEditResponse.ExternalReference>;

  /**
   * Internal structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: never
   * returned to non-CFONE accounts.
   */
  internalAliases?: Array<TagEditResponse.InternalAlias>;

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

export namespace TagEditResponse {
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

export interface TagListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param
   */
  categoryUuid?: string;

  /**
   * Query param: Structured filters as a JSON array of {field, op, value} objects.
   * Searchable fields: uuid, value, actorCategory, actorCategoryConfidence,
   * aliasGroupNames, attributionConfidence, attributionConfidenceScore,
   * attributionOrganization, categoryName, motive, motiveConfidence, opsecLevel,
   * originCountryISO, originCountryConfidence, sophisticationLevel, priority,
   * analyticPriority. Operators: equals, not, contains, startsWith, endsWith, gt,
   * lt, gte, lte, like, in, find. Use 'in' for bulk OR within a single field, e.g.
   * filters=[{"field":"originCountryISO","op":"in","value":["IR","CN"]}]. Multiple
   * entries are AND-joined. Max 10 entries per request, max 100 values per 'in'.
   * Per-field notes: `uuid` accepts only 'equals' and 'in' (other operators throw
   * ValidationError) — matched against the canonical lowercase storage but callers
   * may pass either case (the server lowercases before comparison); index-backed by
   * the column's UNIQUE constraint and intended for batched UUID → tag resolution.
   * `originCountryISO` uses its B-tree index for equals/not/in. `priority` uses its
   * B-tree index for numeric comparisons. Other string columns (`actorCategory`,
   * `motive`, etc.) are case-insensitive and unindexed; current catalog size makes
   * this a non-issue. `endsWith` and `aliasGroupNames` contains/like are
   * leading-wildcard scans and slow on large result sets. `aliasGroupNames` matches
   * on the JSON-encoded text, so substrings can cross alias boundaries (a search for
   * "apt28" will also match "apt280" if both appear in the same tag's alias list).
   */
  filters?: Array<TagListParams.Filter>;

  /**
   * Query param
   */
  page?: number;

  /**
   * Query param
   */
  pageSize?: number;

  /**
   * Query param: Legacy free-text substring match on tag value.
   */
  search?: string;
}

export namespace TagListParams {
  export interface Filter {
    /**
     * Tag field to search on. Allowed: uuid, value, actorCategory,
     * actorCategoryConfidence, aliasGroupNames, attributionConfidence,
     * attributionConfidenceScore, attributionOrganization, categoryName, motive,
     * motiveConfidence, opsecLevel, originCountryISO, originCountryConfidence,
     * sophisticationLevel, priority, analyticPriority.
     */
    field:
      | 'uuid'
      | 'value'
      | 'actorCategory'
      | 'actorCategoryConfidence'
      | 'aliasGroupNames'
      | 'attributionConfidence'
      | 'attributionConfidenceScore'
      | 'attributionOrganization'
      | 'categoryName'
      | 'motive'
      | 'motiveConfidence'
      | 'opsecLevel'
      | 'originCountryISO'
      | 'originCountryConfidence'
      | 'sophisticationLevel'
      | 'priority'
      | 'analyticPriority';

    /**
     * Search operator. Use 'in' for bulk OR within a single field, e.g.
     * {field:"originCountryISO", op:"in", value:["IR","CN"]}.
     */
    op:
      | 'equals'
      | 'not'
      | 'gt'
      | 'gte'
      | 'lt'
      | 'lte'
      | 'like'
      | 'contains'
      | 'startsWith'
      | 'endsWith'
      | 'in'
      | 'find';

    /**
     * Search value. String or number for most operators. Array for 'in' (max 100
     * items). Country values may be passed as alpha-2, alpha-3, name, or common alias
     * (e.g. 'iran', 'IR', 'IRN') and are normalized to alpha-2 server-side.
     */
    value?: string | number | Array<string | number>;
  }
}

export interface TagDeleteParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface TagEditParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

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
  aliases?: Array<TagEditParams.Alias>;

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
  externalReferences?: Array<TagEditParams.ExternalReference>;

  /**
   * Body param: Internal structured aliases ({ value, confidence 1-10, tlp }).
   * CFONE-only: never returned to non-CFONE accounts.
   */
  internalAliases?: Array<TagEditParams.InternalAlias>;

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

  /**
   * Body param
   */
  value?: string;
}

export namespace TagEditParams {
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

Tags.Categories = Categories;
Tags.BaseCategories = BaseCategories;
Tags.Indicators = Indicators;
Tags.BaseIndicators = BaseIndicators;

export declare namespace Tags {
  export {
    type TagCreateResponse as TagCreateResponse,
    type TagListResponse as TagListResponse,
    type TagDeleteResponse as TagDeleteResponse,
    type TagEditResponse as TagEditResponse,
    type TagCreateParams as TagCreateParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
    type TagEditParams as TagEditParams,
  };

  export {
    Categories as Categories,
    BaseCategories as BaseCategories,
    type CategoryCreateResponse as CategoryCreateResponse,
    type CategoryListResponse as CategoryListResponse,
    type CategoryDeleteResponse as CategoryDeleteResponse,
    type CategoryEditResponse as CategoryEditResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryListParams as CategoryListParams,
    type CategoryDeleteParams as CategoryDeleteParams,
    type CategoryEditParams as CategoryEditParams,
  };

  export {
    Indicators as Indicators,
    BaseIndicators as BaseIndicators,
    type IndicatorListResponse as IndicatorListResponse,
    type IndicatorListParams as IndicatorListParams,
  };
}
