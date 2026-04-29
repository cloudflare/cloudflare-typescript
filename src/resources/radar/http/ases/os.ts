// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseOS extends APIResource {
  static override readonly _key: readonly ['radar', 'http', 'ases', 'os'] = Object.freeze([
    'radar',
    'http',
    'ases',
    'os',
  ] as const);
}
export class OS extends BaseOS {}
