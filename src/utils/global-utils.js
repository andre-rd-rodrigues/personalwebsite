const convertTextIntoWords = (text, words) => {
  const getWordsFromChildren = text.split(" ");

  for (const [, item] of getWordsFromChildren.entries()) {
    words.push(item.split(""));
  }

  words.map((word) => {
    return word.push("\u00A0");
  });
};

const add_homepage_images = (empty_gallery) => {
  for (let i = 1; i <= 11; i++) {
    empty_gallery.push(`images/homepageGallery/${i}.png`);
  }
  for (let i = 1; i <= 11; i++) {
    empty_gallery.push(`images/homepageGallery/${i}.png`);
  }
};

export { convertTextIntoWords, add_homepage_images };
