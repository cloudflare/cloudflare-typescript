// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseDomain extends APIResource {
  static override readonly _key: readonly ['radar', 'ranking', 'domain'] = Object.freeze([
    'radar',
    'ranking',
    'domain',
  ] as const);
}
export class Domain extends BaseDomain {}
