const puppeteer = require('puppeteer');
const Server = require('../../src/Server');

describe('Server', () => {
  let browser = undefined;
  let server = undefined;

  beforeEach(async () => {
    browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox'], dumpio: true});
    server = new Server();
  });

  afterEach(async () => {
    if (browser) await browser.close();
    if (server) await server.stop();
  });

  it('serves a homepage with a title', async () => {
    const port = await server.start();
    const url = `http://localhost:${port}/`;

    const page = await browser.newPage();
    await page.goto(url);

    const title = await page.title();
    expect(title).toBe('Hello');
  });
});
