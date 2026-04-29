// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseCfInterconnects extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'cfInterconnects'] = Object.freeze([
    'magicTransit',
    'cfInterconnects',
  ] as const);
}
export class CfInterconnects extends BaseCfInterconnects {}
