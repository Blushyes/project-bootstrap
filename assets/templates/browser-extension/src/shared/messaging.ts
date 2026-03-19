import { defineExtensionMessaging } from '@webext-core/messaging';

export interface ProtocolMap {
  ping(): { ok: true };
  toggleContentUi(payload: { visible: boolean }): void;
}

export const messaging = defineExtensionMessaging<ProtocolMap>();
