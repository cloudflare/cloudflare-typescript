// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ConfigurationsAPI from './configurations';
import * as SchemasAPI from './schemas';
import * as DiscoveryAPI from './discovery/discovery';
import * as ExpressionTemplateAPI from './expression-template/expression-template';
import * as OperationsAPI from './operations/operations';
import * as SettingsAPI from './settings/settings';
import * as UserSchemasAPI from './user-schemas/user-schemas';

export class APIGateway extends APIResource {
  configurations: ConfigurationsAPI.Configurations = new ConfigurationsAPI.Configurations(this._client);
  discovery: DiscoveryAPI.Discovery = new DiscoveryAPI.Discovery(this._client);
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);
  schemas: SchemasAPI.Schemas = new SchemasAPI.Schemas(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  userSchemas: UserSchemasAPI.UserSchemas = new UserSchemasAPI.UserSchemas(this._client);
  expressionTemplate: ExpressionTemplateAPI.ExpressionTemplate = new ExpressionTemplateAPI.ExpressionTemplate(
    this._client,
  );
}

export namespace APIGateway {
  export import Configurations = ConfigurationsAPI.Configurations;
  export type Configuration = ConfigurationsAPI.Configuration;
  export type ConfigurationUpdateResponse = ConfigurationsAPI.ConfigurationUpdateResponse;
  export type ConfigurationUpdateParams = ConfigurationsAPI.ConfigurationUpdateParams;
  export type ConfigurationGetParams = ConfigurationsAPI.ConfigurationGetParams;
  export import Discovery = DiscoveryAPI.Discovery;
  export type DiscoveryOperation = DiscoveryAPI.DiscoveryOperation;
  export type DiscoveryGetResponse = DiscoveryAPI.DiscoveryGetResponse;
  export type DiscoveryGetParams = DiscoveryAPI.DiscoveryGetParams;
  export import Operations = OperationsAPI.Operations;
  export type APIShield = OperationsAPI.APIShield;
  export type OperationCreateResponse = OperationsAPI.OperationCreateResponse;
  export type OperationListResponse = OperationsAPI.OperationListResponse;
  export type OperationDeleteResponse = OperationsAPI.OperationDeleteResponse;
  export type OperationGetResponse = OperationsAPI.OperationGetResponse;
  export import OperationListResponsesV4PagePaginationArray = OperationsAPI.OperationListResponsesV4PagePaginationArray;
  export type OperationCreateParams = OperationsAPI.OperationCreateParams;
  export type OperationListParams = OperationsAPI.OperationListParams;
  export type OperationDeleteParams = OperationsAPI.OperationDeleteParams;
  export type OperationGetParams = OperationsAPI.OperationGetParams;
  export import Schemas = SchemasAPI.Schemas;
  export type SchemaListResponse = SchemasAPI.SchemaListResponse;
  export type SchemaListParams = SchemasAPI.SchemaListParams;
  export import Settings = SettingsAPI.Settings;
  export import UserSchemas = UserSchemasAPI.UserSchemas;
  export type Message = UserSchemasAPI.Message;
  export type PublicSchema = UserSchemasAPI.PublicSchema;
  export type SchemaUpload = UserSchemasAPI.SchemaUpload;
  export type UserSchemaDeleteResponse = UserSchemasAPI.UserSchemaDeleteResponse;
  export import PublicSchemasV4PagePaginationArray = UserSchemasAPI.PublicSchemasV4PagePaginationArray;
  export type UserSchemaCreateParams = UserSchemasAPI.UserSchemaCreateParams;
  export type UserSchemaListParams = UserSchemasAPI.UserSchemaListParams;
  export type UserSchemaDeleteParams = UserSchemasAPI.UserSchemaDeleteParams;
  export type UserSchemaEditParams = UserSchemasAPI.UserSchemaEditParams;
  export type UserSchemaGetParams = UserSchemasAPI.UserSchemaGetParams;
  export import ExpressionTemplate = ExpressionTemplateAPI.ExpressionTemplate;
}
