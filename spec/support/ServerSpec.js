const Server = require('../../index');

describe('Server', () => {
  let server = undefined;

  beforeEach(() => server = new Server());

  afterEach(async () => {
    if (server) {
      await server.stop();
    }
  });

  it('stars on a default port', async () => {
    const port = await server.start();
    expect(port).toBe(8080);
  });
});
