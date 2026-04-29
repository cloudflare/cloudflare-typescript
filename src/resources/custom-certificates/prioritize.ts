// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BasePrioritize extends APIResource {
  static override readonly _key: readonly ['customCertificates', 'prioritize'] = Object.freeze([
    'customCertificates',
    'prioritize',
  ] as const);
}
export class Prioritize extends BasePrioritize {}
