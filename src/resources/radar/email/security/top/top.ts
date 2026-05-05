// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as TLDsAPI from './tlds/tlds';
import { BaseTLDs, TLDGetParams, TLDGetResponse, TLDs } from './tlds/tlds';

export class BaseTop extends APIResource {
  static override readonly _key: readonly ['radar', 'email', 'security', 'top'] = Object.freeze([
    'radar',
    'email',
    'security',
    'top',
  ] as const);
}
export class Top extends BaseTop {
  tlds: TLDsAPI.TLDs = new TLDsAPI.TLDs(this._client);
}

Top.TLDs = TLDs;
Top.BaseTLDs = BaseTLDs;

export declare namespace Top {
  export {
    TLDs as TLDs,
    BaseTLDs as BaseTLDs,
    type TLDGetResponse as TLDGetResponse,
    type TLDGetParams as TLDGetParams,
  };
}
