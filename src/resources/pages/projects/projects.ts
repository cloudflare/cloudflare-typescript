// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DomainsAPI from './domains';
import { BaseDomains, Domains } from './domains';
import * as DeploymentsAPI from './deployments/deployments';
import { BaseDeployments, Deployments } from './deployments/deployments';

export class BaseProjects extends APIResource {
  static override readonly _key: readonly ['pages', 'projects'] = Object.freeze([
    'pages',
    'projects',
  ] as const);
}
export class Projects extends BaseProjects {
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
}

Projects.Deployments = Deployments;
Projects.BaseDeployments = BaseDeployments;
Projects.Domains = Domains;
Projects.BaseDomains = BaseDomains;

export declare namespace Projects {
  export { Deployments as Deployments, BaseDeployments as BaseDeployments };

  export { Domains as Domains, BaseDomains as BaseDomains };
}
