// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as V1API from './v1/v1';
import * as V2API from './v2/v2';

export class Images extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
  v2: V2API.V2 = new V2API.V2(this._client);
}

export namespace Images {
  export import V1 = V1API.V1;
  export type Image = V1API.Image;
  export type V1ListResponse = V1API.V1ListResponse;
  export type V1DeleteResponse = V1API.V1DeleteResponse;
  export import V1ListResponsesV4PagePagination = V1API.V1ListResponsesV4PagePagination;
  export type V1CreateParams = V1API.V1CreateParams;
  export type V1ListParams = V1API.V1ListParams;
  export type V1DeleteParams = V1API.V1DeleteParams;
  export type V1EditParams = V1API.V1EditParams;
  export type V1GetParams = V1API.V1GetParams;
  export import V2 = V2API.V2;
  export type V2ListResponse = V2API.V2ListResponse;
  export type V2ListParams = V2API.V2ListParams;
}
