// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseInternetServices extends APIResource {
  static override readonly _key: readonly ['radar', 'ranking', 'internetServices'] = Object.freeze([
    'radar',
    'ranking',
    'internetServices',
  ] as const);
}
export class InternetServices extends BaseInternetServices {}
