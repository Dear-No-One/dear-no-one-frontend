export default function() {
  this.namespace = '/api';

  this.get('/blogs', function() {
    return {
      data: [{
        type: 'blogs',
        id: 1,
        attributes: {
          title: 'Emo Bunny',
          body: 'I cut my little bunny paws with razor blades',
        }
      }, {
        type: 'blogs',
        id: 2,
        attributes: {
          title: 'Coding for dorks',
          body: 'come learn to code with all your dork friends',
        }
      }, {
        type: 'blogs',
        id: 3,
        attributes: {
          title: 'Money',
          body: 'I need money',
        }
      }]
    };
  });

  this.get('/authors', (schema, request) => {
    return schema.authors.all();
  });

  this.get('/authors/:id', (schema, request) => {
  return schema.authors.find(request.params.id);
});

}
