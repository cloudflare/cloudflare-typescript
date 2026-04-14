// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Logos extends APIResource {
  /**
   * Create a new saved brand protection logo query for visual similarity matching
   */
  create(params: LogoCreateParams, options?: Core.RequestOptions): Core.APIPromise<LogoCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/cloudforce-one/v2/brand-protection/logo/queries`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a saved brand protection logo query. Returns 404 if the query ID doesn't
   * exist.
   */
  delete(
    queryId: string,
    params: LogoDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogoDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/cloudforce-one/v2/brand-protection/logo/queries/${queryId}`,
      options,
    );
  }

  /**
   * Get all saved brand protection logo queries for an account. Optionally specify
   * id to get a single query. Set download=true to include base64-encoded image
   * data.
   */
  get(params: LogoGetParams, options?: Core.RequestOptions): Core.APIPromise<LogoGetResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/cloudforce-one/v2/brand-protection/logo/queries`, {
      query,
      ...options,
    });
  }
}

export interface LogoCreateResponse {
  message: string;

  success: boolean;

  query_id?: number;
}

export interface LogoDeleteResponse {
  message: string;

  success: boolean;
}

export type LogoGetResponse = Array<LogoGetResponse.LogoGetResponseItem>;

export namespace LogoGetResponse {
  export interface LogoGetResponseItem {
    id: number;

    r2_path: string;

    similarity_threshold: number;

    tag: string;

    uploaded_at: string | null;

    /**
     * MIME type of the image (only present when download=true)
     */
    content_type?: string;

    /**
     * Base64-encoded image data (only present when download=true)
     */
    image_data?: string;
  }
}

export interface LogoCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: Base64 encoded image data. Can include data URI prefix (e.g.,
   * 'data:image/png;base64,...') or just the base64 string.
   */
  image_data: string;

  /**
   * Body param: Minimum similarity score (0-1) required for visual matches
   */
  similarity_threshold: number;

  /**
   * Body param: Unique identifier for the logo query
   */
  tag: string;

  /**
   * Body param: If true, search historic scanned images for matches above the
   * similarity threshold
   */
  search_lookback?: boolean;
}

export interface LogoDeleteParams {
  account_id: string;
}

export interface LogoGetParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param: Optional query ID to retrieve a specific logo query
   */
  id?: string;

  /**
   * Query param: If true, include base64-encoded image data in the response
   */
  download?: string;
}

export declare namespace Logos {
  export {
    type LogoCreateResponse as LogoCreateResponse,
    type LogoDeleteResponse as LogoDeleteResponse,
    type LogoGetResponse as LogoGetResponse,
    type LogoCreateParams as LogoCreateParams,
    type LogoDeleteParams as LogoDeleteParams,
    type LogoGetParams as LogoGetParams,
  };
}
