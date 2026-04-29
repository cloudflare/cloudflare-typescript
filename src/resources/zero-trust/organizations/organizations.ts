// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as DOHAPI from './doh';
import { DOH } from './doh';

export class Organizations extends APIResource {
  doh: DOHAPI.DOH = new DOHAPI.DOH(this._client);
}

Organizations.DOH = DOH;

export declare namespace Organizations {
  export { DOH as DOH };
}
