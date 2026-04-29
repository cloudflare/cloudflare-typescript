// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as PercentilesAPI from './percentiles';
import { Percentiles } from './percentiles';

export class HTTPTests extends APIResource {
  percentiles: PercentilesAPI.Percentiles = new PercentilesAPI.Percentiles(this._client);
}

HTTPTests.Percentiles = Percentiles;

export declare namespace HTTPTests {
  export { Percentiles as Percentiles };
}
