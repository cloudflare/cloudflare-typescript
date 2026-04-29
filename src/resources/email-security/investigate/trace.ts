// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseTrace extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'investigate', 'trace'] = Object.freeze([
    'emailSecurity',
    'investigate',
    'trace',
  ] as const);
}
export class Trace extends BaseTrace {}
