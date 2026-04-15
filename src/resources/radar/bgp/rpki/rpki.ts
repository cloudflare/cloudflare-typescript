// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ASPAAPI from './aspa';
import {
  ASPA,
  ASPAChangesParams,
  ASPAChangesResponse,
  ASPASnapshotParams,
  ASPASnapshotResponse,
  ASPATimeseriesParams,
  ASPATimeseriesResponse,
  BaseASPA,
} from './aspa';

export class BaseRPKI extends APIResource {
  static override readonly _key: readonly ['radar', 'bgp', 'rpki'] = Object.freeze([
    'radar',
    'bgp',
    'rpki',
  ] as const);
}
export class RPKI extends BaseRPKI {
  aspa: ASPAAPI.ASPA = new ASPAAPI.ASPA(this._client);
}

RPKI.ASPA = ASPA;
RPKI.BaseASPA = BaseASPA;

export declare namespace RPKI {
  export {
    ASPA as ASPA,
    BaseASPA as BaseASPA,
    type ASPAChangesResponse as ASPAChangesResponse,
    type ASPASnapshotResponse as ASPASnapshotResponse,
    type ASPATimeseriesResponse as ASPATimeseriesResponse,
    type ASPAChangesParams as ASPAChangesParams,
    type ASPASnapshotParams as ASPASnapshotParams,
    type ASPATimeseriesParams as ASPATimeseriesParams,
  };
}
