// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EndpointHealthchecksAPI from './endpoint-healthchecks';
import {
  BaseEndpointHealthchecks,
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
import {
  BaseTraceroutes,
  Traceroute,
  TracerouteCreateParams,
  Traceroutes,
  TraceroutesSinglePage,
} from './traceroutes';

export class BaseDiagnostics extends APIResource {
  static override readonly _key: readonly ['diagnostics'] = Object.freeze(['diagnostics'] as const);
}
export class Diagnostics extends BaseDiagnostics {
  traceroutes: TraceroutesAPI.Traceroutes = new TraceroutesAPI.Traceroutes(this._client);
  endpointHealthchecks: EndpointHealthchecksAPI.EndpointHealthchecks =
    new EndpointHealthchecksAPI.EndpointHealthchecks(this._client);
}

Diagnostics.Traceroutes = Traceroutes;
Diagnostics.BaseTraceroutes = BaseTraceroutes;
Diagnostics.EndpointHealthchecks = EndpointHealthchecks;
Diagnostics.BaseEndpointHealthchecks = BaseEndpointHealthchecks;

export declare namespace Diagnostics {
  export {
    Traceroutes as Traceroutes,
    BaseTraceroutes as BaseTraceroutes,
    type Traceroute as Traceroute,
    type TraceroutesSinglePage as TraceroutesSinglePage,
    type TracerouteCreateParams as TracerouteCreateParams,
  };

  export {
    EndpointHealthchecks as EndpointHealthchecks,
    BaseEndpointHealthchecks as BaseEndpointHealthchecks,
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
