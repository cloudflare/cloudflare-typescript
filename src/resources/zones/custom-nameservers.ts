// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

/**
 * @deprecated Use DNS settings API instead.
 */
export class BaseCustomNameservers extends APIResource {
  static override readonly _key: readonly ['zones', 'customNameservers'] = Object.freeze([
    'zones',
    'customNameservers',
  ] as const);
}
/**
 * @deprecated Use DNS settings API instead.
 */
export class CustomNameservers extends BaseCustomNameservers {}
