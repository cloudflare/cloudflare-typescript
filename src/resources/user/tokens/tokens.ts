// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as PermissionGroupsAPI from './permission-groups';
import { PermissionGroups } from './permission-groups';
import * as ValueAPI from './value';
import { Value } from './value';

export class Tokens extends APIResource {
  permissionGroups: PermissionGroupsAPI.PermissionGroups = new PermissionGroupsAPI.PermissionGroups(
    this._client,
  );
  value: ValueAPI.Value = new ValueAPI.Value(this._client);
}

Tokens.PermissionGroups = PermissionGroups;
Tokens.Value = Value;

export declare namespace Tokens {
  export { PermissionGroups as PermissionGroups };

  export { Value as Value };
}
