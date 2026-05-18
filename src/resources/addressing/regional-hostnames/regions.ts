// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseRegions extends APIResource {
  static override readonly _key: readonly ['addressing', 'regionalHostnames', 'regions'] = Object.freeze([
    'addressing',
    'regionalHostnames',
    'regions',
  ] as const);
}
export class Regions extends BaseRegions {}
