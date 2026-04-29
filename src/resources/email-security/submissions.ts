// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseSubmissions extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'submissions'] = Object.freeze([
    'emailSecurity',
    'submissions',
  ] as const);
}
export class Submissions extends BaseSubmissions {}
