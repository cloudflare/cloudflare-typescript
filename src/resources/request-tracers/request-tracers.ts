// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TracesAPI from './traces';
import { BaseTraces, Traces } from './traces';

export class BaseRequestTracers extends APIResource {
  static override readonly _key: readonly ['requestTracers'] = Object.freeze(['requestTracers'] as const);
}
export class RequestTracers extends BaseRequestTracers {
  traces: TracesAPI.Traces = new TracesAPI.Traces(this._client);
}

RequestTracers.Traces = Traces;
RequestTracers.BaseTraces = BaseTraces;

export declare namespace RequestTracers {
  export { Traces as Traces, BaseTraces as BaseTraces };
}
