import { Container, Title, Text, Stack } from "@mantine/core";
import Head from "next/head";
import React from "react";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Container size="sm">
        <Title>Projects</Title>
        <Text mt="md">
          Here are some projects you can look at if you&#39;re intrested in
          seeing my technical skills. My production work cannot be displayed
          since the code is not public, however, you have a good view of what
          I&#39;ve got going currently on the side.
        </Text>

        <Stack mt="lg" spacing="sm" mb="lg">
          <ProjectCard
            title="Portfolio Stacker"
            description="A Fullstack application built with Typescript, React, and Node. Making use of GraphQL, the FrontEnd is fetching and mutating data."
            sourceCode="https://github.com/Ivcota/Portfolio-Stacker"
          />

          <ProjectCard
            title="Time Submit App"
            description="A NextJS + Firebase App that logs and manages data for many users with nested relationships."
            sourceCode="https://github.com/Ivcota/Time-Submit-Rebuild"
          />
          <ProjectCard
            title="TypeScript Automatic Leads GraphQL API"
            description="A microservice to handle tedious application business logic that used to be handled with sql stored procedures. Porting data queries and mutation to be accessible to a react front-end. (Private Code) "
            sourceCode="https://github.com/Ivcota/Automatic-Leads-Express-GraphQL"
          />
          <ProjectCard
            title="Wedding Application"
            description="My personal wedding app created with NextJS & firebase"
            sourceCode="https://github.com/Ivcota/Next-Wedding-App"
            liveSite="https://www.diles2022.com/"
          />
          <ProjectCard
            title="Convention Badge App"
            description="Simple app check-out and check-in badges using graphql and react."
            sourceCode="https://github.com/Ivcota/simple-memorial-form"
            liveSite="https://www.azconvention.org/"
          />
          <ProjectCard
            title="Personal Website"
            description="The website you're on right now. Designed on top of Mantine."
            sourceCode="https://github.com/Ivcota/personal-website"
            liveSite="https://iversondiles.com"
          />
          <ProjectCard
            title="Project Red Sparrow"
            description="One of many micro-services designed to interact with an existing monolith applicaiton and provide rest end-points for a React Front-End. Built with Express. "
            sourceCode="https://github.com/Ivcota/red_sparrow/"
          />
          <ProjectCard
            title="2022 Chat App"
            description="A basic chatapp built with react, websockets, and graphql. The front-end being handle with Nextjs & React Native."
            sourceCode="https://github.com/LogvnR/chatApp2022"
          />
        </Stack>
      </Container>
    </>
  );
};

export default Project;
