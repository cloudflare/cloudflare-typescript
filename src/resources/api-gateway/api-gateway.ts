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
  export import Configuration = ConfigurationsAPI.Configuration;
  export import ConfigurationUpdateResponse = ConfigurationsAPI.ConfigurationUpdateResponse;
  export import ConfigurationUpdateParams = ConfigurationsAPI.ConfigurationUpdateParams;
  export import ConfigurationGetParams = ConfigurationsAPI.ConfigurationGetParams;
  export import Discovery = DiscoveryAPI.Discovery;
  export import DiscoveryOperation = DiscoveryAPI.DiscoveryOperation;
  export import DiscoveryGetResponse = DiscoveryAPI.DiscoveryGetResponse;
  export import DiscoveryGetParams = DiscoveryAPI.DiscoveryGetParams;
  export import Operations = OperationsAPI.Operations;
  export import APIShield = OperationsAPI.APIShield;
  export import OperationCreateResponse = OperationsAPI.OperationCreateResponse;
  export import OperationListResponse = OperationsAPI.OperationListResponse;
  export import OperationDeleteResponse = OperationsAPI.OperationDeleteResponse;
  export import OperationGetResponse = OperationsAPI.OperationGetResponse;
  export import OperationListResponsesV4PagePaginationArray = OperationsAPI.OperationListResponsesV4PagePaginationArray;
  export import OperationCreateParams = OperationsAPI.OperationCreateParams;
  export import OperationListParams = OperationsAPI.OperationListParams;
  export import OperationDeleteParams = OperationsAPI.OperationDeleteParams;
  export import OperationGetParams = OperationsAPI.OperationGetParams;
  export import Schemas = SchemasAPI.Schemas;
  export import SchemaListResponse = SchemasAPI.SchemaListResponse;
  export import SchemaListParams = SchemasAPI.SchemaListParams;
  export import Settings = SettingsAPI.Settings;
  export import UserSchemas = UserSchemasAPI.UserSchemas;
  export import Message = UserSchemasAPI.Message;
  export import PublicSchema = UserSchemasAPI.PublicSchema;
  export import SchemaUpload = UserSchemasAPI.SchemaUpload;
  export import UserSchemaDeleteResponse = UserSchemasAPI.UserSchemaDeleteResponse;
  export import PublicSchemasV4PagePaginationArray = UserSchemasAPI.PublicSchemasV4PagePaginationArray;
  export import UserSchemaCreateParams = UserSchemasAPI.UserSchemaCreateParams;
  export import UserSchemaListParams = UserSchemasAPI.UserSchemaListParams;
  export import UserSchemaDeleteParams = UserSchemasAPI.UserSchemaDeleteParams;
  export import UserSchemaEditParams = UserSchemasAPI.UserSchemaEditParams;
  export import UserSchemaGetParams = UserSchemasAPI.UserSchemaGetParams;
  export import ExpressionTemplate = ExpressionTemplateAPI.ExpressionTemplate;
}
