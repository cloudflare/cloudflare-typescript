// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TraceroutesAPI from './traceroutes';
import { Traceroute, TracerouteCreateParams, TracerouteCreateResponse, Traceroutes } from './traceroutes';

export class Diagnostics extends APIResource {
  traceroutes: TraceroutesAPI.Traceroutes = new TraceroutesAPI.Traceroutes(this._client);
}

Diagnostics.Traceroutes = Traceroutes;

export declare namespace Diagnostics {
  export {
    Traceroutes as Traceroutes,
    type Traceroute as Traceroute,
    type TracerouteCreateResponse as TracerouteCreateResponse,
    type TracerouteCreateParams as TracerouteCreateParams,
  };
}
