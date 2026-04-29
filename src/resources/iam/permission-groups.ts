// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BasePermissionGroups extends APIResource {
  static override readonly _key: readonly ['iam', 'permissionGroups'] = Object.freeze([
    'iam',
    'permissionGroups',
  ] as const);
}
export class PermissionGroups extends BasePermissionGroups {}
