// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseSummary extends APIResource {
  static override readonly _key: readonly ['radar', 'email', 'routing', 'summary'] = Object.freeze([
    'radar',
    'email',
    'routing',
    'summary',
  ] as const);
}
export class Summary extends BaseSummary {}
