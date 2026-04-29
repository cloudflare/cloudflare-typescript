// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseCatchAlls extends APIResource {
  static override readonly _key: readonly ['emailRouting', 'rules', 'catchAlls'] = Object.freeze([
    'emailRouting',
    'rules',
    'catchAlls',
  ] as const);
}
export class CatchAlls extends BaseCatchAlls {}
