// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TagCategoriesAPI from './tag-categories';
import {
  BaseTagCategories,
  TagCategories,
  TagCategoryGetParams,
  TagCategoryGetResponse,
  TagCategoryUpdateParams,
  TagCategoryUpdateResponse,
} from './tag-categories';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, V4PagePagination, type V4PagePaginationParams } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseSkills extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatSignals', 'skills'] = Object.freeze([
    'cloudforceOne',
    'threatSignals',
    'skills',
  ] as const);

  /**
   * Creates a custom AI skill for the account.
   *
   * @example
   * ```ts
   * const skill =
   *   await client.cloudforceOne.threatSignals.skills.create({
   *     account_id: 'account_id',
   *     name: 'x',
   *     output_schema: 'x',
   *     prompt: 'x',
   *     type: 'summary',
   *   });
   * ```
   */
  create(params: SkillCreateParams, options?: RequestOptions): APIPromise<SkillCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/skills`, {
        body,
        ...options,
      }) as APIPromise<{ result: SkillCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the default and custom skills available to the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const skillListResponse of client.cloudforceOne.threatSignals.skills.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: SkillListParams,
    options?: RequestOptions,
  ): PagePromise<SkillListResponsesV4PagePagination, SkillListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/skills`,
      V4PagePagination<SkillListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes a custom skill. Default skills cannot be deleted.
   *
   * @example
   * ```ts
   * const skill =
   *   await client.cloudforceOne.threatSignals.skills.delete(
   *     'skill_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    skillID: string,
    params: SkillDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SkillDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/skills/${skillID}`,
        options,
      ) as APIPromise<{ result: SkillDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a custom skill. Default skills are read-only.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cloudforceOne.threatSignals.skills.edit(
   *     'skill_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  edit(skillID: string, params: SkillEditParams, options?: RequestOptions): APIPromise<SkillEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/skills/${skillID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: SkillEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a default or custom skill by ID.
   *
   * @example
   * ```ts
   * const skill =
   *   await client.cloudforceOne.threatSignals.skills.get(
   *     'skill_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(skillID: string, params: SkillGetParams, options?: RequestOptions): APIPromise<SkillGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/skills/${skillID}`,
        options,
      ) as APIPromise<{ result: SkillGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Skills extends BaseSkills {
  tagCategories: TagCategoriesAPI.TagCategories = new TagCategoriesAPI.TagCategories(this._client);
}

export type SkillListResponsesV4PagePagination = V4PagePagination<SkillListResponse>;

export interface SkillCreateResponse {
  id: string;

  /**
   * JSON-encoded skill configuration. Always null for default skills.
   */
  config: string | null;

  created_at: string;

  /**
   * 1 when active, 0 when inactive.
   */
  is_active: number;

  name: string;

  /**
   * JSON-encoded JSON Schema the skill output must satisfy.
   */
  output_schema: string | null;

  prompt: string;

  /**
   * `default` for Cloudforce One managed skills (read-only), `custom` for account
   * skills.
   */
  source: 'default' | 'custom';

  type: string;

  updated_at: string;
}

export interface SkillListResponse {
  /**
   * Number of skills on this page.
   */
  count: number;

  /**
   * Whether the authenticated account may access custom-skill capabilities under
   * Stakeout's Threat Signals access-mode policy. This is a policy availability
   * indicator, not a row-existence indicator. False for threat_signals_only mode;
   * true for entitled, allowlisted, cfone_internal, and service modes.
   */
  custom_skills_available: boolean;

  page: number;

  per_page: number;

  skills: Array<SkillListResponse.Skill>;

  total_count: number;
}

export namespace SkillListResponse {
  export interface Skill {
    id: string;

    /**
     * JSON-encoded skill configuration. Always null for default skills.
     */
    config: string | null;

    created_at: string;

    /**
     * 1 when active, 0 when inactive.
     */
    is_active: number;

    name: string;

    /**
     * JSON-encoded JSON Schema the skill output must satisfy.
     */
    output_schema: string | null;

    prompt: string;

    /**
     * `default` for Cloudforce One managed skills (read-only), `custom` for account
     * skills.
     */
    source: 'default' | 'custom';

    type: string;

    updated_at: string;
  }
}

export interface SkillDeleteResponse {
  id: string;

  /**
   * JSON-encoded skill configuration. Always null for default skills.
   */
  config: string | null;

  created_at: string;

  /**
   * 1 when active, 0 when inactive.
   */
  is_active: number;

  name: string;

  /**
   * JSON-encoded JSON Schema the skill output must satisfy.
   */
  output_schema: string | null;

  prompt: string;

  /**
   * `default` for Cloudforce One managed skills (read-only), `custom` for account
   * skills.
   */
  source: 'default' | 'custom';

  type: string;

  updated_at: string;
}

export interface SkillEditResponse {
  id: string;

  /**
   * JSON-encoded skill configuration. Always null for default skills.
   */
  config: string | null;

  created_at: string;

  /**
   * 1 when active, 0 when inactive.
   */
  is_active: number;

  name: string;

  /**
   * JSON-encoded JSON Schema the skill output must satisfy.
   */
  output_schema: string | null;

  prompt: string;

  /**
   * `default` for Cloudforce One managed skills (read-only), `custom` for account
   * skills.
   */
  source: 'default' | 'custom';

  type: string;

  updated_at: string;
}

export interface SkillGetResponse {
  id: string;

  /**
   * JSON-encoded skill configuration. Always null for default skills.
   */
  config: string | null;

  created_at: string;

  /**
   * 1 when active, 0 when inactive.
   */
  is_active: number;

  name: string;

  /**
   * JSON-encoded JSON Schema the skill output must satisfy.
   */
  output_schema: string | null;

  prompt: string;

  /**
   * `default` for Cloudforce One managed skills (read-only), `custom` for account
   * skills.
   */
  source: 'default' | 'custom';

  type: string;

  updated_at: string;
}

export interface SkillCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  output_schema: string;

  /**
   * Body param
   */
  prompt: string;

  /**
   * Body param
   */
  type: 'summary' | 'tags';
}

export interface SkillListParams extends V4PagePaginationParams {
  /**
   * Path param
   */
  account_id: string;
}

export interface SkillDeleteParams {
  account_id: string;
}

export interface SkillEditParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  config?: string;

  /**
   * Body param
   */
  is_active?: boolean;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  output_schema?: string;

  /**
   * Body param
   */
  prompt?: string;
}

export interface SkillGetParams {
  account_id: string;
}

Skills.TagCategories = TagCategories;
Skills.BaseTagCategories = BaseTagCategories;

export declare namespace Skills {
  export {
    type SkillCreateResponse as SkillCreateResponse,
    type SkillListResponse as SkillListResponse,
    type SkillDeleteResponse as SkillDeleteResponse,
    type SkillEditResponse as SkillEditResponse,
    type SkillGetResponse as SkillGetResponse,
    type SkillListResponsesV4PagePagination as SkillListResponsesV4PagePagination,
    type SkillCreateParams as SkillCreateParams,
    type SkillListParams as SkillListParams,
    type SkillDeleteParams as SkillDeleteParams,
    type SkillEditParams as SkillEditParams,
    type SkillGetParams as SkillGetParams,
  };

  export {
    TagCategories as TagCategories,
    BaseTagCategories as BaseTagCategories,
    type TagCategoryUpdateResponse as TagCategoryUpdateResponse,
    type TagCategoryGetResponse as TagCategoryGetResponse,
    type TagCategoryUpdateParams as TagCategoryUpdateParams,
    type TagCategoryGetParams as TagCategoryGetParams,
  };
}
