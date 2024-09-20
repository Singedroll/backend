exports.deleteUser = (request, response) => {
  console.log(request.params);
  response.send(`${request.params.id}`);
};
