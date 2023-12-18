import type {AndroidPermissionMap} from './permissions.android.ts';
import type {IOSPermissionMap} from './permissions.ios.ts';
import type {WindowsPermissionMap} from './permissions.windows.ts';

export const PERMISSIONS = Object.freeze({
  ANDROID: {} as AndroidPermissionMap,
  IOS: {} as IOSPermissionMap,
  WINDOWS: {} as WindowsPermissionMap,
} as const);
