// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as BytimesAPI from './bytimes';
import { Bytimes } from './bytimes';

export class Reports extends APIResource {
  bytimes: BytimesAPI.Bytimes = new BytimesAPI.Bytimes(this._client);
}

Reports.Bytimes = Bytimes;

export declare namespace Reports {
  export { Bytimes as Bytimes };
}
