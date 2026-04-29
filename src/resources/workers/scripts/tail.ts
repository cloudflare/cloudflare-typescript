// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseTail extends APIResource {
  static override readonly _key: readonly ['workers', 'scripts', 'tail'] = Object.freeze([
    'workers',
    'scripts',
    'tail',
  ] as const);
}
export class Tail extends BaseTail {}
