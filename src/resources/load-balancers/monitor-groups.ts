// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseMonitorGroups extends APIResource {
  static override readonly _key: readonly ['loadBalancers', 'monitorGroups'] = Object.freeze([
    'loadBalancers',
    'monitorGroups',
  ] as const);
}
export class MonitorGroups extends BaseMonitorGroups {}
