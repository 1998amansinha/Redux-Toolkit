const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/icecream/iceCreamSlice");
const userReducer = require('../features/user/userSlice')
// const logger = require("redux-logger").createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer
  },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
module.exports = store;
