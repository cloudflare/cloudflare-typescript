// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as OriginAPI from './origin';
import {
  Origin,
  OriginSummaryParams,
  OriginSummaryResponse,
  OriginTimeseriesGroupsParams,
  OriginTimeseriesGroupsResponse,
} from './origin';
import * as TLSAPI from './tls';
import { TLS, TLSSupportParams, TLSSupportResponse } from './tls';

export class PostQuantum extends APIResource {
  origin: OriginAPI.Origin = new OriginAPI.Origin(this._client);
  tls: TLSAPI.TLS = new TLSAPI.TLS(this._client);
}

PostQuantum.Origin = Origin;
PostQuantum.TLS = TLS;

export declare namespace PostQuantum {
  export {
    Origin as Origin,
    type OriginSummaryResponse as OriginSummaryResponse,
    type OriginTimeseriesGroupsResponse as OriginTimeseriesGroupsResponse,
    type OriginSummaryParams as OriginSummaryParams,
    type OriginTimeseriesGroupsParams as OriginTimeseriesGroupsParams,
  };

  export {
    TLS as TLS,
    type TLSSupportResponse as TLSSupportResponse,
    type TLSSupportParams as TLSSupportParams,
  };
}
