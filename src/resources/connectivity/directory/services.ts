// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseServices extends APIResource {
  static override readonly _key: readonly ['connectivity', 'directory', 'services'] = Object.freeze([
    'connectivity',
    'directory',
    'services',
  ] as const);
}
export class Services extends BaseServices {}
