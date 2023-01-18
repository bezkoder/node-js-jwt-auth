exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.parentBoard = (req, res) => {
  res.status(200).send("Parent Content.");
};

exports.studentBoard = (req, res) => {
  res.status(200).send("Student Content.");
};

exports.teacherBoard = (req, res) => {
  res.status(200).send("Teacher Content.");
};

exports.accountantBoard = (req, res) => {
  res.status(200).send("Accountant Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Super Admin Content.");
};
