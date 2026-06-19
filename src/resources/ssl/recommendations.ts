// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseRecommendations extends APIResource {
  static override readonly _key: readonly ['ssl', 'recommendations'] = Object.freeze([
    'ssl',
    'recommendations',
  ] as const);
}
export class Recommendations extends BaseRecommendations {}
