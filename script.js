/* =========================================================
   The 48 Laws of Power — Full Reference
   Each law carries its book-style breakdown:
   Transgression, Observance, Keys to Power, Image,
   Authority, Reversal.
   ========================================================= */

const LAWS = [
  {
    title: "Never Outshine the Master",
    transgression: "Being better than your master is dangerous. The courtiers of Louis XIV learned that those who outshone the King were stripped of favor and position. The courtesan who dresses better than the queen draws the queen's wrath; the minister who proves himself brighter than the ruler seals his own exile. Always make those above you feel comfortably superior. In your desire to impress, do not go too far in displaying your talents — you may outshine the one who controls your fate.",
    observance: "Galileo knew this law. When he sought the patronage of the powerful Medici family, he named the moons of Jupiter after them, making his powerful sponsors feel grand and immortal. He did not flaunt his intellect; he framed his discovery as a tribute to their glory. As a result, the Medici funded his work and protected him. He gained more by inflating their egos than by flaunting his own brilliance.",
    keys: [
      "Never let those above you feel insecure in their position.",
      "Frame your own achievements as supporting or extending their glory.",
      "Flatter superiors by making them the source of your success.",
      "Disguise your cleverness; let it leak out gradually, never at once.",
      "If you are the master's equal in talent, be their superior in deference."
    ],
    image: "Imagine a king surrounded by courtiers. The courtier who stands taller invites the king's blade. The crafty courtier makes the king look the tallest of all — and is rewarded for it.",
    authority: "\"Why should you be above the king? Make the king look taller than he is, and he will carry you to his heights.\"",
    reversal: "There are moments to outshine the master — when you are about to leave their domain, or when the master is already so secure and powerful that your brilliance cannot threaten them. A departing employee may burn bridges by flaunting; but a new arrival in a strange land far from the master's eye may safely let brilliance show."
  },
  {
    title: "Never Put Too Much Trust in Friends, Learn How to Use Enemies",
    transgression: "Friends are often driven by envy and can betray you more readily than foes, precisely because they know your weaknesses. The artist who trusts a friend to guard his secrets often finds them exposed. Friends easily become resentful of your success and will quietly undermine you, while an enemy, having nothing to lose, can be bought or turned.",
    observance: "The great monarchs of the Renaissance understood this. Cosimo de' Medici trusted bankers and allies, but he also kept his enemies close, using them to balance his friends. When a friend grew too powerful or envious, he turned to a former enemy, offering reconciliation in exchange for loyalty. He kept every person — friend and foe — dependent on his favor.",
    keys: [
      "Hire a former enemy — they will work harder to prove their loyalty.",
      "Never let a friend become complacent; keep them uncertain of your favor.",
      "Use friends for counsel, but verify their loyalty before trusting secrets.",
      "Enemies, properly managed, become your most devoted followers.",
      "Distant the friend who is too eager; he wants what you have."
    ],
    image: "A sword is safest in the hand of a potential enemy turned ally, for he knows the cost of treachery. A friend's blade is hidden behind a smile.",
    authority: "\"There is no worse misfortune than a friend who knows your weakness and wishes you ill.\"",
    reversal: "Do not follow this law where reputation for loyalty matters. A man known for abandoning friends will find none willing to risk themselves for him. Sometimes keeping friends is the greater power, for loyalty is currency that compounds."
  },
  {
    title: "Conceal Your Intentions",
    transgression: "When you reveal your plans, people can ready themselves against you. The general who broadcasts his next move finds his army ambushed. The businessman who announces his new venture finds rivals have already copied it. Openness makes you predictable and weak.",
    observance: "The great strategists move in shadow. Sun Tzu taught that all warfare is based on deception. The fox who appears to flee actually leads the hunter into the thicket. By misleading others about your true goals, you keep them off balance and unable to counter you.",
    keys: [
      "Use a visible but false goal to distract from your real one.",
      "Speak in vague, harmless terms about your true intentions.",
      "Let your actions be unpredictable, masking the pattern.",
      "Create a smokescreen of friendliness, trivia, or busywork.",
      "The more hidden your purpose, the more feared you are."
    ],
    image: "A magician never reveals the mechanism. The audience watches the wrong hand while the trick is completed in the other. So too the cunning operator — all eyes on the decoy while the real blow lands.",
    authority: "\"Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.\"",
    reversal: "When you are already strong and secure, a controlled display of openness can disarm others and build trust. And when openness will win you allies who share your cause, concealment may cost you their support."
  },
  {
    title: "Always Say Less Than Necessary",
    transgression: "The more you say, the more likely you are to say something foolish. Talkative people leak their intentions, reveal their ignorance, and invite attack. The powerful speak little; their silence makes others work to fill the void and reveal themselves.",
    observance: "The great powers of the court spoke sparingly. When the king asked a question, the wise minister answered in a few guarded words, forcing others to elaborate and expose themselves. Silence unnerves; it makes the other person feel they must prove themselves, and in doing so they give away their hand.",
    keys: [
      "Let the other person speak first; they will reveal their position.",
      "Brevity signals confidence; verbosity signals insecurity.",
      "An ambiguous, short answer keeps your opponent guessing.",
      "Do not explain yourself — explanations invite argument.",
      "Once you have said enough, stop. Nothing more."
    ],
    image: "A locked treasury is never empty and never robbed. The silent man is a locked treasury — no one knows his worth or his weakness, and all must treat him with respect.",
    authority: "\"Speech is silver, silence is golden. The powerful speak in gold.\"",
    reversal: "In times of great emotion or crisis, silence can be mistaken for indifference or weakness. There are moments when words are needed to rally, comfort, or clarify. Speak powerfully when the moment demands it — but let the words be few and chosen."
  },
  {
    title: "So Much Depends on Reputation — Guard It with Your Life",
    transgression: "A tarnished reputation is a house with crumbling foundations. The moment enemies can portray you as dishonest or weak, every move you make is suspect. The courtier who loses his reputation for wit or honor finds every word mocked and every promise doubted.",
    observance: "The most feared men in history built a single, unassailable reputation. Alexander the Great was known for invincibility; his reputation alone made armies surrender before a single sword was drawn. Guard your reputation with ferocity, and let others speak for you when you cannot speak for yourself.",
    keys: [
      "Build your reputation on a single, powerful trait — then let it grow.",
      "Destroy slander at its source, quickly and decisively.",
      "Let your reputation precede you; it does the work of a thousand soldiers.",
      "Never appear desperate to defend yourself — strike with calm certainty.",
      "Associate with those who enhance your name and avoid those who taint it."
    ],
    image: "A reputation is a fortress built over years that can be destroyed in a single night of carelessness. The wise guard the fortress walls with their lives, for without them they are naked before the world.",
    authority: "\"The reputation of a man is like his shadow — it sometimes goes before him, and sometimes follows, but it is always his.\"",
    reversal: "When you are already so powerful that reputation can take no further damage, or when you are deliberately building a new identity, a dent in your old reputation can free you from the past."
  },
  {
    title: "Court Attention at All Costs",
    transgression: "To be ignored is to be nothing. In a world of noise, the unseen are forgotten. The genius who hides in a village is unknown; the mediocrity who courts attention becomes famous. Never be boring, for boredom is the death of power.",
    observance: "P.T. Barnum understood this better than anyone. He understood that even bad publicity beats no publicity. He staged outrageous spectacles that made people talk, knowing that an audience that is talking about you — even angrily — is an audience that remembers you. Attention is the currency of influence.",
    keys: [
      "Better to be slandered than ignored — controversy keeps you visible.",
      "Create a memorable image, a distinctive style, a signature.",
      "Be out of the ordinary; the eccentric are remembered, the dull are erased.",
      "Use spectacle and drama to seize the crowd's imagination.",
      "The moment you are forgotten, you are defenseless."
    ],
    image: "Two performers on a stage: one is flawless and forgettable, the other is flawed and outrageous. The crowd talks about the outrageous one for days. Attention is power; the crowd's eye is the only throne that matters.",
    authority: "\"There is a kind of elevation which does not depend on fortune; it is a certain air which distinguishes us, and seems to destine us for great things.\"",
    reversal: "When you are already in the spotlight and need to consolidate power, too much attention can make you a target. Sometimes the smartest move is to step back and let the glare fall elsewhere while you work quietly."
  },
  {
    title: "Get Others to Do the Work for You, but Always Take the Credit",
    transgression: "Doing all the labor yourself wastes your energy and makes you easy to replace. The leader who is indispensable because he does everything creates a bottleneck and a target. The clever operator uses the talents of others while taking the credit — for genius is always credited.",
    observance: "The greatest rulers and innovators understood that their genius lay in orchestration, not execution. They found talented people, motivated them, and claimed the glory of the result. The credit, once securely theirs, built a reputation that attracted even more talent.",
    keys: [
      "Use the knowledge and labor of others to advance your cause.",
      "Never do yourself what a subordinate can do — delegate.",
      "Take the credit wisely; acknowledge enough to keep the worker loyal.",
      "Keep the source of your success slightly obscured.",
      "Your time is precious — spend it only on what only you can do."
    ],
    image: "A master puppeteer sits hidden above the stage, moving a hundred strings. The crowd applauds the beautiful puppet, but the clever ones know the puppeteer holds the power. Be the puppeteer, not the puppet.",
    authority: "\"The creator of the work is the one who conceives it, not the hands that build it.\"",
    reversal: "When credit-taking breeds resentment and the workers begin to rebel, share the credit generously. And when the task is dangerous or the outcome uncertain, let others take the credit — and the blame."
  },
  {
    title: "Make Other People Come to You — Use Bait if Necessary",
    transgression: "When you rush to the other person, you lose control of the timing and the terms. The pursuer is always at a disadvantage. The one who makes others come to him dictates the ground and the hour of the encounter.",
    observance: "The great seducers and negotiators lure the other to their own territory, where they are strongest. By holding back and creating desire, they make the other person approach — desperate and eager. The bait is the promise of something they want; the trap is your control of the conditions.",
    keys: [
      "Master the art of the bait — make the other person want to come to you.",
      "Never act desperate; the one who seems eager has already lost.",
      "Set the terms: the time, the place, the agenda.",
      "Make them feel they are choosing to come, not being forced.",
      "When you control the ground, you control the outcome."
    ],
    image: "A fisherman does not chase the fish. He casts his line and waits, letting the fish swim to the hook. The patient fisherman catches more than the one who churns the water.",
    authority: "\"He who controls the pace and the place of the meeting controls its outcome.\"",
    reversal: "When you are far weaker and time is against you, you may have no choice but to go to them. And sometimes pursuing directly shows courage and decisiveness that wins the day."
  },
  {
    title: "Win Through Your Actions, Never Through Argument",
    transgression: "Arguments are lost wars. When you argue, you give the other person's ego a stake in being right, and even if you win the argument you have made an enemy. People believe what they see, not what they are told.",
    observance: "The most convincing demonstration is the silent one. Show through your results what words cannot prove. The leader who simply succeeds, without defending himself, is followed without question. Actions are irrefutable; arguments are endlessly contested.",
    keys: [
      "Demonstrate, don't declare — let results speak for you.",
      "If you must prove a point, do it through a subtle demonstration.",
      "Give people a tangible experience of your value.",
      "Never get drawn into a debate you cannot win by action.",
      "The proof of your worth is your outcome, not your rhetoric."
    ],
    image: "Two men argue whether the sword is sharp. The wise one does not argue; he cuts a rope in two. The crowd sees the result and knows. Demonstration is worth a thousand arguments.",
    authority: "\"A man convinced against his will is of the same opinion still. Show him, and he will see.\"",
    reversal: "When logic genuinely favors you and the audience is rational and open, a well-reasoned argument — kept brief and free of ego — can sway minds that action alone cannot."
  },
  {
    title: "Infection: Avoid the Unhappy and Unlucky",
    transgression: "Misery loves company, and the unlucky will drag you down with them. The unhappy are emotional vampires who infect you with their gloom, and their misfortunes have a way of spreading. Associating with the chronic loser invites the same fate.",
    observance: "The powerful are careful about whom they surround themselves with. They avoid those who are perpetually in crisis, and they seek out the fortunate and the optimistic. Luck, like illness, is contagious — attach yourself to the fortunate and let their good fortune lift you.",
    keys: [
      "Avoid those who are drowning in their own misfortune.",
      "Surround yourself with the optimistic, the successful, the lucky.",
      "The emotional state of your circle shapes your own.",
      "Do not become anyone's emotional crutch — it drains you.",
      "Choose companions who raise you, not those who pull you under."
    ],
    image: "A healthy man is brought into a sickroom and leaves with the fever. Moods and fortunes flow like contagion. Guard your health by guarding your company.",
    authority: "\"The disease of the unhappy is catching; keep your distance from the sickened soul.\"",
    reversal: "There are times when the miserable need your help, and helping them can build fierce loyalty. And sometimes the 'unlucky' are merely misunderstood — their apparent misfortune is a test of your discernment."
  },
  {
    title: "Learn to Keep People Dependent on You",
    transgression: "The moment people believe they can do without you, your power vanishes. The ally who thinks he no longer needs you becomes a rival. To maintain power, you must make others dependent on your skills and resources.",
    observance: "The old masters of the guild kept their secrets and their essential skills, so that apprentices remained dependent for years. The indispensable man is the safest man. By making yourself the only source of something vital, you make yourself impossible to do without.",
    keys: [
      "Make yourself the sole source of a skill, resource, or knowledge.",
      "Never fully teach everything you know — keep a reserve.",
      "Let others feel that your departure would be a catastrophe.",
      "Reveal your usefulness gradually, always holding some back.",
      "Dependency breeds loyalty, for dependence is a kind of debt."
    ],
    image: "An artisan who is the only one who can mend the king's machines is never threatened, never replaced. His value is his necessity. Be the irreplaceable one.",
    authority: "\"The surest way to be needed is to be the only one who can do what you do.\"",
    reversal: "When the dependency becomes too obvious and allies grow resentful, you become a target. Sometimes you must make others independent enough to be grateful, without becoming so dependent that they hate you."
  },
  {
    title: "Use Selective Honesty and Generosity to Disarm Your Victim",
    transgression: "Everyone expects deceit. When you are honest and generous at the right moment, you disarm suspicion entirely. A single act of honesty buys trust that you can later exploit. The sucker's own greed and suspicion are the bait.",
    observance: "Confidence artists and great negotiators know that a well-timed concession or a genuine-seeming act of honesty lulls the mark into complacency. Give before you take; the gift disarms, and the target lowers his guard, believing you to be honorable.",
    keys: [
      "A single honest gesture can buy a reputation for honesty.",
      "Give a gift or a concession before you ask for something.",
      "Disarm suspicion with selective, strategic candor.",
      "Let your generosity be visible, your exploitation hidden.",
      "The moment they trust you, your advantage is secured."
    ],
    image: "A hunter spreads seed on the ground to lure the bird within reach. The bird, delighted by the free meal, forgets the net. The seed is the generosity; the net is the power.",
    authority: "\"The one who gives freely before asking binds the other to repay.\"",
    reversal: "When you are dealing with those who see through generosity as a trick, honesty becomes a liability. And when your reputation is already beyond repair, strategic generosity may be wasted."
  },
  {
    title: "When Asking for Help, Appeal to People's Self-Interest, Never to Their Mercy or Gratitude",
    transgression: "Appealing to mercy or gratitude is a weak hand. People act for their own benefit, not out of pity or remembered favors. The one who begs for help is met with indifference; the one who shows how helping him profits the other is met with eagerness.",
    observance: "The great borrowers and negotiators frame every request around the other person's benefit. They show how the help returns value to the giver. Never remind someone of past favors; show them the future reward. Self-interest is the most reliable lever.",
    keys: [
      "Frame your request so the other person clearly benefits.",
      "Never sound desperate or entitled to help.",
      "Show the giver what they will gain, not what you need.",
      "Avoid appeals to past kindness or shared history.",
      "Make the transaction feel like an opportunity, not a burden."
    ],
    image: "Two men ask a merchant for a horse. The first begs out of need; the merchant shrugs. The second offers a share of the profit; the merchant hands over the reins. Self-interest opens what mercy would not.",
    authority: "\"Speak to a man's interest, and he will move mountains; speak to his mercy, and he will not move a foot.\"",
    reversal: "In matters of family, friendship, and genuine community, appealing to loyalty and shared bonds can be more powerful than cold self-interest. Know when a transaction is the wrong frame."
  },
  {
    title: "Pose as a Friend, Work as a Spy",
    transgression: "Information is the most valuable currency. The friend who is also a spy gains access to secrets no enemy could discover. By posing as a confidant, you learn the weaknesses, plans, and desires of others — and hold them at your mercy.",
    observance: "The great courtiers were masters of this art. They gathered intelligence through friendship, listening more than speaking, and stored every confidence for the right moment. The powerful are those who know the secrets of others.",
    keys: [
      "In a new environment, gather information freely before acting.",
      "Listen more than you talk; people reveal themselves to the attentive.",
      "Learn the weaknesses and vices of those around you.",
      "Keep a store of secrets, to be used or held as leverage.",
      "Never reveal what you know until it advances you."
    ],
    image: "A keyhole is unnoticed by the guest who is too busy talking. The sharp-eyed guest sees through the keyhole what the host intended to hide. Knowledge is the invisible crown.",
    authority: "\"The ears of the wise are worth more than the mouths of the many.\"",
    reversal: "When you are surrounded by others who also spy, your espionage will be discovered and feared. And when trust is the foundation of your genuine friendships, betraying it destroys more than you gain."
  },
  {
    title: "Crush Your Enemy Totally",
    transgression: "If you leave an enemy alive, they will plot revenge and return when you are weak. Half-measures are worse than none. The wounded enemy is the most dangerous; he has nothing to lose. Crush him completely, or he will destroy you.",
    observance: "The decisive conquerors understood this. When they defeated an enemy, they ensured there was no possibility of recovery or rebellion. They destroyed the enemy's resources, alliances, and hope. A clean, total victory is safer than a lingering, half-won war.",
    keys: [
      "When you have the upper hand, press your advantage to the end.",
      "Do not be swayed by shows of remorse or repentance.",
      "Leave no avenue for the enemy to regroup or take revenge.",
      "Total victory, though harsh, prevents future wars.",
      "A patched-up peace is a renewed war waiting to happen."
    ],
    image: "A weed pulled from the ground with its root intact is gone forever. A weed cut at the stem regrows quickly. To be safe, pull out the root — crush the enemy entirely.",
    authority: "\"The snake that is not crushed will strike again from the shadows.\"",
    reversal: "When victory would be too costly or would turn allies against you, a strategic mercy can be wiser. And when the enemy is too powerful to destroy, a negotiated peace may preserve your strength."
  },
  {
    title: "Use Absence to Increase Respect and Honor",
    transgression: "Too much presence breeds contempt. The more they see of you, the more your flaws become familiar and your value decreases. Absence renews their desire and heightens your worth, as distance makes the heart grow fonder and the reputation grow grander.",
    observance: "The powerful understand the art of scarcity. By withdrawing at the height of their influence, they create longing and speculation. The absent leader is magnified in the imagination of others; his return is welcomed with fresh enthusiasm and respect.",
    keys: [
      "Leave at the peak of your success, before you become ordinary.",
      "Create value through scarcity — be seen less, desired more.",
      "Withdraw, and let absence make others come to you.",
      "Return refreshed, with something new to offer.",
      "Too much familiarity breeds disrespect; preserve the mystery."
    ],
    image: "A portrait of an absent ruler is admired and honored; the living ruler, always present, is taken for granted. Absence gilds the frame. Step back, and they will value you more.",
    authority: "\"Familiarity breeds contempt; absence renews desire.\"",
    reversal: "When you are building a new relationship or a new project, absence may be mistaken for disinterest. In the early stages of any endeavor, presence and consistency build the trust that absence alone cannot."
  },
  {
    title: "Keep Others in Suspended Terror: Cultivate an Air of Unpredictability",
    transgression: "Predictable people are easily controlled. When others can anticipate your moves, they can prepare against you. By being unpredictable, you keep them off balance, uncertain, and in a state of anxious anticipation that gives you the upper hand.",
    observance: "The most formidable leaders are those who cannot be read. They shift moods, plans, and responses unexpectedly, so that those around them never dare to become complacent. This air of unpredictability generates a reverent fear that ensures obedience.",
    keys: [
      "Vary your behavior and routines so patterns are hard to read.",
      "Occasionally do the unexpected to keep others guessing.",
      "Let your moods be inscrutable; do not tip your hand.",
      "Keep subordinates slightly anxious about your response.",
      "Unpredictability makes you impossible to control or trap."
    ],
    image: "A chess player who always plays the same opening is beaten easily. The player who varies his attacks, who is never consistent, keeps his opponent in constant fear and confusion. Be the unpredictable player.",
    authority: "\"That which is unpredictable cannot be prepared against; it rules by uncertainty.\"",
    reversal: "When you are leading people who need stability and reassurance, chronic unpredictability breeds anxiety and revolt. Consistency is power when the situation demands trust and calm."
  },
  {
    title: "Do Not Build Fortresses to Protect Yourself — Isolation Is Dangerous",
    transgression: "The fortress that protects you also imprisons you. Cut off from information and allies, you become blind and weak. The isolated ruler is betrayed by those he trusted, for he has no sources of truth and no network of support.",
    observance: "Real power comes from engagement, not withdrawal. The wise leader stays in the flow of information, connects with many, and is never dependent on a single source. Connection is the true fortress; isolation is the open grave.",
    keys: [
      "Stay connected to the world and to a wide network of sources.",
      "Do not rely on a single ally or a single channel of information.",
      "Isolation breeds misinformation and vulnerability.",
      "Engage with people at all levels to keep your finger on the pulse.",
      "The fortress of connections is stronger than walls of stone."
    ],
    image: "A king in a tower sees nothing but his own courtyards; his enemies approach unseen. A king among his people hears every rumor and sees every threat. Stay among the people to see the truth.",
    authority: "\"The man who builds walls around himself builds a prison, not a palace.\"",
    reversal: "During times of genuine danger or when you need deep focus, temporary retreat is wise. But it must be deliberate and brief, not a permanent wall between you and the world."
  },
  {
    title: "Know Who You're Dealing With — Do Not Offend the Wrong Person",
    transgression: "Before you act, you must know your opponent. The wrong assumption can be fatal. Offending a powerful or dangerous person, unaware of their reach, can destroy you. The world is full of hidden connections and covert allies.",
    observance: "The great operators study their counterparts carefully. They learn the background, alliances, and temper of those they deal with before committing to any move. Foreknowledge prevents fatal errors and reveals opportunities others miss.",
    keys: [
      "Research the background and alliances of those before you.",
      "Never assume a person is harmless based on appearance.",
      "Look for the hidden connections and secret patrons behind a rival.",
      "Deal with the powerful through intermediaries when risky.",
      "Knowing who you face is half the battle won."
    ],
    image: "A traveler pats a strange dog on the head and is bitten; a careful traveler studies the dog's temperament first. The one who knows the animal commands it; the one who guesses is bitten.",
    authority: "\"The first rule of engagement is to know the enemy's nature before you strike.\"",
    reversal: "When the situation demands speed and you must seize a fleeting opportunity, you may have to act on incomplete knowledge. But act with caution and keep an escape route."
  },
  {
    title: "Do Not Commit to Anyone",
    transgression: "The one who commits wholly to a single person or cause surrenders his freedom and invites dependence. When you commit, you can be taken for granted, and the one you serve may fall, dragging you down with him.",
    observance: "The wise courtier never pledges undivided loyalty. He maintains ties with many, keeping his options open. By refusing to commit, he remains courted by all sides and is never trapped by another's fate.",
    keys: [
      "Maintain alliances with many, devoted to none.",
      "Keep your options open until the moment of decision.",
      "Never let a single patron or cause own you.",
      "Stay desirable to all by belonging fully to none.",
      "The independent man is the most sought after."
    ],
    image: "A man who serves one master is a servant; a man who can serve any master is a king. Keep your loyalty fluid, and everyone will court your favor.",
    authority: "\"He who belongs to no faction is the master of all factions.\"",
    reversal: "When loyalty is the foundation of a relationship that matters more than power, or when your reputation for commitment is your greatest asset, then a chosen devotion is worth the cost."
  },
  {
    title: "Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark",
    transgression: "The clever hide their cleverness. If you appear smarter than the one you deal with, he becomes wary and defensive. But if you seem naive and foolish, your mark drops his guard and reveals his greed and intentions.",
    observance: "The great con artists and negotiators mastered the art of the fool. By appearing simple, they invited the mark to overreach, to reveal their avarice, and to underestimate them. The fool's mask is the safest disguise for the sharpest mind.",
    keys: [
      "Let others think they are smarter than you; they will underestimate you.",
      "Appear harmless and naive to lower their guard.",
      "The mark's greed will make him careless; let him dig his own hole.",
      "Never reveal your true intelligence until the trap is sprung.",
      "The fool's open face hides the fox's mind."
    ],
    image: "The fox plays dead before the hunter, and when the hunter lets his guard down, the fox is gone. Play the fool, and the clever will trip over their own cleverness.",
    authority: "\"No one is more dangerous than the fool who is not a fool.\"",
    reversal: "When you are dealing with people of genuine intelligence who would see through the act, genuine competence and directness command more respect than the mask of foolishness."
  },
  {
    title: "Use the Surrender Tactic: Transform Weakness into Power",
    transgression: "When you are weaker, resist not — surrender. The one who refuses to bend breaks; the one who yields survives to fight another day. Surrender disarms the opponent, who no longer sees you as a threat, and preserves your strength for a better moment.",
    observance: "The great military leaders have used feigned surrender to lull an enemy into complacency. By accepting a temporary humiliation, they gained time, learned the enemy's ways, and waited for the moment of weakness to strike. The apparent defeat was the seed of victory.",
    keys: [
      "When you are weak, do not waste your strength on futile resistance.",
      "Surrender to preserve your resources for a better fight.",
      "Use apparent defeat to lower the enemy's guard.",
      "Transform the humiliation of surrender into a lesson and a strategy.",
      "The one who yields can live to win another day."
    ],
    image: "A river bends around the mountain and still reaches the sea. Bend when you must, and you will survive to arrive where the rigid are broken.",
    authority: "\"The reed that bends survives the storm; the oak that resists is torn from the earth.\"",
    reversal: "When surrender would destroy your reputation so completely that you can never recover, or when the enemy would destroy you regardless, resistance is the only honor and the only hope."
  },
  {
    title: "Concentrate Your Forces",
    transgression: "The one who scatters his energy across many fronts is strong nowhere. The leader who pursues every opportunity at once wins none. The power of concentration is absolute: focus your resources on a single, decisive point and overwhelm it.",
    observance: "The greatest generals won by concentrating their forces at the enemy's weakest point, defeating them in detail. They ignored the temptation to fight everywhere and instead struck one crushing blow. The hidden reserve, the focused onslaught, wins the day.",
    keys: [
      "Focus your energy on a single goal until it is achieved.",
      "Do not divide your forces among too many ambitions.",
      "Strike the enemy's weak point with overwhelming strength.",
      "The concentrated blow is worth a hundred scattered ones.",
      "Be patient, gather your strength, then strike as one."
    ],
    image: "A magnifying glass focuses the sun's rays into a single burning point. Scattered light is warmth; focused light is fire. Concentrate and you can set the world alight.",
    authority: "\"The secret of victory lies in concentrating strength where the enemy is weak.\"",
    reversal: "When you face a force too powerful to defeat in a single blow, a war of attrition fought across many fronts can wear them down. But concentration remains the ideal whenever opportunity allows."
  },
  {
    title: "Play the Perfect Courtier",
    transgression: "The courtier is the master of subtle influence. He flatters without seeming to, he maneuvers without appearing to, and he makes himself indispensable while remaining modest. The one who masters the courtier's art rises where the blunt and direct fall.",
    observance: "The perfect courtier, like Castiglione's ideal, was graceful, charming, and seemingly effortless in his influence. He never boasted, never attacked directly, and never appeared ambitious. Through courtesy and timing, he made his will appear as the prince's own.",
    keys: [
      "Master the art of indirect persuasion and gentle flattery.",
      "Never appear ambitious, even as you advance.",
      "Be graceful and composed in every situation.",
      "Understand the moods and needs of those above you.",
      "The courtier's art is to be indispensable yet humble."
    ],
    image: "A lantern in a palace casts light without claiming to be the sun. The courtier illuminates the master's path without competing with his glow. Master the light, and the palace becomes yours.",
    authority: "\"The art of the courtier is to make the prince believe he rules, while the courtier steers.\"",
    reversal: "When the court is corrupt or the ruler is a fool, the courtier's courtesy becomes complicity. There are times when directness and honesty are the only honorable path."
  },
  {
    title: "Re-Create Yourself",
    transgression: "Do not accept the role that society has handed you. The person who is defined by the past is trapped by it. The master of power re-creates himself, crafting a new image, a new identity that commands respect and opens doors.",
    observance: "The great self-made figures in history deliberately shaped their own legends. They chose how they would be seen, and they played that role with total conviction until the world believed it. The self is a work of art, and the artist is the one who sculpts it.",
    keys: [
      "Do not accept the image others impose on you.",
      "Craft a persona that serves your goals and commands respect.",
      "Play your chosen role with total conviction.",
      "Your past need not define your future — reinvent yourself.",
      "The self-created person is the most powerful, for he owes nothing to fate."
    ],
    image: "The caterpillar is forgotten in the cocoon, and the butterfly is remembered. Do not cling to the old skin; outgrow it. Re-create yourself, and the world will see the new you.",
    authority: "\"Become the author of your own life, not the reader of one written by others.\"",
    reversal: "When a reputation for authenticity and consistency is your greatest asset, reckless reinvention can be seen as dishonesty. Re-create yourself with care, so the new self never contradicts the old truth of your character."
  },
  {
    title: "Keep Your Hands Clean",
    transgression: "The appearance of innocence is a shield. The ruler who is visibly cruel becomes a target; the one who is known for fairness is trusted and obeyed. Let others do the dirty work, and keep your own hands clean of blame.",
    observance: "The clever leaders used subordinates and intermediaries to carry out harsh decisions, so that the blame fell elsewhere while the credit for mercy and justice stayed with them. They remained above the fray, appearing noble even as their agents enforced their will.",
    keys: [
      "Use intermediaries and scapegoats for the harsh tasks.",
      "Keep your own record free of visible cruelty and error.",
      "Let the credit for good deeds be yours, the blame for bad be another's.",
      "Appear noble, fair, and above the dirty work.",
      "The clean hands are the ones that can rule without opposition."
    ],
    image: "The king's executioner does the king's work, and history remembers the king as merciful. Distance yourself from the blade, and the blood will not stain your name.",
    authority: "\"Let the sword hang by another's hand, that your own may remain clean and unsullied.\"",
    reversal: "When subordinates are so visibly carrying the blame that it weakens your command, or when the truth inevitably comes out, your clean hands become a lie that destroys trust. Take responsibility when it is genuinely yours."
  },
  {
    title: "Play on People's Need to Believe to Create a Cultlike Following",
    transgression: "People have a deep need to believe in something greater than themselves. The one who can satisfy this need — offering a cause, a vision, a promise — commands a devotion that reason can never match. The cult of personality is the strongest form of power.",
    observance: "The great leaders who forged nations and movements understood this hunger. They offered their followers meaning, a sense of purpose, and the promise of a better world. In return, they received fanatical loyalty and willing sacrifice.",
    keys: [
      "Offer people a cause greater than themselves to believe in.",
      "Give your vision simplicity, certainty, and emotional power.",
      "Make your followers feel they are part of something grand.",
      "Create rituals and symbols that bind your group together.",
      "The one who satisfies the need to believe commands the devotion of thousands."
    ],
    image: "A lighthouse in the dark offers a promise of safe harbor. The sailors who believe in it steer their whole lives toward its light. Give people a light to follow, and they will follow you anywhere.",
    authority: "\"The hungry for meaning will swallow whatever feeds them; feed them, and they are yours.\"",
    reversal: "When your following becomes so cultlike that it blinds you to reality and isolates you from the wider world, the devotion you built becomes a prison. True power requires clear eyes, not just adoring ones."
  },
  {
    title: "Enter Action with Boldness",
    transgression: "The bold are feared, the hesitant are ignored. When you act with hesitation, you signal doubt and invite attack. The bold stroke, launched with confidence, often succeeds on nerve alone. Seize the moment, and commit fully.",
    observance: "The great conquerors and reformers acted with a boldness that left their rivals reeling. They understood that hesitation loses half the battle, and that a confident, decisive move creates its own momentum. The bold do not stumble; they are believed.",
    keys: [
      "Act with confidence and commit fully to your course.",
      "Hesitation signals doubt and invites attack.",
      "The bold stroke often wins on audacity alone.",
      "Make your move decisively, before fear can take hold.",
      "The doubts you hide, others will follow; the courage you show, others will trust."
    ],
    image: "Two warriors face a chasm. The hesitant one peers and turns back; the bold one leaps and finds the other side. Boldness is not recklessness — it is the courage to leap when the path is uncertain.",
    authority: "\"Fortune favors the bold, but the timid starve on the crumbs of the brave.\"",
    reversal: "When the odds are truly insurmountable and recklessness would waste your only strength, discretion is the greater part of valor. Boldness must be paired with calculation, not blind impulse."
  },
  {
    title: "Plan All the Way to the End",
    transgression: "The one who plans only the first step is lost at the second. The consequences of a move ripple far beyond the immediate gain. The master of power plans several steps ahead, anticipating obstacles and preparing for the end before the beginning.",
    observance: "The greatest chess players and generals think several moves ahead. They do not act for the immediate gain but for the position it creates. By planning to the end, they avoid the traps that catch the shortsighted and they turn apparent setbacks into advantages.",
    keys: [
      "Think several steps ahead, not just one.",
      "Anticipate the consequences of your actions.",
      "Plan for the end state, and work backward.",
      "Do not be dazzled by the immediate gain.",
      "The master of power is the master of the long game."
    ],
    image: "A mason builds from the foundation upward, each stone placed for the wall that will bear the roof. The one who builds for the day only builds a pile. Plan to the roof, and your wall will stand.",
    authority: "\"Begin with the end in mind, and the intermediate steps will align themselves.\"",
    reversal: "When circumstances change so rapidly that long planning is impossible, you must adapt. But even improvising, the one who keeps the end in mind acts more wisely than the one who reacts blindly."
  },
  {
    title: "Make Your Accomplishments Seem Effortless",
    transgression: "Your work must appear effortless, even when it costs you blood and sweat. The one who visibly struggles reveals his limitations and invites contempt. Hide your effort, and your achievements will seem the product of natural genius.",
    observance: "The truly great performers make the most difficult feats seem easy. They rehearse until the effort vanishes, and the audience sees only grace. The appearance of effortlessness enhances the wonder and the power of the accomplishment.",
    keys: [
      "Practice until your difficult work appears easy.",
      "Hide your toil and struggle from the eyes of others.",
      "Do not reveal the labor behind your success.",
      "The appearance of ease elevates you to the realm of the extraordinary.",
      "Never let them see you sweat — the magic is in the seeming."
    ],
    image: "A swan glides across the water, serene and beautiful, while beneath the surface its legs paddle furiously. The world sees the glide, not the effort. Master the swan's art.",
    authority: "\"Greatness must seem the gift of nature, not the labor of the treadmill.\"",
    reversal: "When others are inspired by the story of your struggle, or when hiding your effort would make your success seem unearned or a fluke, a controlled sharing of the journey can build connection and trust."
  },
  {
    title: "Control the Options: Get Others to Play with the Cards You Deal",
    transgression: "The one who presents choices controls the game. By framing the options, you decide the outcome before the other person chooses. Offer the illusion of freedom while limiting the choices to those that serve you.",
    observance: "The great negotiators and politicians mastered the art of the forced choice. They presented their opponents with a set of options, all of which led to the negotiator's advantage. The other party felt they had chosen freely, never realizing the game was already rigged.",
    keys: [
      "Present the other person with carefully limited options.",
      "Make each option lead to your desired outcome.",
      "Let the other person feel they have chosen freely.",
      "The one who frames the choices controls the result.",
      "Offer the illusion of freedom; keep the real choice to yourself."
    ],
    image: "A bird in a cage with three open doors — but every door leads to another cage. The bird believes it can fly free, but the trapper has already decided where it will go. Control the doors, and you control the bird.",
    authority: "\"Show them a choice, and they will take it as their own; but you have chosen for them all along.\"",
    reversal: "When the other person is sharp enough to see the rigged game, the illusion collapses and breeds resentment. Genuine, open choice is sometimes the only way to secure real commitment."
  },
  {
    title: "Play to People's Fantasies",
    transgression: "The truth is often too harsh to be seductive. People are drawn to the fantasy of what they wish to be, not the reality of what they are. The one who offers an escape into a grander dream wins devotion; the one who offers only hard truth is rejected.",
    observance: "The great seducers and leaders painted alluring visions of a better life, a grander self, a golden future. They understood that people buy dreams, not realities. By playing to the fantasy, they gained influence that facts could never command.",
    keys: [
      "Offer people the fantasy of a grander, better self.",
      "Do not burden them with hard, unwelcome truths.",
      "Paint alluring visions of a golden future.",
      "People buy dreams, not realities — sell them the dream.",
      "The fantasy you offer is the hook that binds them to you."
    ],
    image: "A peddler sells a mirror that shows each buyer a glorious version of themselves. Everyone buys it, though none is what the mirror shows. Sell the flattering mirror, and the world will buy.",
    authority: "\"The crowd does not want the truth; it wants the dream that makes the truth bearable.\"",
    reversal: "When the fantasy is exposed and the dream collapses, the followers turn on the dream-peddler with fury. And in matters that require real decisions, the hard truth you withheld will eventually cost you everything."
  },
  {
    title: "Discover Each Man's Thumbscrew",
    transgression: "Everyone has a weakness, a secret desire, a hidden vulnerability. The one who discovers another's thumbscrew controls him. Find the weakness, and you hold the lever that moves the person whenever you wish.",
    observance: "The great manipulators were masters of observation. They watched for the small tells — the envy, the vanity, the secret hunger — and stored them away. Later, when they needed something, they turned the thumbscrew and the person complied.",
    keys: [
      "Study people closely for their hidden weaknesses and desires.",
      "The most common thumbscrews are vanity, greed, and insecurity.",
      "Find what no one else notices, and you hold a secret power.",
      "Do not reveal what you know until you need it.",
      "The one who knows another's weakness commands him."
    ],
    image: "A lock waits for its key. Find the right key — the secret desire, the hidden fear — and the most guarded door swings open. Every person is a lock seeking its key.",
    authority: "\"The safe of a man's soul is opened by the key of his secret vanity.\"",
    reversal: "Leaning too heavily on another's weakness makes you a tyrant they will eventually flee or destroy. And when the weakness you exploit is shared by you, your own thumbscrew is equally exposed."
  },
  {
    title: "Be Royal in Your Own Fashion: Act Like a King to Be Treated Like One",
    transgression: "The way you carry yourself determines how others treat you. The one who acts like a king is treated like a king; the one who grovels is treated like a servant. Command respect by the confidence of your bearing.",
    observance: "The ambitious who rose from nothing did so by acting as if they already belonged at the top. Their confidence, their manner, their refusal to accept a lesser role signaled to others that they were worthy of the highest treatment. The role was played until it became real.",
    keys: [
      "Carry yourself with the confidence of one who deserves respect.",
      "Do not grovel or accept a lesser role than you aim for.",
      "Your bearing tells others how to treat you.",
      "Act the part of the person you wish to become.",
      "The one who expects to be treated as a king often is."
    ],
    image: "Two men enter a room. One slouches and waits; the other stands tall and speaks with certainty. The crowd, without knowing why, turns to the second as the leader. Bearing is the unspoken crown.",
    authority: "\"Conduct yourself with such dignity that others cannot imagine you as anything but the king of your own court.\"",
    reversal: "When royal airs become arrogance and alienate the very people whose support you need, the crown becomes a wall. The king who forgets his subjects is soon without a throne."
  },
  {
    title: "Master the Art of Timing",
    transgression: "Never seem to be in a hurry. The one who is patient controls the pace, while the impatient reveal their desperation and lose their advantage. Time is a weapon; the master of timing strikes when it is right and waits when it is not.",
    observance: "The great leaders knew when to act and when to hold back. They let events ripen, waited for the opportune moment, and then moved with irresistible force. The impatient acted too soon and failed; the patient waited and won.",
    keys: [
      "Never appear hurried or desperate.",
      "Wait for the opportune moment before acting.",
      "Let events ripen; do not force them.",
      "The patient who waits for the right time wins the race.",
      "Time can be your ally or your enemy — master it."
    ],
    image: "A farmer who sows before the season loses the seed; the one who waits for the rains harvests in plenty. The timing of the action matters as much as the action itself.",
    authority: "\"The fruit falls when it is ripe; the hand that plucks too early holds only green bitterness.\"",
    reversal: "When hesitation lets a golden opportunity slip away, or when the situation is changing too fast for patience, decisiveness and speed are the greater virtues. Timing is balance, not constant delay."
  },
  {
    title: "Disdain Things You Cannot Have: Ignoring Them Is the Best Revenge",
    transgression: "The more you react to a provocation or a desire you cannot satisfy, the more power it has over you. The one who can ignore what he cannot have, and show contempt for what he cannot reach, appears superior and unassailable.",
    observance: "The wise understood that the best response to a slight or an impossible desire is studied indifference. By refusing to acknowledge the thing's importance, they denied it any power over them and preserved their dignity and composure.",
    keys: [
      "Show indifference to what you cannot have or achieve.",
      "Do not react to provocations; your reaction gives them power.",
      "Ignoring a problem can be the most devastating response of all.",
      "The one who cannot be provoked cannot be controlled.",
      "Contempt is a weapon — wield it with cold calm."
    ],
    image: "A dog barks at a passing lion; the lion does not even turn its head. The dog's fury means nothing to the lion, for the lion does not acknowledge the dog's power. So too the great ignore the small.",
    authority: "\"He who is above the petty cannot be stung by it; the proudest revenge is indifference.\"",
    reversal: "When the thing you ignore is a genuine threat that grows stronger in the dark, pretending indifference becomes dangerous folly. Sometimes the threat must be met head-on, not scorned."
  },
  {
    title: "Create Compelling Spectacles",
    transgression: "People are moved by images and spectacles more than by words and arguments. The one who creates a compelling visual, a dramatic gesture, a memorable image commands attention and emotion. The spectacle is the language of power.",
    observance: "The great rulers and propagandists understood that a grand spectacle — a procession, a monument, a ceremonial display — could shape the mood of a people more effectively than any decree. They used pomp and drama to awe and inspire, cementing their authority in the imagination.",
    keys: [
      "Use dramatic, visual gestures to command attention.",
      "Let your public actions be memorable and compelling.",
      "A spectacle can move people more than a thousand arguments.",
      "Create imagery that stays in the mind and heart.",
      "The grand gesture is the power of the visible."
    ],
    image: "A crowd forgets a speech within the hour but remembers a blazing display for years. The fire, the banner, the triumphant march — these are the images that shape devotion. Make your mark a spectacle.",
    authority: "\"The crowd is moved by the eye more than by the ear; give it a sight to be moved by.\"",
    reversal: "When spectacle becomes empty show and people sense the hollowness behind the grandeur, it breeds cynicism. Sustained substance must back the spectacle, or the curtain will fall."
  },
  {
    title: "Think as You Like but Behave Like Others",
    transgression: "Conformity is a shield. The one who flaunts his difference invites attack and suspicion. Keep your opinions and your originality to yourself, and behave in a way that blends with the crowd. Blend in to be left alone to think as you please.",
    observance: "The wise concealed their unconventional views behind a conventional manner. They appeared as everyone else, all the while thinking their own thoughts. This disguise protected them from persecution and let them operate freely beneath the surface.",
    keys: [
      "Do not flaunt beliefs that differ from the crowd.",
      "Behave conventionally, even if you think unconventionally.",
      "Blend in to be left alone to pursue your real work.",
      "The crowd attacks the different; hide your difference.",
      "Conformity of manner is the price of freedom of thought."
    ],
    image: "A soldier in a uniform disappears into the ranks; a soldier in bright colors is a target. Wear the uniform of the crowd, and you survive to think your own thoughts in safety.",
    authority: "\"The wise speak the language of the market, while their minds trade in a rarer currency.\"",
    reversal: "When conforming would require you to betray your principles or to be complicit in harm, or when your unique perspective is precisely your value, then the courage to stand apart is the greater power."
  },
  {
    title: "Stir Up Waters to Catch Fish",
    transgression: "When you create confusion and turmoil, people become emotional and reactive, and their true nature is revealed. In the chaos, you can observe, manipulate, and fish for the opportunities that peace hides. The one who stirs the waters controls the currents.",
    observance: "The clever operators used controlled chaos to their advantage. They created a distraction, provoked a reaction, and watched as their rivals revealed their hand. In the confusion, they maneuvered unseen and harvested the advantage.",
    keys: [
      "Create controlled turmoil to observe and manipulate others.",
      "In chaos, people reveal their true nature — watch closely.",
      "Use distraction to hide your real moves.",
      "The one who stirs the waters decides where the fish swim.",
      "Controlled aggression can unbalance a stronger opponent."
    ],
    image: "A fisherman stirs the muddy water, and the startled fish dart into his net. The calm surface hides nothing; the stirred water brings the catch. Stir when you need to move the hidden.",
    authority: "\"Disturb the calm, and the hidden come to the surface — then you may choose your prey.\"",
    reversal: "When you stir up waters you cannot control, the chaos turns on you. And when your reputation is built on stability and trust, constant turmoil undermines the very foundation of your power."
  },
  {
    title: "Despise the Free Lunch",
    transgression: "What is offered for free is never truly free — it carries a hidden cost or a hidden hook. The one who accepts the free lunch becomes beholden to the giver. Be wary of generosity, for it is often a masked demand.",
    observance: "The wise distrusted gifts and favors, suspecting the strings attached. They paid their own way or returned the favor, keeping their independence intact. The one who owes nothing to no one is the master of his own fate.",
    keys: [
      "Be wary of apparently free gifts and favors.",
      "The free lunch always carries a hidden cost.",
      "The one who accepts the gift becomes the giver's debtor.",
      "Pay your own way to preserve your independence.",
      "Generosity from the powerful is rarely disinterested."
    ],
    image: "A mousetrap offers the mouse a free meal — the mouse takes it and is caught. The free cheese is the price of the trap. Beware the generosity that springs a snare.",
    authority: "\"There is no such thing as a free lunch; the bill is always presented, in the end.\"",
    reversal: "When a genuine gift freely given, with no expectation of return, comes from a place of true friendship, refusing it can be an insult. Learn to tell the generous gift from the masked demand."
  },
  {
    title: "Avoid Stepping into a Great Man's Shoes",
    transgression: "The successor to a great man is always compared, and always found wanting. The one who follows a legend is crushed by the shadow. Do what the predecessor did not do, and make your own name rather than inherit theirs.",
    observance: "The clever successors understood that they could never be the beloved original. Instead, they carved their own path, built their own identity, and defined their own legacy. By refusing to imitate, they escaped the oppressive comparison.",
    keys: [
      "Do not try to fill the shoes of a great predecessor.",
      "Carve your own path and build your own identity.",
      "The comparison to a legend will crush you.",
      "Do what the predecessor did not do.",
      "Your own name, earned, is worth more than a borrowed one."
    ],
    image: "A son who tries to wear his father's crown is forever 'the son of the king.' The one who forges his own crown is 'the king.' Make your own crown, and the old one loses its power.",
    authority: "\"The measure of a man is not the shadow he steps into, but the light he casts himself.\"",
    reversal: "When the predecessor's legacy is so beloved that abandoning it would lose the support you need, you must honor it — while still finding ways to subtly establish your own distinct claim."
  },
  {
    title: "Strike the Shepherd and the Sheep Will Scatter",
    transgression: "People follow a leader, and to destroy a group, destroy its head. The one who removes the center of power leaves the followers without direction and easy to control. Strike the shepherd, and the flock disperses.",
    observance: "The strategists who understood group psychology struck at the leader first. When the leader fell, the followers lost heart and cohesion, and the whole movement crumbled. The single blow to the head accomplished what a thousand blows to the body could not.",
    keys: [
      "To undermine a group, target its leader.",
      "The head is the source of the group's direction and spirit.",
      "Remove the leader, and the followers scatter.",
      "Strike the source, not the symptoms.",
      "The one blow to the head is worth a thousand to the body."
    ],
    image: "A flock of sheep follows the shepherd without thought. When the shepherd is taken, the sheep mill about, leaderless and lost. Remove the shepherd, and the flock is yours.",
    authority: "\"Kill the general, and the army surrenders; take the head, and the body falls.\"",
    reversal: "When the group is so devoted or so organizationally diffuse that it survives the loss of its leader, or when the leader is merely a figurehead, the strike fails. Sometimes the followers themselves are the true enemy."
  },
  {
    title: "Work on the Hearts and Minds of Others",
    transgression: "Force compels obedience but breeds resistance and resentment. The one who wins the hearts and minds of others gains their willing cooperation, far more durable than fear. Work on what people feel and believe, and they will follow you freely.",
    observance: "The great leaders who left a lasting mark won people's allegiance, not just their compliance. They spoke to their hopes, addressed their fears, and gave them reasons to believe. The followers who came willingly were far more devoted than those who came by force.",
    keys: [
      "Win people's allegiance through their hearts and minds.",
      "Force breeds resistance; persuasion builds loyalty.",
      "Speak to people's hopes and fears, not just their logic.",
      "Make people believe in your cause, not just obey it.",
      "The willing follower is worth a hundred compelled ones."
    ],
    image: "A rider who beats his horse gets a frightened, stumbling animal; the rider who earns the horse's trust gets speed and endurance. Rule through the heart, and your mount will run for you.",
    authority: "\"To rule the bodies of men is to rule the least of them; to rule their souls is to rule all.\"",
    reversal: "When you face a threat that cannot be persuaded and only force can stop it, or when time is too short for persuasion, decisive compulsion is sometimes the only choice. But use it knowing it buys obedience, not loyalty."
  },
  {
    title: "Disarm and Infuriate with the Mirror Effect",
    transgression: "When you mirror your enemy — reflecting his own actions, words, and tactics back at him — you neutralize him. The mocked, the imitated, the out-mirrored enemy is infuriated and disarmed. The mirror turns his own force against him.",
    observance: "The clever used the mirror to unsettle and defeat adversaries. By reflecting an attack back, they made the enemy's own aggression their undoing. The mirror does not fight; it returns, and the enemy is defeated by his own reflection.",
    keys: [
      "Reflect your enemy's tactics back at him.",
      "The mirror neutralizes the attack by returning it.",
      "Infuriate your adversary by mirroring his own behavior.",
      "Do not fight the force; reflect it.",
      "The mirror is a weapon that turns the enemy against himself."
    ],
    image: "A warrior charges a mirrored wall and crashes into his own reflection. He has struck only himself. Offer the enemy a mirror, and he will defeat himself.",
    authority: "\"Do not meet the blow with your own; hold up the mirror, and let the enemy strike his own face.\"",
    reversal: "When your opponent is wise to the mirror and chooses not to attack, the mirror is useless. And when imitation would make you lose your own identity, the mirror must be abandoned for genuine originality."
  },
  {
    title: "Preach the Need for Change, but Never Reform Too Much at Once",
    transgression: "People cling to the familiar, even when it harms them. The one who reforms too much at once stirs resistance and revolt. Preach the need for change, but introduce it slowly, so that people barely notice the transformation.",
    observance: "The wise reformers understood that sudden change breeds fear and backlash. They announced the necessity of change, then implemented it in small, gradual steps, letting people adapt and accept each stage. The revolution arrived, but so gently that no one rebelled.",
    keys: [
      "Preach the need for change to prepare people's minds.",
      "Introduce reform gradually, not all at once.",
      "Sudden change breeds fear and resistance.",
      "Let people adapt to each step before the next.",
      "The gentlest revolution is the one that succeeds."
    ],
    image: "A river that is redirected all at once floods the valley; a river redirected by a few stones each year flows gently into its new course. Change the course by degrees, and the flood never comes.",
    authority: "\"Reform by stealth; the wise physician treats the disease without alarming the patient.\"",
    reversal: "When the moment of crisis demands immediate and decisive action, or when the people are already crying out for radical change, incrementalism appears timid and is rejected. Sometimes the full break is the only way."
  },
  {
    title: "Never Appear Too Perfect",
    transgression: "Appearing flawless makes you seem inhuman, distant, and inspiring both envy and resentment. The one who is too perfect invites the destruction of the envious. Admit a small flaw, a harmless vice, and you become human and approachable.",
    observance: "The wise made themselves relatable by admitting minor faults. A small revealed weakness made them seem less threatening and more trustworthy, deflecting the envy that perfect beings attract. The flaw was a shield against the envy of the crowd.",
    keys: [
      "Occasionally reveal a harmless flaw or vice.",
      "Perfection inspires envy and resentment.",
      "A small admitted weakness makes you human and approachable.",
      "Do not be so perfect that others hate you for it.",
      "The flaw you reveal is the shield that protects you."
    ],
    image: "A statue is perfect and cold, admired but unloved. A living person has small imperfections that make them real and dear. Let yourself be a little imperfect, and you will be loved, not merely admired.",
    authority: "\"Perfect is the enemy of approachable; the gods are feared, the imperfect are followed.\"",
    reversal: "When you are in a position where your authority depends entirely on your perceived competence, revealing flaws can be dangerous. In such moments, the appearance of perfection is the very source of your power."
  },
  {
    title: "Do Not Go Past the Mark You Aimed For; In Victory, Learn When to Stop",
    transgression: "The one who overreaches in victory, driven by greed or pride, undoes all that he has gained. When you have won, stop. Excessive ambition invites the powerful to unite against you, and the victor who cannot stop becomes the next victim.",
    observance: "The generals and leaders who knew when to stop consolidated their gains and enjoyed lasting success. They understood that the moment of victory is the moment of greatest danger, for it inflames envy and fear. They made peace, secured their position, and stopped.",
    keys: [
      "When you have achieved your goal, stop.",
      "Overreaching in victory invites destruction.",
      "The moment of victory is the moment of greatest danger.",
      "Consolidate your gains; do not court envy.",
      "Knowing when to stop is the mark of the true master."
    ],
    image: "A gambler who wins and keeps playing loses all; the one who wins and walks away keeps his fortune. The mark of wisdom is knowing when the hand is won and the game should end.",
    authority: "\"In victory, the wise take the prize and leave; the foolish chase the next and lose the first.\"",
    reversal: "When the enemy is not truly defeated and will regroup if you stop, a complete victory is necessary. But stopping short of overreach should always be balanced against the risk of allowing the enemy to recover."
  },
  {
    title: "Assume Formlessness",
    transgression: "The rigid are broken; the formless survive. The one with a fixed strategy, a fixed identity, a fixed pattern can be anticipated and destroyed. Be fluid, adaptable, and shape-shifting, like water that takes the form of any container.",
    observance: "The greatest masters remained formless in their approach. They adapted to every situation, never committing to a single rigid form, and thus could never be grasped or trapped. The formless resists all attack, for there is nothing solid to strike.",
    keys: [
      "Be fluid and adaptable, not rigid and fixed.",
      "Do not commit to a single strategy or identity.",
      "The formless cannot be grasped or trapped.",
      "Adapt to every situation like water.",
      "The rigid break; the formless endure."
    ],
    image: "Water is soft, yet it carves the hardest stone. It takes the shape of any vessel, flows around any obstacle, and cannot be broken. Be water — formless, patient, and ultimately unstoppable.",
    authority: "\"The great river does not resist the mountain; it wears it down, one dance at a time.\"",
    reversal: "When your formlessness is mistaken for weakness or indecision, or when the situation demands a firm, clear stand, the appearance of solidity and commitment is itself a form of power. Formlessness, too, must be chosen, not habitual."
  }
];

/* =========================================================
   Atomic Habits — Key Concepts Reference
   Each concept carries its book-style breakdown:
   Breakdown, Principle, Key Steps, Image, Authority, Backfire.
   ========================================================= */

const HABITS = [
  {
    title: "The Power of Atomic Habits — 1% Better Every Day",
    breakdown: "People overestimate the importance of a single, dramatic decision and underestimate the value of making small, incremental improvements. A cyclist who improved by just 1% per race for years won the Tour de France, while competitors who chased dramatic leaps were left behind. The mistake is waiting for a huge breakthrough — the reality is that results are the lagging measure of accumulated habits.",
    principle: "Habits are the compound interest of self-improvement. Getting 1% better every day compounds into a 37-times improvement over a year, while getting 1% worse every day decays you almost to zero. Success is not the product of one heroic act but of the daily 1% — the product of hundreds of small choices that quietly tilt the odds in your favor.",
    keys: [
      "Improve by 1% each day rather than chasing a single breakthrough.",
      "Focus on the system, not the outcome — systems compound.",
      "Understand that results are a lagging measure of your habits.",
      "Small habits, repeated, become the architecture of your life.",
      "Your habits are the entry point, not the endpoint, of success."
    ],
    image: "A single penny doubled daily becomes a fortune; a single degree of heat added again and again boils the water. Nothing dramatic happens on day one, but the compounding is unstoppable.",
    authority: "\"You do not rise to the level of your goals; you fall to the level of your systems.\"",
    backfire: "The compounding model can seduce you into hoarding tiny habits while ignoring the few big levers that matter. Some choices are not 1% — they are 100% decisions that change the entire game. Apply the 1% rule to the right things."
  },
  {
    title: "Identity-Based Habits — Change Who You Are",
    breakdown: "Most people set outcome-based goals — 'I want to lose twenty pounds' — and fail because the goal leaves the underlying self untouched. When the goal is met or missed, the identity that produced the old behavior is still there, ready to snap back. Behavior change fails when it is aimed at what you have instead of who you are.",
    principle: "The most effective change is identity-based: every action you take is a vote for the type of person you wish to become. Instead of 'I want to run a marathon,' shift to 'I am a runner.' The behavior follows the identity, and each small action reinforces the belief, creating a self-fulfilling loop of change.",
    keys: [
      "Decide the type of person you want to be, not just the outcome you want.",
      "Prove that identity to yourself with small, repeated actions.",
      "Every action is a vote — cast votes for the identity you want.",
      "Reframe goals as identity statements: 'I am a writer,' not 'I write a book.'",
      "Let the identity precede the outcome, and the outcome will follow."
    ],
    image: "Two people quitting smoking are offered a cigarette. One says, 'No thanks, I'm trying to quit.' The other says, 'No thanks, I'm not a smoker.' The second has already won, because the identity changed before the behavior did.",
    authority: "\"Every action you take is a vote for the type of person you wish to become.\"",
    backfire: "Identity can become a cage. If you cling too tightly to a fixed identity — 'I've always been a night owl' — you block growth. The identity is a tool to serve your goals, not a prison to lock you into a single self."
  },
  {
    title: "The Habit Loop — Cue, Craving, Response, Reward",
    breakdown: "Habits are not random acts of willpower; they are a four-step neurological loop. The cue signals the brain to initiate a behavior, the craving provides the motivation, the response is the action itself, and the reward delivers the satisfaction that cements the loop. Understanding the loop is the first step to designing it.",
    principle: "Every habit follows the same architecture: cue → craving → response → reward. The cue triggers a craving, the craving drives a response, and the reward satisfies the craving and reinforces the cue. Once you can see this loop in your own behavior, you can manipulate each stage to build good habits and break bad ones.",
    keys: [
      "Identify the cue that triggers the behavior.",
      "Understand the craving that actually drives it.",
      "Choose a response that satisfies the craving healthfully.",
      "Attach a reward so the loop reinforces itself.",
      "Master the loop, and you master the habit."
    ],
    image: "A dog hears a bell, salivates, and rushes to the food bowl. The bell is the cue, the hunger the craving, the eating the response, the satisfaction the reward. Habits are just bells and rewards, endlessly ringing.",
    authority: "\"Every habit is a four-step process: cue, craving, response, reward.\"",
    backfire: "Seeing the loop can make you over-analyze every behavior and feel disempowered by your own wiring. The loop is a design tool, not a verdict — you are not your cue-triggered responses; you are the designer who can rewire them."
  },
  {
    title: "The Four Laws of Behavior Change — Make It Obvious",
    breakdown: "Many habits fail because they are invisible — buried in vagueness and ambiguity. 'I'll exercise more' has no cue, no trigger, no moment of activation. A habit without a clear cue is a habit that never fires, because the brain has nothing to grab onto when the moment arrives.",
    principle: "The first law of behavior change is to make it obvious. Implementation intentions — 'I will [BEHAVIOR] at [TIME] in [LOCATION]' — create a precise cue that the brain can recognize and act on. Habit stacking — 'After [CURRENT HABIT], I will [NEW HABIT]' — anchors the new behavior to an existing one, making the cue automatic.",
    keys: [
      "Use implementation intentions to make the cue precise.",
      "Design your environment so good cues are visible and bad ones are hidden.",
      "Stack new habits onto existing ones: after X, I will do Y.",
      "Put the cue in front of you — visibility triggers action.",
      "The obvious habit is the habit that actually happens."
    ],
    image: "A baker who leaves the flour on the counter bakes more than one who keeps it in the cupboard. The visible cue is the trigger. Make your good habits the thing you trip over, and make bad ones out of sight.",
    authority: "\"The two most common cues are time and location. Make them obvious.\"",
    backfire: "Making things obvious can backfire if your environment is cluttered with cues for the wrong habits. If the junk food is the most visible thing in the kitchen, you have made the bad habit obvious too. Design obscures the bad as deliberately as it reveals the good."
  },
  {
    title: "The Second Law — Make It Attractive",
    breakdown: "Habits that offer no immediate pleasure are abandoned, no matter how good they are long-term. The brain is wired for instant gratification, and a behavior that feels like a chore today will never survive against one that feels like a treat. The mistake is expecting discipline to outlast desire.",
    principle: "The second law is to make habits attractive. Temptation bundling pairs an action you want to do with an action you need to do — 'After I exercise, I get to listen to my favorite podcast.' Reframing the habit's identity — 'I get to read, not I have to read' — shifts the craving from obligation to opportunity.",
    keys: [
      "Pair a habit you need with one you enjoy — temptation bundling.",
      "Reframe the habit's language from 'have to' to 'get to.'",
      "Join a culture where the desired behavior is the norm.",
      "Make the habit a source of anticipation, not dread.",
      "Attach the craving to the reward, not the effort."
    ],
    image: "A child who must eat vegetables before dessert learns to love the plate that promises the treat. The dessert makes the vegetables bearable; over time, the pairing makes the vegetables themselves attractive. Bundle what you must do with what you love.",
    authority: "\"Temptation bundling: pair an action you want to do with an action you need to do.\"",
    backfire: "Over-bundling can make the habit depend on the reward, so the habit collapses when the reward is absent. And if the 'want' you bundle is addictive — like a screen — the habit becomes a craving you cannot control. Keep the pairing healthy."
  },
  {
    title: "The Third Law — Make It Easy",
    breakdown: "People overestimate effort and underestimate the power of reducing friction. A habit that requires five steps to start is a habit you will skip. The more energy a behavior demands, the less likely you are to do it. The mistake is trying to build heroic routines instead of easy ones.",
    principle: "The third law is to make it easy. The best way to start is to reduce the friction between you and the behavior. Set up your environment so the good habit is the path of least resistance — lay out your gym clothes the night before, keep the book on your pillow, delete the distracting app. 'Reduce the friction' beats 'increase the willpower' every time.",
    keys: [
      "Reduce the steps between you and the good habit.",
      "Prepare your environment to make the habit the easy choice.",
      "Design friction into bad habits — make them annoying to start.",
      "Start with a two-minute version of the habit to lower the barrier.",
      "The easy habit is the sustainable habit."
    ],
    image: "A river that flows downhill arrives at the sea; a river that must be hauled uphill never leaves the source. Reduce the effort, and the behavior flows. The friction is the hill — remove it and the habit runs to you.",
    authority: "\"The best way to break a bad habit is to make it impractical. The best way to build a good one is to make it easy.\"",
    backfire: "Making a habit too easy can trivialize it into tokenism — two minutes of a shallow version that never develops into the real skill. The easy start must be a gateway to the full behavior, not a permanent substitute for it."
  },
  {
    title: "The Fourth Law — Make It Satisfying",
    breakdown: "The brain repeats what feels good now and abandons what feels good only later. A habit that produces no immediate reward is a habit that dies, even if its long-term payoff is enormous. The mistake is relying on delayed gratification while the brain insists on immediate feedback.",
    principle: "The fourth law is to make it satisfying. Add an immediate reward to the end of the habit — a checkmark on a tracker, a small treat, a sense of visible progress. The reward signals to the brain that the behavior is worth repeating. Reinforcement that is immediate and pleasurable is the engine of habit formation.",
    keys: [
      "Attach an immediate, satisfying reward to the habit's completion.",
      "Use a tracking system — the checkmark itself is a reward.",
      "Make completion visible and gratifying.",
      "Pair the habit with a small, guilt-free celebration.",
      "Reinforce the loop now, so the future takes care of itself."
    ],
    image: "A rat presses a lever and receives a pellet instantly; it presses again and again. The immediate pellet teaches the behavior far faster than a month's supply delivered at the end of the year. Give the brain its pellet now, and it will repeat the lever.",
    authority: "\"What is immediately rewarded is repeated. What is immediately punished is avoided.\"",
    backfire: "The reward can become the point — you end up celebrating the checkmark while the actual behavior stagnates. And if the reward is external and addictive, the habit never becomes intrinsically valuable. The reward is a bridge, not a destination."
  },
  {
    title: "The Plateau of Latent Potential — Trust the Process",
    breakdown: "People quit because they expect linear progress and see none. They work for a month and feel unchanged, so they abandon the effort. The mistake is judging success by the visible present instead of trusting the invisible accumulation that is happening beneath the surface.",
    principle: "Breakthroughs are often the result of a long period of hidden accumulation. Like an ice cube that stays frozen through degrees of warming until it suddenly melts at 32°, or a bamboo that grows underground for years before shooting up, your results lag your effort. The plateau is not failure; it is the valley before the peak.",
    keys: [
      "Expect results to lag effort — the plateau is normal.",
      "Do not judge success by the first weeks or months.",
      "Trust that the accumulated habits are building toward a breakthrough.",
      "Stay consistent through the frustrating valley.",
      "The breakthrough is the harvest of a long, invisible planting."
    ],
    image: "An ice cube sits in a warm room. Degree after degree, nothing appears to change — then, at 32°, it melts suddenly. The change was happening the whole time, invisible until the threshold. Your habits are the degrees; the melt is the breakthrough.",
    authority: "\"Breakthroughs are the result of many small, invisible efforts, not one dramatic leap.\"",
    backfire: "Trusting the process can become patience without pressure — a comfortable excuse for stagnation. The latent potential only accumulates if the effort is real and consistent. Faith in the plateau must be paired with honest effort, not wishful waiting."
  },
  {
    title: "Never Miss Twice — The Rule of Consistency",
    breakdown: "Everyone misses a habit occasionally — a sick day, a lost week, a lapse. The fatal mistake is not the single miss but the second one. Missing once is an accident; missing twice is the start of a new, worse habit. Guilt over the first miss often triggers the second, and the streak dies.",
    principle: "The rule of never missing twice keeps the identity intact. After any lapse, get back on track immediately — do not let one miss become two, and two become a habit. The goal is not perfection but consistency, because perfection is impossible and consistency is what actually compounds.",
    keys: [
      "Accept that you will miss — perfection is not the goal.",
      "The rule: never miss twice in a row.",
      "After a lapse, return to the habit immediately, no matter how small.",
      "Do not let guilt over one miss justify a second.",
      "The comeback is more important than the streak."
    ],
    image: "A runner who stumbles and falls is not the one who loses the race — the one who stays down is. The stumble is inevitable; the lying down is a choice. Get up at once, and the stumble is just a step in the run.",
    authority: "\"The rule is simple: never miss twice.\"",
    backfire: "The rule assumes the habit is worth returning to. If you keep missing and forcing yourself back to a habit that is wrong for you, 'never miss twice' becomes martyrdom to a bad fit. The rule works for a good habit; for a wrong one, the honest move is to change the habit."
  },
  {
    title: "The Goldilocks Rule — Stay in the Zone of Difficulty",
    breakdown: "Habits that are too easy bore the brain into quitting, and habits that are too hard exhaust it into quitting. The mistake is either coasting on easy routines or swinging into heroic, unsustainable effort. Both fail because they leave the zone of peak motivation.",
    principle: "The Goldilocks Rule states that humans stay motivated when they work on tasks of just manageable difficulty — not too hard, not too easy. In this zone, you experience a flow state of maximum engagement. As you improve, you must raise the difficulty just enough to stay challenged, keeping the habit alive and growing.",
    keys: [
      "Work at the edge of your ability — just hard enough to engage.",
      "Too easy bores; too hard exhausts; find the middle.",
      "Raise the difficulty as you improve, keeping pace with your skill.",
      "The zone of manageable difficulty is the zone of flow.",
      "Constantly calibrate so the challenge never lapses into the dull."
    ],
    image: "A violinist who plays beginner songs day after day stalls; one who only attempts concertos breaks strings and gives up. The master practices just beyond her comfort — hard enough to demand attention, easy enough to succeed. That edge is where growth lives.",
    authority: "\"The Goldilocks Rule: humans experience peak motivation when working on tasks of just manageable difficulty.\"",
    backfire: "Constantly pushing the difficulty can become relentless optimization that turns passion into pressure. Not every moment needs to be a peak challenge — rest and recovery are part of the rhythm. The zone is a guide, not a mandate to be always straining."
  },
  {
    title: "Habit Tracking — The Measure That Multiplies",
    breakdown: "Habits that are measured are habits that improve; habits that are invisible are habits that wither. People who track their progress are more consistent simply because they see the evidence of their effort. The mistake is treating tracking as optional when it is the engine of accountability.",
    principle: "Habit tracking is a simple, powerful tool: record each instance of the behavior, and the visual record becomes both a reward (the checkmark feels good) and a cue (the streak begs to be continued). The tracker turns a vague intention into an observable chain you are reluctant to break.",
    keys: [
      "Record each completion — the checkmark is a reward.",
      "The tracker is a cue that reinforces the habit loop.",
      "A visible streak motivates you not to break the chain.",
      "Track the behavior, not the outcome, to keep it simple.",
      "Make the record easy to maintain, or it becomes a chore."
    ],
    image: "A wall covered in X's for each day of practice becomes a chain the owner refuses to break. 'Don't break the chain' is a command painted by your own progress. Each X is a small victory that begs for the next.",
    authority: "\"Don't break the chain. The tracker is the habit made visible.\"",
    backfire: "Tracking can become a trap — the day you miss, the broken chain feels like failure, and the guilt can kill the habit you were building. The tracker serves the habit; the habit does not serve the tracker. Pair it with 'never miss twice' or let the chain go."
  },
  {
    title: "Breaking Bad Habits — The Inversion of the Four Laws",
    breakdown: "Bad habits are built with the same architecture as good ones — cue, craving, response, reward — so they require the same precision to dismantle. The mistake is attacking a bad habit with pure willpower, which exhausts quickly, instead of redesigning the environment and the loop that feeds it.",
    principle: "To break a bad habit, invert the four laws: make it invisible (remove the cue), unattractive (reframe the craving), difficult (add friction), and unsatisfying (remove the reward or add a cost). Instead of fighting the behavior head-on, you dismantle the conditions that sustain it, letting the habit die of starvation.",
    keys: [
      "Make it invisible — remove the cue from your environment.",
      "Make it unattractive — reframe the craving and its promise.",
      "Make it difficult — add friction and steps between you and the habit.",
      "Make it unsatisfying — attach a cost or remove the reward.",
      "Invert the laws, and the bad habit loses its power."
    ],
    image: "A habit is a fire. Pouring willpower on it is like blowing on the flames — it briefly burns brighter. To end it, remove the fuel. Cut off the cue, and the fire has nothing to burn.",
    authority: "\"The inversion of the Four Laws: make it invisible, unattractive, difficult, and unsatisfying.\"",
    backfire: "Inverting the laws requires replacing the bad habit with a good one, or the void will be filled by something worse. Removing a coping habit without a healthier alternative leaves you exposed. Inversion is a strategy of replacement, not just removal."
  }
];

/* =========================================================
   The Laws of Human Nature — Full Reference
   Each law carries its book-style breakdown:
   Breakdown, Principle, Key Steps, Image, Authority, Backfire.
   ========================================================= */

const HUMAN_NATURE = [
  {
    title: "Master Your Emotional Self — The Law of Irrationality",
    breakdown: "People believe they are rational, yet they make decisions driven by hidden emotions — anxiety, fear, desire — that they rationalize after the fact. The angry man who sends a vicious email, the jealous peer who sabotages a colleague, the impulsive buyer — all feel justified in the moment, all are puppets of their unseen feelings. The unreasoning self is the source of most of our worst decisions and our greatest self-sabotage.",
    principle: "The rational mind is real but weak; the emotional mind is primal and powerful. To master your nature, you must not try to destroy your emotions but to become aware of them before they hijack you. By observing your emotional impulses as they arise, you create a pause between feeling and action. In that pause lies your freedom — the ability to choose a response instead of being compelled by a reaction.",
    keys: [
      "Recognize that most of your decisions are emotional, rationalized later.",
      "Identify your emotional triggers — the situations that make you react.",
      "Create a pause between the feeling and the action.",
      "Slow down: the most powerful response is often delayed.",
      "Observe your emotions as weather — felt, named, and allowed to pass."
    ],
    image: "A rider on an elephant: the elephant is the emotional mind, vast and powerful; the rider is reason, small and often helpless. The rider cannot fight the elephant — he must learn to guide it gently, understanding its moods, or be carried wherever it charges.",
    authority: "\"The emotions are the water, the water that feeds the roots of every decision.\"",
    backfire: "Relentless self-analysis can paralyze you into overthinking every move. The goal is not to eliminate emotion — that is impossible — but to harness it. Too much vigilance turns spontaneity and feeling into a controlled performance, and you lose the very warmth that makes you human."
  },
  {
    title: "Transform Self-Love into Empathy — The Law of Narcissism",
    breakdown: "Every human is deeply narcissistic, absorbed in their own world, their own suffering, their own desires. The problem is not narcissism itself but the inability to see beyond it. The person who is trapped in their own perspective misreads others, assumes the worst, and blunders through relationships, wondering why people grow distant.",
    principle: "Use your own self-absorption as a bridge to understand others. You know how much you care about your own interests and feelings — now extend that same assumption to everyone else. The empathetic person does not guess what others feel; they observe closely, listen actively, and assume that beneath the surface others are as self-involved as they are. This perspective is a superpower of influence and connection.",
    keys: [
      "Assume everyone is as self-absorbed as you are — and act accordingly.",
      "Turn attention outward: observe others' moods, needs, and desires.",
      "Listen actively; most people reveal themselves if you truly attend.",
      "Withhold judgment until you have seen the situation from their side.",
      "Empathy is the highest form of narcissism, redirected outward."
    ],
    image: "Two people stand back to back, each staring at a mirror. Both are convinced they see the whole world, but each sees only themselves. The empathetic person turns around, looks at the other, and sees a person as real and complex as themselves — the mirror exchanged for the direct gaze.",
    authority: "\"To know yourself, imagine how you appear to others; to know others, imagine yourself as them.\"",
    backfire: "Excessive empathy can leave you a sponge for others' emotions, drained by every sob story and unable to act. Not everyone deserves your trust, and some will exploit your openness. Empathy must be paired with discernment, not offered indiscriminately."
  },
  {
    title: "See Through People's Masks — The Law of Role-Playing",
    breakdown: "People present a carefully crafted mask to the world — the confident leader, the devoted friend, the humble assistant — while their true motives remain hidden. Those who take the mask at face value are endlessly manipulated. The persona is a performance designed to elicit a response, and the unwary are its audience.",
    principle: "Understand that everyone plays a role, and that the role is not the person. Learn to detect the tells — the gap between the words and the body, the mask that slips under stress, the flattery that carries a hidden demand. By seeing behind the mask, you free yourself from others' performances and can deal with the real person beneath, not the character they perform.",
    keys: [
      "Assume every person is playing a role for your benefit.",
      "Watch for the mask slipping under pressure or fatigue.",
      "Notice the gap between what people say and what their bodies show.",
      "Ask what the performance is trying to achieve from you.",
      "Behind every mask is a person with interests, fears, and desires."
    ],
    image: "A theater stage where the actors are convincing — until the drama of real life interrupts. The actor mid-scene, the mask momentarily forgotten, reveals panic or greed or kindness. The sharp observer watches for the moment the script breaks and the true actor appears.",
    authority: "\"All the world's a stage, and all the men and women merely players — with parts they did not choose.\"",
    backfire: "Seeing everyone as a performer can breed cynicism and paranoid distrust, pushing away genuine people. The mask is also a form of social grace. The goal is not to despise the performance but to understand it, and to know when the real person behind it is trustworthy."
  },
  {
    title: "Determine the Strength of People's Character — The Law of Compulsive Behavior",
    breakdown: "People are not defined by their words or their stated intentions but by their patterns of behavior, which are largely unconscious and compulsive. The same person who promises discipline repeatedly oversleeps; the one who claims loyalty betrays under pressure. Character is revealed not in the occasional act but in the repeating pattern.",
    principle: "Judge people by their actions over time, not their words in the moment. Look for the pattern that repeats under stress, the behavior that occurs when no one is watching, the response to setbacks and temptations. This pattern is the person's true character, and it tells you, far more reliably than any promise, how they will behave toward you.",
    keys: [
      "Ignore the words; study the repeated actions over time.",
      "Watch how people behave under stress, when the mask weakens.",
      "Notice how they treat those who can do nothing for them.",
      "The pattern that repeats is the character that governs.",
      "Trust the evidence of behavior, not the assurance of intention."
    ],
    image: "A river does not announce its course; it reveals it by carving the valley over years. A person's character is the same — not the boast on the bank, but the channel the water has worn through a thousand small decisions, flowing the same way every time the rains come.",
    authority: "\"The foolish believe the words; the wise read the pattern of the deeds.\"",
    backfire: "Judging strictly by past patterns can condemn people to a fixed identity and blind you to genuine growth. Character can change with effort and awareness. The pattern is a strong signal, but not a sentence — leave room for the rare, real transformation."
  },
  {
    title: "Become an Eloquent Speaker — The Law of Covetousness",
    breakdown: "People are not moved by logic or abstract truth; they are moved by desire. The speaker who appeals to what people already want — status, security, belonging, love — commands their attention and their will. The dry, factual speaker is forgotten; the one who speaks to the heart of desire is followed.",
    principle: "Eloquence is the art of speaking to people's deepest longings. To persuade, you must first understand what your audience covets, then frame your words so that your audience feels those desires are within reach. Use the language of sensation and emotion, tell stories that stir feeling, and make the listener feel that you understand them — and they will open to you.",
    keys: [
      "Speak to what people covet, not to cold logic.",
      "Use vivid, sensory language that stirs emotion.",
      "Tell stories; the concrete tale moves more than the abstract argument.",
      "Make the listener feel understood before you ask anything.",
      "Appeal to the shared desire that already lives in the room."
    ],
    image: "A merchant in a marketplace does not recite the weight of his wares; he whispers of the freedom, the glory, the comfort they will bring. The crowd presses forward, not for the goods, but for the promised feeling. The eloquent speaker is that merchant of desire.",
    authority: "\"The shortest path to a person's hand is the road that runs through their heart.\"",
    backfire: "Constant appeal to desire can become manipulation, and the audience eventually senses the flattery and turns cold. Words alone, without substance, wear thin. Eloquence must be backed by truth and genuine value, or it becomes the empty rhetoric of the con artist."
  },
  {
    title: "Elevate Your Perspective — The Law of Shortsightedness",
    breakdown: "Human beings are trapped in the present, overreacting to the immediate while blind to the long arc of events. The person who reacts to every daily provocation, who chases every short-term gain, who cannot see beyond the quarter, is at the mercy of circumstance. Emotion erupts; the larger pattern is ignored; disaster follows.",
    principle: "The mastery of the long view is a rare and decisive strength. Train yourself to step back from the immediate and consider the larger context — the years, the cycles, the slow forces that shape events. When you widen your perspective, short-term setbacks become minor, and opportunities others miss become visible. Look far, and you will see what the shortsighted cannot.",
    keys: [
      "Step back from the immediate and consider the longer arc.",
      "Ask not what feels right now, but what will matter in five years.",
      "See events as part of cycles, not isolated incidents.",
      "Ignore the daily noise that distracts the shortsighted.",
      "The long view turns obstacles into steps and losses into lessons."
    ],
    image: "Two climbers: one watches the ground beneath his feet and stumbles at every rock; the other looks to the summit and the route, and the rocks become a path. The one who sees the mountain reaches it; the one who stares at his feet circles the base.",
    authority: "\"The best way to predict the future is to see how far the present has already moved.\"",
    backfire: "An obsession with the grand long view can make you neglect the urgent present — the fires that must be put out now, the small duties that sustain daily life. The long view informs, but it must not detach you from the immediate work that carries you toward it."
  },
  {
    title: "Soften People's Resistance by Confirming Their Self-Opinion — The Law of Defensiveness",
    breakdown: "People are deeply defensive, sensitive to any threat to their self-image. When you criticize, contradict, or fail to validate how they see themselves, they dig in and resist your every point. The direct assault on a person's ego guarantees defeat, no matter how right you are.",
    principle: "Human beings are driven by a powerful need to feel validated and understood. To influence others, first confirm their self-opinion — let them feel appreciated for who they believe they are. Once their ego is soothed and their defenses lowered, they become receptive. You do not argue with them; you make them feel safe, and then they can hear you.",
    keys: [
      "Never attack a person's self-image directly.",
      "First validate what they believe about themselves.",
      "Lower defenses before you make any request or point.",
      "Frame your ideas as compatible with their self-opinion.",
      "The person who feels understood is the person who will listen."
    ],
    image: "A man guards a fortress gate, suspicious of every stranger. The visitor who shouts commands and criticisms only bolts the gate tighter. But the one who approaches with respect, who speaks of the fortress's strength, finds the gate opened — and the one who opened it now listens.",
    authority: "\"A person's ego is the gate to their mind; unlock it with respect, and wisdom can enter.\"",
    backfire: "Excessive flattery and validation can become obvious manipulation, and the sharp-minded grow disgusted by the pandering. Confirming self-opinion is a doorway, not a diet — too much of it breeds suspicion, and it must never require you to lie away a genuine problem."
  },
  {
    title: "Change Your Circumstances by Changing Your Attitude — The Law of Self-Sabotage",
    breakdown: "People are the architects of their own unhappiness without realizing it. The insecure person provokes the rejection they fear; the angry person creates the hostility they complain about; the envious person sours the success they claim to want. They believe their misery is imposed from outside, but it is generated from within.",
    principle: "Your attitude shapes your reality more than you know. The negative frame of mind — suspicion, resentment, pessimism — draws from the world exactly the response it expects. By consciously shifting your attitude to one of openness, gratitude, and constructive action, you alter the way others respond to you and the opportunities that come your way. Change the lens, and the picture changes.",
    keys: [
      "Examine how your own pattern may be creating your problems.",
      "Identify the self-fulfilling prophecy you run on autopilot.",
      "Shift your frame from victim to agent, from complaint to action.",
      "Attitude is a choice you can make anew each morning.",
      "Change the lens, and the world you see begins to change."
    ],
    image: "A room viewed through a grimy, cracked window looks bleak and gray; through a clean window, the same room is bright and warm. The room did not change — the glass did. Your attitude is the window through which you see your world and the world sees you.",
    authority: "\"We do not see things as they are; we see them as we are.\"",
    backfire: "Relentless positivity can become a denial of real problems and genuine pain, a saccharine gloss that invalidates true hardship. Some circumstances are genuinely harsh, and the honest response is grief or anger, not a forced smile. Attitude is a tool, not a lie to paper over injustice."
  },
  {
    title: "Confront Your Dark Side — The Law of Repression",
    breakdown: "Every person has a shadow — the traits, desires, and impulses they deny and repress. The person who refuses to admit their own anger, greed, or selfishness does not eliminate these forces; they project them onto others, seeing the sin in everyone else while remaining blind to it in themselves.",
    principle: "To know yourself fully, you must confront and accept your dark side. The traits you repress do not disappear; they leak out in destructive ways and distort your judgment of others. By acknowledging your shadow — your capacity for envy, cruelty, deceit — you reclaim command of it. You cannot be controlled by what you have consciously examined and accepted.",
    keys: [
      "Identify the traits in others that most enrage you — they are your own.",
      "Acknowledge your capacity for the very vices you condemn.",
      "Accept the shadow so it loses its covert power over you.",
      "Integrate your dark side into a fuller, more honest self.",
      "The person who knows their own darkness cannot be ambushed by it."
    ],
    image: "A house with a shadowed cellar. The owner refuses to enter it, and the darkness grows, spilling up the stairs in strange forms. When at last he descends with a lamp, he finds the cellar small and ordinary — and the phantoms that haunted the house were only the shadows of what he refused to see.",
    authority: "\"Until the unconscious is made conscious, it will direct your life, and you will call it fate.\"",
    backfire: "Dwelling too long on your dark side can become a morbid fixation, a self-indulgent guilt that paralyzes action. The shadow is to be accepted and integrated, not worshipped or rehearsed. Balance the darkness with the light of your strengths and your capacity for good."
  },
  {
    title: "Beware the Fragile Ego — The Law of Envy",
    breakdown: "Envy is the most corrosive of human emotions — a quiet, secret resentment of those who have what we want. It rarely announces itself; it disguises itself as criticism, cynicism, or unexplained hostility. The envious person, blind to their own feeling, subtly undermines those who outshine them.",
    principle: "Envy is a law of human nature, and you must manage it in two directions. Guard against rousing envy in others by downplaying your success and sharing credit. And recognize enviers in your midst — the ones who praise you too effusively, or subtly criticize your achievements — so you are not blindsided by their sabotage. Envy is best defused early, silently, and generously.",
    keys: [
      "Detect envy behind its masks: over-praise, faint criticism, gossip.",
      "Downplay your successes to avoid inflaming the envious.",
      "Share credit and offer help to defuse resentment.",
      "Never retaliate against an envier openly; it feeds the flame.",
      "The envious sabotage quietly — watch for the quiet ones."
    ],
    image: "Two farmers each have a harvest. The envious one cannot stand his neighbor's larger crop; he does not improve his own field but spends his nights poisoning the neighbor's. The envier's energy is spent destroying, never building — and his own field meanwhile lies unweeded.",
    authority: "\"Envy is the tax the ambitious pay for their success — and the poison the mediocre drink instead of water.\"",
    backfire: "Constant vigilance against envy can make you paranoid and small, holding back your shine to avoid the spotlight. Not everyone is envious, and acting from fear of envy can make you timid and self-effacing. Celebrate your wins; manage the envious, but do not live ruled by them."
  },
  {
    title: "Know Your Limits — The Law of Grandiosity",
    breakdown: "Grandiosity is the inflation of the self — the belief that you are special, destined for greatness beyond reality, exempt from the limits that bind others. People under the spell of grandiosity overreach, take reckless risks, ignore feedback, and crash with stunning regularity. The grandiosely self-confident are the easiest to flatter and the hardest to counsel.",
    principle: "Greatness is real, but it is built on a clear-eyed recognition of your actual power and limits. The truly confident person knows precisely what they can and cannot do, and so makes sound decisions and invites trust. Be ambitious, but ground your ambition in reality. The person who knows their limits is the one who can actually surpass them — step by step, not in one grand delusion.",
    keys: [
      "Distinguish healthy confidence from grandiose self-inflation.",
      "Seek honest feedback; the grandiose reject it as envy.",
      "Test your assumptions about your own brilliance against reality.",
      "Be ambitious in vision, but concrete and humble in execution.",
      "The one who knows their limits is the one who can transcend them."
    ],
    image: "A man builds a tower to touch the sky, each floor grander than the last, ignoring the cracking foundation. The humble builder widens his base, studies the soil, and his modest tower stands for centuries. The grand falls; the grounded endures.",
    authority: "\"The tallest towers are built by those who respect their foundations, not those who despise them.\"",
    backfire: "Knowing your limits can tip into self-limiting doubt, a humility that strangles ambition before it begins. The goal is not to shrink your dreams to fit your current limits but to expand your limits through honest effort. Do not let realism become a cage for your potential."
  },
  {
    title: "Reconnect to the Masculine or Feminine Within You — The Law of Gender Rigidity",
    breakdown: "People are pressured to conform to a rigid version of their gender — the stoic, unfeeling man; the soft, dependent woman. This pressure warps the personality, forcing people to repress half of their nature. The overmasculinized man cannot express vulnerability and becomes brittle; the overfeminized woman cannot assert herself and becomes a doormat.",
    principle: "Strength and adaptability come from integrating both the masculine and feminine sides of your nature, regardless of your sex. The masculine principle — aggression, decisiveness, focus — and the feminine principle — receptivity, empathy, cooperation — are both needed for wholeness. The person who can draw on both, as the situation demands, is far more powerful and resilient than the one trapped in a rigid role.",
    keys: [
      "Recognize the gender role you unconsciously perform.",
      "Develop the traits you have repressed as 'unbefitting' your sex.",
      "The man can learn receptivity; the woman can learn assertiveness.",
      "Adapt your mode to the situation, not to the script.",
      "Wholeness, not conformity, is the source of real power."
    ],
    image: "A single coin has two faces; neither is the 'true' coin without the other. So the complete person holds both the firm and the soft, the push and the pull, the sword and the embrace. The one who uses only one face is half a person, forever out of balance.",
    authority: "\"The wise are androgynous of spirit — firm as a mother's love can be, and gentle as a father's strength allows.\"",
    backfire: "Framing personality in terms of masculine and feminine can itself become a new rigidity, another set of boxes to fit. The true goal is flexibility and authenticity, not a balanced performance of two stereotypes. Use the framework as a tool, not a verdict on who you are."
  },
  {
    title: "Advance with a Sense of Purpose — The Law of Aimlessness",
    breakdown: "Most people drift through life, reacting to whatever happens, chasing pleasure and comfort, never committing to a deeper purpose. This aimlessness breeds anxiety, boredom, and a sense of being unfulfilled, and it makes people easy to manipulate — for they have no internal compass to guide them.",
    principle: "A sense of purpose — a mission larger than your immediate comfort — is the anchor that steadies the soul and directs the energy. When you commit to a purpose, the small annoyances of life shrink, the distractions lose their grip, and you move with a power that the aimless cannot match. Purpose turns days into momentum and obstacles into steps.",
    keys: [
      "Find a pursuit that engages you fully, beyond mere comfort.",
      "Commit to a mission larger than your immediate desires.",
      "Let the purpose guide your daily choices and focus.",
      "Purpose steels you against distraction and discouragement.",
      "The purposeful move with a force the aimless can only envy."
    ],
    image: "A ship with a clear destination sails steadily through storm and calm, its crew resolute. A ship without a port drifts with every current, at the mercy of every wind, going nowhere and tiring its crew in vain. The destination is the rudder that makes the voyage possible.",
    authority: "\"He who has a why to live for can bear almost any how.\"",
    backfire: "A rigid, single-minded purpose can become a fanaticism that blinds you to life's richness and to the needs of others, and that collapses when the purpose fails. Purpose should orient, not imprison — hold it with commitment, but hold it with the flexibility to adapt as you grow."
  },
  {
    title: "Resist the Downward Pull of the Group — The Law of Conformity",
    breakdown: "Human beings are herd animals, and the group exerts a powerful pull toward conformity. In a group, people lose their individual judgment, adopt the emotions of the crowd, and do things they would never do alone. The group lowers standards, suppresses dissent, and drags its members toward the lowest common denominator.",
    principle: "The group is a corrosive force on individual judgment, and the master of human nature learns to resist it. Stay aware of how the group is influencing you — the emotional contagion, the pressure to agree, the fear of standing out. Cultivate solitude and independent thought, and keep a part of yourself that the group cannot reach. You can be in the group without being of it.",
    keys: [
      "Notice how your opinions shift when you are in a group.",
      "Resist the emotional contagion of the crowd.",
      "Cultivate regular solitude to think independently.",
      "Dare to hold your own view in the face of the majority.",
      "The herd is a source of conformity — and the independent are its leaders."
    ],
    image: "A flock of sheep follows the bell, even over a cliff, because the one at the front is afraid to stop and the rest are afraid to leave it. The lone shepherd's dog, who thinks for itself, diverts the flock from the edge. Independent thought is the dog that saves the sheep.",
    authority: "\"The crowd is the mother of mediocrity; the individual is the father of the extraordinary.\"",
    backfire: "Rejecting the group entirely can turn you into a lonely contrarian, defiant for its own sake and cut off from the real benefits of community and belonging. Some conformity is the price of cooperation and connection. The goal is independent judgment, not reflexive rebellion."
  },
  {
    title: "Make Them Want to Follow You — The Law of Fickleness",
    breakdown: "People are fickle and easily bored, their loyalty fleeting. They tire of leaders who are predictable, who repeat themselves, who offer no drama or inspiration. The leader who is dull, distant, or erratic quickly loses the crowd, because people follow those who give them a compelling sense of direction and excitement.",
    principle: "To gather and hold followers, you must embody a commanding presence and a clear, stirring vision. People want to feel part of something larger than themselves, and they will follow the person who makes them feel that. Communicate your vision with conviction, project confidence and energy, and give your followers a sense of shared purpose and forward motion.",
    keys: [
      "Project a clear, compelling vision that stirs the imagination.",
      "Communicate with conviction and confidence.",
      "Give your followers a sense of shared mission and momentum.",
      "Appear steady and assured, even in uncertainty.",
      "The fickle will follow the one who makes them feel they are going somewhere."
    ],
    image: "Two men lead a group across a desert. One trudges, head down, offering no direction; the group straggles and quarrels. The other points to a mountain on the horizon, paints a picture of the land beyond, and the group marches with purpose. The vision is the pull that binds a people to a leader.",
    authority: "\"The leader is the one who sees the mountain on the horizon and convinces the people it is worth the climb.\"",
    backfire: "A commanding presence can slide into narcissistic charisma, where the leader is followed for their own glamour rather than a worthy cause. The fickle crowd that loves you today can turn on you tomorrow. Lasting leadership requires substance and genuine care, not just performance."
  },
  {
    title: "See the Hostility Behind the Friendly Facade — The Law of Aggression",
    breakdown: "Human aggression does not always wear an angry face; it often hides behind charm, politeness, and cooperation. The friendly rival who quietly works against you, the smiling colleague who spreads subtle rumors, the passive-aggressive partner — these are the aggressive ones who have learned that open hostility loses, so they wound under cover of kindness.",
    principle: "Aggression is a constant in human nature, and the wise learn to detect it even when it is masked. Watch for the subtle signs: the 'helpful' advice that undermines you, the compliment with a barb, the sudden coldness after a success. By recognizing hidden aggression early, you can defend yourself and redirect the energy before it does damage.",
    keys: [
      "Look for hostility disguised as charm, help, or candor.",
      "Notice the barb hidden in the compliment, the advice that sets you back.",
      "Watch how people behave when they think they are unobserved.",
      "Recognize the competitive subtext in 'friendly' interactions.",
      "The cleverest aggression is the one that never appears aggressive."
    ],
    image: "A wolf in sheep's clothing grazes among the flock, gentle and woolly — until the shepherd turns his back. The sharp shepherd, who has seen such disguises before, watches the 'sheep' closely and is never surprised. The mask fools the naive, not the vigilant.",
    authority: "\"The deadliest blow is the one you do not see coming, delivered with a smile.\"",
    backfire: "Searching constantly for hidden hostility can make you suspicious and cold, driving away the genuinely good-hearted and poisoning your relationships with distrust. Not every kindness hides a knife. Balance vigilance with the warmth that allows real connection."
  },
  {
    title: "Seize the Historical Moment — The Law of Generational Myopia",
    breakdown: "Each generation is shaped by the events and spirit of its time, and it tends to assume that how it sees the world is how the world has always been and will always be. This generational myopia blinds people to the deeper currents of history and to the needs and fears of the generations around them.",
    principle: "To rise above the moment, you must understand the historical currents that shape your era and the generations within it. See the cycles — of conflict, innovation, and reaction — that move beneath the news. Understand the formative experiences of the young and the old, and you can anticipate the shifts others miss and position yourself at the crest of the wave.",
    keys: [
      "Study the generational experiences that shape each age group.",
      "See present events as part of larger historical cycles.",
      "Understand the unspoken fears and desires of each generation.",
      "Anticipate the shifts that the shortsighted will miss.",
      "Ride the deep currents of the time, not the surface foam."
    ],
    image: "A surfer ignores the tiny waves that others chase and watches the deep swell far out at sea, the mass of water that will become the great wave. While the others thrash in the shallows, the patient surfer paddles to meet the deep current and rides it to shore. The moment is the deep swell, if you know how to read it.",
    authority: "\"Those who do not know the past are condemned to repeat it — and those who study it are free to steer it.\"",
    backfire: "An obsession with grand historical cycles can make you dismiss the immediate, concrete details of the present and the real, individual people in front of you. The past is a guide, not a straitjacket — the unprecedented happens, and the wise must stay open to what history never predicted."
  },
  {
    title: "Meditate on Our Common Mortality — The Law of Death Denial",
    breakdown: "Human beings are haunted by the awareness of their own mortality, and most build elaborate defenses to deny it — chasing legacy, wealth, and immortality in work and reputation, terrified of aging and of the end. This denial of death makes people live in the future, sacrifice the present, and cling desperately to illusions of permanence.",
    principle: "The awareness of death, faced honestly, is the greatest spur to living well. When you accept that your time is finite and uncertain, you stop postponing, stop clinging to the trivial, and focus on what truly matters. The person who has contemplated their mortality is calm in crisis, grateful for the present, and free to act with urgency and purpose.",
    keys: [
      "Face the fact of your mortality without evasion.",
      "Let the finiteness of time sharpen your priorities.",
      "Let go of the illusions of permanence and eternal legacy.",
      "Live in the present, not perpetually in the future.",
      "The one who accepts death is the one who truly knows how to live."
    ],
    image: "Two men stand before a gravestone. One turns away in fear, and his life is a frantic chase for more, more — always restless, never satisfied. The other looks long and quietly, and then turns to his day with a new calm, grateful for the sunlight, moved to act on what he loves. The same stone frees one and terrifies the other.",
    authority: "\"Remember that you will die, and the small things will grow small, and the great things great.\"",
    backfire: "Dwelling on mortality can tip into morbid preoccupation or a nihilism that makes everything feel meaningless. The purpose of the meditation is to enliven, not to paralyze. Use the awareness to clarify and appreciate life — not to retreat from it into grim fixation."
  }
];

/* =========================================================
   UI — Filter chips for the card grid
   ========================================================= */
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card');
const countLine = document.getElementById('countLine');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const filter = chip.dataset.filter;
    let visible = 0;

    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.cat === filter;
      card.classList.toggle('hidden', !match);
      if (match) visible++;
    });

    countLine.textContent = `Showing ${visible} of ${cards.length} files`;
  });
});

/* =========================================================
   The 48 Laws of Power modal + law navigator
   ========================================================= */
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const lawsCard = document.getElementById('lawsCard');

// Build the law content once
function renderLaw(index) {
  const law = LAWS[index];
  modalBody.innerHTML = '';

  // Header with law number + title
  const head = document.createElement('div');
  head.className = 'law-page-head';
  head.innerHTML = `<span class="law-page-num">LAW ${String(index + 1).padStart(2, '0')}</span>
                    <h3 class="law-page-title">${law.title}</h3>`;
  modalBody.appendChild(head);

  // Section builder
  function addSection(label, content, extraClass) {
    const sec = document.createElement('div');
    sec.className = 'law-sec' + (extraClass ? ' ' + extraClass : '');
    const lab = document.createElement('div');
    lab.className = 'law-sec-label';
    lab.textContent = label;
    sec.appendChild(lab);
    if (Array.isArray(content)) {
      const ul = document.createElement('ul');
      ul.className = 'law-keys';
      content.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      sec.appendChild(ul);
    } else {
      const p = document.createElement('p');
      p.className = 'law-sec-text';
      p.textContent = content;
      sec.appendChild(p);
    }
    modalBody.appendChild(sec);
  }

  addSection('Transgression', law.transgression, 'sec-transgression');
  addSection('Observance', law.observance, 'sec-observance');
  addSection('Keys to Power', law.keys, 'sec-keys');
  addSection('Image', law.image, 'sec-image');
  addSection('Authority', law.authority, 'sec-authority');
  addSection('Reversal', law.reversal, 'sec-reversal');

  // Prev / Next navigation
  const nav = document.createElement('div');
  nav.className = 'law-nav';
  const prev = document.createElement('button');
  prev.className = 'law-nav-btn';
  prev.textContent = '← Previous';
  prev.disabled = index === 0;
  prev.addEventListener('click', () => renderLaw(index - 1));
  const next = document.createElement('button');
  next.className = 'law-nav-btn';
  next.textContent = 'Next →';
  next.disabled = index === LAWS.length - 1;
  next.addEventListener('click', () => renderLaw(index + 1));
  const counter = document.createElement('span');
  counter.className = 'law-nav-counter';
  counter.textContent = `${index + 1} / ${LAWS.length}`;
  nav.appendChild(prev);
  nav.appendChild(counter);
  nav.appendChild(next);
  modalBody.appendChild(nav);

  modalBody.scrollTop = 0;
}

function openModal() {
  renderLaw(0);
  modalOverlay.hidden = false;
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modalOverlay.hidden = true;
  document.body.style.overflow = '';
}

lawsCard.addEventListener('click', openModal);
lawsCard.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openModal();
  }
});
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modalOverlay.hidden) closeModal();
  if (e.key === 'Escape' && !habitsModalOverlay.hidden) closeHabitsModal();
  if (e.key === 'Escape' && !humanNatureModalOverlay.hidden) closeHumanNatureModal();
});

/* =========================================================
   Atomic Habits modal + principle navigator
   ========================================================= */
const habitsModalOverlay = document.getElementById('habitsModalOverlay');
const habitsModalBody = document.getElementById('habitsModalBody');
const habitsModalClose = document.getElementById('habitsModalClose');
const habitsCard = document.getElementById('habitsCard');

// Build the habit principle content once
function renderHabit(index) {
  const habit = HABITS[index];
  habitsModalBody.innerHTML = '';

  // Header with principle number + title
  const head = document.createElement('div');
  head.className = 'law-page-head';
  head.innerHTML = `<span class="law-page-num">PRINCIPLE ${String(index + 1).padStart(2, '0')}</span>
                    <h3 class="law-page-title">${habit.title}</h3>`;
  habitsModalBody.appendChild(head);

  // Section builder
  function addSection(label, content, extraClass) {
    const sec = document.createElement('div');
    sec.className = 'law-sec' + (extraClass ? ' ' + extraClass : '');
    const lab = document.createElement('div');
    lab.className = 'law-sec-label';
    lab.textContent = label;
    sec.appendChild(lab);
    if (Array.isArray(content)) {
      const ul = document.createElement('ul');
      ul.className = 'law-keys';
      content.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      sec.appendChild(ul);
    } else {
      const p = document.createElement('p');
      p.className = 'law-sec-text';
      p.textContent = content;
      sec.appendChild(p);
    }
    habitsModalBody.appendChild(sec);
  }

  addSection('The Breakdown', habit.breakdown, 'sec-transgression');
  addSection('The Principle', habit.principle, 'sec-observance');
  addSection('Key Steps', habit.keys, 'sec-keys');
  addSection('Image', habit.image, 'sec-image');
  addSection('Authority', habit.authority, 'sec-authority');
  addSection('When It Backfires', habit.backfire, 'sec-reversal');

  // Prev / Next navigation
  const nav = document.createElement('div');
  nav.className = 'law-nav';
  const prev = document.createElement('button');
  prev.className = 'law-nav-btn';
  prev.textContent = '← Previous';
  prev.disabled = index === 0;
  prev.addEventListener('click', () => renderHabit(index - 1));
  const next = document.createElement('button');
  next.className = 'law-nav-btn';
  next.textContent = 'Next →';
  next.disabled = index === HABITS.length - 1;
  next.addEventListener('click', () => renderHabit(index + 1));
  const counter = document.createElement('span');
  counter.className = 'law-nav-counter';
  counter.textContent = `${index + 1} / ${HABITS.length}`;
  nav.appendChild(prev);
  nav.appendChild(counter);
  nav.appendChild(next);
  habitsModalBody.appendChild(nav);

  habitsModalBody.scrollTop = 0;
}

function openHabitsModal() {
  renderHabit(0);
  habitsModalOverlay.hidden = false;
  document.body.style.overflow = 'hidden';
  habitsModalClose.focus();
}

function closeHabitsModal() {
  habitsModalOverlay.hidden = true;
  document.body.style.overflow = '';
}

habitsCard.addEventListener('click', openHabitsModal);
habitsCard.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openHabitsModal();
  }
});
habitsModalClose.addEventListener('click', closeHabitsModal);
habitsModalOverlay.addEventListener('click', (e) => {
  if (e.target === habitsModalOverlay) closeHabitsModal();
});

/* =========================================================
   The Laws of Human Nature modal + law navigator
   ========================================================= */
const humanNatureModalOverlay = document.getElementById('humanNatureModalOverlay');
const humanNatureModalBody = document.getElementById('humanNatureModalBody');
const humanNatureModalClose = document.getElementById('humanNatureModalClose');
const humanNatureCard = document.getElementById('humanNatureCard');

// Build the human nature law content once
function renderHumanNature(index) {
  const law = HUMAN_NATURE[index];
  humanNatureModalBody.innerHTML = '';

  // Header with law number + title
  const head = document.createElement('div');
  head.className = 'law-page-head';
  head.innerHTML = `<span class="law-page-num">LAW ${String(index + 1).padStart(2, '0')}</span>
                    <h3 class="law-page-title">${law.title}</h3>`;
  humanNatureModalBody.appendChild(head);

  // Section builder
  function addSection(label, content, extraClass) {
    const sec = document.createElement('div');
    sec.className = 'law-sec' + (extraClass ? ' ' + extraClass : '');
    const lab = document.createElement('div');
    lab.className = 'law-sec-label';
    lab.textContent = label;
    sec.appendChild(lab);
    if (Array.isArray(content)) {
      const ul = document.createElement('ul');
      ul.className = 'law-keys';
      content.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      sec.appendChild(ul);
    } else {
      const p = document.createElement('p');
      p.className = 'law-sec-text';
      p.textContent = content;
      sec.appendChild(p);
    }
    humanNatureModalBody.appendChild(sec);
  }

  addSection('The Breakdown', law.breakdown, 'sec-transgression');
  addSection('The Principle', law.principle, 'sec-observance');
  addSection('Key Steps', law.keys, 'sec-keys');
  addSection('Image', law.image, 'sec-image');
  addSection('Authority', law.authority, 'sec-authority');
  addSection('When It Backfires', law.backfire, 'sec-reversal');

  // Prev / Next navigation
  const nav = document.createElement('div');
  nav.className = 'law-nav';
  const prev = document.createElement('button');
  prev.className = 'law-nav-btn';
  prev.textContent = '← Previous';
  prev.disabled = index === 0;
  prev.addEventListener('click', () => renderHumanNature(index - 1));
  const next = document.createElement('button');
  next.className = 'law-nav-btn';
  next.textContent = 'Next →';
  next.disabled = index === HUMAN_NATURE.length - 1;
  next.addEventListener('click', () => renderHumanNature(index + 1));
  const counter = document.createElement('span');
  counter.className = 'law-nav-counter';
  counter.textContent = `${index + 1} / ${HUMAN_NATURE.length}`;
  nav.appendChild(prev);
  nav.appendChild(counter);
  nav.appendChild(next);
  humanNatureModalBody.appendChild(nav);

  humanNatureModalBody.scrollTop = 0;
}

function openHumanNatureModal() {
  renderHumanNature(0);
  humanNatureModalOverlay.hidden = false;
  document.body.style.overflow = 'hidden';
  humanNatureModalClose.focus();
}

function closeHumanNatureModal() {
  humanNatureModalOverlay.hidden = true;
  document.body.style.overflow = '';
}

humanNatureCard.addEventListener('click', openHumanNatureModal);
humanNatureCard.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openHumanNatureModal();
  }
});
humanNatureModalClose.addEventListener('click', closeHumanNatureModal);
humanNatureModalOverlay.addEventListener('click', (e) => {
  if (e.target === humanNatureModalOverlay) closeHumanNatureModal();
});

/* =========================================================
   Generic modal — The remaining shelf files
   Each entry carries its book-style breakdown:
   Sections, Title, Author, Eyebrow.
   ========================================================= */
const genericModalOverlay = document.getElementById('genericModalOverlay');
const genericModalBody = document.getElementById('genericModalBody');
const genericModalClose = document.getElementById('genericModalClose');
const genericModalEyebrow = document.getElementById('genericModalEyebrow');
const genericModalTitle = document.getElementById('genericModalTitle');
const genericModalSub = document.getElementById('genericModalSub');

const SHELF_FILES = {
  princeCard: {
    eyebrow: 'FILE 02 · Power',
    title: 'The Prince',
    sub: 'Niccolò Machiavelli — the founding text of political realism',
    sections: [
      { label: 'The Doctrine', content: 'Machiavelli abandons the lofty moralizing of earlier political thought and describes politics as it is actually practiced. A ruler cannot afford to be loved and despised equally; survival demands that he be feared when necessary, cunning when required, and ruthless when the stability of the state is at stake. The prince must learn to be both lion and fox — strong enough to terrify, clever enough to avoid the traps laid by rivals.' },
      { label: 'Key Principles', content: [
        'It is safer to be feared than loved, if you cannot be both.',
        'A ruler must be a lion to frighten wolves and a fox to detect snares.',
        'Fortune favors the bold; she is a woman who must be taken by force of will.',
        'Better to be feared with respect than loved and despised.',
        'The ends of state security justify means that morality alone would condemn.'
      ] },
      { label: 'On Power', content: 'Cruelty, Machiavelli argues, should be used swiftly and completely — done all at once so it is not remembered daily, then followed by benefits that win goodwill. Generosity given too freely breeds dependence and contempt; a measured frugality earns the reputation of a careful steward. The prince who is decisive, adaptable, and prepared for fortune\u2019s turns masters both the state and his own fate.' },
      { label: 'Image', content: 'A citadel perched on a crag, cold and unyielding, surveyed by a prince who sees every approach and every weakness. He is not loved by all, but he is obeyed by all — and in the physics of power, obedience outlasts affection.' },
      { label: 'Authority', content: '"It is much safer to be feared than loved, if one of the two must be wanting."' },
      { label: 'Reversal', content: 'Machiavelli\u2019s realism is a tool, not a religion. In a realm built on trust — a family, a true friendship, a community of shared values — the cold calculus of the lion and the fox breeds suspicion and isolation. Know when the prince\u2019s methods serve the common good, and when they poison it.' }
    ]
  },
  artOfWarCard: {
    eyebrow: 'FILE 04 · Strategy',
    title: 'The Art of War',
    sub: 'Sun Tzu — ancient military doctrine on positioning and deception',
    sections: [
      { label: 'The Doctrine', content: 'Sun Tzu treats war as the art of winning without unnecessary battle. The supreme excellence is not to fight a hundred battles and win a hundred, but to subdue the enemy without fighting at all. Strategy begins long before the first engagement — in knowing yourself, knowing the terrain, and knowing your opponent so completely that victory is decided before the armies clash.' },
      { label: 'Key Principles', content: [
        'All warfare is based on deception — appear weak when strong, near when far.',
        'Supreme excellence is victory without battle.',
        'Know yourself and know your enemy, and you need not fear a hundred battles.',
        'The skillful general defeats the enemy before the fighting begins.',
        'Treat your soldiers as your children, and they will follow you through the deepest valleys.'
      ] },
      { label: 'On Strategy', content: 'Positioning is everything. Sun Tzu teaches to strike where the enemy is weakest, to make one\u2019s own position unassailable, and to seize opportunity when it appears. The general moves like water — flowing around obstacles, filling the low ground, and becoming unstoppable through adaptability rather than brute force.' },
      { label: 'Image', content: 'A river carving through a valley: it does not fight the mountain, it flows around it, patient and relentless, eventually reaching the sea. The supreme strategist is the river — formless, adaptable, and ultimately unconquerable.' },
      { label: 'Authority', content: '"The supreme art of war is to subdue the enemy without fighting."' },
      { label: 'Reversal', content: 'Sun Tzu\u2019s subtlety is lost in a conflict where the enemy is irrational, or where delay costs more than the battle itself. Not every contest rewards the patient flank; sometimes the head-on, decisive engagement is the only honorable path, and adaptation must yield to commitment.' }
    ]
  },
  strategiesCard: {
    eyebrow: 'FILE 05 · Strategy',
    title: 'The 33 Strategies of War',
    sub: 'Robert Greene — historical campaigns distilled into offensive and defensive maneuvers',
    sections: [
      { label: 'The Doctrine', content: 'War is a metaphor for every kind of contest — business, politics, relationships, ambition. Greene distills the wisdom of history\u2019s greatest commanders into thirty-three strategies, arranged into offensive maneuvers, defensive maneuvers, and the unconventional war of the clever. The goal is to emerge victorious from any conflict by understanding the mechanics of power and timing.' },
      { label: 'Key Principles', content: [
        'Declare war on no one lightly — every conflict has a cost.',
        'Strike at the source: the head, the center, the single point of decision.',
        'Use the enemy\u2019s own strength against him.',
        'Know when to fight and when to retreat; the skilled retreat is a kind of victory.',
        'Control the flow of information; the one who knows wins.'
      ] },
      { label: 'On Strategy', content: 'The strategies range from the offensive \u2014 preempting, dividing, and overwhelming \u2014 to the defensive \u2014 retreating, fortifying, and turning the tables. The theme throughout is mastery of perspective: the strategist rises above the immediate skirmish, chooses the battlefield, and converts apparent weakness into a lever of power.' },
      { label: 'Image', content: 'A chessboard where the pieces are alive with intent. The master player does not merely react to the opponent\u2019s move; he shapes the whole board so that every possible answer leads toward his victory. The board is won in the mind before it is taken on the surface.' },
      { label: 'Authority', content: '"The greatest victory is that which requires no battle."' },
      { label: 'Reversal', content: 'An over-reliance on strategy breeds cynicism and a war-like posture toward every relationship. Not everyone is an opponent, and a life spent maneuvering against others is a life without trust or genuine alliance. The strategies are for the contest; they must not become the whole of life.' }
    ]
  },
  negotiationCard: {
    eyebrow: 'FILE 06 · Strategy',
    title: 'Never Split the Difference',
    sub: 'Chris Voss — an FBI hostage negotiator\u2019s tactics for leverage',
    sections: [
      { label: 'The Doctrine', content: 'Negotiation is not a war of logic but a battle of emotions and perceptions. Chris Voss, a former FBI hostage negotiator, argues that the most powerful moves are not rational arguments but tactical empathy — hearing the other side\u2019s feelings, labeling their fears, and steering the human need to be understood. The goal is not to win an argument but to direct a conversation toward a better outcome.' },
      { label: 'Key Principles', content: [
        'Use tactical empathy to make the other side feel heard and understood.',
        'Label their emotions to defuse them and build rapport.',
        'Aim for "that\u2019s right," not "you\u2019re right" — acknowledgment, not surrender.',
        'Mirror and repeat to create connection and buy time.',
        'Never split the difference; seek a fair deal that honors both sides.'
      ] },
      { label: 'On Leverage', content: 'The negotiator gains power by understanding the other side\u2019s motivations and fears, then framing the deal so their needs align with yours. Silence is a weapon, a calibrated question opens doors, and the one who listens most closely controls the room. Deadlines and pressure are reframed as opportunities rather than threats.' },
      { label: 'Image', content: 'A hostage negotiator speaking calmly into a phone, not shouting demands but listening — deeply, patiently — to the fear and anger on the other end. In that listening, the crisis is not fought but unwound, one labeled emotion at a time.' },
      { label: 'Authority', content: '"The person who is best able to listen is the person who is most in control."' },
      { label: 'Reversal', content: 'Tactical empathy, used as a script, can become manipulation — the other side eventually senses that the warmth is a performance. And in high-stakes matters of principle, a too-flexible approach can bend integrity out of shape. Negotiation is a skill; it must not become a mask for your own values.' }
    ]
  },
  sevenHabitsCard: {
    eyebrow: 'FILE 08 · Habits',
    title: 'The 7 Habits of Highly Effective People',
    sub: 'Stephen Covey — a character-based framework for personal and interpersonal effectiveness',
    sections: [
      { label: 'The Doctrine', content: 'Effectiveness is not a set of tricks but a character built on principles. Covey presents seven habits that move a person from dependence through independence to interdependence — the level where the greatest achievement happens. The habits begin with the private victory of self-mastery and extend outward to the public victory of helping others succeed, culminating in the seventh habit that renews the entire system.' },
      { label: 'The Seven Habits', content: [
        'Habit 1 — Be Proactive: Take responsibility for your own life. Your behavior is a function of your decisions, not your conditions. Between stimulus and response lies your freedom to choose.',
        'Habit 2 — Begin with the End in Mind: Define your destination before you begin the journey. All things are created twice — first mentally, then physically. Clarity of purpose guides every step.',
        'Habit 3 — Put First Things First: Execute the vision of Habit 2 by prioritizing what matters most. The urgent is often not the important; discipline is doing what matters when it does not feel like it.',
        'Habit 4 — Think Win-Win: Seek mutual benefit in all human interactions. Life is a cooperative arena, not a competitive one. Agreements are not bargains — they are commitments to mutual growth.',
        'Habit 5 — Seek First to Understand, Then to Be Understood: Listen with empathy before you speak. Diagnosis before prescription. The person who feels understood is the person who becomes open to your influence.',
        'Habit 6 — Synergize: Combine strengths through creative cooperation. The whole is greater than the sum of its parts. Value differences; they are the source of innovation and breakthrough.',
        'Habit 7 — Sharpen the Saw: Preserve and enhance your greatest asset — yourself. Renew the four dimensions: body, mind, heart, and spirit. Sustainability is the foundation of all lasting achievement.'
      ] },
      { label: 'Private Victory (Habits 1-3)', content: 'The first three habits build the foundation of personal effectiveness. Habit 1 — Be Proactive — teaches that you are the architect of your own response to life. The proactive person does not blame circumstances, moods, or others; they recognize their power to choose. Habit 2 — Begin with the End in Mind — gives direction; every role, every project, every day begins with a clear vision of the desired outcome. Habit 3 — Put First Things First — gives execution; the Eisenhower Matrix separates the urgent from the important, and the disciplined person acts on what matters even when the urgent screams for attention.' },
      { label: 'Public Victory (Habits 4-6)', content: 'The next three habits extend effectiveness outward. Habit 4 — Think Win-Win — is the mindset of abundance: there is enough success for everyone, and your gain does not require my loss. Habit 5 — Seek First to Understand — is the practice of empathic listening: you diagnose before you prescribe, you honor the other person\'s frame of reference before you attempt to influence it. Habit 6 — Synergize — is the practice of creative cooperation: two people who genuinely seek to understand and be understood can produce a third alternative that is superior to what either could have created alone.' },
      { label: 'Renewal (Habit 7)', content: 'Sharpening the saw is the habit that makes the other six sustainable. It renews the four dimensions of your nature: physical (exercise, nutrition, stress management), mental (reading, visualization, planning, writing), social/emotional (service, empathy, synergy), and spiritual (value clarification, meditation, study, nature). Without renewal, the saw becomes dull and the work becomes grinding. With it, effectiveness becomes effortless.' },
      { label: 'The P/PC Balance', content: 'Covey\'s central metaphor is the balance between Production (P) and Production Capability (PC). You can produce immediately by overworking a machine — but the machine wears out. You can produce in relationships by demanding — but the relationship breaks. The golden egg is not enough; you must care for the goose that lays it. Effectiveness is achieved when P and PC are in balance.' },
      { label: 'Image', content: 'A tree whose roots are principles and whose branches are the seven habits. The visible fruit — effectiveness, influence, fulfillment — is the natural result of deep, invisible roots. The tree also shows the concentric circles of influence: from the private world of self, through the public world of relationships, to the ever-widening circles of community and legacy. Grow the roots, and the tree cannot help but bear fruit.' },
      { label: 'Authority', content: '"The main thing is to keep the main thing the main thing. Also: seek first to understand, then to be understood."' },
      { label: 'Reversal', content: 'The habits assume a world of goodwill and shared principles. In a ruthless environment where others operate by manipulation, the win-win mindset can be exploited. The principles should guide your character, but they must not make you naive to those who will not meet you in good faith. Sharpen the saw, but do not sharpen forever — at some point, you must swing the axe. The framework is a compass, not a cage.' }
    ]
  },
  deepWorkCard: {
    eyebrow: 'FILE 09 · Habits',
    title: 'Deep Work',
    sub: 'Cal Newport — cultivating focused, undistracted effort as a rare skill',
    sections: [
      { label: 'The Doctrine', content: 'In an age of constant distraction, the ability to focus without interruption is becoming increasingly rare — and increasingly valuable. Cal Newport argues that deep work, the state of intense, undistracted concentration, is the key to producing work of real value. The shallow work of emails, meetings, and rapid task-switching fills the day but creates little.' },
      { label: 'Key Principles', content: [
        'Deep work is the ability to focus without distraction on a cognitively demanding task.',
        'The banal is what matters — schedules, routines, and rituals protect deep time.',
        'Embrace boredom; the ability to tolerate it is the foundation of focus.',
        'Quit social media — the shallow scroll is the enemy of depth.',
        'Make deep work a habit, not a hope.'
      ] },
      { label: 'On Focus', content: 'Newport describes four philosophies of deep work — monastic, bimodal, rhythmic, and journalistic — and encourages choosing the one that fits your life. The key is to design your environment and schedule so that deep work is protected from the noise of the world, and to regain the capacity for boredom that modern screens have eroded.' },
      { label: 'Image', content: 'A scholar in a lamp-lit room, walls bare, phone silenced, hours unbroken. Around him the world buzzes with notifications and chatter, but within the room time slows, and the work of lasting value is quietly created, one deep hour at a time.' },
      { label: 'Authority', content: '"Deep work is the ability to focus without distraction on a cognitively demanding task. It\u2019s a skill that allows you to quickly master complicated information and produce better results in less time."' },
      { label: 'Reversal', content: 'Deep work is not the only good. Collaboration, spontaneity, and the serendipity of connection have their own value, and a life of pure monastic focus can become isolating and rigid. The goal is to choose when to go deep, not to be a prisoner of the shallow or the focused.' }
    ]
  },
  masteryCard: {
    eyebrow: 'FILE 10 · Mastery',
    title: 'Mastery',
    sub: 'Robert Greene — the long apprenticeship model behind history\u2019s greatest practitioners',
    sections: [
      { label: 'The Doctrine', content: 'Mastery is not a gift of genius but the result of a deliberate, lifelong process. Robert Greene traces the careers of history\u2019s greatest practitioners — from Darwin to da Vinci to Mozart — and finds a common path: a deep apprenticeship, a period of intense creative exploration, and the development of a unique voice. Mastery is available to anyone willing to commit to the journey.' },
      { label: 'Key Principles', content: [
        'Find your life\u2019s task — the field that engages your deepest fascination.',
        'Serve a rigorous apprenticeship, learning the fundamentals completely.',
        'Use the active mode — learn by doing, not just by receiving.',
        'Drift never; commit to a path and pursue it with intensity.',
        'Embrace the creative phase — the intuitive leaps that follow deep knowledge.'
      ] },
      { label: 'On the Path', content: 'The path to mastery begins with self-discovery and a rigorous apprenticeship, then moves through a period of creative experimentation where the once-learned rules are bent and broken. The final stage is the development of a unique voice — the point where competence becomes genius and the practitioner shapes the field itself.' },
      { label: 'Image', content: 'A craftsman at a workbench, years of quiet practice visible in the calloused hands and the confident eye. The apprentice who once copied the master now exceeds her, not by abandoning the craft but by mastering it so deeply that it becomes a vehicle for something new.' },
      { label: 'Authority', content: '"You are the author of your own life; the raw material of what you become is within you."' },
      { label: 'Reversal', content: 'The devotion to mastery can become an obsession that consumes the rest of life — relationships, health, and balance neglected in the pursuit of a single goal. And in a world that changes fast, an overcommitment to one field can leave you stranded when the field shifts. Mastery should enrich a life, not become it.' }
    ]
  },
  egoCard: {
    eyebrow: 'FILE 11 · Mastery',
    title: 'Ego Is the Enemy',
    sub: 'Ryan Holiday — a Stoic argument for ambition without vanity',
    sections: [
      { label: 'The Doctrine', content: 'Ambition is noble, but ego — the voice of vanity, self-importance, and the need to be recognized — is its greatest enemy. Ryan Holiday argues that ego sabotages us at every stage: it fills the aspiring with pride before they have earned it, corrupts the successful with arrogance, and breaks the failed with self-pity. The remedy is humility, reality, and the patient work of the craft.' },
      { label: 'Key Principles', content: [
        'The ego is the voice that tells you you are already better than you are.',
        'Humble yourself — the ego must be kept in check before success, in success, and in failure.',
        'Do the work for the work itself, not for the recognition.',
        'Stay a student; the ego is the enemy of learning.',
        'In failure, resist self-pity; it is the ego\u2019s last disguise.'
      ] },
      { label: 'On Discipline', content: 'Holiday traces the battle against ego through three arenas: aspiration, success, and failure. In aspiration, ego breeds pretension; the cure is apprenticeship and honest work. In success, ego breeds arrogance; the cure is gratitude and continued effort. In failure, ego breeds despair; the cure is to take responsibility and begin again.' },
      { label: 'Image', content: 'A battle where the enemy is not an army but a mirror. The warrior who fights ego fights his own reflection — the face that whispers of greatness, entitlement, and exemption. The warrior who wins is the one who looks past the mirror to the work that must be done.' },
      { label: 'Authority', content: '"The person who is truly confident is the one who is willing to look foolish — to try, and to fail, and to learn."' },
      { label: 'Reversal', content: 'The rejection of ego can tip into self-effacement, a false humility that withholds your gifts from the world out of fear of appearing proud. Quiet confidence is not ego; it is the honest recognition of your own worth. The goal is to defeat the ego, not to deny your own value.' }
    ]
  },
  ownershipCard: {
    eyebrow: 'FILE 12 · Mastery',
    title: 'Extreme Ownership',
    sub: 'Jocko Willink & Leif Babin — combat-tested leadership built on radical accountability',
    sections: [
      { label: 'The Doctrine', content: 'Leadership begins and ends with ownership. Jocko Willink and Leif Babin, former Navy SEALs, argue that the most powerful leader is the one who takes extreme ownership of everything — every success, every failure, every outcome within their command. There are no bad teams, only bad leaders; the leader who accepts full responsibility empowers the team and fixes the problem.' },
      { label: 'Key Principles', content: [
        'Extreme ownership: the leader owns everything in their world, good and bad.',
        'There are no bad teams, only bad leaders.',
        'Explain the mission simply and check that it is understood.',
        'Decentralize command — empower subordinates to lead within their lanes.',
        'Discipline equals freedom; the order of the team is the foundation of its power.'
      ] },
      { label: 'On Leadership', content: 'The book pairs each principle with a battle narrative from Iraq, showing how accountability, clear communication, and decentralized command turned chaos into controlled success. The leader who takes ownership does not blame subordinates or circumstances; they diagnose the problem, take responsibility, and lead the way forward.' },
      { label: 'Image', content: 'A SEAL team moving through hostile terrain, every member empowered to act, every leader accountable for the whole. When a mission fails, there is no finger-pointing — only the leader stepping forward to say, "The fault is mine," and the team rallying to fix it together.' },
      { label: 'Authority', content: '"Extreme ownership: leaders must own everything in their world. There is no one else to blame."' },
      { label: 'Reversal', content: 'Taking ownership of everything can become a burden that crushes initiative if it means never delegating blame where blame is due, or a leader absorbing the failures of an unaccountable team. True ownership is about power and responsibility, not martyrdom — and it must be paired with honest feedback and shared accountability.' }
    ]
  }
};

function openGenericModal(cardId) {
  const file = SHELF_FILES[cardId];
  if (!file) return;
  genericModalEyebrow.textContent = file.eyebrow;
  genericModalTitle.textContent = file.title;
  genericModalSub.textContent = file.sub;
  genericModalBody.innerHTML = '';

  file.sections.forEach(sec => {
    const block = document.createElement('div');
    block.className = 'law-sec';
    const lab = document.createElement('div');
    lab.className = 'law-sec-label';
    lab.textContent = sec.label;
    block.appendChild(lab);
    if (Array.isArray(sec.content)) {
      const ul = document.createElement('ul');
      ul.className = 'law-keys';
      sec.content.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      block.appendChild(ul);
    } else {
      const p = document.createElement('p');
      p.className = 'law-sec-text';
      p.textContent = sec.content;
      block.appendChild(p);
    }
    genericModalBody.appendChild(block);
  });

  genericModalOverlay.hidden = false;
  document.body.style.overflow = 'hidden';
  genericModalClose.focus();
}

function closeGenericModal() {
  genericModalOverlay.hidden = true;
  document.body.style.overflow = '';
}

Object.keys(SHELF_FILES).forEach(id => {
  const card = document.getElementById(id);
  if (!card) return;
  card.addEventListener('click', () => openGenericModal(id));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openGenericModal(id);
    }
  });
});

genericModalClose.addEventListener('click', closeGenericModal);
genericModalOverlay.addEventListener('click', (e) => {
  if (e.target === genericModalOverlay) closeGenericModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !genericModalOverlay.hidden) closeGenericModal();
});
