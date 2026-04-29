// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseMaintenanceConfigs extends APIResource {
  static override readonly _key: readonly ['r2DataCatalog', 'namespaces', 'tables', 'maintenanceConfigs'] =
    Object.freeze(['r2DataCatalog', 'namespaces', 'tables', 'maintenanceConfigs'] as const);
}
export class MaintenanceConfigs extends BaseMaintenanceConfigs {}
