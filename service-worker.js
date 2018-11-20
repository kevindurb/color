const packages = {
  '/preact': 'https://cdn.jsdelivr.net/npm/preact/dist/preact.mjs',
  '/jss': 'https://unpkg.com/jss@9.8.7/dist/jss.js',
};

const shimPackage = async (event) => {
  const request = event.request
  if (event.clientId) {
    const client = await self.clients.get(event.clientId);
    const isLocal = request.url.startsWith(client.url);
    const pathname = `/${request.url.replace(client.url, '')}`;
    const packageKeys = Object.keys(packages);

    if (isLocal && packageKeys.includes(pathname)) {
      return fetch(packages[pathname])
    }
  }
  return fetch(request);
};

self.addEventListener('fetch', event => {
  event.respondWith(
    shimPackage(event)
  )
});
