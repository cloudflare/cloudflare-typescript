// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as TLDsAPI from './tlds/tlds';
import { TLDGetParams, TLDGetResponse, TLDs } from './tlds/tlds';

export class Top extends APIResource {
  tlds: TLDsAPI.TLDs = new TLDsAPI.TLDs(this._client);
}

Top.TLDs = TLDs;

export declare namespace Top {
  export { TLDs as TLDs, type TLDGetResponse as TLDGetResponse, type TLDGetParams as TLDGetParams };
}
