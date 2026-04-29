// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseSubdomains extends APIResource {
  static override readonly _key: readonly ['workers', 'subdomains'] = Object.freeze([
    'workers',
    'subdomains',
  ] as const);
}
export class Subdomains extends BaseSubdomains {}
