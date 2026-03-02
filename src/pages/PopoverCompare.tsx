import { CompareCard } from '../components/shared/CompareCard';

import { RadixPopoverDemo } from '../components/popover/RadixPopoverDemo';
import { HeadlessPopoverDemo } from '../components/popover/HeadlessPopoverDemo';
import { AriaPopoverDemo } from '../components/popover/AriaPopoverDemo';
import { FloatingPopoverDemo } from '../components/popover/FloatingPopoverDemo';

import radixCode from '../components/popover/RadixPopoverDemo?raw';
import headlessCode from '../components/popover/HeadlessPopoverDemo?raw';
import ariaCode from '../components/popover/AriaPopoverDemo?raw';
import floatingCode from '../components/popover/FloatingPopoverDemo?raw';

export function PopoverCompare() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Popover Component</h2>
        <p className="text-zinc-500 mt-2 text-lg">Comparing Popover implementations across Headless UI libraries. Highlighting variations in anchor positioning, focus handling, and rendering strategies.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xlg:grid-cols-3 2xl:grid-cols-4 gap-6 items-start">
        <CompareCard
          title="Radix UI"
          description="Robust positioning using dedicated Popper component under the hood. Excellent default a11y."
          codeSnippet={radixCode}
        >
          <RadixPopoverDemo />
        </CompareCard>

        <CompareCard
          title="Headless UI"
          description="Simpler anchor positioning in newer versions using standard attributes. Clean code structure."
          codeSnippet={headlessCode}
        >
          <HeadlessPopoverDemo />
        </CompareCard>

        <CompareCard
          title="React Aria Components"
          description="Focus trap inherently bound to Dialog primitive within Popover. State driven styles and transitions."
          codeSnippet={ariaCode}
        >
          <AriaPopoverDemo />
        </CompareCard>

        <CompareCard
          title="Floating UI (Primitive)"
          description="The lower-level computation engine behind many libraries. Requires manually connecting compute styles, refs, and interaction hooks."
          codeSnippet={floatingCode}
        >
          <FloatingPopoverDemo />
        </CompareCard>
      </div>
    </div>
  );
}
