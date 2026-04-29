// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BasePolicies extends APIResource {
  static override readonly _key: readonly ['pageShield', 'policies'] = Object.freeze([
    'pageShield',
    'policies',
  ] as const);
}
export class Policies extends BasePolicies {}
