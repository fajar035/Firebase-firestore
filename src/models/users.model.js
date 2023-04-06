const db = require("../configs/db");
// jika gak ada collection, auto buat sendiri
const docRef = db.collection("users");
const model = {};

model.all = async () => {
  try {
    let result = [];
    const data = await docRef.get();
    data.forEach((el) => {
      result.push({
        id: el.id,
        username: el.data().username,
        password: el.data().password,
      });
    });
    return result;
  } catch (error) {
    return error;
  }
};

model.store = async (body) => {
  try {
    const result = await docRef.add(body);
    return result;
  } catch (error) {
    return error;
  }
};

model.detail = async (id) => {
  try {
    const result = await docRef.doc(id).get();
    const { _fieldsProto } = result;
    console.log(_fieldsProto);
    return result;
  } catch (error) {
    return error;
  }
};

model.delete = async (id) => {
  try {
    const result = await docRef.doc(id).delete();
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = model;
