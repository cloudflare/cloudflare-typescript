// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseGroups extends APIResource {
  static override readonly _key: readonly ['firewall', 'waf', 'packages', 'groups'] = Object.freeze([
    'firewall',
    'waf',
    'packages',
    'groups',
  ] as const);
}
export class Groups extends BaseGroups {}
