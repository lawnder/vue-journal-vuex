export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "The Legend of Zelda is an action-adventure game franchise created by the Japanese game designers Shigeru Miyamoto and Takashi Tezuka. It is primarily developed and published by Nintendo, although some portable installments and re-releases have been outsourced to Capcom, Vanpool, and Grezzo. The gameplay incorporates action-adventure and elements of action RPG games.",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Mario is a character created by Japanese video game designer Shigeru Miyamoto. He is the title character of the video game franchise of the same name and the mascot of Japanese video game company Nintendo. Mario has appeared in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Mario's fraternal twin brother is Luigi.",
      picture: null,
    },
    {
      id: new Date().getTime() + 3000,
      date: new Date().toDateString(),
      text: "Metroid is an action-adventure game franchise created by Nintendo. The player controls the bounty hunter Samus Aran, who protects the galaxy from Space Pirates and other malevolent forces and their attempts to harness the power of the parasitic Metroid creatures.",
      picture: null,
    },
  ],
});
