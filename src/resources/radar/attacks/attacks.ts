// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Layer3API from './layer3/layer3';
import {
  Layer3,
  Layer3SummaryV2Params,
  Layer3SummaryV2Response,
  Layer3TimeseriesGroupsV2Params,
  Layer3TimeseriesGroupsV2Response,
  Layer3TimeseriesParams,
  Layer3TimeseriesResponse,
} from './layer3/layer3';
import * as Layer7API from './layer7/layer7';
import {
  Layer7,
  Layer7SummaryV2Params,
  Layer7SummaryV2Response,
  Layer7TimeseriesGroupsV2Params,
  Layer7TimeseriesGroupsV2Response,
  Layer7TimeseriesParams,
  Layer7TimeseriesResponse,
} from './layer7/layer7';

export class Attacks extends APIResource {
  layer3: Layer3API.Layer3 = new Layer3API.Layer3(this._client);
  layer7: Layer7API.Layer7 = new Layer7API.Layer7(this._client);
}

Attacks.Layer3 = Layer3;
Attacks.Layer7 = Layer7;

export declare namespace Attacks {
  export {
    Layer3 as Layer3,
    type Layer3SummaryV2Response as Layer3SummaryV2Response,
    type Layer3TimeseriesResponse as Layer3TimeseriesResponse,
    type Layer3TimeseriesGroupsV2Response as Layer3TimeseriesGroupsV2Response,
    type Layer3SummaryV2Params as Layer3SummaryV2Params,
    type Layer3TimeseriesParams as Layer3TimeseriesParams,
    type Layer3TimeseriesGroupsV2Params as Layer3TimeseriesGroupsV2Params,
  };

  export {
    Layer7 as Layer7,
    type Layer7SummaryV2Response as Layer7SummaryV2Response,
    type Layer7TimeseriesResponse as Layer7TimeseriesResponse,
    type Layer7TimeseriesGroupsV2Response as Layer7TimeseriesGroupsV2Response,
    type Layer7SummaryV2Params as Layer7SummaryV2Params,
    type Layer7TimeseriesParams as Layer7TimeseriesParams,
    type Layer7TimeseriesGroupsV2Params as Layer7TimeseriesGroupsV2Params,
  };
}
