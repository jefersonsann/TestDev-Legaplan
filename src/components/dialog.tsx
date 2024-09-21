"use client";

import { useSearchParams } from "next/navigation";
import * as React from "react";

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  type: string;
}

const Dialog = ({ children, type }: DialogProps) => {
  const searchParams = useSearchParams();
  const dialogRef = React.useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get("showDialog");

  React.useEffect(() => {
    if (!showDialog || showDialog !== type) {
      return dialogRef.current?.close();
    }
    dialogRef.current?.showModal();
  }, [showDialog, type]);

  return (
    <dialog ref={dialogRef}>
      <div>{children}</div>
    </dialog>
  );
};

export { Dialog };
