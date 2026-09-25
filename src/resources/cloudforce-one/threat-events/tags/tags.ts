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

  activeDuration_annotated?: TagCreateResponse.ActiveDurationAnnotated | null;

  actorCategory?: string;

  actorCategory_annotated?: TagCreateResponse.ActorCategoryAnnotated | null;

  /**
   * Structured aliases ({ value, confidence 1-10, tlp }). Public: returned to all
   * accounts with per-entry TLP filtering (entries with tlp: purple are removed for
   * non-CFONE accounts).
   */
  aliases?: Array<TagCreateResponse.Alias>;

  aliasGroupNames?: Array<string>;

  aliasGroupNamesInternal?: Array<string>;

  attributionOrganization?: string;

  attributionOrganization_annotated?: TagCreateResponse.AttributionOrganizationAnnotated | null;

  categoryName?: string;

  categoryUuid?: string;

  /**
   * Overall tag confidence (1-10).
   */
  confidence?: number | null;

  createdAt?: string;

  dateOfDiscovery?: string;

  description?: string;

  externalReferenceLinks?: Array<string>;

  /**
   * Structured external references ({ url, description }). Public: returned to all
   * accounts.
   */
  externalReferences?: Array<TagCreateResponse.ExternalReference>;

  externalReferences_annotated?: Array<TagCreateResponse.ExternalReferencesAnnotated> | null;

  /**
   * Internal structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: never
   * returned to non-CFONE accounts.
   */
  internalAliases?: Array<TagCreateResponse.InternalAlias>;

  internalDescription?: string;

  lastSeen?: string;

  motive?: string;

  motive_annotated?: TagCreateResponse.MotiveAnnotated | null;

  opsecLevel?: string;

  opsecLevel_annotated?: TagCreateResponse.OpsecLevelAnnotated | null;

  /**
   * ISO country code (alpha-2 or alpha-3). Normalized to uppercase on read. Null
   * when stored value is blank/whitespace.
   */
  originCountryISO?: string | null;

  originCountryISO_annotated?: TagCreateResponse.OriginCountryISOAnnotated | null;

  priority?: number;

  priority_annotated?: TagCreateResponse.PriorityAnnotated | null;

  /**
   * Parsed custom field values. Null when the tag has no custom fields.
   */
  properties?: { [key: string]: unknown } | null;

  sophisticationLevel?: string;

  sophisticationLevel_annotated?: TagCreateResponse.SophisticationLevelAnnotated | null;

  /**
   * Tag-level TLP handling marking.
   */
  tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;

  updatedAt?: string;

  version?: number;
}

export namespace TagCreateResponse {
  export interface ActiveDurationAnnotated {
    value: string;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface ActorCategoryAnnotated {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface Alias {
    value: string;

    confidence?: number | null;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface AttributionOrganizationAnnotated {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface ExternalReference {
    url: string;

    description?: string | null;
  }

  export interface ExternalReferencesAnnotated {
    value: string;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface InternalAlias {
    value: string;

    confidence?: number | null;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface MotiveAnnotated {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface OpsecLevelAnnotated {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface OriginCountryISOAnnotated {
    value: string | null;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface PriorityAnnotated {
    value: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface SophisticationLevelAnnotated {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
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

    activeDuration_annotated?: Tag.ActiveDurationAnnotated | null;

    actorCategory?: string;

    actorCategory_annotated?: Tag.ActorCategoryAnnotated | null;

    /**
     * Structured aliases ({ value, confidence 1-10, tlp }). Public: returned to all
     * accounts with per-entry TLP filtering (entries with tlp: purple are removed for
     * non-CFONE accounts).
     */
    aliases?: Array<Tag.Alias>;

    aliasGroupNames?: Array<string>;

    aliasGroupNamesInternal?: Array<string>;

    attributionOrganization?: string;

    attributionOrganization_annotated?: Tag.AttributionOrganizationAnnotated | null;

    categoryName?: string;

    categoryUuid?: string;

    /**
     * Overall tag confidence (1-10).
     */
    confidence?: number | null;

    createdAt?: string;

    dateOfDiscovery?: string;

    description?: string;

    externalReferenceLinks?: Array<string>;

    /**
     * Structured external references ({ url, description }). Public: returned to all
     * accounts.
     */
    externalReferences?: Array<Tag.ExternalReference>;

    externalReferences_annotated?: Array<Tag.ExternalReferencesAnnotated> | null;

    /**
     * Internal structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: never
     * returned to non-CFONE accounts.
     */
    internalAliases?: Array<Tag.InternalAlias>;

    internalDescription?: string;

    lastSeen?: string;

    motive?: string;

    motive_annotated?: Tag.MotiveAnnotated | null;

    opsecLevel?: string;

    opsecLevel_annotated?: Tag.OpsecLevelAnnotated | null;

    /**
     * ISO country code (alpha-2 or alpha-3). Normalized to uppercase on read. Null
     * when stored value is blank/whitespace.
     */
    originCountryISO?: string | null;

    originCountryISO_annotated?: Tag.OriginCountryISOAnnotated | null;

    priority?: number;

    priority_annotated?: Tag.PriorityAnnotated | null;

    /**
     * Parsed custom field values. Null when the tag has no custom fields.
     */
    properties?: { [key: string]: unknown } | null;

    sophisticationLevel?: string;

    sophisticationLevel_annotated?: Tag.SophisticationLevelAnnotated | null;

    /**
     * Tag-level TLP handling marking.
     */
    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;

    updatedAt?: string;

    version?: number;
  }

  export namespace Tag {
    export interface ActiveDurationAnnotated {
      value: string;

      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
    }

    export interface ActorCategoryAnnotated {
      value: string;

      confidence?: number;

      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
    }

    export interface Alias {
      value: string;

      confidence?: number | null;

      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
    }

    export interface AttributionOrganizationAnnotated {
      value: string;

      confidence?: number;

      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
    }

    export interface ExternalReference {
      url: string;

      description?: string | null;
    }

    export interface ExternalReferencesAnnotated {
      value: string;

      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
    }

    export interface InternalAlias {
      value: string;

      confidence?: number | null;

      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
    }

    export interface MotiveAnnotated {
      value: string;

      confidence?: number;

      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
    }

    export interface OpsecLevelAnnotated {
      value: string;

      confidence?: number;

      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
    }

    export interface OriginCountryISOAnnotated {
      value: string | null;

      confidence?: number;

      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
    }

    export interface PriorityAnnotated {
      value: number;

      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
    }

    export interface SophisticationLevelAnnotated {
      value: string;

      confidence?: number;

      tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
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

  activeDuration_annotated?: TagEditResponse.ActiveDurationAnnotated | null;

  actorCategory?: string;

  actorCategory_annotated?: TagEditResponse.ActorCategoryAnnotated | null;

  /**
   * Structured aliases ({ value, confidence 1-10, tlp }). Public: returned to all
   * accounts with per-entry TLP filtering (entries with tlp: purple are removed for
   * non-CFONE accounts).
   */
  aliases?: Array<TagEditResponse.Alias>;

  aliasGroupNames?: Array<string>;

  aliasGroupNamesInternal?: Array<string>;

  attributionOrganization?: string;

  attributionOrganization_annotated?: TagEditResponse.AttributionOrganizationAnnotated | null;

  categoryName?: string;

  categoryUuid?: string;

  /**
   * Overall tag confidence (1-10).
   */
  confidence?: number | null;

  createdAt?: string;

  dateOfDiscovery?: string;

  description?: string;

  externalReferenceLinks?: Array<string>;

  /**
   * Structured external references ({ url, description }). Public: returned to all
   * accounts.
   */
  externalReferences?: Array<TagEditResponse.ExternalReference>;

  externalReferences_annotated?: Array<TagEditResponse.ExternalReferencesAnnotated> | null;

  /**
   * Internal structured aliases ({ value, confidence 1-10, tlp }). CFONE-only: never
   * returned to non-CFONE accounts.
   */
  internalAliases?: Array<TagEditResponse.InternalAlias>;

  internalDescription?: string;

  lastSeen?: string;

  motive?: string;

  motive_annotated?: TagEditResponse.MotiveAnnotated | null;

  opsecLevel?: string;

  opsecLevel_annotated?: TagEditResponse.OpsecLevelAnnotated | null;

  /**
   * ISO country code (alpha-2 or alpha-3). Normalized to uppercase on read. Null
   * when stored value is blank/whitespace.
   */
  originCountryISO?: string | null;

  originCountryISO_annotated?: TagEditResponse.OriginCountryISOAnnotated | null;

  priority?: number;

  priority_annotated?: TagEditResponse.PriorityAnnotated | null;

  /**
   * Parsed custom field values. Null when the tag has no custom fields.
   */
  properties?: { [key: string]: unknown } | null;

  sophisticationLevel?: string;

  sophisticationLevel_annotated?: TagEditResponse.SophisticationLevelAnnotated | null;

  /**
   * Tag-level TLP handling marking.
   */
  tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;

  updatedAt?: string;

  version?: number;
}

export namespace TagEditResponse {
  export interface ActiveDurationAnnotated {
    value: string;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface ActorCategoryAnnotated {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface Alias {
    value: string;

    confidence?: number | null;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface AttributionOrganizationAnnotated {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface ExternalReference {
    url: string;

    description?: string | null;
  }

  export interface ExternalReferencesAnnotated {
    value: string;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface InternalAlias {
    value: string;

    confidence?: number | null;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface MotiveAnnotated {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface OpsecLevelAnnotated {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface OriginCountryISOAnnotated {
    value: string | null;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface PriorityAnnotated {
    value: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface SophisticationLevelAnnotated {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
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
  activeDuration?: string | TagCreateParams.UnionMember1;

  /**
   * Body param
   */
  actorCategory?: string | TagCreateParams.UnionMember1;

  /**
   * Body param: Structured aliases ({ value, confidence 1-10, tlp }). Public:
   * returned to all accounts with per-entry TLP filtering (entries with tlp: purple
   * are removed for non-CFONE accounts).
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
  attributionOrganization?: string | TagCreateParams.UnionMember1;

  /**
   * Body param: Tag type (category) UUID. Optional — when present, `properties` is
   * validated against this category's schema. When absent, the tag is typeless and
   * properties are accepted free-form.
   */
  categoryUuid?: string;

  /**
   * Body param: Overall tag confidence (1-10). Optional.
   */
  confidence?: number;

  /**
   * Body param: Date of discovery (ISO YYYY-MM-DD). Optional.
   */
  dateOfDiscovery?: string;

  /**
   * Body param
   */
  description?: string;

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
   * Body param
   */
  lastSeen?: string;

  /**
   * Body param
   */
  motive?: string | TagCreateParams.UnionMember1;

  /**
   * Body param
   */
  opsecLevel?: string | TagCreateParams.UnionMember1;

  /**
   * Body param
   */
  originCountryISO?: string | TagCreateParams.UnionMember1;

  /**
   * Body param
   */
  priority?: number | TagCreateParams.PriorityAnnotated;

  /**
   * Body param: Structured metadata blob. Optional. When `categoryUuid` is given,
   * validated against this category's schema on write. When typeless, accepted
   * free-form. Use `{}` for a tag with no custom data.
   */
  properties?: { [key: string]: unknown };

  /**
   * Body param
   */
  sophisticationLevel?: string | TagCreateParams.UnionMember1;

  /**
   * Body param: Tag-level TLP handling marking. Optional. Allowed values: red,
   * amber, amber-strict, green, clear, purple, amber+strict.
   */
  tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
}

export namespace TagCreateParams {
  export interface UnionMember1 {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface UnionMember1 {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface Alias {
    value: string;

    confidence?: number | null;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface UnionMember1 {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface ExternalReference {
    url: string;

    description?: string | null;
  }

  export interface InternalAlias {
    value: string;

    confidence?: number | null;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface UnionMember1 {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface UnionMember1 {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface UnionMember1 {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface PriorityAnnotated {
    value: number;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface UnionMember1 {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }
}

export interface TagListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Cache strategy. 'from-graph' serves results from the graph-node KV
   * cache when all requested UUIDs are cached; falls back to normal path on
   * partial/zero hit.
   */
  cache?: 'from-graph';

  /**
   * Query param
   */
  categoryUuid?: string;

  /**
   * Query param: Structured filters as a JSON array of {field, op, value} objects.
   * Searchable fields: uuid, value, categoryName, description, dateOfDiscovery, tlp,
   * confidence, actorCategory, motive, attributionOrganization, originCountryISO,
   * aliases, externalReferences, opsecLevel, sophisticationLevel, activeDuration,
   * priority, lastSeen, aliasGroupNames. Operators: equals, not, contains,
   * startsWith, endsWith, gt, lt, gte, lte, like, in, find. Use 'in' for bulk OR
   * within a single field, e.g.
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
   * Query param: Free-text substring match on tag value AND custom-field properties.
   * Searches case-insensitively inside both `Tag.value` and the serialized
   * `Tag.properties` JSON blob (keys, values, and annotation metadata like
   * confidence/tlp are all searchable). Same serialized-text tradeoff as
   * `aliasGroupNames` — substrings can cross JSON boundaries.
   */
  search?: string;
}

export namespace TagListParams {
  export interface Filter {
    /**
     * Tag field to search on. Allowed first-class fields: uuid, value, categoryName,
     * description, dateOfDiscovery, tlp, confidence, actorCategory, motive,
     * attributionOrganization, originCountryISO, aliases, externalReferences,
     * opsecLevel, sophisticationLevel, activeDuration, priority, lastSeen,
     * aliasGroupNames. Also supports properties.<key> to filter on custom field values
     * (matches both raw values and annotated {value,confidence,tlp} shapes via
     * COALESCE), and properties.<key>.tlp / properties.<key>.confidence to filter
     * directly on annotation sub-fields.
     */
    field: string;

    /**
     * Search operator. Use 'in' for bulk OR within a single field.
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
     * items).
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
  activeDuration?: string | TagEditParams.UnionMember1;

  /**
   * Body param
   */
  actorCategory?: string | TagEditParams.UnionMember1;

  /**
   * Body param: Structured aliases ({ value, confidence 1-10, tlp }). Public:
   * returned to all accounts with per-entry TLP filtering (entries with tlp: purple
   * are removed for non-CFONE accounts).
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
  attributionOrganization?: string | TagEditParams.UnionMember1;

  /**
   * Body param: Tag type (category) UUID. When changed, existing `properties` are
   * re-validated against the new category's schema (400 on mismatch). Set to null to
   * unlink (typeless; properties stop being validated).
   */
  categoryUuid?: string;

  /**
   * Body param: Overall tag confidence (1-10). Omit to preserve existing.
   */
  confidence?: number;

  /**
   * Body param: Date of discovery (ISO YYYY-MM-DD). Omit to preserve existing.
   */
  dateOfDiscovery?: string;

  /**
   * Body param
   */
  description?: string;

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
   * Body param
   */
  lastSeen?: string;

  /**
   * Body param
   */
  motive?: string | TagEditParams.UnionMember1;

  /**
   * Body param
   */
  opsecLevel?: string | TagEditParams.UnionMember1;

  /**
   * Body param
   */
  originCountryISO?: string | TagEditParams.UnionMember1;

  /**
   * Body param
   */
  priority?: number | TagEditParams.PriorityAnnotated;

  /**
   * Body param: Custom field values blob. When omitted, the existing value is
   * preserved. When provided, performs a shallow per-key merge over the stored value
   * (unmentioned keys are retained). Setting an individual key to null deletes that
   * key. Validation runs against the merged result, so a partial update may omit a
   * schema-required key if the stored value supplies it.
   */
  properties?: { [key: string]: unknown };

  /**
   * Body param
   */
  sophisticationLevel?: string | TagEditParams.UnionMember1;

  /**
   * Body param: Tag-level TLP marking. Omit to preserve existing. Cannot be cleared
   * to null.
   */
  tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';

  /**
   * Body param
   */
  value?: string;
}

export namespace TagEditParams {
  export interface UnionMember1 {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface UnionMember1 {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface Alias {
    value: string;

    confidence?: number | null;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface UnionMember1 {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface ExternalReference {
    url: string;

    description?: string | null;
  }

  export interface InternalAlias {
    value: string;

    confidence?: number | null;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict' | null;
  }

  export interface UnionMember1 {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface UnionMember1 {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface UnionMember1 {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface PriorityAnnotated {
    value: number;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
  }

  export interface UnionMember1 {
    value: string;

    confidence?: number;

    tlp?: 'red' | 'amber' | 'amber-strict' | 'green' | 'clear' | 'purple' | 'amber+strict';
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
