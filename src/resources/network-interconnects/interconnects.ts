// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseInterconnects extends APIResource {
  static override readonly _key: readonly ['networkInterconnects', 'interconnects'] = Object.freeze([
    'networkInterconnects',
    'interconnects',
  ] as const);
}
export class Interconnects extends BaseInterconnects {}
