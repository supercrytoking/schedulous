import React from "react";

import SettingsLayout from "~/layouts/SettingsLayout";
import BreadCrumb from "~/components/BreadCrumbs";

export default function Schedule() {
  const breadCrumbData = [
    {
      title: "Notifications",
      url: "",
    },
  ];

  return (
    <SettingsLayout
      title={<BreadCrumb data={breadCrumbData}></BreadCrumb>}
      full={true}
    >
      Notifications
    </SettingsLayout>
  );
}
