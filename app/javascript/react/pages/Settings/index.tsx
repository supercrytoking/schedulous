import React from "react";
import Container from "~/components/Container";
import Font from "~/components/Font";
import Setting from "./Setting";
import SettingsIcon from "~/icons/Settings";
import colors from "~/utils/colors";
import Admin from "~/layouts/Admin";
import { paths } from "~/paths";

import styles from "./styles.module.scss";

export default function Settings() {
  return (
    <Admin title="Settings">
      <Container.Small>
        <Font
          component="h3"
          block={true}
          size="xLarge"
          color="gray-900"
          weight="xBold"
          mb="medium"
        >
          Business Settings
        </Font>

        <div className={styles.settings}>
          <Setting
            title="Business Settings"
            subtitle="Manage your business name, address, and more"
            icon={<SettingsIcon color={colors.gray900} />}
            link={paths.settings.business.index()}
          />
          <Setting
            title="Payment Integration"
            subtitle="Connect your account to trusted payment providers"
            icon={<SettingsIcon color={colors.gray900} />}
            link={paths.settings.payments.index()}
          />
          <Setting
            title="Class Schedule"
            subtitle="Manage your class schedule and capacity"
            icon={<SettingsIcon color={colors.gray900} />}
            link={paths.settings.schedule.index()}
          />
          <Setting
            title="Plans"
            subtitle="Manage pricing plans and subscriptions"
            icon={<SettingsIcon color={colors.gray900} />}
            link={paths.settings.plans.index()}
          />
        </div>

        <Font
          component="h3"
          block={true}
          size="xLarge"
          color="gray-900"
          weight="xBold"
          mb="medium"
        >
          Account Settings
        </Font>
        <div className={styles.settings}>
          <Setting
            title="Account"
            subtitle="Manage your email and personal profile"
            icon={<SettingsIcon color={colors.gray900} />}
            link={paths.settings.account.index()}
          />
          <Setting
            title="Billing"
            subtitle="Manage your payment methods and subscriptions"
            icon={<SettingsIcon color={colors.gray900} />}
            link={paths.settings.billing.index()}
          />
          <Setting
            title="Team"
            subtitle="Manage your team members and permissions"
            icon={<SettingsIcon color={colors.gray900} />}
            link={paths.settings.team.index()}
          />
          <Setting
            title="Notifications"
            subtitle="Manage your notification preferences"
            icon={<SettingsIcon color={colors.gray900} />}
            link={paths.settings.notifications.index()}
          />
        </div>
      </Container.Small>
    </Admin>
  );
}
