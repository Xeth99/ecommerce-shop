"use client";

import { ScaleLoader } from "react-spinners";

export default function PageLoader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ScaleLoader color="#2563eb" />
    </div>
  );
}
