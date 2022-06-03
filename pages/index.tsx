import {
  ActionIcon,
  Button,
  Container,
  createStyles,
  Group,
  Paper,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import type { NextPage } from "next";
import { route } from "next/dist/server/router";
import Head from "next/head";
import { BrandGithub, BrandLinkedin } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  header: {
    fontFamily: "Inter",
    fontWeight: 900,
    fontSize: "50px",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: theme.fontSizes.xl * 2,
    },

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: theme.fontSizes.xl * 1.5,
    },
  },

  paper: {
    boxShadow: "none",
    transition: "ease-in-out",
    transitionDuration: "200ms",
    ":hover": {
      boxShadow: theme.shadows.sm,
      transform: `translateY(-.1rem)`,
    },

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      ":hover": {
        transform: `translateY(-.1rem)`,
      },
    },
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container size={900}>
        <Paper className={classes.paper} shadow="xs" px="lg" py="xs">
          <h1 className={classes.header}>
            Let's Develop Your Next User Interface...
          </h1>
          <Text mt="sm">
            I&#39;ll build out a high-quality web application, website, or
            funnel at a competitive price that will raise your eyebrows.
          </Text>

          <Text mt="sm">
            We can build on top of a pre-existing website/funnel you already
            have, or we can go granuller and custom build your stuff from
            scratch.
          </Text>

          <Text mt="sm">
            I&#39;m a front-end / full-stack developer that&#39;s built internal
            web applications, high-traffic funnel sites, and profitabled shopify
            stores.
          </Text>

          <Text underline mt="sm">
            I&#39;m also a contracted coding instructor in the Hayward Unified
            School District.
          </Text>

          <Text mt="sm">
            Whatever you have in mind, let me know and we can get it created for
            a reasonable price. 😄
          </Text>
          <Group mt="md">
            <a href="https://github.com/Ivcota/">
              <ActionIcon
                color={colorScheme === "light" ? "dark" : "gray"}
                variant="filled"
                size="lg"
                radius="xl"
              >
                <BrandGithub />
              </ActionIcon>
            </a>

            <a href="https://www.linkedin.com/in/iverson-diles-4a4261198/">
              <ActionIcon
                color={colorScheme === "light" ? "dark" : "gray"}
                variant="filled"
                size="lg"
                radius="xl"
              >
                <BrandLinkedin />
              </ActionIcon>
            </a>
          </Group>
        </Paper>

        <Paper className={classes.paper} shadow="xs" p="lg" mt={30} mb={80}>
          <Title>Skills</Title>
          <Group my={20} position="apart" grow>
            <Text weight="bold">Languages</Text>
            <Text>Typescript, Javascript, GraphQL, SQL, Python</Text>
          </Group>
          <Group my={20} position="apart" grow>
            <Text weight="bold">Frameworks</Text>
            <Text>React, NextJS, Django, Express, KeystoneJS</Text>
          </Group>
        </Paper>
      </Container>
    </>
  );
};

export default Home;
