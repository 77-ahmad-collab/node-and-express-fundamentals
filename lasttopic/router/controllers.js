const people = require("../Data");
const getdata = (req, res) => {
  res.status(200).json(people);
};

const deletedata = (req, res) => {
  const { id } = req.params;
  const find = people.find((val) => Number(val.id) === Number(id));
  console.log(find);
  if (!find) {
    return res.send("the id you entered doesnt exists");
  }
  const newpeople = people.filter((val) => Number(val.id) !== Number(id));
  res.json(newpeople);
};

const putdata = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const find = people.find((val) => Number(val.id) === Number(id));

  if (!find) {
    return res.send("the id you entered doesnt exists");
  }
  const newpep = people.map((val) => {
    if (val.id === Number(id)) {
      val.name = name;
    }
    return val;
  });
  //   console.log(id, name);
  res.json(newpep);
};

const postdata = (req, res) => {
  console.log(req.body);

  const { name, id } = req.body;
  res.send([...people, { name, id }]);
};

module.exports = { getdata, putdata, deletedata, postdata };
