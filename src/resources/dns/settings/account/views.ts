// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseViews extends APIResource {
  static override readonly _key: readonly ['dns', 'settings', 'account', 'views'] = Object.freeze([
    'dns',
    'settings',
    'account',
    'views',
  ] as const);
}
export class Views extends BaseViews {}
