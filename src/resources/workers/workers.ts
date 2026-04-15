// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountSettingsAPI from './account-settings';
import {
  AccountSettingGetParams,
  AccountSettingGetResponse,
  AccountSettingUpdateParams,
  AccountSettingUpdateResponse,
  AccountSettings,
  BaseAccountSettings,
} from './account-settings';
import * as DomainsAPI from './domains';
import {
  BaseDomains,
  DomainDeleteParams,
  DomainDeleteResponse,
  DomainGetParams,
  DomainGetResponse,
  DomainListParams,
  DomainListResponse,
  DomainListResponsesSinglePage,
  DomainUpdateParams,
  DomainUpdateResponse,
  Domains,
} from './domains';
import * as RoutesAPI from './routes';
import {
  BaseRoutes,
  RouteCreateParams,
  RouteCreateResponse,
  RouteDeleteParams,
  RouteDeleteResponse,
  RouteGetParams,
  RouteGetResponse,
  RouteListParams,
  RouteListResponse,
  RouteListResponsesSinglePage,
  RouteUpdateParams,
  RouteUpdateResponse,
  Routes,
} from './routes';
import * as SubdomainsAPI from './subdomains';
import {
  BaseSubdomains,
  SubdomainDeleteParams,
  SubdomainGetParams,
  SubdomainGetResponse,
  SubdomainUpdateParams,
  SubdomainUpdateResponse,
  Subdomains,
} from './subdomains';
import * as AssetsAPI from './assets/assets';
import { Assets, BaseAssets } from './assets/assets';
import * as BetaAPI from './beta/beta';
import { BaseBeta, Beta } from './beta/beta';
import * as ObservabilityAPI from './observability/observability';
import { BaseObservability, Observability } from './observability/observability';
import * as ScriptsAPI from './scripts/scripts';
import {
  BaseScripts,
  Script,
  ScriptDeleteParams,
  ScriptDeleteResponse,
  ScriptGetParams,
  ScriptGetResponse,
  ScriptListParams,
  ScriptListResponse,
  ScriptListResponsesSinglePage,
  ScriptSearchParams,
  ScriptSearchResponse,
  ScriptSetting,
  ScriptUpdateParams,
  ScriptUpdateResponse,
  Scripts,
} from './scripts/scripts';

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

export interface MigrationStep {}

export interface MigrationStepParam {
  /**
   * A list of classes to delete Durable Object namespaces from.
   */
  deleted_classes?: Array<string>;

  /**
   * A list of classes to create Durable Object namespaces from.
   */
  new_classes?: Array<string>;

  /**
   * A list of classes to create Durable Object namespaces with SQLite from.
   */
  new_sqlite_classes?: Array<string>;

  /**
   * A list of classes with Durable Object namespaces that were renamed.
   */
  renamed_classes?: Array<MigrationStepParam.RenamedClass>;

  /**
   * A list of transfers for Durable Object namespaces from a different Worker and
   * class to a class defined in this Worker.
   */
  transferred_classes?: Array<MigrationStepParam.TransferredClass>;
}

export namespace MigrationStepParam {
  export interface RenamedClass {
    from?: string;

    to?: string;
  }

  export interface TransferredClass {
    from?: string;

    from_script?: string;

    to?: string;
  }
}

/**
 * A single set of migrations to apply.
 */
export interface SingleStepMigration {}

/**
 * A single set of migrations to apply.
 */
export interface SingleStepMigrationParam {
  /**
   * A list of classes to delete Durable Object namespaces from.
   */
  deleted_classes?: Array<string>;

  /**
   * A list of classes to create Durable Object namespaces from.
   */
  new_classes?: Array<string>;

  /**
   * A list of classes to create Durable Object namespaces with SQLite from.
   */
  new_sqlite_classes?: Array<string>;

  /**
   * Tag to set as the latest migration tag.
   */
  new_tag?: string;

  /**
   * Tag used to verify against the latest migration tag for this Worker. If they
   * don't match, the upload is rejected.
   */
  old_tag?: string;

  /**
   * A list of classes with Durable Object namespaces that were renamed.
   */
  renamed_classes?: Array<SingleStepMigrationParam.RenamedClass>;

  /**
   * A list of transfers for Durable Object namespaces from a different Worker and
   * class to a class defined in this Worker.
   */
  transferred_classes?: Array<SingleStepMigrationParam.TransferredClass>;
}

export namespace SingleStepMigrationParam {
  export interface RenamedClass {
    from?: string;

    to?: string;
  }

  export interface TransferredClass {
    from?: string;

    from_script?: string;

    to?: string;
  }
}

/**
 * JSON-encoded metadata about the uploaded parts and Worker configuration.
 */
export interface WorkerMetadata {
  /**
   * Name of the part in the multipart request that contains the script (e.g. the
   * file adding a listener to the `fetch` event). Indicates a
   * `service worker syntax` Worker.
   */
  body_part?: string;

  /**
   * Name of the part in the multipart request that contains the main module (e.g.
   * the file exporting a `fetch` handler). Indicates a `module syntax` Worker.
   */
  main_module?: string;
}

/**
 * JSON-encoded metadata about the uploaded parts and Worker configuration.
 */
export interface WorkerMetadataParam {
  /**
   * Name of the part in the multipart request that contains the script (e.g. the
   * file adding a listener to the `fetch` event). Indicates a
   * `service worker syntax` Worker.
   */
  body_part?: string;

  /**
   * Name of the part in the multipart request that contains the main module (e.g.
   * the file exporting a `fetch` handler). Indicates a `module syntax` Worker.
   */
  main_module?: string;
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
  export {
    type MigrationStep as MigrationStep,
    type SingleStepMigration as SingleStepMigration,
    type WorkerMetadata as WorkerMetadata,
  };

  export { Beta as Beta, BaseBeta as BaseBeta };

  export {
    Routes as Routes,
    BaseRoutes as BaseRoutes,
    type RouteCreateResponse as RouteCreateResponse,
    type RouteUpdateResponse as RouteUpdateResponse,
    type RouteListResponse as RouteListResponse,
    type RouteDeleteResponse as RouteDeleteResponse,
    type RouteGetResponse as RouteGetResponse,
    type RouteListResponsesSinglePage as RouteListResponsesSinglePage,
    type RouteCreateParams as RouteCreateParams,
    type RouteUpdateParams as RouteUpdateParams,
    type RouteListParams as RouteListParams,
    type RouteDeleteParams as RouteDeleteParams,
    type RouteGetParams as RouteGetParams,
  };

  export { Assets as Assets, BaseAssets as BaseAssets };

  export {
    Scripts as Scripts,
    BaseScripts as BaseScripts,
    type Script as Script,
    type ScriptSetting as ScriptSetting,
    type ScriptUpdateResponse as ScriptUpdateResponse,
    type ScriptListResponse as ScriptListResponse,
    type ScriptDeleteResponse as ScriptDeleteResponse,
    type ScriptGetResponse as ScriptGetResponse,
    type ScriptSearchResponse as ScriptSearchResponse,
    type ScriptListResponsesSinglePage as ScriptListResponsesSinglePage,
    type ScriptUpdateParams as ScriptUpdateParams,
    type ScriptListParams as ScriptListParams,
    type ScriptDeleteParams as ScriptDeleteParams,
    type ScriptGetParams as ScriptGetParams,
    type ScriptSearchParams as ScriptSearchParams,
  };

  export {
    AccountSettings as AccountSettings,
    BaseAccountSettings as BaseAccountSettings,
    type AccountSettingUpdateResponse as AccountSettingUpdateResponse,
    type AccountSettingGetResponse as AccountSettingGetResponse,
    type AccountSettingUpdateParams as AccountSettingUpdateParams,
    type AccountSettingGetParams as AccountSettingGetParams,
  };

  export {
    Domains as Domains,
    BaseDomains as BaseDomains,
    type DomainUpdateResponse as DomainUpdateResponse,
    type DomainListResponse as DomainListResponse,
    type DomainDeleteResponse as DomainDeleteResponse,
    type DomainGetResponse as DomainGetResponse,
    type DomainListResponsesSinglePage as DomainListResponsesSinglePage,
    type DomainUpdateParams as DomainUpdateParams,
    type DomainListParams as DomainListParams,
    type DomainDeleteParams as DomainDeleteParams,
    type DomainGetParams as DomainGetParams,
  };

  export {
    Subdomains as Subdomains,
    BaseSubdomains as BaseSubdomains,
    type SubdomainUpdateResponse as SubdomainUpdateResponse,
    type SubdomainGetResponse as SubdomainGetResponse,
    type SubdomainUpdateParams as SubdomainUpdateParams,
    type SubdomainDeleteParams as SubdomainDeleteParams,
    type SubdomainGetParams as SubdomainGetParams,
  };

  export { Observability as Observability, BaseObservability as BaseObservability };
}
