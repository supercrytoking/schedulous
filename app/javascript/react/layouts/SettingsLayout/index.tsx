import React from "react";
import Admin from "~/layouts/Admin";
import SettingsNav from "~/components/SettingsNav";
import Container from "~/components/Container";

interface IProps {
  title: React.ReactNode;
  children: React.ReactNode;
  cta?: React.ReactNode;
  full?: boolean;
}

export default function SettingsLayout({
  title,
  children,
  cta,
  full = false,
}: IProps) {
  const Component = full ? Container : Container.XSmall;
  return (
    <Admin title={title} subnav={<SettingsNav />} cta={cta}>
      <Component>{children}</Component>
    </Admin>
  );
}
