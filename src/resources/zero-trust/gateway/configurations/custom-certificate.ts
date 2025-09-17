// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ConfigurationsAPI from './configurations';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class CustomCertificate extends APIResource {
  /**
   * Retrieve the current Zero Trust certificate configuration.
   *
   * @deprecated
   */
  get(
    params: CustomCertificateGetParams,
    options?: RequestOptions,
  ): APIPromise<ConfigurationsAPI.CustomCertificateSettings | null> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/gateway/configuration/custom_certificate`, options);
  }
}

export interface CustomCertificateGetParams {
  account_id: string;
}

export declare namespace CustomCertificate {
  export { type CustomCertificateGetParams as CustomCertificateGetParams };
}
