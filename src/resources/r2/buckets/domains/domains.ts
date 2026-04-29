// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CustomAPI from './custom';
import { BaseCustom, Custom } from './custom';
import * as ManagedAPI from './managed';
import { BaseManaged, Managed } from './managed';

export class BaseDomains extends APIResource {
  static override readonly _key: readonly ['r2', 'buckets', 'domains'] = Object.freeze([
    'r2',
    'buckets',
    'domains',
  ] as const);
}
export class Domains extends BaseDomains {
  custom: CustomAPI.Custom = new CustomAPI.Custom(this._client);
  managed: ManagedAPI.Managed = new ManagedAPI.Managed(this._client);
}

Domains.Custom = Custom;
Domains.BaseCustom = BaseCustom;
Domains.Managed = Managed;
Domains.BaseManaged = BaseManaged;

export declare namespace Domains {
  export { Custom as Custom, BaseCustom as BaseCustom };

  export { Managed as Managed, BaseManaged as BaseManaged };
}
