const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything',
              'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog']
const articles = ['The', 'A', 'An'];

const bandsWithoutArticles = bands.map(band => {
  const article = articles.find(article => band.includes(article + ' '));
  if (article) {
    return [Array.from(band).splice(article.length + 1, band.length).join(''), article + ' '];
  } else {
    return [band, ''];
  }
});

const sortedBands = bandsWithoutArticles.sort((a, b) => (a[0] > b[0])? 1 : -1)
                                        .map(band => band[1] + band[0]);

const list = document.querySelector('#bands');

list.innerHTML = sortedBands.map(band => {
  return `<li>${band}</li>`;
}).join('');
