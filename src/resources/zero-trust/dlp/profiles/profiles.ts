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
  ): Core.PagePromise<ProfileListResponsesSinglePage, ProfileListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dlp/profiles`,
      ProfileListResponsesSinglePage,
      options,
    );
  }

  /**
   * Fetches a DLP profile by ID
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

export class ProfileListResponsesSinglePage extends SinglePage<ProfileListResponse> {}

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
 * Content types to exclude from context analysis and return all matches.
 */
export interface SkipConfiguration {
  /**
   * If the content type is a file, skip context analysis and return all matches.
   */
  files: boolean;
}

export type ProfileListResponse =
  | ProfileListResponse.Custom
  | ProfileListResponse.Predefined
  | ProfileListResponse.Integration;

export namespace ProfileListResponse {
  export interface Custom {
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
      Custom.Custom | Custom.Predefined | Custom.Integration | Custom.ExactData | Custom.WordList
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

    /**
     * The description of the profile
     */
    description?: string | null;
  }

  export namespace Custom {
    export interface Custom {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      pattern: Custom.Pattern;

      type: 'custom';

      updated_at: string;

      profile_id?: string | null;
    }

    export namespace Custom {
      export interface Pattern {
        regex: string;

        validation?: 'luhn';
      }
    }

    export interface Predefined {
      id: string;

      enabled: boolean;

      name: string;

      type: 'predefined';

      profile_id?: string | null;
    }

    export interface Integration {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      type: 'integration';

      updated_at: string;

      profile_id?: string | null;
    }

    export interface ExactData {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      secret: boolean;

      type: 'exact_data';

      updated_at: string;
    }

    export interface WordList {
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

  export interface Predefined {
    /**
     * The id of the predefined profile (uuid)
     */
    id: string;

    allowed_match_count: number;

    entries: Array<
      | Predefined.Custom
      | Predefined.Predefined
      | Predefined.Integration
      | Predefined.ExactData
      | Predefined.WordList
    >;

    /**
     * The name of the predefined profile
     */
    name: string;

    type: 'predefined';

    /**
     * Scan the context of predefined entries to only return matches surrounded by
     * keywords.
     */
    context_awareness?: ProfilesAPI.ContextAwareness;

    ocr_enabled?: boolean;

    open_access?: boolean;
  }

  export namespace Predefined {
    export interface Custom {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      pattern: Custom.Pattern;

      type: 'custom';

      updated_at: string;

      profile_id?: string | null;
    }

    export namespace Custom {
      export interface Pattern {
        regex: string;

        validation?: 'luhn';
      }
    }

    export interface Predefined {
      id: string;

      enabled: boolean;

      name: string;

      type: 'predefined';

      profile_id?: string | null;
    }

    export interface Integration {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      type: 'integration';

      updated_at: string;

      profile_id?: string | null;
    }

    export interface ExactData {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      secret: boolean;

      type: 'exact_data';

      updated_at: string;
    }

    export interface WordList {
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

  export interface Integration {
    id: string;

    created_at: string;

    entries: Array<
      | Integration.Custom
      | Integration.Predefined
      | Integration.Integration
      | Integration.ExactData
      | Integration.WordList
    >;

    name: string;

    type: 'integration';

    updated_at: string;

    /**
     * The description of the profile
     */
    description?: string | null;
  }

  export namespace Integration {
    export interface Custom {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      pattern: Custom.Pattern;

      type: 'custom';

      updated_at: string;

      profile_id?: string | null;
    }

    export namespace Custom {
      export interface Pattern {
        regex: string;

        validation?: 'luhn';
      }
    }

    export interface Predefined {
      id: string;

      enabled: boolean;

      name: string;

      type: 'predefined';

      profile_id?: string | null;
    }

    export interface Integration {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      type: 'integration';

      updated_at: string;

      profile_id?: string | null;
    }

    export interface ExactData {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      secret: boolean;

      type: 'exact_data';

      updated_at: string;
    }

    export interface WordList {
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

export type ProfileGetResponse =
  | ProfileGetResponse.Custom
  | ProfileGetResponse.Predefined
  | ProfileGetResponse.Integration;

export namespace ProfileGetResponse {
  export interface Custom {
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
      Custom.Custom | Custom.Predefined | Custom.Integration | Custom.ExactData | Custom.WordList
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

    /**
     * The description of the profile
     */
    description?: string | null;
  }

  export namespace Custom {
    export interface Custom {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      pattern: Custom.Pattern;

      type: 'custom';

      updated_at: string;

      profile_id?: string | null;
    }

    export namespace Custom {
      export interface Pattern {
        regex: string;

        validation?: 'luhn';
      }
    }

    export interface Predefined {
      id: string;

      enabled: boolean;

      name: string;

      type: 'predefined';

      profile_id?: string | null;
    }

    export interface Integration {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      type: 'integration';

      updated_at: string;

      profile_id?: string | null;
    }

    export interface ExactData {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      secret: boolean;

      type: 'exact_data';

      updated_at: string;
    }

    export interface WordList {
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

  export interface Predefined {
    /**
     * The id of the predefined profile (uuid)
     */
    id: string;

    allowed_match_count: number;

    entries: Array<
      | Predefined.Custom
      | Predefined.Predefined
      | Predefined.Integration
      | Predefined.ExactData
      | Predefined.WordList
    >;

    /**
     * The name of the predefined profile
     */
    name: string;

    type: 'predefined';

    /**
     * Scan the context of predefined entries to only return matches surrounded by
     * keywords.
     */
    context_awareness?: ProfilesAPI.ContextAwareness;

    ocr_enabled?: boolean;

    open_access?: boolean;
  }

  export namespace Predefined {
    export interface Custom {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      pattern: Custom.Pattern;

      type: 'custom';

      updated_at: string;

      profile_id?: string | null;
    }

    export namespace Custom {
      export interface Pattern {
        regex: string;

        validation?: 'luhn';
      }
    }

    export interface Predefined {
      id: string;

      enabled: boolean;

      name: string;

      type: 'predefined';

      profile_id?: string | null;
    }

    export interface Integration {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      type: 'integration';

      updated_at: string;

      profile_id?: string | null;
    }

    export interface ExactData {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      secret: boolean;

      type: 'exact_data';

      updated_at: string;
    }

    export interface WordList {
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

  export interface Integration {
    id: string;

    created_at: string;

    entries: Array<
      | Integration.Custom
      | Integration.Predefined
      | Integration.Integration
      | Integration.ExactData
      | Integration.WordList
    >;

    name: string;

    type: 'integration';

    updated_at: string;

    /**
     * The description of the profile
     */
    description?: string | null;
  }

  export namespace Integration {
    export interface Custom {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      pattern: Custom.Pattern;

      type: 'custom';

      updated_at: string;

      profile_id?: string | null;
    }

    export namespace Custom {
      export interface Pattern {
        regex: string;

        validation?: 'luhn';
      }
    }

    export interface Predefined {
      id: string;

      enabled: boolean;

      name: string;

      type: 'predefined';

      profile_id?: string | null;
    }

    export interface Integration {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      type: 'integration';

      updated_at: string;

      profile_id?: string | null;
    }

    export interface ExactData {
      id: string;

      created_at: string;

      enabled: boolean;

      name: string;

      secret: boolean;

      type: 'exact_data';

      updated_at: string;
    }

    export interface WordList {
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

export interface ProfileListParams {
  account_id: string;
}

export interface ProfileGetParams {
  account_id: string;
}

export namespace Profiles {
  export import ContextAwareness = ProfilesAPI.ContextAwareness;
  export import SkipConfiguration = ProfilesAPI.SkipConfiguration;
  export import ProfileListResponse = ProfilesAPI.ProfileListResponse;
  export import ProfileGetResponse = ProfilesAPI.ProfileGetResponse;
  export import ProfileListResponsesSinglePage = ProfilesAPI.ProfileListResponsesSinglePage;
  export import ProfileListParams = ProfilesAPI.ProfileListParams;
  export import ProfileGetParams = ProfilesAPI.ProfileGetParams;
  export import Custom = CustomAPI.Custom;
  export import CustomCreateResponse = CustomAPI.CustomCreateResponse;
  export import CustomUpdateResponse = CustomAPI.CustomUpdateResponse;
  export import CustomDeleteResponse = CustomAPI.CustomDeleteResponse;
  export import CustomGetResponse = CustomAPI.CustomGetResponse;
  export import CustomCreateParams = CustomAPI.CustomCreateParams;
  export import CustomUpdateParams = CustomAPI.CustomUpdateParams;
  export import CustomDeleteParams = CustomAPI.CustomDeleteParams;
  export import CustomGetParams = CustomAPI.CustomGetParams;
  export import Predefined = PredefinedAPI.Predefined;
  export import PredefinedUpdateResponse = PredefinedAPI.PredefinedUpdateResponse;
  export import PredefinedGetResponse = PredefinedAPI.PredefinedGetResponse;
  export import PredefinedUpdateParams = PredefinedAPI.PredefinedUpdateParams;
  export import PredefinedGetParams = PredefinedAPI.PredefinedGetParams;
}
