Made Hoàng Anh buoi to sever ᴋᴀᴘʏʙᴀʀᴀ
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 1;

noti_key = "apikeyDNHADZinharb"; // enter something... or no... (no?? next)
name_server = "𝙸𝚗𝚟𝚒𝚗𝚌𝚒𝚋𝚕𝚎 𝙲𝚘𝚖𝚖𝚞𝚗𝚒𝚝𝚢"; // enter your server name :)
invite_discord = "https://discord.gg/XEaC68tVnv"; // enter your link invite discord or error
ping_role_id = {
  boss: "",
  fruitmythical: "",
  lowplay: "",
  sword: "",
  mirage: "",
  haki: {
    normal: "",
    legend: ""
  },
  fullmoon: "",
  kinglegacy: "",
  nearfullmoon: "",
  rateboss: ""
},
noti_config = {
  imginfinite: true,
  boss: true,
  sword: true,
  fruitmythical: true,
  lowplay: true,
  mirage: true,
  haki: {
    legend: true,
  },
  fullmoon: true,
  kitsune: true,
  fruitdrop: true,
  kinglegacy: true,
  nearfullmoon: true,
  rateboss: true,
};

// wehook Để Chạy Notify
webhook_config = {
  boss: "https://discord.com/api/webhooks/1346477342557737093/3NQITR87rI1GhWZRPobxanc-DvpS_DCUL6jYCzjffrXWnJbQx4D2a1RlW7TJ-j5yno4u", // link
  sword: "https://discord.com/api/webhooks/1450489375346528550/aJNRUj7g7bkoMgHduOjoZd2LEPnxhrRUHR1zH4088Uo4zWxMrumqogTKQef7Xz6hvYxz", // link
  lowplay: "", // link
  mirage: "https://discord.com/api/webhooks/1346477341584396358/yXQNSZPrRKVDPYGn5-u8P2VRrgZ8uwAI5Vj3_e_KZCv6L8UKKYk2ONY5QQ6Te34irkbk", // Link
  fruitmythical: "", // Link
  haki: {
    legend: "https://discord.com/api/webhooks/1450489379276718172/O9lTQkl9pjwOx_z7aB4GNc-u0fWA1XoE1kT5hJXfPNhDgepjP2rr3Vr-mwtOzDxLRQoq", // Link
  },
  fullmoon: "https://discord.com/api/webhooks/1346477340170915853/PAI_ar-Ul254OscxD57dzB27a6QBFU-7pnYQ_seVGsYXv-nUYWh4GTTFFNE1PFApNxlt", // link
  kitsune: "", // link
  fruitdrop: "" , // link
  kinglegacy: "https://discord.com/api/webhooks/1450489383361843273/QxC0Zc9uUFOEIwIV4McglfDFWj2uvO1kRg06vAaHoQvD-Ll9ds3hIQPu0NyOQX4bOcnv", // link
  nearfullmoon: "", // link 
  rateboss: "", // link
};
// Token Tài Khoản Discord 
token = "T0RZeU1qY3pPRFU0TWpFME9ESXhPVEk1LkdsUXAyOC5sVWItOVV1Q0NTUEpnbXBYMDZZbER4RUZPTk1YV1ViMUdvTUh5WQ==" // Token Tài Khoản Của Bạn
try {
  require.resolve("discord.js-selfbot-v13");
} catch (e) {
  console.log("Please run: `npm install discord.js-selfbot-v13");
  process.exit(0);
}

try {
  require.resolve("discord.js");
} catch (e) {
  console.log("Please run: `npm install discord.js");
  process.exit(0);
}

try {
  require.resolve("axios");
} catch (e) {
  console.log("Please run: `npm install axios");
  process.exit(0);
}

const { Client, Intents } = require("discord.js-selfbot-v13");
const { WebhookClient, EmbedBuilder } = require("discord.js");
const client = new Client({
  intents: new Intents(7796),
  partials: [
    "USER",
    "CHANNEL",
    "GUILD_MEMBER",
    "MESSAGE",
    "REACTION",
    "GUILD_SCHEDULED_EVENT",
  ],
  checkUpdate: false,
});

const anime = async function (embed) {
  embed = embed.toJSON();

  if (noti_config.imginfinite) {
    embed.image = {
      url: "https://cdn.discordapp.com/attachments/1430232191593349140/1476604488109522954/IMG_1509.jpg?"
    };
  }

  return embed;
};
// dont edit some here ... pls
const ownerID = "862273858214821929";
const getOwnerData = async () => {
  return {
    name: client.user.tag,
    avatar: client.user.displayAvatarURL({ dynamic: true, size: 4096 })
  };
};
client.on("ready", async () => {
  console.log(`Thành công: code đã chạy.`);
  client.user.setStatus("invisible");
  nameOwner = client.users.cache.get(ownerID).tag;
});

const sendWebhook = async (webhookUrl, content, embeds) => {
  const webhook = new WebhookClient({ url: webhookUrl });
  try {
    await webhook.send({
      content,
      embeds
    });
  } catch (error) {
    console.error(`Failed to send webhook: ${error}`);
  }
};
client.on("messageCreate", async (message) => {

  const guild = client.guilds.cache.get("1195301221251170304");

  if (!guild) return console.log("Không tìm thấy server");

  const authorData = {
    name: guild.name,
    iconURL: guild.iconURL({ dynamic: true }) || avtOwner,
    url: invite_discord
  };
    const channel = message.channelId;
  if (channel == "1272331106368229468" && noti_config.sword) {
    // sᴡᴏʀᴅ ʟᴇɢᴇɴᴅᴀʏ
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.sword });
const ownerData = await getOwnerData();
    webhook.send({
      content: ping_role_id.mirage ,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle("𝚂𝚠𝚘𝚛𝚍 𝙻𝚎𝚐𝚎𝚗𝚍")
            .setURL(invite_discord)
            .setAuthor(authorData)
            .addFields(
              { name: "[🗡️] Sword Name :", value: data[2].value },
              { name: "[👥] Players :", value: `${data[3].value} | @_harblx` },
              { name: "[🔗] Job id :", value: data[4].value },
              { name: "[🗒️] Script Join :", value: data[5].value }
            )
            .setTimestamp(Date.now())
            .setColor("00FFB6")
            .setFooter({
  text: `Creator : ${ownerData.name}`,
  iconURL: ownerData.avatar,
}),
          "sword"
        ),
      ],
    });
  } else if (channel == "1197504846459310161" && noti_config.boss) {
    // ʙᴏss ʟᴇɢᴇɴᴅ
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.boss });
   const ownerData = await getOwnerData();    webhook.send({
      content: ping_role_id.mirage,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle("𝙱𝚘𝚘𝚜 𝚂𝚙𝚊𝚠𝚖")
            .setURL(invite_discord)
            .setAuthor(authorData)
            .addFields(
              { name: "[🤖] Boss Name :", value: data[0].value.replace("True Form", "") },
              { name: "[👥] Players :", value: `${data[1].value} | @_harblx` },
              { name: "[🔗] Job id :", value: data[2].value },
              { name: "[🗒️] Script Join :", value: data[3].value }
            )
            .setTimestamp(Date.now())
            .setColor("00FFB6")
            .setFooter({
  text: `Creator : ${ownerData.name}`,
  iconURL: ownerData.avatar,
}),
          "boss"
        ),
      ],
    });
  } else if (channel == "" && noti_config.fruitmythical) {
    // Fʀᴜɪᴛ Mythical 
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.fruitmythical });
const ownerData = await getOwnerData();
    webhook.send({
      content: ping_role_id.mirage,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle("𝙵𝚛𝚞𝚒𝚝 𝙼𝚢𝚝𝚑𝚒𝚌𝚊𝚕")
            .setURL(invite_discord)
            .setAuthor(authorData)
            .addFields(
              { name: "[🍏] Fruit Spawm :", value: data[2].value },
              { name: "[👥] Players :", value: `${data[3].value} | @_harblx` },
              { name: "[🌊] Sea :", value: data[1].value },
              { name: "[🔗] Job id :", value: data[4].value },
              { name: "[🗒️] Script Join :", value: data[5].value }
            )
            .setTimestamp(Date.now())
            .setColor("00FFB6")
            .setFooter({
  text: `Creator : ${ownerData.name}`,
  iconURL: ownerData.avatar,
}),
          "fruitmythical"
        ),
      ],
    });  
  } else if (channel == "1085601317717811200" && noti_config.mirage) {
    // ᴍɪʀᴀɢᴇ ɪsʟᴀɴᴅ
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.mirage });
const ownerData = await getOwnerData();
    webhook.send({
      content:ping_role_id.mirage,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle("𝙼𝚒𝚛𝚊𝚐𝚎 𝙸𝚜𝚕𝚊𝚗𝚍")
            .setURL(invite_discord)
            .setAuthor(authorData)
            .addFields(
              { name: "[🏝️] Mirage :", value: `\`\`🟢\`\`` },
              { name: "[🌙] Time Of Sever :", value: data[1].value },
              { name: "[👥] Players :", value: `${data[2].value} | @_harblx` },
              { name: "[🔗] Job id :", value: data[3].value },
              { name: "[🗒️] Script Join :", value: data[4].value }
            )
            .setTimestamp(Date.now())
            .setColor("00FFB6")
            .setFooter({
  text: `Creator : ${ownerData.name}`,
  iconURL: ownerData.avatar,
}),
          "mirage"
        ),
      ],
    });
    } else if (channel == "" && noti_config.kitsune) {
    // low player 
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.lowplay });
  const ownerData = await getOwnerData();      webhook.send({
      content: data[4].value.replace(/```yaml|```/g, ""),
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle("𝙻𝚘𝚠 𝙿𝚕𝚊𝚢𝚎𝚛")
            .setURL(invite_discord)
            .setAuthor(authorData)
            .addFields(
              { name: "[💮] Few People  :", value: `\`\`\`Real\`\`\`` },
              { name: "[🌟] Time In Server  :", value: data[1].value },
              { name: "[👥] Players :", value: `${data[2].value} | @_harblx` },
              { name: "[🔗] Job id :", value: data[3].value.replace(/```yaml|```/g, "") },
              { name: "[🗒️] Script Join :", value: data[4].value.replace(/```yaml|```/g, "") }
            )
            .setTimestamp(Date.now())
            .setColor("00FFB6")
            .setFooter({
  text: `Creator : ${ownerData.name}`,
  iconURL: ownerData.avatar,
}),
          "lowplay"
        ),
      ],
    });  
  } else if (channel == "" && noti_config.kitsune) {
    // ᴋɪᴛsᴜɴᴇ ɪsʟᴀɴᴅ
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.kitsune });
const ownerData = await getOwnerData();
    webhook.send({
      content: data[4].value,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle("𝙺𝚒𝚜𝚞𝚗𝚎 𝙸𝚜𝚕𝚊𝚗𝚍")
            .setURL(invite_discord)
            .setAuthor(authorData)
            .addFields(
              { name: "[🦊] Kitsune Spawn :", value: `\`\`\`🟢\`\`\`` },
              { name: "[👥] Players :", value: `${data[2].value} | @_harblx` },
              { name: "[🔗] Job id :", value: data[3].value },
              { name: "[🗒️] Script Join :", value: data[4].value }
            )
            .setTimestamp(Date.now())
            .setColor("00FFB6")
            .setFooter({
  text: `Creator : ${ownerData.name}`,
  iconURL: ownerData.avatar,
}),
          "kitsune"
        ),
      ],
    });

  } else if (channel == "" && noti_config.fruitdrop) {
    // Fʀᴜɪᴛ
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.fruitdrop });
const ownerData = await getOwnerData();
    webhook.send({
      content: data[5].value,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle("𝙵𝚛𝚞𝚒𝚝 𝙳𝚛𝚘𝚙")
            .setURL(invite_discord)
            .setAuthor(authorData)
            .addFields(
              { name: "[🍏] Fruit Spawm :", value: data[2].value },
              { name: "[👥] Players :", value: `${data[3].value} | @_harblx` },
              { name: "[🌊] Sea :", value: data[1].value },
              { name: "[🔗] Job id :", value: data[4].value },
              { name: "[🗒️] Script Join :", value: data[5].value }
            )
            .setTimestamp(Date.now())
            .setColor("00FFB6")
            .setFooter({
  text: `Creator : ${ownerData.name}`,
  iconURL: ownerData.avatar,
}),
          "fruitdrop"
        ),
      ],
    });
  }  else if (channel == "1088023824555053097" && noti_config.haki.legend) {
    // ʜᴀᴋɪ ʟᴇɢᴇɴᴅ
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.haki.legend });
const ownerData = await getOwnerData();
    webhook.send({
      content: ping_role_id.mirage,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle("𝙷𝚊𝚔𝚒 𝙻𝚎𝚐𝚎𝚗𝚍𝚊𝚛𝚢")
            .setURL(invite_discord)
            .setAuthor(authorData)
            .addFields(
              { name: "[🎨] Haki Name :", value: data[0].value },
              { name: "[🌊] Sea :", value: data[1].value },
              { name: "[👥] Players :", value: `${data[2].value} | @_harblx` },
              { name: "[🔗] Jon id :", value: data[3].value },
              { name: "[🗒️] Script Join :", value: data[4].value }
            )
            .setTimestamp(Date.now())
            .setColor("00FFB6")
            .setFooter({
  text: `Creator : ${ownerData.name}`,
  iconURL: ownerData.avatar,
}),
          "haki"
        ),
      ],
    });
  } else if (channel == "1085601598555832400" && noti_config.fullmoon) {
    // ғᴜʟʟ ᴍᴏᴏᴍ
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.fullmoon });
const ownerData = await getOwnerData();
    webhook.send({
      content: ping_role_id.mirage,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle("𝙵𝚞𝚕𝚕 𝙼𝚘𝚘𝚗")
            .setURL(invite_discord)
            .setAuthor(authorData)
            .addFields(
              { name: "[🎑] Moon Phase :", value: data[2].value },
              { name: "[⏰] Time To Night :", value: data[0].value },
              { name: "[👥] Players :", value: `${data[1].value} | @_harblx` },
              { name: "[🔗] Job id :", value: data[3].value },
              { name: "[🗒️] Script Join :", value: data[4].value }
            )
            .setTimestamp(Date.now())
            .setColor("00FFB6")
            .setFooter({
  text: `Creator : ${ownerData.name}`,
  iconURL: ownerData.avatar,
}),
          "fullmoon"
        ),
      ],
    });
  } else if (channel == "1184516926651768954" && noti_config.kinglegacy) {
    // ᴋɪɴɢ ʟᴇɢᴀᴄʏ
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.kinglegacy });
const ownerData = await getOwnerData();
    webhook.send({
      content: ping_role_id.mirage,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle("𝙺𝚒𝚗𝚐 𝙻𝚎𝚐𝚊𝚌𝚢")
            .setURL(invite_discord)
            .setAuthor(authorData)
            .addFields(
              { name: "[⏳] Time :", value: data[0].value },
              { name: "[👥] Players :", value: `${data[1].value} | @_harblx` },
              { name: "[👑] Boss / Moon : ", value: data[2].value },
              { name: "[🔗] Job id :", value: data[3].value },
              { name: "[🗒️] Script Join", value: data[4].value }
            )
            .setTimestamp(Date.now())
            .setColor("00FFB6")
            .setFooter({
  text: `Creator : ${ownerData.name}`,
  iconURL: ownerData.avatar,
}),
          "kinglegacy"
        ),
      ],
    });
  } else if (channel =="" && noti_config.rateboss) {
    // ʙᴏss ʀᴀɪᴅ
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.rateboss });
const ownerData = await getOwnerData();
    webhook.send({
      content: data[5].value,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle("𝙱𝚘𝚜𝚜 𝚁𝚊𝚒𝚍")
            .setURL(invite_discord)
            .setAuthor(authorData)
            .addFields(
              { name: "[👹] Bᴏss Name :",  value: data[2].value }, 
              { name: "[🌊] Sea :", value: data[1].value },
              { name: "[👥] Players :", value: `${data[3].value} | @_harblx` },
              { name: "[🔗] Job id :", value: data[4].value },
              { name: "[🗒️]Script Join :", value: data[5].value }
            )
            .setTimestamp(Date.now())
            .setColor("00FFB6")
            .setFooter({
  text: `Creator : ${ownerData.name}`,
  iconURL: ownerData.avatar,
}),
          "rateboss"
        ),
      ],
    });
  } else if (channel == "" && noti_config.nearfullmoon) {
    // ɴᴇᴀʀ ғᴜʟʟ ᴍᴏᴏɴ
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.nearfullmoon });
 const ownerData = await getOwnerData();
    webhook.send({
      content: data[5].value,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle("𝙽𝚎𝚊𝚛 𝙵𝚞𝚕𝚕 𝙼𝚘𝚘𝚗")
            .setURL(invite_discord)
            .setAuthor(authorData)
            .addFields(
              { name: "[🌙] Moon Status :", value: data[2].value },
              { name: "[👥] Players  :", value: `${data[3].value} | @_harblx` },
              { name: "[🔗] Job id :", value: data[4].value },
              { name: "[🗒️] Script Join :", value: data[5].value }
            )
            .setTimestamp(Date.now())
            .setColor("00FFB6")
            .setFooter({
  text: `Creator : ${ownerData.name}`,
  iconURL: ownerData.avatar,
}),
          "nearfullmoon"
        ),
      ],
    });
  }
});

client.login(token);

console.log("Host Lỏ Nên Lâu");
console.log("Đang loading...");
console.log("Cho Tiền Mua Host");
Bạn có thể mã hoá code này mà hoạt động bình thường không