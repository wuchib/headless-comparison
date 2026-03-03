import { CompareCard } from '../components/shared/CompareCard';

import { RadixSelectDemo } from '../components/select/RadixSelectDemo';
import { HeadlessSelectDemo } from '../components/select/HeadlessSelectDemo';
import { AriaSelectDemo } from '../components/select/AriaSelectDemo';
import { ZagSelectDemo } from '../components/select/ZagSelectDemo';

// Using Vite's ?raw import to get the source code as string
import radixCode from '../components/select/RadixSelectDemo?raw';
import headlessCode from '../components/select/HeadlessSelectDemo?raw';
import ariaCode from '../components/select/AriaSelectDemo?raw';
import zagCode from '../components/select/ZagSelectDemo?raw';

export function SelectCompare() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Select Component</h2>
        <p className="text-zinc-500 mt-2 text-lg">Comparing Select implementations across Headless UI libraries with identical design. Notice the structural differences between Compound Components (Radix), Render Props (Headless UI), and UI Primitives (React Aria).</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 items-start">
        <CompareCard
          title="Radix UI"
          description="Compound component pattern with dedicated Context management. Explicit parts like Root, Trigger, Portal, Content, Viewport, Item."
          codeSnippet={radixCode}
        >
          <div className="w-64">
            <RadixSelectDemo />
          </div>
        </CompareCard>

        <CompareCard
          title="Headless UI"
          description="Render prop pattern. Simpler API but requires manual wrapper and positioning. Highly integrated with Tailwind CSS logic."
          codeSnippet={headlessCode}
        >
          <div className="w-64">
            <HeadlessSelectDemo />
          </div>
        </CompareCard>

        <CompareCard
          title="React Aria Components"
          description="Adobe's accessibility-first primitives. Uses advanced DOM interactions, explicit ListBox/Item structures, and state-driven CSS attributes."
          codeSnippet={ariaCode}
        >
          <div className="w-64">
            <AriaSelectDemo />
          </div>
        </CompareCard>

        <CompareCard
          title="Zag"
          description="Zag's machine-based approach. Explicit state management and event handling. Highly customizable."
          codeSnippet={zagCode}
        >
          <div className="w-64">
            <ZagSelectDemo />
          </div>
        </CompareCard>
      </div>
    </div>
  );
}
