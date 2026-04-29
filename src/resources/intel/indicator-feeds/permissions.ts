// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BasePermissions extends APIResource {
  static override readonly _key: readonly ['intel', 'indicatorFeeds', 'permissions'] = Object.freeze([
    'intel',
    'indicatorFeeds',
    'permissions',
  ] as const);
}
export class Permissions extends BasePermissions {}
