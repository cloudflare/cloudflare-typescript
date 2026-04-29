// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MaintenanceConfigsAPI from './maintenance-configs';
import { BaseMaintenanceConfigs, MaintenanceConfigs } from './maintenance-configs';

export class BaseTables extends APIResource {
  static override readonly _key: readonly ['r2DataCatalog', 'namespaces', 'tables'] = Object.freeze([
    'r2DataCatalog',
    'namespaces',
    'tables',
  ] as const);
}
export class Tables extends BaseTables {
  maintenanceConfigs: MaintenanceConfigsAPI.MaintenanceConfigs = new MaintenanceConfigsAPI.MaintenanceConfigs(
    this._client,
  );
}

Tables.MaintenanceConfigs = MaintenanceConfigs;
Tables.BaseMaintenanceConfigs = BaseMaintenanceConfigs;

export declare namespace Tables {
  export { MaintenanceConfigs as MaintenanceConfigs, BaseMaintenanceConfigs as BaseMaintenanceConfigs };
}
