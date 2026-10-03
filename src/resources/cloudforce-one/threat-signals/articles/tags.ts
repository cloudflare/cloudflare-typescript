// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseTags extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatSignals', 'articles', 'tags'] =
    Object.freeze(['cloudforceOne', 'threatSignals', 'articles', 'tags'] as const);

  /**
   * Applies a tag from the account's tag catalog to a Threat Signals article.
   *
   * @example
   * ```ts
   * const tag =
   *   await client.cloudforceOne.threatSignals.articles.tags.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'account_id',
   *       tag_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  create(
    articleID: string,
    params: TagCreateParams,
    options?: RequestOptions,
  ): APIPromise<TagCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/articles/${articleID}/tags`,
        { body, ...options },
      ) as APIPromise<{ result: TagCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes a tag from a Threat Signals article.
   *
   * @example
   * ```ts
   * const tag =
   *   await client.cloudforceOne.threatSignals.articles.tags.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'account_id',
   *       article_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  delete(tagID: string, params: TagDeleteParams, options?: RequestOptions): APIPromise<TagDeleteResponse> {
    const { account_id, article_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/articles/${article_id}/tags/${tagID}`,
        options,
      ) as APIPromise<{ result: TagDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Runs the default AI tagging skill on an article and replaces its AI-applied
   * tags.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cloudforceOne.threatSignals.articles.tags.generate(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  generate(
    articleID: string,
    params: TagGenerateParams,
    options?: RequestOptions,
  ): APIPromise<TagGenerateResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/articles/${articleID}/tag`,
        options,
      ) as APIPromise<{ result: TagGenerateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Tags extends BaseTags {}

export interface TagCreateResponse {
  applied_by: 'ai' | 'analyst' | 'system';

  categoryId: string | null;

  uuid: string;

  value: string;
}

export interface TagDeleteResponse {
  applied_by: 'ai' | 'analyst' | 'system';

  categoryId: string | null;

  uuid: string;

  value: string;
}

export interface TagGenerateResponse {
  tag_skill_version: string;

  /**
   * Final hydrated assignment set; may be empty when no applicable tags are
   * selected.
   */
  tags: Array<TagGenerateResponse.Tag>;
}

export namespace TagGenerateResponse {
  export interface Tag {
    applied_by: 'ai' | 'analyst' | 'system';

    categoryId: string | null;

    uuid: string;

    value: string;
  }
}

export interface TagCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  tag_id: string;
}

export interface TagDeleteParams {
  account_id: string;

  article_id: string;
}

export interface TagGenerateParams {
  account_id: string;
}

export declare namespace Tags {
  export {
    type TagCreateResponse as TagCreateResponse,
    type TagDeleteResponse as TagDeleteResponse,
    type TagGenerateResponse as TagGenerateResponse,
    type TagCreateParams as TagCreateParams,
    type TagDeleteParams as TagDeleteParams,
    type TagGenerateParams as TagGenerateParams,
  };
}
