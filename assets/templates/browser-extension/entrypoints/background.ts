import { messaging } from '../src/shared/messaging';

export default defineBackground(() => {
  messaging.onMessage('ping', () => {
    return { ok: true };
  });
});
