

export default {
    // emoji sequence generator
    "fanEmoji": ["👍", "😋", "😍", "😄", "💕", "✨", "💖", "💛", "💯", "😙"],
    "complainEmoji": ["👎", "🚮", "🚽", "🤷",  "😂", "🤔", "🔥", "😑", "😐", "😒", "😥", "😲", "🤢", "💩", "😱", "😭", "😠"],
    "sadEmoji": ["😂", "🤔", "😶", "😧", "😦", "😞", "☹"],
    "emojiSeq": [
        "#emoji1#", 
        "#emoji1##emoji2#", 
        "#emoji1##emoji2##emoji3#", 
        "#emoji1##emoji1##emoji1##emoji1##emoji1#",
        "#emoji1##emoji1##emoji1#",
        "#emoji1##emoji1##emoji1#",
        "#emoji1##emoji1##emoji1##emoji2##emoji2##emoji2##emoji3##emoji3##emoji3#",
        "#emoji1##emoji1##emoji2##emoji2##emoji3##emoji3#", 
        "", "", "", "", "", "", ""
    ],
    "fanEmojiSeq": ["[emoji1:#fanEmoji#][emoji2:#fanEmoji#][emoji3:#fanEmoji#]#emojiSeq#"],
    "complainEmojiSeq": ["[emoji1:#complainEmoji#][emoji2:#complainEmoji#][emoji3:#complainEmoji#]#emojiSeq#"],
    "sadEmojiSeq": ["[emoji1:#sadEmoji#][emoji2:#sadEmoji#][emoji3:#sadEmoji#]#emojiSeq#"],

    "exclaimed": [
        "!", "!", "!", "!",
        "!!!",
        "!!!!!",
        "!!!!!!",
        "?!",
        "!?!?!"
    ],
    

    // person generator
    "genPerson": [
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my wife][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my daughter][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my sister][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my sis][pNameTheir:#pName#']",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my girlfriend][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my gf][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my kid][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my partner][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my friend][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my husband][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my son][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my brother][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my bro][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my boyfriend][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my bf][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my kid][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my partner][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my friend][pNameTheir:#pName#'s]",
        "[pTheir:their][pTheirs:theirs][pThey:they][pThem:them][pName:my kid][pNameTheir:#pName#'s]",
        "[pTheir:their][pTheirs:theirs][pThey:they][pThem:them][pName:my partner][pNameTheir:#pName#'s]",
        "[pTheir:their][pTheirs:theirs][pThey:they][pThem:them][pName:my friend][pNameTheir:#pName#'s]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
        "[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]",
    ],
    "defaultPerson": ["[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]"],
    "pronoun": ["#pNameTheir#", "#pNameTheir#", "#pNameTheir#", "this", "this", "this"],


    // angry customer dialogue chunks
    "sadness": ["what gives", "what happened", "kinda disappointing", "was really looking forward to it too", "so hungry", "still hungry", "don't mean to overreact or anything", "a replacement would be nice", "this is subpar", "really", "huh", "pretty funny", "comedy gold", "who needs QA", "talk about a letdown", "such an anticlimax", ],
    
    "exclamation": ["wtf", "wtf is this", "what the fuck", "fuck me sideways", "what the hell is this", "what is this", "wtf is this shit", "what is this shit", "what is this horseshit", "what the shit", "holy shit", "holy wow", "my god", "omg", "uhhhhhhhh", "uhhhh", "uh", "I can't even", "oh come on", "gross", "I can't believe this", "I can't believe this shit", "this is sick", "this is just sad", "excuse me", "not cool", "not happy", "unacceptable"],
    
    "big": ["large ", "gigantic ", "great big fucking ", "largeass ", "big ", "bigass ", "goddamn ", "huge ", "enormous ", "fucking ", "", "", "", ""],
    
    "closingRemark": ["you're not even trying", "not fun at all", "I expected more", "you can do better", "you can do better than this", "this is pretty bad", "this is the worst", "this is awful", "never buying again", "fucking disgusting", "very disappointed", "really disappointed", "disappointed", "really sad", "very sad", "never again", "avoid at all costs", "avoid", "everyone avoid", "I feel disrespected", "I feel sick", "I feel ill", "step up your game", "fix this", "you better fix this", "you ripped me off", "what a fucking swindle", "from a good supermarket", "from a reputable shop", "from my local shop", "from the gas station", "everyone don't buy", "you expect #pThem# to eat that", "the press will love this", "you'll burn for this", "you're going down", "you're going down for this", "this shit is unacceptable", "this is unacceptable", "this is fucking dangerous" ],

    "litigiousRemark": ["see you in court", "SEE YOU IN COURT", "you'll hear from #pTheir# lawyer", "I demand compensation", "#pThey# had to go to the hospital", "in the emergency room", "at the hospital", "you better pay #pTheir# medical bills", "#pThey# chipped a tooth", "#pThey# is bleeding everywhere", "#pThey# cracked #pTheir# tooth", "#pThey# can't stop vomiting", "next step is a lawsuit", "better lawyer up", "seems like an open and shut case", "enjoy being sued", "talking to an attorney now", "anyone know a good lawyer"],
    "coda": [" fml", " ffs", " you dicks", " you fuckers", " FML", " FFS", " jesus", " JFC", " sigh", " don't @ me", "", "", "", "", "", "", "", "", "", "", "", ""],


    // foreign object types and righteous outrage generator
    "foreignObject": ["piece of wood", "stick", "wood chip", "wood splinter", "splinter", "pill", "pill thing", "rock", "rock chip", "pebble", "stone", "grain of sand", "lump of sand",  "coin", "penny", "shell", "lump", "hair", "eyelash", "dandruff flake", "dust bunny", "ball of dust", "ball of lint", "chunk of lint", "clump of hair", "fingernail", "finger nail", "fake nail", "bandaid", "sticking plaster", "bone", "chunk of glass", "piece of glass", "shard of glass", "glass shard", "wire", "bit of wire", "peanut shell", "nail", "fly", "plastic thing", "cobweb", "egg cluster", "egg sac", "nest of tiny bugs", "worm", "maggot", "spider", "insect", "bug", "roach", "cockroach", "locust", "dead rat", "tail", "severed finger"],
    "bigForeignObject": ["[whut:#big##foreignObject#]#whut.randomUpper(10)#", "#big##foreignObject.randomUpper(10)#"],
    "foreignObjectDiscovery": [
        "#genPerson##pName# found #bigForeignObject.a# in #pronoun# #product#",
        "#genPerson##pName# bit into #bigForeignObject.a#",
        "#defaultPerson#found #bigForeignObject.a# in #pronoun# #product#",
        "#defaultPerson#why is there #bigForeignObject.a# in #pronoun# #product#",
        "#defaultPerson#why does #pronoun# #product# have #bigForeignObject.a#",
        "#defaultPerson#there's #bigForeignObject.a# in #pronoun# #product#",
        "#defaultPerson#there's literally #bigForeignObject.a# in #pronoun# #product#",
        "#defaultPerson##pronoun# #product# literally has #bigForeignObject.a# in it",
        "#defaultPerson#wondering why there's #bigForeignObject.a# in #pronoun# #product#",
        "#defaultPerson#wondering why #pronoun# #product# has #bigForeignObject.a# in it",
        "#defaultPerson#can't believe there's #bigForeignObject.a# in #pronoun# #product#",
        "#defaultPerson#can't believe #pronoun# #product# has #bigForeignObject.a# in it",
        "#defaultPerson#no shit there is #bigForeignObject.a# in #pronoun# #product#",
        "#defaultPerson#no fooling there is #bigForeignObject.a# in #pronoun# #product#",
        "#defaultPerson#how come there's #bigForeignObject.a# in #pronoun# #product#",    
        "#defaultPerson#explain why there's #bigForeignObject.a# in #pronoun# #product#",
        "#defaultPerson#explain why #pronoun# #product# has #bigForeignObject.a# in it",
        "#defaultPerson#is it normal for #product.a# to have #bigForeignObject.a#",
        "#defaultPerson#do you make every #product# with #bigForeignObject.a# in them",
    ], 
    "foreignMessage": [
        "[disco:#foreignObjectDiscovery#]#exclamation.randomUpper(30)# @#account# #disco#, #closingRemark.randomUpper(20)##coda#", 
        "[disco:#foreignObjectDiscovery#]@#account# #exclamation.randomUpper(30)# #disco#, #closingRemark##coda#", 
        "[disco:#foreignObjectDiscovery#]@#account# #exclamation.randomUpper(50)##exclaimed# #disco#, #closingRemark##coda#", 
        "[disco:#foreignObjectDiscovery#]#complainEmojiSeq# #closingRemark.randomUpper(30)# @#account# #disco##coda#",
        "[disco:#foreignObjectDiscovery#]#complainEmojiSeq# @#account# #disco#, #closingRemark.randomUpper(20)# #coda#",
    ],

    
    // spoilage types
    "stench": [
        "rot", "mold", "moldy cheese", "fungus", "rotten eggs", "expired mayonnaise", "ass", "farts", "wet farts", "a bag of old farts", "urine", "piss", "cat piss", "turd", "shit", "bad diarrhoea", "sewage", "a sewerage plant", "a slaughterhouse floor", "an abbatoir", "expired milk", "sour milk", "rancid butter", "dumpster juice", "rotting garbage", "fetid garbage", "heated garbage", "compost", "fertilizer", "medical waste", "a urinal cake", "a rendering plant", "rotting meat", "rancid meat", "a whale carcass on a hot day", "tanning waste", "chemicals", "bad chemicals", "acid", "oven cleaner",
    ],
    "spoiled": [
        "reeks of #stench#",
        "stinks of #stench#",
        "has a distinct aroma of #stench#",
        "smells of #stench#",
        "tasted like #stench#",
        "had a strong aftertaste of #stench#",
        "was all covered in powder",
        "was powdery and disgusting",
        "looked pretty gross",
        "smelled pretty rank",
        "was rotten",
        "was rancid",
        "clearly has spoiled",
    ],
    "spoilDiscovery": [
        "#genPerson##pName# bought a #product# and it #spoiled#",
        "I opened up a #product# and it #spoiled#",
        "how come this #product# #spoiled#",
        "sorry but this #product# #spoiled#",
        "I purchased a #product# and it #spoiled#",
        "got a #product# and it #spoiled#",
    ],
    "spoilMessage": [
        "@#account# #spoilDiscovery#",
    ],

    // empty types
    "emptyVolume": [
        "empty",
        "empty",
        "maybe half empty",
        "mostly empty",
        "nearly empty",
        "just air",
        "mostly air",
        "full of air",
        "full of nothing",
        "mostly sailboat fuel",
    ],
    "emptyDiscovery": [
        "#genPerson##pName# bought a #product# and there was nothing inside the #package#",
        "#genPerson##pName# bought a #product# and there was nothing in it",
        "#genPerson##pNameTheir# #product# is #emptyVolume#",
        "#genPerson#did someone at the factory get hungry? check out this #emptyVolume# #product#",
        "#genPerson#how come there's no #productSingular# in this #package#",
        "#genPerson#is your new business model selling #package.s# that are #emptyVolume#",
        "#genPerson#I see you've just switched to making the #package.s# #emptyVolume#",
        "#genPerson#trying to be cheap, my #productSingular# #package# was #emptyVolume#",
        "#genPerson#which genius thought of making a #product# that's #emptyVolume#",
    ],
    "emptyMessage": ["@#account# #emptyDiscovery#", "#sadEmojiSeq# @#account# #emptyDiscovery#", "@#account# #sadEmojiSeq# #emptyDiscovery#"],

    // misshapen types
    "misshapenMessage": ["@#account# wah wah wah my food was shaped weird"],
    

    // product types
    "prod_chocolate": [
        "[productSingular:chocolate][product:candy bar][package:wrapper]", 
        "[productSingular:chocolate][product:bar][package:wrapper]", 
        "[productSingular:chocolate][product:choc bar][package:wrapper]", 
        "[productSingular:chocolate][product:choco bar][package:wrapper]", 
        "[productSingular:chocolate][product:chocolate bar][package:wrapper]", 
        "[productSingular:chocolate][product:Kingsley chocolate bar][package:wrapper]", 
        "[productSingular:chocolate][product:Kingsley bar][package:wrapper]", 
        "[productSingular:chocolate][product:🍫][package:wrapper]"
    ],
    "prod_pebbles": [
        "[productSingular:fruit pebble][product:🍬][package:wrapper]", 
        "[productSingular:fruit pebble][product:bag of fruit pebbles][package:wrapper]", 
        "[productSingular:Fruit Pebble][product:bag of Fruit Pebbles][package:wrapper]", 
        "[productSingular:fruit pebble][product:bag of 🍬s][package:wrapper]", 
        "[productSingular:Fruit Pebble][product:Fruit Pebbles bag]", 
        "[productSingular:Fruit Pebble][product:pack of Fruit Pebbles][package:box]", 
        "[productSingular:fruit pebble][product:pack of fruit pebbles][package:box]", 
        "[productSingular:fruit pebble][product:pack of 🍬s][package:box]", 
        "[productSingular:Fruit Pebble][product:Fruit Pebbles pack][package:box]", 
    ],
    

    // crappy product weighting
    "ks_prod": ["#prod_chocolate#", "#prod_chocolate#", "#prod_chocolate#", "#prod_chocolate#", "#prod_chocolate#", "#prod_chocolate#", "#prod_chocolate#", "#prod_chocolate#", 
                "#prod_pebbles#", "#prod_pebbles#", "#prod_pebbles#", ],


    // happy tweet weighting
    "ks_advertising": ["[account:KingsleySnacks]@#account# catchphrase tagline I am a consumer whore"],
    "ks_experience": ["[account:KingsleySnacks]@#account# please send me free shit"],


    // furious tweet generators
    "ks_foreign": ["[account:KingsleySnacks]#ks_prod##foreignMessage#"],
    "ks_spoil": ["[account:KingsleySnacks]#ks_prod##spoilMessage#"],
    "ks_empty": ["[account:KingsleySnacks]#ks_prod##emptyMessage#"],
    "ks_misshapen": ["[account:KingsleySnacks]#ks_prod##misshapenMessage#"],


    "ks_compliment_reply": ["we're honored to have a fan like you on Team Kingsley!"],
    "ks_issue_reply": ["Hi, we\'re sorry for your experience but thank you for letting us know, please call 570-330-3000 to discuss"],

    "cj_issue_reply": ["Aye, very sorry ta be hearin' yer snack weren't ship-shape. Please be callin' 570-330-3000 t' parley about it"],

    "generic_reply": ["I care so little have this generic reply"]
};
