"use client";

import { useSearchParams } from "next/navigation";
import * as React from "react";

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onClose: () => void;
  onOk: () => void;
  type: string;
}

const Dialog = ({ children, onClose, onOk, type }: DialogProps) => {
  const searchParams = useSearchParams();
  const dialogRef = React.useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get("showDialog");

  React.useEffect(() => {
    if (!showDialog || showDialog !== type) {
      return dialogRef.current?.close();
    }
    dialogRef.current?.showModal();
  }, [showDialog, type]);

  const closeDialog = () => {
    dialogRef.current?.close();
    onClose();
  };

  const clickOk = () => {
    onOk();
    closeDialog();
  };

  return (
    <dialog ref={dialogRef}>
      <span onClick={closeDialog} />
      <span onClick={clickOk} />
      <div>{children}</div>
    </dialog>
  );
};

export { Dialog };
