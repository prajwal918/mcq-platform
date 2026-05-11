"use client";

import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ZoomIn, ZoomOut, RotateCcw, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EngineeringDiagramProps {
  src?: string;
  alt?: string;
  children?: React.ReactNode;
}

export default function EngineeringDiagram({
  src,
  alt = "Diagram",
  children,
}: EngineeringDiagramProps) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  if (children) {
    return (
      <div className="my-4 sm:my-6 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
        <TransformWrapper
          initialScale={1}
          minScale={0.3}
          maxScale={8}
          doubleClick={{ mode: "toggle" }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                <span className="text-[10px] sm:text-xs font-medium text-slate-600 dark:text-slate-400">
                  {alt}
                </span>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                    onClick={() => zoomIn()}
                  >
                    <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                    onClick={() => zoomOut()}
                  >
                    <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                    onClick={() => resetTransform()}
                  >
                    <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>
              <div className="p-3 sm:p-4 flex items-center justify-center min-h-[160px] sm:min-h-[200px]">
                <TransformComponent
                  wrapperStyle={{ width: "100%", maxWidth: "100%" }}
                  contentStyle={{ width: "100%" }}
                >
                  {children}
                </TransformComponent>
              </div>
            </>
          )}
        </TransformWrapper>
      </div>
    );
  }

  if (src && !imgError) {
    return (
      <div className="my-4 sm:my-6 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
        <TransformWrapper
          initialScale={1}
          minScale={0.3}
          maxScale={8}
          doubleClick={{ mode: "toggle" }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                <span className="text-[10px] sm:text-xs font-medium text-slate-600 dark:text-slate-400">
                  {alt}
                </span>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                    onClick={() => zoomIn()}
                  >
                    <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                    onClick={() => zoomOut()}
                  >
                    <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                    onClick={() => resetTransform()}
                  >
                    <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>
              <div className="p-3 sm:p-4 flex items-center justify-center min-h-[160px] sm:min-h-[200px]">
                {!imgLoaded && (
                  <div className="flex items-center gap-2 text-slate-400">
                    <div className="w-4 h-4 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin" />
                    <span className="text-xs">Loading diagram...</span>
                  </div>
                )}
                <TransformComponent
                  wrapperStyle={{ width: "100%", maxWidth: "100%" }}
                  contentStyle={{ width: "100%" }}
                >
                  <img
                    src={src}
                    alt={alt}
                    className={`max-w-full h-auto ${imgLoaded ? "block" : "hidden"}`}
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgError(true)}
                  />
                </TransformComponent>
              </div>
            </>
          )}
        </TransformWrapper>
      </div>
    );
  }

  if (src && imgError) {
    return (
      <div className="my-4 sm:my-6 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col items-center justify-center text-slate-400 bg-slate-50 dark:bg-slate-900">
        <ImageIcon className="w-8 h-8 sm:w-10 sm:h-10 mb-2" />
        <p className="text-xs sm:text-sm">Failed to load diagram</p>
      </div>
    );
  }

  return null;
}
