import React from "react";
import SettingsLayout from "~/layouts/SettingsLayout";
import BreadCrumb from "~/components/BreadCrumbs";
import Container from "~/components/Container";
import InputBlock from "~/components/InputBlock";
import StripeIcon from "~/icons/logos/Stripe";
import Flex from "~/components/Flex";
import Font from "~/components/Font";
import Box from "~/components/Box";
import useAccount from "~/hooks/useAccount";

import Button from "~/components/Button";

const breadCrumbData = [
  {
    title: "Payment Provider",
    url: "",
  },
];

export default function PaymentProviders() {
  const currentAccount = useAccount();

  const handleClick = () => {
    window.location.href = "/stripe";
  };

  return (
    <SettingsLayout title={<BreadCrumb data={breadCrumbData}></BreadCrumb>}>
      <Container.XSmall>
        <InputBlock
          title="Payments"
          subtitle="Lorem ipsum dolor sit amet comnseca asdfa efraera a afadfasf"
        >
          <Flex.Column responsive={false} align="flex-start">
            <Flex.Row
              responsive={false}
              align="flex-start"
              justify="flex-start"
            >
              <StripeIcon />
              <Box ml="medium">
                <Flex.Column responsive={false} align="flex-start">
                  <Font component="h3" size="h5" weight="bold">
                    {currentAccount.has_stripe
                      ? "Stripe Connected!"
                      : "Connect Stripe"}
                  </Font>
                  <Font component="p" size="medium" color="gray-600">
                    Lorem ipsum dolor sit amet comnseca asdfa efraera a afadfasf
                  </Font>
                </Flex.Column>
              </Box>
            </Flex.Row>
            <Box mt="medium">
              {!currentAccount.has_stripe && (
                <Button onClick={handleClick} title="Connect" style="primary" />
              )}
            </Box>
          </Flex.Column>
        </InputBlock>
      </Container.XSmall>
    </SettingsLayout>
  );
}
