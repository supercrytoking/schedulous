import React from "react";

import SettingsLayout from "~/layouts/SettingsLayout";
import BreadCrumb from "~/components/BreadCrumbs";

export default function Billing() {
  const breadCrumbData = [
    {
      title: "Billing",
      url: "",
    },
  ];

  return (
    <SettingsLayout
      title={<BreadCrumb data={breadCrumbData}></BreadCrumb>}
      full={true}
    >
      Billing
    </SettingsLayout>
  );
}
