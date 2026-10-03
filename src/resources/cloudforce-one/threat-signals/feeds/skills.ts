// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseSkills extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatSignals', 'feeds', 'skills'] =
    Object.freeze(['cloudforceOne', 'threatSignals', 'feeds', 'skills'] as const);

  /**
   * Replaces the ordered custom skills assigned to a Threat Signals feed.
   *
   * @example
   * ```ts
   * const skill =
   *   await client.cloudforceOne.threatSignals.feeds.skills.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'account_id',
   *       skill_ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
   *     },
   *   );
   * ```
   */
  update(
    feedID: string,
    params: SkillUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SkillUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/feeds/${feedID}/skills`,
        { body, ...options },
      ) as APIPromise<{ result: SkillUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the effective skill pipeline for a Threat Signals feed.
   *
   * @example
   * ```ts
   * const skill =
   *   await client.cloudforceOne.threatSignals.feeds.skills.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(feedID: string, params: SkillGetParams, options?: RequestOptions): APIPromise<SkillGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/feeds/${feedID}/skills`,
        options,
      ) as APIPromise<{ result: SkillGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Skills extends BaseSkills {}

export interface SkillUpdateResponse {
  feed_id: string;

  skills: Array<SkillUpdateResponse.Skill>;
}

export namespace SkillUpdateResponse {
  export interface Skill {
    /**
     * Zero-based pipeline position.
     */
    position: number;

    skill_id: string;
  }
}

export interface SkillGetResponse {
  feed_id: string;

  skills: Array<SkillGetResponse.Skill>;
}

export namespace SkillGetResponse {
  export interface Skill {
    id: string;

    /**
     * JSON-encoded skill configuration. Always null for default skills.
     */
    config: string | null;

    created_at: string;

    /**
     * 1 when active, 0 when inactive.
     */
    is_active: number;

    name: string;

    /**
     * JSON-encoded JSON Schema the skill output must satisfy.
     */
    output_schema: string | null;

    prompt: string;

    /**
     * `default` for Cloudforce One managed skills (read-only), `custom` for account
     * skills.
     */
    source: 'default' | 'custom';

    type: string;

    updated_at: string;
  }
}

export interface SkillUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  skill_ids: Array<string>;
}

export interface SkillGetParams {
  account_id: string;
}

export declare namespace Skills {
  export {
    type SkillUpdateResponse as SkillUpdateResponse,
    type SkillGetResponse as SkillGetResponse,
    type SkillUpdateParams as SkillUpdateParams,
    type SkillGetParams as SkillGetParams,
  };
}
