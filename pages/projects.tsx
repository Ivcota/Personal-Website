import { Container, Title, Text, Stack } from "@mantine/core";
import React from "react";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  return (
    <Container size="sm">
      <Title>Projects</Title>
      <Text mt="md">
        Here are some projects you can look at if you're intrested in seeing my
        technical skills. My production work cannot be displayed since the code
        is not public, however, you have a good view of what I've got going
        currently.
      </Text>

      <Stack mt="lg" spacing="sm">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Stack>
    </Container>
  );
};

export default Project;
