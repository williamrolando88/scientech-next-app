import { Dialog } from "@mui/material";
import { FC } from "react";

interface TestModalProps {
  open: boolean;
  onClose: (open: boolean) => void;
}
export const TestModal: FC<TestModalProps> = ({ onClose, open }) => {
  const closeModal = () => {
    onClose(false);
  };

  return (
    <Dialog open={open} onClose={closeModal}>
      Test Modal
    </Dialog>
  );
};
