// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EndpointHealthchecksAPI from './endpoint-healthchecks';
import {
  EndpointHealthcheck,
  EndpointHealthcheckCreateParams,
  EndpointHealthcheckCreateResponse,
  EndpointHealthcheckDeleteParams,
  EndpointHealthcheckDeleteResponse,
  EndpointHealthcheckGetParams,
  EndpointHealthcheckGetResponse,
  EndpointHealthcheckListParams,
  EndpointHealthcheckListResponse,
  EndpointHealthcheckUpdateParams,
  EndpointHealthcheckUpdateResponse,
  EndpointHealthchecks,
} from './endpoint-healthchecks';
import * as TraceroutesAPI from './traceroutes';
import { Traceroute, TracerouteCreateParams, Traceroutes, TraceroutesSinglePage } from './traceroutes';

export class Diagnostics extends APIResource {
  traceroutes: TraceroutesAPI.Traceroutes = new TraceroutesAPI.Traceroutes(this._client);
  endpointHealthchecks: EndpointHealthchecksAPI.EndpointHealthchecks =
    new EndpointHealthchecksAPI.EndpointHealthchecks(this._client);
}

Diagnostics.Traceroutes = Traceroutes;
Diagnostics.TraceroutesSinglePage = TraceroutesSinglePage;
Diagnostics.EndpointHealthchecks = EndpointHealthchecks;

export declare namespace Diagnostics {
  export {
    Traceroutes as Traceroutes,
    type Traceroute as Traceroute,
    TraceroutesSinglePage as TraceroutesSinglePage,
    type TracerouteCreateParams as TracerouteCreateParams,
  };

  export {
    EndpointHealthchecks as EndpointHealthchecks,
    type EndpointHealthcheck as EndpointHealthcheck,
    type EndpointHealthcheckCreateResponse as EndpointHealthcheckCreateResponse,
    type EndpointHealthcheckUpdateResponse as EndpointHealthcheckUpdateResponse,
    type EndpointHealthcheckListResponse as EndpointHealthcheckListResponse,
    type EndpointHealthcheckDeleteResponse as EndpointHealthcheckDeleteResponse,
    type EndpointHealthcheckGetResponse as EndpointHealthcheckGetResponse,
    type EndpointHealthcheckCreateParams as EndpointHealthcheckCreateParams,
    type EndpointHealthcheckUpdateParams as EndpointHealthcheckUpdateParams,
    type EndpointHealthcheckListParams as EndpointHealthcheckListParams,
    type EndpointHealthcheckDeleteParams as EndpointHealthcheckDeleteParams,
    type EndpointHealthcheckGetParams as EndpointHealthcheckGetParams,
  };
}
