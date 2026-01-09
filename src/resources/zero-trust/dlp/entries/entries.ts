// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as CustomAPI from './custom';
import {
  Custom as CustomAPICustom,
  CustomCreateParams,
  CustomCreateResponse,
  CustomDeleteParams,
  CustomDeleteResponse,
  CustomGetParams,
  CustomGetResponse,
  CustomListParams,
  CustomListResponse,
  CustomListResponsesSinglePage,
  CustomUpdateParams,
  CustomUpdateResponse,
} from './custom';
import * as IntegrationAPI from './integration';
import {
  Integration as IntegrationAPIIntegration,
  IntegrationCreateParams,
  IntegrationCreateResponse,
  IntegrationDeleteParams,
  IntegrationDeleteResponse,
  IntegrationGetParams,
  IntegrationGetResponse,
  IntegrationListParams,
  IntegrationListResponse,
  IntegrationListResponsesSinglePage,
  IntegrationUpdateParams,
  IntegrationUpdateResponse,
} from './integration';
import * as PredefinedAPI from './predefined';
import {
  Predefined as PredefinedAPIPredefined,
  PredefinedCreateParams,
  PredefinedCreateResponse,
  PredefinedDeleteParams,
  PredefinedDeleteResponse,
  PredefinedGetParams,
  PredefinedGetResponse,
  PredefinedListParams,
  PredefinedListResponse,
  PredefinedListResponsesSinglePage,
  PredefinedUpdateParams,
  PredefinedUpdateResponse,
} from './predefined';
import * as ProfilesCustomAPI from '../profiles/custom';
import { SinglePage } from '../../../../pagination';

export class Entries extends APIResource {
  custom: CustomAPI.Custom = new CustomAPI.Custom(this._client);
  predefined: PredefinedAPI.Predefined = new PredefinedAPI.Predefined(this._client);
  integration: IntegrationAPI.Integration = new IntegrationAPI.Integration(this._client);

  /**
   * Creates a DLP custom entry.
   *
   * @example
   * ```ts
   * const entry = await client.zeroTrust.dlp.entries.create({
   *   account_id: 'account_id',
   *   enabled: true,
   *   name: 'name',
   *   pattern: { regex: 'regex' },
   * });
   * ```
   */
  create(params: EntryCreateParams, options?: Core.RequestOptions): Core.APIPromise<EntryCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/entries`, { body, ...options }) as Core.APIPromise<{
        result: EntryCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a DLP entry.
   *
   * @example
   * ```ts
   * const entry = await client.zeroTrust.dlp.entries.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     account_id: 'account_id',
   *     name: 'name',
   *     pattern: { regex: 'regex' },
   *     type: 'custom',
   *   },
   * );
   * ```
   */
  update(
    entryId: string,
    params: EntryUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntryUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/dlp/entries/${entryId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: EntryUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all DLP entries in an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const entryListResponse of client.zeroTrust.dlp.entries.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: EntryListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<EntryListResponsesSinglePage, EntryListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dlp/entries`,
      EntryListResponsesSinglePage,
      options,
    );
  }

  /**
   * Deletes a DLP custom entry.
   *
   * @example
   * ```ts
   * const entry = await client.zeroTrust.dlp.entries.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  delete(
    entryId: string,
    params: EntryDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntryDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/dlp/entries/${entryId}`, options) as Core.APIPromise<{
        result: EntryDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a DLP entry by ID.
   *
   * @example
   * ```ts
   * const entry = await client.zeroTrust.dlp.entries.get(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(
    entryId: string,
    params: EntryGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EntryGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/dlp/entries/${entryId}`, options) as Core.APIPromise<{
        result: EntryGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class EntryListResponsesSinglePage extends SinglePage<EntryListResponse> {}

export interface EntryCreateResponse {
  id: string;

  created_at: string;

  enabled: boolean;

  name: string;

  pattern: ProfilesCustomAPI.Pattern;

  updated_at: string;

  profile_id?: string | null;
}

export type EntryUpdateResponse =
  | EntryUpdateResponse.Custom
  | EntryUpdateResponse.Predefined
  | EntryUpdateResponse.Integration
  | EntryUpdateResponse.ExactData
  | EntryUpdateResponse.DocumentFingerprint
  | EntryUpdateResponse.WordList;

export namespace EntryUpdateResponse {
  export interface Custom {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    pattern: ProfilesCustomAPI.Pattern;

    type: 'custom';

    updated_at: string;

    profile_id?: string | null;
  }

  export interface Predefined {
    id: string;

    confidence: Predefined.Confidence;

    enabled: boolean;

    name: string;

    type: 'predefined';

    profile_id?: string | null;

    variant?: Predefined.Variant;
  }

  export namespace Predefined {
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

  export interface Integration {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'integration';

    updated_at: string;

    profile_id?: string | null;
  }

  export interface ExactData {
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

  export interface DocumentFingerprint {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    type: 'document_fingerprint';

    updated_at: string;
  }

  export interface WordList {
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

export type EntryListResponse =
  | EntryListResponse.CustomEntry
  | EntryListResponse.PredefinedEntry
  | EntryListResponse.IntegrationEntry
  | EntryListResponse.ExactDataEntry
  | EntryListResponse.DocumentFingerprintEntry
  | EntryListResponse.WordListEntry;

export namespace EntryListResponse {
  export interface CustomEntry {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    pattern: ProfilesCustomAPI.Pattern;

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

export type EntryDeleteResponse = unknown;

export type EntryGetResponse =
  | EntryGetResponse.UnionMember0
  | EntryGetResponse.UnionMember1
  | EntryGetResponse.UnionMember2
  | EntryGetResponse.UnionMember3
  | EntryGetResponse.UnionMember4
  | EntryGetResponse.UnionMember5;

export namespace EntryGetResponse {
  export interface UnionMember0 {
    id: string;

    created_at: string;

    enabled: boolean;

    name: string;

    pattern: ProfilesCustomAPI.Pattern;

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

export interface EntryCreateParams {
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
  name: string;

  /**
   * Body param:
   */
  pattern: ProfilesCustomAPI.PatternParam;

  /**
   * Body param:
   */
  profile_id?: string;
}

export type EntryUpdateParams =
  | EntryUpdateParams.Variant0
  | EntryUpdateParams.Variant1
  | EntryUpdateParams.Variant2;

export declare namespace EntryUpdateParams {
  export interface Variant0 {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param:
     */
    name: string;

    /**
     * Body param:
     */
    pattern: ProfilesCustomAPI.PatternParam;

    /**
     * Body param:
     */
    type: 'custom';

    /**
     * Body param:
     */
    enabled?: boolean;
  }

  export interface Variant1 {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param:
     */
    type: 'predefined';

    /**
     * Body param:
     */
    enabled?: boolean;
  }

  export interface Variant2 {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param:
     */
    type: 'integration';

    /**
     * Body param:
     */
    enabled?: boolean;
  }
}

export interface EntryListParams {
  account_id: string;
}

export interface EntryDeleteParams {
  account_id: string;
}

export interface EntryGetParams {
  account_id: string;
}

Entries.EntryListResponsesSinglePage = EntryListResponsesSinglePage;
Entries.Custom = CustomAPICustom;
Entries.CustomListResponsesSinglePage = CustomListResponsesSinglePage;
Entries.Predefined = PredefinedAPIPredefined;
Entries.PredefinedListResponsesSinglePage = PredefinedListResponsesSinglePage;
Entries.Integration = IntegrationAPIIntegration;
Entries.IntegrationListResponsesSinglePage = IntegrationListResponsesSinglePage;

export declare namespace Entries {
  export {
    type EntryCreateResponse as EntryCreateResponse,
    type EntryUpdateResponse as EntryUpdateResponse,
    type EntryListResponse as EntryListResponse,
    type EntryDeleteResponse as EntryDeleteResponse,
    type EntryGetResponse as EntryGetResponse,
    EntryListResponsesSinglePage as EntryListResponsesSinglePage,
    type EntryCreateParams as EntryCreateParams,
    type EntryUpdateParams as EntryUpdateParams,
    type EntryListParams as EntryListParams,
    type EntryDeleteParams as EntryDeleteParams,
    type EntryGetParams as EntryGetParams,
  };

  export {
    CustomAPICustom as Custom,
    type CustomCreateResponse as CustomCreateResponse,
    type CustomUpdateResponse as CustomUpdateResponse,
    type CustomListResponse as CustomListResponse,
    type CustomDeleteResponse as CustomDeleteResponse,
    type CustomGetResponse as CustomGetResponse,
    CustomListResponsesSinglePage as CustomListResponsesSinglePage,
    type CustomCreateParams as CustomCreateParams,
    type CustomUpdateParams as CustomUpdateParams,
    type CustomListParams as CustomListParams,
    type CustomDeleteParams as CustomDeleteParams,
    type CustomGetParams as CustomGetParams,
  };

  export {
    PredefinedAPIPredefined as Predefined,
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

  export {
    IntegrationAPIIntegration as Integration,
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
