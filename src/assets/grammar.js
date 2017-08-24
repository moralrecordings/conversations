

export default {
    // emoji sequence generator
    "fanEmoji": ["👍", "😋", "😍", "😄", "💕", "✨", "💖", "💛", "💯", "😙", "👀"],
    "complainEmoji": ["👎", "🚮", "🚽", "🤷",  "😂", "🤔", "🔥", "😑", "😐", "😒", "😥", "😲", "🤢", "💩", "😱", "😭", "😠"],
    "sadEmoji": ["😂", "🤔", "😶", "😧", "😦", "😞", "☹"],
    "emojiSeq": [
        "#emoji1#", 
        "#emoji1##emoji2#", 
        "#emoji1##emoji2##emoji3#", 
        "#emoji1##emoji1##emoji1##emoji1##emoji1#",
        "#emoji1##emoji1##emoji1#",
        "#emoji1##emoji1##emoji1#",
        "#emoji1##emoji1##emoji1##emoji1##emoji1#",
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
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my sister][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my sis][pNameTheir:#pName#']",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my kid][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my daughter][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my girlfriend][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my gf][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my wife][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my partner][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my friend][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my fiancee][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my lady][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my son][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my brother][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my kid][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my bro][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my husband][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my boyfriend][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my bf][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my partner][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my friend][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my fiance][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my man][pNameTheir:#pName#'s]",
        "[pTheir:their][pTheirs:theirs][pThey:they][pThem:them][pName:my kid][pNameTheir:#pName#'s]",
        "[pTheir:their][pTheirs:theirs][pThey:they][pThem:them][pName:my sibling][pNameTheir:#pName#'s]",
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
    "genPartner": [
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my girlfriend][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my gf][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my wife][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my partner][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my friend][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my fiancee][pNameTheir:#pName#'s]",
        "[pTheir:her][pTheirs:hers][pThey:she][pThem:her][pName:my lady][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my husband][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my boyfriend][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my bf][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my partner][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my friend][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my fiance][pNameTheir:#pName#'s]",
        "[pTheir:his][pTheirs:his][pThey:he][pThem:him][pName:my man][pNameTheir:#pName#'s]",
        "[pTheir:their][pTheirs:theirs][pThey:they][pThem:them][pName:my fiancee][pNameTheir:#pName#'s]",
        "[pTheir:their][pTheirs:theirs][pThey:they][pThem:them][pName:my fiance][pNameTheir:#pName#'s]",
        "[pTheir:their][pTheirs:theirs][pThey:they][pThem:them][pName:my partner][pNameTheir:#pName#'s]",
        "[pTheir:their][pTheirs:theirs][pThey:they][pThem:them][pName:my friend][pNameTheir:#pName#'s]",
    ],
    "defaultPerson": ["[pTheir:my][pTheirs:mine][pThey:I][pThem:me][pName:I][pNameTheir:#pTheir#]"],
    "pronoun": ["#pNameTheir#", "#pNameTheir#", "#pNameTheir#", "this", "this", "this"],


    // angry customer dialogue chunks
    "sadness": ["what gives", "what happened", "kinda disappointing", "was really looking forward to it too", "so hungry", "still hungry", "don't mean to overreact or anything", "a replacement would be nice", "this is subpar", "really", "huh", "pretty funny", "comedy gold", "who needs QA, right?", "talk about a letdown", "such an anticlimax", "dunno what to say", "kinda bummed", "this sucks", "this stinks", "this bites", "lame", "frig"],
    
    "exclamation": ["wtf", "wtf is this", "what the fuck", "fuck me sideways", "freak me sideways", "what the hell is this", "what is this", "wtf is this shit", "what is this shit", "what is this horseshit", "what the shit", "holy shit", "holy fuck", "holy wow", "good heavens", "good grief", "my god", "christ", "jesus", "jesus christ", "jesus h. christ", "jesus shitting christ", "omg", "uhhhhhhhh", "uhhhh", "uh", "I can't even", "oh come on", "I can't believe this", "I can't believe this shit", "this is sick", "this is just sad", "excuse me", "not cool", "not happy", "unacceptable", "thanks for nothing"],
    
    "big": ["large ", "gigantic ", "great big fucking ", "largeass ", "big ", "bigass ", "goddamn ", "huge ", "enormous ", "shitting great ", "fucking ", "", "", "", ""],
    
    "closingRemark": ["you're not even trying", "not fun at all", "I expected more", "you can do better", "you can do better than this", "this is pretty bad", "this is the worst", "this is awful", "never buying again", "fucking disgusting", "very disappointed", "really disappointed", "disappointed", "really sad", "very sad", "never again", "avoid at all costs", "avoid", "everyone avoid", "I feel disrespected", "I feel sick", "I feel ill", "step up your game", "fix this", "you better fix this", "you ripped me off", "what a fucking swindle", "from a good supermarket", "from a reputable shop", "from my local shop", "from the gas station", "everyone don't buy", "you expect #pThem# to eat that", "the press will love this", "you'll burn for this", "you're going down", "you're going down for this", "this shit is unacceptable", "this is unacceptable", "this is fucking dangerous", "this is not a hoax" ],

    "litigiousRemark": ["see you in court", "SEE YOU IN COURT", "you'll hear from #pTheir# lawyer", "I demand compensation", "#pThey# had to go to the hospital", "in the emergency room", "at the hospital", "you better pay #pTheir# medical bills", "#pThey# chipped a tooth", "now #pTheir# blood is everywhere", "#pThey# cracked #pTheir# tooth", "#pThey# can't stop vomiting", "next step is a lawsuit", "better lawyer up", "seems like an open and shut case", "enjoy being sued", "talking to an attorney now", "anyone know a good lawyer", "#pThey# almost died"],
    
    "coda": [" fml", " ffs", " you dicks", " you fuckers", " you bastards", " FML", " FFS", " jesus", " JFC", " sigh", " smh", " don't @ me", "", "", "", "", "", "", "", "", "", "", "", ""],


    // foreign object types and righteous outrage generator
    "foreignObject": ["piece of wood", "stick", "wood chip", "wood splinter", "splinter", "pill thing", "rock", "rock chip", "pebble", "stone", "grain of sand", "lump of sand",  "coin", "penny", "shell", "lump", "hair", "eyelash", "dandruff flake", "dust bunny", "ball of dust", "ball of lint", "chunk of lint", "clump of hair", "fingernail", "finger nail", "fake nail", "bandaid", "sticking plaster", "bone", "chunk of glass", "piece of glass", "shard of glass", "glass shard", "wire", "bit of wire", "peanut shell", "nail", "fly", "plastic thing", "cobweb", "egg cluster", "egg sac", "nest of tiny bugs", "worm", "maggot", "spider", "insect", "bug", "roach", "cockroach", "locust", "dead rat", "tail", "severed finger"],
    "bigForeignObject": ["[whut:#big##foreignObject#]#whut.randomUpper(10)#", "#big##foreignObject.randomUpper(10)#"],
    "foreignObjectDiscovery": [
        "#genPerson##pName# found #bigForeignObject.a# in #pTheir# #productDesc#",
        "#genPerson##pName# bit into #bigForeignObject.a#",
        "#genPerson##pName# opened #productDesc.a# and there was #bigForeignObject.a# in it",
        "#genPerson##pName# swallowed a #foreignObject# because it was in #pTheir# #productDesc#",
        "#defaultPerson#found #bigForeignObject.a# in #pronoun# #productDesc#",
        "#defaultPerson#why is there #bigForeignObject.a# in #pronoun# #productDesc#",
        "#defaultPerson#why does #pronoun# #productDesc# have #bigForeignObject.a#",
        "#defaultPerson#there's #bigForeignObject.a# in #pronoun# #productDesc#",
        "#defaultPerson#there's literally #bigForeignObject.a# in #pronoun# #productDesc#",
        "#defaultPerson##pronoun# #productDesc# literally has #bigForeignObject.a# in it",
        "#defaultPerson#wondering why there's #bigForeignObject.a# in #pronoun# #productDesc#",
        "#defaultPerson##pName# was enjoying this #productDesc# until I found #bigForeignObject.a# in it",
        "#defaultPerson#wondering why #pronoun# #productDesc# has #bigForeignObject.a# in it",
        "#defaultPerson#can't believe there's #bigForeignObject.a# in #pronoun# #productDesc#",
        "#defaultPerson#can't believe #pronoun# #productDesc# has #bigForeignObject.a# in it",
        "#defaultPerson#no shit there is #bigForeignObject.a# in #pronoun# #productDesc#",
        "#defaultPerson#no fooling there is #bigForeignObject.a# in #pronoun# #productDesc#",
        "#defaultPerson#how come there's #bigForeignObject.a# in #pronoun# #productDesc#",    
        "#defaultPerson#explain why there's #bigForeignObject.a# in #pronoun# #productDesc#",
        "#defaultPerson#explain why #pronoun# #productDesc# has #bigForeignObject.a# in it",
        "#defaultPerson#is it normal for #productDesc.a# to have #bigForeignObject.a#",
        "#defaultPerson#do you make every #productDesc# with #bigForeignObject.a# in them",
    ], 
    "foreignMessage": [
        "[disco:#foreignObjectDiscovery#]#exclamation.randomUpper(30)# @#account# #disco#, #closingRemark.randomUpper(20)##coda#", 
        "[disco:#foreignObjectDiscovery#]@#account# #exclamation.randomUpper(30)# #disco#, #closingRemark##coda#", 
        "[disco:#foreignObjectDiscovery#]@#account# #exclamation.randomUpper(50)##exclaimed# #disco#, #closingRemark##coda#", 
        "[disco:#foreignObjectDiscovery#]#complainEmojiSeq# #closingRemark.randomUpper(30)# @#account# #disco##coda#",
        "[disco:#foreignObjectDiscovery#]#complainEmojiSeq# @#account# #disco#, #closingRemark.randomUpper(20)##coda#",
    ],
    "foreignLitigiousMessage": [
        "[disco:#foreignObjectDiscovery#]@#account# #exclamation.randomUpper(30)# #disco#, #litigiousRemark##coda#", 
        "[disco:#foreignObjectDiscovery#]@#account# #exclamation.randomUpper(50)##exclaimed# #disco#, #litigiousRemark##coda#", 
        "[disco:#foreignObjectDiscovery#]#complainEmojiSeq# @#account# #disco#, #litigiousRemark##coda#",
    ],

    
    // spoilage types
    "stench": [
        "rot", "mold", "moldy cheese", "bad cheese", "fungus", "rotten eggs", "expired mayonnaise", "ass", "the inside of my ass", "farts", "wet farts", "a bag of old farts", "urine", "piss", "cat piss", "pee", "pee pee", "wee", "turd", "shit", "poo", "poo poo", "dog turd", "bad diarrhoea", "sewage", "a sewerage plant", "a slaughterhouse floor", "an abbatoir", "expired milk", "sour milk", "rancid butter", "BO", "dumpster juice", "rotting garbage", "fetid garbage", "heated garbage", "compost", "fertilizer", "sun-roasted fertilizer", "medical waste", "a urinal cake", "a rendering plant", "rotting meat", "rancid meat", "a whale carcass on a hot day", "tanning waste", "chemicals", "bad chemicals", "acid", "oven cleaner", "cyanide"
    ],
    "spoiled": [
        "reeks of #stench#",
        "stinks of #stench#",
        "has a distinct aroma of #stench#",
        "smells like #stench#",
        "tastes like #stench#",
        "had a strong aftertaste of #stench#",
        "was all covered in powder",
        "was powdery and disgusting",
        "looked pretty gross",
        "smelled pretty rank",
        "was rotten",
        "was rancid",
        "clearly has spoiled",
        "has already gone bad"
    ],
    "spoilDiscovery": [
        "#genPerson##pName# bought a #productDesc# and it #spoiled#",
        "I opened up a #productDesc# and it #spoiled#",
        "how come this #productDesc# #spoiled#",
        "this #productDesc# #spoiled#",
        "sorry but this #productDesc# #spoiled#",
        "I purchased a #productDesc# and it #spoiled#",
        "got a #productDesc# and it #spoiled#",
    ],
    "spoilMessage": [
        "[disco:#spoilDiscovery#]@#account# #disco#",
        "[disco:#spoilDiscovery#]#sadEmojiSeq# @#account# #disco#",
        "[disco:#spoilDiscovery#]@#account# #sadness# #disco#",
        "[disco:#spoilDiscovery#]@#account# #sadness# #sadEmojiSeq# #disco#",
        "[disco:#spoilDiscovery#]#sadEmojiSeq# @#account# #sadness# #disco#",
        "[disco:#spoilDiscovery#]#sadEmojiSeq# @#account# #disco#, #sadness#",
        "[disco:#spoilDiscovery#]@#account# #disco# #sadEmojiSeq# #sadness#",
    ],

    // empty types
    "emptyVolume": [
        "empty",
        "empty",
        "empty",
        "empty",
        "maybe half empty",
        "maybe half empty",
        "mostly empty",
        "nearly empty",
        "just air",
        "mostly air",
        "full of air",
        "full of nothing",
        "full of sailboat fuel",
    ],
    "emptyDiscovery": [
        "#genPerson##pName# bought a #productDesc# and there was nothing inside the #package#",
        "#genPerson##pName# bought a #productDesc# and there was nothing in it",
        "#genPerson##pNameTheir# #productDesc# is #emptyVolume#",
        "#genPerson##pName# just opened a new #productDesc# and it was #emptyVolume#",
        "did someone at the factory get hungry? check out this #productDesc# that's #emptyVolume#",
        "how come there's no #productSingular# in this #package#",
        "is your new business model selling #package.s# that are #emptyVolume#",
        "I see you've just switched to making the #product# #package.s# #emptyVolume#",
        "trying to be cheap, my #productDesc# was #emptyVolume#",
        "which genius thought of making a #productDesc# that's #emptyVolume#",
        "thanks for forgetting the #productSingular# in this #package#",
        "you're right I really just wanted to eat #package.a#, don't bother including any #productSingular.s#",
        "you trolled me good by selling me this #package# that's #emptyVolume#"
    ],
    "emptyMessage": ["@#account# #emptyDiscovery#", "#sadEmojiSeq# @#account# #emptyDiscovery#", "@#account# #sadEmojiSeq# #emptyDiscovery#"],

    // misshapen types
    "shape": ["dead worm", "turd", "tumor", "blob", "mass", "morass", "lump", "brick", "clump", "slab", "chunk"],
    "misshapenDiscovery": [
        "when I opened this #productDesc# everything had solidified into a #shape# shape",
        "pretty sure that's the wrong shape for #productSingular.a#",
        "pretty sure this #productDesc# isn't meant to look like a congealed #shape#",
    ],
    
    "misshapenMessage": [
        "@#account# #misshapenDiscovery#", "#sadEmojiSeq# @#account# #misshapenDiscovery#", "@#account# #sadEmojiSeq# #misshapenDiscovery#"
    ],
   

    // side effects
    "sideEffectAdjective": [
        "awful", "burning", "debilitating", "explosive", "flagrant", "intense", "massive", "overwhelming", "profuse", "stabbing", "terrible", "the worst", "unbearable", "uncontrollable", "", "", "", "", "", "", "", "", "", ""
    ],
    "sideEffect": [
        "acne", "allergic reaction", "amnesia", "anemia", "asthma", "back pain", "bleeding gums", "bloodlust", "blurred vision", "bloody stool", "body odor", "breathing difficulty", "bruising", "chest pain", "cramping", "cysts", "chillblains", "cold flushes", "constipation", "cramps", "dandruff", "dehydration", "diarrhea", "eczema", "hair loss", "hallucinations", "headaches", "heart stoppage", "hives", "indigestion", "insomnia", "lesions", "incontinence", "itching", "joint pain", "loose bowels", "memory lapses", "migraines", "motion sickness", "mucous", "muscle pain", "nausea", "neck pain", "nightmares", "night terrors", "phlegm", "piles",  "priapism", "psychosis", "stomach ache", "sweating", "swelling", "tinnitus", "toothache", "twitching", "spasms", "vertigo", "vomiting", "weight gain",
    ],
    "sideEffectMessage": [
        "#ex_prod#@#account# ever since I started taking #product# I have experienced #sideEffectAdjective# #sideEffect#",
        "#ex_prod#has anyone else had #sideEffectAdjective# #sideEffect# after taking @#account# #product# or am I alone",
        "#ex_prod#thanks @#account# for years of #sideEffectAdjective# #sideEffect#",
        "#ex_prod#I keep having #sideEffectAdjective# #sideEffect#, maybe it's the @#account# #product#",
        "#ex_prod#@#account# I buy your product to treat #sideEffect#, not to give me #sideEffect#",
        "#ex_prod#maybe if I increase the dose of @#account# #product# enough the #sideEffectAdjective# #sideEffect# will stop",
        "#ex_prod#@#account# why should I keep taking your medication for #sideEffect#, I'm sick of the #sideEffectAdjective# #sideEffect#",
        "#ex_prod#@#account# [se_orig:#sideEffect#]before treatment I had #se_orig#, now I have #se_orig# and #sideEffectAdjective# #sideEffect#",
        "#ex_prod#@#account# how is #product# still allowed on the market when it's giving everyone #sideEffectAdjective# #sideEffect#",


    ],

    // experiences
    "experience": [
        "end of the day, time to kick back with some @#account# #productSingular.s#",
        "omg I left a @#account# #productDesc# in the fridge",
        "#genPartner##pName# must have left a @#account# #productDesc# lying around... #fanEmojiSeq#",
        "man I can never get enough @#account# #product#",
        "I seriously need more @#account# #product# in my life",
        "one @#account# #productDesc# left! past me you are a goddamn genius",
        "#genPartner#really hope #pName# doesn't disown me for eating the last @#account# #productDesc# #fanEmojiSeq#",
        "#genPartner##pName# should know better than to buy @#account# #product.s#! just wolfed the lot",
        "#genPartner#love is real #fanEmojiSeq# #pName# just gave me a @#account# #productDesc#",
        "dear @#account#, please send me as many free products as possible",
        "hey @#account# if I get a million RTs can I have free #product.s# for a year?",
        "hey @#account# if I marry you can I have free #product.s# for a year?",
        "this @#account# #productDesc# is too good for this world",
        "@#account# this is the best #productDesc# ever, I need more",
        "@#account# real talk did you put heroin in the #productSingular# recipe, because this is addictive af",
        "shoutout to @#account# to helping me stay motivated during finals week",
        "I'm trying to cut down on snacking at the office, god damn you @#account#",
        "@#account# thank you for creating the greatest snack food ever!",
        "@#account# just wanted to let you guys know you're doing an outstanding job",
        "@#account# you complete me",
        "I think if I could live off nothing but @#account# #product.s# I would",
        "I just invented a new diet, it's called the \"@#account# #product# and cheese\" diet. please buy my book",
        

    ],

    // advertising
    "advertising": [
        "#exclamation# @#account# it's been 5 days and I still have that damn jingle from the TV ads stuck in my head",
        "just letting you know @#account#, your ads are the worst",
        "please kill me so I never have to see another @#account# ad",
        "hey @#account# if I get your new logo tattooed can I have free #product.s# for a year?",
        "omg @#account# ad again!",
        "@#account# did you seriously pay off the whole internet to show your ad",
        "I hate this @#account# ad so much",
        "please stop showing me ads for @#account#, I hate #product#",
        "@#account# is there some amount of money I can pay to stop being spammed by ads for #productSingular.s#",
        "@#account# please fire your marketing department, you can do better",
    ],


    // pleading for drugs
    "sponsorshipMessage": [
        "#ex_prod#@#account# #genPerson##pName# needs #product# on compassionate grounds, please save #pThem#!!!",
        "#ex_prod#@#account# #genPerson#please I urgently need #product#, #pNameTheir# life depends on it",
        "#ex_prod#@#account# can #product# sponsor my fun-run"
    ],

    "genJob": [
        "[jobTitle:process engineer][jobField:process engineering]",
        "[jobTitle:chemical engineer][jobField:chemical engineering]",
        "[jobTitle:chemical biologist][jobField:chemical biology]",
        "[jobTitle:biologist][jobField:biology]",
        "[jobTitle:pharmacist][jobField:pharmacology]",
        "[jobTitle:pathologist][jobField:pathology]",
        "[jobTitle:toxicologist][jobField:toxicology]",
        "[jobTitle:product marketeer][jobField:product marketing]",
        "[jobTitle:plant operator][jobField:plant operator]",
        "[jobTitle:safety inspector][jobField:health and safety]",
        "[jobTitle:scientist][jobField:science]",
        "[jobTitle:alchemist][jobField:alchemy]",

    ],


    // asking about jobs
    "employmentMessage": [
        "@#account# do you have any openings for #jobTitle.s#?",
        "@#account# is it possible for me to do an unpaid #jobField# internship at your company during my gap year?",
        "@#account# are you accepting any graduate students for vacation work?",
        "@#account# are there any #jobField# graduate places left for this year?",
        "@#account# how can I apply for a #jobField# job?",
        "@#account# are there any #jobTitle# places available?",
        "@#account# I just graduated as a #jobTitle#, do you take students?",

    ],

    // confusing the product
    "abi_beaufort": [
        "@AlliedBrandsInc my kid is very sick thanks to your POISONED MILK"
    ],

    // product types
    "prod_chocolate": [
        "[product:candy bar][productSingular:chocolate][productDesc:candy bar][package:wrapper]", 
        "[product:choc bar][productSingular:chocolate][productDesc:choc bar][package:wrapper]", 
        "[product:choco bar][productSingular:chocolate][productDesc:choco bar][package:wrapper]", 
        "[product:chocolate bar][productSingular:chocolate][productDesc:chocolate bar][package:wrapper]", 
        "[product:chocolate bar][productSingular:chocolate][productDesc:🍫][package:wrapper]"
    ],
    "prod_pebbles": [
        "[product:fruit pebbles][productSingular:fruit pebble][productDesc:🍬][package:wrapper]", 
        "[product:fruit pebbles][productSingular:fruit pebble][productDesc:bag of fruit pebbles][package:wrapper]", 
        "[product:Fruit Pebbles][productSingular:Fruit Pebble][productDesc:bag of Fruit Pebbles][package:wrapper]", 
        "[product:fruit pebbles][productSingular:fruit pebble][productDesc:bag of 🍬s][package:wrapper]", 
        "[product:Fruit Pebbles][productSingular:Fruit Pebble][productDesc:Fruit Pebbles bag][package:wrapper]", 
        "[product:Fruit Pebbles][productSingular:Fruit Pebble][productDesc:pack of Fruit Pebbles][package:box]", 
        "[product:fruit pebbles][productSingular:fruit pebble][productDesc:pack of fruit pebbles][package:box]", 
        "[product:fruit pebbles][productSingular:fruit pebble][productDesc:pack of 🍬s][package:box]", 
        "[product:Fruit Pebbles][productSingular:Fruit Pebble][productDesc:Fruit Pebbles pack][package:box]", 
    ],
    "prod_caramel": [
        "[product:Caramellograms][productSingular:caramel][productDesc:bag of Caramellograms][package:wrapper]", 
        "[product:Caramellograms][productSingular:caramel][productDesc:box of Caramellograms][package:box]", 
    ],

    "prod_sheets": [
        "[product:fruit topsails][productSingular:sheet][productDesc:pack of fruit topsails][package:wrapper]",
        "[product:Fruit Topsails][productSingular:sheet][productDesc:pack of Fruit Topsails][package:wrapper]",
        "[product:Fruit Topsails][productSingular:sheet][productDesc:Fruit Topsails pack][package:wrapper]",
    ],
    "prod_poppers": [
        "[product:Salted Peanut Poppers][productSingular:popper][productDesc:bag of Salted Peanut Poppers][package:wrapper]",
        "[product:peanut poppers][productSingular:popper][productDesc:bag of peanut poppers][package:wrapper]",
    ],
    "prod_loaf": [
        "[product:Energy Loaf][productSingular:Loaf][productDesc:Energy Loaf][package:wrapper]",
        "[product:energy loaf][productSingular:loaf][productDesc:energy loaf][package:wrapper]",
    ],
    "prod_shaftoproxin": [
        "[product:Shaftoproxin][productSingular:capsule][productDesc:pack of Shaftoproxin][package:blister pack]",
    ],
    "prod_rejuvaplem": [
        "[product:Rejuvaplem][productSingular:cream][productDesc:tube of Rejuvaplem][package:tube]",
    ],
    "prod_recupremax": [
        "[product:Recupremax][productSingular:tablet][productDesc:pack of Recupremax][package:blister pack]",
    ],
    "prod_equestrinol": [
        "[product:Equestrinol][productSingular:suppository][productDesc:bottle of Equestrinol][package:bottle]"
    ],


    // crappy product weighting
    "ks_prod": ["#prod_chocolate#", "#prod_chocolate#", "#prod_chocolate#", "#prod_chocolate#", "#prod_chocolate#", "#prod_chocolate#", "#prod_chocolate#", 
                "#prod_pebbles#", "#prod_pebbles#", "#prod_pebbles#", 
                "#prod_caramel#", "#prod_caramel#", "#prod_caramel#",
    ],
    "cj_prod": ["#prod_sheets#","#prod_sheets#", 
                "#prod_poppers#", "#prod_poppers#", "#prod_poppers#", "#prod_poppers#",
                "#prod_loaf#", "#prod_loaf#", "#prod_loaf#", "#prod_loaf#",
    ],
    "ex_prod": [
        "#prod_shaftoproxin#", 
        "#prod_rejuvaplem#", "#prod_rejuvaplem#", "#prod_rejuvaplem#", "#prod_rejuvaplem#", 
        "#prod_recupremax#", "#prod_recupremax#", "#prod_recupremax#", "#prod_recupremax#",
        "#prod_equestrinol#", "#prod_equestrinol#",
    ],


    // happy tweet generators
    "ks_advertising": ["[account:KingsleySnacks]#ks_prod##advertising#"],
    "ks_experience": ["[account:KingsleySnacks]#ks_prod##experience#"],

    "cj_advertising": ["[account:CapnJackFoods]#cj_prod##advertising#"],
    "cj_experience": ["[account:CapnJackFoods]#cj_prod##experience#"],


    // furious tweet generators
    "ks_foreign": ["[account:KingsleySnacks]#ks_prod##foreignMessage#"],
    "ks_spoil": ["[account:KingsleySnacks]#ks_prod##spoilMessage#"],
    "ks_empty": ["[account:KingsleySnacks]#ks_prod##emptyMessage#"],
    "ks_misshapen": ["[account:KingsleySnacks]#ks_prod##misshapenMessage#"],
    "ks_foreign_lit": ["[account:KingsleySnacks]#ks_prod##foreignLitigiousMessage#"],


    "cj_foreign": ["[account:CapnJackFoods]#cj_prod##foreignMessage#"],
    "cj_spoil": ["[account:CapnJackFoods]#cj_prod##spoilMessage#"],
    "cj_empty": ["[account:CapnJackFoods]#cj_prod##emptyMessage#"],
    "cj_misshapen": ["[account:CapnJackFoods]#cj_prod##misshapenMessage#"],
    "cj_foreign_lit": ["[account:CapnJackFoods]#cj_prod##foreignLitigiousMessage#"],


    "ex_side_effect": ["[account:excelsior_rx]#sideEffectMessage#"],
    "ex_employment": ["[account:excelsior_rx]#genJob##employmentMessage#"],
    "ex_sponsorship": ["[account:excelsior_rx]#sponsorshipMessage#"],

    // soporific response generators
    "ks_feedback_reply": ["we're humbled to have a fan like you on Team Kingsley!"],
    "ks_issue_reply": ["Hi, we\'re sorry for your experience but thank you for letting us know, please call 570-330-3000 to discuss", "That doesn't sound right! Please call us on 570-330-3000 so we can make this right", "We're sorry to hear that you had this experience! Please call 570-330-3000 so we can resolve"],

    "cj_greeting": ["Ahoy there", "Avast there", "Aye", "Yo ho"],
    "cj_exclamation": ["Arrrrrr", "Shiver me timbers", "Blistering barnacles", "Cacchinating cockatoos", "Neptune's navel", "Sufferin' sailors"],

    "cj_feedback_reply": ["#cj_greeting#! Proud to be havin' ye aboard, matey", "#cj_greeting#! It be a real pleasure to have ye on board"],
    "cj_issue_reply": ["#cj_exclamation#! Very sorry ta be hearin' yer snack weren't ship-shape, please be callin' 570-330-3000 t' parley about it", "#cj_exclamation#! Please be diallin' 570-330-3000 so we can fix yer bad experience"],

    "ex_feedback_reply": ["Thanks for getting in touch! We will pass on your message."],
    "ex_issue_reply": ["Thanks for reaching out to us, it may be best to contact our support team on 570-330-3000. Best wishes."],
    "ex_drug": ["Ask your doctor about exciting new treatments for sudden onset kidney trauma"],

    "abi_feedback_reply": ["Thanks for your feedback! We will be sure to pass your words along to the appropriate team, have a great day!"],
    "abi_issue_reply": ["We're sorry to hear about that, please call us on 570-330-3000 so we can learn more"],
    "beaufort_reply": ["As of September ownership of Healthland Farms has transferred to Beaufort International, for customer service enquiries please contact @BeaufortIntl"],

    "generic_reply": ["I don't know if I can help you with that, sorry!"],

};
