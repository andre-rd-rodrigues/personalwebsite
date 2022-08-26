const convertTextIntoWords = (text, words) => {
  const getWordsFromChildren = text.split(" ");

  for (const [, item] of getWordsFromChildren.entries()) {
    words.push(item.split(""));
  }

  words.map((word) => {
    return word.push("\u00A0");
  });
};

export { convertTextIntoWords };
