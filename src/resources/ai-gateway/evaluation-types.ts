// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseEvaluationTypes extends APIResource {
  static override readonly _key: readonly ['aiGateway', 'evaluationTypes'] = Object.freeze([
    'aiGateway',
    'evaluationTypes',
  ] as const);
}
export class EvaluationTypes extends BaseEvaluationTypes {}
