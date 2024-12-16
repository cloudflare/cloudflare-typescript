// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AccountSettingsAPI from './account-settings';
import {
  AccountSettingGetParams,
  AccountSettingGetResponse,
  AccountSettingUpdateParams,
  AccountSettingUpdateResponse,
  AccountSettings,
} from './account-settings';
import * as DomainsAPI from './domains';
import {
  Domain,
  DomainDeleteParams,
  DomainGetParams,
  DomainListParams,
  DomainUpdateParams,
  Domains,
  DomainsSinglePage,
} from './domains';
import * as RoutesAPI from './routes';
import {
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
  SubdomainGetParams,
  SubdomainGetResponse,
  SubdomainUpdateParams,
  SubdomainUpdateResponse,
  Subdomains,
} from './subdomains';
import * as AssetsAPI from './assets/assets';
import { Assets } from './assets/assets';
import * as ScriptsAPI from './scripts/scripts';
import {
  Script,
  ScriptDeleteParams,
  ScriptGetParams,
  ScriptListParams,
  ScriptSetting,
  ScriptUpdateParams,
  ScriptUpdateResponse,
  Scripts,
  ScriptsSinglePage,
} from './scripts/scripts';

export class Workers extends APIResource {
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);
  accountSettings: AccountSettingsAPI.AccountSettings = new AccountSettingsAPI.AccountSettings(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  subdomains: SubdomainsAPI.Subdomains = new SubdomainsAPI.Subdomains(this._client);
}

/**
 * A binding to allow the Worker to communicate with resources
 */
export type Binding =
  | KVNamespaceBinding
  | ServiceBinding
  | DurableObjectBinding
  | R2Binding
  | Binding.WorkersQueueBinding
  | D1Binding
  | DispatchNamespaceBinding
  | MTLSCERTBinding
  | Binding.WorkersAssetsBinding;

export namespace Binding {
  export interface WorkersQueueBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Name of the Queue to bind to
     */
    queue_name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'queue';
  }

  export interface WorkersAssetsBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'assets';
  }
}

/**
 * A binding to allow the Worker to communicate with resources
 */
export type BindingParam =
  | KVNamespaceBindingParam
  | ServiceBindingParam
  | DurableObjectBindingParam
  | R2BindingParam
  | BindingParam.WorkersQueueBinding
  | D1BindingParam
  | DispatchNamespaceBindingParam
  | MTLSCERTBindingParam
  | BindingParam.WorkersAssetsBinding;

export namespace BindingParam {
  export interface WorkersQueueBinding {
    /**
     * Name of the Queue to bind to
     */
    queue_name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'queue';
  }

  export interface WorkersAssetsBinding {
    /**
     * The class of resource that the binding provides.
     */
    type: 'assets';
  }
}

export interface D1Binding {
  /**
   * ID of the D1 database to bind to
   */
  id: string;

  /**
   * A JavaScript variable name for the binding.
   */
  binding: string;

  /**
   * The name of the D1 database associated with the 'id' provided.
   */
  name: string;

  /**
   * The class of resource that the binding provides.
   */
  type: 'd1';
}

export interface D1BindingParam {
  /**
   * ID of the D1 database to bind to
   */
  id: string;

  /**
   * The name of the D1 database associated with the 'id' provided.
   */
  name: string;

  /**
   * The class of resource that the binding provides.
   */
  type: 'd1';
}

export interface DispatchNamespaceBinding {
  /**
   * A JavaScript variable name for the binding.
   */
  name: string;

  /**
   * Namespace to bind to
   */
  namespace: string;

  /**
   * The class of resource that the binding provides.
   */
  type: 'dispatch_namespace';

  /**
   * Outbound worker
   */
  outbound?: DispatchNamespaceBinding.Outbound;
}

export namespace DispatchNamespaceBinding {
  /**
   * Outbound worker
   */
  export interface Outbound {
    /**
     * Pass information from the Dispatch Worker to the Outbound Worker through the
     * parameters
     */
    params?: Array<string>;

    /**
     * Outbound worker
     */
    worker?: Outbound.Worker;
  }

  export namespace Outbound {
    /**
     * Outbound worker
     */
    export interface Worker {
      /**
       * Environment of the outbound worker
       */
      environment?: string;

      /**
       * Name of the outbound worker
       */
      service?: string;
    }
  }
}

export interface DispatchNamespaceBindingParam {
  /**
   * Namespace to bind to
   */
  namespace: string;

  /**
   * The class of resource that the binding provides.
   */
  type: 'dispatch_namespace';

  /**
   * Outbound worker
   */
  outbound?: DispatchNamespaceBindingParam.Outbound;
}

export namespace DispatchNamespaceBindingParam {
  /**
   * Outbound worker
   */
  export interface Outbound {
    /**
     * Pass information from the Dispatch Worker to the Outbound Worker through the
     * parameters
     */
    params?: Array<string>;

    /**
     * Outbound worker
     */
    worker?: Outbound.Worker;
  }

  export namespace Outbound {
    /**
     * Outbound worker
     */
    export interface Worker {
      /**
       * Environment of the outbound worker
       */
      environment?: string;

      /**
       * Name of the outbound worker
       */
      service?: string;
    }
  }
}

export interface DurableObjectBinding {
  /**
   * The exported class name of the Durable Object
   */
  class_name: string;

  /**
   * A JavaScript variable name for the binding.
   */
  name: string;

  /**
   * The class of resource that the binding provides.
   */
  type: 'durable_object_namespace';

  /**
   * The environment of the script_name to bind to
   */
  environment?: string;

  /**
   * Namespace identifier tag.
   */
  namespace_id?: string;

  /**
   * The script where the Durable Object is defined, if it is external to this Worker
   */
  script_name?: string;
}

export interface DurableObjectBindingParam {
  /**
   * The exported class name of the Durable Object
   */
  class_name: string;

  /**
   * The class of resource that the binding provides.
   */
  type: 'durable_object_namespace';

  /**
   * The environment of the script_name to bind to
   */
  environment?: string;

  /**
   * The script where the Durable Object is defined, if it is external to this Worker
   */
  script_name?: string;
}

export interface KVNamespaceBinding {
  /**
   * A JavaScript variable name for the binding.
   */
  name: string;

  /**
   * Namespace identifier tag.
   */
  namespace_id: string;

  /**
   * The class of resource that the binding provides.
   */
  type: 'kv_namespace';
}

export interface KVNamespaceBindingParam {
  /**
   * The class of resource that the binding provides.
   */
  type: 'kv_namespace';
}

export interface MigrationStep {
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
  renamed_classes?: Array<MigrationStep.RenamedClass>;

  /**
   * A list of transfers for Durable Object namespaces from a different Worker and
   * class to a class defined in this Worker.
   */
  transferred_classes?: Array<MigrationStep.TransferredClass>;
}

export namespace MigrationStep {
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

export interface MTLSCERTBinding {
  /**
   * ID of the certificate to bind to
   */
  certificate_id: string;

  /**
   * A JavaScript variable name for the binding.
   */
  name: string;

  /**
   * The class of resource that the binding provides.
   */
  type: 'mtls_certificate';
}

export interface MTLSCERTBindingParam {
  /**
   * ID of the certificate to bind to
   */
  certificate_id: string;

  /**
   * The class of resource that the binding provides.
   */
  type: 'mtls_certificate';
}

export interface PlacementConfiguration {
  /**
   * Enables
   * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
   * Only `"smart"` is currently supported
   */
  mode?: 'smart';
}

export interface PlacementConfigurationParam {
  /**
   * Enables
   * [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).
   * Only `"smart"` is currently supported
   */
  mode?: 'smart';
}

export interface R2Binding {
  /**
   * R2 bucket to bind to
   */
  bucket_name: string;

  /**
   * A JavaScript variable name for the binding.
   */
  name: string;

  /**
   * The class of resource that the binding provides.
   */
  type: 'r2_bucket';
}

export interface R2BindingParam {
  /**
   * R2 bucket to bind to
   */
  bucket_name: string;

  /**
   * The class of resource that the binding provides.
   */
  type: 'r2_bucket';
}

export interface ServiceBinding {
  /**
   * Optional environment if the Worker utilizes one.
   */
  environment: string;

  /**
   * A JavaScript variable name for the binding.
   */
  name: string;

  /**
   * Name of Worker to bind to
   */
  service: string;

  /**
   * The class of resource that the binding provides.
   */
  type: 'service';
}

export interface ServiceBindingParam {
  /**
   * Optional environment if the Worker utilizes one.
   */
  environment: string;

  /**
   * Name of Worker to bind to
   */
  service: string;

  /**
   * The class of resource that the binding provides.
   */
  type: 'service';
}

/**
 * A single set of migrations to apply.
 */
export interface SingleStepMigration {
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
  renamed_classes?: Array<SingleStepMigration.RenamedClass>;

  /**
   * A list of transfers for Durable Object namespaces from a different Worker and
   * class to a class defined in this Worker.
   */
  transferred_classes?: Array<SingleStepMigration.TransferredClass>;
}

export namespace SingleStepMigration {
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

export interface SteppedMigration {
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
   * Migrations to apply in order.
   */
  steps?: Array<MigrationStep>;
}

export interface SteppedMigrationParam {
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
   * Migrations to apply in order.
   */
  steps?: Array<MigrationStepParam>;
}

/**
 * JSON encoded metadata about the uploaded parts and Worker configuration.
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
 * JSON encoded metadata about the uploaded parts and Worker configuration.
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

Workers.Routes = Routes;
Workers.RouteListResponsesSinglePage = RouteListResponsesSinglePage;
Workers.Assets = Assets;
Workers.Scripts = Scripts;
Workers.ScriptsSinglePage = ScriptsSinglePage;
Workers.AccountSettings = AccountSettings;
Workers.Domains = Domains;
Workers.DomainsSinglePage = DomainsSinglePage;
Workers.Subdomains = Subdomains;

export declare namespace Workers {
  export {
    Routes as Routes,
    type RouteCreateResponse as RouteCreateResponse,
    type RouteUpdateResponse as RouteUpdateResponse,
    type RouteListResponse as RouteListResponse,
    type RouteDeleteResponse as RouteDeleteResponse,
    type RouteGetResponse as RouteGetResponse,
    RouteListResponsesSinglePage as RouteListResponsesSinglePage,
    type RouteCreateParams as RouteCreateParams,
    type RouteUpdateParams as RouteUpdateParams,
    type RouteListParams as RouteListParams,
    type RouteDeleteParams as RouteDeleteParams,
    type RouteGetParams as RouteGetParams,
  };

  export { Assets as Assets };

  export {
    Scripts as Scripts,
    type Script as Script,
    type ScriptSetting as ScriptSetting,
    type ScriptUpdateResponse as ScriptUpdateResponse,
    ScriptsSinglePage as ScriptsSinglePage,
    type ScriptUpdateParams as ScriptUpdateParams,
    type ScriptListParams as ScriptListParams,
    type ScriptDeleteParams as ScriptDeleteParams,
    type ScriptGetParams as ScriptGetParams,
  };

  export {
    AccountSettings as AccountSettings,
    type AccountSettingUpdateResponse as AccountSettingUpdateResponse,
    type AccountSettingGetResponse as AccountSettingGetResponse,
    type AccountSettingUpdateParams as AccountSettingUpdateParams,
    type AccountSettingGetParams as AccountSettingGetParams,
  };

  export {
    Domains as Domains,
    type Domain as Domain,
    DomainsSinglePage as DomainsSinglePage,
    type DomainUpdateParams as DomainUpdateParams,
    type DomainListParams as DomainListParams,
    type DomainDeleteParams as DomainDeleteParams,
    type DomainGetParams as DomainGetParams,
  };

  export {
    Subdomains as Subdomains,
    type SubdomainUpdateResponse as SubdomainUpdateResponse,
    type SubdomainGetResponse as SubdomainGetResponse,
    type SubdomainUpdateParams as SubdomainUpdateParams,
    type SubdomainGetParams as SubdomainGetParams,
  };
}
