// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as CustomAPI from './custom';
import * as ProfilesAPI from './profiles';

export class Predefined extends APIResource {
  /**
   * Updates a DLP predefined profile. Only supports enabling/disabling entries.
   */
  update(
    profileId: string,
    params: PredefinedUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfilesAPI.Profile> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/dlp/profiles/predefined/${profileId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ProfilesAPI.Profile }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a predefined DLP profile by id.
   */
  get(
    profileId: string,
    params: PredefinedGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfilesAPI.Profile> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/dlp/profiles/predefined/${profileId}`,
        options,
      ) as Core.APIPromise<{ result: ProfilesAPI.Profile }>
    )._thenUnwrap((obj) => obj.result);
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

export interface PredefinedUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  entries: Array<PredefinedUpdateParams.Entry>;

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

export interface PredefinedGetParams {
  account_id: string;
}

export declare namespace Predefined {
  export {
    type PredefinedProfile as PredefinedProfile,
    type PredefinedUpdateParams as PredefinedUpdateParams,
    type PredefinedGetParams as PredefinedGetParams,
  };
}
