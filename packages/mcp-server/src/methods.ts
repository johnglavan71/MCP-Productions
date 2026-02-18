// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.activity.list',
    fullyQualifiedName: 'activity.list',
    httpMethod: 'get',
    httpPath: '/api/activity',
  },
  {
    clientCallName: 'client.activity.delete',
    fullyQualifiedName: 'activity.delete',
    httpMethod: 'delete',
    httpPath: '/api/activity',
  },
  {
    clientCallName: 'client.activity.listContainers',
    fullyQualifiedName: 'activity.listContainers',
    httpMethod: 'get',
    httpPath: '/api/activity/containers',
  },
  {
    clientCallName: 'client.activity.listEvents',
    fullyQualifiedName: 'activity.listEvents',
    httpMethod: 'get',
    httpPath: '/api/activity/events',
  },
  {
    clientCallName: 'client.activity.retrieveStats',
    fullyQualifiedName: 'activity.retrieveStats',
    httpMethod: 'get',
    httpPath: '/api/activity/stats',
  },
  {
    clientCallName: 'client.audit.retrieve',
    fullyQualifiedName: 'audit.retrieve',
    httpMethod: 'get',
    httpPath: '/api/audit',
  },
  {
    clientCallName: 'client.audit.export',
    fullyQualifiedName: 'audit.export',
    httpMethod: 'get',
    httpPath: '/api/audit/export',
  },
  {
    clientCallName: 'client.audit.listEvents',
    fullyQualifiedName: 'audit.listEvents',
    httpMethod: 'get',
    httpPath: '/api/audit/events',
  },
  {
    clientCallName: 'client.audit.listUsers',
    fullyQualifiedName: 'audit.listUsers',
    httpMethod: 'get',
    httpPath: '/api/audit/users',
  },
  {
    clientCallName: 'client.auth.listProviders',
    fullyQualifiedName: 'auth.listProviders',
    httpMethod: 'get',
    httpPath: '/api/auth/providers',
  },
  {
    clientCallName: 'client.auth.login',
    fullyQualifiedName: 'auth.login',
    httpMethod: 'post',
    httpPath: '/api/auth/login',
  },
  {
    clientCallName: 'client.auth.logout',
    fullyQualifiedName: 'auth.logout',
    httpMethod: 'post',
    httpPath: '/api/auth/logout',
  },
  {
    clientCallName: 'client.auth.retrieveSession',
    fullyQualifiedName: 'auth.retrieveSession',
    httpMethod: 'get',
    httpPath: '/api/auth/session',
  },
  {
    clientCallName: 'client.auth.ldap.create',
    fullyQualifiedName: 'auth.ldap.create',
    httpMethod: 'post',
    httpPath: '/api/auth/ldap',
  },
  {
    clientCallName: 'client.auth.ldap.retrieve',
    fullyQualifiedName: 'auth.ldap.retrieve',
    httpMethod: 'get',
    httpPath: '/api/auth/ldap/{id}',
  },
  {
    clientCallName: 'client.auth.ldap.update',
    fullyQualifiedName: 'auth.ldap.update',
    httpMethod: 'put',
    httpPath: '/api/auth/ldap/{id}',
  },
  {
    clientCallName: 'client.auth.ldap.list',
    fullyQualifiedName: 'auth.ldap.list',
    httpMethod: 'get',
    httpPath: '/api/auth/ldap',
  },
  {
    clientCallName: 'client.auth.ldap.delete',
    fullyQualifiedName: 'auth.ldap.delete',
    httpMethod: 'delete',
    httpPath: '/api/auth/ldap/{id}',
  },
  {
    clientCallName: 'client.auth.ldap.test',
    fullyQualifiedName: 'auth.ldap.test',
    httpMethod: 'post',
    httpPath: '/api/auth/ldap/{id}/test',
  },
  {
    clientCallName: 'client.auth.oidc.create',
    fullyQualifiedName: 'auth.oidc.create',
    httpMethod: 'post',
    httpPath: '/api/auth/oidc',
  },
  {
    clientCallName: 'client.auth.oidc.retrieve',
    fullyQualifiedName: 'auth.oidc.retrieve',
    httpMethod: 'get',
    httpPath: '/api/auth/oidc/{id}',
  },
  {
    clientCallName: 'client.auth.oidc.update',
    fullyQualifiedName: 'auth.oidc.update',
    httpMethod: 'put',
    httpPath: '/api/auth/oidc/{id}',
  },
  {
    clientCallName: 'client.auth.oidc.list',
    fullyQualifiedName: 'auth.oidc.list',
    httpMethod: 'get',
    httpPath: '/api/auth/oidc',
  },
  {
    clientCallName: 'client.auth.oidc.delete',
    fullyQualifiedName: 'auth.oidc.delete',
    httpMethod: 'delete',
    httpPath: '/api/auth/oidc/{id}',
  },
  {
    clientCallName: 'client.auth.oidc.callback',
    fullyQualifiedName: 'auth.oidc.callback',
    httpMethod: 'get',
    httpPath: '/api/auth/oidc/callback',
  },
  {
    clientCallName: 'client.auth.oidc.test',
    fullyQualifiedName: 'auth.oidc.test',
    httpMethod: 'post',
    httpPath: '/api/auth/oidc/{id}/test',
  },
  {
    clientCallName: 'client.auth.oidc.initiate.create',
    fullyQualifiedName: 'auth.oidc.initiate.create',
    httpMethod: 'post',
    httpPath: '/api/auth/oidc/{id}/initiate',
  },
  {
    clientCallName: 'client.auth.oidc.initiate.retrieve',
    fullyQualifiedName: 'auth.oidc.initiate.retrieve',
    httpMethod: 'get',
    httpPath: '/api/auth/oidc/{id}/initiate',
  },
  {
    clientCallName: 'client.auth.settings.retrieve',
    fullyQualifiedName: 'auth.settings.retrieve',
    httpMethod: 'get',
    httpPath: '/api/auth/settings',
  },
  {
    clientCallName: 'client.auth.settings.update',
    fullyQualifiedName: 'auth.settings.update',
    httpMethod: 'put',
    httpPath: '/api/auth/settings',
  },
  {
    clientCallName: 'client.autoUpdate.retrieve',
    fullyQualifiedName: 'autoUpdate.retrieve',
    httpMethod: 'get',
    httpPath: '/api/auto-update',
  },
  {
    clientCallName: 'client.autoUpdate.createContainer',
    fullyQualifiedName: 'autoUpdate.createContainer',
    httpMethod: 'post',
    httpPath: '/api/auto-update/{containerName}',
  },
  {
    clientCallName: 'client.autoUpdate.deleteContainer',
    fullyQualifiedName: 'autoUpdate.deleteContainer',
    httpMethod: 'delete',
    httpPath: '/api/auto-update/{containerName}',
  },
  {
    clientCallName: 'client.autoUpdate.retrieveContainer',
    fullyQualifiedName: 'autoUpdate.retrieveContainer',
    httpMethod: 'get',
    httpPath: '/api/auto-update/{containerName}',
  },
  {
    clientCallName: 'client.batch.create',
    fullyQualifiedName: 'batch.create',
    httpMethod: 'post',
    httpPath: '/api/batch',
  },
  {
    clientCallName: 'client.changelog.retrieve',
    fullyQualifiedName: 'changelog.retrieve',
    httpMethod: 'get',
    httpPath: '/api/changelog',
  },
  {
    clientCallName: 'client.configSets.create',
    fullyQualifiedName: 'configSets.create',
    httpMethod: 'post',
    httpPath: '/api/config-sets',
  },
  {
    clientCallName: 'client.configSets.retrieve',
    fullyQualifiedName: 'configSets.retrieve',
    httpMethod: 'get',
    httpPath: '/api/config-sets/{id}',
  },
  {
    clientCallName: 'client.configSets.update',
    fullyQualifiedName: 'configSets.update',
    httpMethod: 'put',
    httpPath: '/api/config-sets/{id}',
  },
  {
    clientCallName: 'client.configSets.list',
    fullyQualifiedName: 'configSets.list',
    httpMethod: 'get',
    httpPath: '/api/config-sets',
  },
  {
    clientCallName: 'client.configSets.delete',
    fullyQualifiedName: 'configSets.delete',
    httpMethod: 'delete',
    httpPath: '/api/config-sets/{id}',
  },
  {
    clientCallName: 'client.containers.create',
    fullyQualifiedName: 'containers.create',
    httpMethod: 'post',
    httpPath: '/api/containers',
  },
  {
    clientCallName: 'client.containers.retrieve',
    fullyQualifiedName: 'containers.retrieve',
    httpMethod: 'get',
    httpPath: '/api/containers/{id}',
  },
  {
    clientCallName: 'client.containers.update',
    fullyQualifiedName: 'containers.update',
    httpMethod: 'post',
    httpPath: '/api/containers/{id}/update',
  },
  {
    clientCallName: 'client.containers.list',
    fullyQualifiedName: 'containers.list',
    httpMethod: 'get',
    httpPath: '/api/containers',
  },
  {
    clientCallName: 'client.containers.delete',
    fullyQualifiedName: 'containers.delete',
    httpMethod: 'delete',
    httpPath: '/api/containers/{id}',
  },
  {
    clientCallName: 'client.containers.batchUpdate',
    fullyQualifiedName: 'containers.batchUpdate',
    httpMethod: 'post',
    httpPath: '/api/containers/batch-update',
  },
  {
    clientCallName: 'client.containers.batchUpdateStream',
    fullyQualifiedName: 'containers.batchUpdateStream',
    httpMethod: 'post',
    httpPath: '/api/containers/batch-update-stream',
  },
  {
    clientCallName: 'client.containers.checkUpdates',
    fullyQualifiedName: 'containers.checkUpdates',
    httpMethod: 'post',
    httpPath: '/api/containers/check-updates',
  },
  {
    clientCallName: 'client.containers.exec',
    fullyQualifiedName: 'containers.exec',
    httpMethod: 'post',
    httpPath: '/api/containers/{id}/exec',
  },
  {
    clientCallName: 'client.containers.inspect',
    fullyQualifiedName: 'containers.inspect',
    httpMethod: 'get',
    httpPath: '/api/containers/{id}/inspect',
  },
  {
    clientCallName: 'client.containers.listShells',
    fullyQualifiedName: 'containers.listShells',
    httpMethod: 'get',
    httpPath: '/api/containers/{id}/shells',
  },
  {
    clientCallName: 'client.containers.listSizes',
    fullyQualifiedName: 'containers.listSizes',
    httpMethod: 'get',
    httpPath: '/api/containers/sizes',
  },
  {
    clientCallName: 'client.containers.pause',
    fullyQualifiedName: 'containers.pause',
    httpMethod: 'post',
    httpPath: '/api/containers/{id}/pause',
  },
  {
    clientCallName: 'client.containers.rename',
    fullyQualifiedName: 'containers.rename',
    httpMethod: 'post',
    httpPath: '/api/containers/{id}/rename',
  },
  {
    clientCallName: 'client.containers.restart',
    fullyQualifiedName: 'containers.restart',
    httpMethod: 'post',
    httpPath: '/api/containers/{id}/restart',
  },
  {
    clientCallName: 'client.containers.start',
    fullyQualifiedName: 'containers.start',
    httpMethod: 'post',
    httpPath: '/api/containers/{id}/start',
  },
  {
    clientCallName: 'client.containers.stop',
    fullyQualifiedName: 'containers.stop',
    httpMethod: 'post',
    httpPath: '/api/containers/{id}/stop',
  },
  {
    clientCallName: 'client.containers.top',
    fullyQualifiedName: 'containers.top',
    httpMethod: 'get',
    httpPath: '/api/containers/{id}/top',
  },
  {
    clientCallName: 'client.containers.unpause',
    fullyQualifiedName: 'containers.unpause',
    httpMethod: 'post',
    httpPath: '/api/containers/{id}/unpause',
  },
  {
    clientCallName: 'client.containers.pendingUpdates.list',
    fullyQualifiedName: 'containers.pendingUpdates.list',
    httpMethod: 'get',
    httpPath: '/api/containers/pending-updates',
  },
  {
    clientCallName: 'client.containers.pendingUpdates.delete',
    fullyQualifiedName: 'containers.pendingUpdates.delete',
    httpMethod: 'delete',
    httpPath: '/api/containers/pending-updates',
  },
  {
    clientCallName: 'client.containers.stats.retrieve',
    fullyQualifiedName: 'containers.stats.retrieve',
    httpMethod: 'get',
    httpPath: '/api/containers/{id}/stats',
  },
  {
    clientCallName: 'client.containers.stats.list',
    fullyQualifiedName: 'containers.stats.list',
    httpMethod: 'get',
    httpPath: '/api/containers/stats',
  },
  {
    clientCallName: 'client.containers.files.create',
    fullyQualifiedName: 'containers.files.create',
    httpMethod: 'post',
    httpPath: '/api/containers/{id}/files/create',
  },
  {
    clientCallName: 'client.containers.files.list',
    fullyQualifiedName: 'containers.files.list',
    httpMethod: 'get',
    httpPath: '/api/containers/{id}/files',
  },
  {
    clientCallName: 'client.containers.files.delete',
    fullyQualifiedName: 'containers.files.delete',
    httpMethod: 'delete',
    httpPath: '/api/containers/{id}/files/delete',
  },
  {
    clientCallName: 'client.containers.files.chmod',
    fullyQualifiedName: 'containers.files.chmod',
    httpMethod: 'post',
    httpPath: '/api/containers/{id}/files/chmod',
  },
  {
    clientCallName: 'client.containers.files.download',
    fullyQualifiedName: 'containers.files.download',
    httpMethod: 'get',
    httpPath: '/api/containers/{id}/files/download',
  },
  {
    clientCallName: 'client.containers.files.rename',
    fullyQualifiedName: 'containers.files.rename',
    httpMethod: 'post',
    httpPath: '/api/containers/{id}/files/rename',
  },
  {
    clientCallName: 'client.containers.files.upload',
    fullyQualifiedName: 'containers.files.upload',
    httpMethod: 'post',
    httpPath: '/api/containers/{id}/files/upload',
  },
  {
    clientCallName: 'client.containers.files.content.retrieve',
    fullyQualifiedName: 'containers.files.content.retrieve',
    httpMethod: 'get',
    httpPath: '/api/containers/{id}/files/content',
  },
  {
    clientCallName: 'client.containers.files.content.update',
    fullyQualifiedName: 'containers.files.content.update',
    httpMethod: 'put',
    httpPath: '/api/containers/{id}/files/content',
  },
  {
    clientCallName: 'client.containers.logs.retrieve',
    fullyQualifiedName: 'containers.logs.retrieve',
    httpMethod: 'get',
    httpPath: '/api/containers/{id}/logs',
  },
  {
    clientCallName: 'client.containers.logs.stream',
    fullyQualifiedName: 'containers.logs.stream',
    httpMethod: 'get',
    httpPath: '/api/containers/{id}/logs/stream',
  },
  {
    clientCallName: 'client.dashboard.preferences.create',
    fullyQualifiedName: 'dashboard.preferences.create',
    httpMethod: 'post',
    httpPath: '/api/dashboard/preferences',
  },
  {
    clientCallName: 'client.dashboard.preferences.retrieve',
    fullyQualifiedName: 'dashboard.preferences.retrieve',
    httpMethod: 'get',
    httpPath: '/api/dashboard/preferences',
  },
  {
    clientCallName: 'client.dashboard.stats.retrieve',
    fullyQualifiedName: 'dashboard.stats.retrieve',
    httpMethod: 'get',
    httpPath: '/api/dashboard/stats',
  },
  {
    clientCallName: 'client.dashboard.stats.stream',
    fullyQualifiedName: 'dashboard.stats.stream',
    httpMethod: 'get',
    httpPath: '/api/dashboard/stats/stream',
  },
  {
    clientCallName: 'client.dependencies.list',
    fullyQualifiedName: 'dependencies.list',
    httpMethod: 'get',
    httpPath: '/api/dependencies',
  },
  {
    clientCallName: 'client.environments.create',
    fullyQualifiedName: 'environments.create',
    httpMethod: 'post',
    httpPath: '/api/environments',
  },
  {
    clientCallName: 'client.environments.retrieve',
    fullyQualifiedName: 'environments.retrieve',
    httpMethod: 'get',
    httpPath: '/api/environments/{id}',
  },
  {
    clientCallName: 'client.environments.update',
    fullyQualifiedName: 'environments.update',
    httpMethod: 'put',
    httpPath: '/api/environments/{id}',
  },
  {
    clientCallName: 'client.environments.list',
    fullyQualifiedName: 'environments.list',
    httpMethod: 'get',
    httpPath: '/api/environments',
  },
  {
    clientCallName: 'client.environments.delete',
    fullyQualifiedName: 'environments.delete',
    httpMethod: 'delete',
    httpPath: '/api/environments/{id}',
  },
  {
    clientCallName: 'client.environments.detectSocket',
    fullyQualifiedName: 'environments.detectSocket',
    httpMethod: 'get',
    httpPath: '/api/environments/detect-socket',
  },
  {
    clientCallName: 'client.environments.test.create',
    fullyQualifiedName: 'environments.test.create',
    httpMethod: 'post',
    httpPath: '/api/environments/test',
  },
  {
    clientCallName: 'client.environments.test.run',
    fullyQualifiedName: 'environments.test.run',
    httpMethod: 'post',
    httpPath: '/api/environments/{id}/test',
  },
  {
    clientCallName: 'client.environments.diskWarning.create',
    fullyQualifiedName: 'environments.diskWarning.create',
    httpMethod: 'post',
    httpPath: '/api/environments/{id}/disk-warning',
  },
  {
    clientCallName: 'client.environments.diskWarning.retrieve',
    fullyQualifiedName: 'environments.diskWarning.retrieve',
    httpMethod: 'get',
    httpPath: '/api/environments/{id}/disk-warning',
  },
  {
    clientCallName: 'client.environments.imagePrune.create',
    fullyQualifiedName: 'environments.imagePrune.create',
    httpMethod: 'post',
    httpPath: '/api/environments/{id}/image-prune',
  },
  {
    clientCallName: 'client.environments.imagePrune.retrieve',
    fullyQualifiedName: 'environments.imagePrune.retrieve',
    httpMethod: 'get',
    httpPath: '/api/environments/{id}/image-prune',
  },
  {
    clientCallName: 'client.environments.imagePrune.update',
    fullyQualifiedName: 'environments.imagePrune.update',
    httpMethod: 'put',
    httpPath: '/api/environments/{id}/image-prune',
  },
  {
    clientCallName: 'client.environments.notifications.create',
    fullyQualifiedName: 'environments.notifications.create',
    httpMethod: 'post',
    httpPath: '/api/environments/{id}/notifications',
  },
  {
    clientCallName: 'client.environments.notifications.retrieve',
    fullyQualifiedName: 'environments.notifications.retrieve',
    httpMethod: 'get',
    httpPath: '/api/environments/{id}/notifications/{notificationId}',
  },
  {
    clientCallName: 'client.environments.notifications.update',
    fullyQualifiedName: 'environments.notifications.update',
    httpMethod: 'put',
    httpPath: '/api/environments/{id}/notifications/{notificationId}',
  },
  {
    clientCallName: 'client.environments.notifications.list',
    fullyQualifiedName: 'environments.notifications.list',
    httpMethod: 'get',
    httpPath: '/api/environments/{id}/notifications',
  },
  {
    clientCallName: 'client.environments.notifications.delete',
    fullyQualifiedName: 'environments.notifications.delete',
    httpMethod: 'delete',
    httpPath: '/api/environments/{id}/notifications/{notificationId}',
  },
  {
    clientCallName: 'client.environments.timezone.retrieve',
    fullyQualifiedName: 'environments.timezone.retrieve',
    httpMethod: 'get',
    httpPath: '/api/environments/{id}/timezone',
  },
  {
    clientCallName: 'client.environments.timezone.update',
    fullyQualifiedName: 'environments.timezone.update',
    httpMethod: 'post',
    httpPath: '/api/environments/{id}/timezone',
  },
  {
    clientCallName: 'client.environments.updateCheck.retrieve',
    fullyQualifiedName: 'environments.updateCheck.retrieve',
    httpMethod: 'get',
    httpPath: '/api/environments/{id}/update-check',
  },
  {
    clientCallName: 'client.environments.updateCheck.run',
    fullyQualifiedName: 'environments.updateCheck.run',
    httpMethod: 'post',
    httpPath: '/api/environments/{id}/update-check',
  },
  {
    clientCallName: 'client.events.list',
    fullyQualifiedName: 'events.list',
    httpMethod: 'get',
    httpPath: '/api/events',
  },
  {
    clientCallName: 'client.git.createPreviewEnv',
    fullyQualifiedName: 'git.createPreviewEnv',
    httpMethod: 'post',
    httpPath: '/api/git/preview-env',
  },
  {
    clientCallName: 'client.git.credentials.create',
    fullyQualifiedName: 'git.credentials.create',
    httpMethod: 'post',
    httpPath: '/api/git/credentials',
  },
  {
    clientCallName: 'client.git.credentials.retrieve',
    fullyQualifiedName: 'git.credentials.retrieve',
    httpMethod: 'get',
    httpPath: '/api/git/credentials/{id}',
  },
  {
    clientCallName: 'client.git.credentials.update',
    fullyQualifiedName: 'git.credentials.update',
    httpMethod: 'put',
    httpPath: '/api/git/credentials/{id}',
  },
  {
    clientCallName: 'client.git.credentials.list',
    fullyQualifiedName: 'git.credentials.list',
    httpMethod: 'get',
    httpPath: '/api/git/credentials',
  },
  {
    clientCallName: 'client.git.credentials.delete',
    fullyQualifiedName: 'git.credentials.delete',
    httpMethod: 'delete',
    httpPath: '/api/git/credentials/{id}',
  },
  {
    clientCallName: 'client.git.repositories.create',
    fullyQualifiedName: 'git.repositories.create',
    httpMethod: 'post',
    httpPath: '/api/git/repositories',
  },
  {
    clientCallName: 'client.git.repositories.retrieve',
    fullyQualifiedName: 'git.repositories.retrieve',
    httpMethod: 'get',
    httpPath: '/api/git/repositories/{id}',
  },
  {
    clientCallName: 'client.git.repositories.update',
    fullyQualifiedName: 'git.repositories.update',
    httpMethod: 'put',
    httpPath: '/api/git/repositories/{id}',
  },
  {
    clientCallName: 'client.git.repositories.list',
    fullyQualifiedName: 'git.repositories.list',
    httpMethod: 'get',
    httpPath: '/api/git/repositories',
  },
  {
    clientCallName: 'client.git.repositories.delete',
    fullyQualifiedName: 'git.repositories.delete',
    httpMethod: 'delete',
    httpPath: '/api/git/repositories/{id}',
  },
  {
    clientCallName: 'client.git.repositories.deploy',
    fullyQualifiedName: 'git.repositories.deploy',
    httpMethod: 'post',
    httpPath: '/api/git/repositories/{id}/deploy',
  },
  {
    clientCallName: 'client.git.repositories.test.create',
    fullyQualifiedName: 'git.repositories.test.create',
    httpMethod: 'post',
    httpPath: '/api/git/repositories/test',
  },
  {
    clientCallName: 'client.git.repositories.test.run',
    fullyQualifiedName: 'git.repositories.test.run',
    httpMethod: 'post',
    httpPath: '/api/git/repositories/{id}/test',
  },
  {
    clientCallName: 'client.git.repositories.sync.create',
    fullyQualifiedName: 'git.repositories.sync.create',
    httpMethod: 'post',
    httpPath: '/api/git/repositories/{id}/sync',
  },
  {
    clientCallName: 'client.git.repositories.sync.retrieve',
    fullyQualifiedName: 'git.repositories.sync.retrieve',
    httpMethod: 'get',
    httpPath: '/api/git/repositories/{id}/sync',
  },
  {
    clientCallName: 'client.git.stacks.create',
    fullyQualifiedName: 'git.stacks.create',
    httpMethod: 'post',
    httpPath: '/api/git/stacks',
  },
  {
    clientCallName: 'client.git.stacks.retrieve',
    fullyQualifiedName: 'git.stacks.retrieve',
    httpMethod: 'get',
    httpPath: '/api/git/stacks/{id}',
  },
  {
    clientCallName: 'client.git.stacks.update',
    fullyQualifiedName: 'git.stacks.update',
    httpMethod: 'put',
    httpPath: '/api/git/stacks/{id}',
  },
  {
    clientCallName: 'client.git.stacks.list',
    fullyQualifiedName: 'git.stacks.list',
    httpMethod: 'get',
    httpPath: '/api/git/stacks',
  },
  {
    clientCallName: 'client.git.stacks.delete',
    fullyQualifiedName: 'git.stacks.delete',
    httpMethod: 'delete',
    httpPath: '/api/git/stacks/{id}',
  },
  {
    clientCallName: 'client.git.stacks.deploy',
    fullyQualifiedName: 'git.stacks.deploy',
    httpMethod: 'post',
    httpPath: '/api/git/stacks/{id}/deploy',
  },
  {
    clientCallName: 'client.git.stacks.deployStream',
    fullyQualifiedName: 'git.stacks.deployStream',
    httpMethod: 'post',
    httpPath: '/api/git/stacks/{id}/deploy-stream',
  },
  {
    clientCallName: 'client.git.stacks.sync',
    fullyQualifiedName: 'git.stacks.sync',
    httpMethod: 'post',
    httpPath: '/api/git/stacks/{id}/sync',
  },
  {
    clientCallName: 'client.git.stacks.test',
    fullyQualifiedName: 'git.stacks.test',
    httpMethod: 'post',
    httpPath: '/api/git/stacks/{id}/test',
  },
  {
    clientCallName: 'client.git.stacks.envFiles.create',
    fullyQualifiedName: 'git.stacks.envFiles.create',
    httpMethod: 'post',
    httpPath: '/api/git/stacks/{id}/env-files',
  },
  {
    clientCallName: 'client.git.stacks.envFiles.list',
    fullyQualifiedName: 'git.stacks.envFiles.list',
    httpMethod: 'get',
    httpPath: '/api/git/stacks/{id}/env-files',
  },
  {
    clientCallName: 'client.git.stacks.webhook.create',
    fullyQualifiedName: 'git.stacks.webhook.create',
    httpMethod: 'post',
    httpPath: '/api/git/stacks/{id}/webhook',
  },
  {
    clientCallName: 'client.git.stacks.webhook.retrieve',
    fullyQualifiedName: 'git.stacks.webhook.retrieve',
    httpMethod: 'get',
    httpPath: '/api/git/stacks/{id}/webhook',
  },
  {
    clientCallName: 'client.git.webhook.retrieve',
    fullyQualifiedName: 'git.webhook.retrieve',
    httpMethod: 'get',
    httpPath: '/api/git/webhook/{id}',
  },
  {
    clientCallName: 'client.git.webhook.update',
    fullyQualifiedName: 'git.webhook.update',
    httpMethod: 'post',
    httpPath: '/api/git/webhook/{id}',
  },
  {
    clientCallName: 'client.hawser.connect.create',
    fullyQualifiedName: 'hawser.connect.create',
    httpMethod: 'post',
    httpPath: '/api/hawser/connect',
  },
  {
    clientCallName: 'client.hawser.connect.retrieve',
    fullyQualifiedName: 'hawser.connect.retrieve',
    httpMethod: 'get',
    httpPath: '/api/hawser/connect',
  },
  {
    clientCallName: 'client.hawser.tokens.create',
    fullyQualifiedName: 'hawser.tokens.create',
    httpMethod: 'post',
    httpPath: '/api/hawser/tokens',
  },
  {
    clientCallName: 'client.hawser.tokens.list',
    fullyQualifiedName: 'hawser.tokens.list',
    httpMethod: 'get',
    httpPath: '/api/hawser/tokens',
  },
  {
    clientCallName: 'client.hawser.tokens.delete',
    fullyQualifiedName: 'hawser.tokens.delete',
    httpMethod: 'delete',
    httpPath: '/api/hawser/tokens',
  },
  {
    clientCallName: 'client.health.check',
    fullyQualifiedName: 'health.check',
    httpMethod: 'get',
    httpPath: '/api/health',
  },
  {
    clientCallName: 'client.health.checkDatabase',
    fullyQualifiedName: 'health.checkDatabase',
    httpMethod: 'get',
    httpPath: '/api/health/database',
  },
  {
    clientCallName: 'client.host.retrieve',
    fullyQualifiedName: 'host.retrieve',
    httpMethod: 'get',
    httpPath: '/api/host',
  },
  {
    clientCallName: 'client.images.list',
    fullyQualifiedName: 'images.list',
    httpMethod: 'get',
    httpPath: '/api/images',
  },
  {
    clientCallName: 'client.images.delete',
    fullyQualifiedName: 'images.delete',
    httpMethod: 'delete',
    httpPath: '/api/images/{id}',
  },
  {
    clientCallName: 'client.images.export',
    fullyQualifiedName: 'images.export',
    httpMethod: 'get',
    httpPath: '/api/images/{id}/export',
  },
  {
    clientCallName: 'client.images.history',
    fullyQualifiedName: 'images.history',
    httpMethod: 'get',
    httpPath: '/api/images/{id}/history',
  },
  {
    clientCallName: 'client.images.pull',
    fullyQualifiedName: 'images.pull',
    httpMethod: 'post',
    httpPath: '/api/images/pull',
  },
  {
    clientCallName: 'client.images.push',
    fullyQualifiedName: 'images.push',
    httpMethod: 'post',
    httpPath: '/api/images/push',
  },
  {
    clientCallName: 'client.images.tag',
    fullyQualifiedName: 'images.tag',
    httpMethod: 'post',
    httpPath: '/api/images/{id}/tag',
  },
  {
    clientCallName: 'client.images.scan.create',
    fullyQualifiedName: 'images.scan.create',
    httpMethod: 'post',
    httpPath: '/api/images/scan',
  },
  {
    clientCallName: 'client.images.scan.retrieve',
    fullyQualifiedName: 'images.scan.retrieve',
    httpMethod: 'get',
    httpPath: '/api/images/scan',
  },
  {
    clientCallName: 'client.legal.retrieveLicense',
    fullyQualifiedName: 'legal.retrieveLicense',
    httpMethod: 'get',
    httpPath: '/api/legal/license',
  },
  {
    clientCallName: 'client.legal.retrievePrivacy',
    fullyQualifiedName: 'legal.retrievePrivacy',
    httpMethod: 'get',
    httpPath: '/api/legal/privacy',
  },
  {
    clientCallName: 'client.license.create',
    fullyQualifiedName: 'license.create',
    httpMethod: 'post',
    httpPath: '/api/license',
  },
  {
    clientCallName: 'client.license.retrieve',
    fullyQualifiedName: 'license.retrieve',
    httpMethod: 'get',
    httpPath: '/api/license',
  },
  {
    clientCallName: 'client.license.delete',
    fullyQualifiedName: 'license.delete',
    httpMethod: 'delete',
    httpPath: '/api/license',
  },
  {
    clientCallName: 'client.logs.retrieveMerged',
    fullyQualifiedName: 'logs.retrieveMerged',
    httpMethod: 'get',
    httpPath: '/api/logs/merged',
  },
  {
    clientCallName: 'client.metrics.retrieve',
    fullyQualifiedName: 'metrics.retrieve',
    httpMethod: 'get',
    httpPath: '/api/metrics',
  },
  {
    clientCallName: 'client.networks.create',
    fullyQualifiedName: 'networks.create',
    httpMethod: 'post',
    httpPath: '/api/networks',
  },
  {
    clientCallName: 'client.networks.retrieve',
    fullyQualifiedName: 'networks.retrieve',
    httpMethod: 'get',
    httpPath: '/api/networks/{id}',
  },
  {
    clientCallName: 'client.networks.list',
    fullyQualifiedName: 'networks.list',
    httpMethod: 'get',
    httpPath: '/api/networks',
  },
  {
    clientCallName: 'client.networks.delete',
    fullyQualifiedName: 'networks.delete',
    httpMethod: 'delete',
    httpPath: '/api/networks/{id}',
  },
  {
    clientCallName: 'client.networks.connect',
    fullyQualifiedName: 'networks.connect',
    httpMethod: 'post',
    httpPath: '/api/networks/{id}/connect',
  },
  {
    clientCallName: 'client.networks.disconnect',
    fullyQualifiedName: 'networks.disconnect',
    httpMethod: 'post',
    httpPath: '/api/networks/{id}/disconnect',
  },
  {
    clientCallName: 'client.networks.inspect',
    fullyQualifiedName: 'networks.inspect',
    httpMethod: 'get',
    httpPath: '/api/networks/{id}/inspect',
  },
  {
    clientCallName: 'client.notifications.create',
    fullyQualifiedName: 'notifications.create',
    httpMethod: 'post',
    httpPath: '/api/notifications',
  },
  {
    clientCallName: 'client.notifications.retrieve',
    fullyQualifiedName: 'notifications.retrieve',
    httpMethod: 'get',
    httpPath: '/api/notifications/{id}',
  },
  {
    clientCallName: 'client.notifications.update',
    fullyQualifiedName: 'notifications.update',
    httpMethod: 'put',
    httpPath: '/api/notifications/{id}',
  },
  {
    clientCallName: 'client.notifications.list',
    fullyQualifiedName: 'notifications.list',
    httpMethod: 'get',
    httpPath: '/api/notifications',
  },
  {
    clientCallName: 'client.notifications.delete',
    fullyQualifiedName: 'notifications.delete',
    httpMethod: 'delete',
    httpPath: '/api/notifications/{id}',
  },
  {
    clientCallName: 'client.notifications.test.create',
    fullyQualifiedName: 'notifications.test.create',
    httpMethod: 'post',
    httpPath: '/api/notifications/test',
  },
  {
    clientCallName: 'client.notifications.test.run',
    fullyQualifiedName: 'notifications.test.run',
    httpMethod: 'post',
    httpPath: '/api/notifications/{id}/test',
  },
  {
    clientCallName: 'client.notifications.triggerTest.create',
    fullyQualifiedName: 'notifications.triggerTest.create',
    httpMethod: 'post',
    httpPath: '/api/notifications/trigger-test',
  },
  {
    clientCallName: 'client.notifications.triggerTest.retrieve',
    fullyQualifiedName: 'notifications.triggerTest.retrieve',
    httpMethod: 'get',
    httpPath: '/api/notifications/trigger-test',
  },
  {
    clientCallName: 'client.preferences.favoriteGroups.create',
    fullyQualifiedName: 'preferences.favoriteGroups.create',
    httpMethod: 'post',
    httpPath: '/api/preferences/favorite-groups',
  },
  {
    clientCallName: 'client.preferences.favoriteGroups.list',
    fullyQualifiedName: 'preferences.favoriteGroups.list',
    httpMethod: 'get',
    httpPath: '/api/preferences/favorite-groups',
  },
  {
    clientCallName: 'client.preferences.favorites.create',
    fullyQualifiedName: 'preferences.favorites.create',
    httpMethod: 'post',
    httpPath: '/api/preferences/favorites',
  },
  {
    clientCallName: 'client.preferences.favorites.list',
    fullyQualifiedName: 'preferences.favorites.list',
    httpMethod: 'get',
    httpPath: '/api/preferences/favorites',
  },
  {
    clientCallName: 'client.preferences.grid.create',
    fullyQualifiedName: 'preferences.grid.create',
    httpMethod: 'post',
    httpPath: '/api/preferences/grid',
  },
  {
    clientCallName: 'client.preferences.grid.retrieve',
    fullyQualifiedName: 'preferences.grid.retrieve',
    httpMethod: 'get',
    httpPath: '/api/preferences/grid',
  },
  {
    clientCallName: 'client.preferences.grid.delete',
    fullyQualifiedName: 'preferences.grid.delete',
    httpMethod: 'delete',
    httpPath: '/api/preferences/grid',
  },
  {
    clientCallName: 'client.profile.retrieve',
    fullyQualifiedName: 'profile.retrieve',
    httpMethod: 'get',
    httpPath: '/api/profile',
  },
  {
    clientCallName: 'client.profile.update',
    fullyQualifiedName: 'profile.update',
    httpMethod: 'put',
    httpPath: '/api/profile',
  },
  {
    clientCallName: 'client.profile.avatar.delete',
    fullyQualifiedName: 'profile.avatar.delete',
    httpMethod: 'delete',
    httpPath: '/api/profile/avatar',
  },
  {
    clientCallName: 'client.profile.avatar.upload',
    fullyQualifiedName: 'profile.avatar.upload',
    httpMethod: 'post',
    httpPath: '/api/profile/avatar',
  },
  {
    clientCallName: 'client.profile.preferences.retrieve',
    fullyQualifiedName: 'profile.preferences.retrieve',
    httpMethod: 'get',
    httpPath: '/api/profile/preferences',
  },
  {
    clientCallName: 'client.profile.preferences.update',
    fullyQualifiedName: 'profile.preferences.update',
    httpMethod: 'put',
    httpPath: '/api/profile/preferences',
  },
  {
    clientCallName: 'client.prune.pruneAll',
    fullyQualifiedName: 'prune.pruneAll',
    httpMethod: 'post',
    httpPath: '/api/prune/all',
  },
  {
    clientCallName: 'client.prune.pruneContainers',
    fullyQualifiedName: 'prune.pruneContainers',
    httpMethod: 'post',
    httpPath: '/api/prune/containers',
  },
  {
    clientCallName: 'client.prune.pruneImages',
    fullyQualifiedName: 'prune.pruneImages',
    httpMethod: 'post',
    httpPath: '/api/prune/images',
  },
  {
    clientCallName: 'client.prune.pruneNetworks',
    fullyQualifiedName: 'prune.pruneNetworks',
    httpMethod: 'post',
    httpPath: '/api/prune/networks',
  },
  {
    clientCallName: 'client.prune.pruneVolumes',
    fullyQualifiedName: 'prune.pruneVolumes',
    httpMethod: 'post',
    httpPath: '/api/prune/volumes',
  },
  {
    clientCallName: 'client.roles.create',
    fullyQualifiedName: 'roles.create',
    httpMethod: 'post',
    httpPath: '/api/roles',
  },
  {
    clientCallName: 'client.roles.retrieve',
    fullyQualifiedName: 'roles.retrieve',
    httpMethod: 'get',
    httpPath: '/api/roles/{id}',
  },
  {
    clientCallName: 'client.roles.update',
    fullyQualifiedName: 'roles.update',
    httpMethod: 'put',
    httpPath: '/api/roles/{id}',
  },
  {
    clientCallName: 'client.roles.list',
    fullyQualifiedName: 'roles.list',
    httpMethod: 'get',
    httpPath: '/api/roles',
  },
  {
    clientCallName: 'client.roles.delete',
    fullyQualifiedName: 'roles.delete',
    httpMethod: 'delete',
    httpPath: '/api/roles/{id}',
  },
  {
    clientCallName: 'client.schedules.list',
    fullyQualifiedName: 'schedules.list',
    httpMethod: 'get',
    httpPath: '/api/schedules',
  },
  {
    clientCallName: 'client.schedules.delete',
    fullyQualifiedName: 'schedules.delete',
    httpMethod: 'delete',
    httpPath: '/api/schedules/{type}/{id}',
  },
  {
    clientCallName: 'client.schedules.run',
    fullyQualifiedName: 'schedules.run',
    httpMethod: 'post',
    httpPath: '/api/schedules/{type}/{id}/run',
  },
  {
    clientCallName: 'client.schedules.stream',
    fullyQualifiedName: 'schedules.stream',
    httpMethod: 'get',
    httpPath: '/api/schedules/stream',
  },
  {
    clientCallName: 'client.schedules.toggle',
    fullyQualifiedName: 'schedules.toggle',
    httpMethod: 'post',
    httpPath: '/api/schedules/{type}/{id}/toggle',
  },
  {
    clientCallName: 'client.schedules.executions.retrieve',
    fullyQualifiedName: 'schedules.executions.retrieve',
    httpMethod: 'get',
    httpPath: '/api/schedules/executions/{id}',
  },
  {
    clientCallName: 'client.schedules.executions.list',
    fullyQualifiedName: 'schedules.executions.list',
    httpMethod: 'get',
    httpPath: '/api/schedules/executions',
  },
  {
    clientCallName: 'client.schedules.executions.delete',
    fullyQualifiedName: 'schedules.executions.delete',
    httpMethod: 'delete',
    httpPath: '/api/schedules/executions/{id}',
  },
  {
    clientCallName: 'client.schedules.settings.retrieve',
    fullyQualifiedName: 'schedules.settings.retrieve',
    httpMethod: 'get',
    httpPath: '/api/schedules/settings',
  },
  {
    clientCallName: 'client.schedules.settings.update',
    fullyQualifiedName: 'schedules.settings.update',
    httpMethod: 'put',
    httpPath: '/api/schedules/settings',
  },
  {
    clientCallName: 'client.schedules.system.toggle',
    fullyQualifiedName: 'schedules.system.toggle',
    httpMethod: 'post',
    httpPath: '/api/schedules/system/{id}/toggle',
  },
  {
    clientCallName: 'client.selfUpdate.checkStatus',
    fullyQualifiedName: 'selfUpdate.checkStatus',
    httpMethod: 'get',
    httpPath: '/api/self-update/check',
  },
  {
    clientCallName: 'client.selfUpdate.getProgress',
    fullyQualifiedName: 'selfUpdate.getProgress',
    httpMethod: 'get',
    httpPath: '/api/self-update/progress',
  },
  {
    clientCallName: 'client.selfUpdate.initiate',
    fullyQualifiedName: 'selfUpdate.initiate',
    httpMethod: 'post',
    httpPath: '/api/self-update',
  },
  {
    clientCallName: 'client.settings.retrieveTheme',
    fullyQualifiedName: 'settings.retrieveTheme',
    httpMethod: 'get',
    httpPath: '/api/settings/theme',
  },
  {
    clientCallName: 'client.settings.general.create',
    fullyQualifiedName: 'settings.general.create',
    httpMethod: 'post',
    httpPath: '/api/settings/general',
  },
  {
    clientCallName: 'client.settings.general.retrieve',
    fullyQualifiedName: 'settings.general.retrieve',
    httpMethod: 'get',
    httpPath: '/api/settings/general',
  },
  {
    clientCallName: 'client.settings.scanner.create',
    fullyQualifiedName: 'settings.scanner.create',
    httpMethod: 'post',
    httpPath: '/api/settings/scanner',
  },
  {
    clientCallName: 'client.settings.scanner.retrieve',
    fullyQualifiedName: 'settings.scanner.retrieve',
    httpMethod: 'get',
    httpPath: '/api/settings/scanner',
  },
  {
    clientCallName: 'client.settings.scanner.delete',
    fullyQualifiedName: 'settings.scanner.delete',
    httpMethod: 'delete',
    httpPath: '/api/settings/scanner',
  },
  {
    clientCallName: 'client.stacks.create',
    fullyQualifiedName: 'stacks.create',
    httpMethod: 'post',
    httpPath: '/api/stacks',
  },
  {
    clientCallName: 'client.stacks.list',
    fullyQualifiedName: 'stacks.list',
    httpMethod: 'get',
    httpPath: '/api/stacks',
  },
  {
    clientCallName: 'client.stacks.delete',
    fullyQualifiedName: 'stacks.delete',
    httpMethod: 'delete',
    httpPath: '/api/stacks/{name}',
  },
  {
    clientCallName: 'client.stacks.adopt',
    fullyQualifiedName: 'stacks.adopt',
    httpMethod: 'post',
    httpPath: '/api/stacks/adopt',
  },
  {
    clientCallName: 'client.stacks.checkPathChange',
    fullyQualifiedName: 'stacks.checkPathChange',
    httpMethod: 'post',
    httpPath: '/api/stacks/{name}/check-path-change',
  },
  {
    clientCallName: 'client.stacks.down',
    fullyQualifiedName: 'stacks.down',
    httpMethod: 'post',
    httpPath: '/api/stacks/{name}/down',
  },
  {
    clientCallName: 'client.stacks.getBasePath',
    fullyQualifiedName: 'stacks.getBasePath',
    httpMethod: 'get',
    httpPath: '/api/stacks/base-path',
  },
  {
    clientCallName: 'client.stacks.getDefaultPath',
    fullyQualifiedName: 'stacks.getDefaultPath',
    httpMethod: 'get',
    httpPath: '/api/stacks/default-path',
  },
  {
    clientCallName: 'client.stacks.getPathHints',
    fullyQualifiedName: 'stacks.getPathHints',
    httpMethod: 'get',
    httpPath: '/api/stacks/path-hints',
  },
  {
    clientCallName: 'client.stacks.getSources',
    fullyQualifiedName: 'stacks.getSources',
    httpMethod: 'get',
    httpPath: '/api/stacks/sources',
  },
  {
    clientCallName: 'client.stacks.relocate',
    fullyQualifiedName: 'stacks.relocate',
    httpMethod: 'post',
    httpPath: '/api/stacks/{name}/relocate',
  },
  {
    clientCallName: 'client.stacks.restart',
    fullyQualifiedName: 'stacks.restart',
    httpMethod: 'post',
    httpPath: '/api/stacks/{name}/restart',
  },
  {
    clientCallName: 'client.stacks.scan',
    fullyQualifiedName: 'stacks.scan',
    httpMethod: 'post',
    httpPath: '/api/stacks/scan',
  },
  {
    clientCallName: 'client.stacks.start',
    fullyQualifiedName: 'stacks.start',
    httpMethod: 'post',
    httpPath: '/api/stacks/{name}/start',
  },
  {
    clientCallName: 'client.stacks.stop',
    fullyQualifiedName: 'stacks.stop',
    httpMethod: 'post',
    httpPath: '/api/stacks/{name}/stop',
  },
  {
    clientCallName: 'client.stacks.validatePath',
    fullyQualifiedName: 'stacks.validatePath',
    httpMethod: 'post',
    httpPath: '/api/stacks/validate-path',
  },
  {
    clientCallName: 'client.stacks.compose.update',
    fullyQualifiedName: 'stacks.compose.update',
    httpMethod: 'put',
    httpPath: '/api/stacks/{name}/compose',
  },
  {
    clientCallName: 'client.stacks.compose.get',
    fullyQualifiedName: 'stacks.compose.get',
    httpMethod: 'get',
    httpPath: '/api/stacks/{name}/compose',
  },
  {
    clientCallName: 'client.stacks.env.update',
    fullyQualifiedName: 'stacks.env.update',
    httpMethod: 'put',
    httpPath: '/api/stacks/{name}/env',
  },
  {
    clientCallName: 'client.stacks.env.get',
    fullyQualifiedName: 'stacks.env.get',
    httpMethod: 'get',
    httpPath: '/api/stacks/{name}/env',
  },
  {
    clientCallName: 'client.stacks.env.validate',
    fullyQualifiedName: 'stacks.env.validate',
    httpMethod: 'post',
    httpPath: '/api/stacks/{name}/env/validate',
  },
  {
    clientCallName: 'client.stacks.env.raw.update',
    fullyQualifiedName: 'stacks.env.raw.update',
    httpMethod: 'put',
    httpPath: '/api/stacks/{name}/env/raw',
  },
  {
    clientCallName: 'client.stacks.env.raw.get',
    fullyQualifiedName: 'stacks.env.raw.get',
    httpMethod: 'get',
    httpPath: '/api/stacks/{name}/env/raw',
  },
  {
    clientCallName: 'client.system.retrieve',
    fullyQualifiedName: 'system.retrieve',
    httpMethod: 'get',
    httpPath: '/api/system',
  },
  {
    clientCallName: 'client.system.disk.retrieve',
    fullyQualifiedName: 'system.disk.retrieve',
    httpMethod: 'get',
    httpPath: '/api/system/disk',
  },
  {
    clientCallName: 'client.system.files.list',
    fullyQualifiedName: 'system.files.list',
    httpMethod: 'get',
    httpPath: '/api/system/files',
  },
  {
    clientCallName: 'client.system.files.content.retrieve',
    fullyQualifiedName: 'system.files.content.retrieve',
    httpMethod: 'get',
    httpPath: '/api/system/files/content',
  },
  {
    clientCallName: 'client.users.create',
    fullyQualifiedName: 'users.create',
    httpMethod: 'post',
    httpPath: '/api/users',
  },
  {
    clientCallName: 'client.users.retrieve',
    fullyQualifiedName: 'users.retrieve',
    httpMethod: 'get',
    httpPath: '/api/users/{id}',
  },
  {
    clientCallName: 'client.users.update',
    fullyQualifiedName: 'users.update',
    httpMethod: 'put',
    httpPath: '/api/users/{id}',
  },
  {
    clientCallName: 'client.users.list',
    fullyQualifiedName: 'users.list',
    httpMethod: 'get',
    httpPath: '/api/users',
  },
  {
    clientCallName: 'client.users.delete',
    fullyQualifiedName: 'users.delete',
    httpMethod: 'delete',
    httpPath: '/api/users/{id}',
  },
  {
    clientCallName: 'client.users.mfa.create',
    fullyQualifiedName: 'users.mfa.create',
    httpMethod: 'post',
    httpPath: '/api/users/{id}/mfa',
  },
  {
    clientCallName: 'client.users.mfa.delete',
    fullyQualifiedName: 'users.mfa.delete',
    httpMethod: 'delete',
    httpPath: '/api/users/{id}/mfa',
  },
  {
    clientCallName: 'client.users.roles.create',
    fullyQualifiedName: 'users.roles.create',
    httpMethod: 'post',
    httpPath: '/api/users/{id}/roles',
  },
  {
    clientCallName: 'client.users.roles.list',
    fullyQualifiedName: 'users.roles.list',
    httpMethod: 'get',
    httpPath: '/api/users/{id}/roles',
  },
  {
    clientCallName: 'client.users.roles.delete',
    fullyQualifiedName: 'users.roles.delete',
    httpMethod: 'delete',
    httpPath: '/api/users/{id}/roles',
  },
  {
    clientCallName: 'client.volumes.create',
    fullyQualifiedName: 'volumes.create',
    httpMethod: 'post',
    httpPath: '/api/volumes',
  },
  {
    clientCallName: 'client.volumes.retrieve',
    fullyQualifiedName: 'volumes.retrieve',
    httpMethod: 'get',
    httpPath: '/api/volumes/{name}',
  },
  {
    clientCallName: 'client.volumes.list',
    fullyQualifiedName: 'volumes.list',
    httpMethod: 'get',
    httpPath: '/api/volumes',
  },
  {
    clientCallName: 'client.volumes.delete',
    fullyQualifiedName: 'volumes.delete',
    httpMethod: 'delete',
    httpPath: '/api/volumes/{name}',
  },
  {
    clientCallName: 'client.volumes.clone',
    fullyQualifiedName: 'volumes.clone',
    httpMethod: 'post',
    httpPath: '/api/volumes/{name}/clone',
  },
  {
    clientCallName: 'client.volumes.export',
    fullyQualifiedName: 'volumes.export',
    httpMethod: 'get',
    httpPath: '/api/volumes/{name}/export',
  },
  {
    clientCallName: 'client.volumes.inspect',
    fullyQualifiedName: 'volumes.inspect',
    httpMethod: 'get',
    httpPath: '/api/volumes/{name}/inspect',
  },
  {
    clientCallName: 'client.volumes.browse.retrieve',
    fullyQualifiedName: 'volumes.browse.retrieve',
    httpMethod: 'get',
    httpPath: '/api/volumes/{name}/browse',
  },
  {
    clientCallName: 'client.volumes.browse.content',
    fullyQualifiedName: 'volumes.browse.content',
    httpMethod: 'get',
    httpPath: '/api/volumes/{name}/browse/content',
  },
  {
    clientCallName: 'client.volumes.browse.release',
    fullyQualifiedName: 'volumes.browse.release',
    httpMethod: 'post',
    httpPath: '/api/volumes/{name}/browse/release',
  },
  {
    clientCallName: 'client.registries.create',
    fullyQualifiedName: 'registries.create',
    httpMethod: 'post',
    httpPath: '/api/registries',
  },
  {
    clientCallName: 'client.registries.retrieve',
    fullyQualifiedName: 'registries.retrieve',
    httpMethod: 'get',
    httpPath: '/api/registries/{id}',
  },
  {
    clientCallName: 'client.registries.update',
    fullyQualifiedName: 'registries.update',
    httpMethod: 'put',
    httpPath: '/api/registries/{id}',
  },
  {
    clientCallName: 'client.registries.list',
    fullyQualifiedName: 'registries.list',
    httpMethod: 'get',
    httpPath: '/api/registries',
  },
  {
    clientCallName: 'client.registries.delete',
    fullyQualifiedName: 'registries.delete',
    httpMethod: 'delete',
    httpPath: '/api/registries/{id}',
  },
  {
    clientCallName: 'client.registries.deleteImage',
    fullyQualifiedName: 'registries.deleteImage',
    httpMethod: 'delete',
    httpPath: '/api/registry/image',
  },
  {
    clientCallName: 'client.registries.listCatalog',
    fullyQualifiedName: 'registries.listCatalog',
    httpMethod: 'get',
    httpPath: '/api/registry/catalog',
  },
  {
    clientCallName: 'client.registries.listTags',
    fullyQualifiedName: 'registries.listTags',
    httpMethod: 'get',
    httpPath: '/api/registry/tags',
  },
  {
    clientCallName: 'client.registries.search',
    fullyQualifiedName: 'registries.search',
    httpMethod: 'get',
    httpPath: '/api/registry/search',
  },
  {
    clientCallName: 'client.registries.setDefault',
    fullyQualifiedName: 'registries.setDefault',
    httpMethod: 'post',
    httpPath: '/api/registries/{id}/default',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
