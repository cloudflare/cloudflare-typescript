// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseSkillOutputs extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatSignals', 'articles', 'skillOutputs'] =
    Object.freeze(['cloudforceOne', 'threatSignals', 'articles', 'skillOutputs'] as const);

  /**
   * Retrieves the stored output of a skill for a Threat Signals article. The
   * custom_output field is parsed JSON when the stored output is valid JSON,
   * otherwise the raw string.
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
  /**
   * Article UUID that received the skill output.
   */
  article_id: string;

  /**
   * Untrusted model output: parsed JSON when the stored completion text is valid
   * JSON, otherwise raw text. Consumers must safely render or escape it.
   */
  custom_output:
    | string
    | number
    | boolean
    | { [key: string]: unknown }
    | Array<string | number | boolean | { [key: string]: unknown }>;

  /**
   * Whether custom_output was parsed from the stored completion text.
   */
  custom_output_parse_status: 'parsed' | 'invalid_json';

  /**
   * Non-blocking validation classification for untrusted model output. `unknown` is
   * retained only for historical rows.
   */
  custom_output_validation_status: 'valid' | 'invalid_json' | 'schema_invalid' | 'unknown';

  /**
   * Custom Skill version that produced the output. Null when historical metadata is
   * unavailable.
   */
  custom_skill_version: string | null;

  /**
   * JSON-encoded output schema. Null when historical skill metadata is unavailable.
   */
  output_schema: string | null;

  /**
   * Custom Skill UUID that produced the output.
   */
  skill_id: string;
}

export interface SkillOutputGetParams {
  account_id: string;

  /**
   * Threat Signals article UUID
   */
  article_id: string;
}

export declare namespace SkillOutputs {
  export {
    type SkillOutputGetResponse as SkillOutputGetResponse,
    type SkillOutputGetParams as SkillOutputGetParams,
  };
}
