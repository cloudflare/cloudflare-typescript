// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as V1sAPI from 'cloudflare/resources/images/v1s/v1s';
import * as V2sAPI from 'cloudflare/resources/images/v2s/v2s';

export class Images extends APIResource {
  v1s: V1sAPI.V1s = new V1sAPI.V1s(this._client);
  v2s: V2sAPI.V2s = new V2sAPI.V2s(this._client);
}

export namespace Images {
  export import V1s = V1sAPI.V1s;
  export import V1UpdateResponse = V1sAPI.V1UpdateResponse;
  export import V1DeleteResponse = V1sAPI.V1DeleteResponse;
  export import V1CloudflareImagesListImagesResponse = V1sAPI.V1CloudflareImagesListImagesResponse;
  export import V1CloudflareImagesUploadAnImageViaURLResponse = V1sAPI.V1CloudflareImagesUploadAnImageViaURLResponse;
  export import V1GetResponse = V1sAPI.V1GetResponse;
  export import V1UpdateParams = V1sAPI.V1UpdateParams;
  export import V1CloudflareImagesListImagesParams = V1sAPI.V1CloudflareImagesListImagesParams;
  export import V1CloudflareImagesUploadAnImageViaURLParams = V1sAPI.V1CloudflareImagesUploadAnImageViaURLParams;
  export import V2s = V2sAPI.V2s;
  export import ImagesImagesListResponseV2 = V2sAPI.ImagesImagesListResponseV2;
  export import V2ListResponse = V2sAPI.V2ListResponse;
  export import V2ListParams = V2sAPI.V2ListParams;
}
