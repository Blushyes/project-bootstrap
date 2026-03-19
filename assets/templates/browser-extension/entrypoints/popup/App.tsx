import { messaging } from '../../src/shared/messaging';

export default function App() {
  const showUi = async () => {
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id) return;
    await messaging.sendMessage('toggleContentUi', { visible: true }, tab.id);
  };

  return (
    <div class="min-h-screen w-[360px] bg-[#fcfcfc] px-4 py-4 text-neutral-900">
      <div class="border-b border-neutral-200 pb-4">
        <div class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">
          Extension
        </div>
        <h1 class="mt-2 text-[22px] font-medium tracking-tight">__DISPLAY_NAME__</h1>
        <p class="mt-2 text-sm leading-6 text-neutral-500">
          WXT browser extension starter with a restrained UI baseline.
        </p>
      </div>

      <section class="mt-5 rounded-xl border border-neutral-200 bg-white px-4 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
        <div class="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">
          Demo
        </div>
        <div class="mt-3 text-sm font-medium text-neutral-900">Show content UI</div>
        <p class="mt-2 text-sm leading-6 text-neutral-500">
          Trigger the Solid component mounted inside Shadow DOM on the current page.
        </p>
        <button
          type="button"
          class="mt-4 inline-flex h-9 items-center justify-center rounded-md border border-neutral-900 bg-neutral-900 px-4 text-sm font-medium tracking-tight text-white transition-colors hover:bg-neutral-800"
          onClick={() => {
            void showUi();
          }}
        >
          Open In-Page UI
        </button>
      </section>
    </div>
  );
}
