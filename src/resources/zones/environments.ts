// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseEnvironments extends APIResource {
  static override readonly _key: readonly ['zones', 'environments'] = Object.freeze([
    'zones',
    'environments',
  ] as const);
}
export class Environments extends BaseEnvironments {}
