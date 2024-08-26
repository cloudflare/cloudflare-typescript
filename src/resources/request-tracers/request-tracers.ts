// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Traces } from './traces';
import * as TracesAPI from './traces';

export class RequestTracers extends APIResource {
  traces: TracesAPI.Traces = new TracesAPI.Traces(this._client);
}

export namespace RequestTracers {
  export import Traces = TracesAPI.Traces;
  export import Trace = TracesAPI.Trace;
  export import TraceItem = TracesAPI.TraceItem;
  export import TraceCreateResponse = TracesAPI.TraceCreateResponse;
  export import TraceCreateParams = TracesAPI.TraceCreateParams;
}
