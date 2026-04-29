// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as FullAPI from './full';
import { Full } from './full';

export class Configs extends APIResource {
  full: FullAPI.Full = new FullAPI.Full(this._client);
}

Configs.Full = Full;

export declare namespace Configs {
  export { Full as Full };
}
