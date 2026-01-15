import {
  Archive,
  BrainCircuit,
  CheckCircle2,
  Eraser,
  History,
  Power
} from "lucide-react"
import { useEffect, useState } from "react"

import "./style.css"

function IndexPopup() {
  const [isEnabled, setIsEnabled] = useState(true)

  const [stats, setStats] = useState({
    courseName: "CEN3031: Intro to Software Engineering",
    attempts: 3,
    savedAnswers: 24,
    hasDataForCurrentPage: true
  })
  useEffect(() => {
    console.log()
  }, [isEnabled])
  return (
    <div className="w-[320px] bg-slate-50 min-h-[400px] flex flex-col font-sans text-slate-800">
      {/* Header Area */}
      <div className="bg-white p-5 border-b border-slate-200 shadow-sm sticky top-0 z-10">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-100 p-1.5 rounded-lg">
              <BrainCircuit className="w-5 h-5 text-emerald-600" />
            </div>
            <h1 className="font-bold text-lg tracking-tight text-slate-800">
              QuizCache
            </h1>
          </div>

          {/* Main Toggle Switch */}
          <button
            onClick={() => setIsEnabled(!isEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${isEnabled ? "bg-emerald-500" : "bg-slate-300"}`}>
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition transition-transform ${isEnabled ? "translate-x-6" : "translate-x-1"}`}
            />
          </button>
        </div>
        <p className="text-xs text-slate-400 font-medium ml-1">v0.1.0 • Beta</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 space-y-4">
        {/* Status Card */}
        <div
          className={`p-4 rounded-xl border flex items-start gap-3 transition-all ${
            isEnabled && stats.hasDataForCurrentPage
              ? "bg-emerald-50/80 border-emerald-200 shadow-sm"
              : "bg-white border-slate-200 border-dashed"
          }`}>
          {isEnabled && stats.hasDataForCurrentPage ? (
            <>
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-emerald-900">
                  Active & Ready
                </h3>
                <p className="text-xs text-emerald-700 mt-0.5 leading-relaxed">
                  I found <b>{stats.savedAnswers} answers</b> from your previous
                  attempts for this quiz!
                </p>
              </div>
            </>
          ) : (
            <>
              <Power className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-slate-600">
                  Standby Mode
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Navigate to a Canvas Quiz submission page to start caching.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Stats Grid */}
        {isEnabled && (
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
              <History className="w-5 h-5 text-blue-500 mb-1" />
              <span className="text-xl font-bold text-slate-700">
                {stats.attempts}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                Attempts
              </span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
              <Archive className="w-5 h-5 text-purple-500 mb-1" />
              <span className="text-xl font-bold text-slate-700">
                {stats.savedAnswers}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                Cached
              </span>
            </div>
          </div>
        )}

        {/* Current Context Info */}
        <div className="px-1">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Current Context
          </p>
          <div className="text-xs font-medium text-slate-600 bg-slate-100 p-2 rounded-md truncate">
            {stats.courseName}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 bg-white border-t border-slate-100">
        <button className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-rose-500 hover:bg-rose-50 py-2.5 rounded-lg transition-colors group">
          <Eraser className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          Clear Cache for this Quiz
        </button>
      </div>
    </div>
  )
}

export default IndexPopup
