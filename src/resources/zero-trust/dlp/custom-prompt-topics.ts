// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseCustomPromptTopics extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'customPromptTopics'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'customPromptTopics',
  ] as const);

  /**
   * Creates a DLP custom prompt topic entry.
   *
   * @example
   * ```ts
   * const customPromptTopic =
   *   await client.zeroTrust.dlp.customPromptTopics.create({
   *     account_id: 'account_id',
   *     enabled: true,
   *     name: 'name',
   *     topic: 'topic',
   *   });
   * ```
   */
  create(params: CustomPromptTopicCreateParams, options?: RequestOptions): APIPromise<CustomPromptTopic> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/dlp/custom_prompt_topics`, {
        body,
        ...options,
      }) as APIPromise<{ result: CustomPromptTopic }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a DLP custom prompt topic entry.
   *
   * @example
   * ```ts
   * const customPromptTopic =
   *   await client.zeroTrust.dlp.customPromptTopics.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'account_id',
   *       enabled: true,
   *       name: 'name',
   *       topic: 'topic',
   *     },
   *   );
   * ```
   */
  update(
    entryID: string,
    params: CustomPromptTopicUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomPromptTopic> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/dlp/custom_prompt_topics/${entryID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: CustomPromptTopic }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all DLP custom prompt topic entries in an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customPromptTopic of client.zeroTrust.dlp.customPromptTopics.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: CustomPromptTopicListParams,
    options?: RequestOptions,
  ): PagePromise<CustomPromptTopicsSinglePage, CustomPromptTopic> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/dlp/custom_prompt_topics`,
      SinglePage<CustomPromptTopic>,
      options,
    );
  }

  /**
   * Deletes a DLP custom prompt topic entry.
   *
   * @example
   * ```ts
   * const customPromptTopic =
   *   await client.zeroTrust.dlp.customPromptTopics.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    entryID: string,
    params: CustomPromptTopicDeleteParams,
    options?: RequestOptions,
  ): APIPromise<CustomPromptTopicDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/dlp/custom_prompt_topics/${entryID}`,
        options,
      ) as APIPromise<{ result: CustomPromptTopicDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a DLP custom prompt topic entry by ID.
   *
   * @example
   * ```ts
   * const customPromptTopic =
   *   await client.zeroTrust.dlp.customPromptTopics.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    entryID: string,
    params: CustomPromptTopicGetParams,
    options?: RequestOptions,
  ): APIPromise<CustomPromptTopic> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/dlp/custom_prompt_topics/${entryID}`,
        options,
      ) as APIPromise<{ result: CustomPromptTopic }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class CustomPromptTopics extends BaseCustomPromptTopics {}

export type CustomPromptTopicsSinglePage = SinglePage<CustomPromptTopic>;

export interface CustomPromptTopic {
  id: string;

  created_at: string;

  /**
   * @deprecated
   */
  enabled: boolean;

  name: string;

  topic: string;

  updated_at: string;

  description?: string | null;

  /**
   * @deprecated
   */
  profile_id?: string | null;
}

export type CustomPromptTopicDeleteResponse = unknown;

export interface CustomPromptTopicCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  enabled: boolean;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  topic: string;

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param
   */
  profile_id?: string;
}

export interface CustomPromptTopicUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  enabled: boolean;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  topic: string;

  /**
   * Body param
   */
  description?: string | null;
}

export interface CustomPromptTopicListParams {
  account_id: string;
}

export interface CustomPromptTopicDeleteParams {
  account_id: string;
}

export interface CustomPromptTopicGetParams {
  account_id: string;
}

export declare namespace CustomPromptTopics {
  export {
    type CustomPromptTopic as CustomPromptTopic,
    type CustomPromptTopicDeleteResponse as CustomPromptTopicDeleteResponse,
    type CustomPromptTopicsSinglePage as CustomPromptTopicsSinglePage,
    type CustomPromptTopicCreateParams as CustomPromptTopicCreateParams,
    type CustomPromptTopicUpdateParams as CustomPromptTopicUpdateParams,
    type CustomPromptTopicListParams as CustomPromptTopicListParams,
    type CustomPromptTopicDeleteParams as CustomPromptTopicDeleteParams,
    type CustomPromptTopicGetParams as CustomPromptTopicGetParams,
  };
}
