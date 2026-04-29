// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1/v1';
import { BaseV1, V1 } from './v1/v1';
import * as V2API from './v2/v2';
import { BaseV2, V2 } from './v2/v2';

export class BaseImages extends APIResource {
  static override readonly _key: readonly ['images'] = Object.freeze(['images'] as const);
}
export class Images extends BaseImages {
  v1: V1API.V1 = new V1API.V1(this._client);
  v2: V2API.V2 = new V2API.V2(this._client);
}

Images.V1 = V1;
Images.BaseV1 = BaseV1;
Images.V2 = V2;
Images.BaseV2 = BaseV2;

export declare namespace Images {
  export { V1 as V1, BaseV1 as BaseV1 };

  export { V2 as V2, BaseV2 as BaseV2 };
}
