// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseWhois extends APIResource {
  static override readonly _key: readonly ['intel', 'whois'] = Object.freeze(['intel', 'whois'] as const);
}
export class Whois extends BaseWhois {}
