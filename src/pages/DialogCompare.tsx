import { CompareCard } from '../components/shared/CompareCard';

import { RadixDialogDemo } from '../components/dialog/RadixDialogDemo';
import { HeadlessDialogDemo } from '../components/dialog/HeadlessDialogDemo';
import { AriaDialogDemo } from '../components/dialog/AriaDialogDemo';

import radixCode from '../components/dialog/RadixDialogDemo?raw';
import headlessCode from '../components/dialog/HeadlessDialogDemo?raw';
import ariaCode from '../components/dialog/AriaDialogDemo?raw';

export function DialogCompare() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Dialog Component</h2>
        <p className="text-zinc-500 mt-2 text-lg">Comparing Modal Dialog implementations across Headless UI libraries. Observe how each library handles portal injection, overlay blurring, state driven animations, and focus traps.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 items-start">
        <CompareCard
          title="Radix UI"
          description="Very granular API. Root -> Portal -> Overlay + Content -> Title + Description + Close."
          codeSnippet={radixCode}
        >
          <RadixDialogDemo />
        </CompareCard>

        <CompareCard
          title="Headless UI"
          description="Less granular. A single <Dialog> handles focus trap and portal. Includes <DialogBackdrop> and <DialogPanel> in v2."
          codeSnippet={headlessCode}
        >
          <HeadlessDialogDemo />
        </CompareCard>

        <CompareCard
          title="React Aria Components"
          description="Relies on advanced DOM attributes. Uses <DialogTrigger> to wire accessibility between the trigger <Button> and the <Modal> automatically."
          codeSnippet={ariaCode}
        >
          <AriaDialogDemo />
        </CompareCard>
      </div>
    </div>
  );
}
