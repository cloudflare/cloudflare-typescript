// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ProfilesCustomAPI from '../profiles/custom';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Custom extends APIResource {
  /**
   * Creates a DLP custom entry.
   *
   * @example
   * ```ts
   * const custom =
   *   await client.zeroTrust.dlp.entries.custom.create({
   *     account_id: 'account_id',
   *     enabled: true,
   *     name: 'name',
   *     pattern: { regex: 'regex' },
   *   });
   * ```
   */
  create(params: CustomCreateParams, options?: RequestOptions): APIPromise<CustomCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/dlp/entries`, { body, ...options }) as APIPromise<{
        result: CustomCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a DLP custom entry.
   *
   * @example
   * ```ts
   * const custom =
   *   await client.zeroTrust.dlp.entries.custom.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'account_id',
   *       enabled: true,
   *       name: 'name',
   *       pattern: { regex: 'regex' },
   *     },
   *   );
   * ```
   */
  update(
    entryID: string,
    params: CustomUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/dlp/entries/custom/${entryID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: CustomUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all DLP entries in an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customListResponse of client.zeroTrust.dlp.entries.custom.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: CustomListParams,
    options?: RequestOptions,
  ): PagePromise<CustomListResponsesSinglePage, CustomListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/dlp/entries`,
      SinglePage<CustomListResponse>,
      options,
    );
  }

  /**
   * Deletes a DLP custom entry.
   *
   * @example
   * ```ts
   * const custom =
   *   await client.zeroTrust.dlp.entries.custom.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    entryID: string,
    params: CustomDeleteParams,
    options?: RequestOptions,
  ): APIPromise<CustomDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/dlp/entries/${entryID}`, options) as APIPromise<{
        result: CustomDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a DLP entry by ID.
   *
   * @example
   * ```ts
   * const custom =
   *   await client.zeroTrust.dlp.entries.custom.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(entryID: string, params: CustomGetParams, options?: RequestOptions): APIPromise<CustomGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/dlp/entries/${entryID}`, options) as APIPromise<{
        result: CustomGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CustomListResponsesSinglePage = SinglePage<CustomListResponse>;

export interface CustomCreateResponse {
  id: string;

  created_at: string;

  /**
   * @deprecated
   */
  enabled: boolean;

  name: string;

  pattern: ProfilesCustomAPI.Pattern;

  updated_at: string;

  description?: string | null;

  /**
   * @deprecated
   */
  profile_id?: string | null;
}

export interface CustomUpdateResponse {
  id: string;

  created_at: string;

  /**
   * @deprecated
   */
  enabled: boolean;

  name: string;

  pattern: ProfilesCustomAPI.Pattern;

  updated_at: string;

  description?: string | null;

  /**
   * @deprecated
   */
  profile_id?: string | null;
}

export type CustomListResponse =
  | CustomListResponse.UnionMember0
  | CustomListResponse.UnionMember1
  | CustomListResponse.UnionMember2
  | CustomListResponse.UnionMember3
  | CustomListResponse.UnionMember4
  | CustomListResponse.UnionMember5;

export namespace CustomListResponse {
  export interface UnionMember0 {
    id: string;

    created_at: string;

    /**
     * @deprecated
     */
    enabled: boolean;

    name: string;

    pattern: ProfilesCustomAPI.Pattern;

    type: 'custom';

    updated_at: string;

    description?: string | null;

    /**
     * @deprecated
     */
    profile_id?: string | null;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export interface UnionMember1 {
    id: string;

    confidence: UnionMember1.Confidence;

    enabled: boolean;

    name: string;

    type: 'predefined';

    /**
     * @deprecated
     */
    profile_id?: string | null;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';

    variant?: UnionMember1.Variant;
  }

  export namespace UnionMember1 {
    export interface Confidence {
      /**
       * Indicates whether this entry has AI remote service validation.
       */
      ai_context_available: boolean;

      /**
       * Indicates whether this entry has any form of validation that is not an AI remote
       * service.
       */
      available: boolean;
    }

    export interface Variant {
      topic_type: 'Intent' | 'Content';

      type: 'PromptTopic';

      description?: string | null;
    }
  }

  export interface UnionMember2 {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'integration';

    updated_at: string;

    profile_id?: string | null;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export interface UnionMember3 {
    id: string;

    /**
     * Only applies to custom word lists. Determines if the words should be matched in
     * a case-sensitive manner Cannot be set to false if secret is true
     */
    case_sensitive: boolean;

    created_at: string;

    enabled: boolean;

    name: string;

    secret: boolean;

    type: 'exact_data';

    updated_at: string;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export interface UnionMember4 {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'document_fingerprint';

    updated_at: string;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export interface UnionMember5 {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'word_list';

    updated_at: string;

    word_list: unknown;

    profile_id?: string | null;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }
}

export type CustomDeleteResponse = unknown;

export type CustomGetResponse =
  | CustomGetResponse.UnionMember0
  | CustomGetResponse.UnionMember1
  | CustomGetResponse.UnionMember2
  | CustomGetResponse.UnionMember3
  | CustomGetResponse.UnionMember4
  | CustomGetResponse.UnionMember5;

export namespace CustomGetResponse {
  export interface UnionMember0 {
    id: string;

    created_at: string;

    /**
     * @deprecated
     */
    enabled: boolean;

    name: string;

    pattern: ProfilesCustomAPI.Pattern;

    type: 'custom';

    updated_at: string;

    description?: string | null;

    /**
     * @deprecated
     */
    profile_id?: string | null;

    profiles?: Array<UnionMember0.Profile>;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export namespace UnionMember0 {
    /**
     * Computed entry field for a profile that an entry is shared into.
     */
    export interface Profile {
      id: string;

      name: string;
    }
  }

  export interface UnionMember1 {
    id: string;

    confidence: UnionMember1.Confidence;

    enabled: boolean;

    name: string;

    type: 'predefined';

    /**
     * @deprecated
     */
    profile_id?: string | null;

    profiles?: Array<UnionMember1.Profile>;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';

    variant?: UnionMember1.Variant;
  }

  export namespace UnionMember1 {
    export interface Confidence {
      /**
       * Indicates whether this entry has AI remote service validation.
       */
      ai_context_available: boolean;

      /**
       * Indicates whether this entry has any form of validation that is not an AI remote
       * service.
       */
      available: boolean;
    }

    /**
     * Computed entry field for a profile that an entry is shared into.
     */
    export interface Profile {
      id: string;

      name: string;
    }

    export interface Variant {
      topic_type: 'Intent' | 'Content';

      type: 'PromptTopic';

      description?: string | null;
    }
  }

  export interface UnionMember2 {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'integration';

    updated_at: string;

    profile_id?: string | null;

    profiles?: Array<UnionMember2.Profile>;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export namespace UnionMember2 {
    /**
     * Computed entry field for a profile that an entry is shared into.
     */
    export interface Profile {
      id: string;

      name: string;
    }
  }

  export interface UnionMember3 {
    id: string;

    /**
     * Only applies to custom word lists. Determines if the words should be matched in
     * a case-sensitive manner Cannot be set to false if secret is true
     */
    case_sensitive: boolean;

    created_at: string;

    enabled: boolean;

    name: string;

    secret: boolean;

    type: 'exact_data';

    updated_at: string;

    profiles?: Array<UnionMember3.Profile>;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export namespace UnionMember3 {
    /**
     * Computed entry field for a profile that an entry is shared into.
     */
    export interface Profile {
      id: string;

      name: string;
    }
  }

  export interface UnionMember4 {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'document_fingerprint';

    updated_at: string;

    profiles?: Array<UnionMember4.Profile>;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export namespace UnionMember4 {
    /**
     * Computed entry field for a profile that an entry is shared into.
     */
    export interface Profile {
      id: string;

      name: string;
    }
  }

  export interface UnionMember5 {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'word_list';

    updated_at: string;

    word_list: unknown;

    profile_id?: string | null;

    profiles?: Array<UnionMember5.Profile>;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export namespace UnionMember5 {
    /**
     * Computed entry field for a profile that an entry is shared into.
     */
    export interface Profile {
      id: string;

      name: string;
    }
  }
}

export interface CustomCreateParams {
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
  pattern: ProfilesCustomAPI.PatternParam;

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param
   */
  profile_id?: string;
}

export interface CustomUpdateParams {
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
  pattern: ProfilesCustomAPI.PatternParam;

  /**
   * Body param
   */
  description?: string | null;
}

export interface CustomListParams {
  account_id: string;
}

export interface CustomDeleteParams {
  account_id: string;
}

export interface CustomGetParams {
  account_id: string;
}

export declare namespace Custom {
  export {
    type CustomCreateResponse as CustomCreateResponse,
    type CustomUpdateResponse as CustomUpdateResponse,
    type CustomListResponse as CustomListResponse,
    type CustomDeleteResponse as CustomDeleteResponse,
    type CustomGetResponse as CustomGetResponse,
    type CustomListResponsesSinglePage as CustomListResponsesSinglePage,
    type CustomCreateParams as CustomCreateParams,
    type CustomUpdateParams as CustomUpdateParams,
    type CustomListParams as CustomListParams,
    type CustomDeleteParams as CustomDeleteParams,
    type CustomGetParams as CustomGetParams,
  };
}
