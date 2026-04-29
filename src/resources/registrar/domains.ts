// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseDomains extends APIResource {
  static override readonly _key: readonly ['registrar', 'domains'] = Object.freeze([
    'registrar',
    'domains',
  ] as const);
}
export class Domains extends BaseDomains {}
