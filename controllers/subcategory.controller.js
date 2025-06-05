const sqlPool = require("../database");

const subcategoryController = {
  getSubCategories: async (req, res) => {
    try {
      const [rows] = await sqlPool.query(
        'select * from categories where parentId=0'
      );

      const [rowsCount] = await sqlPool.query(
        "select count(*) as total from categories where parentId=?",
        [req.query.parentId]
      );
      res.json({ data: rows, total: rowsCount[0].total });
    } catch (error) {
      console.log(error);
      res.json({ state: error });
    }
  },
};

module.exports = subcategoryController;
