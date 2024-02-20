// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as SubmitsAPI from 'cloudflare/resources/brand-protection/submits';
import * as URLInfosAPI from 'cloudflare/resources/brand-protection/url-infos';

export class BrandProtection extends APIResource {
  submits: SubmitsAPI.Submits = new SubmitsAPI.Submits(this._client);
  urlInfos: URLInfosAPI.URLInfos = new URLInfosAPI.URLInfos(this._client);
}

export namespace BrandProtection {
  export import Submits = SubmitsAPI.Submits;
  export import SubmitCreateResponse = SubmitsAPI.SubmitCreateResponse;
  export import SubmitCreateParams = SubmitsAPI.SubmitCreateParams;
  export import URLInfos = URLInfosAPI.URLInfos;
  export import URLInfoGetResponse = URLInfosAPI.URLInfoGetResponse;
  export import URLInfoGetParams = URLInfosAPI.URLInfoGetParams;
}
