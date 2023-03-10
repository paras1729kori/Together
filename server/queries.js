const Pool = require("pg").Pool;
const pool = new Pool({
  host: "localhost",
  database: "together-dapp",
  port: 5432,
  user: "postgres",
  password: "1234qwer",
});

const getCampaigns = (req, res) => {
  pool.query("SELECT * FROM campaigns ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

createCampaign = (req, res) => {
  const { unique_id, deadline, campaignName, campaignDesc, imgUrl, targetAmt } =
    req.body;
  pool.query(
    "INSERT INTO campaigns (unique_id, deadline, campaignname, campaigndesc, imgurl, targetamt) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [unique_id, deadline, campaignName, campaignDesc, imgUrl, targetAmt],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .send(`Campaign added with ID: ${results.rows[0].id}`);
    }
  );
};

module.exports = {
  getCampaigns,
  createCampaign,
};
