// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AppTypesAPI from './app-types';
import { AppTypes } from './app-types';
import * as AuditSSHSettingsAPI from './audit-ssh-settings';
import { AuditSSHSettings } from './audit-ssh-settings';
import * as CategoriesAPI from './categories';
import { Categories } from './categories';
import * as CertificatesAPI from './certificates';
import { Certificates } from './certificates';
import * as LocationsAPI from './locations';
import { Locations } from './locations';
import * as LoggingAPI from './logging';
import { Logging } from './logging';
import * as PacfilesAPI from './pacfiles';
import { Pacfiles } from './pacfiles';
import * as ProxyEndpointsAPI from './proxy-endpoints';
import { ProxyEndpoints } from './proxy-endpoints';
import * as RulesAPI from './rules';
import { Rules } from './rules';
import * as ConfigurationsAPI from './configurations/configurations';
import { Configurations } from './configurations/configurations';
import * as ListsAPI from './lists/lists';
import { Lists } from './lists/lists';

export class Gateway extends APIResource {
  auditSSHSettings: AuditSSHSettingsAPI.AuditSSHSettings = new AuditSSHSettingsAPI.AuditSSHSettings(
    this._client,
  );
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
  appTypes: AppTypesAPI.AppTypes = new AppTypesAPI.AppTypes(this._client);
  configurations: ConfigurationsAPI.Configurations = new ConfigurationsAPI.Configurations(this._client);
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  logging: LoggingAPI.Logging = new LoggingAPI.Logging(this._client);
  proxyEndpoints: ProxyEndpointsAPI.ProxyEndpoints = new ProxyEndpointsAPI.ProxyEndpoints(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);
  pacfiles: PacfilesAPI.Pacfiles = new PacfilesAPI.Pacfiles(this._client);
}

Gateway.AuditSSHSettings = AuditSSHSettings;
Gateway.Categories = Categories;
Gateway.AppTypes = AppTypes;
Gateway.Configurations = Configurations;
Gateway.Lists = Lists;
Gateway.Locations = Locations;
Gateway.Logging = Logging;
Gateway.ProxyEndpoints = ProxyEndpoints;
Gateway.Rules = Rules;
Gateway.Certificates = Certificates;
Gateway.Pacfiles = Pacfiles;

export declare namespace Gateway {
  export { AuditSSHSettings as AuditSSHSettings };

  export { Categories as Categories };

  export { AppTypes as AppTypes };

  export { Configurations as Configurations };

  export { Lists as Lists };

  export { Locations as Locations };

  export { Logging as Logging };

  export { ProxyEndpoints as ProxyEndpoints };

  export { Rules as Rules };

  export { Certificates as Certificates };

  export { Pacfiles as Pacfiles };
}
