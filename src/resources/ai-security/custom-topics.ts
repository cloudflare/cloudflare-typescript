// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class CustomTopics extends APIResource {
  /**
   * Set the AI Security for Apps custom topic categories for a zone.
   *
   * A maximum of 20 custom topics can be configured per zone. Each topic label must
   * be 2–20 characters using only lowercase letters (a–z), digits (0–9), and
   * hyphens. Each topic description must be 2–50 printable ASCII characters.
   *
   * Changes can take up to a minute to propagate to the zone.
   *
   * @example
   * ```ts
   * const customTopic =
   *   await client.aiSecurity.customTopics.update({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  update(
    params: CustomTopicUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomTopicUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/ai-security/custom-topics`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CustomTopicUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the AI Security for Apps custom topic categories for a zone.
   *
   * @example
   * ```ts
   * const customTopic =
   *   await client.aiSecurity.customTopics.get({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(params: CustomTopicGetParams, options?: Core.RequestOptions): Core.APIPromise<CustomTopicGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/ai-security/custom-topics`, options) as Core.APIPromise<{
        result: CustomTopicGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CustomTopicUpdateResponse {
  /**
   * Custom topic categories for AI Security for Apps content detection.
   */
  topics?: Array<CustomTopicUpdateResponse.Topic>;
}

export namespace CustomTopicUpdateResponse {
  export interface Topic {
    /**
     * Unique label identifier. Must contain only lowercase letters (a–z), digits
     * (0–9), and hyphens.
     */
    label: string;

    /**
     * Description of the topic category. Must contain only printable ASCII characters.
     */
    topic: string;
  }
}

export interface CustomTopicGetResponse {
  /**
   * Custom topic categories for AI Security for Apps content detection.
   */
  topics?: Array<CustomTopicGetResponse.Topic>;
}

export namespace CustomTopicGetResponse {
  export interface Topic {
    /**
     * Unique label identifier. Must contain only lowercase letters (a–z), digits
     * (0–9), and hyphens.
     */
    label: string;

    /**
     * Description of the topic category. Must contain only printable ASCII characters.
     */
    topic: string;
  }
}

export interface CustomTopicUpdateParams {
  /**
   * Path param: Defines the zone.
   */
  zone_id: string;

  /**
   * Body param: Custom topic categories for AI Security for Apps content detection.
   */
  topics?: Array<CustomTopicUpdateParams.Topic>;
}

export namespace CustomTopicUpdateParams {
  export interface Topic {
    /**
     * Unique label identifier. Must contain only lowercase letters (a–z), digits
     * (0–9), and hyphens.
     */
    label: string;

    /**
     * Description of the topic category. Must contain only printable ASCII characters.
     */
    topic: string;
  }
}

export interface CustomTopicGetParams {
  /**
   * Defines the zone.
   */
  zone_id: string;
}

export declare namespace CustomTopics {
  export {
    type CustomTopicUpdateResponse as CustomTopicUpdateResponse,
    type CustomTopicGetResponse as CustomTopicGetResponse,
    type CustomTopicUpdateParams as CustomTopicUpdateParams,
    type CustomTopicGetParams as CustomTopicGetParams,
  };
}
