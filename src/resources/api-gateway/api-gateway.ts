// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConfigurationsAPI from './configurations';
import {
  BaseConfigurations,
  Configuration,
  ConfigurationGetParams,
  ConfigurationUpdateParams,
  Configurations,
} from './configurations';
import * as SchemasAPI from './schemas';
import { BaseSchemas, SchemaListParams, SchemaListResponse, Schemas } from './schemas';
import * as DiscoveryAPI from './discovery/discovery';
import {
  BaseDiscovery,
  Discovery,
  DiscoveryGetParams,
  DiscoveryGetResponse,
  DiscoveryOperation,
} from './discovery/discovery';
import * as ExpressionTemplateAPI from './expression-template/expression-template';
import { BaseExpressionTemplate, ExpressionTemplate } from './expression-template/expression-template';
import * as LabelsAPI from './labels/labels';
import {
  BaseLabels,
  LabelListParams,
  LabelListResponse,
  LabelListResponsesV4PagePaginationArray,
  Labels,
} from './labels/labels';
import * as OperationsAPI from './operations/operations';
import {
  APIShield,
  BaseOperations,
  OperationBulkCreateParams,
  OperationBulkCreateResponse,
  OperationBulkCreateResponsesSinglePage,
  OperationBulkDeleteParams,
  OperationBulkDeleteResponse,
  OperationCreateParams,
  OperationCreateResponse,
  OperationDeleteParams,
  OperationDeleteResponse,
  OperationGetParams,
  OperationGetResponse,
  OperationListParams,
  OperationListResponse,
  OperationListResponsesV4PagePaginationArray,
  Operations,
} from './operations/operations';
import * as SettingsAPI from './settings/settings';
import { BaseSettings, Settings } from './settings/settings';
import * as UserSchemasAPI from './user-schemas/user-schemas';
import {
  BaseUserSchemas,
  Message,
  OldPublicSchema,
  OldPublicSchemasV4PagePaginationArray,
  UserSchemaCreateParams,
  UserSchemaCreateResponse,
  UserSchemaDeleteParams,
  UserSchemaDeleteResponse,
  UserSchemaEditParams,
  UserSchemaGetParams,
  UserSchemaListParams,
  UserSchemas,
} from './user-schemas/user-schemas';

export class BaseAPIGateway extends APIResource {
  static override readonly _key: readonly ['apiGateway'] = Object.freeze(['apiGateway'] as const);
}
export class APIGateway extends BaseAPIGateway {
  configurations: ConfigurationsAPI.Configurations = new ConfigurationsAPI.Configurations(this._client);
  discovery: DiscoveryAPI.Discovery = new DiscoveryAPI.Discovery(this._client);
  labels: LabelsAPI.Labels = new LabelsAPI.Labels(this._client);
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  userSchemas: UserSchemasAPI.UserSchemas = new UserSchemasAPI.UserSchemas(this._client);
  expressionTemplate: ExpressionTemplateAPI.ExpressionTemplate = new ExpressionTemplateAPI.ExpressionTemplate(
    this._client,
  );
}

APIGateway.Configurations = Configurations;
APIGateway.BaseConfigurations = BaseConfigurations;
APIGateway.Discovery = Discovery;
APIGateway.BaseDiscovery = BaseDiscovery;
APIGateway.Labels = Labels;
APIGateway.BaseLabels = BaseLabels;
APIGateway.Operations = Operations;
APIGateway.BaseOperations = BaseOperations;
APIGateway.Schemas = Schemas;
APIGateway.BaseSchemas = BaseSchemas;
APIGateway.BaseSettings = BaseSettings;
APIGateway.UserSchemas = UserSchemas;
APIGateway.BaseUserSchemas = BaseUserSchemas;
APIGateway.ExpressionTemplate = ExpressionTemplate;
APIGateway.BaseExpressionTemplate = BaseExpressionTemplate;

export declare namespace APIGateway {
  export {
    Configurations as Configurations,
    BaseConfigurations as BaseConfigurations,
    type Configuration as Configuration,
    type ConfigurationUpdateParams as ConfigurationUpdateParams,
    type ConfigurationGetParams as ConfigurationGetParams,
  };

  export {
    Discovery as Discovery,
    BaseDiscovery as BaseDiscovery,
    type DiscoveryOperation as DiscoveryOperation,
    type DiscoveryGetResponse as DiscoveryGetResponse,
    type DiscoveryGetParams as DiscoveryGetParams,
  };

  export {
    Labels as Labels,
    BaseLabels as BaseLabels,
    type LabelListResponse as LabelListResponse,
    type LabelListResponsesV4PagePaginationArray as LabelListResponsesV4PagePaginationArray,
    type LabelListParams as LabelListParams,
  };

  export {
    Operations as Operations,
    BaseOperations as BaseOperations,
    type APIShield as APIShield,
    type OperationCreateResponse as OperationCreateResponse,
    type OperationListResponse as OperationListResponse,
    type OperationDeleteResponse as OperationDeleteResponse,
    type OperationBulkCreateResponse as OperationBulkCreateResponse,
    type OperationBulkDeleteResponse as OperationBulkDeleteResponse,
    type OperationGetResponse as OperationGetResponse,
    type OperationListResponsesV4PagePaginationArray as OperationListResponsesV4PagePaginationArray,
    type OperationBulkCreateResponsesSinglePage as OperationBulkCreateResponsesSinglePage,
    type OperationCreateParams as OperationCreateParams,
    type OperationListParams as OperationListParams,
    type OperationDeleteParams as OperationDeleteParams,
    type OperationBulkCreateParams as OperationBulkCreateParams,
    type OperationBulkDeleteParams as OperationBulkDeleteParams,
    type OperationGetParams as OperationGetParams,
  };

  export {
    Schemas as Schemas,
    BaseSchemas as BaseSchemas,
    type SchemaListResponse as SchemaListResponse,
    type SchemaListParams as SchemaListParams,
  };

  export { type Settings as Settings, BaseSettings as BaseSettings };

  export {
    UserSchemas as UserSchemas,
    BaseUserSchemas as BaseUserSchemas,
    type Message as Message,
    type OldPublicSchema as OldPublicSchema,
    type UserSchemaCreateResponse as UserSchemaCreateResponse,
    type UserSchemaDeleteResponse as UserSchemaDeleteResponse,
    type OldPublicSchemasV4PagePaginationArray as OldPublicSchemasV4PagePaginationArray,
    type UserSchemaCreateParams as UserSchemaCreateParams,
    type UserSchemaListParams as UserSchemaListParams,
    type UserSchemaDeleteParams as UserSchemaDeleteParams,
    type UserSchemaEditParams as UserSchemaEditParams,
    type UserSchemaGetParams as UserSchemaGetParams,
  };

  export { ExpressionTemplate as ExpressionTemplate, BaseExpressionTemplate as BaseExpressionTemplate };
}
