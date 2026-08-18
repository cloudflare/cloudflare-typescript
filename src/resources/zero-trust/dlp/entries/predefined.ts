// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CustomAPI from '../profiles/custom';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BasePredefined extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'entries', 'predefined'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'entries',
    'predefined',
  ] as const);

  /**
   * Predefined entries can't be created, this will update an existing predefined
   * entry. This is needed for our generated terraform API.
   *
   * @example
   * ```ts
   * const predefined =
   *   await client.zeroTrust.dlp.entries.predefined.create({
   *     account_id: 'account_id',
   *     enabled: true,
   *     entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   });
   * ```
   */
  create(params: PredefinedCreateParams, options?: RequestOptions): APIPromise<PredefinedCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/dlp/entries/predefined`, {
        body,
        ...options,
      }) as APIPromise<{ result: PredefinedCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a DLP entry.
   *
   * @example
   * ```ts
   * const predefined =
   *   await client.zeroTrust.dlp.entries.predefined.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id', enabled: true },
   *   );
   * ```
   */
  update(
    entryID: string,
    params: PredefinedUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PredefinedUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/dlp/entries/predefined/${entryID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: PredefinedUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all DLP entries in an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const predefinedListResponse of client.zeroTrust.dlp.entries.predefined.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PredefinedListParams,
    options?: RequestOptions,
  ): PagePromise<PredefinedListResponsesSinglePage, PredefinedListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/dlp/entries`,
      SinglePage<PredefinedListResponse>,
      options,
    );
  }

  /**
   * This is a no-op as predefined entires can't be deleted but is needed for our
   * generated terraform API.
   *
   * @example
   * ```ts
   * const predefined =
   *   await client.zeroTrust.dlp.entries.predefined.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    entryID: string,
    params: PredefinedDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PredefinedDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/dlp/entries/predefined/${entryID}`,
        options,
      ) as APIPromise<{ result: PredefinedDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a DLP entry by ID.
   *
   * @example
   * ```ts
   * const predefined =
   *   await client.zeroTrust.dlp.entries.predefined.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    entryID: string,
    params: PredefinedGetParams,
    options?: RequestOptions,
  ): APIPromise<PredefinedGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/dlp/entries/${entryID}`, options) as APIPromise<{
        result: PredefinedGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Predefined extends BasePredefined {}

export type PredefinedListResponsesSinglePage = SinglePage<PredefinedListResponse>;

export interface PredefinedCreateResponse {
  id: string;

  confidence: PredefinedCreateResponse.Confidence;

  enabled: boolean;

  name: string;

  /**
   * @deprecated
   */
  profile_id?: string | null;

  /**
   * A Predefined AI prompt classification topic entry.
   */
  variant?: PredefinedCreateResponse.UnionMember0 | PredefinedCreateResponse.UnionMember1;
}

export namespace PredefinedCreateResponse {
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
   * A Predefined AI prompt classification topic entry.
   */
  export interface UnionMember0 {
    topic_type: 'Intent' | 'Content';

    type: 'PromptTopic';

    /**
     * A customer-facing explanation of what this predefined AI prompt topic
     * represents.
     */
    description?: string | null;
  }

  /**
   * A general predefined entry.
   */
  export interface UnionMember1 {
    type: 'General';

    /**
     * A customer-facing explanation of what this predefined entry represents.
     */
    description?: string | null;
  }
}

export interface PredefinedUpdateResponse {
  id: string;

  confidence: PredefinedUpdateResponse.Confidence;

  enabled: boolean;

  name: string;

  /**
   * @deprecated
   */
  profile_id?: string | null;

  /**
   * A Predefined AI prompt classification topic entry.
   */
  variant?: PredefinedUpdateResponse.UnionMember0 | PredefinedUpdateResponse.UnionMember1;
}

export namespace PredefinedUpdateResponse {
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
   * A Predefined AI prompt classification topic entry.
   */
  export interface UnionMember0 {
    topic_type: 'Intent' | 'Content';

    type: 'PromptTopic';

    /**
     * A customer-facing explanation of what this predefined AI prompt topic
     * represents.
     */
    description?: string | null;
  }

  /**
   * A general predefined entry.
   */
  export interface UnionMember1 {
    type: 'General';

    /**
     * A customer-facing explanation of what this predefined entry represents.
     */
    description?: string | null;
  }
}

export type PredefinedListResponse =
  | PredefinedListResponse.UnionMember0
  | PredefinedListResponse.UnionMember1
  | PredefinedListResponse.UnionMember2
  | PredefinedListResponse.UnionMember3
  | PredefinedListResponse.UnionMember4
  | PredefinedListResponse.UnionMember5
  | PredefinedListResponse.UnionMember6;

export namespace PredefinedListResponse {
  export interface UnionMember0 {
    id: string;

    created_at: string;

    /**
     * @deprecated
     */
    enabled: boolean;

    name: string;

    pattern: CustomAPI.Pattern;

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

    created_at: string;

    /**
     * @deprecated
     */
    enabled: boolean;

    name: string;

    type: 'custom_prompt_topic';

    updated_at: string;

    /**
     * The optional description of the custom prompt topic entry.
     */
    description?: string | null;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export interface UnionMember2 {
    id: string;

    confidence: UnionMember2.Confidence;

    enabled: boolean;

    name: string;

    type: 'predefined';

    /**
     * @deprecated
     */
    profile_id?: string | null;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';

    /**
     * A Predefined AI prompt classification topic entry.
     */
    variant?: UnionMember2.UnionMember0 | UnionMember2.UnionMember1;
  }

  export namespace UnionMember2 {
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
     * A Predefined AI prompt classification topic entry.
     */
    export interface UnionMember0 {
      topic_type: 'Intent' | 'Content';

      type: 'PromptTopic';

      /**
       * A customer-facing explanation of what this predefined AI prompt topic
       * represents.
       */
      description?: string | null;
    }

    /**
     * A general predefined entry.
     */
    export interface UnionMember1 {
      type: 'General';

      /**
       * A customer-facing explanation of what this predefined entry represents.
       */
      description?: string | null;
    }
  }

  export interface UnionMember3 {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'integration';

    updated_at: string;

    profile_id?: string | null;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export interface UnionMember4 {
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

    /**
     * The optional description of the exact data entry.
     */
    description?: string | null;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export interface UnionMember5 {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'document_fingerprint';

    updated_at: string;

    /**
     * The optional description of the document fingerprint entry.
     */
    description?: string | null;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export interface UnionMember6 {
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

export type PredefinedDeleteResponse = unknown;

export type PredefinedGetResponse =
  | PredefinedGetResponse.UnionMember0
  | PredefinedGetResponse.UnionMember1
  | PredefinedGetResponse.UnionMember2
  | PredefinedGetResponse.UnionMember3
  | PredefinedGetResponse.UnionMember4
  | PredefinedGetResponse.UnionMember5
  | PredefinedGetResponse.UnionMember6;

export namespace PredefinedGetResponse {
  export interface UnionMember0 {
    id: string;

    created_at: string;

    /**
     * @deprecated
     */
    enabled: boolean;

    name: string;

    pattern: CustomAPI.Pattern;

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

    created_at: string;

    /**
     * @deprecated
     */
    enabled: boolean;

    name: string;

    type: 'custom_prompt_topic';

    updated_at: string;

    /**
     * The optional description of the custom prompt topic entry.
     */
    description?: string | null;

    profiles?: Array<UnionMember1.Profile>;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export namespace UnionMember1 {
    /**
     * Computed entry field for a profile that an entry is shared into.
     */
    export interface Profile {
      id: string;

      name: string;
    }
  }

  export interface UnionMember2 {
    id: string;

    confidence: UnionMember2.Confidence;

    enabled: boolean;

    name: string;

    type: 'predefined';

    /**
     * @deprecated
     */
    profile_id?: string | null;

    profiles?: Array<UnionMember2.Profile>;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';

    /**
     * A Predefined AI prompt classification topic entry.
     */
    variant?: UnionMember2.UnionMember0 | UnionMember2.UnionMember1;
  }

  export namespace UnionMember2 {
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

    /**
     * A Predefined AI prompt classification topic entry.
     */
    export interface UnionMember0 {
      topic_type: 'Intent' | 'Content';

      type: 'PromptTopic';

      /**
       * A customer-facing explanation of what this predefined AI prompt topic
       * represents.
       */
      description?: string | null;
    }

    /**
     * A general predefined entry.
     */
    export interface UnionMember1 {
      type: 'General';

      /**
       * A customer-facing explanation of what this predefined entry represents.
       */
      description?: string | null;
    }
  }

  export interface UnionMember3 {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'integration';

    updated_at: string;

    profile_id?: string | null;

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

    /**
     * The optional description of the exact data entry.
     */
    description?: string | null;

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

    type: 'document_fingerprint';

    updated_at: string;

    /**
     * The optional description of the document fingerprint entry.
     */
    description?: string | null;

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

  export interface UnionMember6 {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'word_list';

    updated_at: string;

    word_list: unknown;

    profile_id?: string | null;

    profiles?: Array<UnionMember6.Profile>;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export namespace UnionMember6 {
    /**
     * Computed entry field for a profile that an entry is shared into.
     */
    export interface Profile {
      id: string;

      name: string;
    }
  }
}

export interface PredefinedCreateParams {
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
  entry_id: string;

  /**
   * Body param: This field is not used as the owning profile. For predefined entries
   * it is already set to a predefined profile.
   */
  profile_id?: string | null;
}

export interface PredefinedUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  enabled: boolean;
}

export interface PredefinedListParams {
  account_id: string;
}

export interface PredefinedDeleteParams {
  account_id: string;
}

export interface PredefinedGetParams {
  account_id: string;
}

export declare namespace Predefined {
  export {
    type PredefinedCreateResponse as PredefinedCreateResponse,
    type PredefinedUpdateResponse as PredefinedUpdateResponse,
    type PredefinedListResponse as PredefinedListResponse,
    type PredefinedDeleteResponse as PredefinedDeleteResponse,
    type PredefinedGetResponse as PredefinedGetResponse,
    type PredefinedListResponsesSinglePage as PredefinedListResponsesSinglePage,
    type PredefinedCreateParams as PredefinedCreateParams,
    type PredefinedUpdateParams as PredefinedUpdateParams,
    type PredefinedListParams as PredefinedListParams,
    type PredefinedDeleteParams as PredefinedDeleteParams,
    type PredefinedGetParams as PredefinedGetParams,
  };
}
