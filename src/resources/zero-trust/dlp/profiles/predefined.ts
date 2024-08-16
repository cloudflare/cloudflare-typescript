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
  ): Core.APIPromise<PredefinedUpdateResponse> {
    const { account_id } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/dlp/profiles/predefined/${profileId}`,
        options,
      ) as Core.APIPromise<{ result: PredefinedUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a predefined DLP profile by id.
   */
  get(
    profileId: string,
    params: PredefinedGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredefinedGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/dlp/profiles/predefined/${profileId}`,
        options,
      ) as Core.APIPromise<{ result: PredefinedGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PredefinedUpdateResponse =
  | PredefinedUpdateResponse.Custom
  | PredefinedUpdateResponse.Predefined
  | PredefinedUpdateResponse.Integration;

export namespace PredefinedUpdateResponse {
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

export type PredefinedGetResponse =
  | PredefinedGetResponse.Custom
  | PredefinedGetResponse.Predefined
  | PredefinedGetResponse.Integration;

export namespace PredefinedGetResponse {
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

export interface PredefinedUpdateParams {
  account_id: string;
}

export interface PredefinedGetParams {
  account_id: string;
}

export namespace Predefined {
  export import PredefinedUpdateResponse = PredefinedAPI.PredefinedUpdateResponse;
  export import PredefinedGetResponse = PredefinedAPI.PredefinedGetResponse;
  export import PredefinedUpdateParams = PredefinedAPI.PredefinedUpdateParams;
  export import PredefinedGetParams = PredefinedAPI.PredefinedGetParams;
}
