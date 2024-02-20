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
  export import ScriptListResponse = ScriptsAPI.ScriptListResponse;
  export import ScriptReplaceResponse = ScriptsAPI.ScriptReplaceResponse;
  export import ScriptDeleteParams = ScriptsAPI.ScriptDeleteParams;
  export import ScriptReplaceParams = ScriptsAPI.ScriptReplaceParams;
  export import Filters = FiltersAPI.Filters;
  export import FilterCreateResponse = FiltersAPI.FilterCreateResponse;
  export import FilterListResponse = FiltersAPI.FilterListResponse;
  export import FilterDeleteResponse = FiltersAPI.FilterDeleteResponse;
  export import FilterReplaceResponse = FiltersAPI.FilterReplaceResponse;
  export import FilterCreateParams = FiltersAPI.FilterCreateParams;
  export import FilterReplaceParams = FiltersAPI.FilterReplaceParams;
  export import Routes = RoutesAPI.Routes;
  export import RouteCreateResponse = RoutesAPI.RouteCreateResponse;
  export import RouteListResponse = RoutesAPI.RouteListResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteGetResponse = RoutesAPI.RouteGetResponse;
  export import RouteReplaceResponse = RoutesAPI.RouteReplaceResponse;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteReplaceParams = RoutesAPI.RouteReplaceParams;
  export import AccountSettings = AccountSettingsAPI.AccountSettings;
  export import AccountSettingGetResponse = AccountSettingsAPI.AccountSettingGetResponse;
  export import AccountSettingReplaceResponse = AccountSettingsAPI.AccountSettingReplaceResponse;
  export import AccountSettingReplaceParams = AccountSettingsAPI.AccountSettingReplaceParams;
  export import Deployments = DeploymentsAPI.Deployments;
  export import Domains = DomainsAPI.Domains;
  export import DomainListResponse = DomainsAPI.DomainListResponse;
  export import DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainReplaceResponse = DomainsAPI.DomainReplaceResponse;
  export import DomainListParams = DomainsAPI.DomainListParams;
  export import DomainReplaceParams = DomainsAPI.DomainReplaceParams;
  export import DurableObjects = DurableObjectsAPI.DurableObjects;
  export import Queues = QueuesAPI.Queues;
  export import QueueCreateResponse = QueuesAPI.QueueCreateResponse;
  export import QueueListResponse = QueuesAPI.QueueListResponse;
  export import QueueDeleteResponse = QueuesAPI.QueueDeleteResponse;
  export import QueueGetResponse = QueuesAPI.QueueGetResponse;
  export import QueueReplaceResponse = QueuesAPI.QueueReplaceResponse;
  export import QueueCreateParams = QueuesAPI.QueueCreateParams;
  export import QueueReplaceParams = QueuesAPI.QueueReplaceParams;
  export import Subdomains = SubdomainsAPI.Subdomains;
  export import SubdomainGetResponse = SubdomainsAPI.SubdomainGetResponse;
  export import SubdomainReplaceResponse = SubdomainsAPI.SubdomainReplaceResponse;
  export import SubdomainReplaceParams = SubdomainsAPI.SubdomainReplaceParams;
  export import DeploymentsByScript = DeploymentsByScriptAPI.DeploymentsByScript;
  export import DeploymentsByScriptListResponse = DeploymentsByScriptAPI.DeploymentsByScriptListResponse;
  export import DeploymentsByScriptDetailResponse = DeploymentsByScriptAPI.DeploymentsByScriptDetailResponse;
  export import Services = ServicesAPI.Services;
  export import Script = ScriptAPI.Script;
}
