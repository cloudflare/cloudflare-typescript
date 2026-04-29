// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseCNIs extends APIResource {
  static override readonly _key: readonly ['networkInterconnects', 'cnis'] = Object.freeze([
    'networkInterconnects',
    'cnis',
  ] as const);
}
export class CNIs extends BaseCNIs {}
