// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as CustomAPI from './profiles/custom';
import { SinglePage } from '../../../pagination';

export class Entries extends APIResource {
  /**
   * Creates a DLP custom entry.
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
   * Fetches a DLP entry by ID
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

  pattern: CustomAPI.Pattern;

  updated_at: string;

  profile_id?: string | null;
}

export type EntryUpdateResponse =
  | EntryUpdateResponse.CustomEntry
  | EntryUpdateResponse.PredefinedEntry
  | EntryUpdateResponse.IntegrationEntry
  | EntryUpdateResponse.ExactDataEntry
  | EntryUpdateResponse.WordListEntry;

export namespace EntryUpdateResponse {
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
  }

  export namespace PredefinedEntry {
    export interface Confidence {
      ai_context_available: boolean;

      /**
       * Indicates whether this entry can be made more or less sensitive by setting a
       * confidence threshold. Profiles that use an entry with `available` set to true
       * can use confidence thresholds
       */
      available: boolean;
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

    created_at: string;

    enabled: boolean;

    name: string;

    secret: boolean;

    type: 'exact_data';

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

export type EntryListResponse =
  | EntryListResponse.CustomEntry
  | EntryListResponse.PredefinedEntry
  | EntryListResponse.IntegrationEntry
  | EntryListResponse.ExactDataEntry
  | EntryListResponse.WordListEntry;

export namespace EntryListResponse {
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
  }

  export namespace PredefinedEntry {
    export interface Confidence {
      ai_context_available: boolean;

      /**
       * Indicates whether this entry can be made more or less sensitive by setting a
       * confidence threshold. Profiles that use an entry with `available` set to true
       * can use confidence thresholds
       */
      available: boolean;
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

    created_at: string;

    enabled: boolean;

    name: string;

    secret: boolean;

    type: 'exact_data';

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

export type EntryDeleteResponse = unknown;

export type EntryGetResponse =
  | EntryGetResponse.CustomEntry
  | EntryGetResponse.PredefinedEntry
  | EntryGetResponse.IntegrationEntry
  | EntryGetResponse.ExactDataEntry
  | EntryGetResponse.WordListEntry;

export namespace EntryGetResponse {
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
  }

  export namespace PredefinedEntry {
    export interface Confidence {
      ai_context_available: boolean;

      /**
       * Indicates whether this entry can be made more or less sensitive by setting a
       * confidence threshold. Profiles that use an entry with `available` set to true
       * can use confidence thresholds
       */
      available: boolean;
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

    created_at: string;

    enabled: boolean;

    name: string;

    secret: boolean;

    type: 'exact_data';

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
  pattern: CustomAPI.PatternParam;

  /**
   * Body param:
   */
  profile_id: string;
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
    pattern: CustomAPI.PatternParam;

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
}
