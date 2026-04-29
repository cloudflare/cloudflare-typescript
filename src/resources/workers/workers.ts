// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountSettingsAPI from './account-settings';
import { AccountSettings, BaseAccountSettings } from './account-settings';
import * as DomainsAPI from './domains';
import { BaseDomains, Domains } from './domains';
import * as RoutesAPI from './routes';
import { BaseRoutes, Routes } from './routes';
import * as SubdomainsAPI from './subdomains';
import { BaseSubdomains, Subdomains } from './subdomains';
import * as AssetsAPI from './assets/assets';
import { Assets, BaseAssets } from './assets/assets';
import * as BetaAPI from './beta/beta';
import { BaseBeta, Beta } from './beta/beta';
import * as ObservabilityAPI from './observability/observability';
import { BaseObservability, Observability } from './observability/observability';
import * as ScriptsAPI from './scripts/scripts';
import { BaseScripts, Scripts } from './scripts/scripts';

export class BaseWorkers extends APIResource {
  static override readonly _key: readonly ['workers'] = Object.freeze(['workers'] as const);
}
export class Workers extends BaseWorkers {
  beta: BetaAPI.Beta = new BetaAPI.Beta(this._client);
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);
  accountSettings: AccountSettingsAPI.AccountSettings = new AccountSettingsAPI.AccountSettings(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  subdomains: SubdomainsAPI.Subdomains = new SubdomainsAPI.Subdomains(this._client);
  observability: ObservabilityAPI.Observability = new ObservabilityAPI.Observability(this._client);
}

Workers.Beta = Beta;
Workers.BaseBeta = BaseBeta;
Workers.Routes = Routes;
Workers.BaseRoutes = BaseRoutes;
Workers.Assets = Assets;
Workers.BaseAssets = BaseAssets;
Workers.Scripts = Scripts;
Workers.BaseScripts = BaseScripts;
Workers.AccountSettings = AccountSettings;
Workers.BaseAccountSettings = BaseAccountSettings;
Workers.Domains = Domains;
Workers.BaseDomains = BaseDomains;
Workers.Subdomains = Subdomains;
Workers.BaseSubdomains = BaseSubdomains;
Workers.Observability = Observability;
Workers.BaseObservability = BaseObservability;

export declare namespace Workers {
  export { Beta as Beta, BaseBeta as BaseBeta };

  export { Routes as Routes, BaseRoutes as BaseRoutes };

  export { Assets as Assets, BaseAssets as BaseAssets };

  export { Scripts as Scripts, BaseScripts as BaseScripts };

  export { AccountSettings as AccountSettings, BaseAccountSettings as BaseAccountSettings };

  export { Domains as Domains, BaseDomains as BaseDomains };

  export { Subdomains as Subdomains, BaseSubdomains as BaseSubdomains };

  export { Observability as Observability, BaseObservability as BaseObservability };
}
