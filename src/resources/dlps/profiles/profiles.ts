// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProfilesAPI from 'cloudflare/resources/dlps/profiles/profiles';
import * as CustomsAPI from 'cloudflare/resources/dlps/profiles/customs';
import * as PredefinedsAPI from 'cloudflare/resources/dlps/profiles/predefineds';

export class Profiles extends APIResource {
  customs: CustomsAPI.Customs = new CustomsAPI.Customs(this._client);
  predefineds: PredefinedsAPI.Predefineds = new PredefinedsAPI.Predefineds(this._client);

  /**
   * Lists all DLP profiles in an account.
   */
  dlpProfilesListAllProfiles(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileDLPProfilesListAllProfilesResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/dlp/profiles`, options) as Core.APIPromise<{
        result: ProfileDLPProfilesListAllProfilesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a DLP profile by ID. Supports both predefined and custom profiles
   */
  get(
    accountId: string,
    profileId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/dlp/profiles/${profileId}`, options) as Core.APIPromise<{
        result: ProfileGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ProfileDLPProfilesListAllProfilesResponse = Array<
  | ProfileDLPProfilesListAllProfilesResponse.DLPPredefinedProfile
  | ProfileDLPProfilesListAllProfilesResponse.DLPCustomProfile
  | ProfileDLPProfilesListAllProfilesResponse.DLPIntegrationProfile
>;

export namespace ProfileDLPProfilesListAllProfilesResponse {
  export interface DLPPredefinedProfile {
    /**
     * The ID for this profile
     */
    id?: string;

    /**
     * Related DLP policies will trigger when the match count exceeds the number set.
     */
    allowed_match_count?: number;

    /**
     * The entries for this profile.
     */
    entries?: Array<DLPPredefinedProfile.Entry>;

    /**
     * The name of the profile.
     */
    name?: string;

    /**
     * The type of the profile.
     */
    type?: 'predefined';
  }

  export namespace DLPPredefinedProfile {
    /**
     * A predefined entry that matches a profile
     */
    export interface Entry {
      /**
       * The ID for this entry
       */
      id?: string;

      /**
       * Whether the entry is enabled or not.
       */
      enabled?: boolean;

      /**
       * The name of the entry.
       */
      name?: string;

      /**
       * ID of the parent profile
       */
      profile_id?: unknown;
    }
  }

  export interface DLPCustomProfile {
    /**
     * The ID for this profile
     */
    id?: string;

    /**
     * Related DLP policies will trigger when the match count exceeds the number set.
     */
    allowed_match_count?: number;

    created_at?: string;

    /**
     * The description of the profile.
     */
    description?: string;

    /**
     * The entries for this profile.
     */
    entries?: Array<DLPCustomProfile.Entry>;

    /**
     * The name of the profile.
     */
    name?: string;

    /**
     * The type of the profile.
     */
    type?: 'custom';

    updated_at?: string;
  }

  export namespace DLPCustomProfile {
    /**
     * A custom entry that matches a profile
     */
    export interface Entry {
      /**
       * The ID for this entry
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
       * A pattern that matches an entry
       */
      pattern?: Entry.Pattern;

      /**
       * ID of the parent profile
       */
      profile_id?: unknown;

      updated_at?: string;
    }

    export namespace Entry {
      /**
       * A pattern that matches an entry
       */
      export interface Pattern {
        /**
         * The regex pattern.
         */
        regex: string;

        /**
         * Validation algorithm for the pattern. This algorithm will get run on potential
         * matches, and if it returns false, the entry will not be matched.
         */
        validation?: 'luhn';
      }
    }
  }

  export interface DLPIntegrationProfile {
    /**
     * The ID for this profile
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
       * The ID for this entry
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
       * ID of the parent profile
       */
      profile_id?: unknown;

      updated_at?: string;
    }
  }
}

export type ProfileGetResponse =
  | ProfileGetResponse.DLPPredefinedProfile
  | ProfileGetResponse.DLPCustomProfile
  | ProfileGetResponse.DLPIntegrationProfile;

export namespace ProfileGetResponse {
  export interface DLPPredefinedProfile {
    /**
     * The ID for this profile
     */
    id?: string;

    /**
     * Related DLP policies will trigger when the match count exceeds the number set.
     */
    allowed_match_count?: number;

    /**
     * The entries for this profile.
     */
    entries?: Array<DLPPredefinedProfile.Entry>;

    /**
     * The name of the profile.
     */
    name?: string;

    /**
     * The type of the profile.
     */
    type?: 'predefined';
  }

  export namespace DLPPredefinedProfile {
    /**
     * A predefined entry that matches a profile
     */
    export interface Entry {
      /**
       * The ID for this entry
       */
      id?: string;

      /**
       * Whether the entry is enabled or not.
       */
      enabled?: boolean;

      /**
       * The name of the entry.
       */
      name?: string;

      /**
       * ID of the parent profile
       */
      profile_id?: unknown;
    }
  }

  export interface DLPCustomProfile {
    /**
     * The ID for this profile
     */
    id?: string;

    /**
     * Related DLP policies will trigger when the match count exceeds the number set.
     */
    allowed_match_count?: number;

    created_at?: string;

    /**
     * The description of the profile.
     */
    description?: string;

    /**
     * The entries for this profile.
     */
    entries?: Array<DLPCustomProfile.Entry>;

    /**
     * The name of the profile.
     */
    name?: string;

    /**
     * The type of the profile.
     */
    type?: 'custom';

    updated_at?: string;
  }

  export namespace DLPCustomProfile {
    /**
     * A custom entry that matches a profile
     */
    export interface Entry {
      /**
       * The ID for this entry
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
       * A pattern that matches an entry
       */
      pattern?: Entry.Pattern;

      /**
       * ID of the parent profile
       */
      profile_id?: unknown;

      updated_at?: string;
    }

    export namespace Entry {
      /**
       * A pattern that matches an entry
       */
      export interface Pattern {
        /**
         * The regex pattern.
         */
        regex: string;

        /**
         * Validation algorithm for the pattern. This algorithm will get run on potential
         * matches, and if it returns false, the entry will not be matched.
         */
        validation?: 'luhn';
      }
    }
  }

  export interface DLPIntegrationProfile {
    /**
     * The ID for this profile
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
       * The ID for this entry
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
       * ID of the parent profile
       */
      profile_id?: unknown;

      updated_at?: string;
    }
  }
}

export namespace Profiles {
  export import ProfileDLPProfilesListAllProfilesResponse = ProfilesAPI.ProfileDLPProfilesListAllProfilesResponse;
  export import ProfileGetResponse = ProfilesAPI.ProfileGetResponse;
  export import Customs = CustomsAPI.Customs;
  export import CustomUpdateResponse = CustomsAPI.CustomUpdateResponse;
  export import CustomDeleteResponse = CustomsAPI.CustomDeleteResponse;
  export import CustomDLPProfilesCreateCustomProfilesResponse = CustomsAPI.CustomDLPProfilesCreateCustomProfilesResponse;
  export import CustomGetResponse = CustomsAPI.CustomGetResponse;
  export import CustomUpdateParams = CustomsAPI.CustomUpdateParams;
  export import CustomDLPProfilesCreateCustomProfilesParams = CustomsAPI.CustomDLPProfilesCreateCustomProfilesParams;
  export import Predefineds = PredefinedsAPI.Predefineds;
  export import PredefinedUpdateResponse = PredefinedsAPI.PredefinedUpdateResponse;
  export import PredefinedGetResponse = PredefinedsAPI.PredefinedGetResponse;
  export import PredefinedUpdateParams = PredefinedsAPI.PredefinedUpdateParams;
}
