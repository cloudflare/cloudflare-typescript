// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OriginAPI from './origin';
import { BaseOrigin, Origin } from './origin';
import * as TLSAPI from './tls';
import { BaseTLS, TLS } from './tls';

export class BasePostQuantum extends APIResource {
  static override readonly _key: readonly ['radar', 'postQuantum'] = Object.freeze([
    'radar',
    'postQuantum',
  ] as const);
}
export class PostQuantum extends BasePostQuantum {
  origin: OriginAPI.Origin = new OriginAPI.Origin(this._client);
  tls: TLSAPI.TLS = new TLSAPI.TLS(this._client);
}

PostQuantum.Origin = Origin;
PostQuantum.BaseOrigin = BaseOrigin;
PostQuantum.TLS = TLS;
PostQuantum.BaseTLS = BaseTLS;

export declare namespace PostQuantum {
  export { Origin as Origin, BaseOrigin as BaseOrigin };

  export { TLS as TLS, BaseTLS as BaseTLS };
}
