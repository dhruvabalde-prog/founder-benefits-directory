import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Check, Share } from 'lucide-react';

export const InstallAppBanner: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if already running as standalone app
    const isRunningStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
    setIsStandalone(!!isRunningStandalone);

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIosDevice);

    const handleBeforeInstall = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (!isRunningStandalone) {
        setShowBanner(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    // If on iOS and not standalone, show prompt after 3s once
    if (isIosDevice && !isRunningStandalone) {
      const dismissed = sessionStorage.getItem('ios_install_dismissed');
      if (!dismissed) {
        setShowBanner(true);
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSModal(true);
      return;
    }

    if (!deferredPrompt) {
      alert("To install, open your browser menu (⋮) and tap 'Install FounderPerks' or 'Add to Home screen'.");
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowBanner(false);
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    sessionStorage.setItem('ios_install_dismissed', 'true');
  };

  if (isStandalone || !showBanner) return null;

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-900/90 via-slate-900/95 to-slate-900/95 border-b border-indigo-500/30 px-4 py-2.5 text-xs text-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-md">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white">Install FounderPerks App</span>
              <span className="text-slate-400 hidden sm:inline ml-1.5">
                • Add to home screen for 1-click offline access & mobile UI
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleInstallClick}
              className="flex items-center space-x-1 px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg text-xs shadow-md shadow-indigo-600/30 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install App</span>
            </button>

            <button
              onClick={handleDismiss}
              className="p-1 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* iOS Instructions Modal */}
      {showIOSModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-3xl p-6 text-center space-y-4 animate-in slide-in-from-bottom duration-200 shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center mx-auto text-2xl shadow-lg">
              🚀
            </div>

            <h3 className="text-lg font-bold text-white">Install on iPhone / iPad</h3>
            
            <div className="text-left space-y-3 bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold">1</span>
                <span>Tap the <strong className="text-white">Share button</strong> (at bottom of Safari <Share className="w-3.5 h-3.5 inline mx-1 text-indigo-400" />)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold">2</span>
                <span>Scroll down and tap <strong className="text-white">'Add to Home Screen'</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold">3</span>
                <span>Tap <strong className="text-white">'Add'</strong> at top right</span>
              </div>
            </div>

            <button
              onClick={() => setShowIOSModal(false)}
              className="w-full py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-xs shadow-lg"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </>
  );
};
