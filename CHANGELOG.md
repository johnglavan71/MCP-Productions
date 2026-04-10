# Changelog

## 0.4.0 (2026-04-10)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/johnglavan71/MCP-Productions/compare/v0.3.0...v0.4.0)

### Features

* **mcp:** add an option to disable code tool ([cf089f9](https://github.com/johnglavan71/MCP-Productions/commit/cf089f9e34ddb524267321f47028e89e5a83e957))


### Bug Fixes

* **client:** improve parameter names ([f45d1ae](https://github.com/johnglavan71/MCP-Productions/commit/f45d1ae2a2aeff91d7138cca736928951f52504f))
* **client:** preserve URL params already embedded in path ([02e6078](https://github.com/johnglavan71/MCP-Productions/commit/02e6078d4f555f62d9e5b26cd5e6ab5ab62e83d7))
* **docs/contributing:** correct pnpm link command ([a01ba75](https://github.com/johnglavan71/MCP-Productions/commit/a01ba75622bab848b5862ca4fdb0ee2b1e4aa457))
* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([e761a2e](https://github.com/johnglavan71/MCP-Productions/commit/e761a2eb26454cb84ea892a37b30c74793f2e19f))
* **mcp:** update prompt ([9046925](https://github.com/johnglavan71/MCP-Productions/commit/9046925f8c24d000b02f685dc2d0df45fb9ea3d5))


### Chores

* **ci:** escape input path in publish-npm workflow ([ef8cb2d](https://github.com/johnglavan71/MCP-Productions/commit/ef8cb2d4a6097529201744e1e8f961e48007d1f1))
* **ci:** skip lint on metadata-only changes ([80654b7](https://github.com/johnglavan71/MCP-Productions/commit/80654b7e5d463fc55e08941ed9a6d1c037852995))
* **ci:** skip uploading artifacts on stainless-internal branches ([16c0e87](https://github.com/johnglavan71/MCP-Productions/commit/16c0e879a0c9220e7fd2e9638232c4880e870e4f))
* **internal:** cache fetch instruction calls in MCP server ([2580f73](https://github.com/johnglavan71/MCP-Productions/commit/2580f731326c9606974ec0b05c796ed3051d2167))
* **internal:** codegen related update ([fe8587d](https://github.com/johnglavan71/MCP-Productions/commit/fe8587dcd0c2558d4db63deeec69ea2eb7779274))
* **internal:** codegen related update ([09e2312](https://github.com/johnglavan71/MCP-Productions/commit/09e2312e7d0ad64ce83cc85a3784737476d43130))
* **internal:** codegen related update ([a476d6d](https://github.com/johnglavan71/MCP-Productions/commit/a476d6d964920073a45121b8f02a68f59f4da3fd))
* **internal:** codegen related update ([b967fc3](https://github.com/johnglavan71/MCP-Productions/commit/b967fc3a4bf752bfdd51a2b3158c1ec9ae7d3611))
* **internal:** codegen related update ([0bc0cf2](https://github.com/johnglavan71/MCP-Productions/commit/0bc0cf241a3abfee43ad8a301c1ab4119014625a))
* **internal:** codegen related update ([34155a8](https://github.com/johnglavan71/MCP-Productions/commit/34155a82128795d7cd4bc19aaf3fbf015ebb9c2c))
* **internal:** codegen related update ([4c0b531](https://github.com/johnglavan71/MCP-Productions/commit/4c0b5316221969ef17bcd4b74973a931f0387b52))
* **internal:** codegen related update ([224d144](https://github.com/johnglavan71/MCP-Productions/commit/224d14497c922c9433a1cf5c2676b1bb8bb00667))
* **internal:** codegen related update ([9f774e5](https://github.com/johnglavan71/MCP-Productions/commit/9f774e52b5b96ed8d8ac949a384eb1f652d42cba))
* **internal:** codegen related update ([e1128c1](https://github.com/johnglavan71/MCP-Productions/commit/e1128c184884c197e82f565c37cd2fc99d8fc739))
* **internal:** codegen related update ([a408b7b](https://github.com/johnglavan71/MCP-Productions/commit/a408b7b7c9e8bfcaf198d75b04bfc422a5012c63))
* **internal:** codegen related update ([94bc182](https://github.com/johnglavan71/MCP-Productions/commit/94bc182e13829331ea5f367a23c41aee88f42e72))
* **internal:** codegen related update ([d119085](https://github.com/johnglavan71/MCP-Productions/commit/d119085e4f1fccfce9cdc5090ca0455c0dd6a6a8))
* **internal:** codegen related update ([1dad852](https://github.com/johnglavan71/MCP-Productions/commit/1dad852b1c3912a0040070a947615543fb209baa))
* **internal:** codegen related update ([78ec235](https://github.com/johnglavan71/MCP-Productions/commit/78ec2356adcfa7d8528adc0175873f75746bd803))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([5f0d935](https://github.com/johnglavan71/MCP-Productions/commit/5f0d93538bcf500d19f61919591e7cf4c0a285a3))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([12ebff1](https://github.com/johnglavan71/MCP-Productions/commit/12ebff142725a97d93d558c27cf6def77647e8ea))
* **internal:** fix MCP server import ordering ([6006cb2](https://github.com/johnglavan71/MCP-Productions/commit/6006cb26aa5af2d7afa9167966fc8c4d6f049854))
* **internal:** fix MCP server TS errors that occur with required client options ([51317b3](https://github.com/johnglavan71/MCP-Productions/commit/51317b35e0260323ad8297a6d126eb1f11397e5b))
* **internal:** improve local docs search for MCP servers ([3d44781](https://github.com/johnglavan71/MCP-Productions/commit/3d44781dd906cf49d9452483cf2e13f595eadc2d))
* **internal:** improve local docs search for MCP servers ([2624f96](https://github.com/johnglavan71/MCP-Productions/commit/2624f96cd5d2f0181230268c86ab970681b8a997))
* **internal:** make generated MCP servers compatible with Cloudflare worker environments ([1f26f35](https://github.com/johnglavan71/MCP-Productions/commit/1f26f35366550e23ab4edeaf0a15ad66456593eb))
* **internal:** make MCP code execution location configurable via a flag ([4f4e085](https://github.com/johnglavan71/MCP-Productions/commit/4f4e085b1f30c8c7417da8a3f7ab3d0f90b26df5))
* **internal:** move stringifyQuery implementation to internal function ([0c475e6](https://github.com/johnglavan71/MCP-Productions/commit/0c475e614f83807faa061c214787e480da2930f8))
* **internal:** remove mock server code ([0185c04](https://github.com/johnglavan71/MCP-Productions/commit/0185c045cb0b0d521fd8d629a28bff3ba332881c))
* **internal:** show error causes in MCP servers when running in local mode ([685feb6](https://github.com/johnglavan71/MCP-Productions/commit/685feb6b7ecd3e3875bf65685cc9384112185a4f))
* **internal:** support custom-instructions-path flag in MCP servers ([cd6d2c2](https://github.com/johnglavan71/MCP-Productions/commit/cd6d2c244f137db464697ebad6028019a0544afd))
* **internal:** support local docs search in MCP servers ([ce003bd](https://github.com/johnglavan71/MCP-Productions/commit/ce003bd54397d48f68aac3b4216d62a310aec953))
* **internal:** support type annotations when running MCP in local execution mode ([246bc3f](https://github.com/johnglavan71/MCP-Productions/commit/246bc3f5f92c6a95a1b4bd44f53d0528265c2893))
* **internal:** support x-stainless-mcp-client-envs header in MCP servers ([78b0181](https://github.com/johnglavan71/MCP-Productions/commit/78b0181b56452b648973ccfddf8d2c4dfda18ff2))
* **internal:** support x-stainless-mcp-client-permissions headers in MCP servers ([f102162](https://github.com/johnglavan71/MCP-Productions/commit/f102162ac48de9b3eaa7f04a8ce3b83c891c1f45))
* **internal:** tweak CI branches ([ba415af](https://github.com/johnglavan71/MCP-Productions/commit/ba415afcba5392aa01c99cced80ebe66663a4a0b))
* **internal:** update dependencies to address dependabot vulnerabilities ([8a90188](https://github.com/johnglavan71/MCP-Productions/commit/8a90188df71a3dbe4fab6264b8f728c5d6fddccb))
* **internal:** update gitignore ([398ef72](https://github.com/johnglavan71/MCP-Productions/commit/398ef72399a7cb78677fca467df13cbb26ab9a38))
* **internal:** update lock file ([445a8dc](https://github.com/johnglavan71/MCP-Productions/commit/445a8dccfa1b27c67be9ee61463f404f04eceedd))
* **internal:** update lockfile ([a52de34](https://github.com/johnglavan71/MCP-Productions/commit/a52de34983f1d9c36fd19cbcf3b84f6131b1b5c7))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([ea8ae34](https://github.com/johnglavan71/MCP-Productions/commit/ea8ae34250eca9b781a28ad3bb057ec54a24ba05))
* **internal:** upgrade pnpm version ([9cf0e53](https://github.com/johnglavan71/MCP-Productions/commit/9cf0e53c0b24c68327d46d4e796daa57db5653c4))
* **internal:** use x-stainless-mcp-client-envs header for MCP remote code tool calls ([7a242e7](https://github.com/johnglavan71/MCP-Productions/commit/7a242e76a981e015d6bdf39f3a9bf6d64701b62e))
* **mcp-server:** add support for session id, forward client info ([45119cd](https://github.com/johnglavan71/MCP-Productions/commit/45119cd7211eff5b1f45113507c4497e0db42569))
* **mcp-server:** improve instructions ([49673e3](https://github.com/johnglavan71/MCP-Productions/commit/49673e33133c996421b28877f95f66a4adeb7092))
* **mcp-server:** increase local docs search result count from 5 to 10 ([54cf8d6](https://github.com/johnglavan71/MCP-Productions/commit/54cf8d68ad2f75d68a618aa2cf69bfb602ff35b0))
* **mcp-server:** log client info ([e3eee0c](https://github.com/johnglavan71/MCP-Productions/commit/e3eee0cb56862e0934e5579204565342291f0c8c))
* **mcp-server:** return access instructions for 404 without API key ([41e1a5d](https://github.com/johnglavan71/MCP-Productions/commit/41e1a5d9e58247376b3247d514cb1abf3a8d6bd9))
* **mcp:** correctly update version in sync with sdk ([608de3f](https://github.com/johnglavan71/MCP-Productions/commit/608de3f9db04ec5cc48ca25428597c50b148b06a))
* update mock server docs ([32db0a0](https://github.com/johnglavan71/MCP-Productions/commit/32db0a08c402b9034f8b164bb084a8529dc6201b))


### Refactors

* update sdk ([013a5aa](https://github.com/johnglavan71/MCP-Productions/commit/013a5aa3baca550af300cd739aea87c7afd829b4))

## 0.3.0 (2026-02-18)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/johnglavan71/MCP-Productions/compare/v0.2.0...v0.3.0)

### Features

* **api:** manual updates ([2ac76b8](https://github.com/johnglavan71/MCP-Productions/commit/2ac76b8d9bc31c455a03bf4b369373f00fa53744))

## 0.2.0 (2026-02-18)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/johnglavan71/MCP-Productions/compare/v0.1.0...v0.2.0)

### Features

* **api:** fixed docker name... ([ec858c5](https://github.com/johnglavan71/MCP-Productions/commit/ec858c56036cd0012c5a6ac347674363184ed18a))

## 0.1.0 (2026-02-18)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/johnglavan71/MCP-Productions/compare/v0.0.1...v0.1.0)

### Features

* **api:** manual updates ([50a72d5](https://github.com/johnglavan71/MCP-Productions/commit/50a72d583dd5c6de2932928147b47dd4e4676a99))
* **api:** manual updates ([5ffbf1e](https://github.com/johnglavan71/MCP-Productions/commit/5ffbf1e522988e47e830e75531415bb436d0ebc6))
* **api:** manual updates ([6b0e747](https://github.com/johnglavan71/MCP-Productions/commit/6b0e747f7a7767720f53a3b3f6a6d0a53a952af9))
* **api:** now with NPM ([39a8d9b](https://github.com/johnglavan71/MCP-Productions/commit/39a8d9beb1b98da73497c62ca65d9ac2e1a95499))


### Chores

* configure new SDK language ([e6771a0](https://github.com/johnglavan71/MCP-Productions/commit/e6771a0525476a16c46713ca36bdd5f8103f4601))
* update SDK settings ([db3a932](https://github.com/johnglavan71/MCP-Productions/commit/db3a932d0afdd3e0abf580a910de6fc72d0e0d0c))
* update SDK settings ([a13193e](https://github.com/johnglavan71/MCP-Productions/commit/a13193e896bb57af50e59f4ea8e262849f6023f7))
