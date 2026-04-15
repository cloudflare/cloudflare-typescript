// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ConfigurationsAPI from './configurations';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseCustomCertificate extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'gateway', 'configurations', 'customCertificate'] =
    Object.freeze(['zeroTrust', 'gateway', 'configurations', 'customCertificate'] as const);

  /**
   * Retrieve the current Zero Trust certificate configuration.
   *
   * @deprecated
   */
  get(
    params: CustomCertificateGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConfigurationsAPI.CustomCertificateSettings | null> {
    const { account_id = this._client.accountID } = params ?? {};
    return this._client.get(path`/accounts/${account_id}/gateway/configuration/custom_certificate`, options);
  }
}
export class CustomCertificate extends BaseCustomCertificate {}

export interface CustomCertificateGetParams {
  account_id?: string;
}

export declare namespace CustomCertificate {
  export { type CustomCertificateGetParams as CustomCertificateGetParams };
}
