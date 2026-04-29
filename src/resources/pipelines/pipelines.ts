// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SinksAPI from './sinks';
import { BaseSinks, Sinks } from './sinks';
import * as StreamsAPI from './streams';
import { BaseStreams, Streams } from './streams';

export class BasePipelines extends APIResource {
  static override readonly _key: readonly ['pipelines'] = Object.freeze(['pipelines'] as const);
}
export class Pipelines extends BasePipelines {
  sinks: SinksAPI.Sinks = new SinksAPI.Sinks(this._client);
  streams: StreamsAPI.Streams = new StreamsAPI.Streams(this._client);
}

Pipelines.Sinks = Sinks;
Pipelines.BaseSinks = BaseSinks;
Pipelines.Streams = Streams;
Pipelines.BaseStreams = BaseStreams;

export declare namespace Pipelines {
  export { Sinks as Sinks, BaseSinks as BaseSinks };

  export { Streams as Streams, BaseStreams as BaseStreams };
}
