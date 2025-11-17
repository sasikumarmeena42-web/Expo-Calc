import { useState } from 'react';

export function useCalculator() {
  const [input, setInput] = useState<string>(''); 
  const [result, setResult] = useState<string>('0');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Handle key press (numbers / operators / scientific keys)
  const handlePress = (value: string) => {
    if (value === 'C') {
      clear();
    } else if (value === '=') {
      calculate();
    } else {
      setInput(prev => prev + value);
    }
  };

  // Convert sin(), cos(), log(), etc. → Math.sin(), Math.cos() ...
  const convertToMathExpression = (expr: string) => {
    return expr
      .replace(/sin/gi, 'Math.sin')
      .replace(/cos/gi, 'Math.cos')
      .replace(/tan/gi, 'Math.tan')
      .replace(/log/gi, 'Math.log10')
      .replace(/ln/gi, 'Math.log')
      .replace(/√/g, 'Math.sqrt')
      .replace(/pi/gi, 'Math.PI')
      .replace(/\^/g, '**'); // exponent
  };

  // Perform calculation
  const calculate = () => {
    try {
      const sanitized = input.replace(/[^-()√\d/*+.a-zA-Z^]/g, '');
      const mathExpr = convertToMathExpression(sanitized);
      const evalResult = eval(mathExpr);
      setResult(evalResult.toString());
    } catch {
      setResult('Error');
    }
  };

  // Clear all
  const clear = () => {
    setInput('');
    setResult('0');
  };

  // Toggle theme
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return {
    input,
    result,
    theme,
    handlePress,
    clear,
    calculate,
    toggleTheme,
  };
}