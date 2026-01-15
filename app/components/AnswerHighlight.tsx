import { Check, Info } from "lucide-react"
import { useState } from "react"

interface Props {
  originalText: string
  attemptDate: string // e.g., "Jan 12, 2026"
  score: number // e.g., 1.0
}

export const AnswerHighlight = ({
  originalText,
  attemptDate,
  score
}: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative flex items-center w-full group animate-in fade-in slide-in-from-left-2 duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {/* 1. The Visual Highlight Bar (Green Stripe) */}
      <div className="absolute inset-y-0 left-0 w-1 bg-emerald-500 rounded-l-md" />

      {/* 2. The Background Tint */}
      <div className="absolute inset-0 bg-emerald-50/80 border border-emerald-200 rounded-md -z-10" />

      {/* 3. The Icon Indicator (Left side) */}
      <div className="pl-3 pr-2 flex items-center justify-center">
        <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 shadow-sm">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </div>
      </div>

      {/* 4. The Original Answer Text (Preserved layout) */}
      <div className="flex-1 py-3 pr-4 text-emerald-900 font-medium text-sm leading-relaxed">
        {originalText}
      </div>

      {/* 5. The "Why?" Tooltip (Appears on Hover) */}
      {isHovered && (
        <div className="absolute left-0 -top-12 z-50 w-64 transform -translate-y-2">
          <div className="bg-slate-800 text-white text-xs rounded-lg shadow-xl p-3 relative">
            {/* Tooltip Content */}
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-emerald-100 mb-0.5">
                  Verified Correct
                </p>
                <p className="text-slate-300 leading-tight">
                  You selected this on <b>{attemptDate}</b> and earned{" "}
                  <b>{score} pts</b>.
                </p>
              </div>
            </div>

            {/* Little Arrow pointing down */}
            <div className="absolute top-full left-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-800"></div>
          </div>
        </div>
      )}
    </div>
  )
}
