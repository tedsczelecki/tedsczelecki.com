export const CONTENT_MAX_WIDTH = '1400px' as const;

export const CYAN = 'dracula.cyan.400' as const;
export const GREEN = 'dracula.green.400' as const;
export const ORANGE = 'dracula.orange.400' as const;
export const PINK = 'dracula.pink.400' as const;
export const PURPLE = 'dracula.purple.400' as const;
export const RED = 'dracula.red.400' as const;
export const TRANSPARENT = 'transparent' as const;
export const YELLOW = 'dracula.yellow.400' as const;

export const ANGULAR = 'angular' as const;
export const AWS = 'aws' as const;
export const CSS = 'css' as const;
export const HTML = 'html' as const;
export const JAVA = 'java' as const;
export const JAVASCRIPT = 'javascript' as const;
export const NODEJS = 'nodejs' as const;
export const PHP = 'php' as const;
export const POSTGRES = 'postgres' as const;
export const SHOPIFY = 'shopify' as const;
export const WORDPRESS = 'wordpress' as const;

export const colorCssVariables = {
  [CYAN]: '--chakra-colors-dracula-cyan-400',
  [GREEN]: '--chakra-colors-dracula-green-400',
  [ORANGE]: '--chakra-colors-dracula-orange-400',
  [PINK]: '--chakra-colors-dracula-pink-400',
  [PURPLE]: '--chakra-colors-dracula-purple-400',
  [RED]: '--chakra-colors-dracula-red-400',
  [TRANSPARENT]: 'transparent',
  [YELLOW]: '--chakra-colors-dracula-yellow-400',
};

export const tagColors: Record<string, string> = {
  [ANGULAR]: PURPLE.replace('.400', ''),
  [AWS]: YELLOW.replace('.400', ''),
  [CSS]: PURPLE.replace('.400', ''),
  [HTML]: PURPLE.replace('.400', ''),
  [JAVA]: ORANGE.replace('.400', ''),
  [JAVASCRIPT]: PINK.replace('.400', ''),
  [NODEJS]: PINK.replace('.400', ''),
  [PHP]: CYAN.replace('.400', ''),
  [POSTGRES]: CYAN.replace('.400', ''),
  [SHOPIFY]: GREEN.replace('.400', ''),
  [WORDPRESS]: ORANGE.replace('.400', ''),
};
