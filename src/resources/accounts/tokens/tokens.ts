// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PermissionGroupsAPI from './permission-groups';
import { BasePermissionGroups, PermissionGroups } from './permission-groups';
import * as ValueAPI from './value';
import { BaseValue, Value } from './value';

export class BaseTokens extends APIResource {
  static override readonly _key: readonly ['accounts', 'tokens'] = Object.freeze([
    'accounts',
    'tokens',
  ] as const);
}
export class Tokens extends BaseTokens {
  permissionGroups: PermissionGroupsAPI.PermissionGroups = new PermissionGroupsAPI.PermissionGroups(
    this._client,
  );
  value: ValueAPI.Value = new ValueAPI.Value(this._client);
}

Tokens.PermissionGroups = PermissionGroups;
Tokens.BasePermissionGroups = BasePermissionGroups;
Tokens.Value = Value;
Tokens.BaseValue = BaseValue;

export declare namespace Tokens {
  export { PermissionGroups as PermissionGroups, BasePermissionGroups as BasePermissionGroups };

  export { Value as Value, BaseValue as BaseValue };
}
