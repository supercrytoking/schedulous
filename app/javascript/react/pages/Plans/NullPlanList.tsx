import React from "react";
import Container from "~/components/Container";
import Flex from "~/components/Flex";
import Font from "~/components/Font";
import Box from "~/components/Box";
import Button from "~/components/Button";
import { useNavigate } from "react-router";
import { paths } from "~/paths";

export default function NullPlanList() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(paths.settings.plans.new());
  };

  return (
    <Container.XSmall>
      <Flex.Column responsive={false} align="flex-start">
        <Flex.Row responsive={false} align="flex-start" justify="flex-start">
          <Box>
            <Flex.Column responsive={false} align="flex-start">
              <Font component="h3" size="h5" weight="bold">
                No Plans Yet
              </Font>
              <Font component="p" size="medium" color="gray-600">
                Looks like you don't have any plans set up let's get started!
              </Font>
            </Flex.Column>
          </Box>
        </Flex.Row>
        <Box mt="medium">
          <Button
            onClick={handleClick}
            title="Create your first plan"
            style="primary"
          />
        </Box>
      </Flex.Column>
    </Container.XSmall>
  );
}
