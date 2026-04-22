// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as CustomAPI from './custom';
import * as ProfilesAPI from './profiles';

export class Custom extends APIResource {
  /**
   * Creates a DLP custom profile.
   *
   * @example
   * ```ts
   * const profile =
   *   await client.zeroTrust.dlp.profiles.custom.create({
   *     account_id: 'account_id',
   *     name: 'name',
   *   });
   * ```
   */
  create(params: CustomCreateParams, options?: Core.RequestOptions): Core.APIPromise<ProfilesAPI.Profile> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/profiles/custom`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ProfilesAPI.Profile }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a DLP custom profile.
   *
   * @example
   * ```ts
   * const profile =
   *   await client.zeroTrust.dlp.profiles.custom.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id', name: 'name' },
   *   );
   * ```
   */
  update(
    profileId: string,
    params: CustomUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfilesAPI.Profile> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/dlp/profiles/custom/${profileId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ProfilesAPI.Profile }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a DLP custom profile.
   *
   * @example
   * ```ts
   * const custom =
   *   await client.zeroTrust.dlp.profiles.custom.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    profileId: string,
    params: CustomDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/dlp/profiles/custom/${profileId}`,
        options,
      ) as Core.APIPromise<{ result: CustomDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a custom DLP profile by id.
   *
   * @example
   * ```ts
   * const profile =
   *   await client.zeroTrust.dlp.profiles.custom.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    profileId: string,
    params: CustomGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfilesAPI.Profile> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/dlp/profiles/custom/${profileId}`,
        options,
      ) as Core.APIPromise<{ result: ProfilesAPI.Profile }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CustomProfile {
  /**
   * The id of the profile (uuid).
   */
  id: string;

  /**
   * Related DLP policies will trigger when the match count exceeds the number set.
   */
  allowed_match_count: number;

  /**
   * When the profile was created.
   */
  created_at: string;

  /**
   * The name of the profile.
   */
  name: string;

  ocr_enabled: boolean;

  /**
   * When the profile was lasted updated.
   */
  updated_at: string;

  ai_context_enabled?: boolean;

  confidence_threshold?: 'low' | 'medium' | 'high' | 'very_high';

  /**
   * @deprecated Scan the context of predefined entries to only return matches
   * surrounded by keywords.
   */
  context_awareness?: ProfilesAPI.ContextAwareness;

  /**
   * Data classes associated with this profile.
   */
  data_classes?: Array<string>;

  /**
   * Data tags associated with this profile.
   */
  data_tags?: Array<string>;

  /**
   * The description of the profile.
   */
  description?: string | null;

  /**
   * @deprecated
   */
  entries?: Array<
    | CustomProfile.CustomEntry
    | CustomProfile.PredefinedEntry
    | CustomProfile.IntegrationEntry
    | CustomProfile.ExactDataEntry
    | CustomProfile.DocumentFingerprintEntry
    | CustomProfile.WordListEntry
  >;

  /**
   * Sensitivity levels associated with this profile.
   */
  sensitivity_levels?: Array<CustomProfile.SensitivityLevel>;

  shared_entries?: Array<
    | CustomProfile.CustomEntry
    | CustomProfile.PredefinedEntry
    | CustomProfile.IntegrationEntry
    | CustomProfile.ExactDataEntry
    | CustomProfile.DocumentFingerprintEntry
    | CustomProfile.WordListEntry
  >;
}

export namespace CustomProfile {
  export interface CustomEntry {
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
  }

  export interface PredefinedEntry {
    id: string;

    confidence: PredefinedEntry.Confidence;

    enabled: boolean;

    name: string;

    type: 'predefined';

    /**
     * @deprecated
     */
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

  /**
   * A reference pairing a sensitivity group with a specific level within that group.
   */
  export interface SensitivityLevel {
    group_id: string;

    level_id: string;
  }

  export interface CustomEntry {
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
  }

  export interface PredefinedEntry {
    id: string;

    confidence: PredefinedEntry.Confidence;

    enabled: boolean;

    name: string;

    type: 'predefined';

    /**
     * @deprecated
     */
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

export interface Pattern {
  regex: string;

  /**
   * @deprecated
   */
  validation?: 'luhn';
}

export interface PatternParam {
  regex: string;

  /**
   * @deprecated
   */
  validation?: 'luhn';
}

export type CustomDeleteResponse = unknown;

export interface CustomCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  ai_context_enabled?: boolean;

  /**
   * Body param: Related DLP policies will trigger when the match count exceeds the
   * number set.
   */
  allowed_match_count?: number;

  /**
   * Body param
   */
  confidence_threshold?: string | null;

  /**
   * @deprecated Body param: Scan the context of predefined entries to only return
   * matches surrounded by keywords.
   */
  context_awareness?: ProfilesAPI.ContextAwarenessParam;

  /**
   * Body param: Data class IDs to associate with the profile.
   */
  data_classes?: Array<string>;

  /**
   * Body param: Data tag IDs to associate with the profile.
   */
  data_tags?: Array<string>;

  /**
   * Body param: The description of the profile.
   */
  description?: string | null;

  /**
   * Body param
   */
  entries?: Array<CustomCreateParams.DLPNewCustomEntry | CustomCreateParams.DLPNewWordListEntry>;

  /**
   * Body param
   */
  ocr_enabled?: boolean;

  /**
   * Body param: Sensitivity levels to associate with the profile.
   */
  sensitivity_levels?: Array<CustomCreateParams.SensitivityLevel>;

  /**
   * Body param: Entries from other profiles (e.g. pre-defined Cloudflare profiles,
   * or your Microsoft Information Protection profiles).
   */
  shared_entries?: Array<CustomCreateParams.SharedEntry>;
}

export namespace CustomCreateParams {
  export interface DLPNewCustomEntry {
    enabled: boolean;

    name: string;

    pattern: CustomAPI.PatternParam;

    description?: string | null;
  }

  export interface DLPNewWordListEntry {
    enabled: boolean;

    name: string;

    words: Array<string>;
  }

  /**
   * A reference pairing a sensitivity group with a specific level within that group.
   */
  export interface SensitivityLevel {
    group_id: string;

    level_id: string;
  }

  export interface SharedEntry {
    enabled: boolean;

    entry_id: string;
  }
}

export interface CustomUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  ai_context_enabled?: boolean;

  /**
   * Body param
   */
  allowed_match_count?: number | null;

  /**
   * Body param
   */
  confidence_threshold?: string | null;

  /**
   * @deprecated Body param: Scan the context of predefined entries to only return
   * matches surrounded by keywords.
   */
  context_awareness?: ProfilesAPI.ContextAwarenessParam;

  /**
   * Body param: Data class IDs to associate with the profile. If omitted, existing
   * associations are unchanged.
   */
  data_classes?: Array<string> | null;

  /**
   * Body param: Data tag IDs to associate with the profile. If omitted, existing
   * associations are unchanged.
   */
  data_tags?: Array<string> | null;

  /**
   * Body param: The description of the profile.
   */
  description?: string | null;

  /**
   * @deprecated Body param: Custom entries from this profile. If this field is
   * omitted, entries owned by this profile will not be changed.
   */
  entries?: Array<CustomUpdateParams.DLPNewCustomEntryWithID | CustomUpdateParams.DLPNewCustomEntry> | null;

  /**
   * Body param
   */
  ocr_enabled?: boolean;

  /**
   * Body param: Sensitivity levels to associate with the profile. If omitted,
   * existing associations are unchanged.
   */
  sensitivity_levels?: Array<CustomUpdateParams.SensitivityLevel> | null;

  /**
   * Body param: Other entries, e.g. predefined or integration.
   */
  shared_entries?: Array<CustomUpdateParams.SharedEntry>;
}

export namespace CustomUpdateParams {
  export interface DLPNewCustomEntryWithID {
    enabled: boolean;

    entry_id: string;

    name: string;

    pattern: CustomAPI.PatternParam;

    description?: string | null;
  }

  export interface DLPNewCustomEntry {
    enabled: boolean;

    name: string;

    pattern: CustomAPI.PatternParam;

    description?: string | null;
  }

  /**
   * A reference pairing a sensitivity group with a specific level within that group.
   */
  export interface SensitivityLevel {
    group_id: string;

    level_id: string;
  }

  export interface SharedEntry {
    enabled: boolean;

    entry_id: string;
  }
}

export interface CustomDeleteParams {
  account_id: string;
}

export interface CustomGetParams {
  account_id: string;
}

export declare namespace Custom {
  export {
    type CustomProfile as CustomProfile,
    type Pattern as Pattern,
    type CustomDeleteResponse as CustomDeleteResponse,
    type CustomCreateParams as CustomCreateParams,
    type CustomUpdateParams as CustomUpdateParams,
    type CustomDeleteParams as CustomDeleteParams,
    type CustomGetParams as CustomGetParams,
  };
}
