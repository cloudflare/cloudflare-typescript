// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ServicesAPI from './services';
import { BaseServices, Services } from './services';

export class BaseDirectory extends APIResource {
  static override readonly _key: readonly ['connectivity', 'directory'] = Object.freeze([
    'connectivity',
    'directory',
  ] as const);
}
export class Directory extends BaseDirectory {
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);
}

Directory.Services = Services;
Directory.BaseServices = BaseServices;

export declare namespace Directory {
  export { Services as Services, BaseServices as BaseServices };
}
