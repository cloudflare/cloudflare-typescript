// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseSubdomain extends APIResource {
  static override readonly _key: readonly ['workers', 'scripts', 'subdomain'] = Object.freeze([
    'workers',
    'scripts',
    'subdomain',
  ] as const);
}
export class Subdomain extends BaseSubdomain {}
