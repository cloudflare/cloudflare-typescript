// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as CustomAPI from './custom';
import * as ProfilesAPI from './profiles';

export class Custom extends APIResource {
  /**
   * Creates a DLP custom profile.
   */
  create(params: CustomCreateParams, options?: Core.RequestOptions): Core.APIPromise<CustomCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/profiles/custom`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CustomCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a DLP custom profile.
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
   * The id of the profile (uuid)
   */
  id: string;

  /**
   * Related DLP policies will trigger when the match count exceeds the number set.
   */
  allowed_match_count: number;

  /**
   * Scan the context of predefined entries to only return matches surrounded by
   * keywords.
   */
  context_awareness: ProfilesAPI.ContextAwareness;

  /**
   * When the profile was created
   */
  created_at: string;

  entries: Array<
    | CustomProfile.CustomEntry
    | CustomProfile.PredefinedEntry
    | CustomProfile.IntegrationEntry
    | CustomProfile.ExactDataEntry
    | CustomProfile.WordListEntry
  >;

  /**
   * The name of the profile
   */
  name: string;

  ocr_enabled: boolean;

  /**
   * When the profile was lasted updated
   */
  updated_at: string;

  ai_context_enabled?: boolean;

  confidence_threshold?: 'low' | 'medium' | 'high' | 'very_high';

  /**
   * The description of the profile
   */
  description?: string | null;
}

export namespace CustomProfile {
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

export type CustomCreateResponse =
  | CustomCreateResponse.CustomProfile
  | CustomCreateResponse.PredefinedProfile
  | CustomCreateResponse.IntegrationProfile
  | Array<ProfilesAPI.Profile>;

export namespace CustomCreateResponse {
  export interface CustomProfile {
    /**
     * The id of the profile (uuid)
     */
    id: string;

    /**
     * Related DLP policies will trigger when the match count exceeds the number set.
     */
    allowed_match_count: number;

    /**
     * Scan the context of predefined entries to only return matches surrounded by
     * keywords.
     */
    context_awareness: ProfilesAPI.ContextAwareness;

    /**
     * When the profile was created
     */
    created_at: string;

    entries: Array<
      | CustomProfile.CustomEntry
      | CustomProfile.PredefinedEntry
      | CustomProfile.IntegrationEntry
      | CustomProfile.ExactDataEntry
      | CustomProfile.WordListEntry
    >;

    /**
     * The name of the profile
     */
    name: string;

    ocr_enabled: boolean;

    type: 'custom';

    /**
     * When the profile was lasted updated
     */
    updated_at: string;

    ai_context_enabled?: boolean;

    confidence_threshold?: 'low' | 'medium' | 'high' | 'very_high';

    /**
     * The description of the profile
     */
    description?: string | null;
  }

  export namespace CustomProfile {
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

  export interface PredefinedProfile {
    /**
     * The id of the predefined profile (uuid)
     */
    id: string;

    allowed_match_count: number;

    entries: Array<
      | PredefinedProfile.CustomEntry
      | PredefinedProfile.PredefinedEntry
      | PredefinedProfile.IntegrationEntry
      | PredefinedProfile.ExactDataEntry
      | PredefinedProfile.WordListEntry
    >;

    /**
     * The name of the predefined profile
     */
    name: string;

    type: 'predefined';

    ai_context_enabled?: boolean;

    confidence_threshold?: 'low' | 'medium' | 'high' | 'very_high';

    /**
     * Scan the context of predefined entries to only return matches surrounded by
     * keywords.
     */
    context_awareness?: ProfilesAPI.ContextAwareness;

    ocr_enabled?: boolean;

    /**
     * Whether this profile can be accessed by anyone
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

  export interface IntegrationProfile {
    id: string;

    created_at: string;

    entries: Array<
      | IntegrationProfile.CustomEntry
      | IntegrationProfile.PredefinedEntry
      | IntegrationProfile.IntegrationEntry
      | IntegrationProfile.ExactDataEntry
      | IntegrationProfile.WordListEntry
    >;

    name: string;

    type: 'integration';

    updated_at: string;

    /**
     * The description of the profile
     */
    description?: string | null;
  }

  export namespace IntegrationProfile {
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
}

export type CustomDeleteResponse = unknown;

export type CustomCreateParams = CustomCreateParams.Variant0 | CustomCreateParams.DLPNewCustomProfile;

export declare namespace CustomCreateParams {
  export interface Variant0 {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param:
     */
    profiles: Array<Variant0.Profile>;
  }

  export namespace Variant0 {
    export interface Profile {
      entries: Array<Profile.DLPNewCustomEntry | Profile.DLPNewWordListEntry>;

      name: string;

      ai_context_enabled?: boolean;

      /**
       * Related DLP policies will trigger when the match count exceeds the number set.
       */
      allowed_match_count?: number;

      confidence_threshold?: string | null;

      /**
       * Scan the context of predefined entries to only return matches surrounded by
       * keywords.
       */
      context_awareness?: ProfilesAPI.ContextAwarenessParam;

      /**
       * The description of the profile
       */
      description?: string | null;

      ocr_enabled?: boolean;

      /**
       * Entries from other profiles (e.g. pre-defined Cloudflare profiles, or your
       * Microsoft Information Protection profiles).
       */
      shared_entries?: Array<
        Profile.UnionMember0 | Profile.UnionMember1 | Profile.UnionMember2 | Profile.UnionMember3
      >;
    }

    export namespace Profile {
      export interface DLPNewCustomEntry {
        enabled: boolean;

        name: string;

        pattern: CustomAPI.PatternParam;
      }

      export interface DLPNewWordListEntry {
        enabled: boolean;

        name: string;

        words: Array<string>;
      }

      export interface UnionMember0 {
        enabled: boolean;

        entry_id: string;

        entry_type: 'custom';
      }

      export interface UnionMember1 {
        enabled: boolean;

        entry_id: string;

        entry_type: 'predefined';
      }

      export interface UnionMember2 {
        enabled: boolean;

        entry_id: string;

        entry_type: 'integration';
      }

      export interface UnionMember3 {
        enabled: boolean;

        entry_id: string;

        entry_type: 'exact_data';
      }
    }
  }

  export interface DLPNewCustomProfile {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param:
     */
    entries: Array<DLPNewCustomProfile.DLPNewCustomEntry | DLPNewCustomProfile.DLPNewWordListEntry>;

    /**
     * Body param:
     */
    name: string;

    /**
     * Body param:
     */
    ai_context_enabled?: boolean;

    /**
     * Body param: Related DLP policies will trigger when the match count exceeds the
     * number set.
     */
    allowed_match_count?: number;

    /**
     * Body param:
     */
    confidence_threshold?: string | null;

    /**
     * Body param: Scan the context of predefined entries to only return matches
     * surrounded by keywords.
     */
    context_awareness?: ProfilesAPI.ContextAwarenessParam;

    /**
     * Body param: The description of the profile
     */
    description?: string | null;

    /**
     * Body param:
     */
    ocr_enabled?: boolean;

    /**
     * Body param: Entries from other profiles (e.g. pre-defined Cloudflare profiles,
     * or your Microsoft Information Protection profiles).
     */
    shared_entries?: Array<
      | DLPNewCustomProfile.UnionMember0
      | DLPNewCustomProfile.UnionMember1
      | DLPNewCustomProfile.UnionMember2
      | DLPNewCustomProfile.UnionMember3
    >;
  }

  export namespace DLPNewCustomProfile {
    export interface DLPNewCustomEntry {
      enabled: boolean;

      name: string;

      pattern: CustomAPI.PatternParam;
    }

    export interface DLPNewWordListEntry {
      enabled: boolean;

      name: string;

      words: Array<string>;
    }

    export interface UnionMember0 {
      enabled: boolean;

      entry_id: string;

      entry_type: 'custom';
    }

    export interface UnionMember1 {
      enabled: boolean;

      entry_id: string;

      entry_type: 'predefined';
    }

    export interface UnionMember2 {
      enabled: boolean;

      entry_id: string;

      entry_type: 'integration';
    }

    export interface UnionMember3 {
      enabled: boolean;

      entry_id: string;

      entry_type: 'exact_data';
    }
  }
}

export interface CustomUpdateParams {
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
   * Body param: Scan the context of predefined entries to only return matches
   * surrounded by keywords.
   */
  context_awareness?: ProfilesAPI.ContextAwarenessParam;

  /**
   * Body param: The description of the profile
   */
  description?: string | null;

  /**
   * Body param: Custom entries from this profile. If this field is omitted, entries
   * owned by this profile will not be changed.
   */
  entries?: Array<CustomUpdateParams.DLPNewCustomEntryWithID | CustomUpdateParams.DLPNewCustomEntry> | null;

  /**
   * Body param:
   */
  ocr_enabled?: boolean;

  /**
   * Body param: Other entries, e.g. predefined or integration.
   */
  shared_entries?: Array<
    CustomUpdateParams.UnionMember0 | CustomUpdateParams.UnionMember1 | CustomUpdateParams.UnionMember2
  >;
}

export namespace CustomUpdateParams {
  export interface DLPNewCustomEntryWithID {
    enabled: boolean;

    entry_id: string;

    name: string;

    pattern: CustomAPI.PatternParam;
  }

  export interface DLPNewCustomEntry {
    enabled: boolean;

    name: string;

    pattern: CustomAPI.PatternParam;
  }

  export interface UnionMember0 {
    enabled: boolean;

    entry_id: string;

    entry_type: 'predefined';
  }

  export interface UnionMember1 {
    enabled: boolean;

    entry_id: string;

    entry_type: 'integration';
  }

  export interface UnionMember2 {
    enabled: boolean;

    entry_id: string;

    entry_type: 'exact_data';
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
    type CustomCreateResponse as CustomCreateResponse,
    type CustomDeleteResponse as CustomDeleteResponse,
    type CustomCreateParams as CustomCreateParams,
    type CustomUpdateParams as CustomUpdateParams,
    type CustomDeleteParams as CustomDeleteParams,
    type CustomGetParams as CustomGetParams,
  };
}
