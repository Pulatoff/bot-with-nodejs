const { Telegraf, Markup, Composer, session, Scenes } = require("telegraf");
const TOKEN = "5446910492:AAExPfEtddWxT-dQrBSIlq-on9CxWbVyrQE";

const bot = new Telegraf(TOKEN);

const startWizard = new Composer();

startWizard.on("text", async (ctx) => {
  await ctx.reply("Ismizni kiriting:");
  return ctx.wizard.next();
});

const firstName = new Composer();

firstName.on("text", async (ctx) => {
  await ctx.reply("Familayangizni kiriting:");
  return ctx.wizard.next();
});

const lastName = new Composer();

lastName.on("text", async (ctx) => {
  await ctx.reply("telefon nomeringizni kiriting:");
  return ctx.wizard.next();
});

const telNumber = new Composer();

telNumber.on("text", async (ctx) => {
  await ctx.reply("Locatsiyangizni junating:");
  return ctx.wizard.next();
});

const loactions = new Composer();

loactions.on("text", async (ctx) => {
  await ctx.reply("Yoshingizni kiriting:");
  return ctx.wizard.next();
});

const age = new Composer();

age.on("text", async (ctx) => {
  await ctx.reply("Dasturlash titlini tanlang");
  return ctx.wizard.next();
});

const programLang = new Composer();

programLang.on("text", async (ctx) => {
  await ctx.reply("Qaysi uqishda uqiysiz");
  return ctx.wizard.next();
});

const universty = new Composer();

universty.on("text", async (ctx) => {
  await ctx.reply("Rahmat registratsiyadan utganingiz uchun");
  return ctx.wizard.next();
});

const registScene = new Scenes.WizardScene(
  "wizardScenes",
  startWizard,
  firstName,
  lastName,
  telNumber,
  loactions,
  age,
  programLang,
  universty
);
const stage = new Scenes.Stage([registScene]);

bot.use(session());
bot.use(stage.middleware());

bot.command("start", (ctx) => ctx.scene.enter("wizardScenes"));

bot.launch();
