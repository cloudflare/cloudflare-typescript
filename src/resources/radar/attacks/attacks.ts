// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Layer3 } from './layer3/layer3';
import { Layer7 } from './layer7/layer7';
import * as Layer3API from './layer3/layer3';
import * as Layer7API from './layer7/layer7';

export class Attacks extends APIResource {
  layer3: Layer3API.Layer3 = new Layer3API.Layer3(this._client);
  layer7: Layer7API.Layer7 = new Layer7API.Layer7(this._client);
}

export namespace Attacks {
  export import Layer3 = Layer3API.Layer3;
  export import Layer3TimeseriesResponse = Layer3API.Layer3TimeseriesResponse;
  export import Layer3TimeseriesParams = Layer3API.Layer3TimeseriesParams;
  export import Layer7 = Layer7API.Layer7;
  export import Layer7TimeseriesResponse = Layer7API.Layer7TimeseriesResponse;
  export import Layer7TimeseriesParams = Layer7API.Layer7TimeseriesParams;
}
