export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      cats: payload.data
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
