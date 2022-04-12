import {
  Button,
  Card,
  CardSection,
  createStyles,
  Group,
  Image,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

const ProjectCard = () => {
  const { breakpoints } = useMantineTheme();

  const size = useMediaQuery(`(max-width: ${breakpoints.sm}px)`);

  return (
    <Card shadow="md">
      <CardSection>
        <Image
          height={size ? 300 : 400}
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        />
      </CardSection>
      <Stack mt="xs">
        <Text weight="bold"> Portfolio Stacker </Text>
        <Text>
          This is my Portfolio Stacker Application. Here's a full-stack
          application that's being driven by GraphQL.
        </Text>
        <Group>
          <Button>Source Code</Button>
          <Button>Live Site</Button>
        </Group>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
