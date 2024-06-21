import React from 'react';

interface TextFormatterProps {
  text: string;
}

const TextFormatter: React.FC<TextFormatterProps> = ({ text }) => {
  const formatText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('- ')) {
        return <li key={index}>{line.slice(2)}</li>;
      } else {
        return (
          <p className="pt-2" key={index}>
            {line}
          </p>
        );
      }
    });
  };

  return <>{formatText(text)}</>;
};

export default TextFormatter;
