// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ScreenshotAPI from './screenshot';
import { type Response } from '../../_shims/index';

export class Screenshot extends APIResource {
  /**
   * Get scan's screenshot by resolution (desktop/mobile/tablet).
   */
  get(
    accountId: string,
    scanId: string,
    query?: ScreenshotGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response>;
  get(accountId: string, scanId: string, options?: Core.RequestOptions): Core.APIPromise<Response>;
  get(
    accountId: string,
    scanId: string,
    query: ScreenshotGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(query)) {
      return this.get(accountId, scanId, {}, query);
    }
    return this._client.get(`/accounts/${accountId}/urlscanner/v2/screenshots/${scanId}.png`, {
      query,
      ...options,
      __binaryResponse: true,
    });
  }
}

export interface ScreenshotGetParams {
  /**
   * Target device type.
   */
  resolution?: 'desktop' | 'mobile' | 'tablet';
}

export namespace Screenshot {
  export import ScreenshotGetParams = ScreenshotAPI.ScreenshotGetParams;
}
