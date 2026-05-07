const fs = require('fs');

function updatePage() {
  let content = fs.readFileSync('app/page.tsx', 'utf8');
  
  // Insert Hobbit video
  content = content.replace(
    '  const musicALImage = [\r\n    {\r\n      id: "NBPVIljJBqg",',
    '  const musicALImage = [\r\n    {\r\n      id: "EXrNm_RSwJA",\r\n      title: "The Hobbit, Erebor scène",\r\n      desc: "Ma composition pour cette scène du \'Hobbit, un voyage inattendu\'",\r\n      style: "orchestral, épique, médiéval fantasy"\r\n    },\r\n    {\r\n      id: "NBPVIljJBqg",'
  );
  
  // If \r\n fails, try \n
  if (!content.includes('EXrNm_RSwJA')) {
    content = content.replace(
      '  const musicALImage = [\n    {\n      id: "NBPVIljJBqg",',
      '  const musicALImage = [\n    {\n      id: "EXrNm_RSwJA",\n      title: "The Hobbit, Erebor scène",\n      desc: "Ma composition pour cette scène du \'Hobbit, un voyage inattendu\'",\n      style: "orchestral, épique, médiéval fantasy"\n    },\n    {\n      id: "NBPVIljJBqg",'
    );
  }

  // Remove WALL-E
  content = content.replace(
    '    {\r\n      id: "inQW64to0k4",\r\n      title: "WALL-E - chanson",\r\n      desc: "Ma proposition de chanson composée pour une scène du film d\'animation \\"WALL-E\\"",\r\n      style: "musique moderne, jazz-trap, chanson"\r\n    },\r\n',
    ''
  );
  
  // If \r\n fails, try \n
  if (content.includes('inQW64to0k4')) {
    content = content.replace(
      '    {\n      id: "inQW64to0k4",\n      title: "WALL-E - chanson",\n      desc: "Ma proposition de chanson composée pour une scène du film d\'animation \\"WALL-E\\"",\n      style: "musique moderne, jazz-trap, chanson"\n    },\n',
      ''
    );
  }
  
  fs.writeFileSync('app/page.tsx', content);
}

function updatePortfolio() {
  let s = fs.readFileSync('app/portfolio/page.tsx', 'utf8');

  s = s.replace(
    '    {\r\n        name: "Action",\r\n        videos: [\r\n            {\r\n                youtubeId: "NBPVIljJBqg",',
    '    {\r\n        name: "Fantasy / Action",\r\n        videos: [\r\n            {\r\n                youtubeId: "EXrNm_RSwJA",\r\n                title: "The Hobbit, Erebor scène",\r\n                description: "Ma composition pour cette scène du \'Hobbit, un voyage inattendu\'",\r\n                styleInfo: "orchestral, épique, médiéval fantasy"\r\n            },\r\n            {\r\n                youtubeId: "NBPVIljJBqg",'
  );
  if (!s.includes('EXrNm_RSwJA')) {
    s = s.replace(
      '    {\n        name: "Action",\n        videos: [\n            {\n                youtubeId: "NBPVIljJBqg",',
      '    {\n        name: "Fantasy / Action",\n        videos: [\n            {\n                youtubeId: "EXrNm_RSwJA",\n                title: "The Hobbit, Erebor scène",\n                description: "Ma composition pour cette scène du \'Hobbit, un voyage inattendu\'",\n                styleInfo: "orchestral, épique, médiéval fantasy"\n            },\n            {\n                youtubeId: "NBPVIljJBqg",'
    );
  }

  const animBlockRN = '    {\r\n        name: "Animation",\r\n        videos: [\r\n            {\r\n                youtubeId: "Zo0qV6-G_KY",\r\n                title: "Ratatouille - scène",\r\n                description: "Ma proposition pour une scène du film \\"Ratatouille\\"",\r\n                styleInfo: "Orchestral, nostalgique, animé"\r\n            },\r\n        ],\r\n    },\r\n';
  const animBlockN = '    {\n        name: "Animation",\n        videos: [\n            {\n                youtubeId: "Zo0qV6-G_KY",\n                title: "Ratatouille - scène",\n                description: "Ma proposition pour une scène du film \\"Ratatouille\\"",\n                styleInfo: "Orchestral, nostalgique, animé"\n            },\n        ],\n    },\n';

  if (s.includes(animBlockRN)) {
    s = s.replace(animBlockRN, '');
    s = s.replace(
      '    {\r\n        name: "Chanson pour l\'image",',
      animBlockRN + '    {\r\n        name: "Chanson pour l\'image",'
    );
  } else if (s.includes(animBlockN)) {
    s = s.replace(animBlockN, '');
    s = s.replace(
      '    {\n        name: "Chanson pour l\'image",',
      animBlockN + '    {\n        name: "Chanson pour l\'image",'
    );
  }

  fs.writeFileSync('app/portfolio/page.tsx', s);
}

updatePage();
updatePortfolio();
