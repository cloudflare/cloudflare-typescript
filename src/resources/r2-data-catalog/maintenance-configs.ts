// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseMaintenanceConfigs extends APIResource {
  static override readonly _key: readonly ['r2DataCatalog', 'maintenanceConfigs'] = Object.freeze([
    'r2DataCatalog',
    'maintenanceConfigs',
  ] as const);
}
export class MaintenanceConfigs extends BaseMaintenanceConfigs {}
