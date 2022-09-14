import React from "react";
import Modal from "~/components/Modal";
import { paths } from "~/paths";
import EditPlan from "./Edit";
import NewPlan from "./New";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  id?: any;
}

export default function PlansModal({ isOpen, onClose, id }: IProps) {
  const handleSubmit = () => {
    window.location.href = paths.settings.plans.index();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Plans">
      {id !== null ? (
        <EditPlan id={id} onSubmit={handleSubmit} />
      ) : (
        <NewPlan onSubmit={handleSubmit} />
      )}
    </Modal>
  );
}
