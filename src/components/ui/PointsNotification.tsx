"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  points: number | null;
  onClose: () => void;
};

export function PointsNotification({ points, onClose }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (points !== null && points > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [points, onClose]);

  if (!mounted || points === null || points <= 0) {
    return null;
  }

  return createPortal(
    <div className="fixed top-24 right-4 z-[9999] pointer-events-none">
      <div className="animate-pop-in pointer-events-auto">
        <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-gold-500 to-sand-500 text-black font-bold shadow-lg">
          +{points} points! ⭐
        </div>
      </div>
    </div>,
    document.body
  );
}
