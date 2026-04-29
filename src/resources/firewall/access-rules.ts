// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseAccessRules extends APIResource {
  static override readonly _key: readonly ['firewall', 'accessRules'] = Object.freeze([
    'firewall',
    'accessRules',
  ] as const);
}
export class AccessRules extends BaseAccessRules {}
