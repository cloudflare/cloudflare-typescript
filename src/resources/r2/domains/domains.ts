// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as CustomAPI from './custom';
import * as ManagedAPI from './managed';

export class Domains extends APIResource {
  custom: CustomAPI.Custom = new CustomAPI.Custom(this._client);
  managed: ManagedAPI.Managed = new ManagedAPI.Managed(this._client);
}

export namespace Domains {
  export import Custom = CustomAPI.Custom;
  export type CustomCreateResponse = CustomAPI.CustomCreateResponse;
  export type CustomUpdateResponse = CustomAPI.CustomUpdateResponse;
  export type CustomListResponse = CustomAPI.CustomListResponse;
  export type CustomDeleteResponse = CustomAPI.CustomDeleteResponse;
  export type CustomCreateParams = CustomAPI.CustomCreateParams;
  export type CustomUpdateParams = CustomAPI.CustomUpdateParams;
  export type CustomListParams = CustomAPI.CustomListParams;
  export type CustomDeleteParams = CustomAPI.CustomDeleteParams;
  export import Managed = ManagedAPI.Managed;
  export type ManagedUpdateResponse = ManagedAPI.ManagedUpdateResponse;
  export type ManagedListResponse = ManagedAPI.ManagedListResponse;
  export type ManagedUpdateParams = ManagedAPI.ManagedUpdateParams;
  export type ManagedListParams = ManagedAPI.ManagedListParams;
}
