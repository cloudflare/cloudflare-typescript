// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseSeverity extends APIResource {
  static override readonly _key: readonly ['securityCenter', 'insights', 'severity'] = Object.freeze([
    'securityCenter',
    'insights',
    'severity',
  ] as const);
}
export class Severity extends BaseSeverity {}
