import type { ContentScriptContext } from '#imports';
import { Show, createSignal } from 'solid-js';
import { render } from 'solid-js/web';

import '~/assets/content-ui.css';

import { ContentCard } from '../src/components/ContentCard';
import { messaging } from '../src/shared/messaging';

const [visible, setVisible] = createSignal(false);

export default defineContentScript({
  matches: ['http://*/*', 'https://*/*'],
  cssInjectionMode: 'ui',
  async main(ctx: ContentScriptContext) {
    let ui:
      | {
          mount: () => void;
          remove: () => void;
        }
      | undefined;
    let mounted = false;

    const ensureUi = async () => {
      if (ui) return ui;

      ui = await createShadowRootUi(ctx, {
        name: '__PROJECT_SLUG__-content-ui',
        position: 'inline',
        anchor: 'body',
        append: 'last',
        onMount: (container) => {
          return render(
            () => (
              <Show when={visible()}>
                <div class="pointer-events-none fixed right-5 top-5 z-[2147483647]">
                  <ContentCard />
                </div>
              </Show>
            ),
            container,
          );
        },
        onRemove: (dispose) => dispose?.(),
      });

      return ui;
    };

    messaging.onMessage('toggleContentUi', async ({ data }) => {
      setVisible(data.visible);
      if (data.visible && !mounted) {
        const instance = await ensureUi();
        instance.mount();
        mounted = true;
      }
      if (!data.visible && ui && mounted) {
        ui.remove();
        mounted = false;
      }
    });
  },
});
