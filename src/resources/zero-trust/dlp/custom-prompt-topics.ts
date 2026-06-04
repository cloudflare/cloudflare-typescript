// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class CustomPromptTopics extends APIResource {
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
  create(
    params: CustomPromptTopicCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomPromptTopic> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/custom_prompt_topics`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CustomPromptTopic }>
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
    entryId: string,
    params: CustomPromptTopicUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomPromptTopic> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/dlp/custom_prompt_topics/${entryId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CustomPromptTopic }>
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
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomPromptTopicsSinglePage, CustomPromptTopic> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dlp/custom_prompt_topics`,
      CustomPromptTopicsSinglePage,
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
    entryId: string,
    params: CustomPromptTopicDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomPromptTopicDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/dlp/custom_prompt_topics/${entryId}`,
        options,
      ) as Core.APIPromise<{ result: CustomPromptTopicDeleteResponse | null }>
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
    entryId: string,
    params: CustomPromptTopicGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomPromptTopic> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/dlp/custom_prompt_topics/${entryId}`,
        options,
      ) as Core.APIPromise<{ result: CustomPromptTopic }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class CustomPromptTopicsSinglePage extends SinglePage<CustomPromptTopic> {}

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

CustomPromptTopics.CustomPromptTopicsSinglePage = CustomPromptTopicsSinglePage;

export declare namespace CustomPromptTopics {
  export {
    type CustomPromptTopic as CustomPromptTopic,
    type CustomPromptTopicDeleteResponse as CustomPromptTopicDeleteResponse,
    CustomPromptTopicsSinglePage as CustomPromptTopicsSinglePage,
    type CustomPromptTopicCreateParams as CustomPromptTopicCreateParams,
    type CustomPromptTopicUpdateParams as CustomPromptTopicUpdateParams,
    type CustomPromptTopicListParams as CustomPromptTopicListParams,
    type CustomPromptTopicDeleteParams as CustomPromptTopicDeleteParams,
    type CustomPromptTopicGetParams as CustomPromptTopicGetParams,
  };
}
