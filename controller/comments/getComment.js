const comments = [
  {
    id: 1,
    like: 10,
    messege: "chat bicherei",
    createdTime: "Fri Sep 22 2024 09:22:03 GMT +0800",
  },
  {
    id: 2,
    like: 30,
    messege: "medeelel avii",
    createdTime: "Fri Sep 22 2024 09:30:03 GMT +0800",
  },
  {
    id: 3,
    like: 14,
    messege: "unee bich",
    createdTime: "Fri Sep 22 2024 09:20:00 GMT +0800",
  },
];

exports.getComment = (request, response) => {
  //   const { id } = request.params;
  const randomID = request.params.id;
  console.log(request.params.d);

  const comment = comments.find((comment) => comment.id === Number(randomID));

  if (comment) {
    response.status(200).json({
      comment,
    });
  } else {
    response.status(400).send(`Comment ${request.params.id} does not exist`);
  }
};
