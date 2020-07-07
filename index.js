const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const axios = require("axios").default;
const cheerio = require("cheerio");
const cron = require("node-cron");
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
const { BreakingNew } = require("./models");
//Para ejecutar a cada minuto * * * * *. Basarse en https://crontab.guru/ para establecer el crontab
cron.schedule("* * * * *", async () => {
  console.log("Cron Job Executed!");
  const html = await axios.get("https://cnnespanol.cnn.com/");
  const $ = cheerio.load(html.data);
  const titles = $(".news__title");
  titles.each((index, element) => {
    const breakingNew = {
      title: $(element)
        .text().trim()
        .toString(),
      link: $(element)
        .children()
        .attr("href")
    };

    BreakingNew.create([breakingNew]);
  });
});
