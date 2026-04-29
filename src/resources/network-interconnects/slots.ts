// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseSlots extends APIResource {
  static override readonly _key: readonly ['networkInterconnects', 'slots'] = Object.freeze([
    'networkInterconnects',
    'slots',
  ] as const);
}
export class Slots extends BaseSlots {}
