import {
  ActionIcon,
  Burger,
  Button,
  Container,
  createStyles,
  Drawer,
  Group,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useToggle, useMediaQuery, useColorScheme } from "@mantine/hooks";
import Link from "next/link";
import React, { FC } from "react";
import { Moon, Sun } from "tabler-icons-react";

const useClasses = createStyles((theme) => ({
  drawerButton: {
    fontWeight: "normal",
    background:
      theme.colorScheme === `dark` ? theme.colors.blue : theme.colors.dark,

    "&:hover": {
      background: theme.colors.blue[6],
    },
  },
  logo: {
    cursor: "pointer",
  },
}));

const Navbar: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [isOpen, toggleIsOpen] = useToggle(false, [false, true]);
  const { classes } = useClasses();

  const theme = useMantineTheme();

  const showDrawer = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  return (
    <>
      <Container size="lg">
        <Group position="apart" py={40}>
          <Link href="/">
            <Title className={classes.logo} order={4}>
              ID
            </Title>
          </Link>
          <Group position="apart">
            <ActionIcon onClick={() => toggleColorScheme()}>
              {colorScheme === "light" ? <Moon /> : <Sun />}
            </ActionIcon>
            {showDrawer ? (
              <Burger opened={isOpen} onClick={() => toggleIsOpen()} />
            ) : (
              <Group>
                <Link href="/">
                  <Text
                    align="center"
                    style={{
                      cursor: "pointer",
                    }}
                    variant="link"
                  >
                    Home
                  </Text>
                </Link>

                <Link href="/projects">
                  <Text
                    align="center"
                    style={{
                      cursor: "pointer",
                    }}
                    variant="link"
                  >
                    Projects
                  </Text>
                </Link>

                {/* <Link href="/resume">
                <Text
                  align="center"
                  style={{
                    cursor: "pointer",
                  }}
                  variant="link"
                >
                  Resume
                </Text>
              </Link> */}
              </Group>
            )}
          </Group>
        </Group>
      </Container>
      <Drawer opened={isOpen} position="right" onClose={() => toggleIsOpen()}>
        <Container>
          <Stack>
            {/* <Link href="/">
              <Text
                className={classes.logo}
                onClick={() => toggleIsOpen()}
                size="lg"
                align="center"
              >
                Iverson Diles
              </Text>
            </Link> */}

            <Link href="/projects">
              <Text
                onClick={() => toggleIsOpen()}
                align="center"
                style={{
                  cursor: "pointer",
                }}
                variant="link"
              >
                Home
              </Text>
            </Link>

            <Link href="/projects">
              <Text
                onClick={() => toggleIsOpen()}
                align="center"
                style={{
                  cursor: "pointer",
                }}
                variant="link"
              >
                Projects
              </Text>
            </Link>

            {/* <Link href="/resume">
              <Text
                onClick={() => toggleIsOpen()}
                align="center"
                style={{
                  cursor: "pointer",
                }}
                variant="link"
              >
                Resume
              </Text>
            </Link> */}

            {/* <Button
              className={classes.drawerButton}
              onClick={() => toggleColorScheme()}
            >
              Start Now
            </Button> */}
          </Stack>
        </Container>
      </Drawer>
    </>
  );
};

export default Navbar;
