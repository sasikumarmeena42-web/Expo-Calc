import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Display } from '../src/components/Display';
import { Keypad } from '../src/components/MyKeyboard';
import { useCalculator } from '../src/hooks/useCalculator';
import { ThemeProvider } from '../src/context/Themecontext';
import { themes } from '../src/styles/Colors';

export default function HomeScreen() {
  const { input, result, handlePress, theme } = useCalculator();
  const currentTheme = themes[theme] || themes.dark;

  return (
    <ThemeProvider value={currentTheme}>
      <SafeAreaView style={[styles.container, { backgroundColor: currentTheme.background }]}>
        <Display input={input} result={result} />
        <Keypad handlePress={handlePress} />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
