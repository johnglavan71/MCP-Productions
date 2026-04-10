# Activity

Methods:

- <code title="get /api/activity">client.activity.<a href="./src/resources/activity.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/activity">client.activity.<a href="./src/resources/activity.ts">delete</a>() -> void</code>
- <code title="get /api/activity/containers">client.activity.<a href="./src/resources/activity.ts">listContainers</a>({ ...params }) -> void</code>
- <code title="get /api/activity/events">client.activity.<a href="./src/resources/activity.ts">listEvents</a>() -> void</code>
- <code title="get /api/activity/stats">client.activity.<a href="./src/resources/activity.ts">retrieveStats</a>({ ...params }) -> void</code>

# Audit

Methods:

- <code title="get /api/audit">client.audit.<a href="./src/resources/audit.ts">retrieve</a>({ ...params }) -> void</code>
- <code title="get /api/audit/export">client.audit.<a href="./src/resources/audit.ts">export</a>({ ...params }) -> void</code>
- <code title="get /api/audit/events">client.audit.<a href="./src/resources/audit.ts">listEvents</a>() -> void</code>
- <code title="get /api/audit/users">client.audit.<a href="./src/resources/audit.ts">listUsers</a>() -> void</code>

# Auth

Methods:

- <code title="get /api/auth/providers">client.auth.<a href="./src/resources/auth/auth.ts">listProviders</a>() -> void</code>
- <code title="post /api/auth/login">client.auth.<a href="./src/resources/auth/auth.ts">login</a>({ ...params }) -> void</code>
- <code title="post /api/auth/logout">client.auth.<a href="./src/resources/auth/auth.ts">logout</a>() -> void</code>
- <code title="get /api/auth/session">client.auth.<a href="./src/resources/auth/auth.ts">retrieveSession</a>() -> void</code>

## Ldap

Methods:

- <code title="post /api/auth/ldap">client.auth.ldap.<a href="./src/resources/auth/ldap.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/auth/ldap/{id}">client.auth.ldap.<a href="./src/resources/auth/ldap.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/auth/ldap/{id}">client.auth.ldap.<a href="./src/resources/auth/ldap.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/auth/ldap">client.auth.ldap.<a href="./src/resources/auth/ldap.ts">list</a>() -> void</code>
- <code title="delete /api/auth/ldap/{id}">client.auth.ldap.<a href="./src/resources/auth/ldap.ts">delete</a>(id) -> void</code>
- <code title="post /api/auth/ldap/{id}/test">client.auth.ldap.<a href="./src/resources/auth/ldap.ts">test</a>(id) -> void</code>

## Oidc

Methods:

- <code title="post /api/auth/oidc">client.auth.oidc.<a href="./src/resources/auth/oidc/oidc.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/auth/oidc/{id}">client.auth.oidc.<a href="./src/resources/auth/oidc/oidc.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/auth/oidc/{id}">client.auth.oidc.<a href="./src/resources/auth/oidc/oidc.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/auth/oidc">client.auth.oidc.<a href="./src/resources/auth/oidc/oidc.ts">list</a>() -> void</code>
- <code title="delete /api/auth/oidc/{id}">client.auth.oidc.<a href="./src/resources/auth/oidc/oidc.ts">delete</a>(id) -> void</code>
- <code title="get /api/auth/oidc/callback">client.auth.oidc.<a href="./src/resources/auth/oidc/oidc.ts">callback</a>({ ...params }) -> void</code>
- <code title="post /api/auth/oidc/{id}/test">client.auth.oidc.<a href="./src/resources/auth/oidc/oidc.ts">test</a>(id) -> void</code>

### Initiate

Methods:

- <code title="post /api/auth/oidc/{id}/initiate">client.auth.oidc.initiate.<a href="./src/resources/auth/oidc/initiate.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /api/auth/oidc/{id}/initiate">client.auth.oidc.initiate.<a href="./src/resources/auth/oidc/initiate.ts">retrieve</a>(id, { ...params }) -> void</code>

## Settings

Methods:

- <code title="get /api/auth/settings">client.auth.settings.<a href="./src/resources/auth/settings.ts">retrieve</a>() -> void</code>
- <code title="put /api/auth/settings">client.auth.settings.<a href="./src/resources/auth/settings.ts">update</a>({ ...params }) -> void</code>

# AutoUpdate

Methods:

- <code title="get /api/auto-update">client.autoUpdate.<a href="./src/resources/auto-update.ts">retrieve</a>({ ...params }) -> void</code>
- <code title="post /api/auto-update/{containerName}">client.autoUpdate.<a href="./src/resources/auto-update.ts">createContainer</a>(containerName, { ...params }) -> void</code>
- <code title="delete /api/auto-update/{containerName}">client.autoUpdate.<a href="./src/resources/auto-update.ts">deleteContainer</a>(containerName, { ...params }) -> void</code>
- <code title="get /api/auto-update/{containerName}">client.autoUpdate.<a href="./src/resources/auto-update.ts">retrieveContainer</a>(containerName, { ...params }) -> void</code>

# Batch

Methods:

- <code title="post /api/batch">client.batch.<a href="./src/resources/batch.ts">create</a>({ ...params }) -> void</code>

# Changelog

Methods:

- <code title="get /api/changelog">client.changelog.<a href="./src/resources/changelog.ts">retrieve</a>() -> void</code>

# ConfigSets

Methods:

- <code title="post /api/config-sets">client.configSets.<a href="./src/resources/config-sets.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/config-sets/{id}">client.configSets.<a href="./src/resources/config-sets.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/config-sets/{id}">client.configSets.<a href="./src/resources/config-sets.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/config-sets">client.configSets.<a href="./src/resources/config-sets.ts">list</a>() -> void</code>
- <code title="delete /api/config-sets/{id}">client.configSets.<a href="./src/resources/config-sets.ts">delete</a>(id) -> void</code>

# Containers

Methods:

- <code title="post /api/containers">client.containers.<a href="./src/resources/containers/containers.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/containers/{id}">client.containers.<a href="./src/resources/containers/containers.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="post /api/containers/{id}/update">client.containers.<a href="./src/resources/containers/containers.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/containers">client.containers.<a href="./src/resources/containers/containers.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/containers/{id}">client.containers.<a href="./src/resources/containers/containers.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /api/containers/batch-update">client.containers.<a href="./src/resources/containers/containers.ts">batchUpdate</a>({ ...params }) -> void</code>
- <code title="post /api/containers/batch-update-stream">client.containers.<a href="./src/resources/containers/containers.ts">batchUpdateStream</a>({ ...params }) -> void</code>
- <code title="post /api/containers/check-updates">client.containers.<a href="./src/resources/containers/containers.ts">checkUpdates</a>({ ...params }) -> void</code>
- <code title="post /api/containers/{id}/exec">client.containers.<a href="./src/resources/containers/containers.ts">exec</a>(id, { ...params }) -> void</code>
- <code title="get /api/containers/{id}/inspect">client.containers.<a href="./src/resources/containers/containers.ts">inspect</a>(id, { ...params }) -> void</code>
- <code title="get /api/containers/{id}/shells">client.containers.<a href="./src/resources/containers/containers.ts">listShells</a>(id, { ...params }) -> void</code>
- <code title="get /api/containers/sizes">client.containers.<a href="./src/resources/containers/containers.ts">listSizes</a>({ ...params }) -> void</code>
- <code title="post /api/containers/{id}/pause">client.containers.<a href="./src/resources/containers/containers.ts">pause</a>(id, { ...params }) -> void</code>
- <code title="post /api/containers/{id}/rename">client.containers.<a href="./src/resources/containers/containers.ts">rename</a>(id, { ...params }) -> void</code>
- <code title="post /api/containers/{id}/restart">client.containers.<a href="./src/resources/containers/containers.ts">restart</a>(id, { ...params }) -> void</code>
- <code title="post /api/containers/{id}/start">client.containers.<a href="./src/resources/containers/containers.ts">start</a>(id, { ...params }) -> void</code>
- <code title="post /api/containers/{id}/stop">client.containers.<a href="./src/resources/containers/containers.ts">stop</a>(id, { ...params }) -> void</code>
- <code title="get /api/containers/{id}/top">client.containers.<a href="./src/resources/containers/containers.ts">top</a>(id, { ...params }) -> void</code>
- <code title="post /api/containers/{id}/unpause">client.containers.<a href="./src/resources/containers/containers.ts">unpause</a>(id, { ...params }) -> void</code>

## PendingUpdates

Methods:

- <code title="get /api/containers/pending-updates">client.containers.pendingUpdates.<a href="./src/resources/containers/pending-updates.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/containers/pending-updates">client.containers.pendingUpdates.<a href="./src/resources/containers/pending-updates.ts">delete</a>({ ...params }) -> void</code>

## Stats

Methods:

- <code title="get /api/containers/{id}/stats">client.containers.stats.<a href="./src/resources/containers/stats.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="get /api/containers/stats">client.containers.stats.<a href="./src/resources/containers/stats.ts">list</a>({ ...params }) -> void</code>

## Files

Methods:

- <code title="post /api/containers/{id}/files/create">client.containers.files.<a href="./src/resources/containers/files/files.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /api/containers/{id}/files">client.containers.files.<a href="./src/resources/containers/files/files.ts">list</a>(id, { ...params }) -> void</code>
- <code title="delete /api/containers/{id}/files/delete">client.containers.files.<a href="./src/resources/containers/files/files.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /api/containers/{id}/files/chmod">client.containers.files.<a href="./src/resources/containers/files/files.ts">chmod</a>(id, { ...params }) -> void</code>
- <code title="get /api/containers/{id}/files/download">client.containers.files.<a href="./src/resources/containers/files/files.ts">download</a>(id, { ...params }) -> void</code>
- <code title="post /api/containers/{id}/files/rename">client.containers.files.<a href="./src/resources/containers/files/files.ts">rename</a>(id, { ...params }) -> void</code>
- <code title="post /api/containers/{id}/files/upload">client.containers.files.<a href="./src/resources/containers/files/files.ts">upload</a>(id, { ...params }) -> void</code>

### Content

Methods:

- <code title="get /api/containers/{id}/files/content">client.containers.files.content.<a href="./src/resources/containers/files/content.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="put /api/containers/{id}/files/content">client.containers.files.content.<a href="./src/resources/containers/files/content.ts">update</a>(id, { ...params }) -> void</code>

## Logs

Methods:

- <code title="get /api/containers/{id}/logs">client.containers.logs.<a href="./src/resources/containers/logs.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="get /api/containers/{id}/logs/stream">client.containers.logs.<a href="./src/resources/containers/logs.ts">stream</a>(id, { ...params }) -> void</code>

# Dashboard

## Preferences

Methods:

- <code title="post /api/dashboard/preferences">client.dashboard.preferences.<a href="./src/resources/dashboard/preferences.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/dashboard/preferences">client.dashboard.preferences.<a href="./src/resources/dashboard/preferences.ts">retrieve</a>() -> void</code>

## Stats

Methods:

- <code title="get /api/dashboard/stats">client.dashboard.stats.<a href="./src/resources/dashboard/stats.ts">retrieve</a>({ ...params }) -> void</code>
- <code title="get /api/dashboard/stats/stream">client.dashboard.stats.<a href="./src/resources/dashboard/stats.ts">stream</a>() -> void</code>

# Dependencies

Methods:

- <code title="get /api/dependencies">client.dependencies.<a href="./src/resources/dependencies.ts">list</a>() -> void</code>

# Environments

Methods:

- <code title="post /api/environments">client.environments.<a href="./src/resources/environments/environments.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/environments/{id}">client.environments.<a href="./src/resources/environments/environments.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/environments/{id}">client.environments.<a href="./src/resources/environments/environments.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/environments">client.environments.<a href="./src/resources/environments/environments.ts">list</a>() -> void</code>
- <code title="delete /api/environments/{id}">client.environments.<a href="./src/resources/environments/environments.ts">delete</a>(id) -> void</code>
- <code title="get /api/environments/detect-socket">client.environments.<a href="./src/resources/environments/environments.ts">detectSocket</a>() -> void</code>

## Test

Methods:

- <code title="post /api/environments/test">client.environments.test.<a href="./src/resources/environments/test.ts">create</a>() -> void</code>
- <code title="post /api/environments/{id}/test">client.environments.test.<a href="./src/resources/environments/test.ts">run</a>(id) -> void</code>

## DiskWarning

Methods:

- <code title="post /api/environments/{id}/disk-warning">client.environments.diskWarning.<a href="./src/resources/environments/disk-warning.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /api/environments/{id}/disk-warning">client.environments.diskWarning.<a href="./src/resources/environments/disk-warning.ts">retrieve</a>(id) -> void</code>

## ImagePrune

Methods:

- <code title="post /api/environments/{id}/image-prune">client.environments.imagePrune.<a href="./src/resources/environments/image-prune.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /api/environments/{id}/image-prune">client.environments.imagePrune.<a href="./src/resources/environments/image-prune.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/environments/{id}/image-prune">client.environments.imagePrune.<a href="./src/resources/environments/image-prune.ts">update</a>(id) -> void</code>

## Notifications

Methods:

- <code title="post /api/environments/{id}/notifications">client.environments.notifications.<a href="./src/resources/environments/notifications.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /api/environments/{id}/notifications/{notificationId}">client.environments.notifications.<a href="./src/resources/environments/notifications.ts">retrieve</a>(notificationID, { ...params }) -> void</code>
- <code title="put /api/environments/{id}/notifications/{notificationId}">client.environments.notifications.<a href="./src/resources/environments/notifications.ts">update</a>(notificationID, { ...params }) -> void</code>
- <code title="get /api/environments/{id}/notifications">client.environments.notifications.<a href="./src/resources/environments/notifications.ts">list</a>(id) -> void</code>
- <code title="delete /api/environments/{id}/notifications/{notificationId}">client.environments.notifications.<a href="./src/resources/environments/notifications.ts">delete</a>(notificationID, { ...params }) -> void</code>

## Timezone

Methods:

- <code title="get /api/environments/{id}/timezone">client.environments.timezone.<a href="./src/resources/environments/timezone.ts">retrieve</a>(id) -> void</code>
- <code title="post /api/environments/{id}/timezone">client.environments.timezone.<a href="./src/resources/environments/timezone.ts">update</a>(id, { ...params }) -> void</code>

## UpdateCheck

Methods:

- <code title="get /api/environments/{id}/update-check">client.environments.updateCheck.<a href="./src/resources/environments/update-check.ts">retrieve</a>(id) -> void</code>
- <code title="post /api/environments/{id}/update-check">client.environments.updateCheck.<a href="./src/resources/environments/update-check.ts">run</a>(id, { ...params }) -> void</code>

# Events

Methods:

- <code title="get /api/events">client.events.<a href="./src/resources/events.ts">list</a>({ ...params }) -> void</code>

# Git

Methods:

- <code title="post /api/git/preview-env">client.git.<a href="./src/resources/git/git.ts">createPreviewEnv</a>({ ...params }) -> void</code>

## Credentials

Methods:

- <code title="post /api/git/credentials">client.git.credentials.<a href="./src/resources/git/credentials.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/git/credentials/{id}">client.git.credentials.<a href="./src/resources/git/credentials.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/git/credentials/{id}">client.git.credentials.<a href="./src/resources/git/credentials.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/git/credentials">client.git.credentials.<a href="./src/resources/git/credentials.ts">list</a>() -> void</code>
- <code title="delete /api/git/credentials/{id}">client.git.credentials.<a href="./src/resources/git/credentials.ts">delete</a>(id) -> void</code>

## Repositories

Methods:

- <code title="post /api/git/repositories">client.git.repositories.<a href="./src/resources/git/repositories/repositories.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/git/repositories/{id}">client.git.repositories.<a href="./src/resources/git/repositories/repositories.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/git/repositories/{id}">client.git.repositories.<a href="./src/resources/git/repositories/repositories.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/git/repositories">client.git.repositories.<a href="./src/resources/git/repositories/repositories.ts">list</a>() -> void</code>
- <code title="delete /api/git/repositories/{id}">client.git.repositories.<a href="./src/resources/git/repositories/repositories.ts">delete</a>(id) -> void</code>
- <code title="post /api/git/repositories/{id}/deploy">client.git.repositories.<a href="./src/resources/git/repositories/repositories.ts">deploy</a>(id) -> void</code>

### Test

Methods:

- <code title="post /api/git/repositories/test">client.git.repositories.test.<a href="./src/resources/git/repositories/test.ts">create</a>({ ...params }) -> void</code>
- <code title="post /api/git/repositories/{id}/test">client.git.repositories.test.<a href="./src/resources/git/repositories/test.ts">run</a>(id) -> void</code>

### Sync

Methods:

- <code title="post /api/git/repositories/{id}/sync">client.git.repositories.sync.<a href="./src/resources/git/repositories/sync.ts">create</a>(id) -> void</code>
- <code title="get /api/git/repositories/{id}/sync">client.git.repositories.sync.<a href="./src/resources/git/repositories/sync.ts">retrieve</a>(id) -> void</code>

## Stacks

Methods:

- <code title="post /api/git/stacks">client.git.stacks.<a href="./src/resources/git/stacks/stacks.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/git/stacks/{id}">client.git.stacks.<a href="./src/resources/git/stacks/stacks.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/git/stacks/{id}">client.git.stacks.<a href="./src/resources/git/stacks/stacks.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/git/stacks">client.git.stacks.<a href="./src/resources/git/stacks/stacks.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/git/stacks/{id}">client.git.stacks.<a href="./src/resources/git/stacks/stacks.ts">delete</a>(id) -> void</code>
- <code title="post /api/git/stacks/{id}/deploy">client.git.stacks.<a href="./src/resources/git/stacks/stacks.ts">deploy</a>(id) -> void</code>
- <code title="post /api/git/stacks/{id}/deploy-stream">client.git.stacks.<a href="./src/resources/git/stacks/stacks.ts">deployStream</a>(id) -> void</code>
- <code title="post /api/git/stacks/{id}/sync">client.git.stacks.<a href="./src/resources/git/stacks/stacks.ts">sync</a>(id) -> void</code>
- <code title="post /api/git/stacks/{id}/test">client.git.stacks.<a href="./src/resources/git/stacks/stacks.ts">test</a>(id) -> void</code>

### EnvFiles

Methods:

- <code title="post /api/git/stacks/{id}/env-files">client.git.stacks.envFiles.<a href="./src/resources/git/stacks/env-files.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /api/git/stacks/{id}/env-files">client.git.stacks.envFiles.<a href="./src/resources/git/stacks/env-files.ts">list</a>(id) -> void</code>

### Webhook

Methods:

- <code title="post /api/git/stacks/{id}/webhook">client.git.stacks.webhook.<a href="./src/resources/git/stacks/webhook.ts">create</a>(id) -> void</code>
- <code title="get /api/git/stacks/{id}/webhook">client.git.stacks.webhook.<a href="./src/resources/git/stacks/webhook.ts">retrieve</a>(id, { ...params }) -> void</code>

## Webhook

Methods:

- <code title="get /api/git/webhook/{id}">client.git.webhook.<a href="./src/resources/git/webhook.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="post /api/git/webhook/{id}">client.git.webhook.<a href="./src/resources/git/webhook.ts">update</a>(id, { ...params }) -> void</code>

# Hawser

## Connect

Methods:

- <code title="post /api/hawser/connect">client.hawser.connect.<a href="./src/resources/hawser/connect.ts">create</a>() -> void</code>
- <code title="get /api/hawser/connect">client.hawser.connect.<a href="./src/resources/hawser/connect.ts">retrieve</a>() -> void</code>

## Tokens

Methods:

- <code title="post /api/hawser/tokens">client.hawser.tokens.<a href="./src/resources/hawser/tokens.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/hawser/tokens">client.hawser.tokens.<a href="./src/resources/hawser/tokens.ts">list</a>() -> void</code>
- <code title="delete /api/hawser/tokens">client.hawser.tokens.<a href="./src/resources/hawser/tokens.ts">delete</a>({ ...params }) -> void</code>

# Health

Methods:

- <code title="get /api/health">client.health.<a href="./src/resources/health.ts">check</a>() -> void</code>
- <code title="get /api/health/database">client.health.<a href="./src/resources/health.ts">checkDatabase</a>() -> void</code>

# Host

Methods:

- <code title="get /api/host">client.host.<a href="./src/resources/host.ts">retrieve</a>({ ...params }) -> void</code>

# Images

Methods:

- <code title="get /api/images">client.images.<a href="./src/resources/images/images.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/images/{id}">client.images.<a href="./src/resources/images/images.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /api/images/{id}/export">client.images.<a href="./src/resources/images/images.ts">export</a>(id, { ...params }) -> void</code>
- <code title="get /api/images/{id}/history">client.images.<a href="./src/resources/images/images.ts">history</a>(id, { ...params }) -> void</code>
- <code title="post /api/images/pull">client.images.<a href="./src/resources/images/images.ts">pull</a>({ ...params }) -> void</code>
- <code title="post /api/images/push">client.images.<a href="./src/resources/images/images.ts">push</a>({ ...params }) -> void</code>
- <code title="post /api/images/{id}/tag">client.images.<a href="./src/resources/images/images.ts">tag</a>(id, { ...params }) -> void</code>

## Scan

Methods:

- <code title="post /api/images/scan">client.images.scan.<a href="./src/resources/images/scan.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/images/scan">client.images.scan.<a href="./src/resources/images/scan.ts">retrieve</a>({ ...params }) -> void</code>

# Legal

Methods:

- <code title="get /api/legal/license">client.legal.<a href="./src/resources/legal.ts">retrieveLicense</a>({ ...params }) -> void</code>
- <code title="get /api/legal/privacy">client.legal.<a href="./src/resources/legal.ts">retrievePrivacy</a>({ ...params }) -> void</code>

# License

Methods:

- <code title="post /api/license">client.license.<a href="./src/resources/license.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/license">client.license.<a href="./src/resources/license.ts">retrieve</a>() -> void</code>
- <code title="delete /api/license">client.license.<a href="./src/resources/license.ts">delete</a>() -> void</code>

# Logs

Methods:

- <code title="get /api/logs/merged">client.logs.<a href="./src/resources/logs.ts">retrieveMerged</a>({ ...params }) -> void</code>

# Metrics

Methods:

- <code title="get /api/metrics">client.metrics.<a href="./src/resources/metrics.ts">retrieve</a>({ ...params }) -> void</code>

# Networks

Methods:

- <code title="post /api/networks">client.networks.<a href="./src/resources/networks.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/networks/{id}">client.networks.<a href="./src/resources/networks.ts">retrieve</a>(id, { ...params }) -> void</code>
- <code title="get /api/networks">client.networks.<a href="./src/resources/networks.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/networks/{id}">client.networks.<a href="./src/resources/networks.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /api/networks/{id}/connect">client.networks.<a href="./src/resources/networks.ts">connect</a>(id, { ...params }) -> void</code>
- <code title="post /api/networks/{id}/disconnect">client.networks.<a href="./src/resources/networks.ts">disconnect</a>(id, { ...params }) -> void</code>
- <code title="get /api/networks/{id}/inspect">client.networks.<a href="./src/resources/networks.ts">inspect</a>(id, { ...params }) -> void</code>

# Notifications

Methods:

- <code title="post /api/notifications">client.notifications.<a href="./src/resources/notifications/notifications.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/notifications/{id}">client.notifications.<a href="./src/resources/notifications/notifications.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/notifications/{id}">client.notifications.<a href="./src/resources/notifications/notifications.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/notifications">client.notifications.<a href="./src/resources/notifications/notifications.ts">list</a>() -> void</code>
- <code title="delete /api/notifications/{id}">client.notifications.<a href="./src/resources/notifications/notifications.ts">delete</a>(id) -> void</code>

## Test

Methods:

- <code title="post /api/notifications/test">client.notifications.test.<a href="./src/resources/notifications/test.ts">create</a>({ ...params }) -> void</code>
- <code title="post /api/notifications/{id}/test">client.notifications.test.<a href="./src/resources/notifications/test.ts">run</a>(id) -> void</code>

## TriggerTest

Methods:

- <code title="post /api/notifications/trigger-test">client.notifications.triggerTest.<a href="./src/resources/notifications/trigger-test.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/notifications/trigger-test">client.notifications.triggerTest.<a href="./src/resources/notifications/trigger-test.ts">retrieve</a>() -> void</code>

# Preferences

## FavoriteGroups

Methods:

- <code title="post /api/preferences/favorite-groups">client.preferences.favoriteGroups.<a href="./src/resources/preferences/favorite-groups.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/preferences/favorite-groups">client.preferences.favoriteGroups.<a href="./src/resources/preferences/favorite-groups.ts">list</a>({ ...params }) -> void</code>

## Favorites

Methods:

- <code title="post /api/preferences/favorites">client.preferences.favorites.<a href="./src/resources/preferences/favorites.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/preferences/favorites">client.preferences.favorites.<a href="./src/resources/preferences/favorites.ts">list</a>({ ...params }) -> void</code>

## Grid

Methods:

- <code title="post /api/preferences/grid">client.preferences.grid.<a href="./src/resources/preferences/grid.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/preferences/grid">client.preferences.grid.<a href="./src/resources/preferences/grid.ts">retrieve</a>() -> void</code>
- <code title="delete /api/preferences/grid">client.preferences.grid.<a href="./src/resources/preferences/grid.ts">delete</a>({ ...params }) -> void</code>

# Profile

Methods:

- <code title="get /api/profile">client.profile.<a href="./src/resources/profile/profile.ts">retrieve</a>() -> void</code>
- <code title="put /api/profile">client.profile.<a href="./src/resources/profile/profile.ts">update</a>({ ...params }) -> void</code>

## Avatar

Methods:

- <code title="delete /api/profile/avatar">client.profile.avatar.<a href="./src/resources/profile/avatar.ts">delete</a>() -> void</code>
- <code title="post /api/profile/avatar">client.profile.avatar.<a href="./src/resources/profile/avatar.ts">upload</a>({ ...params }) -> void</code>

## Preferences

Methods:

- <code title="get /api/profile/preferences">client.profile.preferences.<a href="./src/resources/profile/preferences.ts">retrieve</a>() -> void</code>
- <code title="put /api/profile/preferences">client.profile.preferences.<a href="./src/resources/profile/preferences.ts">update</a>({ ...params }) -> void</code>

# Prune

Methods:

- <code title="post /api/prune/all">client.prune.<a href="./src/resources/prune.ts">pruneAll</a>({ ...params }) -> void</code>
- <code title="post /api/prune/containers">client.prune.<a href="./src/resources/prune.ts">pruneContainers</a>({ ...params }) -> void</code>
- <code title="post /api/prune/images">client.prune.<a href="./src/resources/prune.ts">pruneImages</a>({ ...params }) -> void</code>
- <code title="post /api/prune/networks">client.prune.<a href="./src/resources/prune.ts">pruneNetworks</a>({ ...params }) -> void</code>
- <code title="post /api/prune/volumes">client.prune.<a href="./src/resources/prune.ts">pruneVolumes</a>({ ...params }) -> void</code>

# Roles

Methods:

- <code title="post /api/roles">client.roles.<a href="./src/resources/roles.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/roles/{id}">client.roles.<a href="./src/resources/roles.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/roles/{id}">client.roles.<a href="./src/resources/roles.ts">update</a>(id) -> void</code>
- <code title="get /api/roles">client.roles.<a href="./src/resources/roles.ts">list</a>() -> void</code>
- <code title="delete /api/roles/{id}">client.roles.<a href="./src/resources/roles.ts">delete</a>(id) -> void</code>

# Schedules

Methods:

- <code title="get /api/schedules">client.schedules.<a href="./src/resources/schedules/schedules.ts">list</a>() -> void</code>
- <code title="delete /api/schedules/{type}/{id}">client.schedules.<a href="./src/resources/schedules/schedules.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /api/schedules/{type}/{id}/run">client.schedules.<a href="./src/resources/schedules/schedules.ts">run</a>(id, { ...params }) -> void</code>
- <code title="get /api/schedules/stream">client.schedules.<a href="./src/resources/schedules/schedules.ts">stream</a>() -> void</code>
- <code title="post /api/schedules/{type}/{id}/toggle">client.schedules.<a href="./src/resources/schedules/schedules.ts">toggle</a>(id, { ...params }) -> void</code>

## Executions

Methods:

- <code title="get /api/schedules/executions/{id}">client.schedules.executions.<a href="./src/resources/schedules/executions.ts">retrieve</a>(id) -> void</code>
- <code title="get /api/schedules/executions">client.schedules.executions.<a href="./src/resources/schedules/executions.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/schedules/executions/{id}">client.schedules.executions.<a href="./src/resources/schedules/executions.ts">delete</a>(id) -> void</code>

## Settings

Methods:

- <code title="get /api/schedules/settings">client.schedules.settings.<a href="./src/resources/schedules/settings.ts">retrieve</a>() -> void</code>
- <code title="put /api/schedules/settings">client.schedules.settings.<a href="./src/resources/schedules/settings.ts">update</a>({ ...params }) -> void</code>

## System

Methods:

- <code title="post /api/schedules/system/{id}/toggle">client.schedules.system.<a href="./src/resources/schedules/system.ts">toggle</a>(id) -> void</code>

# SelfUpdate

Methods:

- <code title="get /api/self-update/check">client.selfUpdate.<a href="./src/resources/self-update.ts">checkStatus</a>() -> void</code>
- <code title="get /api/self-update/progress">client.selfUpdate.<a href="./src/resources/self-update.ts">getProgress</a>({ ...params }) -> void</code>
- <code title="post /api/self-update">client.selfUpdate.<a href="./src/resources/self-update.ts">initiate</a>({ ...params }) -> void</code>

# Settings

Methods:

- <code title="get /api/settings/theme">client.settings.<a href="./src/resources/settings/settings.ts">retrieveTheme</a>() -> void</code>

## General

Methods:

- <code title="post /api/settings/general">client.settings.general.<a href="./src/resources/settings/general.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/settings/general">client.settings.general.<a href="./src/resources/settings/general.ts">retrieve</a>() -> void</code>

## Scanner

Methods:

- <code title="post /api/settings/scanner">client.settings.scanner.<a href="./src/resources/settings/scanner.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/settings/scanner">client.settings.scanner.<a href="./src/resources/settings/scanner.ts">retrieve</a>({ ...params }) -> void</code>
- <code title="delete /api/settings/scanner">client.settings.scanner.<a href="./src/resources/settings/scanner.ts">delete</a>({ ...params }) -> void</code>

# Stacks

Methods:

- <code title="post /api/stacks">client.stacks.<a href="./src/resources/stacks/stacks.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/stacks">client.stacks.<a href="./src/resources/stacks/stacks.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/stacks/{name}">client.stacks.<a href="./src/resources/stacks/stacks.ts">delete</a>(name, { ...params }) -> void</code>
- <code title="post /api/stacks/adopt">client.stacks.<a href="./src/resources/stacks/stacks.ts">adopt</a>({ ...params }) -> void</code>
- <code title="post /api/stacks/{name}/check-path-change">client.stacks.<a href="./src/resources/stacks/stacks.ts">checkPathChange</a>(name, { ...params }) -> void</code>
- <code title="post /api/stacks/{name}/down">client.stacks.<a href="./src/resources/stacks/stacks.ts">down</a>(name, { ...params }) -> void</code>
- <code title="get /api/stacks/base-path">client.stacks.<a href="./src/resources/stacks/stacks.ts">getBasePath</a>() -> void</code>
- <code title="get /api/stacks/default-path">client.stacks.<a href="./src/resources/stacks/stacks.ts">getDefaultPath</a>({ ...params }) -> void</code>
- <code title="get /api/stacks/path-hints">client.stacks.<a href="./src/resources/stacks/stacks.ts">getPathHints</a>({ ...params }) -> void</code>
- <code title="get /api/stacks/sources">client.stacks.<a href="./src/resources/stacks/stacks.ts">getSources</a>({ ...params }) -> void</code>
- <code title="post /api/stacks/{name}/relocate">client.stacks.<a href="./src/resources/stacks/stacks.ts">relocate</a>(name, { ...params }) -> void</code>
- <code title="post /api/stacks/{name}/restart">client.stacks.<a href="./src/resources/stacks/stacks.ts">restart</a>(name, { ...params }) -> void</code>
- <code title="post /api/stacks/scan">client.stacks.<a href="./src/resources/stacks/stacks.ts">scan</a>({ ...params }) -> void</code>
- <code title="post /api/stacks/{name}/start">client.stacks.<a href="./src/resources/stacks/stacks.ts">start</a>(name, { ...params }) -> void</code>
- <code title="post /api/stacks/{name}/stop">client.stacks.<a href="./src/resources/stacks/stacks.ts">stop</a>(name, { ...params }) -> void</code>
- <code title="post /api/stacks/validate-path">client.stacks.<a href="./src/resources/stacks/stacks.ts">validatePath</a>({ ...params }) -> void</code>

## Compose

Methods:

- <code title="put /api/stacks/{name}/compose">client.stacks.compose.<a href="./src/resources/stacks/compose.ts">update</a>(name, { ...params }) -> void</code>
- <code title="get /api/stacks/{name}/compose">client.stacks.compose.<a href="./src/resources/stacks/compose.ts">get</a>(name, { ...params }) -> void</code>

## Env

Methods:

- <code title="put /api/stacks/{name}/env">client.stacks.env.<a href="./src/resources/stacks/env/env.ts">update</a>(name, { ...params }) -> void</code>
- <code title="get /api/stacks/{name}/env">client.stacks.env.<a href="./src/resources/stacks/env/env.ts">get</a>(name, { ...params }) -> void</code>
- <code title="post /api/stacks/{name}/env/validate">client.stacks.env.<a href="./src/resources/stacks/env/env.ts">validate</a>(name, { ...params }) -> void</code>

### Raw

Methods:

- <code title="put /api/stacks/{name}/env/raw">client.stacks.env.raw.<a href="./src/resources/stacks/env/raw.ts">update</a>(name, { ...params }) -> void</code>
- <code title="get /api/stacks/{name}/env/raw">client.stacks.env.raw.<a href="./src/resources/stacks/env/raw.ts">get</a>(name, { ...params }) -> void</code>

# System

Methods:

- <code title="get /api/system">client.system.<a href="./src/resources/system/system.ts">retrieve</a>({ ...params }) -> void</code>

## Disk

Methods:

- <code title="get /api/system/disk">client.system.disk.<a href="./src/resources/system/disk.ts">retrieve</a>({ ...params }) -> void</code>

## Files

Methods:

- <code title="get /api/system/files">client.system.files.<a href="./src/resources/system/files/files.ts">list</a>({ ...params }) -> void</code>

### Content

Methods:

- <code title="get /api/system/files/content">client.system.files.content.<a href="./src/resources/system/files/content.ts">retrieve</a>({ ...params }) -> void</code>

# Users

Methods:

- <code title="post /api/users">client.users.<a href="./src/resources/users/users.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/users/{id}">client.users.<a href="./src/resources/users/users.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/users/{id}">client.users.<a href="./src/resources/users/users.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/users">client.users.<a href="./src/resources/users/users.ts">list</a>() -> void</code>
- <code title="delete /api/users/{id}">client.users.<a href="./src/resources/users/users.ts">delete</a>(id, { ...params }) -> void</code>

## Mfa

Methods:

- <code title="post /api/users/{id}/mfa">client.users.mfa.<a href="./src/resources/users/mfa.ts">create</a>(id, { ...params }) -> void</code>
- <code title="delete /api/users/{id}/mfa">client.users.mfa.<a href="./src/resources/users/mfa.ts">delete</a>(id) -> void</code>

## Roles

Methods:

- <code title="post /api/users/{id}/roles">client.users.roles.<a href="./src/resources/users/roles.ts">create</a>(id, { ...params }) -> void</code>
- <code title="get /api/users/{id}/roles">client.users.roles.<a href="./src/resources/users/roles.ts">list</a>(id) -> void</code>
- <code title="delete /api/users/{id}/roles">client.users.roles.<a href="./src/resources/users/roles.ts">delete</a>(id) -> void</code>

# Volumes

Methods:

- <code title="post /api/volumes">client.volumes.<a href="./src/resources/volumes/volumes.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/volumes/{name}">client.volumes.<a href="./src/resources/volumes/volumes.ts">retrieve</a>(name, { ...params }) -> void</code>
- <code title="get /api/volumes">client.volumes.<a href="./src/resources/volumes/volumes.ts">list</a>({ ...params }) -> void</code>
- <code title="delete /api/volumes/{name}">client.volumes.<a href="./src/resources/volumes/volumes.ts">delete</a>(name, { ...params }) -> void</code>
- <code title="post /api/volumes/{name}/clone">client.volumes.<a href="./src/resources/volumes/volumes.ts">clone</a>(name, { ...params }) -> void</code>
- <code title="get /api/volumes/{name}/export">client.volumes.<a href="./src/resources/volumes/volumes.ts">export</a>(name, { ...params }) -> void</code>
- <code title="get /api/volumes/{name}/inspect">client.volumes.<a href="./src/resources/volumes/volumes.ts">inspect</a>(name, { ...params }) -> void</code>

## Browse

Methods:

- <code title="get /api/volumes/{name}/browse">client.volumes.browse.<a href="./src/resources/volumes/browse.ts">retrieve</a>(name, { ...params }) -> void</code>
- <code title="get /api/volumes/{name}/browse/content">client.volumes.browse.<a href="./src/resources/volumes/browse.ts">content</a>(name, { ...params }) -> void</code>
- <code title="post /api/volumes/{name}/browse/release">client.volumes.browse.<a href="./src/resources/volumes/browse.ts">release</a>(name, { ...params }) -> void</code>

# Registries

Methods:

- <code title="post /api/registries">client.registries.<a href="./src/resources/registries.ts">create</a>({ ...params }) -> void</code>
- <code title="get /api/registries/{id}">client.registries.<a href="./src/resources/registries.ts">retrieve</a>(id) -> void</code>
- <code title="put /api/registries/{id}">client.registries.<a href="./src/resources/registries.ts">update</a>(id, { ...params }) -> void</code>
- <code title="get /api/registries">client.registries.<a href="./src/resources/registries.ts">list</a>() -> void</code>
- <code title="delete /api/registries/{id}">client.registries.<a href="./src/resources/registries.ts">delete</a>(id) -> void</code>
- <code title="delete /api/registry/image">client.registries.<a href="./src/resources/registries.ts">deleteImage</a>({ ...params }) -> void</code>
- <code title="get /api/registry/catalog">client.registries.<a href="./src/resources/registries.ts">listCatalog</a>({ ...params }) -> void</code>
- <code title="get /api/registry/tags">client.registries.<a href="./src/resources/registries.ts">listTags</a>({ ...params }) -> void</code>
- <code title="get /api/registry/search">client.registries.<a href="./src/resources/registries.ts">search</a>({ ...params }) -> void</code>
- <code title="post /api/registries/{id}/default">client.registries.<a href="./src/resources/registries.ts">setDefault</a>(id) -> void</code>
