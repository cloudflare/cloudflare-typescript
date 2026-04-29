// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CredentialsAPI from './credentials';
import { Credentials } from './credentials';
import * as MaintenanceConfigsAPI from './maintenance-configs';
import { MaintenanceConfigs } from './maintenance-configs';
import * as NamespacesAPI from './namespaces/namespaces';
import { Namespaces } from './namespaces/namespaces';

export class R2DataCatalog extends APIResource {
  maintenanceConfigs: MaintenanceConfigsAPI.MaintenanceConfigs = new MaintenanceConfigsAPI.MaintenanceConfigs(
    this._client,
  );
  credentials: CredentialsAPI.Credentials = new CredentialsAPI.Credentials(this._client);
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

R2DataCatalog.MaintenanceConfigs = MaintenanceConfigs;
R2DataCatalog.Credentials = Credentials;
R2DataCatalog.Namespaces = Namespaces;

export declare namespace R2DataCatalog {
  export { MaintenanceConfigs as MaintenanceConfigs };

  export { Credentials as Credentials };

  export { Namespaces as Namespaces };
}
