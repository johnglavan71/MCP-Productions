// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Test2w from 'test2w';

const client = new Test2w({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource browse', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.volumes.browse.retrieve('name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.volumes.browse.retrieve(
        'name',
        { env: 'env', path: 'path' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Test2w.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('content', async () => {
    const responsePromise = client.volumes.browse.content('name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('content: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.volumes.browse.content(
        'name',
        { env: 'env', path: 'path' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Test2w.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('release', async () => {
    const responsePromise = client.volumes.browse.release('name');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('release: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.volumes.browse.release('name', { env: 'env' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Test2w.NotFoundError);
  });
});
