// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource policies', () => {
  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9327225061/job/25676826349?pr=482#step:5:4274
  test.skip('create: only required params', async () => {
    const responsePromise = client.alerting.policies.create({ account_id: '023e105f4ecef8ad9ca31a8372d0c353', alert_type: 'access_custom_certificate_expiration_type', enabled: true, mechanisms: { email: [{}], pagerduty: [{}], webhooks: [{}] }, name: 'SSL Notification Event Policy' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9327225061/job/25676826349?pr=482#step:5:4274
  test.skip('create: required and optional params', async () => {
    const response = await client.alerting.policies.create({ account_id: '023e105f4ecef8ad9ca31a8372d0c353', alert_type: 'access_custom_certificate_expiration_type', enabled: true, mechanisms: { email: [{ id: 'test@example.com' }], pagerduty: [{ id: 'e8133a15-00a4-4d69-aec1-32f70c51f6e5' }], webhooks: [{ id: '14cc1190-5d2b-4b98-a696-c424cb2ad05f' }] }, name: 'SSL Notification Event Policy', alert_interval: '30m', description: 'Something describing the policy.', filters: { actions: ['string', 'string', 'string'], affected_asns: ['string', 'string', 'string'], affected_components: ['string', 'string', 'string'], affected_locations: ['string', 'string', 'string'], airport_code: ['string', 'string', 'string'], alert_trigger_preferences: ['string', 'string', 'string'], alert_trigger_preferences_value: ['string', 'string', 'string'], enabled: ['string', 'string', 'string'], environment: ['string', 'string', 'string'], event: ['string', 'string', 'string'], event_source: ['string', 'string', 'string'], event_type: ['string', 'string', 'string'], group_by: ['string', 'string', 'string'], health_check_id: ['string', 'string', 'string'], incident_impact: ['INCIDENT_IMPACT_NONE', 'INCIDENT_IMPACT_MINOR', 'INCIDENT_IMPACT_MAJOR'], input_id: ['string', 'string', 'string'], limit: ['string', 'string', 'string'], logo_tag: ['string', 'string', 'string'], megabits_per_second: ['string', 'string', 'string'], new_health: ['string', 'string', 'string'], new_status: ['string', 'string', 'string'], packets_per_second: ['string', 'string', 'string'], pool_id: ['string', 'string', 'string'], product: ['string', 'string', 'string'], project_id: ['string', 'string', 'string'], protocol: ['string', 'string', 'string'], query_tag: ['string', 'string', 'string'], requests_per_second: ['string', 'string', 'string'], selectors: ['string', 'string', 'string'], services: ['string', 'string', 'string'], slo: ['99.9'], status: ['string', 'string', 'string'], target_hostname: ['string', 'string', 'string'], target_ip: ['string', 'string', 'string'], target_zone_name: ['string', 'string', 'string'], traffic_exclusions: ['security_events'], tunnel_id: ['string', 'string', 'string'], tunnel_name: ['string', 'string', 'string'], where: ['string', 'string', 'string'], zones: ['string', 'string', 'string'] } });
  });

  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9327225061/job/25676826349?pr=482#step:5:4274
  test.skip('update: only required params', async () => {
    const responsePromise = client.alerting.policies.update('0da2b59e-f118-439d-8097-bdfb215203c9', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9327225061/job/25676826349?pr=482#step:5:4274
  test.skip('update: required and optional params', async () => {
    const response = await client.alerting.policies.update('0da2b59e-f118-439d-8097-bdfb215203c9', { account_id: '023e105f4ecef8ad9ca31a8372d0c353', alert_interval: '30m', alert_type: 'access_custom_certificate_expiration_type', description: 'Something describing the policy.', enabled: true, filters: { actions: ['string', 'string', 'string'], affected_asns: ['string', 'string', 'string'], affected_components: ['string', 'string', 'string'], affected_locations: ['string', 'string', 'string'], airport_code: ['string', 'string', 'string'], alert_trigger_preferences: ['string', 'string', 'string'], alert_trigger_preferences_value: ['string', 'string', 'string'], enabled: ['string', 'string', 'string'], environment: ['string', 'string', 'string'], event: ['string', 'string', 'string'], event_source: ['string', 'string', 'string'], event_type: ['string', 'string', 'string'], group_by: ['string', 'string', 'string'], health_check_id: ['string', 'string', 'string'], incident_impact: ['INCIDENT_IMPACT_NONE', 'INCIDENT_IMPACT_MINOR', 'INCIDENT_IMPACT_MAJOR'], input_id: ['string', 'string', 'string'], limit: ['string', 'string', 'string'], logo_tag: ['string', 'string', 'string'], megabits_per_second: ['string', 'string', 'string'], new_health: ['string', 'string', 'string'], new_status: ['string', 'string', 'string'], packets_per_second: ['string', 'string', 'string'], pool_id: ['string', 'string', 'string'], product: ['string', 'string', 'string'], project_id: ['string', 'string', 'string'], protocol: ['string', 'string', 'string'], query_tag: ['string', 'string', 'string'], requests_per_second: ['string', 'string', 'string'], selectors: ['string', 'string', 'string'], services: ['string', 'string', 'string'], slo: ['99.9'], status: ['string', 'string', 'string'], target_hostname: ['string', 'string', 'string'], target_ip: ['string', 'string', 'string'], target_zone_name: ['string', 'string', 'string'], traffic_exclusions: ['security_events'], tunnel_id: ['string', 'string', 'string'], tunnel_name: ['string', 'string', 'string'], where: ['string', 'string', 'string'], zones: ['string', 'string', 'string'] }, mechanisms: { email: [{ id: 'test@example.com' }], pagerduty: [{ id: 'e8133a15-00a4-4d69-aec1-32f70c51f6e5' }], webhooks: [{ id: '14cc1190-5d2b-4b98-a696-c424cb2ad05f' }] }, name: 'SSL Notification Event Policy' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.alerting.policies.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.alerting.policies.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.alerting.policies.delete('0da2b59e-f118-439d-8097-bdfb215203c9', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.alerting.policies.delete('0da2b59e-f118-439d-8097-bdfb215203c9', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9327225061/job/25676826349?pr=482#step:5:4274
  test.skip('get: only required params', async () => {
    const responsePromise = client.alerting.policies.get('0da2b59e-f118-439d-8097-bdfb215203c9', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // prism errors - https://github.com/cloudflare/cloudflare-python/actions/runs/9327225061/job/25676826349?pr=482#step:5:4274
  test.skip('get: required and optional params', async () => {
    const response = await client.alerting.policies.get('0da2b59e-f118-439d-8097-bdfb215203c9', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
