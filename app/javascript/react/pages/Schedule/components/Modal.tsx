import React from "react";
import Modal from "~/components/Modal";
import { paths } from "~/paths";
import EditSchedule from "./Edit";
import NewSchedule from "./New";
import NavToggle from "~/components/NavToggle";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  id?: any;
}

const TABS = ["Class Details", "Schedule"];

export default function PlansModal({ isOpen, onClose, id }: IProps) {
  const handleSubmit = () => {
    window.location.href = paths.settings.schedule.index();
  };

  const [currentTab, setCurrentTab] = React.useState(TABS[0]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Plans"
      toggle={
        <NavToggle
          tabs={TABS}
          currentTab={currentTab}
          onChange={setCurrentTab}
        />
      }
    >
      {id !== null ? (
        <EditSchedule id={id} onSubmit={handleSubmit} currentTab={currentTab} />
      ) : (
        <NewSchedule onSubmit={handleSubmit} currentTab={currentTab} />
      )}
    </Modal>
  );
}
