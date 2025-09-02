// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as CustomAPI from '../profiles/custom';
import { SinglePage } from '../../../../pagination';

export class Predefined extends APIResource {
  /**
   * Predefined entries can't be created, this will update an existing predefined
   * entry This is needed for our generated terraform API
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
  create(
    params: PredefinedCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredefinedCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/entries/predefined`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PredefinedCreateResponse }>
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
    entryId: string,
    params: PredefinedUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredefinedUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/dlp/entries/predefined/${entryId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PredefinedUpdateResponse }>
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
    options?: Core.RequestOptions,
  ): Core.PagePromise<PredefinedListResponsesSinglePage, PredefinedListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dlp/entries`,
      PredefinedListResponsesSinglePage,
      options,
    );
  }

  /**
   * This is a no-op as predefined entires can't be deleted but is needed for our
   * generated terraform API
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
    entryId: string,
    params: PredefinedDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredefinedDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/dlp/entries/predefined/${entryId}`,
        options,
      ) as Core.APIPromise<{ result: PredefinedDeleteResponse | null }>
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
    entryId: string,
    params: PredefinedGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredefinedGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/dlp/entries/${entryId}`, options) as Core.APIPromise<{
        result: PredefinedGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class PredefinedListResponsesSinglePage extends SinglePage<PredefinedListResponse> {}

export interface PredefinedCreateResponse {
  id: string;

  confidence: PredefinedCreateResponse.Confidence;

  enabled: boolean;

  name: string;

  profile_id?: string | null;

  variant?: PredefinedCreateResponse.Variant;
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

  export interface Variant {
    topic_type: 'Intent' | 'Content';

    type: 'PromptTopic';

    description?: string | null;
  }
}

export interface PredefinedUpdateResponse {
  id: string;

  confidence: PredefinedUpdateResponse.Confidence;

  enabled: boolean;

  name: string;

  profile_id?: string | null;

  variant?: PredefinedUpdateResponse.Variant;
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

  export interface Variant {
    topic_type: 'Intent' | 'Content';

    type: 'PromptTopic';

    description?: string | null;
  }
}

export type PredefinedListResponse =
  | PredefinedListResponse.CustomEntry
  | PredefinedListResponse.PredefinedEntry
  | PredefinedListResponse.IntegrationEntry
  | PredefinedListResponse.ExactDataEntry
  | PredefinedListResponse.DocumentFingerprintEntry
  | PredefinedListResponse.WordListEntry;

export namespace PredefinedListResponse {
  export interface CustomEntry {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    pattern: CustomAPI.Pattern;

    type: 'custom';

    updated_at: string;

    profile_id?: string | null;
  }

  export interface PredefinedEntry {
    id: string;

    confidence: PredefinedEntry.Confidence;

    enabled: boolean;

    name: string;

    type: 'predefined';

    profile_id?: string | null;

    variant?: PredefinedEntry.Variant;
  }

  export namespace PredefinedEntry {
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

  export interface IntegrationEntry {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'integration';

    updated_at: string;

    profile_id?: string | null;
  }

  export interface ExactDataEntry {
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
  }

  export interface DocumentFingerprintEntry {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'document_fingerprint';

    updated_at: string;
  }

  export interface WordListEntry {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'word_list';

    updated_at: string;

    word_list: unknown;

    profile_id?: string | null;
  }
}

export type PredefinedDeleteResponse = unknown;

export type PredefinedGetResponse =
  | PredefinedGetResponse.CustomEntry
  | PredefinedGetResponse.PredefinedEntry
  | PredefinedGetResponse.IntegrationEntry
  | PredefinedGetResponse.ExactDataEntry
  | PredefinedGetResponse.DocumentFingerprintEntry
  | PredefinedGetResponse.WordListEntry;

export namespace PredefinedGetResponse {
  export interface CustomEntry {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    pattern: CustomAPI.Pattern;

    type: 'custom';

    updated_at: string;

    profile_id?: string | null;
  }

  export interface PredefinedEntry {
    id: string;

    confidence: PredefinedEntry.Confidence;

    enabled: boolean;

    name: string;

    type: 'predefined';

    profile_id?: string | null;

    variant?: PredefinedEntry.Variant;
  }

  export namespace PredefinedEntry {
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

  export interface IntegrationEntry {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'integration';

    updated_at: string;

    profile_id?: string | null;
  }

  export interface ExactDataEntry {
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
  }

  export interface DocumentFingerprintEntry {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'document_fingerprint';

    updated_at: string;
  }

  export interface WordListEntry {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'word_list';

    updated_at: string;

    word_list: unknown;

    profile_id?: string | null;
  }
}

export interface PredefinedCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  enabled: boolean;

  /**
   * Body param:
   */
  entry_id: string;

  /**
   * Body param: This field is not actually used as the owning profile for a
   * predefined entry is already set to a predefined profile
   */
  profile_id?: string | null;
}

export interface PredefinedUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
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

Predefined.PredefinedListResponsesSinglePage = PredefinedListResponsesSinglePage;

export declare namespace Predefined {
  export {
    type PredefinedCreateResponse as PredefinedCreateResponse,
    type PredefinedUpdateResponse as PredefinedUpdateResponse,
    type PredefinedListResponse as PredefinedListResponse,
    type PredefinedDeleteResponse as PredefinedDeleteResponse,
    type PredefinedGetResponse as PredefinedGetResponse,
    PredefinedListResponsesSinglePage as PredefinedListResponsesSinglePage,
    type PredefinedCreateParams as PredefinedCreateParams,
    type PredefinedUpdateParams as PredefinedUpdateParams,
    type PredefinedListParams as PredefinedListParams,
    type PredefinedDeleteParams as PredefinedDeleteParams,
    type PredefinedGetParams as PredefinedGetParams,
  };
}
