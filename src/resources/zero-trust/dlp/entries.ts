// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as CustomAPI from './profiles/custom';
import { APIPromise } from '../../../api-promise';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Entries extends APIResource {
  /**
   * Creates a DLP custom entry.
   */
  create(params: EntryCreateParams, options?: RequestOptions): APIPromise<EntryCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/dlp/entries`, { body, ...options }) as APIPromise<{
        result: EntryCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a DLP entry.
   */
  update(
    entryID: string,
    params: EntryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EntryUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/dlp/entries/${entryID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: EntryUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all DLP entries in an account.
   */
  list(
    params: EntryListParams,
    options?: RequestOptions,
  ): PagePromise<EntryListResponsesSinglePage, EntryListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/dlp/entries`,
      SinglePage<EntryListResponse>,
      options,
    );
  }

  /**
   * Deletes a DLP custom entry.
   */
  delete(
    entryID: string,
    params: EntryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<EntryDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/dlp/entries/${entryID}`, options) as APIPromise<{
        result: EntryDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a DLP entry by ID
   */
  get(entryID: string, params: EntryGetParams, options?: RequestOptions): APIPromise<EntryGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/dlp/entries/${entryID}`, options) as APIPromise<{
        result: EntryGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type EntryListResponsesSinglePage = SinglePage<EntryListResponse>;

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
      /**
       * Indicates whether this entry has AI remote service validation
       */
      ai_context_available: boolean;

      /**
       * Indicates whether this entry has any form of validation that is not an AI remote
       * service
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
      /**
       * Indicates whether this entry has AI remote service validation
       */
      ai_context_available: boolean;

      /**
       * Indicates whether this entry has any form of validation that is not an AI remote
       * service
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
      /**
       * Indicates whether this entry has AI remote service validation
       */
      ai_context_available: boolean;

      /**
       * Indicates whether this entry has any form of validation that is not an AI remote
       * service
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

export declare namespace Entries {
  export {
    type EntryCreateResponse as EntryCreateResponse,
    type EntryUpdateResponse as EntryUpdateResponse,
    type EntryListResponse as EntryListResponse,
    type EntryDeleteResponse as EntryDeleteResponse,
    type EntryGetResponse as EntryGetResponse,
    type EntryListResponsesSinglePage as EntryListResponsesSinglePage,
    type EntryCreateParams as EntryCreateParams,
    type EntryUpdateParams as EntryUpdateParams,
    type EntryListParams as EntryListParams,
    type EntryDeleteParams as EntryDeleteParams,
    type EntryGetParams as EntryGetParams,
  };
}
