// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { isRequestOptions } from '../../../../../core';
import { APIPromise } from '../../../../../core';
import * as Core from '../../../../../core';
import { Tlds } from './tlds/tlds';
import * as TldsAPI from './tlds/tlds';

export class Top extends APIResource {
  tlds: TldsAPI.Tlds = new TldsAPI.Tlds(this._client);
}

export namespace Top {
  export import Tlds = TldsAPI.Tlds;
  export import TldGetResponse = TldsAPI.TldGetResponse;
  export import TldGetParams = TldsAPI.TldGetParams;
}
