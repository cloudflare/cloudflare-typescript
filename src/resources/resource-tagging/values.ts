// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseValues extends APIResource {
  static override readonly _key: readonly ['resourceTagging', 'values'] = Object.freeze([
    'resourceTagging',
    'values',
  ] as const);
}
export class Values extends BaseValues {}
