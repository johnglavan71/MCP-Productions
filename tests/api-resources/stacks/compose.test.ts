// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Test2w from 'test2w';

const client = new Test2w({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource compose', () => {
  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.stacks.compose.update('name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.stacks.compose.update(
        'name',
        {
          env: 'env',
          composePath: 'composePath',
          content: 'content',
          envPath: 'envPath',
          moveFromDir: 'moveFromDir',
          oldComposePath: 'oldComposePath',
          oldEnvPath: 'oldEnvPath',
          'restart = false': 'restart = false',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Test2w.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.stacks.compose.get('name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.stacks.compose.get('name', { env: 'env' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Test2w.NotFoundError);
  });
});
