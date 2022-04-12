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
        currently on the side.
      </Text>

      <Stack mt="lg" spacing="sm" mb="lg">
        <ProjectCard
          title="Portfolio Stacker"
          description="A Fullstack application built with Typescript, React, and Node. Making use of GraphQL, the FrontEnd is fetching and mutating data."
          sourceCode="https://github.com/Ivcota/Portfolio-Stacker"
        />

        <ProjectCard
          title="AZ Convention | 2022"
          description="A simple application that subscribes members to an aweber list. The codebase is just React."
          sourceCode="https://github.com/Ivcota/simple-memorial-form"
          liveSite="https://www.azconvention.org/"
        />
      </Stack>
    </Container>
  );
};

export default Project;
