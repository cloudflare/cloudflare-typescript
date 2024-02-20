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
  export import ScriptUpdateResponse = ScriptsAPI.ScriptUpdateResponse;
  export import ScriptListResponse = ScriptsAPI.ScriptListResponse;
  export import ScriptUpdateParams = ScriptsAPI.ScriptUpdateParams;
  export import ScriptDeleteParams = ScriptsAPI.ScriptDeleteParams;
  export import Filters = FiltersAPI.Filters;
  export import FilterCreateResponse = FiltersAPI.FilterCreateResponse;
  export import FilterUpdateResponse = FiltersAPI.FilterUpdateResponse;
  export import FilterListResponse = FiltersAPI.FilterListResponse;
  export import FilterDeleteResponse = FiltersAPI.FilterDeleteResponse;
  export import FilterCreateParams = FiltersAPI.FilterCreateParams;
  export import FilterUpdateParams = FiltersAPI.FilterUpdateParams;
  export import Routes = RoutesAPI.Routes;
  export import RouteCreateResponse = RoutesAPI.RouteCreateResponse;
  export import RouteUpdateResponse = RoutesAPI.RouteUpdateResponse;
  export import RouteListResponse = RoutesAPI.RouteListResponse;
  export import RouteDeleteResponse = RoutesAPI.RouteDeleteResponse;
  export import RouteGetResponse = RoutesAPI.RouteGetResponse;
  export import RouteCreateParams = RoutesAPI.RouteCreateParams;
  export import RouteUpdateParams = RoutesAPI.RouteUpdateParams;
  export import AccountSettings = AccountSettingsAPI.AccountSettings;
  export import AccountSettingUpdateResponse = AccountSettingsAPI.AccountSettingUpdateResponse;
  export import AccountSettingGetResponse = AccountSettingsAPI.AccountSettingGetResponse;
  export import AccountSettingUpdateParams = AccountSettingsAPI.AccountSettingUpdateParams;
  export import Deployments = DeploymentsAPI.Deployments;
  export import Domains = DomainsAPI.Domains;
  export import DomainUpdateResponse = DomainsAPI.DomainUpdateResponse;
  export import DomainListResponse = DomainsAPI.DomainListResponse;
  export import DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainUpdateParams = DomainsAPI.DomainUpdateParams;
  export import DomainListParams = DomainsAPI.DomainListParams;
  export import DurableObjects = DurableObjectsAPI.DurableObjects;
  export import Queues = QueuesAPI.Queues;
  export import QueueCreateResponse = QueuesAPI.QueueCreateResponse;
  export import QueueUpdateResponse = QueuesAPI.QueueUpdateResponse;
  export import QueueListResponse = QueuesAPI.QueueListResponse;
  export import QueueDeleteResponse = QueuesAPI.QueueDeleteResponse;
  export import QueueGetResponse = QueuesAPI.QueueGetResponse;
  export import QueueCreateParams = QueuesAPI.QueueCreateParams;
  export import QueueUpdateParams = QueuesAPI.QueueUpdateParams;
  export import Subdomains = SubdomainsAPI.Subdomains;
  export import SubdomainUpdateResponse = SubdomainsAPI.SubdomainUpdateResponse;
  export import SubdomainGetResponse = SubdomainsAPI.SubdomainGetResponse;
  export import SubdomainUpdateParams = SubdomainsAPI.SubdomainUpdateParams;
  export import DeploymentsByScript = DeploymentsByScriptAPI.DeploymentsByScript;
  export import DeploymentsByScriptListResponse = DeploymentsByScriptAPI.DeploymentsByScriptListResponse;
  export import DeploymentsByScriptDetailResponse = DeploymentsByScriptAPI.DeploymentsByScriptDetailResponse;
  export import Services = ServicesAPI.Services;
  export import Script = ScriptAPI.Script;
}
