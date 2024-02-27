// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PredefinedsAPI from 'cloudflare/resources/dlp/profiles/predefineds';

export class Predefineds extends APIResource {
  /**
   * Updates a DLP predefined profile. Only supports enabling/disabling entries.
   */
  update(
    profileId: string,
    params: PredefinedUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredefinedUpdateResponse> {
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

export interface PredefinedUpdateResponse {
  /**
   * The ID for this profile
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
  context_awareness?: PredefinedUpdateResponse.ContextAwareness;

  /**
   * The entries for this profile.
   */
  entries?: Array<PredefinedUpdateResponse.Entry>;

  /**
   * The name of the profile.
   */
  name?: string;

  /**
   * The type of the profile.
   */
  type?: 'predefined';
}

export namespace PredefinedUpdateResponse {
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
    skip: ContextAwareness.Skip;
  }

  export namespace ContextAwareness {
    /**
     * Content types to exclude from context analysis and return all matches.
     */
    export interface Skip {
      /**
       * If the content type is a file, skip context analysis and return all matches.
       */
      files: boolean;
    }
  }

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

export interface PredefinedGetResponse {
  /**
   * The ID for this profile
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
  context_awareness?: PredefinedGetResponse.ContextAwareness;

  /**
   * The entries for this profile.
   */
  entries?: Array<PredefinedGetResponse.Entry>;

  /**
   * The name of the profile.
   */
  name?: string;

  /**
   * The type of the profile.
   */
  type?: 'predefined';
}

export namespace PredefinedGetResponse {
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
    skip: ContextAwareness.Skip;
  }

  export namespace ContextAwareness {
    /**
     * Content types to exclude from context analysis and return all matches.
     */
    export interface Skip {
      /**
       * If the content type is a file, skip context analysis and return all matches.
       */
      files: boolean;
    }
  }

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
  context_awareness?: PredefinedUpdateParams.ContextAwareness;

  /**
   * Body param: The entries for this profile.
   */
  entries?: Array<PredefinedUpdateParams.Entry>;
}

export namespace PredefinedUpdateParams {
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
    skip: ContextAwareness.Skip;
  }

  export namespace ContextAwareness {
    /**
     * Content types to exclude from context analysis and return all matches.
     */
    export interface Skip {
      /**
       * If the content type is a file, skip context analysis and return all matches.
       */
      files: boolean;
    }
  }

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

export namespace Predefineds {
  export import PredefinedUpdateResponse = PredefinedsAPI.PredefinedUpdateResponse;
  export import PredefinedGetResponse = PredefinedsAPI.PredefinedGetResponse;
  export import PredefinedUpdateParams = PredefinedsAPI.PredefinedUpdateParams;
  export import PredefinedGetParams = PredefinedsAPI.PredefinedGetParams;
}
