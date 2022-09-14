import React, { useContext } from "react";
import Container from "~/components/Container";
import Font from "~/components/Font";
import SettingsLayout from "~/layouts/SettingsLayout";
import styles from "./styles.module.scss";
import { AccountContext } from "../../state/account/context";

export default function Settings() {
  const { state: stateAccount, dispatch: accountDispatch } =
    useContext(AccountContext);
  return (
    <SettingsLayout title="Settings">
      <Container.Small>
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
        {
          <div className={styles.settings}>
            <div className={styles.setting}>
              <div className={styles.settingInner}>
                <div className={styles.settingContent}>
                  <p>
                    <Font
                      className={styles.settingText}
                      component="h3"
                      size="large"
                      color="gray-900"
                      weight="xBold"
                    >
                      Name:
                    </Font>
                    <Font component="p" size="large" color="gray-900">
                      {stateAccount.account && stateAccount.account.name}
                    </Font>
                  </p>
                  <p>
                    <Font
                      className={styles.settingText}
                      component="h3"
                      size="large"
                      color="gray-900"
                      weight="xBold"
                    >
                      Phone:
                    </Font>
                    <Font component="p" size="large" color="gray-900">
                      {stateAccount.account && stateAccount.account.phone}
                    </Font>
                  </p>
                  <p>
                    <Font
                      className={styles.settingText}
                      component="h3"
                      size="large"
                      color="gray-900"
                      weight="xBold"
                    >
                      Address:
                    </Font>
                    <Font component="p" size="large" color="gray-900">
                      {stateAccount.account && stateAccount.account.address}
                    </Font>
                  </p>
                  <p>
                    <Font
                      className={styles.settingText}
                      component="h3"
                      size="large"
                      color="gray-900"
                      weight="xBold"
                    >
                      City:
                    </Font>
                    <Font component="p" size="large" color="gray-900">
                      {stateAccount.account && stateAccount.account.city}
                    </Font>
                  </p>
                  <p>
                    <Font
                      className={styles.settingText}
                      component="h3"
                      size="large"
                      color="gray-900"
                      weight="xBold"
                    >
                      State:
                    </Font>
                    <Font component="p" size="large" color="gray-900">
                      {stateAccount.account && stateAccount.account.state}
                    </Font>
                  </p>
                  <p>
                    <Font
                      className={styles.settingText}
                      component="h3"
                      size="large"
                      color="gray-900"
                      weight="xBold"
                    >
                      Total members:
                    </Font>
                    <Font component="p" size="large" color="gray-900">
                      {stateAccount.account &&
                        stateAccount.account.total_members}
                    </Font>
                  </p>
                  <p>
                    <Font
                      className={styles.settingText}
                      component="h3"
                      size="large"
                      color="gray-900"
                      weight="xBold"
                    >
                      Year in business:
                    </Font>
                    <Font component="p" size="large" color="gray-900">
                      {stateAccount.account &&
                        stateAccount.account.years_in_business}
                    </Font>
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      </Container.Small>
    </SettingsLayout>
  );
}
