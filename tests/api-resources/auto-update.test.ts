// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Test2w from 'test2w';

const client = new Test2w({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource autoUpdate', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.autoUpdate.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.autoUpdate.retrieve({ env: 'env' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Test2w.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('createContainer', async () => {
    const responsePromise = client.autoUpdate.createContainer('containerName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createContainer: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.autoUpdate.createContainer(
        'containerName',
        {
          env: 'env',
          cron_expression: 'cron_expression',
          cronExpression: 'cronExpression',
          enabled: 'enabled',
          vulnerability_criteria: 'vulnerability_criteria',
          vulnerabilityCriteria: 'vulnerabilityCriteria',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Test2w.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('deleteContainer', async () => {
    const responsePromise = client.autoUpdate.deleteContainer('containerName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteContainer: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.autoUpdate.deleteContainer(
        'containerName',
        { env: 'env' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Test2w.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveContainer', async () => {
    const responsePromise = client.autoUpdate.retrieveContainer('containerName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveContainer: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.autoUpdate.retrieveContainer(
        'containerName',
        { env: 'env' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Test2w.NotFoundError);
  });
});
