// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TracesAPI from './traces';
import { Traces } from './traces';

export class RequestTracers extends APIResource {
  traces: TracesAPI.Traces = new TracesAPI.Traces(this._client);
}

RequestTracers.Traces = Traces;

export declare namespace RequestTracers {
  export { Traces as Traces };
}
