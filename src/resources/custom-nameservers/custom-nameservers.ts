// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseCustomNameservers extends APIResource {
  static override readonly _key: readonly ['customNameservers'] = Object.freeze([
    'customNameservers',
  ] as const);
}
export class CustomNameservers extends BaseCustomNameservers {}
