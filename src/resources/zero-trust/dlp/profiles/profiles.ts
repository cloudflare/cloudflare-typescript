// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ProfilesAPI from './profiles';
import * as CustomAPI from './custom';
import * as PredefinedAPI from './predefined';
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
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/dlp/profiles`, ProfilesSinglePage, options);
  }

  /**
   * Fetches a DLP profile by ID. Supports both predefined and custom profiles
   */
  get(
    profileId: string,
    params: ProfileGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/dlp/profiles/${profileId}`, options) as Core.APIPromise<{
        result: ProfileGetResponse;
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

export type Profile =
  | PredefinedAPI.PredefinedProfile
  | CustomAPI.CustomProfile
  | Profile.DLPIntegrationProfile;

export namespace Profile {
  export interface DLPIntegrationProfile {
    /**
     * Unique identifier for a DLP profile
     */
    id?: string;

    created_at?: string;

    /**
     * The description of the profile.
     */
    description?: string;

    /**
     * The entries for this profile.
     */
    entries?: Array<DLPIntegrationProfile.Entry>;

    /**
     * The name of the profile.
     */
    name?: string;

    /**
     * The type of the profile.
     */
    type?: 'integration';

    updated_at?: string;
  }

  export namespace DLPIntegrationProfile {
    /**
     * An entry derived from an integration
     */
    export interface Entry {
      /**
       * Unique identifier for a DLP entry
       */
      id?: string;

      created_at?: string;

      /**
       * Whether the entry is enabled or not.
       */
      enabled?: boolean;

      /**
       * The name of the entry.
       */
      name?: string;

      /**
       * Unique identifier for a DLP profile
       */
      profile_id?: string;

      updated_at?: string;
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

export type ProfileGetResponse =
  | PredefinedAPI.PredefinedProfile
  | CustomAPI.CustomProfile
  | ProfileGetResponse.DLPIntegrationProfile;

export namespace ProfileGetResponse {
  export interface DLPIntegrationProfile {
    /**
     * Unique identifier for a DLP profile
     */
    id?: string;

    created_at?: string;

    /**
     * The description of the profile.
     */
    description?: string;

    /**
     * The entries for this profile.
     */
    entries?: Array<DLPIntegrationProfile.Entry>;

    /**
     * The name of the profile.
     */
    name?: string;

    /**
     * The type of the profile.
     */
    type?: 'integration';

    updated_at?: string;
  }

  export namespace DLPIntegrationProfile {
    /**
     * An entry derived from an integration
     */
    export interface Entry {
      /**
       * Unique identifier for a DLP entry
       */
      id?: string;

      created_at?: string;

      /**
       * Whether the entry is enabled or not.
       */
      enabled?: boolean;

      /**
       * The name of the entry.
       */
      name?: string;

      /**
       * Unique identifier for a DLP profile
       */
      profile_id?: string;

      updated_at?: string;
    }
  }
}

export interface ProfileListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ProfileGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Profiles {
  export import ContextAwareness = ProfilesAPI.ContextAwareness;
  export import Profile = ProfilesAPI.Profile;
  export import SkipConfiguration = ProfilesAPI.SkipConfiguration;
  export import ProfileGetResponse = ProfilesAPI.ProfileGetResponse;
  export import ProfilesSinglePage = ProfilesAPI.ProfilesSinglePage;
  export import ProfileListParams = ProfilesAPI.ProfileListParams;
  export import ProfileGetParams = ProfilesAPI.ProfileGetParams;
  export import Custom = CustomAPI.Custom;
  export import CustomProfile = CustomAPI.CustomProfile;
  export import Pattern = CustomAPI.Pattern;
  export import CustomCreateResponse = CustomAPI.CustomCreateResponse;
  export import CustomDeleteResponse = CustomAPI.CustomDeleteResponse;
  export import CustomCreateParams = CustomAPI.CustomCreateParams;
  export import CustomUpdateParams = CustomAPI.CustomUpdateParams;
  export import CustomDeleteParams = CustomAPI.CustomDeleteParams;
  export import CustomGetParams = CustomAPI.CustomGetParams;
  export import Predefined = PredefinedAPI.Predefined;
  export import PredefinedProfile = PredefinedAPI.PredefinedProfile;
  export import PredefinedUpdateParams = PredefinedAPI.PredefinedUpdateParams;
  export import PredefinedGetParams = PredefinedAPI.PredefinedGetParams;
}
