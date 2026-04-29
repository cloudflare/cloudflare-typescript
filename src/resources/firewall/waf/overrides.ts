// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseOverrides extends APIResource {
  static override readonly _key: readonly ['firewall', 'waf', 'overrides'] = Object.freeze([
    'firewall',
    'waf',
    'overrides',
  ] as const);
}
export class Overrides extends BaseOverrides {}
