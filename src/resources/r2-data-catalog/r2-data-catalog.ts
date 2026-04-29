// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CredentialsAPI from './credentials';
import { BaseCredentials, Credentials } from './credentials';
import * as MaintenanceConfigsAPI from './maintenance-configs';
import { BaseMaintenanceConfigs, MaintenanceConfigs } from './maintenance-configs';
import * as NamespacesAPI from './namespaces/namespaces';
import { BaseNamespaces, Namespaces } from './namespaces/namespaces';

export class BaseR2DataCatalog extends APIResource {
  static override readonly _key: readonly ['r2DataCatalog'] = Object.freeze(['r2DataCatalog'] as const);
}
export class R2DataCatalog extends BaseR2DataCatalog {
  maintenanceConfigs: MaintenanceConfigsAPI.MaintenanceConfigs = new MaintenanceConfigsAPI.MaintenanceConfigs(
    this._client,
  );
  credentials: CredentialsAPI.Credentials = new CredentialsAPI.Credentials(this._client);
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

R2DataCatalog.MaintenanceConfigs = MaintenanceConfigs;
R2DataCatalog.BaseMaintenanceConfigs = BaseMaintenanceConfigs;
R2DataCatalog.Credentials = Credentials;
R2DataCatalog.BaseCredentials = BaseCredentials;
R2DataCatalog.Namespaces = Namespaces;
R2DataCatalog.BaseNamespaces = BaseNamespaces;

export declare namespace R2DataCatalog {
  export { MaintenanceConfigs as MaintenanceConfigs, BaseMaintenanceConfigs as BaseMaintenanceConfigs };

  export { Credentials as Credentials, BaseCredentials as BaseCredentials };

  export { Namespaces as Namespaces, BaseNamespaces as BaseNamespaces };
}
