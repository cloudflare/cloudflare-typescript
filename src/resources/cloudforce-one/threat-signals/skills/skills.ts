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
   * Creates a Custom Skill for the account. Free Threat Signals accounts cannot
   * create Custom Skills.
   *
   * @example
   * ```ts
   * const skill =
   *   await client.cloudforceOne.threatSignals.skills.create({
   *     account_id: 'account_id',
   *     name: 'x',
   *     output_schema: 'x',
   *     prompt: 'x',
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
   * Lists active Managed Default Skills and Custom Skills. Free Threat Signals
   * accounts see active managed defaults only, with custom_skills_available: false.
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
   * Deletes a Custom Skill. The skill's stored outputs on articles are deleted with
   * it. Managed Default Skills cannot be deleted. Free Threat Signals accounts
   * cannot delete Custom Skills.
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
   * Updates a Custom Skill. Managed Default Skills cannot be updated. Free Threat
   * Signals accounts cannot update Custom Skills.
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
   * Retrieves a Managed Default Skill or Custom Skill. Managed catalog definitions
   * are readable. Free Threat Signals accounts cannot read Custom Skills.
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
   * Whether Custom Skills are available to the account. False for Free Threat
   * Signals accounts, which receive managed default skills only.
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
   * Body param: Custom Skill name (1–100 characters).
   */
  name: string;

  /**
   * Body param: JSON Schema serialized as a string (max 4096 characters).
   */
  output_schema: string;

  /**
   * Body param: AI prompt (1–4000 characters) defining the skill's instructions.
   */
  prompt: string;

  /**
   * Body param: Optional label; does not affect execution. Defaults to "summary".
   */
  type?: 'summary' | 'tags';
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
   * Body param: Optional skill configuration (stored but not currently interpreted).
   */
  config?: string;

  /**
   * Body param: Whether the skill is active and eligible for feed assignment.
   */
  is_active?: boolean;

  /**
   * Body param: Custom Skill name (1–100 characters).
   */
  name?: string;

  /**
   * Body param: JSON Schema serialized as a string (max 4096 characters).
   */
  output_schema?: string;

  /**
   * Body param: AI prompt (1–4000 characters) defining the skill's instructions.
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
