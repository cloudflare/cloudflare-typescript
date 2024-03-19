// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as BytimesAPI from 'cloudflare/resources/dns/analytics/reports/bytimes';

export class Reports extends APIResource {
  bytimes: BytimesAPI.Bytimes = new BytimesAPI.Bytimes(this._client);
}

export namespace Reports {
  export import Bytimes = BytimesAPI.Bytimes;
}
