// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseAccountTags extends APIResource {
  static override readonly _key: readonly ['resourceTagging', 'accountTags'] = Object.freeze([
    'resourceTagging',
    'accountTags',
  ] as const);
}
export class AccountTags extends BaseAccountTags {}
