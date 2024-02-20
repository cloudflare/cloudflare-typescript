// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PredefinedsAPI from 'cloudflare/resources/dlp/profiles/predefineds';

export class Predefineds extends APIResource {
  /**
   * Fetches a predefined DLP profile.
   */
  get(
    accountId: string,
    profileId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredefinedGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/dlp/profiles/predefined/${profileId}`,
        options,
      ) as Core.APIPromise<{ result: PredefinedGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a DLP predefined profile. Only supports enabling/disabling entries.
   */
  replace(
    accountId: string,
    profileId: string,
    body: PredefinedReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PredefinedReplaceResponse> {
    return this._client.put(`/accounts/${accountId}/dlp/profiles/predefined/${profileId}`, {
      body,
      ...options,
    });
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

export interface PredefinedReplaceResponse {
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
  entries?: Array<PredefinedReplaceResponse.Entry>;

  /**
   * The name of the profile.
   */
  name?: string;

  /**
   * The type of the profile.
   */
  type?: 'predefined';
}

export namespace PredefinedReplaceResponse {
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

export interface PredefinedReplaceParams {
  /**
   * Related DLP policies will trigger when the match count exceeds the number set.
   */
  allowed_match_count?: number;

  /**
   * The entries for this profile.
   */
  entries?: Array<PredefinedReplaceParams.Entry>;
}

export namespace PredefinedReplaceParams {
  export interface Entry {
    /**
     * Whether the entry is enabled or not.
     */
    enabled?: boolean;
  }
}

export namespace Predefineds {
  export import PredefinedGetResponse = PredefinedsAPI.PredefinedGetResponse;
  export import PredefinedReplaceResponse = PredefinedsAPI.PredefinedReplaceResponse;
  export import PredefinedReplaceParams = PredefinedsAPI.PredefinedReplaceParams;
}
