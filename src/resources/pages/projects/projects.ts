// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as DomainsAPI from './domains';
import { Domains } from './domains';
import * as DeploymentsAPI from './deployments/deployments';
import { Deployments } from './deployments/deployments';

export class Projects extends APIResource {
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
}

Projects.Deployments = Deployments;
Projects.Domains = Domains;

export declare namespace Projects {
  export { Deployments as Deployments };

  export { Domains as Domains };
}
