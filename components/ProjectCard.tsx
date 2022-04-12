import {
  Button,
  Card,
  CardSection,
  Group,
  Image,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { FC } from "react";

interface Props {
  title: string;
  description: string;
  sourceCode: string;
  liveSite?: string;
}

const ProjectCard: FC<Props> = ({
  title,
  description,
  sourceCode,
  liveSite,
}) => {
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
        <Text weight="bold"> {title} </Text>
        <Text>{description}</Text>
        <Group>
          <a href={sourceCode}>
            <Button>Source Code</Button>
          </a>
          <a href={liveSite}>
            <Button>Live Site</Button>
          </a>
        </Group>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
