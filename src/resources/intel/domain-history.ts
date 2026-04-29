// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseDomainHistory extends APIResource {
  static override readonly _key: readonly ['intel', 'domainHistory'] = Object.freeze([
    'intel',
    'domainHistory',
  ] as const);
}
export class DomainHistory extends BaseDomainHistory {}
