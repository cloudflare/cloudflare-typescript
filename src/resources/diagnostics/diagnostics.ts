// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TraceroutesAPI from './traceroutes';
import { Traceroute, TracerouteCreateParams, Traceroutes, TraceroutesSinglePage } from './traceroutes';

export class Diagnostics extends APIResource {
  traceroutes: TraceroutesAPI.Traceroutes = new TraceroutesAPI.Traceroutes(this._client);
}

Diagnostics.Traceroutes = Traceroutes;

export declare namespace Diagnostics {
  export {
    Traceroutes as Traceroutes,
    type Traceroute as Traceroute,
    type TraceroutesSinglePage as TraceroutesSinglePage,
    type TracerouteCreateParams as TracerouteCreateParams,
  };
}
