// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as CustomAPI from '../profiles/custom';
import { SinglePage } from '../../../../pagination';

export class Integration extends APIResource {
  /**
   * Integration entries can't be created, this will update an existing integration
   * entry. This is needed for our generated terraform API.
   *
   * @example
   * ```ts
   * const integration =
   *   await client.zeroTrust.dlp.entries.integration.create({
   *     account_id: 'account_id',
   *     enabled: true,
   *     entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   });
   * ```
   */
  create(
    params: IntegrationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/entries/integration`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IntegrationCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a DLP entry.
   *
   * @example
   * ```ts
   * const integration =
   *   await client.zeroTrust.dlp.entries.integration.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id', enabled: true },
   *   );
   * ```
   */
  update(
    entryId: string,
    params: IntegrationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/dlp/entries/integration/${entryId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IntegrationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all DLP entries in an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const integrationListResponse of client.zeroTrust.dlp.entries.integration.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: IntegrationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IntegrationListResponsesSinglePage, IntegrationListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dlp/entries`,
      IntegrationListResponsesSinglePage,
      options,
    );
  }

  /**
   * This is a no-op as integration entires can't be deleted but is needed for our
   * generated terraform API.
   *
   * @example
   * ```ts
   * const integration =
   *   await client.zeroTrust.dlp.entries.integration.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    entryId: string,
    params: IntegrationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/dlp/entries/integration/${entryId}`,
        options,
      ) as Core.APIPromise<{ result: IntegrationDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a DLP entry by ID.
   *
   * @example
   * ```ts
   * const integration =
   *   await client.zeroTrust.dlp.entries.integration.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    entryId: string,
    params: IntegrationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/dlp/entries/${entryId}`, options) as Core.APIPromise<{
        result: IntegrationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class IntegrationListResponsesSinglePage extends SinglePage<IntegrationListResponse> {}

export interface IntegrationCreateResponse {
  id: string;

  created_at: string;

  enabled: boolean;

  name: string;

  updated_at: string;

  profile_id?: string | null;
}

export interface IntegrationUpdateResponse {
  id: string;

  created_at: string;

  enabled: boolean;

  name: string;

  updated_at: string;

  profile_id?: string | null;
}

export type IntegrationListResponse =
  | IntegrationListResponse.CustomEntry
  | IntegrationListResponse.PredefinedEntry
  | IntegrationListResponse.IntegrationEntry
  | IntegrationListResponse.ExactDataEntry
  | IntegrationListResponse.DocumentFingerprintEntry
  | IntegrationListResponse.WordListEntry;

export namespace IntegrationListResponse {
  export interface CustomEntry {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    pattern: CustomAPI.Pattern;

    type: 'custom';

    updated_at: string;

    profile_id?: string | null;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export interface PredefinedEntry {
    id: string;

    confidence: PredefinedEntry.Confidence;

    enabled: boolean;

    name: string;

    type: 'predefined';

    profile_id?: string | null;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';

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

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
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

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export interface DocumentFingerprintEntry {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'document_fingerprint';

    updated_at: string;

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
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

    upload_status?: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }
}

export type IntegrationDeleteResponse = unknown;

export type IntegrationGetResponse =
  | IntegrationGetResponse.UnionMember0
  | IntegrationGetResponse.UnionMember1
  | IntegrationGetResponse.UnionMember2
  | IntegrationGetResponse.UnionMember3
  | IntegrationGetResponse.UnionMember4
  | IntegrationGetResponse.UnionMember5;

export namespace IntegrationGetResponse {
  export interface UnionMember0 {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    pattern: CustomAPI.Pattern;

    type: 'custom';

    updated_at: string;

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

export interface IntegrationCreateParams {
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

export interface IntegrationUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  enabled: boolean;
}

export interface IntegrationListParams {
  account_id: string;
}

export interface IntegrationDeleteParams {
  account_id: string;
}

export interface IntegrationGetParams {
  account_id: string;
}

Integration.IntegrationListResponsesSinglePage = IntegrationListResponsesSinglePage;

export declare namespace Integration {
  export {
    type IntegrationCreateResponse as IntegrationCreateResponse,
    type IntegrationUpdateResponse as IntegrationUpdateResponse,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationDeleteResponse as IntegrationDeleteResponse,
    type IntegrationGetResponse as IntegrationGetResponse,
    IntegrationListResponsesSinglePage as IntegrationListResponsesSinglePage,
    type IntegrationCreateParams as IntegrationCreateParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationDeleteParams as IntegrationDeleteParams,
    type IntegrationGetParams as IntegrationGetParams,
  };
}
