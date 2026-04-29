// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseAuthorities extends APIResource {
  static override readonly _key: readonly ['radar', 'ct', 'authorities'] = Object.freeze([
    'radar',
    'ct',
    'authorities',
  ] as const);
}
export class Authorities extends BaseAuthorities {}
