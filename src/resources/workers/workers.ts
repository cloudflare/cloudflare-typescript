// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as AccountSettingsAPI from 'cloudflare/resources/workers/account-settings';
import * as AIAPI from 'cloudflare/resources/workers/ai';
import * as DomainsAPI from 'cloudflare/resources/workers/domains';
import * as FiltersAPI from 'cloudflare/resources/workers/filters';
import * as RoutesAPI from 'cloudflare/resources/workers/routes';
import * as SubdomainsAPI from 'cloudflare/resources/workers/subdomains';
import * as DeploymentsAPI from 'cloudflare/resources/workers/deployments/deployments';
import * as ScriptsAPI from 'cloudflare/resources/workers/scripts/scripts';
import * as ServicesAPI from 'cloudflare/resources/workers/services/services';

export class Workers extends APIResource {
  ai: AIAPI.AI = new AIAPI.AI(this._client);
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);
  filters: FiltersAPI.Filters = new FiltersAPI.Filters(this._client);
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  accountSettings: AccountSettingsAPI.AccountSettings = new AccountSettingsAPI.AccountSettings(this._client);
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  subdomains: SubdomainsAPI.Subdomains = new SubdomainsAPI.Subdomains(this._client);
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);
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
  | MTLSCERTBinding;

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

export interface MTLSCERTBinding {
  certificate: unknown;

  /**
   * A JavaScript variable name for the binding.
   */
  name: string;

  /**
   * The class of resource that the binding provides.
   */
  type: 'mtls_certificate';

  /**
   * ID of the certificate to bind to
   */
  certificate_id?: string;
}

export interface PlacementConfiguration {
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

export namespace Workers {
  export import AI = AIAPI.AI;
  export import AIRunResponse = AIAPI.AIRunResponse;
  export import AIRunParams = AIAPI.AIRunParams;
  export import Scripts = ScriptsAPI.Scripts;
  export import Script = ScriptsAPI.Script;
  export import ScriptSetting = ScriptsAPI.ScriptSetting;
  export import ScriptsSinglePage = ScriptsAPI.ScriptsSinglePage;
  export import ScriptUpdateParams = ScriptsAPI.ScriptUpdateParams;
  export import ScriptListParams = ScriptsAPI.ScriptListParams;
  export import ScriptDeleteParams = ScriptsAPI.ScriptDeleteParams;
  export import ScriptGetParams = ScriptsAPI.ScriptGetParams;
  export import Filters = FiltersAPI.Filters;
  export import WorkersFilter = FiltersAPI.WorkersFilter;
  export import FilterCreateResponse = FiltersAPI.FilterCreateResponse;
  export import FilterDeleteResponse = FiltersAPI.FilterDeleteResponse;
  export import WorkersFiltersSinglePage = FiltersAPI.WorkersFiltersSinglePage;
  export import FilterCreateParams = FiltersAPI.FilterCreateParams;
  export import FilterUpdateParams = FiltersAPI.FilterUpdateParams;
  export import FilterListParams = FiltersAPI.FilterListParams;
  export import FilterDeleteParams = FiltersAPI.FilterDeleteParams;
  export import Routes = RoutesAPI.Routes;
  export import WorkersRoute = RoutesAPI.WorkersRoute;
  export import WorkersRoutesSinglePage = RoutesAPI.WorkersRoutesSinglePage;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteUpdateParams = RoutesAPI.RouteUpdateParams;
  export import RouteListParams = RoutesAPI.RouteListParams;
  export import RouteDeleteParams = RoutesAPI.RouteDeleteParams;
  export import RouteGetParams = RoutesAPI.RouteGetParams;
  export import AccountSettings = AccountSettingsAPI.AccountSettings;
  export import AccountSettingUpdateResponse = AccountSettingsAPI.AccountSettingUpdateResponse;
  export import AccountSettingGetResponse = AccountSettingsAPI.AccountSettingGetResponse;
  export import AccountSettingUpdateParams = AccountSettingsAPI.AccountSettingUpdateParams;
  export import AccountSettingGetParams = AccountSettingsAPI.AccountSettingGetParams;
  export import Deployments = DeploymentsAPI.Deployments;
  export import Domains = DomainsAPI.Domains;
  export import Domain = DomainsAPI.Domain;
  export import DomainsSinglePage = DomainsAPI.DomainsSinglePage;
  export import DomainUpdateParams = DomainsAPI.DomainUpdateParams;
  export import DomainListParams = DomainsAPI.DomainListParams;
  export import DomainDeleteParams = DomainsAPI.DomainDeleteParams;
  export import DomainGetParams = DomainsAPI.DomainGetParams;
  export import Subdomains = SubdomainsAPI.Subdomains;
  export import SubdomainUpdateResponse = SubdomainsAPI.SubdomainUpdateResponse;
  export import SubdomainGetResponse = SubdomainsAPI.SubdomainGetResponse;
  export import SubdomainUpdateParams = SubdomainsAPI.SubdomainUpdateParams;
  export import SubdomainGetParams = SubdomainsAPI.SubdomainGetParams;
  export import Services = ServicesAPI.Services;
}
