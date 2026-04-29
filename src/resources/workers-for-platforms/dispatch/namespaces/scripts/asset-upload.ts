// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';

export class BaseAssetUpload extends APIResource {
  static override readonly _key: readonly [
    'workersForPlatforms',
    'dispatch',
    'namespaces',
    'scripts',
    'assetUpload',
  ] = Object.freeze(['workersForPlatforms', 'dispatch', 'namespaces', 'scripts', 'assetUpload'] as const);
}
export class AssetUpload extends BaseAssetUpload {}
