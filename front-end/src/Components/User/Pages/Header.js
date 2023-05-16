import React from "react";
import { Box, Flex, Link, Text } from "rebass";

export default function Header() {
  return (
    <div>
      <Flex px={2} color="white" bg="black" alignItems="center">
        <Text p={2} fontWeight="bold">
          Rebass
        </Text>
        <Box mx="auto" />
        <Link variant="nav" href="#!">
          Profile
        </Link>
      </Flex>
    </div>
  );
}
