// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ASPAAPI from './aspa';
import {
  ASPA,
  ASPAChangesParams,
  ASPAChangesResponse,
  ASPASnapshotParams,
  ASPASnapshotResponse,
  ASPATimeseriesParams,
  ASPATimeseriesResponse,
} from './aspa';

export class RPKI extends APIResource {
  aspa: ASPAAPI.ASPA = new ASPAAPI.ASPA(this._client);
}

RPKI.ASPA = ASPA;

export declare namespace RPKI {
  export {
    ASPA as ASPA,
    type ASPAChangesResponse as ASPAChangesResponse,
    type ASPASnapshotResponse as ASPASnapshotResponse,
    type ASPATimeseriesResponse as ASPATimeseriesResponse,
    type ASPAChangesParams as ASPAChangesParams,
    type ASPASnapshotParams as ASPASnapshotParams,
    type ASPATimeseriesParams as ASPATimeseriesParams,
  };
}
