// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseIndicatorTypes extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'indicatorTypes'] = Object.freeze(
    ['cloudforceOne', 'threatEvents', 'indicatorTypes'] as const,
  );
}
export class IndicatorTypes extends BaseIndicatorTypes {}
