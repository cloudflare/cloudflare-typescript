// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ProfilesAPI from 'cloudflare/resources/zero-trust/dlp/profiles/profiles';
import * as CustomsAPI from 'cloudflare/resources/zero-trust/dlp/profiles/customs';
import * as PredefinedsAPI from 'cloudflare/resources/zero-trust/dlp/profiles/predefineds';

export class Profiles extends APIResource {
  customs: CustomsAPI.Customs = new CustomsAPI.Customs(this._client);
  predefineds: PredefinedsAPI.Predefineds = new PredefinedsAPI.Predefineds(this._client);

  /**
   * Lists all DLP profiles in an account.
   */
  list(
    params: ProfileListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/dlp/profiles`, options) as Core.APIPromise<{
        result: ProfileListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
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

export type DLPProfiles =
  | PredefinedsAPI.DLPPredefinedProfile
  | CustomsAPI.DLPCustomProfile
  | DLPProfiles.DLPIntegrationProfile;

export namespace DLPProfiles {
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

export type ProfileListResponse = Array<DLPProfiles>;

export type ProfileGetResponse =
  | PredefinedsAPI.DLPPredefinedProfile
  | CustomsAPI.DLPCustomProfile
  | ProfileGetResponse.DLPIntegrationProfile;

export namespace ProfileGetResponse {
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
  export import DLPProfiles = ProfilesAPI.DLPProfiles;
  export import ProfileListResponse = ProfilesAPI.ProfileListResponse;
  export import ProfileGetResponse = ProfilesAPI.ProfileGetResponse;
  export import ProfileListParams = ProfilesAPI.ProfileListParams;
  export import ProfileGetParams = ProfilesAPI.ProfileGetParams;
  export import Customs = CustomsAPI.Customs;
  export import DLPCustomProfile = CustomsAPI.DLPCustomProfile;
  export import CustomCreateResponse = CustomsAPI.CustomCreateResponse;
  export import CustomDeleteResponse = CustomsAPI.CustomDeleteResponse;
  export import CustomCreateParams = CustomsAPI.CustomCreateParams;
  export import CustomUpdateParams = CustomsAPI.CustomUpdateParams;
  export import CustomDeleteParams = CustomsAPI.CustomDeleteParams;
  export import CustomGetParams = CustomsAPI.CustomGetParams;
  export import Predefineds = PredefinedsAPI.Predefineds;
  export import DLPPredefinedProfile = PredefinedsAPI.DLPPredefinedProfile;
  export import PredefinedUpdateParams = PredefinedsAPI.PredefinedUpdateParams;
  export import PredefinedGetParams = PredefinedsAPI.PredefinedGetParams;
}
