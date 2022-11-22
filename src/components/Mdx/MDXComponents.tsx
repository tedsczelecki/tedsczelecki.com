import {
  chakra,
  Image as ChakraImage,
  useColorModeValue,
  Heading,
  UnorderedList,
  OrderedList,
  ListItem,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/nightOwl';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

const ChakraHighlight = chakra(Highlight, {
  shouldForwardProp: prop =>
    ['Prism', 'theme', 'code', 'language', 'children'].includes(prop),
});

const CodeHighlight = ({ children: codeString, className: language }: any) => {
  const theme = useColorModeValue(lightTheme, darkTheme);
  if (!language) {
    return (
      <chakra.code
        apply="mdx.code"
        color="purple.500"
        _dark={{
          color: 'purple.200',
          bg: 'purple.900',
        }}
        bg="purple.50"
        px={1}
        py={0.5}
        rounded={{ base: 'none', md: 'md' }}
      >
        {codeString}
      </chakra.code>
    );
  }
  language = language.replace('language-', '');
  const showLineNumbers = !['shell', 'text'].includes(language);

  return (
    <ChakraHighlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        tokens.pop();
        return (
          <div data-language={className}>
            <chakra.pre
              className={className}
              sx={{ ...style, backgroundColor: 'gray.50' }}
              _dark={{
                backgroundColor: 'gray.900',
              }}
              overflowX="auto"
              rounded="md"
              p={4}
              mx={-4}
            >
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i });
                return (
                  <chakra.div {...lineProps} display="table-row" key={i}>
                    {showLineNumbers && (
                      <chakra.span
                        w={8}
                        display="table-cell"
                        textAlign="right"
                        userSelect="none"
                        color="blackAlpha.500"
                        pr={3}
                        _dark={{
                          color: 'whiteAlpha.500',
                        }}
                      >
                        {i + 1}
                      </chakra.span>
                    )}
                    {line.map((token, key) => {
                      return (
                        <chakra.span
                          {...getTokenProps({ token, key })}
                          key={`${i}.${key}`}
                        />
                      );
                    })}
                  </chakra.div>
                );
              })}
            </chakra.pre>
          </div>
        );
      }}
    </ChakraHighlight>
  );
};

const Image = props => {
  return (
    <ChakraImage {...props} layout="responsive" loading="lazy" quality={100} />
  );
};

interface Props {
  children: React.ReactNode;
}

const MDXComponents = {
  code: CodeHighlight,
  h1: ({ children }: Props) => <Heading size="2xl">{children}</Heading>,
  h2: ({ children }: Props) => <Heading size="xl">{children}</Heading>,
  h3: ({ children }: Props) => <Heading size="lg">{children}</Heading>,
  h4: ({ children }: Props) => <Heading size="md">{children}</Heading>,
  hr: () => <hr />,
  strong: ({ children }: Props) => <Text fontWeight="bold">{children}</Text>,
  img: Image,
  br: () => <br />,
  p: ({ children }: Props) => (
    <Text fontSize="md" as="p">
      {children}
    </Text>
  ),
  ul: ({ children }: Props) => <UnorderedList>{children}</UnorderedList>,
  ol: ({ children }: Props) => <OrderedList>{children}</OrderedList>,
  li: ({ children }: Props) => <ListItem>{children}</ListItem>,
};

export default MDXComponents;
