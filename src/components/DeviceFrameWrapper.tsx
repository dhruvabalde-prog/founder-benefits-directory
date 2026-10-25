import React, { useState } from 'react';
import { Smartphone, Monitor, Wifi, Battery, Signal } from 'lucide-react';

interface DeviceFrameWrapperProps {
  children: React.ReactNode;
  activeDevice: 'responsive' | 'mobile_frame';
  setActiveDevice: (device: 'responsive' | 'mobile_frame') => void;
}

export const DeviceFrameWrapper: React.FC<DeviceFrameWrapperProps> = ({
  children,
  activeDevice,
  setActiveDevice
}) => {
  const [currentTime] = useState(() => {
    const d = new Date();
    return `${d.getHours() % 12 || 12}:${d.getMinutes().toString().padStart(2, '0')}`;
  });

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Device Mode Switcher Floating Pill */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-4 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-slate-300">FounderPerks Native App Engine</span>
        </div>

        {/* View Switcher Controls */}
        <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-xl p-1 space-x-1 shadow-inner">
          <button
            onClick={() => setActiveDevice('responsive')}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg font-medium transition-all ${
              activeDevice === 'responsive'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Desktop / Full Screen</span>
            <span className="sm:hidden">Full</span>
          </button>

          <button
            onClick={() => setActiveDevice('mobile_frame')}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg font-medium transition-all ${
              activeDevice === 'mobile_frame'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">📱 Phone App Simulator</span>
            <span className="sm:hidden">Phone</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      {activeDevice === 'responsive' ? (
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      ) : (
        /* Mobile Device Frame Mode */
        <div className="flex-1 flex items-center justify-center p-2 sm:p-8 bg-slate-950 overflow-x-hidden">
          {/* Phone Chassis */}
          <div className="relative w-full max-w-[412px] h-[860px] bg-slate-950 rounded-[50px] border-[10px] border-slate-800 shadow-[0_0_80px_rgba(79,70,229,0.25)] flex flex-col overflow-hidden ring-1 ring-slate-700">
            {/* Phone Dynamic Island & Status Bar */}
            <div className="relative h-11 bg-slate-950 px-6 flex items-center justify-between text-white text-[11px] font-semibold select-none z-30 shrink-0 border-b border-slate-900">
              <span>{currentTime}</span>

              {/* Dynamic Island Pill */}
              <div className="absolute left-1/2 -translate-x-1/2 top-2 w-28 h-6 bg-black rounded-full flex items-center justify-between px-2.5 shadow-md">
                <div className="w-2 h-2 rounded-full bg-slate-900" />
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[9px] text-emerald-400 font-bold">FP</span>
                </div>
              </div>

              {/* Status Icons */}
              <div className="flex items-center space-x-1.5 text-slate-300">
                <Signal className="w-3 h-3" />
                <Wifi className="w-3 h-3" />
                <Battery className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>

            {/* App Viewport inside Phone */}
            <div className="flex-1 overflow-y-auto overscroll-contain pb-20 scrollbar-none relative">
              {children}
            </div>

            {/* Home Indicator Bar */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-36 h-1 bg-slate-600 rounded-full z-40 pointer-events-none" />
          </div>
        </div>
      )}
    </div>
  );
};
