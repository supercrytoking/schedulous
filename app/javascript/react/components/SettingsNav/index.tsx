import React from "react";
import Font from "~/components/Font";
import SubNavLink from "~/components/SubNav/SubNavLink";
import { paths } from "~/paths";

export default function SettingsNav() {
  return (
    <>
      <Header title="Business Settings" />
      <SubNavLink
        title="Business Settings"
        to={paths.settings.business.index()}
      />
      <SubNavLink
        title="Payment Integration"
        to={paths.settings.payments.index()}
      />
      <SubNavLink title="Class Schedule" to={paths.settings.schedule.index()} />
      <SubNavLink title="Plans" to={paths.settings.plans.index()} />
      <SubNavLink title="Team" to={paths.settings.team.index()} />
      <Header title="Account Settings" />
      <SubNavLink title="Account" to={paths.settings.account.index()} />
      <SubNavLink title="Billing" to={paths.settings.billing.index()} />
      <SubNavLink
        title="Notifications"
        to={paths.settings.notifications.index()}
      />
    </>
  );
}

function Header({ title }: { title: string }) {
  return (
    <>
      <Font
        block={true}
        size="xSmall"
        uppercase={true}
        weight="xBold"
        color="gray-600"
        mb="small"
        mt="medium"
      >
        {title}
      </Font>
    </>
  );
}
