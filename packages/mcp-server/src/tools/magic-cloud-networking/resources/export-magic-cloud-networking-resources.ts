// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.resources',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/cloud/resources/export',
  operationId: 'resources-catalog-export',
};

export const tool: Tool = {
  name: 'export_magic_cloud_networking_resources',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nExport resources in the Resource Catalog as a JSON file (Closed Beta).\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      desc: {
        type: 'boolean',
      },
      order_by: {
        type: 'string',
        description: 'One of ["id", "resource_type", "region"].',
      },
      provider_id: {
        type: 'string',
      },
      region: {
        type: 'string',
      },
      resource_group: {
        type: 'string',
      },
      resource_id: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      resource_type: {
        type: 'array',
        items: {
          type: 'string',
          enum: [
            'aws_customer_gateway',
            'aws_egress_only_internet_gateway',
            'aws_internet_gateway',
            'aws_instance',
            'aws_network_interface',
            'aws_route',
            'aws_route_table',
            'aws_route_table_association',
            'aws_subnet',
            'aws_vpc',
            'aws_vpc_ipv4_cidr_block_association',
            'aws_vpn_connection',
            'aws_vpn_connection_route',
            'aws_vpn_gateway',
            'aws_security_group',
            'aws_vpc_security_group_ingress_rule',
            'aws_vpc_security_group_egress_rule',
            'aws_ec2_managed_prefix_list',
            'aws_ec2_transit_gateway',
            'aws_ec2_transit_gateway_prefix_list_reference',
            'aws_ec2_transit_gateway_vpc_attachment',
            'azurerm_application_security_group',
            'azurerm_lb',
            'azurerm_lb_backend_address_pool',
            'azurerm_lb_nat_pool',
            'azurerm_lb_nat_rule',
            'azurerm_lb_rule',
            'azurerm_local_network_gateway',
            'azurerm_network_interface',
            'azurerm_network_interface_application_security_group_association',
            'azurerm_network_interface_backend_address_pool_association',
            'azurerm_network_interface_security_group_association',
            'azurerm_network_security_group',
            'azurerm_public_ip',
            'azurerm_route',
            'azurerm_route_table',
            'azurerm_subnet',
            'azurerm_subnet_route_table_association',
            'azurerm_virtual_machine',
            'azurerm_virtual_network_gateway_connection',
            'azurerm_virtual_network',
            'azurerm_virtual_network_gateway',
            'google_compute_network',
            'google_compute_subnetwork',
            'google_compute_vpn_gateway',
            'google_compute_vpn_tunnel',
            'google_compute_route',
            'google_compute_address',
            'google_compute_global_address',
            'google_compute_router',
            'google_compute_interconnect_attachment',
            'google_compute_ha_vpn_gateway',
            'google_compute_forwarding_rule',
            'google_compute_network_firewall_policy',
            'google_compute_network_firewall_policy_rule',
            'cloudflare_static_route',
            'cloudflare_ipsec_tunnel',
          ],
        },
      },
      search: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      v2: {
        type: 'boolean',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.magicCloudNetworking.resources.export(body));
};

export default { metadata, tool, handler };
