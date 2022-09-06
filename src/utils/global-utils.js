const convertTextIntoWords = (text, words) => {
  const getWordsFromChildren = text.split(" ");

  for (const [, item] of getWordsFromChildren.entries()) {
    words.push(item.split(""));
  }

  words.map((word, index) => {
    //Prevent adding space to the last word
    if (index !== words.length - 1) return word.push("\u00A0");
  });
};

const add_homepage_images = (empty_gallery) => {
  for (let i = 1; i <= 11; i++) {
    empty_gallery.push(`/images/homepageGallery/${i}.jpg`);
  }
  empty_gallery.push(`/images/homepageGallery/2.jpg`);
  empty_gallery.push(`/images/homepageGallery/3.jpg`);
};

export { convertTextIntoWords, add_homepage_images };
