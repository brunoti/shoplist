const IGNORED = [
  'da',
  'de',
  'do'
];

const cleverCapitalizer = text => {
  text = text.toLowerCase();

  if(IGNORED.includes(text)) {
    return text;
  }

  return text[0].toUpperCase() + text.slice(1);
};

const namelize = name => name
  .split(' ')
  .map(cleverCapitalizer)
  .join(' ');

export default namelize;
