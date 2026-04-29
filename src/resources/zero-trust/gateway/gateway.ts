// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AppTypesAPI from './app-types';
import { AppTypes, BaseAppTypes } from './app-types';
import * as AuditSSHSettingsAPI from './audit-ssh-settings';
import { AuditSSHSettings, BaseAuditSSHSettings } from './audit-ssh-settings';
import * as CategoriesAPI from './categories';
import { BaseCategories, Categories } from './categories';
import * as CertificatesAPI from './certificates';
import { BaseCertificates, Certificates } from './certificates';
import * as LocationsAPI from './locations';
import { BaseLocations, Locations } from './locations';
import * as LoggingAPI from './logging';
import { BaseLogging, Logging } from './logging';
import * as PacfilesAPI from './pacfiles';
import { BasePacfiles, Pacfiles } from './pacfiles';
import * as ProxyEndpointsAPI from './proxy-endpoints';
import { BaseProxyEndpoints, ProxyEndpoints } from './proxy-endpoints';
import * as RulesAPI from './rules';
import { BaseRules, Rules } from './rules';
import * as ConfigurationsAPI from './configurations/configurations';
import { BaseConfigurations, Configurations } from './configurations/configurations';
import * as ListsAPI from './lists/lists';
import { BaseLists, Lists } from './lists/lists';

export class BaseGateway extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'gateway'] = Object.freeze([
    'zeroTrust',
    'gateway',
  ] as const);
}
export class Gateway extends BaseGateway {
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
Gateway.BaseAuditSSHSettings = BaseAuditSSHSettings;
Gateway.Categories = Categories;
Gateway.BaseCategories = BaseCategories;
Gateway.AppTypes = AppTypes;
Gateway.BaseAppTypes = BaseAppTypes;
Gateway.Configurations = Configurations;
Gateway.BaseConfigurations = BaseConfigurations;
Gateway.Lists = Lists;
Gateway.BaseLists = BaseLists;
Gateway.Locations = Locations;
Gateway.BaseLocations = BaseLocations;
Gateway.Logging = Logging;
Gateway.BaseLogging = BaseLogging;
Gateway.ProxyEndpoints = ProxyEndpoints;
Gateway.BaseProxyEndpoints = BaseProxyEndpoints;
Gateway.Rules = Rules;
Gateway.BaseRules = BaseRules;
Gateway.Certificates = Certificates;
Gateway.BaseCertificates = BaseCertificates;
Gateway.Pacfiles = Pacfiles;
Gateway.BasePacfiles = BasePacfiles;

export declare namespace Gateway {
  export { AuditSSHSettings as AuditSSHSettings, BaseAuditSSHSettings as BaseAuditSSHSettings };

  export { Categories as Categories, BaseCategories as BaseCategories };

  export { AppTypes as AppTypes, BaseAppTypes as BaseAppTypes };

  export { Configurations as Configurations, BaseConfigurations as BaseConfigurations };

  export { Lists as Lists, BaseLists as BaseLists };

  export { Locations as Locations, BaseLocations as BaseLocations };

  export { Logging as Logging, BaseLogging as BaseLogging };

  export { ProxyEndpoints as ProxyEndpoints, BaseProxyEndpoints as BaseProxyEndpoints };

  export { Rules as Rules, BaseRules as BaseRules };

  export { Certificates as Certificates, BaseCertificates as BaseCertificates };

  export { Pacfiles as Pacfiles, BasePacfiles as BasePacfiles };
}
