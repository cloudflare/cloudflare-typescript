// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseAvailableAlerts extends APIResource {
  static override readonly _key: readonly ['alerting', 'availableAlerts'] = Object.freeze([
    'alerting',
    'availableAlerts',
  ] as const);
}
export class AvailableAlerts extends BaseAvailableAlerts {}
