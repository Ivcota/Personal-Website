import {
  Button,
  Card,
  CardSection,
  createStyles,
  Group,
  Image,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { FC } from "react";

interface Props {
  title: string;
  description: string;
  sourceCode: string;
  image?: string;
  liveSite?: string;
}

const useStyles = createStyles({
  button: {
    fontWeight: "normal",
  },
});

const ProjectCard: FC<Props> = ({
  title,
  description,
  sourceCode,
  liveSite,
  image,
}) => {
  const { breakpoints } = useMantineTheme();

  const size = useMediaQuery(`(max-width: ${breakpoints.sm}px)`);
  const { classes } = useStyles();

  return (
    <Card shadow="md">
      {image ? (
        <CardSection>
          <Image height={size ? 300 : 400} src={image} />
        </CardSection>
      ) : null}
      <Stack mt="xs">
        <Title order={2}> {title} </Title>
        <Text>{description}</Text>
        <Group>
          <a href={sourceCode} target="_blank" rel="noreferrer">
            <Button className={classes.button}>Source Code</Button>
          </a>
          {liveSite && (
            <a href={liveSite} target="_blank" rel="noreferrer">
              <Button className={classes.button}>Live Site</Button>
            </a>
          )}
        </Group>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
