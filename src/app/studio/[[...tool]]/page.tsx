"use client";

import { useEffect } from "react";

// Sanity Studio is served via `sanity dev` separately.
// Access it at http://localhost:3333 when running `npx sanity dev`
export default function StudioRedirect() {
  useEffect(() => {
    window.location.href = "http://localhost:3333";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500">Redirecting to Sanity Studio...</p>
    </div>
  );
}
