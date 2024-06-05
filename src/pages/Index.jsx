import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, Box, Spinner, IconButton, HStack, Image } from "@chakra-ui/react";
import { FaSearch, FaRobot } from "react-icons/fa";

const Index = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    setLoading(true);
    // Simulate a web search
    setTimeout(() => {
      setResults([
        { title: "Merchant Services Underwriting Guide", description: "A comprehensive guide to merchant services underwriting.", image: "https://images.unsplash.com/photo-1553708881-112abc53fe54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1bmRlcndyaXRpbmclMjBndWlkZXxlbnwwfHx8fDE3MTc2MjA2NjN8MA&ixlib=rb-4.0.3&q=80&w=1080" },
        { title: "Automated Underwriting Systems", description: "How AI is transforming the underwriting process.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHVuZGVyd3JpdGluZ3xlbnwwfHx8fDE3MTc2MjA2NjN8MA&ixlib=rb-4.0.3&q=80&w=1080" },
        { title: "Best Practices for Merchant Underwriting", description: "Tips and best practices for effective merchant underwriting.", image: "https://images.unsplash.com/photo-1680501537006-565e314227d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZXN0JTIwcHJhY3RpY2VzJTIwdW5kZXJ3cml0aW5nfGVufDB8fHx8MTcxNzYyMDY2M3ww&ixlib=rb-4.0.3&q=80&w=1080" },
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack spacing={2} width="100%">
          <Input placeholder="Search the web..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <IconButton aria-label="Search" icon={<FaSearch />} onClick={handleSearch} />
        </HStack>
        {loading ? (
          <Spinner size="xl" />
        ) : (
          results.map((result, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%">
              <HStack spacing={4}>
                <Image src={result.image} alt={result.title} boxSize="100px" objectFit="cover" />
                <VStack align="start" spacing={1}>
                  <Text fontWeight="bold">{result.title}</Text>
                  <Text>{result.description}</Text>
                </VStack>
              </HStack>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Index;
