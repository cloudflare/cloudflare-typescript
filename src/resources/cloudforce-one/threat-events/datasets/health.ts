// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseHealth extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'datasets', 'health'] =
    Object.freeze(['cloudforceOne', 'threatEvents', 'datasets', 'health'] as const);
}
export class Health extends BaseHealth {}
