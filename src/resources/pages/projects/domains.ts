// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseDomains extends APIResource {
  static override readonly _key: readonly ['pages', 'projects', 'domains'] = Object.freeze([
    'pages',
    'projects',
    'domains',
  ] as const);
}
export class Domains extends BaseDomains {}
