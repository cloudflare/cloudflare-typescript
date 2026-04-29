// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseLogs extends APIResource {
  static override readonly _key: readonly ['radar', 'ct', 'logs'] = Object.freeze([
    'radar',
    'ct',
    'logs',
  ] as const);
}
export class Logs extends BaseLogs {}
