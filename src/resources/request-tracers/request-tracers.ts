// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TracesAPI from './traces';

export class RequestTracers extends APIResource {
  traces: TracesAPI.Traces = new TracesAPI.Traces(this._client);
}

export namespace RequestTracers {
  export import Traces = TracesAPI.Traces;
  export type Trace = TracesAPI.Trace;
  export type TraceItem = TracesAPI.TraceItem;
  export type TraceCreateResponse = TracesAPI.TraceCreateResponse;
  export type TraceCreateParams = TracesAPI.TraceCreateParams;
}
