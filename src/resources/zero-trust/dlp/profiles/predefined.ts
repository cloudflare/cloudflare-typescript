// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CustomAPI from './custom';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Predefined extends APIResource {
  /**
   * This is similar to `update_predefined` but only returns entries that are
   * enabled. This is needed for our terraform API Updates a DLP predefined profile.
   * Only supports enabling/disabling entries.
   *
   * @example
   * ```ts
   * const predefinedProfile =
   *   await client.zeroTrust.dlp.profiles.predefined.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  update(
    profileID: string,
    params: PredefinedUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PredefinedProfile> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/dlp/profiles/predefined/${profileID}/config`, {
        body,
        ...options,
      }) as APIPromise<{ result: PredefinedProfile }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * This is a no-op as predefined profiles can't be deleted but is needed for our
   * generated terraform API
   *
   * @example
   * ```ts
   * const predefined =
   *   await client.zeroTrust.dlp.profiles.predefined.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    profileID: string,
    params: PredefinedDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PredefinedDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/dlp/profiles/predefined/${profileID}`,
        options,
      ) as APIPromise<{ result: PredefinedDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * This is similar to `get_predefined` but only returns entries that are enabled.
   * This is needed for our terraform API Fetches a predefined DLP profile by id.
   *
   * @example
   * ```ts
   * const predefinedProfile =
   *   await client.zeroTrust.dlp.profiles.predefined.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    profileID: string,
    params: PredefinedGetParams,
    options?: RequestOptions,
  ): APIPromise<PredefinedProfile> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/dlp/profiles/predefined/${profileID}/config`,
        options,
      ) as APIPromise<{ result: PredefinedProfile }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PredefinedProfile {
  /**
   * The id of the predefined profile (uuid).
   */
  id: string;

  allowed_match_count: number;

  confidence_threshold: string | null;

  enabled_entries: Array<string>;

  /**
   * @deprecated
   */
  entries: Array<
    | PredefinedProfile.CustomEntry
    | PredefinedProfile.PredefinedEntry
    | PredefinedProfile.IntegrationEntry
    | PredefinedProfile.ExactDataEntry
    | PredefinedProfile.DocumentFingerprintEntry
    | PredefinedProfile.WordListEntry
  >;

  /**
   * The name of the predefined profile.
   */
  name: string;

  ai_context_enabled?: boolean;

  ocr_enabled?: boolean;

  /**
   * Whether this profile can be accessed by anyone.
   */
  open_access?: boolean;
}

export namespace PredefinedProfile {
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

export interface PredefinedUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  ai_context_enabled?: boolean;

  /**
   * Body param:
   */
  allowed_match_count?: number | null;

  /**
   * Body param:
   */
  confidence_threshold?: string | null;

  /**
   * Body param:
   */
  enabled_entries?: Array<string> | null;

  /**
   * @deprecated Body param:
   */
  entries?: Array<PredefinedUpdateParams.Entry>;

  /**
   * Body param:
   */
  ocr_enabled?: boolean;
}

export namespace PredefinedUpdateParams {
  export interface Entry {
    id: string;

    enabled: boolean;
  }
}

export interface PredefinedDeleteParams {
  account_id: string;
}

export interface PredefinedGetParams {
  account_id: string;
}

export declare namespace Predefined {
  export {
    type PredefinedProfile as PredefinedProfile,
    type PredefinedDeleteResponse as PredefinedDeleteResponse,
    type PredefinedUpdateParams as PredefinedUpdateParams,
    type PredefinedDeleteParams as PredefinedDeleteParams,
    type PredefinedGetParams as PredefinedGetParams,
  };
}
