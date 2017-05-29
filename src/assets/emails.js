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
                <p>This is a casual position, with a two-month internship period to provide on-the-job training and to confirm your efficacy for the role, and is a fantastic opportunity for a social media lover to advance their career!</p>
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
            <p>For your first week of on-the-job training you will be given access to one social media feed: the Kingsley® Snacks promotional account (<b>@kingsleysnacks</b>). Please engage with as many Kingsley® Snacks customers as possible; whether it be to refer them to our amazing customer service team, or just to compliment them on their great taste in treats!</p>
            <p>Some tips to help you get started:</p>
            <ul>
                <li>All interaction with customers is handled through our form-based ticketing system, Alwynsoft IssueMagic. Tickets in IssueMagic are drawn from a number of social media sources, including @ mentions, direct messages and mentions of specific keywords.</li>
                <li>When a ticket shows up in IssueMagic, click on the message to expand the answer form. Answering a ticket in IssueMagic will send a response back to the customer; it's easy as that!</li>
                <li>When preparing a response to a customer, it is important that it arrives to them from the <b>correct brand account</b>. You can change the active account using the button group on the right side of the IssueMagic interface.</li>
                <li>We wouldn't expect you to respond to every single query that arrives in on a given day. That said, the business has reasonable expectations for KPIs such as <b>resolution rate</b>. You can keep track of these metrics using the gauges on the left side of the IssueMagic interface.</li>
                <li>All responses you make to customer queries are verified by a supervisor before release. Any noted mistakes will be flagged with a <b>formal warning</b>, which you should review to help avoid future mistakes.</li>
                <li>Repeated warnings may result in performance management or disciplinary proceedings.</li>
            </ul>
            <p>That's about it, best of luck and have fun! Our customers really are the best. <span style=\"font-family: serif;\">&nbsp;J</span></p>
            <p>(if you haven't yet signed and emailed back the Standard Work-For-Hire Contract and Standard Contractor Non-Disclosure Agreement, please do so ASAP as they are needed by payroll!)</p>
            <p><span style=\"color: darkblue; font-family: serif; line-height: 1em;\">Kind regards,<br/><b>Tricia Huxton</b><br/>Public Relations Coordinator<br/><img src=\"`+ require('./logo.svg')+`\"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 3519)<br/>Fax: 570-330-9000</span><br/><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
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
            <p>Following a "lessons learned" analysis of last month's surprise loss in court, we are rolling out a sweeping change to our business procedures. In summary: a customer incident was reported to the company through social media and a response issued, but was not escalated to the Customer Settlement Response team in time. As a result, other related externalities convinced the affected customer to file suit against the company. We were unlucky that this individual was unusually well resourced to bring about a case.</p>
            <p>To prevent the same terrible confluence of events from happening again, we have added a new marker to the ticketing system. In future, please mark any messages wherein a customer makes specific legal demands/threats, or makes allegations of physical harm caused by an Allied Brands product, with the <b>"Litigious"</b> flag. These threads will be monitored by CSR for possible early settlement talks.</p>

            <p><span style=\"color: darkblue; font-family: serif; line-height: 1em;\">Regards,<br/><br/><b>Nathaniel Hardcastle</b><br/>General Counsel - North America<br/><img src=\"`+ require('./logo.svg')+`\"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 1778)<br/>Fax: 570-330-9000<br/></span></p>
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
            <p>Allied Brands has completed its acquisition of the Cap'n Jack family of snack foods, including Cap'n Jack's Salted Peanut Poppers, Cap'n Jack's Compressed Fruit Sheets, and Cap'n Jack's Fun-Size Energy Loaf. As part of the handover, the Cap'n Jack social media presence (<b>@CapnJackFoods</b>) has been added to your console, and the incoming feed adjusted to include mentions of Cap'n Jack products. Please engage with as many such customers as possible from the Cap'n Jack account.</p>
            <p><span style=\"color: darkblue; font-family: serif; line-height: 1em;\">Kind regards,<br/><b>Tricia Huxton</b><br/>Public Relations Coordinator<br/><img src=\"`+ require('./logo.svg')+`\"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 3519)<br/>Fax: 570-330-9000</span><br/><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
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

            <p>Basically, in case you haven't picked up on it there's no long-term prospects for the job. ABI hired some teenage fucks from the Bay Area to "train" some neural AI thing with what you're doing, which they intend to set loose on the public again as soon as they figure out how to make it stop talking like a Nazi. You probably heard about the last time their social media account was on the news? Yeah, that happened a few days after me and my team got canned and replaced with version 1. </p>

            <p>What makes me fucking livid is this unpaid internship horseshit. Okay, the job wasn't great money, but it was at least a salary! I am 99% sure that their game plan is to ditch you at the end of the trial period and just churn people until they have enough data or whatever to switch CyberGoebbels back on. Obviously you're free to do as you wish, but I figure the least I can do is warn you about what's going down.</p>

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
            <p>The Excelsior Pharmaceuticals division has finished transitioning their customer relations roles to the new central PR group. Excelsior is among the oldest businesses in the Allied Brands stable, and is our primary mark for over-the-counter and prescription medications. Please engage with as many such customers as possible from the Excelsior Pharmaceuticals account (<b>@excelsior_rx</b>).</p>
            <p><span style=\"color: darkblue; font-family: serif; line-height: 1em;\">Kind regards,<br/><b>Tricia Huxton</b><br/>Public Relations Coordinator<br/><img src=\"`+ require('./logo.svg')+`\"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 3519)<br/>Fax: 570-330-9000</span><br/><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
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

            <p>Thanks for replying back. I respect your decision, but I still think you're being played for a chump. Don't get me wrong, I do get that it's a really shit job market right now, but please promise me that you'll look for other positions. This isn't just me being bitter; Allied is seriously a <i>fucked up</i> place. The business is running at a loss, the leadership is an endless buck-passing circlejerk, and everyone is being pushed to cut corners. Oh and they're <i>big</i> fans of stack ranking, so if you've ever wanted a proper Stasi-grade culture of undermining and snitching... Jesus, they actually used the words "quash dissent" to justify cracking down on managers and quality control supervisors for doing their job! I can't make this shit up.</p>

            <p>But yes, lots of mistakes are being made and good people are being pressured to quit. I probably shouldn't go into old gossip, but like the old saying goes I do not use Allied Brands products, nor would I recommend them to anyone wanting to live to a ripe old age. Mark my words; one day there will be a public scandal, and it will be big enough that your job description will change to "human sewer rake". I would not wish that horrorshow on anyone.</p>

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
        "selfDestruct": 8000,
        "subject": "IMPORTANT - New campaign for Kingsley's Fruit Pebbles",
        "content": `

        <p>Hi all,</p>

        <p>As you're probably aware, we are launching a new marketing campaign for Kingsley's Fruit Pebbles this week. Those of you who were present at the full presentation on Friday should already be across it, but for those who were unable to make it I've nutshelled the main points for you below.</p>

        <p>In all honesty, it's no secret that the Fruit Pebbles line has been considered for discontinuation. The products have missed sales targets for the last 12 quarters, and the focus groups have consistently reported that they perceive the brand as unexciting and old-fashioned.</p>
        <p>However, there has been an <b>upsurge</b> in web searches for Fruit Pebbles in the past month, due to its misappropriation by certain political figures. Naturally, Allied PR has released a full statement condemning the use of our snack product as an abhorrent and factually incorrect metaphor for ethnic cleansing. But the interest in the product is real; in the last few weeks unit sales have almost tripled!</p>
        <p>This boom will most likely be a temporary one if we leave it unaddressed, but we have a rare and ideal opportunity to pivot this underperforming brand and focus like a laser on a new and growing group of consumers, making up the bulk of the new sales. The demographic is predominantly male, middle-class, age 15-35, single, and interested in technology and video games.</p>
        <p>Now I know what you're thinking, and I promise you we are not going to fall into that 90s trope of "X-Treme"ifying everything!! This is 2011, and Fruit Pebbles are a mature product for mature consumers. It goes without saying that the advertising can and will be darker and more realistic compared to other campaigns.</p>
        <p>Of course, no advertising campaign is complete without a compelling original character, and no character is complete without an origin story. Sit back, relax, and enjoy this slice from the distant future...</p>

        <hr/>
        <p>They only called him in for the exceptional cases. Where all other options have failed. Today was no different.</p>
        <p>Vice-Captain Ricardo Hull of the 3rd Interstellar Reconnaissance Company kicked open the hatch and dropped from the ventilation duct, the familiar smell of blood and charred human remains filling his nostrils. He knew better than to look among the bodies for familiar faces. They were all dead, and he'd soon join them if he got sympathetic now.</p>
        <p>For a brief moment, there was silence. Ricardo crouched behind a recyc unit, the crawlspace illuminated only by the faint glow of his field-issue stim vaporiser <span style="color: red">(CB: can we cross promote with e-cig? check with legal)</span>. The queen would be back soon; unless he acted now hundreds of thousands of carnivorous xenospawn would overrun the outpost, and eventually the whole planet. This was humanity's last chance.</p>
        <p>Ricardo chuckled. If he had ten space credits for every time he heard that.</p>
        <p>As he attached the plastic explosive charges to the main reactor</p>

        <p>From the wings came a bloodcurdling battle cry. It would be the last thing they would hear.</p>

        <p><i>"EAT IT, CUCKS!"</i></p>

        <p>A few rounds ricocheted off the armored brim of his helmet; a gift from his late father.</p>

        <hr/>
        <p>As a limited edition tie-in to promote the character, Fruit Pebbles will be released in gunmetal grey. In your communications with Kingsley Snacks customers, be sure to work in a reference to the promotion and include the image attached below.</p>
        <p>I hope you will join me in welcoming Ricardo into our permanent stable of brand mascots.</p>
        <p>#ricardolives</p>



<p><span style=\"color: darkblue; font-family: serif; line-height: 1em;\">Thanks,<br/><br/><b>Frank Billeton</b><br/>Vice President - Marketing<br/><img src=\"`+ require('./logo.svg')+`\"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 1517)<br/>Fax: 570-330-9000<br/></span><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
        
        `,
    },


    {
        "visibleLevel": 3,
        "date": moment("20111121", "YYYYMMDD"),
        "sender": "Roger Billeton",
        "senderMail": "roger.billeton@alliedbrandsinc",
        "recipient": "All Users",
        "recipientMail": "all@alliedbrandsinc",
        "selfDestruct": 8000,
        "subject": "Re: FW: IMPORTANT - New campaign for Kingsley's Fruit Pebbles",
        "content": `
            <p>someone tell Kate's team they better get on Board with this shit if they want jobs after Christmas</p>

<p><span style=\"color: darkblue; font-family: serif; line-height: 1em;\"><b>Roger Billeton</b><br/>&nbsp;Chief Executive Officer<br/><img src=\"`+ require('./logo.svg')+`\"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 1119)<br/>Fax: 570-330-9000<br/></span></p>
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
                <p style="font-variant: small-caps">Robert Xam in Chicago</p>

                <p>Beaufort North America LLC. has issued an immediate nationwide recall for its Healthland Farms milk product range, following widespread reports of children suffering from impaired kidney functionality.</p>
                <p>Since Wednesday, there has been a spike in diagnosed cases of sudden-onset kidney trauma; an uncommon renal disorder affecting pre-teen children. The majority of these cases have been traced back to the consumption of Healthland Farms Low-Fat Chocolate Milk; a flavoured milk drink produced by Beaufort and supplied to the National School Lunch Program. Unconfirmed reports suggest that batches of milk were tainted by a melamine-like additive to boost the apparent protein content.</p>
                <p>A spokesperson for Beaufort stated that the nationwide recall was a necessary safety precaution, the company was "shocked and dismayed at this unforeseeable turn of events", and that the investigation into the incident was still ongoing. Customers who believe they are affected by the recall are urged not to consume the product and to get in contact with Beaufort.</p>
                <p>The market response to the scandal has been severe, with Beaufort stock down $3.50 to $9.02.</p>
                <p>In September, Beaufort finalized their acquisition of several product lines from Pennsylvania-based conglomerate Allied Brands Inc., including Healthland Farms Milk. At the time, the milk product business was considered healthy and no concerns were raised, aside from a lone activist investor demanding a higher premium on the market price. A source inside Beaufort, who asked not to be identified, said that a large part of the investigation to date has been focused on finding links to Allied Brands senior management.<p>
                <p>A spokesperson for Allied Brands Inc. declined to comment, citing the complete divestment of the Healthland Farms product line. The Allied stock price suffered some early losses when news of the scandal broke on Wednesday, but has since rallied to be slightly ahead by close of trading today.</p>
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
        <p>As you have probably heard, there has been an unfortunate incident attributed to a contaminated batch of Healthland Farms milk, resulting in customers becoming seriously ill. As of last September, Allied Brands Inc. is no longer involved with the production, marketing or distribution of Healthland Farms milk products, with all assets and manufacturing staff transferred to Beaufort International. Nonetheless, our thoughts and prayers are with those affected by the tainted products and their families.</p>
        <p>As the transfer of ownership is quite recent, there is still a strong association in the minds of consumers between Healthland Farms and Allied Brands. It is <i>vital</i> that we move quickly to dispel this confusion; for any customers that contact the company regarding Healthland Farms, please inform them of the change of ownership and direct them to Beaufort International's social media presence (<b>@BeaufortIntl</b>).</p>
            <p><span style=\"color: darkblue; font-family: serif; line-height: 1em;\">Regards,<br/><b>Cody Briggs</b><br/>Chief Media Officer<br/><img src=\"`+ require('./logo.svg')+`\"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 4816)<br/>Fax: 570-330-9000</span><br/><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
        `
    },


    // week 6 starting 20111205
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
            <p>There's been some good news from our medical division Excelsior Pharmaceuticals. Shaftoproxin® is a pharmaceutical product originally developed as a treatment for stump rash, boatswain's disease, and night prowls. Thanks to some diligent work by our excellent pathology team Shaftoproxin® has been proven effective in relieving the symptoms of sudden onset kidney trauma, and as the product has existing FDA approval, Excelsior is first to market with such a treatment.</p>
            <p>In order to best engage customers and medical professionals about the benefits of Shaftoproxin®, Excelsior plans to launch an awareness campaign along with updated product packaging and marketing materials, plus a wider rollout to retailers to meet anticipated demand. </p>
            <p>As part of this push, the incoming feed will now include messages from prospective customers who have posted about sudden onset kidney trauma. Please note that this treatment is still an off-label use of the drug, so from a legal standpoint it is crucial that we do <b>not</b> directly advocate people buy Shaftoproxin®. Instead, please encourage as many prospective customers as possible to <b>ask their doctor or healthcare provider</b> about exciting new treatments for sudden onset kidney trauma, from the Excelsior Pharmaceuticals (<b>@excelsior_rx</b>) account. </p>

            <p><span style=\"color: darkblue; font-family: serif; line-height: 1em;\">Kind regards,<br/><b>Tricia Huxton</b><br/>Public Relations Coordinator<br/><img src=\"`+ require('./logo.svg')+`\"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 3519)<br/>Fax: 570-330-9000</span><br/><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
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

            <p><span style=\"color: darkblue; font-family: serif; line-height: 1em;\">Regards,<br/><b>Cody Briggs</b><br/>Chief Media Officer<br/><img src=\"`+ require('./logo.svg')+`\"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 4816)<br/>Fax: 570-330-9000</span><br/><br/><small style="color: darkgreen; font-family: serif; line-height: 1em;">🌳&nbsp;&nbsp; Please consider your carbon footprint before printing this email<small></p>
        `
    },




    // week 8 starting 20111220
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
            
            <p>It has come to the attention of Legal that a small number of Excelsior Pharmaceuticals customers are expressing despair at a perceived inability to procure our products for themselves or their loved ones. Without question, the welfare of our customers should come first and foremost in everything we do, and the upcoming Christmas holiday period is an exceptionally vulnerable time for people barely making ends meet. As good corporate citizens and as Americans, we have a duty to look beyond what is best for our image or bottom line and provide help to those who need it the most. It's time for us to open up our moral compass and chart a new, righteous course.</p>

            <p>For any customer you would identify as "<b>at-risk</b>", please refer them to the National Suicide Prevention Lifeline for assistance. This should be done from the Allied Brands Inc. corporate account (<b>@alliedbrandsinc</b>) ONLY, so as not to conflate this serious issue with the light-hearted tone used for advertising/social media outreach by the individual brands. To fulfil our liability waiver obligations under state law, please ensure you reply <b>within 20 seconds</b> of receiving the customer communication.</p>

            <p><span style=\"color: darkblue; font-family: serif; line-height: 1em;\">Regards,<br/><br/><b>Nathaniel Hardcastle</b><br/>General Counsel - North America<br/><img src=\"`+ require('./logo.svg')+`\"><br/>111 Electric City Ave.<br/>Scranton, PA 18509<br/>Ph: 570-330-0000 (ext 1778)<br/>Fax: 570-330-9000<br/></span></p>
            <p style="font-family: serif">This email (including any attachments) is confidential and intended for the named recipient(s) only. It may be subject to legal or other professional privilege and contain copyright material. Any confidentiality or privilege is not waived or lost because this email has been sent to you by mistake.</p>

            <p style="font-family: serif">Access to this email or its attachments by anyone else is unauthorised. If you are not the intended recipient, you may not disclose, copy or distribute this email or its attachments, nor take or omit to take any action in reliance on it. If you have received this email in error, please notify the sender immediately, delete it from your system and destroy any copies.</p>

            <p style="font-family: serif">We accept no liability for any loss or damage caused by this email or its attachments due to viruses, interference, interception, corruption or unauthorised access.</p>

            <p style="font-family: serif">Any views or opinions presented in this email or its attachments are solely those of the author and do not necessarily represent those of the company.</p>


        `
    },

];
