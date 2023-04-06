const success = (res, status, data) => {
  return res.status(status).json({
    result: {
      status,
      data,
    },
  });
};

const failed = (res, status, error) => {
  console.log(error);
};

module.exports = { success, failed };
