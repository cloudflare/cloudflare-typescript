// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CustomTopicsAPI from './custom-topics';
import {
  CustomTopicGetParams,
  CustomTopicGetResponse,
  CustomTopicUpdateParams,
  CustomTopicUpdateResponse,
  CustomTopics,
} from './custom-topics';

export class AISecurity extends APIResource {
  customTopics: CustomTopicsAPI.CustomTopics = new CustomTopicsAPI.CustomTopics(this._client);

  /**
   * Enable or disable AI Security for Apps for a zone.
   *
   * Changes can take up to a minute to propagate to the zone.
   *
   * @example
   * ```ts
   * const aiSecurity = await client.aiSecurity.update({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  update(
    params: AISecurityUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AISecurityUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/ai-security/settings`, { body, ...options }) as Core.APIPromise<{
        result: AISecurityUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get whether AI Security for Apps is enabled or disabled for a zone.
   *
   * @example
   * ```ts
   * const aiSecurity = await client.aiSecurity.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: AISecurityGetParams, options?: Core.RequestOptions): Core.APIPromise<AISecurityGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/ai-security/settings`, options) as Core.APIPromise<{
        result: AISecurityGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * AI Security for Apps enablement status for a zone.
 */
export interface AISecurityUpdateResponse {
  /**
   * Whether AI Security for Apps is enabled on the zone.
   */
  enabled?: boolean;
}

/**
 * AI Security for Apps enablement status for a zone.
 */
export interface AISecurityGetResponse {
  /**
   * Whether AI Security for Apps is enabled on the zone.
   */
  enabled?: boolean;
}

export interface AISecurityUpdateParams {
  /**
   * Path param: Defines the zone.
   */
  zone_id: string;

  /**
   * Body param: Whether AI Security for Apps is enabled on the zone.
   */
  enabled?: boolean;
}

export interface AISecurityGetParams {
  /**
   * Defines the zone.
   */
  zone_id: string;
}

AISecurity.CustomTopics = CustomTopics;

export declare namespace AISecurity {
  export {
    type AISecurityUpdateResponse as AISecurityUpdateResponse,
    type AISecurityGetResponse as AISecurityGetResponse,
    type AISecurityUpdateParams as AISecurityUpdateParams,
    type AISecurityGetParams as AISecurityGetParams,
  };

  export {
    CustomTopics as CustomTopics,
    type CustomTopicUpdateResponse as CustomTopicUpdateResponse,
    type CustomTopicGetResponse as CustomTopicGetResponse,
    type CustomTopicUpdateParams as CustomTopicUpdateParams,
    type CustomTopicGetParams as CustomTopicGetParams,
  };
}
