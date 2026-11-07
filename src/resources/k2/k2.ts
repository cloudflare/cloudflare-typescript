// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StreamsAPI from './streams/streams';
import {
  BaseStreams,
  StreamCreateParams,
  StreamCreateResponse,
  StreamDeleteParams,
  StreamDeleteResponse,
  StreamGetParams,
  StreamGetResponse,
  StreamListParams,
  StreamListResponse,
  StreamListResponsesV4PagePaginationArray,
  StreamUpdateParams,
  StreamUpdateResponse,
  Streams,
} from './streams/streams';

export class BaseK2 extends APIResource {
  static override readonly _key: readonly ['k2'] = Object.freeze(['k2'] as const);
}
export class K2 extends BaseK2 {
  streams: StreamsAPI.Streams = new StreamsAPI.Streams(this._client);
}

K2.Streams = Streams;
K2.BaseStreams = BaseStreams;

export declare namespace K2 {
  export {
    Streams as Streams,
    BaseStreams as BaseStreams,
    type StreamCreateResponse as StreamCreateResponse,
    type StreamUpdateResponse as StreamUpdateResponse,
    type StreamListResponse as StreamListResponse,
    type StreamDeleteResponse as StreamDeleteResponse,
    type StreamGetResponse as StreamGetResponse,
    type StreamListResponsesV4PagePaginationArray as StreamListResponsesV4PagePaginationArray,
    type StreamCreateParams as StreamCreateParams,
    type StreamUpdateParams as StreamUpdateParams,
    type StreamListParams as StreamListParams,
    type StreamDeleteParams as StreamDeleteParams,
    type StreamGetParams as StreamGetParams,
  };
}
