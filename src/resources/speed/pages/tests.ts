// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseTests extends APIResource {
  static override readonly _key: readonly ['speed', 'pages', 'tests'] = Object.freeze([
    'speed',
    'pages',
    'tests',
  ] as const);
}
export class Tests extends BaseTests {}
