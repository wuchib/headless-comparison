import * as select from '@zag-js/select';
import { useMachine, normalizeProps } from '@zag-js/react';
import { useId, useMemo } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

const data = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Grapes', value: 'grapes' },
  { label: 'Pineapple', value: 'pineapple' },
];

export function ZagSelectDemo() {
  const collection = useMemo(
    () =>
      select.collection({
        items: data,
      }),
    []
  );

  const [state, send] = useMachine(
    select.machine({
      id: useId(),
      // @ts-ignore
      collection,
    }),
    { context: { collection } }
  );

  // @ts-ignore
  const api = select.connect(state, send, normalizeProps);

  return (
    <div className="flex flex-col gap-1 w-full relative group">
      <button
        {...api.getTriggerProps()}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-500 hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=open]:ring-2 data-[state=open]:ring-blue-500"
        )}
      >
        <span className="truncate">{api.valueAsString || "Select a fruit"}</span>
        <ChevronDown
          className={cn("h-4 w-4 text-zinc-400 transition-transform duration-200", api.open && "rotate-180")}
        />
      </button>

      {api.open && (
        <div
          {...api.getPositionerProps()}
          className="z-50 w-full mt-1 min-w-[max-content]"
        >
          <ul
            {...api.getContentProps()}
            className="w-full overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-md outline-none animate-in fade-in-0 zoom-in-95 slide-in-from-top-2"
          >
            {data.map((item) => {
              const itemState = api.getItemState({ item });
              return (
                <li
                  key={item.value}
                  {...api.getItemProps({ item })}
                  className={cn(
                    "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
                    itemState.highlighted ? 'bg-blue-100 text-blue-900' : 'text-zinc-900',
                    itemState.checked ? 'font-medium' : ''
                  )}
                >
                  <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                    {itemState.checked && <Check className="h-4 w-4 text-blue-600" />}
                  </span>
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
