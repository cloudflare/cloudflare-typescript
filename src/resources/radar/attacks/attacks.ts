// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Layer3API from './layer3/layer3';
import { BaseLayer3, Layer3 } from './layer3/layer3';
import * as Layer7API from './layer7/layer7';
import { BaseLayer7, Layer7 } from './layer7/layer7';

export class BaseAttacks extends APIResource {
  static override readonly _key: readonly ['radar', 'attacks'] = Object.freeze(['radar', 'attacks'] as const);
}
export class Attacks extends BaseAttacks {
  layer3: Layer3API.Layer3 = new Layer3API.Layer3(this._client);
  layer7: Layer7API.Layer7 = new Layer7API.Layer7(this._client);
}

Attacks.Layer3 = Layer3;
Attacks.BaseLayer3 = BaseLayer3;
Attacks.Layer7 = Layer7;
Attacks.BaseLayer7 = BaseLayer7;

export declare namespace Attacks {
  export { Layer3 as Layer3, BaseLayer3 as BaseLayer3 };

  export { Layer7 as Layer7, BaseLayer7 as BaseLayer7 };
}
