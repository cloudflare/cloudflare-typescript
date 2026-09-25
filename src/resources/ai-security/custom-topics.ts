// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseCustomTopics extends APIResource {
  static override readonly _key: readonly ['aiSecurity', 'customTopics'] = Object.freeze([
    'aiSecurity',
    'customTopics',
  ] as const);

  /**
   * Update the custom topic list of the zone, overwriting it entirely with the
   * topics in the request, so include every topic you want to keep. Changes can take
   * up to a minute to propagate.
   *
   * Each entry has a `label`, used to reference the topic in rule expressions and
   * analytics, and a `topic` description, which the classifier scores prompts
   * against while AI Security for Apps is enabled. The following rules apply:
   *
   * - A zone can hold at most 20 topics.
   * - `label` must be 2–20 characters, using only lowercase letters (a–z), digits
   *   (0–9), and hyphens.
   * - `topic` must be 2–50 printable ASCII characters.
   * - Labels must be unique within the zone, and so must topic descriptions.
   *
   * @example
   * ```ts
   * const customTopic =
   *   await client.aiSecurity.customTopics.update({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  update(params: CustomTopicUpdateParams, options?: RequestOptions): APIPromise<CustomTopicUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/ai-security/custom-topics`, {
        body,
        ...options,
      }) as APIPromise<{ result: CustomTopicUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the custom topic categories defined for the zone. While AI Security for Apps
   * is enabled, it scores every incoming prompt against these topics and writes the
   * scores to the `cf.llm.prompt.custom_topic_categories` field, keyed by topic
   * label. Topics can be configured while the detection is disabled, but no prompt
   * is scored until you enable it.
   *
   * @example
   * ```ts
   * const customTopic =
   *   await client.aiSecurity.customTopics.get({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(params: CustomTopicGetParams, options?: RequestOptions): APIPromise<CustomTopicGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/ai-security/custom-topics`, options) as APIPromise<{
        result: CustomTopicGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class CustomTopics extends BaseCustomTopics {}

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
