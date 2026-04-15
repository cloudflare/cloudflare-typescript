// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CustomAPI from './custom';
import {
  BaseCustom,
  Custom,
  CustomCreateParams,
  CustomCreateResponse,
  CustomDeleteParams,
  CustomDeleteResponse,
  CustomGetParams,
  CustomGetResponse,
  CustomListParams,
  CustomListResponse,
  CustomUpdateParams,
  CustomUpdateResponse,
} from './custom';
import * as ManagedAPI from './managed';
import {
  BaseManaged,
  Managed,
  ManagedListParams,
  ManagedListResponse,
  ManagedUpdateParams,
  ManagedUpdateResponse,
} from './managed';

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
  export {
    Custom as Custom,
    BaseCustom as BaseCustom,
    type CustomCreateResponse as CustomCreateResponse,
    type CustomUpdateResponse as CustomUpdateResponse,
    type CustomListResponse as CustomListResponse,
    type CustomDeleteResponse as CustomDeleteResponse,
    type CustomGetResponse as CustomGetResponse,
    type CustomCreateParams as CustomCreateParams,
    type CustomUpdateParams as CustomUpdateParams,
    type CustomListParams as CustomListParams,
    type CustomDeleteParams as CustomDeleteParams,
    type CustomGetParams as CustomGetParams,
  };

  export {
    Managed as Managed,
    BaseManaged as BaseManaged,
    type ManagedUpdateResponse as ManagedUpdateResponse,
    type ManagedListResponse as ManagedListResponse,
    type ManagedUpdateParams as ManagedUpdateParams,
    type ManagedListParams as ManagedListParams,
  };
}
