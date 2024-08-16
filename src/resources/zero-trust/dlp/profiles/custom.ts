// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as CustomAPI from './custom';
import * as ProfilesAPI from './profiles';

export class Custom extends APIResource {
  /**
   * Creates a set of DLP custom profiles.
   */
  create(params: CustomCreateParams, options?: Core.RequestOptions): Core.APIPromise<CustomCreateResponse> {
    const { account_id } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/profiles/custom`, options) as Core.APIPromise<{
        result: CustomCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a DLP custom profile.
   */
  update(
    profileId: string,
    params: CustomUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomUpdateResponse> {
    const { account_id } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/dlp/profiles/custom/${profileId}`,
        options,
      ) as Core.APIPromise<{ result: CustomUpdateResponse }>
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
  ): Core.APIPromise<CustomGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/dlp/profiles/custom/${profileId}`,
        options,
      ) as Core.APIPromise<{ result: CustomGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CustomCreateResponse = Array<
  CustomCreateResponse.Custom | CustomCreateResponse.Predefined | CustomCreateResponse.Integration
>;

export namespace CustomCreateResponse {
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

export type CustomUpdateResponse =
  | CustomUpdateResponse.Custom
  | CustomUpdateResponse.Predefined
  | CustomUpdateResponse.Integration;

export namespace CustomUpdateResponse {
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

export type CustomDeleteResponse = unknown;

export type CustomGetResponse =
  | CustomGetResponse.Custom
  | CustomGetResponse.Predefined
  | CustomGetResponse.Integration;

export namespace CustomGetResponse {
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

export interface CustomCreateParams {
  account_id: string;
}

export interface CustomUpdateParams {
  account_id: string;
}

export interface CustomDeleteParams {
  account_id: string;
}

export interface CustomGetParams {
  account_id: string;
}

export namespace Custom {
  export import CustomCreateResponse = CustomAPI.CustomCreateResponse;
  export import CustomUpdateResponse = CustomAPI.CustomUpdateResponse;
  export import CustomDeleteResponse = CustomAPI.CustomDeleteResponse;
  export import CustomGetResponse = CustomAPI.CustomGetResponse;
  export import CustomCreateParams = CustomAPI.CustomCreateParams;
  export import CustomUpdateParams = CustomAPI.CustomUpdateParams;
  export import CustomDeleteParams = CustomAPI.CustomDeleteParams;
  export import CustomGetParams = CustomAPI.CustomGetParams;
}
