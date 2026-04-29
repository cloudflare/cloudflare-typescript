// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseCORS extends APIResource {
  static override readonly _key: readonly ['r2', 'buckets', 'cors'] = Object.freeze([
    'r2',
    'buckets',
    'cors',
  ] as const);
}
export class CORS extends BaseCORS {}
