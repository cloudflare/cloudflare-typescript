// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as PredefinedAPI from './predefined';
import * as ProfilesAPI from './profiles';

export class Predefined extends APIResource {
  /**
   * Updates a DLP predefined profile. Only supports enabling/disabling entries.
   */
  update(
    profileId: string,
    params: PredefinedUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredefinedProfile> {
    const { account_id, ...body } = params;
    return this._client.put(`/accounts/${account_id}/dlp/profiles/predefined/${profileId}`, {
      body,
      ...options,
    });
  }

  /**
   * Fetches a predefined DLP profile.
   */
  get(
    profileId: string,
    params: PredefinedGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredefinedProfile> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/dlp/profiles/predefined/${profileId}`,
        options,
      ) as Core.APIPromise<{ result: PredefinedProfile }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PredefinedProfile {
  /**
   * Unique identifier for a DLP profile
   */
  id?: string;

  /**
   * Related DLP policies will trigger when the match count exceeds the number set.
   */
  allowed_match_count?: number;

  /**
   * Scan the context of predefined entries to only return matches surrounded by
   * keywords.
   */
  context_awareness?: ProfilesAPI.ContextAwareness;

  /**
   * The entries for this profile.
   */
  entries?: Array<PredefinedProfile.Entry>;

  /**
   * The name of the profile.
   */
  name?: string;

  /**
   * If true, scan images via OCR to determine if any text present matches filters.
   */
  ocr_enabled?: boolean;

  /**
   * The type of the profile.
   */
  type?: 'predefined';
}

export namespace PredefinedProfile {
  /**
   * A predefined entry that matches a profile
   */
  export interface Entry {
    /**
     * Unique identifier for a DLP entry
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
     * Unique identifier for a DLP profile
     */
    profile_id?: string;
  }
}

export interface PredefinedUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Related DLP policies will trigger when the match count exceeds the
   * number set.
   */
  allowed_match_count?: number;

  /**
   * Body param: Scan the context of predefined entries to only return matches
   * surrounded by keywords.
   */
  context_awareness?: ProfilesAPI.ContextAwarenessParam;

  /**
   * Body param: The entries for this profile.
   */
  entries?: Array<PredefinedUpdateParams.Entry>;

  /**
   * Body param: If true, scan images via OCR to determine if any text present
   * matches filters.
   */
  ocr_enabled?: boolean;
}

export namespace PredefinedUpdateParams {
  export interface Entry {
    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;
  }
}

export interface PredefinedGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Predefined {
  export import PredefinedProfile = PredefinedAPI.PredefinedProfile;
  export import PredefinedUpdateParams = PredefinedAPI.PredefinedUpdateParams;
  export import PredefinedGetParams = PredefinedAPI.PredefinedGetParams;
}
