// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseTagCategories extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatSignals', 'skills', 'tagCategories'] =
    Object.freeze(['cloudforceOne', 'threatSignals', 'skills', 'tagCategories'] as const);

  /**
   * Replaces the tag categories the default tagging skill may choose tags from.
   *
   * @example
   * ```ts
   * const tagCategory =
   *   await client.cloudforceOne.threatSignals.skills.tagCategories.update(
   *     'default-tagging-skill',
   *     {
   *       account_id: 'account_id',
   *       category_uuids: [
   *         '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       ],
   *     },
   *   );
   * ```
   */
  update(
    skillID: 'default-tagging-skill',
    params: TagCategoryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TagCategoryUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/skills/${skillID}/tag-categories`,
        { body, ...options },
      ) as APIPromise<{ result: TagCategoryUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the tag categories the default tagging skill may choose tags from.
   *
   * @example
   * ```ts
   * const tagCategory =
   *   await client.cloudforceOne.threatSignals.skills.tagCategories.get(
   *     'default-tagging-skill',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    skillID: 'default-tagging-skill',
    params: TagCategoryGetParams,
    options?: RequestOptions,
  ): APIPromise<TagCategoryGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/skills/${skillID}/tag-categories`,
        options,
      ) as APIPromise<{ result: TagCategoryGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class TagCategories extends BaseTagCategories {}

export interface TagCategoryUpdateResponse {
  category_uuids: Array<string>;

  skill_id: 'default-tagging-skill';
}

export interface TagCategoryGetResponse {
  category_uuids: Array<string>;

  skill_id: 'default-tagging-skill';
}

export interface TagCategoryUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  category_uuids: Array<string>;
}

export interface TagCategoryGetParams {
  account_id: string;
}

export declare namespace TagCategories {
  export {
    type TagCategoryUpdateResponse as TagCategoryUpdateResponse,
    type TagCategoryGetResponse as TagCategoryGetResponse,
    type TagCategoryUpdateParams as TagCategoryUpdateParams,
    type TagCategoryGetParams as TagCategoryGetParams,
  };
}
