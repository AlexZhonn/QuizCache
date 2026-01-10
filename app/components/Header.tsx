import { Zap } from "lucide-react"
import { useState } from "react"

type HeaderProps = { ifOn?: boolean }

export default function Header({ ifOn }: HeaderProps) {
  const [on, setOn] = useState(ifOn)

  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-lg font-semibold text-teal-700 flex items-center gap-2">
        <Zap className="h-5 w-5" />
        QuizCache
      </h1>

      <div className="flex items-center gap-2">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />

          <div
            className="
      relative w-9 h-5
      bg-neutral-quaternary
      border border-black/60
      rounded-full
      peer
      peer-focus:outline-none
      peer-focus:ring-4
      peer-focus:ring-brand-soft
      peer-checked:bg-brand
      after:content-['']
      after:absolute
      after:top-[2px]
      after:start-[2px]
      after:h-4
      after:w-4
      after:rounded-full
      after:bg-white
      after:border after:border-black/30
      after:transition-all
      peer-checked:after:translate-x-full
    "
            onClick={() => {
              setOn(!on)
            }}></div>

          {on ? (
            <span className="select-none ms-3 text-sm font-medium text-heading">
              On
            </span>
          ) : (
            <span className="select-none ms-3 text-sm font-medium text-heading">
              Off
            </span>
          )}
        </label>
      </div>
    </div>
  )
}
