// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseAnalyze extends APIResource {
  static override readonly _key: readonly ['ssl', 'analyze'] = Object.freeze(['ssl', 'analyze'] as const);
}
export class Analyze extends BaseAnalyze {}
