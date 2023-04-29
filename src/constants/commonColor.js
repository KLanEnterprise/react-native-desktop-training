const {useColorScheme} = require('react-native');
const {default: theme} = require('./theme');

const isDarkMode = useColorScheme() === 'dark';

export function commonColor() {
  const useTheme = isDarkMode ? theme.dark : theme.light;
  return isDarkMode ? theme.dark : theme.light;
}
