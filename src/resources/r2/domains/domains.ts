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
  export import CustomCreateResponse = CustomAPI.CustomCreateResponse;
  export import CustomUpdateResponse = CustomAPI.CustomUpdateResponse;
  export import CustomListResponse = CustomAPI.CustomListResponse;
  export import CustomDeleteResponse = CustomAPI.CustomDeleteResponse;
  export import CustomCreateParams = CustomAPI.CustomCreateParams;
  export import CustomUpdateParams = CustomAPI.CustomUpdateParams;
  export import CustomListParams = CustomAPI.CustomListParams;
  export import CustomDeleteParams = CustomAPI.CustomDeleteParams;
  export import Managed = ManagedAPI.Managed;
  export import ManagedUpdateResponse = ManagedAPI.ManagedUpdateResponse;
  export import ManagedListResponse = ManagedAPI.ManagedListResponse;
  export import ManagedUpdateParams = ManagedAPI.ManagedUpdateParams;
  export import ManagedListParams = ManagedAPI.ManagedListParams;
}
