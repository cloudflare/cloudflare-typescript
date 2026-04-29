// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseACLs extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'sites', 'acls'] = Object.freeze([
    'magicTransit',
    'sites',
    'acls',
  ] as const);
}
export class ACLs extends BaseACLs {}
