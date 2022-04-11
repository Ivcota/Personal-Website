import {
  ActionIcon,
  Burger,
  Drawer,
  Group,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import React, { FC } from "react";
import { Moon, Sun } from "tabler-icons-react";

interface Props {}

const Navbar: FC<Props> = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [isOpen, toggleIsOpen] = useToggle(false, [false, true]);

  return (
    <>
      <Group position="apart" px={20} mt={5}>
        <Title order={4}>Iverson Diles</Title>
        <Group position="apart">
          <ActionIcon onClick={() => toggleColorScheme()}>
            {colorScheme === "light" ? <Moon /> : <Sun />}
          </ActionIcon>
          <Burger opened={isOpen} onClick={() => toggleIsOpen()} />
        </Group>
      </Group>
      <Drawer
        opened={isOpen}
        position="right"
        onClose={() => toggleIsOpen()}
      ></Drawer>
    </>
  );
};

export default Navbar;
