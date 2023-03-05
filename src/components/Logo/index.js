import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Logo(props) {
  return (
    <Box dipslay="flex" flexDirection="column" w="100%" {...props}>
      <Link to="/" style={{ padding: 0 }}>
        <Heading
          as="h6"
          size="md"
          fontWeight="bold"
          color={['white', 'white', 'white', 'primary.600']}
          p="0"
        >
          Ben Kigera
          <Text as="span" display="block" fontSize="0.85rem" fontWeight="400">
            Playground
          </Text>
        </Heading>
      </Link>
    </Box>
  );
}
