
var getPosts = function() {
    var posts = [
      {
        id: 1,
        title: 'Alandersson Robertinho Pereira',
        image: 'foto1.png',
        description: 'Programador Geral',
        body: 'Linkedin'
      },
      {
        id: 2,
        title: 'Pedro Paz',
        image: 'tockers.jpg',
        description: 'Ajudante geral',
        body: 'Linkedin'
      },
      {
        id: 3,
        title: 'Clébinho Serelepe',
        image: 'kami.jfif',
        description: 'Criador de ideias',
        body: 'Linkedin'
      },
      {
        id: 4,
        title: 'Ronaldo Fenomeno',
        image: 'ayel.jpg',
        description: 'Programador 2',
        body: 'Linkedin'
      },
      {
        id: 5,
        title: 'Felipe Santos',
        image: 'micao.jpg',
        description: 'Programador 3',
        body: 'Linkedin'
      }
    ];
  
    return posts;
  }
  
  module.exports = {
    getPosts: getPosts
  }