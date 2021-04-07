const btn = document.querySelector('button');
const resultContainer = document.getElementById('result');
const test = document.getElementById('test');
const list = document.getElementById('list');

const data = [
  'Been muted or disconnected from vc by a mod',
  'Made a suggestion and it got denied',
  'Submitted a support ticket',
  "Requested to not have my full name on the Discord but then got rejected because I've learned that everyone (except Mods) must have their Facebook profile name as part of their nickname",
  'Been left out of group tags for a meetup I attended',
  'Pinged the admins for help (without submitting a support ticket)',
  'Does not live in SoCal',
  'Cheated my way through the ranks/tiers',
  'Leveled up tiers with an inappropriate message',
  '"Accidentally used the wrong activity, location, or role ping outside of its intended purpose"',
  'Never read the server #rules channel',
  "Don't actually read channel rules before posting but I still hope I don't get in trouble/caught for not reading them",
  'Spent more time on Discord than actually working',
  'Farted on voice chat and hoped no one heard',
  'Planned an event (online or IRL)',
  'Forgot to mute voice chat while peeing',
  "Felt personally attacked by Nick's presentation",
  'Been on voice chat until the sun came up',
  'Blocked someone on the server',
  'Got a warning for posting profanity through a gif URL',
  '"Made a suggestion that was initially denied because Modmins didn\'t "currently see a need" for it, but was approved later"',
  'Been redirected to another channel',
  "Entered a MapleStory voice chat knowing damn well I've never and will never play the game",
  'Wish I could tell modmins to go fuck themselves',
  'Drank so much on voice chat that I knocked out while still on voice chat ',
  'Called someone out only to get called out by someone else right after',
  'Got in trouble for meowbread train/spamming meowbread',
  'Posted a controversial confession/started drama/chaos in confessions',
  'Changed my FB name to change my server nickname',
  'Had a tarrot card reading by Sarah/Tangotini',
  'Exposed my nipples on webcam',
  "DM'd people without checking their DM status",
  'Simped over someone in SAI',
  '"Thinks someone in SAI is super cute/handsome/pretty, but I will never tell them in fear of backlash/being called a creep/simp"',
  'Would do nasty things to anyone that has held a modmin status at any point in SAI',
  'Posted a TT in #sexuality (past) / #thirstday (current)',
  'Lurked in TT',
  'Lurked #sexuality / #thirstdays SPECIFICALLY 15 minutes before Friday',
  "Sent unsolicited DM's to someone about their TT post",
  'Would sleep with someone in the server',
  'I refuse to shit where I eat',
  'Oddly looked nekkid (but not really nekkid) on webcam',
  'Fell asleep on webcam in a voice chat',
  "Told people I'm going to take a shit/pee on voice chat",
  "DM'd a friend to express annoyance about someone in the current voice chat",
  'Typed a really long reply to someone/something only to end up deleting it',
  'Held back urges to roast the fuck out of somebody in voice/text chat',
  'Dirty deleted...',
  '... and got in trouble for it / a Mod personally sent me SSed receipts of my dirty deletes',
  '"Changed something in my About Me to peek in other channels I shouldn\'t be in, thinking I wouldn\'t get caught but learned the hard way that all of the changes are tracked and the modmins know I did it [Please do not do this]"',
  'Joined SAI because a dating app match referred me',
  'Thought about leaving the server for personal reasons',
  'Fell for a fake free nitro',
  "Got bamboozled by Kwin's April Fools joke",
  'Been drunk in karaoke virtual/IRL events',
  'Downloaded a game because of SAI',
  'Been a part of work/WFH/study voice chat... and procrastinated because of it',
  'Been on voice chat while driving and missed their exit because of it',
  'I miss the #confessions channel',
  'Got emotionally charged by #confessions but still wanted the channel to be a thing because it added some spice to my life',
  'Stayed in a tier more than 3 months',
  "Been personally attacked by Hiro (bot) because it wouldn't give rep",
  'Accidentally pinged the wrong person with the same name as the intended user',
  'Been told: TO THE #KINKS-AND-SHIT CHANNEL (past) / #SEXUALITY CHANNEL (current) ',
  'Picked up bad habits from people in the server',
  'Used SAI for resumes or college applications',
  "Messed around with someone else's Alexa or Google home while on voice chat",
  'Tried to speak in voice chat but was muted the entire time',
  '"Been told by Joe Abarca: ""ur mums got no teef"""',
  'Been annoyed by a user who keeps hopping back and forth between voice chats',
  "Giggled at the previous question's number",
  'Talked to a mod in voice chat without releazing they were a mod',
  "I've contributed nothing original",
  'Would go on a date with someone from the server',
  'Held hands platonically/romantically/sexually with someone in SAI',
  'Brought up my astro sign in D&R',
  'Dogpiled someone',
  "Had to check myself to make sure people don't feel attacked / invalidated",
  'Caught an admin lurking (reaction/__ is typing..)',
  'Heard a Trisha storytime',
  'Made a post in a channel that was completely off topic from the current conversation',
  "Been DM'd by a Mod and started sweating only to find out I wasn't in trouble",
  'Been rejected by someone in SAI',
  'Walked away because conversation is too intense (too much going on)',
  'Never joined a voice chat... ever',
  'Been told by Trish that I have shit etiquette and I should fix that',
  '"I think mods have an ulterior motive, hmmmm...."',
  'Fell off the face of SAI because I got a bf/gf during my time in SAI',
  "Originally didn't want to join an Asian group because I have Asian trauma",
  "Can't read the vibe of the current chat and can't follow along",
  'Sat in a car for longer than needed because I was typing on Discord',
  '"When someone says something that\'s yikes and has a lot of unpacking to do, but I just :shockfrog:"',
  '"Said in voice chat: ""Huh? What did you say? Can you say that again? What? Huh?"""',
  'Posted something but deleted due to poor reaction and/or insecurity',
  'Hates welcoming people',
  'Actually reads #venting',
  'Had the audacity',
  "Reacted/RSVP'd to an event but did not show up",
  'Participated in holiday events like Secret Santa and Love Letters',
  'Was in SAI before SAI was a thing. #iykiy',
];

data.forEach((question) => {
  const li = document.createElement('li');
  let input = `
  <input type="checkbox"> ${question}</input>
  `;
  li.innerHTML = input;
  list.appendChild(li);
});

let result = 0;
let checklist = document.querySelectorAll('li input');

checklist.forEach((input) => {
  input.addEventListener('click', (e) => {
    const { checked } = e.target;
    checked ? result++ : result--;
    console.log(result);
  });
});

btn.addEventListener('click', () => {
  test.innerHTML = `<div id='finalScore'>
    <h1>Your Score is</h1>
    <h3 class="calc-score">${checklist.length - result}</h3>
    <button onclick="location.reload()"> Retake Test</button>
    </div>`;
});
