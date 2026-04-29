// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SinksAPI from './sinks';
import { Sinks } from './sinks';
import * as StreamsAPI from './streams';
import { Streams } from './streams';

export class Pipelines extends APIResource {
  sinks: SinksAPI.Sinks = new SinksAPI.Sinks(this._client);
  streams: StreamsAPI.Streams = new StreamsAPI.Streams(this._client);
}

Pipelines.Sinks = Sinks;
Pipelines.Streams = Streams;

export declare namespace Pipelines {
  export { Sinks as Sinks };

  export { Streams as Streams };
}
