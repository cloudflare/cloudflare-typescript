// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseAutoOriginTLSKex extends APIResource {
  static override readonly _key: readonly ['ssl', 'autoOriginTLSKex'] = Object.freeze([
    'ssl',
    'autoOriginTLSKex',
  ] as const);
}
export class AutoOriginTLSKex extends BaseAutoOriginTLSKex {}
