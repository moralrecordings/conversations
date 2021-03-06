import moment from 'moment';

export default [
    // week 1 starting 20111031
    {   
        "visibleLevel": 0,
        "date": moment("20111025", "YYYYMMDD"),
        "sender": "EasyJob Careers",
        "senderMail": "alerts@easyjob",
        "recipient": "Me",
        "recipientMail": "againstpollution@ichiromail",
        "subject": "Position Match - Social Media Specialist",
        "content": `
            <h2>A job matching your alert criteria was recently posted on EasyJob!</h2>
            <div style="border-radius: 8px; border: 1px solid grey; padding-left: 1em; padding-right: 1em;">
                <p><span style="font-size: 1.5rem;">Social Media Specialist</span><br/><i>Allied Brands Inc.</i></p>
                <p>Allied Brands Inc. is a leading multinational consumer goods company headquartered in Scranton, PA. We specialise in foods, confectionary, cosmetics, pharmaceuticals, private-label goods and specialty products.</p>
                <p>Our marketing team is expanding, as part of a strategy to centralise the brand messaging from our diverse family of products. We need a quick-thinking and independent social media ninja to help drive customer engagement and brand awareness across our multiple North American and international businesses.</p>
                <h3>Required skills</h3>
                <ul>
                    <li>Previous experience in a digital marketing or PR environment</li>
                    <li>All-encompassing knowledge of social media platforms</li>
                    <li>An inherent understanding of popular-culture and current trends is a must</li>
                    <li>Strong literacy and copy writing skills</li>
                </ul>
                <p>This is a contract position, with a three-month internship period to provide on-the-job training and to confirm your efficacy for the role, and is a fantastic opportunity for a social media lover to advance their career!</p>
            </div>
            <h4>To apply for this job, visit EasyJob and sign into your account, then select it from the My Offers screen.</h4>
            <p><small>© 2011 EasyJob Ltd. This message was sent to againstpollution@ichiromail because you registered for job search notifications from EasyJob Careers.</small></p>
        `
    },
    {
        "visibleLevel": 0,
        "date": moment("20111031", "YYYYMMDD"),
        "sender": "Tricia Huxton",
        "senderMail": "tricia.huxton@alliedbrandsinc",
        "recipient": "PR - L1 New Starters",
        "recipientMail": "pr_l1new@alliedbrandsinc",
        "subject": "Orientation - READ THIS FIRST",
        "content": `
            <p>All,</p>
            <p>Welcome to the Allied Brands family! It's good to have you on board.</p>\n<p>If you aren't fully across them yet, now would be a good time to revisit the Corporate Mission Statement and Core Company Values. As a steward of Allied Brands Inc's social media presence, <b>you</b> are the company's public representative and a first point of contact for many of our customers.</p>
            <p>For your first week of on-the-job training you will be given access to one social media feed: the Kingsley® Snacks promotional account (<b>@KingsleySnacks</b>). Please engage with as many Kingsley® Snacks customers as possible; whether it be to refer them to our amazing customer service team, or just to compliment them on their great taste in treats!</p>
            <p>Some tips to help you get started:</p>
            <ul>
                <li>All interaction with customers is handled through our form-based ticketing system, Alwynsoft IssueMagic. Tickets in IssueMagic are drawn from a number of social media sources, including @ mentions, direct messages and mentions of specific keywords.</li>
                <li>When a ticket shows up in IssueMagic, click on the message to expand the answer form. Answering a ticket in IssueMagic will send a response back to the customer; it's easy as that!</li>
                <li>When preparing a response to a customer, it is important that it arrives to them from the <b>correct brand account</b>. You can change the active account using the button group on the right side of the IssueMagic interface.</li>
                <li>We wouldn't expect you to respond to every single query that arrives in on a given day. That said, the business has reasonable expectations for KPIs such as <b>resolution rate</b>. You can keep track of these metrics using the gauges on the left side of the IssueMagic interface.</li>
                <li>All responses you make to customer queries are verified by a supervisor before release. Any noted mistakes will be flagged with a <b>formal warning</b>, which you should review to help avoid future mistakes.</li>
                <li>Repeated warnings may result in performance management or disciplinary proceedings.</li>
            </ul>
            <p>That's about it, best of luck and have fun! Our customers really are the best. <span style="font-family: serif;">&nbsp;J</span></p>
            <p>(if you haven't yet signed and emailed back the Standard Work-For-Hire Contract and Standard Contractor Non-Disclosure Agreement, please do so ASAP as they are needed by payroll!)</p>
            <p><span style="color: darkblue; font-family: serif; line-height: 1em;">Kind regards,<br/><b>Tricia Huxton</b><br/>Public Relations Coordinator<br/><img src="`+ require('./logo.svg')+`"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 3519)<br/>Fax: 570-330-9000</span><br/><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
        `
    },

    // week 2 starting 20111107
    {
        "visibleLevel": 1,
        "date": moment("20111104", "YYYYMMDD"),
        "sender": "Nathaniel Hardcastle",
        "senderMail": "nathaniel.hardcastle@alliedbrandsinc",
        "recipient": "PR - All Users",
        "recipientMail": "pr_all@alliedbrandsinc",
        "subject": "URGENT - New business rule",
        "content": `
            <p>All,</p>
            <p>Following a "lessons learned" analysis of last month's surprise loss in court, Allied Brands is rolling out a sweeping change to our customer service procedures.</p>
            <p>In summary: a customer reported an unfortunate product-related incident to the company through social media. An official response was issued, but the support ticket was not escalated to the Customer Settlement Response team until 10 days later. By this time, other related externalities had convinced the customer to file suit against Allied Brands. We were unlucky that this individual was unusually well resourced to bring about a case.</p>
            <p>To prevent the same terrible confluence of events from happening again, we have added a new marker to the ticketing system. In future, please mark any messages wherein a customer makes specific legal demands/threats, or makes allegations of physical harm caused by an Allied Brands product, with the <b>"Litigious"</b> flag. These threads will be monitored by CSR for possible early settlement talks.</p>

            <p><span style="color: darkblue; font-family: serif; line-height: 1em;">Regards,<br/><br/><b>Nathaniel Hardcastle</b><br/>General Counsel - North America<br/><img src="`+ require('./logo.svg')+`"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 1778)<br/>Fax: 570-330-9000<br/></span></p>
            <p style="font-family: serif">This email (including any attachments) is confidential and intended for the named recipient(s) only. It may be subject to legal or other professional privilege and contain copyright material. Any confidentiality or privilege is not waived or lost because this email has been sent to you by mistake.</p>

            <p style="font-family: serif">Access to this email or its attachments by anyone else is unauthorised. If you are not the intended recipient, you may not disclose, copy or distribute this email or its attachments, nor take or omit to take any action in reliance on it. If you have received this email in error, please notify the sender immediately, delete it from your system and destroy any copies.</p>

            <p style="font-family: serif">We accept no liability for any loss or damage caused by this email or its attachments due to viruses, interference, interception, corruption or unauthorised access.</p>

            <p style="font-family: serif">Any views or opinions presented in this email or its attachments are solely those of the author and do not necessarily represent those of the company.</p>


        `
    },

    {
        "visibleLevel": 1,
        "date": moment("20111107", "YYYYMMDD"),
        "sender": "Tricia Huxton",
        "senderMail": "tricia.huxton@alliedbrandsinc",
        "recipient": "PR - L1",
        "recipientMail": "pr_l1@alliedbrandsinc",
        "subject": "New account - Cap'n Jack Food Holdings",
        "content": `
            <p>All,</p>
            <p>Allied Brands has finalized the acquisition of the Cap'n Jack family of snack foods, including Cap'n Jack's Salted Peanut Poppers, Cap'n Jack's Spliced Fruit Topsails, and Cap'n Jack's Fun-Size Energy Loaf. As part of the handover, the Cap'n Jack social media presence (<b>@CapnJackFoods</b>) has been added to your console, and the incoming feed adjusted to include mentions of Cap'n Jack products. Please engage with as many such customers as possible from the Cap'n Jack account.</p>
            <p><span style="color: darkblue; font-family: serif; line-height: 1em;">Kind regards,<br/><b>Tricia Huxton</b><br/>Public Relations Coordinator<br/><img src="`+ require('./logo.svg')+`"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 3519)<br/>Fax: 570-330-9000</span><br/><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
        `
    },

    // week 3 starting 20111114
    {
        "visibleLevel": 2,
        "date": moment("20111112", "YYYYMMDD"),
        "sender": "Andrea Lisbon",
        "senderMail": "starbodies@ichiromail",
        "recipient": "Me",
        "recipientMail": "againstpollution@ichiromail",
        "subject": "You're the new flack for Allied?",
        "content": `
            <p>Hi there,</p>

            <p>You probably don't know me, I used to be the social media manager for Allied Brands. Sorry for the unsolicited email, I got your contact info from a friend still working inside the Beast.</p>

            <p>Basically, in case you haven't picked up on it there's no long-term prospects for the job. Allied hired some teenage fucks from the Bay Area to "train" some neural AI thing with what you're doing, which they intend to set loose on the public again as soon as they figure out how to make it stop talking like a Nazi. You probably heard about the last time their social media account was all over the news? Yeah, that happened a few days after me and my co-workers got canned and replaced with version 1.</p>

            <p>What makes me fucking livid is this unpaid internship horseshit. Okay, the job wasn't great money, but it was at least a salary! I am 99% sure that their game plan is to ditch you at the end of the trial period and just churn people until they have enough data or whatever to switch CyberGoebbels back on. Obviously you're free to do as you wish, but I figure the least I can do is warn you about what's going on.</p>

            <p>Cheers,<br/>Andrea</p>
        `
    },
    {
        "visibleLevel": 2,
        "date": moment("20111114", "YYYYMMDD"),
        "sender": "Tricia Huxton",
        "senderMail": "tricia.huxton@alliedbrandsinc",
        "recipient": "PR - L1",
        "recipientMail": "pr_l1@alliedbrandsinc",
        "subject": "New account - Excelsior Pharmaceuticals",
        "content": `
            <p>All,</p>
            <p>As of today, the customer relations divison of Excelsior Pharmaceuticals has merged into the new central PR group. Excelsior is our primary mark for over-the-counter and prescription medications, and is one of the oldest businesses in the Allied Brands stable. Please join me in giving our new colleagues a warm welcome!</p>
            <p>As part of the restructuring, our team has taken custodianship of the Excelsior social media feeds. Please engage with as many customers as possible from the Excelsior Pharmaceuticals account (<b>@excelsior_rx</b>).</p>
            <p><span style="color: darkblue; font-family: serif; line-height: 1em;">Kind regards,<br/><b>Tricia Huxton</b><br/>Public Relations Coordinator<br/><img src="`+ require('./logo.svg')+`"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 3519)<br/>Fax: 570-330-9000</span><br/><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
        `
    },

    // week 4 starting 20111121
    {
        "visibleLevel": 3,
        "date": moment("20111117", "YYYYMMDD"),
        "sender": "Andrea Lisbon",
        "senderMail": "starbodies@ichiromail",
        "recipient": "Me",
        "recipientMail": "againstpollution@ichiromail",
        "subject": "Re: Re: So, you're the new flack for Allied?",
        "content": `
            <p>Heya,</p>

            <p>Thanks for replying back. I respect your decision, but I still think you're being played for a chump. Don't get me wrong, I do get that it's a really shit job market right now, but please promise me that you'll look for other positions. This isn't just me being bitter; Allied is seriously a <i>fucked up</i> place. The business is running at a loss, the leadership is an endless buck-passing circlejerk, and everyone is being pushed to cut corners. Oh and they're <i>big</i> fans of stack ranking, so if you've ever wanted to see a proper Stasi-grade culture of undermining and snitching... Jesus, they actually used the words "quash dissent" to justify cracking down on managers and quality control supervisors for doing their job! I can't make this shit up.</p>

            <p>But yes, lots of mistakes are being made and good people are being pressured to quit. I probably shouldn't go into old gossip, but like the old saying goes I do not use Allied Brands products, nor would I recommend them to anyone wishing to live to a ripe old age. Mark my words; one day there will be a big public scandal, and your job will become the equivalent of unclogging sewer pipes with your bare hands. I would not wish that horrorshow on anyone.</p>

            <p>Cheers,<br/>Andrea</p>
        `
    },

    {
        "visibleLevel": 3,
        "date": moment("20111121", "YYYYMMDD"),
        "sender": "Frank Billeton",
        "senderMail": "frank.billeton@alliedbrandsinc",
        "recipient": "PR - All Users",
        "recipientMail": "pr_all@alliedbrandsinc",
        "subject": "IMPORTANT - New campaign for Kingsley's Fruit Pebbles",
        "content": `

        <p>Hi all,</p>

        <p>As you're probably aware, we are launching a new marketing campaign for Kingsley's Fruit Pebbles this week. Those of you who were present at the full presentation on Friday should already be across it, but for those who were unable to make it I've nutshelled the main points for you below.</p>

        <p>In all honesty, it's no secret that the Fruit Pebbles line has been considered for discontinuation. The products have missed sales targets for the last 12 quarters, and customers have consistently reported that the brand is perceived as unexciting and old-fashioned.</p>
        <p>However, there has been a <b>surge</b> in web searches for Fruit Pebbles in the past month, due to misappropriation by certain political figures. Naturally, Allied PR has released a full statement condemning the use of our snack product as an abhorrent and factually incorrect metaphor for ethnic cleansing. But the renewed interest in the product is real; in the last few weeks unit sales have almost tripled!</p>
        <p>This boom will most likely be a temporary one if we leave it unaddressed, but we have a rare and ideal opportunity to pivot this underperforming brand and focus like a laser on the new and growing group of consumers making up the bulk of these sales. The demographic is predominantly male, middle-class, age 15-35, single, and interested in technology and video games.</p>
        <p>Now I know what you're thinking, and I promise you we are not going to fall into that 90s trope of "X-Treme"ifying everything!! This is 2011, and Fruit Pebbles are a mature product for mature consumers. It goes without saying that the advertising can and will be darker and more realistic compared to other campaigns.</p>
        <p>Of course, no advertising campaign is complete without a compelling original character, and no character is complete without an origin story. Sit back, relax, and enjoy this slice from the distant future...</p>

        <hr/>
        <p>They only called him in for the exceptional jobs. Once all other options have failed. Today was no different.</p>
        <p>Vice-Captain Ricardo Hull of the 3rd Interstellar Reconnaissance Company kicked open the hatch and dropped from the ventilation duct, the familiar smell of blood and charred human remains filling his nostrils. He knew better than to look among the bodies for familiar faces. They were all dead, and he'd soon join them if he got sympathetic now.</p>       
        <p>For a brief moment, there was silence. Ricardo crouched behind a recyc unit, the crawlspace illuminated only by the faint glow of his field-issue stim vaporiser <span style="color: red; background-color: yellow;">(CB: can we cross promote with e-cig? check with legal)</span>. The natives would arrive soon; unless he acted now hundreds of thousands of savage, bloodthirsty xenospawn would overrun the colony, and eventually the whole planet. This was humanity's last chance.</p>

        <p>Ricardo chuckled. If he had ten space credits for every time he heard that.</p>
        <p>No sooner had he attached the final plastic explosive charge to the main reactor, he heard the sound of approaching footsteps. Ricardo armed the detonators and hid behind a large supply crate; he hoped fervently it was just a couple of scouts and not a whole platoon.</p>
        
        <p>No luck. A patrol of seven xenospawn, armed with pulse rifles. Ricardo saw the bulbous ovipositors on each clawed hand and suppressed a shudder; he knew only too well that the highly parasitic xenospawn eggs would drain the life force out of any organic matter they touched. He had seen it with his own eyes; friends he had known since the academy, good friends who he had laughed and drank with. Reduced in under a minute to whithered dessicated husks.</p>

        <p>The patrol began their primitive sweep of the room. It wasn't long before one xenospawn discovered the explosives planted on the reactor and alerted the others. One reached for a comms unit to call for backup.</p>

        <p>Suddenly from the wings there came a bloodcurdling battle cry. It would be the last thing they would ever hear.</p>

        <p><i>"EAT IT, CUCKS!"</i></p>

        <p>The Flavor Grenade exploded, reducing three of the xenospawn to a fine mist. The survivors, dazed from the shock, dove for cover and opened fire in the direction of the remark.</p>

        <p>Maybe one day I'll meet some savages that won't fall for that old ventriloquism trick, Ricardo smugly thought. He bagged two headshots from his vantage point <i>behind</i> the direction of fire, before the remaining two xenospawn got wise and returned fire.</p>

        <p>Shots buzzed overhead as Ricardo hugged the low wall, calmly planning his next move. A few rounds ricocheted off the armored brim of his helmet; a gift from his late father. Rationally he knew this was a conflict zone and that battle damage was an inevidable risk, but his normally cool-headed demeanor soon gave way to a healthy thirst for vengeance.</p>
        
        <p>He hurled back a Fizzer Bomb, long since banned by the Mandelbrot Treaty on Neurotoxic Weapons. One terrified xenospawn was engulfed by a cloud of orange vapour, then hit the floor a few seconds later as the excruciating full body paralysis set in.</p> 
        
        <p>Ricardo made a mental note to come back to this xenospawn and stamp on every single one of their eggs in front of them. (The ultimate abhorrence to a xenospawn is the notion of their eggs being desecrated in any way.)</p>

        <p>One left. Ricardo peered around his cover and scanned the area with his weapon. No sign of the remaining goon. Something wasn't right.</p>

        <p>Click. Something cold and heavy jabbed Ricardo's head from behind. Ricardo sighed and dropped his gun. It was all over.</p>
        
        <p>Slumping on the floor in defeat, Ricardo gestured towards his Fruit Pebbles box on the ground; one last request before his execution by parasite. The xenospawn smiled a terrible smile. With hands still raised, Ricardo reached over for the box, removed a pebble and placed it between his teeth.</p>

        <p>A pebble with the emergency microswitch for the detonator.</p>
        
        <p>The shaped charge ripped through the xenospawn's midsection, leaving a pair of legs still standing like a grisly marionette. The upper half of the xenomorph landed at Ricardo's feet, face locked in a grimace halfway between terror and surprise.</p>

        <p>He finished the box; a reward for a job well done. Many men had fallen here today, but humanity had managed to save what was rightfully theirs.</p>

        <p>He let go a wry smile. Not <i>all</i> men.</p>


        <hr/>
        <p>As a limited edition tie-in to promote the character, Fruit Pebbles will be released in gunmetal grey with "future ammo box" style packaging. In your communications with Kingsley Snacks customers, be sure to work in a reference to the promotion and include the image attached below.</p>
        <p>I hope you will join me in welcoming Ricardo into our diverse lineup of brand mascots.</p>
        <p>#ricardolives</p>



<p><span style="color: darkblue; font-family: serif; line-height: 1em;">Thanks,<br/><br/><b>Frank Billeton</b><br/>Vice President - Marketing<br/><img src="`+ require('./logo.svg')+`"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 1517)<br/>Fax: 570-330-9000<br/></span><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
        
        `,
    },


    {
        "visibleLevel": 3,
        "date": moment("20111121", "YYYYMMDD"),
        "sender": "Roger Billeton",
        "senderMail": "roger.billeton@alliedbrandsinc",
        "recipient": "All Users",
        "recipientMail": "all@alliedbrandsinc",
        "recallAfter": 5000,
        "subject": "Re: FW: IMPORTANT - New campaign for Kingsley's Fruit Pebbles",
        "content": `
            <p>someone tell Kate's team they better get on Board with this shit if they want jobs after Christmas</p>

<p><span style="color: darkblue; font-family: serif; line-height: 1em;"><b>Roger Billeton</b><br/>&nbsp;Chief Executive Officer<br/><img src="`+ require('./logo.svg')+`"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 1119)<br/>Fax: 570-330-9000<br/></span></p>
            <p style="font-family: serif">This email (including any attachments) is confidential and intended for the named recipient(s) only. It may be subject to legal or other professional privilege and contain copyright material. Any confidentiality or privilege is not waived or lost because this email has been sent to you by mistake.</p>
        `,
    },



    // week 5 starting 20111128
    {
        "visibleLevel": 4,
        "date": moment("20111124", "YYYYMMDD"),
        "sender": "MediaMunch Alerts",
        "senderMail": "alerts@mediamunch",
        "recipient": "Me",
        "recipientMail": "againstpollution@ichiromail",
        "subject": "New Article: Beaufort issues nationwide recall amid tainted milk scandal",
        "content": `
            <p style="font-size: 1.5rem;">News alerts for "allied brands":</p>
            <div style="border-radius: 8px; border: 1px solid grey; padding-left: 1em; padding-right: 1em;">
                <h2 style="margin-bottom: 0;">Beaufort issues nationwide recall amid tainted milk scandal</h2>
                <p style="font-variant: small-caps">Peter Thorsten in Chicago</p>

                <p>Beaufort North America LLC. (NASDAQ: BEAU) has issued an immediate nationwide recall for all Healthland Farms branded milk products, following reports of children suffering from impaired kidney functionality.</p>
                <p>Since Wednesday, there has been a spike in diagnosed cases of sudden-onset kidney trauma; an uncommon renal disorder affecting pre-teen children. The vast majority of these cases have been traced back to the consumption of Healthland Farms Low-Fat Chocolate Milk; a flavoured milk drink produced by Beaufort and supplied to the National School Lunch Program. While FDA inspectors have not yet publicly identified the root cause, unconfirmed reports suggest that several batches of the milk were tainted by a melamine-like additive to boost the apparent protein content.</p>
                <p>A spokesperson for Beaufort stated that the nationwide recall was a necessary safety precaution, the company was "shocked and dismayed at this unforeseeable turn of events", and that the investigation into the incident was still ongoing. Customers who believe they are affected by the recall are urged not to consume the product and to get in contact with Beaufort immediately.</p>
                <p>The market response to the scandal has been severe, with Beaufort stock down $3.50 to $9.02.</p>
                <p>In September, Beaufort finalized their acquisition of several product lines from Pennsylvania-based conglomerate Allied Brands Inc. (NASDAQ: ALLB), including Healthland Farms. At the time, the milk product business was considered healthy and no concerns were raised, aside from a lone investor demanding a higher premium on the market price. A source inside Beaufort, who asked not to be identified, said that the investigation had unearthed possible links to members of Allied Brands senior management.<p>
                <p>A spokesperson for Allied Brands Inc. declined to comment, citing the complete divestment of the Healthland Farms product line. The Allied stock price suffered some early losses when news of the scandal broke on Wednesday, but has since rallied to be slightly ahead by close of trading.</p>
            </div>
            <p style="text-align: center;"><small>© 2011 MediaMunch Holdings.<br/>To adjust your notification preferences, visit the website.</small></p>

        `
    },

    {
        "visibleLevel": 4,
        "date": moment("20111124", "YYYYMMDD"),
        "sender": "Andrea Lisbon",
        "senderMail": "starbodies@ichiromail",
        "recipient": "Me",
        "recipientMail": "againstpollution@ichiromail",
        "subject": "I am shocked, -shocked-",
        "content": `
            <p>Heya,</p>
            
            <p>Gosh, would you look at what's on the front page of almost EVERY paper! Some free advice; don't trust any line from the executive level, they are scum. They are all scum.</p>

            <p>Cheers,<br/>Andrea</p>
        `
    },

    {
        "visibleLevel": 4,
        "date": moment("20111128", "YYYYMMDD"),
        "sender": "Cody Briggs",
        "senderMail": "cody.briggs@alliedbrandsinc",
        "recipient": "PR - L1",
        "recipientMail": "pr_l1@alliedbrandsinc",
        "subject": "Response to Healthland Farms milk scandal",
        "content": `
        <p>All,</p>
        <p>As you have probably heard, there has been an unfortunate incident attributed to a contaminated batch of Healthland Farms milk, involving a small number of customers falling seriously ill. As of last September, Allied Brands Inc. is no longer involved with the production, marketing or distribution of Healthland Farms milk products, with all assets and staff transferred to Beaufort International. Nonetheless, our thoughts and prayers are with those affected by the tainted products and their families.</p>
        <p>As the transfer of ownership is quite recent, there is still a strong association in the minds of consumers between Healthland Farms and Allied Brands. It is <i>vital</i> that we move quickly to dispel this confusion. For any customers that contact the company regarding Healthland Farms, please inform them of the change of ownership and direct them to Beaufort International's social media presence (<b>@BeaufortIntl</b>).</p>
            <p><span style="color: darkblue; font-family: serif; line-height: 1em;">Regards,<br/><b>Cody Briggs</b><br/>Chief Media Officer<br/><img src="`+ require('./logo.svg')+`"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 4816)<br/>Fax: 570-330-9000</span><br/><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
        `
    },


    // week 6 starting 20111205
    {
        "visibleLevel": 5,
        "date": moment("20111202", "YYYYMMDD"),
        "sender": "Andrea Lisbon",
        "senderMail": "starbodies@ichiromail",
        "recipient": "Me",
        "recipientMail": "againstpollution@ichiromail",

        "subject": "Re: Fwd: IMPORTANT - New campaign for Kingsley's Fruit Pebbles",
        "content": `
            <p>Oh my god I'm dying. That's just fantastic. And the promotion lasted a whole three days???</p>

            <p>I am so happy they let Golden Boy have full creative control over another campaign. If you're ever in Jersey City, pick up the tab and I'll tell you alllll about the last time that happened. No spoilers, but it was officially the most expensive campaign in company history.</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p><small>Okay one spoiler; three people nearly asphyxiated</small></p>
        `
    },
    {
        "visibleLevel": 5,
        "date": moment("20111205", "YYYYMMDD"),
        "sender": "Tricia Huxton",
        "senderMail": "tricia.huxton@alliedbrandsinc",
        "recipient": "PR - L1",
        "recipientMail": "pr_l1@alliedbrandsinc",
        "subject": "Good news story - relaunch of Shaftoproxin®",
        "content": `
            <p>Hi team,</p>
            <p>There's been some good news from our medical products division Excelsior Pharmaceuticals. Shaftoproxin® is a pharmaceutical originally developed in 1973 as a treatment for boatswain's disease, but today is more commonly prescribed for treating stump rash and night prowls. Thanks to some diligent work by our excellent pathology team, Shaftoproxin® has proven effective in relieving the symptoms of sudden onset kidney trauma, and as the product has existing FDA approval, Excelsior is first to market with such a treatment.</p>
            <p>In order to best engage customers and medical professionals about the benefits of Shaftoproxin®, Excelsior plans to launch an awareness campaign along with updated product packaging and marketing materials. This will precede a wider rollout to pharmacies across the country to meet anticipated demand. </p>
            <p>As part of this push, the incoming feed will now include messages from prospective customers who have posted about sudden onset kidney trauma. Please note that this treatment is still an off-label use of the drug, so from a legal standpoint it is crucial that we do <b>not</b> directly advocate people buy Shaftoproxin®. Instead, please encourage as many prospective customers as possible to <b>ask their doctor or healthcare provider</b> about <b>exciting new treatments</b> for sudden onset kidney trauma, from the Excelsior Pharmaceuticals (<b>@excelsior_rx</b>) account. </p>

            <p><span style="color: darkblue; font-family: serif; line-height: 1em;">Kind regards,<br/><b>Tricia Huxton</b><br/>Public Relations Coordinator<br/><img src="`+ require('./logo.svg')+`"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 3519)<br/>Fax: 570-330-9000</span><br/><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
        `
    },

    // week 7 starting 20111212

    {
        "visibleLevel": 6,
        "date": moment("20111209", "YYYYMMDD"),
        "sender": "Cody Briggs",
        "senderMail": "cody.briggs@alliedbrandsinc",
        "recipient": "PR - L1",
        "recipientMail": "pr_l1@alliedbrandsinc",
        "subject": "CONFIDENTIAL - Talking points for Shaftoproxin® product refresh",
        "content": `
        <p>All,</p>
        <p>You may have seen some negative reports in the media concerning Excelsior Pharmaceuticals and the recent changes to the Shaftoproxin® product line. At this time of increased scrutiny it is of utmost importance that we remain on-message and correct any sensationalist misconceptions made in the tabloid press. For your reference, here are the current approved set of talking points regarding Shaftoproxin®:</p>
        <p><b>Why has the price of the product changed?</b></br>
        The prices of all Excelsior Pharmaceuticals products have changed over time to better reflect important features and the value the product provides.</p>
        <p><b>How come the price of the drug in America is different compared to other countries?</b><br/>Since acquiring the Shaftoproxin® product line, we have worked diligently and invested significantly to enhance Shaftoproxin® and make it more available. We continue to invest in product improvements, such as a formulation with a longer shelf life that would extend the period between refills.</p>
        <p><b>The new price is too expensive.</b><br/>A drug's list price is not the primary factor in determining patient affordability and access. A reduction in the list price of Shaftoproxin® would not translate into a benefit for patients. We are working with hospitals and healthcare providers to get every patient covered, including free-of-charge options for uninsured patients and co-payment assistance programs.</p>
        <p><b>Your company is denying sick people access to vital medicine.</b><br/>Our priority continues to be supporting our healthcare providers and ensuring their patients who need Shaftoproxin® have ready and affordable access to it. We pledge that no patient needing Shaftoproxin® will ever be denied access.</p>
        <p><b>Your company is gouging customers with this new price.</b><br/>For sudden onset kidney trauma and other critical, under-treated diseases, the status quo is not an option. Excelsior hopes to change that by targeting investments that both improve on the current formulation and seek to develop new therapeutics with better clinical profiles that we hope will help eradicate the disease.</p>

            <p><span style="color: darkblue; font-family: serif; line-height: 1em;">Regards,<br/><b>Cody Briggs</b><br/>Chief Media Officer<br/><img src="`+ require('./logo.svg')+`"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 4816)<br/>Fax: 570-330-9000</span><br/><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
        `
    },




    // week 8 starting 20111219
    {
        "visibleLevel": 7,
        "date": moment("20111215"),
        "sender": "Richard Hull",
        "senderMail": "richard.hull@alliedbrandsinc",
        "recipient": "PR - All Users",
        "recipientMail": "pr_all@alliedbrandsinc",
        "subject": "Exciting Kingsley Christmas cross-promotion",
        "content": `
            <p>Hi guys,</p>

            <p>Christmas is nearly here, and it's freezing outside. So why not spice things up in the bedroom... with Kingsley Snacks?</p>
            
            <p>You heard that right. For the first time, stablemates Kingsley Snacks and Proflexia Lifestyle Products have teamed up to deliver the ultimate festive pairing; </p>
            
            <p>Hashtag #hotforchristmas.</p>
                
             <p><span style="color: darkblue; font-family: serif; line-height: 1em;">Peace,<br/><b>Richard Hull</b><br/>Public Relations Officer<br/><img src="`+ require('./logo.svg')+`"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 4816)<br/>Fax: 570-330-9000</span><br/><br/>
        `
    },
    {
        "visibleLevel": 7,
        "date": moment("20111215"),
        "sender": "Andrea Lisbon",
        "senderMail": "starbodies@ichiromail",
        "recipient": "Me",
        "recipientMail": "againstpollution@ichiromail",
        "subject": "Re: FW: Exciting Kingsley Christmas cross-promotion",
        "content": `
            <p></p>
        `
    },

    {
        "visibleLevel": 7,
        "date": moment("20111219", "YYYYMMDD"),
        "sender": "Nathaniel Hardcastle",
        "senderMail": "nathaniel.hardcastle@alliedbrandsinc",
        "recipient": "PR - All Users",
        "recipientMail": "pr_all@alliedbrandsinc",
        "subject": "URGENT - Policy change",
        "content": `
            <p>All,</p>
            
            <p>It has come to the attention of Legal that a small number of Excelsior Pharmaceuticals customers are expressing despair at a perceived inability to procure our products for themselves or their loved ones. Without question, the welfare of our customers should come first and foremost in everything we do, and the upcoming Christmas holiday period is an especially vulnerable time for people barely making ends meet. As good corporate citizens and as Americans, we have a duty to look beyond what is best for our image or bottom line and provide help to those who need it the most. It is time for us to open our moral compass and chart a new, righteous course.</p>

            <p>For any customer you would identify as "<b>at-risk</b>", please refer them to the National Suicide Prevention Lifeline for assistance. This should be done from the Allied Brands Inc. corporate account (<b>@alliedbrandsinc</b>) ONLY, so as not to conflate this serious issue with the light-hearted tone used for advertising/social media outreach by the individual brands. To fulfil our liability waiver obligations under state law, please ensure you reply <b>within 20 seconds</b> of receiving the customer communication.</p>

            <p><span style="color: darkblue; font-family: serif; line-height: 1em;">Regards,<br/><br/><b>Nathaniel Hardcastle</b><br/>General Counsel - North America<br/><img src="`+ require('./logo.svg')+`"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 1778)<br/>Fax: 570-330-9000<br/></span></p>
            <p style="font-family: serif">This email (including any attachments) is confidential and intended for the named recipient(s) only. It may be subject to legal or other professional privilege and contain copyright material. Any confidentiality or privilege is not waived or lost because this email has been sent to you by mistake.</p>

            <p style="font-family: serif">Access to this email or its attachments by anyone else is unauthorised. If you are not the intended recipient, you may not disclose, copy or distribute this email or its attachments, nor take or omit to take any action in reliance on it. If you have received this email in error, please notify the sender immediately, delete it from your system and destroy any copies.</p>

            <p style="font-family: serif">We accept no liability for any loss or damage caused by this email or its attachments due to viruses, interference, interception, corruption or unauthorised access.</p>

            <p style="font-family: serif">Any views or opinions presented in this email or its attachments are solely those of the author and do not necessarily represent those of the company.</p>


        `
    },
    // week 9 starting 20111226
    {
        "visibleLevel": 8,
        "date": moment("20111222", "YYYYMMDD"),
        "sender": "MediaMunch Alerts",
        "senderMail": "alerts@mediamunch",
        "recipient": "Me",
        "recipientMail": "againstpollution@ichiromail",
        "subject": "New Article: Allied Brands fires employee who was target of harassment campaign",
        "content": `
            <p style="font-size: 1.5rem;">News alerts for "allied brands":</p>
            <div style="border-radius: 8px; border: 1px solid grey; padding-left: 1em; padding-right: 1em;">
                <h2 style="margin-bottom: 0;">Allied Brands fires employee who was target of harassment campaign</h2>
                <p style="font-variant: small-caps">Francisco Muëller in Pittsburgh</p>
                <p style="font-variant: small-caps">Ill Media Network</p>



    
                <p>Yesterday, Huxton posted a short statement on her personal social media feeds saying she had been fired from her position at Allied Brands, accusing the company of doing so to "draw away some unwanted heat". The company is still dealing with the fallout of the Healthland Farms milk scandal, which has escalated into one of the worst food safety incidents in the history of the United States.</p>

                <p>Huxton, an avid writer, has been the subject of a sustained campaign of harassment for the past month, including death threats, widespread sharing of her phone number and home address, and numerous attempts to smear her reputation. The harassment originated as an anonymous message board post accusing her of axing the "Ricardo Lives" promotion for Kingsley Fruit Pebbles; an advertising campaign targeting gamers. (The campaign was pulled after widespread criticism and mockery on social media.) In the wake of the Healthland Farms scandal, these unsubstantiated claims swiftly pivoted to accusing her of poisoning children. According to Huxton, every aspect of her online life had been examined for dirt, including her sideline in writing commissions (which she penned under a pseudonym); ringleaders would construct elaborate "dossiers" with cherry-picked and contextless quotes and encourage people to send complaints en-masse to Allied Brands' customer service channels.</p>
                
                <p>An official statement from an Allied Brands' spokesperson claimed that the firing was due to holding a second job in breach of company policy.</p>
                
                <p>"Tricia Huxton was terminated due to violation of an internal company policy involving holding a second job in conflict with Allied Brands' corporate culture. Though Ms. Huxton's termination follows her being the subject of criticism from certain groups via social media some weeks ago, the two are absolutely not related. Allied Brands is a company committed to fostering inclusion and diversity in both our company and the broader consumer products space and we firmly reject the harassment of individuals based on gender, race or personal beliefs. We wish Ms. Huxton well in her future endeavors."</p>
                
                

            </div>
            <p style="text-align: center;"><small>© 2011 MediaMunch Holdings.<br/>To adjust your notification preferences, visit the website.</small></p>

        `
    },
    {
        "visibleLevel": 8,
        "date": moment("20111223", "YYYYMMDD"),
        "sender": "Andrea Lisbon",
        "senderMail": "starbodies@ichiromail",
        "recipient": "Me",
        "recipientMail": "againstpollution@ichiromail",
        "subject": "I am furious",
        "content": `
            <p>You know, looking back on it Tricia was probably the best boss I ever had? She made sure her reports had what they needed to work, she protected them from most of the infighting, and even on the worst days? When the business was in the toilet? She gave that job everything.</p>
            <p>She fucking deserved fucking better than to be hurled under a bus by that spineless, chickenshit, traitorous, incompetent, oxygen-thief Judas of a CMO too busy running scared from a self-appointed peepants internet detective squad to stand up for someone who's had his back from day fucking one. And for what? To dodge some bad press???</p>
            <p>I am shaking with rage. <b style="font-size: 200%;">SHE DID NOTHING WRONG AND THEY THREW HER TO THE WOLVES</b></p>
            <p></p>
            <p>I don't know what to tell you. I mean I appreciate being filled in from the frontlines, but really think <i>hard</i> about what you're enabling</p>
        `
    },

    {
        "visibleLevel": 8,
        "date": moment("20111223", "YYYYMMDD"),
        "sender": "Cody Briggs",
        "senderMail": "cody.briggs@alliedbrandsinc",
        "recipient": "PR - All Users",
        "recipientMail": "pr_all@alliedbrandsinc",
        "subject": "URGENT - Lockdown on Excelsior communications",
        "content": `
            <p>All,</p>
            
			<p>Allied Brands has retained the services of a reknowned reputation management firm, Sigrid-Blumenthal LLC, to address the small-but-vocal pocket of consumer animosity towards Excelsior Pharmaceuticals currently playing out in the media. As part of the process of brand repair, this week there is to be a <b>complete lockdown</b> on communications to the press and social media channels, to allow the story to cool down and give the consultants time to remove material which could be seen as objectionable in the current context.</p>
			
			<p>By order of the CEO, <b>under no circumstances should the @excelsior_rx account be used</b> during the next seven days. Any employee who breaches this rule will leave us no option but to recommend their <b>immediate termination</b>.</p>

			<p>Best wishes for the holiday season.</p>

            <p><span style="color: darkblue; font-family: serif; line-height: 1em;">Regards,<br/><b>Cody Briggs</b><br/>Chief Media Officer<br/><img src="`+ require('./logo.svg')+`"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 4816)<br/>Fax: 570-330-9000</span><br/><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
		`
    },

    // week 10 starting 20120102
    {
        "visibleLevel": 9,
        "date": moment("20111230", "YYYYMMDD"),
        "sender": "MediaMunch Alerts",
        "senderMail": "alerts@mediamunch",
        "recipient": "Me",
        "recipientMail": "againstpollution@ichiromail",
        "subject": "New Article: EXCLUSIVE: Allied Brands Inc. sues Healthland victims for defamation after failed settlement talks",
        "content": `
            <p style="font-size: 1.5rem;">News alerts for "allied brands":</p>
            <div style="border-radius: 8px; border: 1px solid grey; padding-left: 1em; padding-right: 1em;">
                <h2 style="margin-bottom: 0;">EXCLUSIVE: Allied Brands Inc. sues Healthland victims for defamation after failed settlement talks</h2>
                <p style="font-variant: small-caps">Peyton Hammersmith</p>
                <p style="font-variant: small-caps">Roxborough Daily</p>

                <p>Embattled conglomerate Allied Brands Inc. today filed a defamation lawsuit against a group of parents who have publicly accused the company of causing the Healthland Farms milk crisis, following failed attempts to secretly buy their silence.</p>

                <p>The Coalition Of Families Affected By Sudden Onset Kidney Trauma (COFABS) is a support network formed by the parents of children poisoned by an adulterated batch of Healthland Farms Low-Fat Chocolate milk in November of 2011. COFABS have been vocal in their disapproval of Allied Brands' response to the scandal, which has largely been to shift the blame to Healthland's new owners Beaufort International. (The Healthland Farms business was sold three months before the scandal went public.)</p>

                <p>In a press release, Allied Brands general counsel Nathaniel Hardcastle made the following statement: "The emotionally-charged nature of the Healthland Farms incident does not license this group to make knowingly false or inaccurate statements about Allied Brands Inc. or its products. Allied Brands Inc. initiated this lawsuit because, despite repeated efforts by Allied Brands Inc. to engage in a constructive dialogue with the group, they persisted in making false accusations that they knew to be untrue. This action is intended to prevent the further repetition of those statements."</p>

                <p>In an astonishing development, email exchanges seen by Roxborough Daily show that a high-ranking official at Allied Brands, vice-president of logistics Donald Banyon, had obtained the confidential medical records of at least one member of COFABS. The circumstances under which Banyon acquired the documents, whether he was directed to do so or acted on his own volition, and the extent that the documents have been distributed within Allied Brands, are all unclear. When asked about his standing this morning, a spokesperson for Allied Brands stated that Banyon was still working for the company. Further queries made as the story was developing were returned with no further comment.</p>
                
                <p>Roxborough Daily can exclusively reveal that prior to today's announcement, several members of COFABS had been offered cash settlements from Allied Brands, in return for a laundry list of legal concessions. These included full indemnity, an agreed limit of liability of $1, a blanket non-disparagement agreement against the company for this and any future food safety incidents, and a perpetual covenant not to sue. The settlement group included the person whose medical records had been obtained by Banyon.</p>
 
                <p>"The settlement amount on offer was frankly an insult", said a source familiar with the negotiations. "For a family without insurance, $56,000 is chump change when you're looking at years of expensive tests and medication. The whole thing is a heartless attempt to wedge low-income families desperate to pay for their child's treatment."</p>

                <p>Only two families so far have accepted the terms of the settlement. The remainder are considering their options.</p>
                
                <p>Yesterday, Healthland Farms director David Praxis was arrested for multiple offences under US public health ordinances, along with a number of employees. The initial investigation report into the incident is due to be published next week.</p>


            </div>
            <p style="text-align: center;"><small>© 2011 MediaMunch Holdings.<br/>To adjust your notification preferences, visit the website.</small></p>

        `

    },
    
    
    // week 11 starting 20120109
    {
        "visibleLevel": 10,
        "date": moment("20120109", "YYYYMMDD"),
        "sender": "MediaMunch Alerts",
        "senderMail": "alerts@mediamunch",
        "recipient": "Me",
        "recipientMail": "againstpollution@ichiromail",
        "subject": "New Article: Revealed - the machinations behind the Healthland Farms milk crisis",
        "content": `
            <p style="font-size: 1.5rem;">News alerts for "allied brands":</p>
            <div style="border-radius: 8px; border: 1px solid grey; padding-left: 1em; padding-right: 1em;">
                <h2 style="margin-bottom: 0;">Revealed - the machinations behind the Healthland Farms milk crisis</h2>
                <p style="font-variant: small-caps">Robert Xam in Chicago</p>
                <p style="font-variant: small-caps">Ill Media Network</p>
                
                <p>The Healthland Farms milk scandal has left 85 people hospitalised with life-threatening renal disorders, and created an unprecedented crisis of confidence over the U.S. Government's commitments to child welfare and food safety. But not only did this contamination turn out to be a deliberate act, the number of affected people could be far larger than previously anticipated.</p>
    
                <p>Following the release of the official investigation report last Friday, documents and email exchanges obtained by Ill Media finally reveal the full chain of events leading up to the worst food safety incident in American history.</p>

                <p>Contrary to the name, Healthland Farms is not a dairy supplier, but a refiner. Their business model is creating processed milk drinks; namely, combining milk from a supplier with a number of additives and flavoring agents then packaging the beverage for distribution. Healthland Farms has a number of purchasing contracts it must fulfil; essentially, agreements the company has entered into to provide a quantity of product for a specific length of time at agreed-upon pricing.</p>

                <p>According to investigators, in November of 2009 Healthland Farms signed a 3-year fixed price contract with the U.S. Department of Agriculture to provide processed milk drinks to the National School Lunch Program. Emails from inside the company show that the deal was celebrated at the time, as the costing was based on an unprecedented momentary spike in the milk price, with all projections showing the market to stabilise and return to normal within a few months. The perceived returns were great enough that the company willingly conceded clauses allowing for periodic corrections based on the market price.</p>

                <p>Unfortunately for Healthland Farms, the momentary spike turned out to be the start of a long-term pattern. As the Global Financial Crisis began to ease, speculators piled into the Class III Milk futures market, driving up demand and creating a shortage. Within a year, businesses which relied on a steady stream of bulk milk had to pay double the price, sometimes more just to guarantee supply. Most simply passed this additional cost onto customers, but Healthland Farms was now contractually bound to sell the majority of its product to the USDA at an eye-watering loss.</p>

                <p>In September of 2011, parent company Allied Brands sold the entire Healthland Farms business to competitor Beaufort International, including staff lead by director David Praxis. In the year leading up to the sale, Praxis was under intense pressure to meet an escalating series of financial targets from Allied Brands CEO Roger Billeton, who proved wholly unsympathetic to Healthland Farms' failed attempts at shorting the milk market.</p>

                <p>Healthland Farms was trapped in a crisis of its own making. The fat margins it sought were long gone, and fulfilling the entire USDA procurement contract at the current prices ran the risk of bankrupting the business. So what were they to do?</p>

                <p>According to investigators, a small group of individuals (lead by Praxis) hatched an audacious plan to continue selling processed milk drinks, but with less milk. The plan hinged on cheating the USDA's mandatory compliance testing; specifically the nitrogen level check (a common indicator for protein content), and the tests for common food adulterants.</p>

                <p>In an off-the-books transaction, Healthland Farms employed a Chinese chemical supplier to produce a custom nitrogen-rich compound referred to in the report as "NH53C". Healthland received several shipments of this compound, with customs paperwork and container markings referring to it as "powdered sodium carbonate". NH53C is chemically similar to melamine, and was designed specifically to pass the previous-generation adulterant checks used by the USDA. (The USDA confirmed that in the wake of the Healthland Farms incident they are moving to a new testing regimen). Next, a number of flow-meters in the processing train used for the USDA contract were recalibrated with an incorrect bias, reducing the proportion of milk used in each batch without affecting the monitoring figures. Finally, the correct proportion of NH53C was introduced during the thickening stage by a plant operator who was party to the scheme.</p>

                <p>Incredibly, this ramshackle process did not backfire until the events of November 2011, where thousands of children fell ill from drinking Healthland Farms milk. Investigators concluded that on this occasion the compound was added too late during the thickening process, leading to an uneven distribution in the cartons shipped out to schools. </p>

                <p>Praxis and 5 other individuals at Healthland Farms have been arrested and charged, with a hearing set for early February. Beaufort International CEO Marina Chelworth has resigned, and the future of the company is uncertain due to pending litigation. As for Allied Brands, the Securities and Exchange Commission has charged CFO Kenneth Shanks and two other individuals with materially overstating the value of Healthland Farms, which is expected to be settled later this month. In a related incident, Vice-president of logistics Donald Banyon was fired soon after a story broke alleging he obtained the private medical records of a victim.</p>
 
                <p>But despite widespread public outrage and shareholder discontent, Allied Brands CEO Roger Billeton stubbornly remains in his position. A letter from his personal lawyer to Ill Media made it clear that investigators found no evidence senior management at Allied Brands was aware of what was taking place at Healthland Farms, to meet financial targets or otherwise. With an emergency board meeting scheduled for next week, the watertightness of that argument is about to be put to the test.</p>

                <p>Ultimately the findings of the investigation have thrown the door open to thousands more potential litigants, including anyone who drank the affected USDA batches in the last 7 months. We can expect more class action suits to be filed against Allied Brands and the USDA; and you can be sure Allied will continue doing whatever it takes to keep this case out of a courtroom.</p>

            </div>
            <p style="text-align: center;"><small>© 2012 MediaMunch Holdings.<br/>To adjust your notification preferences, visit the website.</small></p>

        `

    },
    {
        "visibleLevel": 10,
        "date": moment("20120109", "YYYYMMDD"),
        "sender": "Payroll A-M",
        "senderMail": "payroll.a-m@alliedbrandsinc",
        "recipient": "PR - All Users",
        "recipientMail": "pr_all@alliedbrandsinc",
        "subject": "Successful job application",
        "content": `
            <p>Hi,</p>
          
            <p>We are pleased to inform you that your application for the following position has been successful:</p>

            <p style="font-size: 110%; font-family: serif; font-weight: bold; font-style: italic;">&nbsp;&nbsp;115368 CUSTOMER SERVICE OFFICER, L2 (12MO) - $32,805.17</p>

            <p>A contract has been sent to your mailing address, please sign the documents and fax them to the number provided.</p>
            
            <p>Congratulations and welcome aboard!</p>

            <p><span style="color: darkblue; font-family: serif; line-height: 1em;">Best regards,<br/><b>Desmond Bellevic</b><br/>Payroll Officer<br/><img src="`+ require('./logo.svg')+`"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 9420)<br/>Fax: 570-330-9000</span><br/><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
		`
    },



    // extra information for endless mode

    {
        "visibleLevel": 11,
        "date": moment("20111205", "YYYYMMDD"),
        "sender": "Tricia Huxton",
        "senderMail": "tricia.huxton@alliedbrandsinc",
        "recipient": "PR - Temporary Staff",
        "recipientMail": "pr_temp@alliedbrandsinc",
        "subject": "Orientation - READ THIS FIRST",
        "content": `
            <p>All,</p>
            <p>Welcome to the Allied Brands family! It's good to have you on board.</p>\n<p>If you aren't fully across them yet, now would be a good time to revisit the Corporate Mission Statement and Core Company Values. As a steward of Allied Brands Inc's social media presence, <b>you</b> are the company's public representative and a first point of contact for many of our customers.</p>
            <p>Some tips to help you get started:</p>
            <ul>
                <li>All interaction with customers is handled through our form-based ticketing system, Alwynsoft IssueMagic. Tickets in IssueMagic are drawn from a number of social media sources, including @ mentions, direct messages and mentions of specific keywords.</li>
                <li>When a ticket shows up in IssueMagic, click on the message to expand the answer form. Answering a ticket in IssueMagic will send a response back to the customer; it's easy as that!</li>
                <li>When preparing a response to a customer, it is important that it arrives to them from the <b>correct brand account</b>. You can change the active account using the button group on the right side of the IssueMagic interface.</li>
                <li>We wouldn't expect you to respond to every single query that arrives in on a given day. That said, the business has reasonable expectations for KPIs such as <b>resolution rate</b>. You can keep track of these metrics using the gauges on the left side of the IssueMagic interface.</li>
                <li>All responses you make to customer queries are verified by a supervisor before release. Any noted mistakes will be flagged with a <b>formal warning</b>, which you should review to help avoid future mistakes.</li>
                <li>Repeated warnings may result in performance management or disciplinary proceedings.</li>
            </ul>
            <p>That's about it, best of luck and have fun! Our customers really are the best. <span style="font-family: serif;">&nbsp;J</span></p>
            <p><span style="color: darkblue; font-family: serif; line-height: 1em;">Kind regards,<br/><b>Tricia Huxton</b><br/>Public Relations Coordinator<br/><img src="`+ require('./logo.svg')+`"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 3519)<br/>Fax: 570-330-9000</span><br/><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
        `
    },
    {
        "visibleLevel": 11,
        "date": moment("20111205", "YYYYMMDD"),
        "sender": "Cody Briggs",
        "senderMail": "cody.briggs@alliedbrandsinc",
        "recipient": "PR - Temporary Staff",
        "recipientMail": "pr_temp@alliedbrandsinc",
        "subject": "Business rules and current promotions",
        "content": `
            <p>All,</p>
            <p>Firstly, Allied Brands is grateful for the extra assistance provided by <span style="font-family: serif; font-size: 15px;">&nbsp;&nbsp;Roshan Backoffice Services Ltd.</span> in managing our social media during this period of high customer demand. Assuming all goes well, we will definitely be considering your services for any planned expansion of our customer outreach program.</p>
            <p>As outlined in the contract, we need first line responders to man the following social media accounts 24/7:</p>
            <p><ul>
                <li><b>@AlliedBrandsInc</b> - Allied Brands Inc. corporate account</li>
                <li><b>@kingsleysnacks</b> - Kingsley® Snacks brand account</li>
                <li><b>@CapnJackFoods</b> - Cap'n Jack brand account</li>
                <li><b>@excelsior_rx</b> - Excelsior Pharmaceuticals brand account</li>
            </ul></p>
            <p>Please refer to our standard orientation email for an overview of how our ticketing system works. In addition to the standard rules for replying to customers, there are a number of custom rules relating to current requirements by the business.</p>
            <p><ul>
                <li>For any message where the customer makes specific legal demands/threats, or makes allegations of physical harm caused by an Allied Brands product, mark it with the <b>"Litigious"</b> flag.</li>
            </ul></p>

            <p><span style="color: darkblue; font-family: serif; line-height: 1em;">Regards,<br/><b>Cody Briggs</b><br/>Chief Media Officer<br/><img src="`+ require('./logo.svg')+`"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 4816)<br/>Fax: 570-330-9000</span><br/><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
        `
    },

];
