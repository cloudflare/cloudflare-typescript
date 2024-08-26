// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { V1 } from './v1/v1';
import { V2 } from './v2/v2';
import * as V1API from './v1/v1';
import * as V2API from './v2/v2';

export class Images extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
  v2: V2API.V2 = new V2API.V2(this._client);
}

export namespace Images {
  export import V1 = V1API.V1;
  export import Image = V1API.Image;
  export import V1ListResponse = V1API.V1ListResponse;
  export import V1DeleteResponse = V1API.V1DeleteResponse;
  export import V1ListResponsesV4PagePagination = V1API.V1ListResponsesV4PagePagination;
  export import V1CreateParams = V1API.V1CreateParams;
  export import V1ListParams = V1API.V1ListParams;
  export import V1DeleteParams = V1API.V1DeleteParams;
  export import V1EditParams = V1API.V1EditParams;
  export import V1GetParams = V1API.V1GetParams;
  export import V2 = V2API.V2;
  export import V2ListResponse = V2API.V2ListResponse;
  export import V2ListParams = V2API.V2ListParams;
}
