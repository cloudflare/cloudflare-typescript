// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseImages extends APIResource {
  static override readonly _key: readonly ['containers', 'images'] = Object.freeze([
    'containers',
    'images',
  ] as const);

  /**
   * Idempotently starts or observes preparation of the runtime artifacts required to
   * run one digest-pinned managed container image on Cloudflare's network. Returns
   * 202 while durable preparation continues and 200 when the image is ready or
   * preparation has reached a terminal error.
   *
   * @example
   * ```ts
   * const response = await client.containers.images.prepare({
   *   account_id: 'account-123',
   *   image: 'image',
   * });
   * ```
   */
  prepare(params: ImagePrepareParams, options?: RequestOptions): APIPromise<ImagePrepareResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/containers/image-preparations`, {
        body,
        ...options,
      }) as APIPromise<{ result: ImagePrepareResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Images extends BaseImages {}

/**
 * Durable preparation state for a container image.
 */
export interface ImagePrepareResponse {
  /**
   * Image url.
   */
  image: string;

  /**
   * Current durable preparation state for a container image.
   */
  status: 'pending' | 'ready' | 'error';

  /**
   * Digest of the prepared runtime artifact when status is ready.
   */
  artifact_digest?: string;

  /**
   * Human-readable pending or terminal error detail.
   */
  reason?: string;
}

export interface ImagePrepareParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;

  /**
   * Body param: Image url.
   */
  image: string;
}

export declare namespace Images {
  export { type ImagePrepareResponse as ImagePrepareResponse, type ImagePrepareParams as ImagePrepareParams };
}
