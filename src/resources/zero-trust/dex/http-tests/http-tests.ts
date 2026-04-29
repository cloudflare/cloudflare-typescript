// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PercentilesAPI from './percentiles';
import { BasePercentiles, Percentiles } from './percentiles';

export class BaseHTTPTests extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dex', 'httpTests'] = Object.freeze([
    'zeroTrust',
    'dex',
    'httpTests',
  ] as const);
}
export class HTTPTests extends BaseHTTPTests {
  percentiles: PercentilesAPI.Percentiles = new PercentilesAPI.Percentiles(this._client);
}

HTTPTests.Percentiles = Percentiles;
HTTPTests.BasePercentiles = BasePercentiles;

export declare namespace HTTPTests {
  export { Percentiles as Percentiles, BasePercentiles as BasePercentiles };
}
