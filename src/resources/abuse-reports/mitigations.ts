// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseMitigations extends APIResource {
  static override readonly _key: readonly ['abuseReports', 'mitigations'] = Object.freeze([
    'abuseReports',
    'mitigations',
  ] as const);
}
export class Mitigations extends BaseMitigations {}
