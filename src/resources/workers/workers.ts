// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AccountSettingsAPI from 'cloudflare/resources/workers/account-settings';
import * as DeploymentsByScriptAPI from 'cloudflare/resources/workers/deployments-by-script';
import * as DomainsAPI from 'cloudflare/resources/workers/domains';
import * as FiltersAPI from 'cloudflare/resources/workers/filters';
import * as RoutesAPI from 'cloudflare/resources/workers/routes';
import * as ScriptAPI from 'cloudflare/resources/workers/script';
import * as SubdomainsAPI from 'cloudflare/resources/workers/subdomains';
import * as DeploymentsAPI from 'cloudflare/resources/workers/deployments/deployments';
import * as DurableObjectsAPI from 'cloudflare/resources/workers/durable-objects/durable-objects';
import * as QueuesAPI from 'cloudflare/resources/workers/queues/queues';
import * as ScriptsAPI from 'cloudflare/resources/workers/scripts/scripts';
import * as ServicesAPI from 'cloudflare/resources/workers/services/services';

export class Workers extends APIResource {
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);
  filters: FiltersAPI.Filters = new FiltersAPI.Filters(this._client);
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  accountSettings: AccountSettingsAPI.AccountSettings = new AccountSettingsAPI.AccountSettings(this._client);
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  durableObjects: DurableObjectsAPI.DurableObjects = new DurableObjectsAPI.DurableObjects(this._client);
  queues: QueuesAPI.Queues = new QueuesAPI.Queues(this._client);
  subdomains: SubdomainsAPI.Subdomains = new SubdomainsAPI.Subdomains(this._client);
  deploymentsByScript: DeploymentsByScriptAPI.DeploymentsByScript =
    new DeploymentsByScriptAPI.DeploymentsByScript(this._client);
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);
  script: ScriptAPI.Script = new ScriptAPI.Script(this._client);
}

export namespace Workers {
  export import Scripts = ScriptsAPI.Scripts;
  export import ScriptCreateResponse = ScriptsAPI.ScriptCreateResponse;
  export import ScriptUpdateResponse = ScriptsAPI.ScriptUpdateResponse;
  export import ScriptListResponse = ScriptsAPI.ScriptListResponse;
  export import ScriptCreateParams = ScriptsAPI.ScriptCreateParams;
  export import ScriptUpdateParams = ScriptsAPI.ScriptUpdateParams;
  export import ScriptDeleteParams = ScriptsAPI.ScriptDeleteParams;
  export import Filters = FiltersAPI.Filters;
  export import FilterUpdateResponse = FiltersAPI.FilterUpdateResponse;
  export import FilterDeleteResponse = FiltersAPI.FilterDeleteResponse;
  export import FilterWorkerFiltersDeprecatedCreateFilterResponse = FiltersAPI.FilterWorkerFiltersDeprecatedCreateFilterResponse;
  export import FilterWorkerFiltersDeprecatedListFiltersResponse = FiltersAPI.FilterWorkerFiltersDeprecatedListFiltersResponse;
  export import FilterUpdateParams = FiltersAPI.FilterUpdateParams;
  export import FilterWorkerFiltersDeprecatedCreateFilterParams = FiltersAPI.FilterWorkerFiltersDeprecatedCreateFilterParams;
  export import Routes = RoutesAPI.Routes;
  export import RouteUpdateResponse = RoutesAPI.RouteUpdateResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteGetResponse = RoutesAPI.RouteGetResponse;
  export import RouteWorkerRoutesCreateRouteResponse = RoutesAPI.RouteWorkerRoutesCreateRouteResponse;
  export import RouteWorkerRoutesListRoutesResponse = RoutesAPI.RouteWorkerRoutesListRoutesResponse;
  export import RouteUpdateParams = RoutesAPI.RouteUpdateParams;
  export import RouteWorkerRoutesCreateRouteParams = RoutesAPI.RouteWorkerRoutesCreateRouteParams;
  export import AccountSettings = AccountSettingsAPI.AccountSettings;
  export import AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse = AccountSettingsAPI.AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse;
  export import AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse = AccountSettingsAPI.AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse;
  export import AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsParams = AccountSettingsAPI.AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsParams;
  export import Deployments = DeploymentsAPI.Deployments;
  export import Domains = DomainsAPI.Domains;
  export import DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainWorkerDomainAttachToDomainResponse = DomainsAPI.DomainWorkerDomainAttachToDomainResponse;
  export import DomainWorkerDomainListDomainsResponse = DomainsAPI.DomainWorkerDomainListDomainsResponse;
  export import DomainWorkerDomainAttachToDomainParams = DomainsAPI.DomainWorkerDomainAttachToDomainParams;
  export import DomainWorkerDomainListDomainsParams = DomainsAPI.DomainWorkerDomainListDomainsParams;
  export import DurableObjects = DurableObjectsAPI.DurableObjects;
  export import Queues = QueuesAPI.Queues;
  export import QueueUpdateResponse = QueuesAPI.QueueUpdateResponse;
  export import QueueListResponse = QueuesAPI.QueueListResponse;
  export import QueueDeleteResponse = QueuesAPI.QueueDeleteResponse;
  export import QueueGetResponse = QueuesAPI.QueueGetResponse;
  export import QueueQueueCreateQueueResponse = QueuesAPI.QueueQueueCreateQueueResponse;
  export import QueueUpdateParams = QueuesAPI.QueueUpdateParams;
  export import QueueQueueCreateQueueParams = QueuesAPI.QueueQueueCreateQueueParams;
  export import Subdomains = SubdomainsAPI.Subdomains;
  export import SubdomainWorkerSubdomainCreateSubdomainResponse = SubdomainsAPI.SubdomainWorkerSubdomainCreateSubdomainResponse;
  export import SubdomainWorkerSubdomainGetSubdomainResponse = SubdomainsAPI.SubdomainWorkerSubdomainGetSubdomainResponse;
  export import SubdomainWorkerSubdomainCreateSubdomainParams = SubdomainsAPI.SubdomainWorkerSubdomainCreateSubdomainParams;
  export import DeploymentsByScript = DeploymentsByScriptAPI.DeploymentsByScript;
  export import DeploymentsByScriptListResponse = DeploymentsByScriptAPI.DeploymentsByScriptListResponse;
  export import DeploymentsByScriptDetailResponse = DeploymentsByScriptAPI.DeploymentsByScriptDetailResponse;
  export import Services = ServicesAPI.Services;
  export import Script = ScriptAPI.Script;
}
