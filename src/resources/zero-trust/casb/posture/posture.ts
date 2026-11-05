// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AssetSchemasAPI from './asset-schemas';
import {
  AssetSchemaGetParams,
  AssetSchemaGetResponse,
  AssetSchemaListParams,
  AssetSchemaListResponse,
  AssetSchemaListResponsesSinglePage,
  AssetSchemas,
  BaseAssetSchemas,
} from './asset-schemas';
import * as ContentAPI from './content';
import {
  BaseContent,
  Content,
  ContentExportParams,
  ContentExportResponse,
  ContentListParams,
  ContentListResponse,
  ContentListResponsesV4PagePaginationArray,
} from './content';
import * as ExportsAPI from './exports';
import {
  BaseExports,
  ExportGetParams,
  ExportGetResponse,
  ExportListParams,
  ExportListResponse,
  ExportListResponsesV4PagePaginationArray,
  Exports,
} from './exports';
import * as PoliciesAPI from './policies';
import {
  BasePolicies,
  Policies,
  PolicyCreateParams,
  PolicyCreateResponse,
  PolicyDeleteParams,
  PolicyDeleteResponse,
  PolicyGetParams,
  PolicyGetResponse,
  PolicyListParams,
  PolicyListResponse,
  PolicyListResponsesCursorPaginationAfter,
  PolicyUpdateParams,
  PolicyUpdateResponse,
} from './policies';
import * as FindingTypesAPI from './finding-types/finding-types';
import {
  BaseFindingTypes,
  FindingTypeCreateParams,
  FindingTypeCreateResponse,
  FindingTypeDeleteParams,
  FindingTypeGetParams,
  FindingTypeGetResponse,
  FindingTypeListParams,
  FindingTypeListResponse,
  FindingTypeListResponsesV4PagePaginationArray,
  FindingTypeUpdateParams,
  FindingTypeUpdateResponse,
  FindingTypeValidateParams,
  FindingTypeValidateResponse,
  FindingTypes,
} from './finding-types/finding-types';
import * as FindingsAPI from './findings/findings';
import {
  BaseFindings,
  FindingExportParams,
  FindingExportResponse,
  FindingGetParams,
  FindingGetResponse,
  FindingIgnoreParams,
  FindingIgnoreResponse,
  FindingListParams,
  FindingListResponse,
  FindingListResponsesV4PagePaginationArray,
  FindingResetSeverityParams,
  FindingResetSeverityResponse,
  FindingTuneSeverityParams,
  FindingTuneSeverityResponse,
  FindingUnignoreParams,
  FindingUnignoreResponse,
  Findings,
} from './findings/findings';
import * as RemediationsAPI from './remediations/remediations';
import { BaseRemediations, Remediations } from './remediations/remediations';
import * as WebhooksAPI from './webhooks/webhooks';
import {
  BaseWebhooks,
  WebhookCreateParams,
  WebhookCreateResponse,
  WebhookDeleteParams,
  WebhookDeleteResponse,
  WebhookEvaluateExistingParams,
  WebhookEvaluateExistingResponse,
  WebhookEvaluateParams,
  WebhookEvaluateResponse,
  WebhookGetParams,
  WebhookGetResponse,
  WebhookListParams,
  WebhookListResponse,
  WebhookListResponsesSinglePage,
  WebhookUpdateParams,
  WebhookUpdateResponse,
  Webhooks,
} from './webhooks/webhooks';

export class BasePosture extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb', 'posture'] = Object.freeze([
    'zeroTrust',
    'casb',
    'posture',
  ] as const);
}
export class Posture extends BasePosture {
  findings: FindingsAPI.Findings = new FindingsAPI.Findings(this._client);
  exports: ExportsAPI.Exports = new ExportsAPI.Exports(this._client);
  findingTypes: FindingTypesAPI.FindingTypes = new FindingTypesAPI.FindingTypes(this._client);
  assetSchemas: AssetSchemasAPI.AssetSchemas = new AssetSchemasAPI.AssetSchemas(this._client);
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  remediations: RemediationsAPI.Remediations = new RemediationsAPI.Remediations(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
}

Posture.Findings = Findings;
Posture.BaseFindings = BaseFindings;
Posture.Exports = Exports;
Posture.BaseExports = BaseExports;
Posture.FindingTypes = FindingTypes;
Posture.BaseFindingTypes = BaseFindingTypes;
Posture.AssetSchemas = AssetSchemas;
Posture.BaseAssetSchemas = BaseAssetSchemas;
Posture.Content = Content;
Posture.BaseContent = BaseContent;
Posture.Remediations = Remediations;
Posture.BaseRemediations = BaseRemediations;
Posture.Policies = Policies;
Posture.BasePolicies = BasePolicies;
Posture.Webhooks = Webhooks;
Posture.BaseWebhooks = BaseWebhooks;

export declare namespace Posture {
  export {
    Findings as Findings,
    BaseFindings as BaseFindings,
    type FindingListResponse as FindingListResponse,
    type FindingExportResponse as FindingExportResponse,
    type FindingGetResponse as FindingGetResponse,
    type FindingIgnoreResponse as FindingIgnoreResponse,
    type FindingResetSeverityResponse as FindingResetSeverityResponse,
    type FindingTuneSeverityResponse as FindingTuneSeverityResponse,
    type FindingUnignoreResponse as FindingUnignoreResponse,
    type FindingListResponsesV4PagePaginationArray as FindingListResponsesV4PagePaginationArray,
    type FindingListParams as FindingListParams,
    type FindingExportParams as FindingExportParams,
    type FindingGetParams as FindingGetParams,
    type FindingIgnoreParams as FindingIgnoreParams,
    type FindingResetSeverityParams as FindingResetSeverityParams,
    type FindingTuneSeverityParams as FindingTuneSeverityParams,
    type FindingUnignoreParams as FindingUnignoreParams,
  };

  export {
    Exports as Exports,
    BaseExports as BaseExports,
    type ExportListResponse as ExportListResponse,
    type ExportGetResponse as ExportGetResponse,
    type ExportListResponsesV4PagePaginationArray as ExportListResponsesV4PagePaginationArray,
    type ExportListParams as ExportListParams,
    type ExportGetParams as ExportGetParams,
  };

  export {
    FindingTypes as FindingTypes,
    BaseFindingTypes as BaseFindingTypes,
    type FindingTypeCreateResponse as FindingTypeCreateResponse,
    type FindingTypeUpdateResponse as FindingTypeUpdateResponse,
    type FindingTypeListResponse as FindingTypeListResponse,
    type FindingTypeGetResponse as FindingTypeGetResponse,
    type FindingTypeValidateResponse as FindingTypeValidateResponse,
    type FindingTypeListResponsesV4PagePaginationArray as FindingTypeListResponsesV4PagePaginationArray,
    type FindingTypeCreateParams as FindingTypeCreateParams,
    type FindingTypeUpdateParams as FindingTypeUpdateParams,
    type FindingTypeListParams as FindingTypeListParams,
    type FindingTypeDeleteParams as FindingTypeDeleteParams,
    type FindingTypeGetParams as FindingTypeGetParams,
    type FindingTypeValidateParams as FindingTypeValidateParams,
  };

  export {
    AssetSchemas as AssetSchemas,
    BaseAssetSchemas as BaseAssetSchemas,
    type AssetSchemaListResponse as AssetSchemaListResponse,
    type AssetSchemaGetResponse as AssetSchemaGetResponse,
    type AssetSchemaListResponsesSinglePage as AssetSchemaListResponsesSinglePage,
    type AssetSchemaListParams as AssetSchemaListParams,
    type AssetSchemaGetParams as AssetSchemaGetParams,
  };

  export {
    Content as Content,
    BaseContent as BaseContent,
    type ContentListResponse as ContentListResponse,
    type ContentExportResponse as ContentExportResponse,
    type ContentListResponsesV4PagePaginationArray as ContentListResponsesV4PagePaginationArray,
    type ContentListParams as ContentListParams,
    type ContentExportParams as ContentExportParams,
  };

  export { Remediations as Remediations, BaseRemediations as BaseRemediations };

  export {
    Policies as Policies,
    BasePolicies as BasePolicies,
    type PolicyCreateResponse as PolicyCreateResponse,
    type PolicyUpdateResponse as PolicyUpdateResponse,
    type PolicyListResponse as PolicyListResponse,
    type PolicyDeleteResponse as PolicyDeleteResponse,
    type PolicyGetResponse as PolicyGetResponse,
    type PolicyListResponsesCursorPaginationAfter as PolicyListResponsesCursorPaginationAfter,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
    type PolicyGetParams as PolicyGetParams,
  };

  export {
    Webhooks as Webhooks,
    BaseWebhooks as BaseWebhooks,
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookEvaluateResponse as WebhookEvaluateResponse,
    type WebhookEvaluateExistingResponse as WebhookEvaluateExistingResponse,
    type WebhookGetResponse as WebhookGetResponse,
    type WebhookListResponsesSinglePage as WebhookListResponsesSinglePage,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookDeleteParams as WebhookDeleteParams,
    type WebhookEvaluateParams as WebhookEvaluateParams,
    type WebhookEvaluateExistingParams as WebhookEvaluateExistingParams,
    type WebhookGetParams as WebhookGetParams,
  };
}
