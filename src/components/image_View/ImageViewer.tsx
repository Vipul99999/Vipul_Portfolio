"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FiZoomIn,
  FiZoomOut,
  FiRotateCcw,
  FiRefreshCcw,
  FiDownload,
  FiX,
} from "react-icons/fi";

interface PdfViewerProps {
  src: string;
  alt: string;
  fileName?: string;
  onClose: () => void;
}

const ImageViewer: React.FC<PdfViewerProps> = ({
  src,
  alt,
  fileName = `${alt}.pdf`,
  onClose,
}) => {
  // Zoom scale for iframe content
  const [scale, setScale] = useState(1);
  // Rotation degree
  const [rotation, setRotation] = useState(0);
  // Scale for whole viewer container resizing
  const [containerScale, setContainerScale] = useState(1);

  // Refs for current scale and pinch distance
  const viewerRef = useRef<HTMLDivElement>(null);
  const lastTouchDistance = useRef<number | null>(null);
  const scaleRef = useRef(scale);

  useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  const reset = () => {
    setScale(1);
    setRotation(0);
    setContainerScale(1);
  };

  // Calculate distance between two touches (for pinch zoom)
  const getTouchDistance = (touches: TouchList) => {
    if (touches.length < 2) return 0;
    const [touch1, touch2] = [touches[0], touches[1]];
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;

    // Handle wheel event for zooming and resizing
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      const zoomStep = 0.05;
      const resizeStep = 0.05;

      // Ctrl + wheel: zoom PDF iframe content scale
      if (e.ctrlKey) {
        if (e.deltaY < 0) {
          setScale((prev) => {
            const next = Math.min(prev + zoomStep, 3);
            scaleRef.current = next;
            return next;
          });
        } else {
          setScale((prev) => {
            const next = Math.max(prev - zoomStep, 0.5);
            scaleRef.current = next;
            return next;
          });
        }
      }
      // Shift + wheel: resize whole viewer container scale
      else if (e.shiftKey) {
        if (e.deltaY < 0) {
          setContainerScale((prev) => Math.min(prev + resizeStep, 3));
        } else {
          setContainerScale((prev) => Math.max(prev - resizeStep, 0.5));
        }
      }
    };

    // Handle touch pinch zoom for iframe content scale
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const distance = getTouchDistance(e.touches);
        if (lastTouchDistance.current != null) {
          const diff = distance - lastTouchDistance.current;
          if (Math.abs(diff) > 5) {
            setScale((prev) => {
              let next = prev + diff * 0.005;
              next = Math.min(Math.max(next, 0.5), 3);
              scaleRef.current = next;
              return next;
            });
          }
        }
        lastTouchDistance.current = distance;
      }
    };

    // Reset pinch tracking on touch end or cancel
    const onTouchEndOrCancel = () => {
      lastTouchDistance.current = null;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEndOrCancel);
    el.addEventListener("touchcancel", onTouchEndOrCancel);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEndOrCancel);
      el.removeEventListener("touchcancel", onTouchEndOrCancel);
    };
  }, []);

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto mt-10 p-4 border rounded-md bg-gray-100 shadow-lg relative"
      style={{ scale: containerScale }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      {/* Toolbar */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <div className="flex flex-wrap gap-1 items-center">
          {/* Zoom In */}
          <Button
            className="group w-10 h-10 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center relative"
            onClick={() => {
              setScale((prev) => {
                const next = Math.min(prev + 0.1, 3);
                scaleRef.current = next;
                return next;
              });
            }}
          >
            <FiZoomIn />
            <span className="absolute bottom-full mb-1 text-xs opacity-0 group-hover:opacity-100 bg-black text-white px-2 py-1 rounded">
              Zoom In
            </span>
          </Button>

          {/* Zoom Out */}
          <Button
            className="group w-10 h-10 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center relative"
            onClick={() => {
              setScale((prev) => {
                const next = Math.max(prev - 0.1, 0.5);
                scaleRef.current = next;
                return next;
              });
            }}
          >
            <FiZoomOut />
            <span className="absolute bottom-full mb-1 text-xs opacity-0 group-hover:opacity-100 bg-black text-white px-2 py-1 rounded">
              Zoom Out
            </span>
          </Button>

          {/* Rotate */}
          <Button
            className="group w-10 h-10 bg-green-600 text-white rounded hover:bg-green-700 flex items-center justify-center relative"
            onClick={() => setRotation((prev) => prev + 90)}
          >
            <FiRotateCcw />
            <span className="absolute bottom-full mb-1 text-xs opacity-0 group-hover:opacity-100 bg-black text-white px-2 py-1 rounded">
              Rotate
            </span>
          </Button>

          {/* Reset */}
          <Button
            className="group w-10 h-10 bg-gray-600 text-white rounded hover:bg-gray-700 flex items-center justify-center relative"
            onClick={reset}
          >
            <FiRefreshCcw />
            <span className="absolute bottom-full mb-1 text-xs opacity-0 group-hover:opacity-100 bg-black text-white px-2 py-1 rounded">
              Reset
            </span>
          </Button>

          {/* Download */}
          <a
            href={src}
            download={fileName}
            className="group w-10 h-10 bg-purple-600 text-white rounded hover:bg-purple-700 inline-flex items-center justify-center relative"
          >
            <FiDownload />
            <span className="absolute bottom-full mb-1 text-xs opacity-0 group-hover:opacity-100 bg-black text-white px-2 py-1 rounded whitespace-nowrap">
              Download
            </span>
          </a>

          {/* Close */}
          <Button
            className="group w-10 h-10 bg-red-600 text-white rounded hover:bg-red-700 flex items-center justify-center relative"
            onClick={onClose}
          >
            <FiX />
            <span className="absolute bottom-full mb-1 text-xs opacity-0 group-hover:opacity-100 bg-black text-white px-2 py-1 rounded">
              Close
            </span>
          </Button>
        </div>
      </div>

      {/* Animated PDF Iframe */}
      <div
        ref={viewerRef}
        className="px-1 py-1 w-full overflow-hidden bg-gray-500 flex justify-center items-center border"
        style={{ touchAction: "none" }} // Important to prevent browser pinch zoom
      >
        <motion.iframe
          src={src}
          title={alt}
          frameBorder="0"
          className="max-w-full max-h-full object-contain"
          animate={{
            scale: scale,
            rotate: rotation,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
          }}
          style={{ pointerEvents: "none" }} // <-- crucial to let parent handle zoom gestures
        />
      </div>
    </motion.div>
  );
};

export default ImageViewer;
