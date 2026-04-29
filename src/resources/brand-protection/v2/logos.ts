// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseLogos extends APIResource {
  static override readonly _key: readonly ['brandProtection', 'v2', 'logos'] = Object.freeze([
    'brandProtection',
    'v2',
    'logos',
  ] as const);
}
export class Logos extends BaseLogos {}
