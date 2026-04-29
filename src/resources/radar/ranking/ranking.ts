// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DomainAPI from './domain';
import { BaseDomain, Domain } from './domain';
import * as InternetServicesAPI from './internet-services';
import { BaseInternetServices, InternetServices } from './internet-services';

export class BaseRanking extends APIResource {
  static override readonly _key: readonly ['radar', 'ranking'] = Object.freeze(['radar', 'ranking'] as const);
}
export class Ranking extends BaseRanking {
  domain: DomainAPI.Domain = new DomainAPI.Domain(this._client);
  internetServices: InternetServicesAPI.InternetServices = new InternetServicesAPI.InternetServices(
    this._client,
  );
}

Ranking.Domain = Domain;
Ranking.BaseDomain = BaseDomain;
Ranking.InternetServices = InternetServices;
Ranking.BaseInternetServices = BaseInternetServices;

export declare namespace Ranking {
  export { Domain as Domain, BaseDomain as BaseDomain };

  export { InternetServices as InternetServices, BaseInternetServices as BaseInternetServices };
}
