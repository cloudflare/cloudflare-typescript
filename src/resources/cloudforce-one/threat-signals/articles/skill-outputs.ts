// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseSkillOutputs extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatSignals', 'articles', 'skillOutputs'] =
    Object.freeze(['cloudforceOne', 'threatSignals', 'articles', 'skillOutputs'] as const);

  /**
   * Retrieves the stored output of a skill for a Threat Signals article.
   *
   * @example
   * ```ts
   * const skillOutput =
   *   await client.cloudforceOne.threatSignals.articles.skillOutputs.get(
   *     'skill_id',
   *     {
   *       account_id: 'account_id',
   *       article_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  get(
    skillID: string,
    params: SkillOutputGetParams,
    options?: RequestOptions,
  ): APIPromise<SkillOutputGetResponse> {
    const { account_id, article_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/articles/${article_id}/skills/${skillID}/output`,
        options,
      ) as APIPromise<{ result: SkillOutputGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class SkillOutputs extends BaseSkillOutputs {}

export interface SkillOutputGetResponse {
  article_id: string;

  custom_skill_version: string | null;

  /**
   * JSON-encoded output schema of the skill. Null when the skill no longer exists.
   */
  output_schema: string | null;

  skill_id: string;

  /**
   * Skill output. Parsed JSON when the stored output is valid JSON, otherwise the
   * raw string.
   */
  custom_output?: unknown;
}

export interface SkillOutputGetParams {
  account_id: string;

  article_id: string;
}

export declare namespace SkillOutputs {
  export {
    type SkillOutputGetResponse as SkillOutputGetResponse,
    type SkillOutputGetParams as SkillOutputGetParams,
  };
}
