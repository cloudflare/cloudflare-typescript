// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseVersions extends APIResource {
  static override readonly _key: readonly ['workers', 'scripts', 'versions'] = Object.freeze([
    'workers',
    'scripts',
    'versions',
  ] as const);
}
export class Versions extends BaseVersions {}
