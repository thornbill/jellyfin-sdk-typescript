<h1 align="center">jellyfin-sdk-typescript</h1>
<h3 align="center">Part of the <a href="https://jellyfin.org">Jellyfin Project</a></h3>

---

<p align="center">
<img alt="Logo Banner" src="https://raw.githubusercontent.com/jellyfin/jellyfin-ux/master/branding/SVG/banner-logo-solid.svg?sanitize=true"/>
<br/>
<br/>
<a href="https://github.com/jellyfin/jellyfin-sdk-typescript/blob/master/LICENSE"><img alt="MPL-2.0 license" src="https://img.shields.io/github/license/jellyfin/jellyfin-sdk-typescript"></a>
<a href="https://github.com/jellyfin/jellyfin-sdk-typescript/releases"><img alt="Current Release" src="https://img.shields.io/github/release/jellyfin/jellyfin-sdk-typescript.svg"/></a>
<a href="https://www.npmjs.com/package/@thornbill/jellyfin-sdk"><img alt="npm" src="https://img.shields.io/npm/v/@thornbill/jellyfin-sdk"></a>
<a href="https://codecov.io/gh/jellyfin/jellyfin-sdk-typescript">
<img alt="Codecov" src="https://img.shields.io/codecov/c/github/jellyfin/jellyfin-sdk-typescript?token=eFF0jvWiyq">
</a>
</p>

A TypeScript SDK for Jellyfin.

> Warning: This project is under active development, so API changes may occur.

## Install

```sh
npm i --save @thornbill/jellyfin-sdk
```

or

```sh
yarn add @thornbill/jellyfin-sdk
```

### Supported Jellyfin Versions

| SDK Version | Jellyfin Version |
|:-:|:-:|
| 0.5.0 | 10.8.x |
| <0.5.0 | 10.7.x |

### React Native

The generated Axios client used in this library depends on `URL` and `URLSearchParams` to be available on the global scope.
React Native only includes incomplete implementations for these classes, so a polyfill is required.
[React Native URL Polyfill](https://github.com/charpeni/react-native-url-polyfill) seems like a good solution for this.

## Usage

```js
// Create a new instance of the SDK
const jellyfin = new Jellyfin({
    clientInfo: {
        name: 'My Client Application',
        version: '1.0.0'
    },
    deviceInfo: {
        name: 'Device Name',
        id: 'unique-device-id'
    }
});

// Find a valid server by trying to connect using common protocols and ports.
// Each server receives a score based on security, speed, and other criteria.
const servers = await jellyfin.discovery.getRecommendedServerCandidates('demo.jellyfin.org/stable');
// A utility function for finding the best result is available.
// If there is no "best" server, an error message should be displayed.
const best = jellyfin.discovery.findBestServer(servers);

// Create an API instance
const api = jellyfin.createApi(best.address);

// Each API endpoint is exposed via a getter on the SDK instance using
// a shared Configuration and Axios instance. For example the /System APIs
// are available as api.systemApi.

// Fetch the public system info
const info = await getSystemApi(api).getPublicSystemInfo();
console.log('Info =>', info.data);

// Fetch the list of public users
const users = await getUserApi(api).getPublicUsers();
console.log('Users =>', users.data);

// A helper method for authentication has been added to the SDK because
// the default method exposed in the generated Axios client is rather
// cumbersome to use.
const auth = await api.authenticateUserByName('demo', '');
console.log('Auth =>', auth.data);

// Authentication state is stored internally in the Api class, so now
// requests that require authentication can be made normally
const libraries = await getLibraryApi(api).getMediaFolders();
console.log('Libraries =>', libraries.data);

// A helper method for logging out the current user has been added to the
// SDK so the internal state is updated correctly.
await api.logout();
```

## Breaking Changes

### v0.5.0

* Build directory is now `lib` instead of `dist`.
  Any imports used that were previously in `dist` will need updated.
  [#147](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/147)
* Duplicated exports were removed.
  Any imports may need updated if you referenced one of the duplicates.
  [#148](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/148)
* API classes are no longer exposed via getters.
  Instead you need to call a function passing the `Api` instance as a parameter.
  For example: `getSystemApi(api)`.
  While I do feel this is a slightly worse developer experience, it was a necessary change to support tree-shaking.
  [#149](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/149)
* `BaseItemKind` is now included in the generated client.
  Imports will need updated.
  [#187](https://github.com/jellyfin/jellyfin-sdk-typescript/pull/187)

## Roadmap to 1.0

* [ ] More complete device profile generation utilities
* [ ] Use custom generator templates for API versions
* [ ] Automate OpenAPI spec updates using GitHub
  * [ ] Create branch tracking unstable Jellyfin builds
