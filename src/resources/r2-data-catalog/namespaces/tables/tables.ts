// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as MaintenanceConfigsAPI from './maintenance-configs';
import { MaintenanceConfigs } from './maintenance-configs';

export class Tables extends APIResource {
  maintenanceConfigs: MaintenanceConfigsAPI.MaintenanceConfigs = new MaintenanceConfigsAPI.MaintenanceConfigs(
    this._client,
  );
}

Tables.MaintenanceConfigs = MaintenanceConfigs;

export declare namespace Tables {
  export { MaintenanceConfigs as MaintenanceConfigs };
}
