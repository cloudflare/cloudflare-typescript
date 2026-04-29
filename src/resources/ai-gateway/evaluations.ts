// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseEvaluations extends APIResource {
  static override readonly _key: readonly ['aiGateway', 'evaluations'] = Object.freeze([
    'aiGateway',
    'evaluations',
  ] as const);
}
export class Evaluations extends BaseEvaluations {}
