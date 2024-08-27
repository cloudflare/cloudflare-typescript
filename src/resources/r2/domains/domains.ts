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
  export import CustomDeleteResponse = CustomAPI.CustomDeleteResponse;
  export import CustomGetResponse = CustomAPI.CustomGetResponse;
  export import CustomCreateParams = CustomAPI.CustomCreateParams;
  export import CustomUpdateParams = CustomAPI.CustomUpdateParams;
  export import CustomDeleteParams = CustomAPI.CustomDeleteParams;
  export import CustomGetParams = CustomAPI.CustomGetParams;
  export import Managed = ManagedAPI.Managed;
  export import ManagedUpdateResponse = ManagedAPI.ManagedUpdateResponse;
  export import ManagedGetResponse = ManagedAPI.ManagedGetResponse;
  export import ManagedUpdateParams = ManagedAPI.ManagedUpdateParams;
  export import ManagedGetParams = ManagedAPI.ManagedGetParams;
}
