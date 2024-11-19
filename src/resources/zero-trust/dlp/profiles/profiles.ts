// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ProfilesAPI from './profiles';
import * as CustomAPI from './custom';
import {
  Custom,
  CustomCreateParams,
  CustomCreateResponse,
  CustomDeleteParams,
  CustomDeleteResponse,
  CustomGetParams,
  CustomProfile as CustomAPICustomProfile,
  CustomUpdateParams,
  Pattern,
} from './custom';
import * as PredefinedAPI from './predefined';
import {
  Predefined,
  PredefinedGetParams,
  PredefinedProfile as PredefinedAPIPredefinedProfile,
  PredefinedUpdateParams,
} from './predefined';
import { SinglePage } from '../../../../pagination';

export class Profiles extends APIResource {
  custom: CustomAPI.Custom = new CustomAPI.Custom(this._client);
  predefined: PredefinedAPI.Predefined = new PredefinedAPI.Predefined(this._client);

  /**
   * Lists all DLP profiles in an account.
   */
  list(
    params: ProfileListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProfilesSinglePage, Profile> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/dlp/profiles`, ProfilesSinglePage, {
      query,
      ...options,
    });
  }

  /**
   * Fetches a DLP profile by ID
   */
  get(profileId: string, params: ProfileGetParams, options?: Core.RequestOptions): Core.APIPromise<Profile> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/dlp/profiles/${profileId}`, options) as Core.APIPromise<{
        result: Profile;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ProfilesSinglePage extends SinglePage<Profile> {}

/**
 * Scan the context of predefined entries to only return matches surrounded by
 * keywords.
 */
export interface ContextAwareness {
  /**
   * If true, scan the context of predefined entries to only return matches
   * surrounded by keywords.
   */
  enabled: boolean;

  /**
   * Content types to exclude from context analysis and return all matches.
   */
  skip: SkipConfiguration;
}

/**
 * Scan the context of predefined entries to only return matches surrounded by
 * keywords.
 */
export interface ContextAwarenessParam {
  /**
   * If true, scan the context of predefined entries to only return matches
   * surrounded by keywords.
   */
  enabled: boolean;

  /**
   * Content types to exclude from context analysis and return all matches.
   */
  skip: SkipConfigurationParam;
}

export type Profile = Profile.CustomProfile | Profile.PredefinedProfile | Profile.IntegrationProfile;

export namespace Profile {
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

/**
 * Content types to exclude from context analysis and return all matches.
 */
export interface SkipConfiguration {
  /**
   * If the content type is a file, skip context analysis and return all matches.
   */
  files: boolean;
}

/**
 * Content types to exclude from context analysis and return all matches.
 */
export interface SkipConfigurationParam {
  /**
   * If the content type is a file, skip context analysis and return all matches.
   */
  files: boolean;
}

export interface ProfileListParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param: Return all profiles, including those that current account does not
   * have access to.
   */
  all?: boolean;
}

export interface ProfileGetParams {
  account_id: string;
}

Profiles.ProfilesSinglePage = ProfilesSinglePage;
Profiles.Custom = Custom;
Profiles.Predefined = Predefined;

export declare namespace Profiles {
  export {
    type ContextAwareness as ContextAwareness,
    type Profile as Profile,
    type SkipConfiguration as SkipConfiguration,
    ProfilesSinglePage as ProfilesSinglePage,
    type ProfileListParams as ProfileListParams,
    type ProfileGetParams as ProfileGetParams,
  };

  export {
    Custom as Custom,
    type CustomAPICustomProfile as CustomProfile,
    type Pattern as Pattern,
    type CustomCreateResponse as CustomCreateResponse,
    type CustomDeleteResponse as CustomDeleteResponse,
    type CustomCreateParams as CustomCreateParams,
    type CustomUpdateParams as CustomUpdateParams,
    type CustomDeleteParams as CustomDeleteParams,
    type CustomGetParams as CustomGetParams,
  };

  export {
    Predefined as Predefined,
    type PredefinedAPIPredefinedProfile as PredefinedProfile,
    type PredefinedUpdateParams as PredefinedUpdateParams,
    type PredefinedGetParams as PredefinedGetParams,
  };
}
