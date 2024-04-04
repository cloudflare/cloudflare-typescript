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

export namespace Workers {
  export import AI = AIAPI.AI;
  export import AIRunResponse = AIAPI.AIRunResponse;
  export import AIRunParams = AIAPI.AIRunParams;
  export import Scripts = ScriptsAPI.Scripts;
  export import WorkersScript = ScriptsAPI.WorkersScript;
  export import WorkersScriptsSinglePage = ScriptsAPI.WorkersScriptsSinglePage;
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
  export import WorkersDomain = DomainsAPI.WorkersDomain;
  export import WorkersDomainsSinglePage = DomainsAPI.WorkersDomainsSinglePage;
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
