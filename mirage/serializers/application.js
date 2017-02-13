// import { JSONAPISerializer } from 'ember-cli-mirage';
//
// export default JSONAPISerializer.extend({
// });

import { Serializer } from 'ember-cli-mirage';

export default Serializer.extend({
  keyForAttribute(attr) {
    return dasherize(attr);
  },

  keyForRelationship(attr) {
    return dasherize(attr);
  },
});
