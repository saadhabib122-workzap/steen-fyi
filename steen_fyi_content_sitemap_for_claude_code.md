# STEEN.FYI Rebuild Content Pack for Claude Code

Generated: 2026-06-24
Purpose: offline rebuild brief for Claude Code using screenshots supplied by the site team plus verbatim article copy supplied in chat.

## Important working notes for Claude Code

- Rebuild the site as a modern, responsive keynote speaker website.
- Use the supplied screenshots as the source of truth for current page structure, section order, and overall layout.
- Use the supplied article bodies below as the article content to migrate.
- Do not require Claude Code to visit URLs to understand the content.
- Some small screenshot microcopy is too small to read perfectly; treat the layout and section hierarchy as authoritative, but keep exact long-form article copy from the supplied text below.
- Missing older articles are intentionally omitted for this rebuild phase.

---

# 1. Global sitemap

## Primary routes

```txt
/                         Home
/about                    About Steen
/speaking-1               Keynote Speaking overview
/speaking-1-1             Decision Laundering keynote landing page
/articles                 Article index
/articles/[slug]          Article detail pages for supplied articles
/contact-us               General contact page
/booking                  Invite Steen / speaker booking form route
/privacy-policy           Privacy policy
```

## Recommended cleaner route aliases for rebuild

```txt
/                         Home
/about                    About Steen
/speaking                 Keynote Speaking overview, redirect old /speaking-1
/decision-laundering      Decision Laundering landing page, redirect old /speaking-1-1
/articles                 Articles index
/articles/[slug]          Articles
/contact                  General contact, redirect old /contact-us
/booking                  Booking request
/privacy-policy           Privacy policy
```

## Global navigation from screenshots

Header appears on all screenshots:

- Left logo text: `STEEN.FYI`
- Center nav:
  - Home
  - About me
  - Speaking
  - Get In touch
  - Decision Laundering
  - Articles
- Right social icon row:
  - Spotify
  - YouTube
  - Medium
  - LinkedIn
- Primary CTA button:
  - `INVITE STEEN TO SPEAK`

Footer appears on all screenshots:

- Brand: `STEEN.FYI`
- Footer CTA line: `Book Steen for your Next Event`
- Button: `INVITE STEEN`
- Footer links:
  - Home
  - Get in Touch
  - About
  - Privacy Policy
- Social icons:
  - Spotify
  - YouTube
  - Medium
  - LinkedIn
- Cookie notice appears bottom-right in screenshots with button `ACCEPT`.

---

# 2. Shared design/layout observations from screenshots

## Visual system

- Overall style: editorial speaker portfolio, high-contrast black/white sections, cyan/teal accent lines, red CTA buttons.
- Header: white sticky/top nav with black text and red CTA.
- Main background sections alternate between:
  - black/dark charcoal
  - white
  - deep navy/purple-black
- Distinct diagonal/slanted section separators with cyan stroke lines.
- Buttons:
  - Primary: red rectangle, white uppercase text.
  - Secondary/action: cyan/teal button, white uppercase text.
  - Text links: cyan/teal uppercase with underline line motif.
- Typography: clean sans-serif, large simple headings, cyan emphasis for select headings.
- Homepage and speaking pages rely heavily on stage/audience imagery and Steen portraits.

## Core reusable components

```txt
SiteHeader
SiteFooter
CookieBanner
HeroFullBleedImage
HeroCenteredText
HeroDarkMinimal
SlantedSectionDivider
ClientLogoStrip
SpeakingEngagementCarousel
EngagementCard
CTAButton
SecondaryLinkButton
SocialIconRow
TwoColumnBioBlock
ThreeCardFeatureSection
TestimonialRows
TestimonialGrid
ArticleGrid
ArticleCard
ContactForm
BookingForm
ImageGallery
MapSection
DarkLandingSection
```

---

# 3. Page-by-page structure and current content

## 3.1 Home page `/`

Screenshot source: `screencapture-steen-fyi-2026-06-24-17_10_21.png`

### Section order

1. Global header
2. Full-bleed hero with auditorium/stage image
3. Client logo strip
4. Sample Past Speaking Engagements carousel/cards
5. Dark slanted CTA section with LinkedIn and newsletter cards
6. White testimonials section: `What Organizers Say About Steen`
7. Dark three-card navigation section: Articles, Speaking, Get in Touch
8. Global footer

### Home hero content

```txt
Steen for your   Insights

Harnessing 20 years of knowledge to drive the blending of data, business, and people toward a bright future.

BOOK STEEN TO TALK

GET TO KNOW STEEN
```

### Client logo strip

Visible logos:

- LEGO
- IKEA
- BMW
- Danfoss
- L'Oréal

### Section: Sample Past Speaking Engagements

Heading:

```txt
Sample Past Speaking Engagements
```

Visible cards in screenshot:

#### Card 1: SuperWeek 2025

```txt
SuperWeek 2025
“It’s the process, stupid” - Reflections on the future fusion of AI and Analytics.

We all know it. It’s only a question of time before some friendly soul will come and ask to have your analytics data added to their AI. And in theory that’s great. But what digital analytics data is not known for is quality and that is what AI needs.

So the future integration of AI in data and analytics is forcing our hands towards a much more rigid framework of procedures to consistently deliver analytics data and input of a sufficiently high enough quality for AI to work with.
```

#### Card 2: The Marketing Festival

```txt
The Marketing Festival
Marketing Unusual - Things we should and shouldn’t do

More often than not marketing is about choices which will strengthen the brand and improve the market. But as everything else marketing exists as part of the business, so sometimes the fundamentals needs and ambition of marketing is tied to something bigger.

With the shift in marketing and a new reality built on data and AI, these choices suddenly become much more important, because both the impact and the risks grow everyone.
```

#### Card 3: Allweb Digital Analytics Conference

```txt
Allweb Digital Analytics Conference
Campaign tracking and attribution – Tips, tricks and tactics

Everyone knows how to do campaign tracking, right? Wrong. Campaign tracking is impacted by new options and limitations and demands a new way of thinking, but it also increases the demands on the organization.

There have never been more ways to go wrong. In this session, we dive into the decisions that need to be made and explore how superior campaign monitoring can in turn generate superior results.
```

Additional cards known from site structure:

```txt
Snowplow Meetup Amsterdam
Digital Maturity Models

Marketing Analytics Summit
THE AGE OF ACTIVATION: SUPERCHARGING THE CUSTOMER JOURNEY

InOrbit | Digital Marketing Conference
THE DECISION ECONOMY

The Digital Analytics Summit Milan
DATA GOVERNANCE
```

### Section: Social/newsletter cards

Card 1:

```txt
Steen’s Linkedin
Get Steen’s latest thinking in real time, follow him on Linkedin
FOLLOW
```

Card 2:

```txt
Steen’s Newsletter
Get Steen’s best ideas, unfiltered, practical, and delivered once a month.
SUBSCRIBE
```

### Section: What Organizers Say About Steen

Heading:

```txt
What Organizers Say About Steen
```

Testimonials visible across screenshots:

```txt
“Inviting Steen Rasmussen as a keynote speaker for The Google Analytics 4 Summit, was a clever move based on the feedback of the audience. As an event organizer, working with him was also a breeze, his performance was so impactful that we’re already considering a repeat engagement.”

Roberto Guiotto, Lead organizer, GA Summit
```

```txt
“Steen has been a regular keynote speaker at our last many Superweek events, and his presentations are always both enlightening and engaging. As an organizer, I appreciate both his professionalism and ease of collaboration. He is the least of my concerns. His talk is so well-received that we’re always eager to have him return.”

Zoltán Bánóczy, Lead organizer, Superweek
```

```txt
“Steen is one of those experienced practitioners who ‘screams’: Trust me, I know what I’m doing, from the moment he steps on the stage. We were glad to host him at AllWeb in Tirana, Albania, and would be more than happy to host him again. His first-hand insights were deeply valued by every single member of the audience as well as the other speakers.”

Darko Buldioski, Lead organizer, ALLWEB Conference
```

### Section: bottom navigation cards

#### Articles

```txt
Articles
Explore Steen’s articles, a fusion of data and humor where analytical insights meet engaging narratives.
READ
```

#### Speaking

```txt
Speaking
Explore Steen’s Talks, a fusion of actionable insights and personal experience. See what Steen has to offer.
EXPLORE
```

#### Get in Touch

```txt
Get in Touch
Contact us to get a keynote booking with Steen. A keynote that will keep your attendees returning.
BOOK STEEN
```

---

## 3.2 About page `/about`

Screenshot source: `screencapture-steen-fyi-about-2026-06-24-17_10_48.png`

### Section order

1. Global header
2. Dark hero/about intro with portrait
3. White three-column services section: Speaking, Community, Consulting
4. Dark testimonials grid: `What Do They Say About Steen?`
5. White world map section: `Steen Has Been Speaking Around the World`
6. Global footer

### Hero content

```txt
I am Steen

“I make data human. Whether speaking at global conferences or consulting Fortune 500 companies, my work is about translating complexity into clarity.”
```

Approximate body from screenshot:

```txt
Steen Rasmussen is a global authority on digital analytics and founder of Data Analytics Society. With 20+ years of experience, Steen specializes in transforming data into actionable business strategy.

Known for his clarity and warmth, Steen has helped companies look for audiences worldwide, from Silicon Valley to Munich. He is the co-founder of IIH Nordic, a pioneer in implementing data-driven operational excellence, including a 4-day workweek.

Steen also serves on boards, teaches the next generation of analysts and leaders, and is a prominent voice in the world of digital analytics and data-driven business.
```

### Three-column section

#### Speaking

```txt
Speaking

My keynote journey reflects over two decades of experience at the crossroads of data, business, and people. Over the years, I’ve had the privilege of engaging global audiences across industries. Sharing insights on web analytics, digital transformation, data strategy, and leadership.

What drives me is the opportunity to help people make smarter, faster, and more confident decisions. Whether speaking to analysts, executives, or cross-functional teams, my goal is always the same: to make data feel accessible, inspiring, and immediately useful in the pursuit of better decisions and stronger business outcomes.

INVITE STEEN
```

#### Community

```txt
Community

I co-founded the Data Analytics Society, a global community focused on bridging organizations, brands, and analytics into real impact. Through the Society, I work to connect the right people, knowledge, and tools to help communities grow.

Whether through meetups, mentoring, content curation, or strategic partnerships, I help create spaces where analytics professionals can exchange ideas, learn from each other, and solve real-world problems together. It’s about community building, knowledge sharing, and turning individual expertise into collective momentum.

JOIN THE COMMUNITY
```

#### Consulting

```txt
Consulting

I’m the founder of the Data Analytics Society, a global community focused on bringing organizations, brands, and data specialists together to generate business impact. Through the Society, I work to connect the right people, knowledge, and tools to help companies get more out of their analytics and digital investments.

I advise companies on data strategy, analytics transformation, tracking, measurement, and how to turn data into something that creates better decisions and business outcomes. My consulting is practical, collaborative, and focused on helping organizations connect the dots between people, technology, and commercial impact.

CONSULT STEEN
```

### Testimonials grid

Heading:

```txt
What Do They Say About Steen?
```

Use this as a data array. Screenshot includes six testimonial cards with portraits. Exact microcopy is small; keep these as editable content entries.

Visible names/organizations include:

- Stefan Mols Lindor — Affinity by Lindor X
- Henrik Dessau — Cell Biotech International A/S
- Martin Bo Arndt — Nordea
- Thomas Jacobsen — UN Refugee Agency
- Richard T. — QCOSS
- Kristian Humle Lauritsen — Cookie Information

### Map section

```txt
Steen Has Been Speaking Around the World
```

Implementation: show a world map with red location markers. Use a static image or lightweight SVG map.

---

## 3.3 Articles index `/articles`

Screenshot source: `screencapture-steen-fyi-articles-2026-06-24-17_11_44.png`

### Section order

1. Global header
2. Black background article grid
3. Six visible cards in current screenshot
4. Large black blank space below because grid content does not fill viewport

### Article card layout

Each card contains:

- Thumbnail image
- Small date in uppercase/light text
- Article title in cyan/teal

### Visible article cards

```txt
20 Jun 2026
You don’t own your life alone
```

```txt
31 May 2026
Why analytics is genuinely hard to learn
```

```txt
30 Apr 2026
THE SHORTCUT DOCTRINE
```

```txt
27 Mar 2026
You already know which one is better - the high cost of easy choices
```

```txt
28 Feb 2026
[Article about fun/humor at work]
```

```txt
13 Jan 2026
[Article about getting unstuck / Five Knives to Get Unstuck]
```

Suggested article data model:

```ts
export type Article = {
  title: string
  slug: string
  date: string
  excerpt?: string
  heroImage?: string
  body: string
  tags?: string[]
}
```

---

## 3.4 Contact page `/contact-us`

Screenshot source: `screencapture-steen-fyi-contact-us-2026-06-24-17_11_15.png`

### Section order

1. Global header
2. Large white contact section with two columns
3. Left column: intro copy and social links
4. Right column: contact form
5. Global footer

### Left column copy

```txt
What's on your mind?

Not ready to request Steen to present, then reach out regarding whatever is on your mind. We will get back to you within a day normally, so feel free and welcome to reach out with your thoughts and ideas.

We are really looking forward to hearing from you.

Best

Team Steen

Feel Free to reach out to Steen on his socials.
```

### Form fields

```txt
Name
First Name (required)
Last Name (required)

Email (required)
[ ] EMAIL ME WITH PROMOTIONS AND OFFERS

Topic (required)
What do you want to talk about?
Select an option

Headline

Message (required)

SHARE YOUR THOUGHTS!
```

---

## 3.5 Decision Laundering page `/speaking-1-1`

Screenshot source: `screencapture-steen-fyi-speaking-1-1-2026-06-24-17_11_28.png`

### Section order

1. Global header
2. Full-bleed auditorium/stage hero
3. Decision Laundering talk introduction with large portrait background
4. Dark problem section: `WHAT’S THE TALK ABOUT`
5. Dark topic block: `Digital Maturity?, A needed reflection.`
6. Dark slanted section: `WHO IS THIS FOR`
7. About Steen section
8. Testimonials section
9. Book a call/contact form section
10. Global footer

### Hero copy

```txt
Where Data Meets Purpose,
Keynotes That Drive Change.

Keynotes designed to shift perspectives, energize audiences, and equip organisations to thrive.
```

Approximate supporting copy from screenshot:

```txt
Steen Rasmussen is a globally recognized keynote speaker with two decades of experience at the intersection of data, business, and people. His talks blend storytelling and executive insight, helping audiences make sense of data strategy, analytics, digital transformation, and the future of decisions.
```

CTA:

```txt
BOOK STEEN FOR YOUR EVENT
```

### Talk introduction

```txt
The Leadership Discipline Behind Data-Driven Decisions

Decision Laundering

Why More Data Still Leads to Bad Decisions, and What Leaders Can Do About It
```

Approximate body:

```txt
This keynote explores why organizations can have more dashboards, more AI, and more analytical firepower than ever before and still make poor decisions. The issue is not access to data. The issue is how leaders use data to validate decisions they have already made.
```

Buttons:

```txt
BOOK STEEN FOR YOUR EVENT
LEARN MORE
```

### Problem section

```txt
WHAT’S THE TALK ABOUT
More Data + More Tools = More Uncertainty?
```

Visible content themes:

- Leaders have more data than ever.
- Dashboards, AI, automation, reports, and prediction tools have not removed uncertainty.
- The problem is often not lack of data but lack of disciplined decision-making.
- The keynote introduces Decision Laundering: using data after the fact to justify decisions already made.
- The talk gives leaders a practical way to make better decisions, challenge assumptions, and build data-informed organizations.

### Box content: For Leaders Ready to Make Better Decisions

Approximate list:

```txt
For Leaders Ready to Make Better Decisions:

This talk is designed for:

- Executive leaders, P&L owners and senior decision-makers who need clarity in complexity.
- Data & analytics leaders who need to influence decisions, not just produce reports.
- Strategy, transformation and commercial teams navigating uncertainty.
- Product, marketing and customer leaders responsible for high-stakes choices.
- Organizations investing in AI and analytics who want to avoid faster bad decisions.
- Leadership teams under pressure to become more data-informed without becoming more confused.
```

### Section: Digital Maturity

```txt
“Digital Maturity?, A needed reflection.”

Even if you don’t use technology maturity as a benchmark, leadership is.

Most organizations don’t struggle with access to information. They struggle with how that information shapes thinking, conversations, and decisions.
```

Framework labels visible:

```txt
Momentum
Context
Alignment
Value
Uncertainty
```

### Section: Who is this for

```txt
WHO IS THIS FOR
Who Is This Talk For?

This keynote is designed for organizations that already have data, tools, and ambition, but struggle to turn insight into confident decisions.
```

Audience bullets:

```txt
- Executive leadership teams
- Leadership teams navigating AI and complexity
- Marketing and analytics teams frustrated by insight without action
- Product and innovation leaders facing unpredictable customer behavior
- Organizations investing in data/AI and not seeing business outcomes
- Companies ready to move from dashboards to decisions
```

### Section: About Steen

```txt
ABOUT STEEN

“I make data human. Whether speaking at global conferences or consulting Fortune 500 companies, my work is about translating complexity into clarity.”
```

Approximate copy:

```txt
Steen Rasmussen is a globally recognized keynote speaker and founder of Data Analytics Society.

With over 20 years of experience, Steen specializes in helping leadership teams transform complex data into sharper thinking and better strategic choices.

Known for his clarity and warmth, he works with organizations across Europe, from Silicon Valley to Mumbai, translating complexity into practical action.

He is the co-founder of IIH Nordic, a pioneer in operational excellence and progressive workplace models, including the 4-day workweek.
```

### Section: Book a call

```txt
BOOK A CALL
Let's Grab a Virtual Coffee
Contact Form
```

Form fields visible:

```txt
Name
First Name
Last Name
Email
Organization/Company
Message
SEND MESSAGE
```

---

## 3.6 Speaking page `/speaking-1`

Screenshot source: `screencapture-steen-fyi-speaking-1-2026-06-24-17_11_00.png`

### Section order

1. Global header
2. Minimal black hero
3. White headline band
4. Speaker intro block with portrait/image collage
5. Dark keynote topic section
6. White testimonials section
7. Image gallery section
8. Global footer

### Hero copy

```txt
Keynote Speaking

WATCH STEEN IN ACTION
```

### White band heading

```txt
Insightful, Informational, and Inspirational
```

### Intro block copy

```txt
Steen offers distinct keynote options centered around his 20 years of digital and data analytics experience.

In understanding the power of data, your organization’s event will always give takeaways for its business or life.
```

### Topic 1

```txt
“Everything you know about your customers will soon be wrong”
```

Approximate content themes:

- Generative AI will reshape customer behavior.
- Organizations should not only use AI internally but consider how customers are changing because of AI.
- Optimizing for the current customer journey may mean optimizing for a world that will no longer exist.

### Topic 2

```txt
“Digital Maturity?, A needed reflection.”
```

Approximate content themes:

- Digital maturity is not only a technology question.
- It is about momentum, context, alignment, value, and uncertainty.
- The talk helps leaders reflect on where they are and what progress should mean.

### Testimonials

Use the same three organizer testimonials from the homepage:

- GA Summit
- Superweek
- ALLWEB Conference

### Gallery

Image gallery includes stage shots, portraits, conference shots, and speaking images. Build as a masonry/grid gallery with responsive lazy-loaded images.

---

# 4. Article collection

This section contains verbatim article bodies supplied by the site team in chat or attached text. Use these as offline content for Claude Code.

## Article metadata index for supplied articles

```ts
export const articles = [
  {
    title: "You don't own your life alone",
    slug: "you-dont-own-your-life-alone",
    date: "2026-06-20"
  },
  {
    title: "The Urgency Playbook: 10 Practical Methods for Decisive Action",
    slug: "the-urgency-playbook-10-practical-methods-for-decisive-action",
    date: "2026-06-13"
  },
  {
    title: "Why analytics is genuinely hard to learn",
    slug: "why-analytics-is-genuinely-hard-to-learn",
    date: "2026-05-31"
  },
  {
    title: "THE SHORTCUT DOCTRINE",
    slug: "the-shortcut-doctrine",
    date: "2026-04-30"
  },
  {
    title: "You already know which one is better - the high cost of easy choices",
    slug: "you-already-know-which-one-is-better-the-high-cost-of-easy-choices",
    date: "2026-03-27"
  },
  {
    title: "Fun at work is not a perk",
    slug: "fun-at-work-is-not-a-perk",
    date: "2026-02-28"
  },
  {
    title: "The Five Knives to Get Unstuck",
    slug: "the-five-knives-to-get-unstuck",
    date: "2026-01-13"
  },
  {
    title: "Delivering a keynote that actually matters",
    slug: "delivering-a-keynote-that-actually-matters",
    date: "2025-12-31"
  },
  {
    title: "Introducing the fractal digital fixer",
    slug: "introducing-the-fractal-digital-fixer",
    date: "2025-11-24"
  },
  {
    title: "When everything feels like a priority, nothing actually is",
    slug: "when-everything-feels-like-a-priority-nothing-actually-is",
    date: "2025-10-31"
  },
  {
    title: "Why I Left My Good Job to Go Fractal",
    slug: "why-i-left-my-good-job-to-go-fractal",
    date: "2025-09-29"
  },
  {
    title: "Why we love revolution over evolution",
    slug: "why-we-love-revolution-over-evolution",
    date: "2025-09-02"
  },
  {
    title: "Treating Decisions as Assets, Not To-Do Items",
    slug: "treating-decisions-as-assets-not-to-do-items",
    date: "2025-06-09"
  }
]
```

---

## Article: You don't own your life alone

Date: 20 Jun
Slug: `you-dont-own-your-life-alone`

```md
A client told me last month he'd "decided" to wait on the consent strategy until Q3.

He hadn't decided anything. The deadline had decided for him. Three more months of broken cookie banners and unmeasurable consent rates, and he got to call it patience.

That's the trap. 

We think we're choosing when we're actually just watching the calendar make the choice for us.

Ownership of your life sounds like sovereignty. 

You, alone, at the wheel, deciding everything from first principles, answerable to no one. It's a nice story. It's also a fantasy, and chasing it is how people end up paralysed, or isolated, or both.

But ownership isn't control. Control was never on offer. Ownership is choosing, on purpose, most often inside constraints you didn't pick.

The work is harder than it sounds.

Letting things happen feels like nothing, which is exactly why it's so easy. No conflict, no awkward conversation, no version of yourself that has to be wrong out loud. 

The project drifts. The relationship coasts. The job you don't love becomes the job you've had for six years. Nobody chose this. It just accumulated, one deferred decision at a time, the same way a stuck analytics project accumulates "let's revisit after the holidays."

I've sat across the table from people who genuinely believed they were being careful. 

Thorough. 

Responsible. 

What they were actually doing was avoiding the moment where they'd have to own the outcome. Waiting for more certainty is just outsourcing the decision to time.

So you swing the other way. You decide everything, fast, alone, and you call it agency.

This is where the second trap opens up.

No one gets to sail solo. You have a co-founder with his own read on the market. A partner with her own calendar. Clients, kids, weather, the people who have to live with what you decide. 

Treat ownership like a one-man performance and you'll either steamroll everyone around you or burn out trying to hold a boat together that was never built for one set of hands.

I co-founded a company. I did not get to make every call I wanted to make, and the company might be better for it. Some of the best decisions I've been part of were ones I argued against first. That's not weakness. That's the actual mechanism by which two people end up smarter than either one alone.

But it only works when we stop fighting to be right alone and start listening to be right together. 

This is the part that gets left out of most "own your life" advice. Compromise isn't the opposite of ownership. It's the terrain ownership happens on. You don't get to choose whether other people's preferences, needs, and limits are real. 

You only get to choose how you meet them.

When you give ground on something, try this.

Can you say why? Not "it was easier" or "they wouldn't budge," but an actual reason you'd defend later. If yes, that's a compromise. You're still holding your rudder. If you genuinely can't answer, you didn't compromise. You drifted, and dressed it up as flexibility because the truth felt worse.

Ownership, then, isn't the absence of other people's wants. It's staying the one who's part of the choosing, even when the choice is which constraint to accept.

You don't control the wind. You don't control the crew's mood on a bad day. You control the rudder, and whether your hand is actually on it

Most people aren't failing to own their lives because they're weak. They're failing because nobody told them ownership was ever supposed to include other people.

It was. It still is.
```

---

## Article: Why analytics is genuinely hard to learn

Date: 31 May
Slug: `why-analytics-is-genuinely-hard-to-learn`

```md
Learning is hard.

But some things are harder than others. And most people dramatically underestimate where analytics sits on that scale.

Not implementation, analysis.

There's a reasonably well-established framework for why some skills are harder to acquire than others. It comes down to four things: cognitive load, prerequisite depth, feedback loop quality, and abstraction level.

Cognitive load is how much you have to hold in your head simultaneously. Prerequisite depth is how much you need to already know before the new thing makes sense. Feedback loop quality is how quickly and clearly you find out if you were right or wrong. Abstraction is how far removed you are from the thing you're actually trying to understand.

By all four measures, analytics is hard.

The cognitive load issues
You're not looking at stable data.

 You're looking for variations in a liquid changing mass where every element interacts with every other element. A traffic drop could be a broken tag, a seasonal pattern, a campaign ending, a competitor move, or five things happening at once. 

You can't evaluate any single explanation without holding all the others in your head simultaneously.

That's not just complicated. 

That's a genuinely high cognitive load in the technical sense.

The prerequisite problem runs deeper than most people acknowledge. It's not just knowing what a session or a funnel is. You need enough domain knowledge about the specific business to know what normal looks like. Which means analytics has a double prerequisite layer. You need to understand analytics and the business you're applying it to. 

Swap industries and you start over. Not completely, but enough to matter.

The feedback loop problem is where it gets interesting.

The data gives you fast feedback. You can know within hours or even minutes that something changed. But whether your interpretation of that change was correct might take weeks to discover. And often you never find out at all.

 The business moved on. The next campaign started. The context shifted. You can be wrong about causation indefinitely and never get clean confirmation.

The abstraction problem
You are never looking at behavior. You are looking at a record of behavior. A number that represents an action that a human took, filtered through a tracking implementation, aggregated with thousands of other actions, and then presented to you as a metric.

Every step in that chain involves translation. And every translation introduces distance from reality.

Most other difficult skills keep you closer to the thing itself. A surgeon operates on an actual body. A chess player moves actual pieces. A language learner hears actual responses. In analytics, the raw material is always one step removed. You're reading shadows on a wall and trying to describe what cast them.

This matters because it means you can be confidently wrong in ways that feel right. 

A number goes up. You build a story around it. The story is coherent, the data supports it, the stakeholders nod. And the underlying behavior it was supposed to represent was something else entirely.

Abstraction doesn't just make analytics harder to learn. It makes it harder to know when you've learned it.

The data quality problem
The data quality in analytics is significantly below what you'd find in, say, medical diagnostics. A broken tracking tag looks identical to a genuine traffic drop. A consent banner change can silently remove 40% of your data with no error message. GA4 models data and doesn't always distinguish between what's real and what's interpolated. The instrument fails quietly and invisibly.

In medicine, you get a second signal. Clinical observation runs alongside lab results. In analytics, the data is often the only window into reality. If it's broken, you're blind and don't know it.

Which means before you can even begin analyzing, you have to determine whether the data is trustworthy. That's a completely separate skill set from analytical reasoning. Most analysts aren't trained for it. Most organizations don't know it exists.

The population problem
You're never looking at a user. You're looking at a superposition of overlapping populations. Different intent, different context, different devices, different relationships to the product. All collapsed into a single number.

A 3% conversion rate could be 30% conversion from high-intent visitors dragging up a 1% baseline from everyone else. Or two segments moving in opposite directions that happen to net to 3%. The aggregate is real but potentially meaningless without segmentation.

Most analysts read aggregates as if they represent a coherent group. Almost all stakeholders do.

Four problems, not one
So you end up with four problems layered on top of each other.

Is the data trustworthy? Which population am I actually looking at? What pattern is present? What does that mean for behavior?

Most analytics training addresses problem three. Most analytics work lives in problem three. Problems one and two are where the actual leverage is. They're also the most invisible and the most thankless.

Where this leaves analytics
Probably top 20% of human skills to do well. Comparable in difficulty profile to medical diagnosis, with business domain knowledge replacing biological knowledge. Same high element interactivity, same weak feedback loops, same translation from observable signals to hidden causes.

Harder than chess. Harder than a spoken foreign language. Not harder than becoming a great writer or a psychiatrist, but uncomfortably close.

And unlike bomb disposal, the difficulty is chronic rather than acute. No hard deadline. No binary outcome. Just ambiguity, indefinitely.

Start making it hard

None of which stops organizations from assuming that if you give people data, they'll naturally know what to do with it.

Learning to use data well is like learning a new language, a new type of math, consumer psychology, and a new habit at the same time.

You don't just become data-driven by having data.

It's a process. 

A slow one. 

And it starts with taking the difficulty seriously.
```

---

## Article: THE SHORTCUT DOCTRINE

Date: 30 Apr
Slug: `the-shortcut-doctrine`

```md
Stop Making Things Hard for Yourself
We have a strange relationship with difficulty. We confuse it with value. 

If something takes a long time, requires multiple steps, and demands patience, we tend to trust it more. We assume the complexity means something important is happening. 

We've been trained to equate friction with rigour -  and easy with shortcuts.

That word. 

Shortcuts. 

Notice the slight flinch you might feel when you hear it. The subtle implication that you're cutting corners. Taking the easy way out. 

Being a little bit lazy.

I want to argue the opposite.

A shortcut is not a compromise. It is a commitment  to the thing that actually matters, at the expense of everything that doesn't.

The complexity trap

Look at your average analytics dashboard. Your standard reporting workflow. Your morning routine. Your inbox. 

Most of what fills the frame is not load-bearing. 

It is not making the structure stronger. It is just there - accumulated residue from decisions made for forgotten reasons, never questioned, never removed.

Organisations are especially good at this. 

They build processes to solve problems, then keep the processes long after the problems have vanished. New layers are added on top of old ones. Meetings multiply. Templates proliferate. The overhead grows, and the actual work - the thing the organisation exists to do - gets harder to find.

This is not entropy. Entropy is passive. 

This is something more deliberate: we add complexity because it feels like progress. 

More steps mean more control. 

More options mean more flexibility. 

More data means better decisions.

Except it doesn't. Not usually.

Few cultures measure success by the extent of the bureaucracy. 

Simple things gets done

Here is a truth so obvious it barely needs saying, and yet gets ignored everywhere I look: the simpler something is, the more likely it is to actually happen.

If you want people to read your report, make it one page. If you want to remember something, write it in one sentence. If you want to build a habit, reduce it until it cannot be made smaller. 

A workout you will do beats a perfect workout you won't. 

A decision made today beats an optimised decision made in three weeks after four more stakeholder reviews.

Shortcuts are not about being sloppy. They are about being honest about the friction that stands between intention and action - and systematically removing it.

80% of the complexity in most systems serves the remaining 20% of edge cases, rarely. Simplify for the majority. Let the edge cases come to you.

Less is still more

The "less is more" philosophy gets misread as minimalism for its own sake. Bare walls. Empty desks. The aesthetic of having removed things. 

That is the surface. 

The actual principle is more demanding: ruthlessly prioritise what creates value, and eliminate everything else without sentimentality.

This requires more thinking, not less. 

Deciding what to keep is harder than accumulating. It means you have to know what you're optimising for. You have to have an opinion about what matters. 

You have to be willing to kill your darlings - the clever process, the comprehensive framework, the beautiful spreadsheet that nobody actually uses.

I work with organisations that have genuinely lost the thread. 

They cannot tell you, clearly, what their analytics is for. They have every tool. They measure everything. They sit in dashboards for hours. 

And they cannot make a simple decision about their business because the signal is buried in the noise of their own thoroughness.

The goal is not to have nothing. 

The goal is to have exactly what you need - and know immediately where it is.

What a real shortcut looks like

A real shortcut begins with an honest question: what is the minimum I need to achieve the actual outcome?

Not the deliverable. Not the artefact. The outcome. 

The thing that changes in the world because this work exists.

That question is uncomfortable because it often reveals that most of what you're doing doesn't connect to an outcome at all. It connects to a process. 

A habit. 

An assumption about what professionalism looks like. A fear of being seen as someone who didn't do enough.

THE SHORTCUT TEST: 

Take your most complex recurring task. Write down every step. Then ask - if I removed half of these steps, what would actually break? You will find the answer is usually: not much. 

Do the experiment. 

Report back.

FIVE PLACES TO START CUTTING
1. YOUR REPORTING.

Every metric that doesn't connect to a decision should be removed or archived. If seeing the number doesn't change what you do, stop reporting it. You are not measured on the comprehensiveness of your measurement.

2. YOUR MEETINGS.

Most of what happens in meetings could be an email. Most of what could be an email doesn't need to exist at all. If a meeting doesn't have a stated decision to be made, it probably should not happen. Protect your most expensive resource - collective attention - like it is scarce. It is.

3. YOUR TOOLS.

The tool stack is where good intentions go to die. Every platform you add creates dependencies, learning curves, and maintenance overhead. Before adopting anything new, ask what you will stop using to make room for it. If the answer is nothing, the answer should be no.

4. YOUR EXPLANATIONS.

If your strategy document requires a long explanation to be understood, the strategy itself is not clear enough. The explanation is a symptom. Go back and simplify the thing, not the description of it.

5. YOUR DECISIONS.

Most decisions that feel big are not actually that consequential. The reversible ones should be made quickly, with the best available information, and revisited if needed. Reserve your deliberation for the truly irreversible. Most decisions are not irreversible.

The permission you were waiting for

If you work in an organisation, there is a good chance that you have added complexity to signal effort. That you have built frameworks to demonstrate rigour. That you have written long documents when a short conversation would have done it. That you have made your work look thorough because you were not confident that simple would be trusted.

I understand this. 

Really. 

It is rational behaviour in environments that reward visible effort over actual outcome. 

But it is worth naming clearly for what it is: theatre. Expensive, exhausting theatre that crowds out the actual work.

The shortcut - the genuinely, honestly short path from problem to outcome - is not lazy. It is skilled. 

It is the product of enough experience to know what matters, enough confidence to stop performing, and enough discipline to keep removing things until only the essential remains.

That is not the easy way out.

That is the hard way in.
```

---

## Article: You already know which one is better - the high cost of easy choices

Date: 27 Mar
Slug: `you-already-know-which-one-is-better-the-high-cost-of-easy-choices`

```md
You're standing at the bottom of a shopping mall.

Stairs on the left. Escalator on the right.

You know which one is better for you. 

Everyone knows. 

Hell, I know. 

It's not a knowledge problem; there is no information gap, no noise.

And yet.

Roughly 90% of people choose the escalator. Every time. In every study. In airports, malls, train stations, and universities. Across cultures, across age groups, across fitness levels.

Ninety percent.

Not because they don't know. 

But because knowing has almost nothing to do with it.

Researchers have been studying this exact choice point since the 1980s. They've tried motivational signs. Health warnings. Footprint stickers on the floor. Role models planted at the base of the stairs.

Signs roughly double stair usage. 

Which might sound impressive until you realize they're doubling from 3.6% to 6.9%. We went from “almost nobody” to “slightly more than almost nobody”.

Fireworks please.

One study even found that signs promoting stair use actually reduced the number of people walking up the escalator. The intervention meant to increase activity inadvertently made some people more passive. 

We nudged them sideways, not forward.

But this is also where it gets interesting.

If you are a nerd like me.

The thing that stops you isn't the stairs. It's the decision to take the stairs.

Research on effort-based decision-making shows that people consistently overestimate how hard something will feel before they do it. 

The anticipated effort is larger than the actual effort. 

Your brain runs a forecast, and that forecast is inflated.

Even worse, the act of evaluating the effort becomes a cost in itself. 

Studies show that people who focus on effort information first, before considering the reward, are significantly less willing to choose the harder option. 

The mere act of thinking about how hard something will be makes you less likely to do it.

So the real tax at the bottom of the stairs isn't physical. It's cognitive. 

You're not avoiding 30 seconds of climbing. You're avoiding the mental friction of choosing to climb. By the time your brain has weighed "stairs vs. escalator," the calculation is already skewed. 

The escalator costs nothing to choose. 

The stairs cost a decision.

This is why environmental design works and information campaigns don't.

When researchers placed stairs far from the escalator, stair usage went up 95%. When architects built buildings with central, beautiful staircases and tucked the elevator behind a steel door, over 80% of people took the stairs. 

In buildings where the elevator was front and center, only 8% did.

Nobody's knowledge changed. 

The decision was just removed.

An actual no-brainer. 

I think about this constantly. Not because I care deeply about stair usage. But because this pattern shows up everywhere.

We assume that if people understand the right thing to do, they'll do it. That awareness creates action. That insight creates change.

It doesn't.

Knowing the stairs are healthier doesn't move your feet. Knowing data should inform decisions doesn't make an organization data-driven. Knowing feedback matters doesn't make people give it.

The gap between knowing and doing isn't a knowledge gap. 

It's a friction gap. 

And most of that friction isn't in the actual doing. 

It's in the deciding.

Every hard choice has two costs. The actual cost of the action. And the perceived cost, which is almost always higher. The distance between those two numbers is where most good intentions go to die.

So if you're trying to change behavior, stop asking "do they understand?" Start asking "what's the escalator in this situation?" What's the effortless default that people will keep choosing, no matter how much they know about the better alternative?

Then redesign the environment. 

Make your stairs beautiful. 

Move your escalator further away.

Most change efforts fail not because the case wasn't compelling enough.

They fail because the escalator was too close. 

And the stairs required a decision.
```

---

## Article: Fun at work is not a perk

Date: 28 Feb
Slug: `fun-at-work-is-not-a-perk`

```md
Nobody puts "must enjoy laughing" in a job description.

We list tools. Frameworks. Years of experience. Growth mindset (whatever that means). But not humor. Not joy. Not the ability to make a Monday feel like something other than a slow-moving punishment.

And yet.

Ask anyone about the best job they've ever had. The work itself rarely comes up first. What comes up is the people. The inside jokes. The time someone brought the wrong cake to the wrong meeting and it somehow became the funniest thing that happened all year.

We remember the fun.

It’s the one thing I keep noticing in the work I do with teams. The highest-performing ones aren't normally the most serious. They're the most relaxed. There's a lightness to them. An ease. A willingness to say "that was a disaster" and laugh about it before they fix it.

The struggling teams?

Meetings that feel like funerals. Updates delivered with the energy of a tax return. Humor quietly exiled somewhere around the third restructuring.

We've built an entire culture around performing seriousness at work.

Serious faces in serious meetings about serious goals. Decks with serious fonts. Language that's been sanitized of any personality. We've mistaken solemnity for professionalism. Earnestness for competence.

But here's what the research keeps confirming, and what anyone who's ever had a genuinely good job already knows. Fun is not the opposite of productive. Fun is often what makes “productive” possible.

When people laugh together, psychological safety goes up. When psychological safety goes up, people say what they actually think. When people say what they actually think, better decisions get made.

It's not complicated. It's just inconvenient to admit.

I worked with a team once that had a ritual. Every Friday, someone shared the worst idea they'd had that week. Not to mock themselves - to celebrate the attempt. To normalize imperfection with a bit of joy.

They were one of the most innovative teams I'd encountered.

Coincidence? Maybe. 

But I doubt it.

The other thing about humor is what it signals. When someone can be funny at work - not cruel, not performative, just genuinely funny - it means they feel safe enough to be themselves. That's not a small thing. That's the whole thing.

People don't give their best to jobs where they have to hide who they are.

They clock in, do enough, and clock out. They save their real selves for the weekend.

And organizations wonder why engagement scores look the way they do.

None of this means turning every retrospective into a comedy show. Or forcing fun with team-building activities that make everyone quietly despair.

Forced fun is its own kind of misery.

What it means is simpler. Let people be human. Leave room for the unexpected laugh. Don't optimize the personality out of every interaction. Hire people you'd actually enjoy being stuck in an airport with.

And maybe - just maybe - stop treating smiles like it's the enemy of ambition.

The best work I've ever done has had humor in it somewhere.

Too many dad-jokes, maybe, but certainly humor. 

A line that made someone smile. A meeting that ended with everyone slightly lighter than when they walked in. A collaboration where laughter was just part of the vocabulary.

It's not a perk.

It's how you know you're doing it right. 
```

---

## Article: The Five Knives to Get Unstuck

Date: 13 Jan
Slug: `the-five-knives-to-get-unstuck`

```md
Most organizations hire fixers when they're already six months past stuck. 

The analytics implementation stalled. The consent strategy broke. The retail media reporting framework doesn't work. Everyone knows there's a problem. Nobody knows how to fix it. 

It's often because they're looking for certainty that doesn't exist. A comprehensive root cause analysis, stakeholder alignment workshops, and a phased remediation roadmap. 

The solution is simpler: stop having meetings about the problem and start making different decisions. 

Create movement. Create momentum. You'll never get unstuck by doing nothing.

After two decades of unsticking analytics projects, I've learned that decision paralysis is the problem, not a symptom of it. The technical challenges are real, but solvable. What's not solvable is an organization more comfortable analyzing than deciding. 

Here are some of the ways to short-circuit it:

1. Kill the "Let's gather more data" reflex
If you've been stuck for three months, you have enough data. You're avoiding a decision. Name what decision you're avoiding, then make it. 

Monday.

Or better… today. 

I once walked into a retail media project where they'd spent five months "researching attribution models" because nobody wanted to admit the real decision was whether to show advertisers conservative numbers or inflated ones. 

We picked conservative. 

Launched in three weeks.

2. Find the decision that unlocks five others
Stuck projects have dependency chains. "We can't launch reporting until we finalize the attribution model, until we agree on KPI definitions, until..." Find the one decision at the top of the chain and force it. Everything else cascades.

3. Replace "What's the right answer?" with "What can we test in two weeks?"
Perfect solutions take six months to design and fail in production, because the context has already changed. 

Testable hypotheses take two weeks and teach you what actually works. Ship the imperfect version. 

Learn fast. Iterate.

The best consent management fix I ever implemented was technically "wrong" by the textbook. But it worked, it shipped in ten days, and we refined it based on real user behavior instead of theoretical edge cases.

4. Eliminate the veto holders
Every stuck project has someone who can say "no" or "later" but never has to say yes. Legal, compliance, IT security—all valid stakeholders, all capable of blocking indefinitely because of risk, uncertainty, or lack of understanding. 

Give them a deadline: "We launch in two weeks with your input or without it. Your choice."

5. Stop optimizing what you'll never ship
I've seen analytics teams spend four months perfecting dashboard designs that never launched because they were still debating data governance. 

Shipping a useful-but-imperfect solution beats perfecting one that stays in staging.

The pattern
Stuck organizations drown in analysis. Unstuck organizations make smaller, faster decisions and learn from what breaks. 

It's Bezos's two-way doors. Most decisions are reversible. We can change our minds, we can undo most choices. 

But we can't undo inaction. 

You don't need more data. You need someone willing to make a call.

That's what fixers do. We show up, identify the decision everyone's avoiding, and force it. The project usually unsticks within a week.

The hard part isn't the technical problem. It's admitting you've been avoiding the decision.

Sometimes you need an outsider to say it.
```

---

## Article: Delivering a keynote that actually matters

Date: 31 Dec
Slug: `delivering-a-keynote-that-actually-matters`

```md
Five principles. One job. 
Five principles. One job.

After twenty years of speaking at conferences from Silicon Valley to Mumbai, I’ve watched more keynotes than I can count. 

A lot are forgettable. 

Most are unsurpricingly similar. 

Some are actively painful. 

And a tiny handful genuinely change how people think about their work.

The difference isn’t the speaker’s résumé. It’s not the production budget or the clicker choreography. It’s whether the speaker understands what a keynote actually is.

A keynote isn’t a presentation. It’s a performance with a purpose. And in my book, if you get these five things right, you’ll deliver something people remember long after the conference swag hits the recycling bin.

Priciple one: It’s a story, not a slide deck
If your “keynote” still works when you email the deck around afterwards, you didn’t have a keynote. You had a document.

When I grabbed the mic at Superweek to talk about “It’s the process, stupid,” I didn’t start with an agenda slide. I started with a moment, the one where someone says, “Let’s feed the analytics data into our AI system,” and you smile politely while your stomach drops, because you know your data quality isn’t ready for that conversation.

That’s a story. It has tension, stakes, and a character facing a choice.

Too many keynotes are slide decks wearing a human. Bullet points dressed up with stock photos. The speaker becomes a narrator for PowerPoint, reading what everyone can already see. Slides should be visual punctuation, not paragraphs. When I presented “The Age of Activation,” the slides weren’t the talk, they were the beats of the talk. A chart here. A single phrase there. Something that made the point land harder, not something that made me redundant.

Think about it. When did you last remember a bullet point from a conference?

 You don’t. 

But you remember the speaker who told you about the time their entire analytics infrastructure collapsed because someone changed one tag and didn’t tell anyone. Because that’s a story.

-

In practice: before you open Keynote or PowerPoint, write the story. What changes? What’s at risk? What did you learn that your audience needs to know? 

If you can’t tell it over coffee, you don’t have a keynote yet.

Principle two: It’s about the audience, not you
Here’s the trap every experienced speaker falls into. You’ve done interesting work. You’ve solved hard problems. You’ve collected war stories. And you want to share all of them.

Don’t.

Nobody cares about your clever solution to a problem they don’t have. They care about their problems. Your job is to help them see those problems differently or give them something they can actually use.

When I spoke about digital maturity in Amsterdam, I could have spent forty-five minutes explaining IIH Nordic’s framework. 

Instead, I focused on the questions everyone in the room was already asking themselves: Are we keeping pace or leading? Are our investments creating impact or just noise?

It’s a subtle shift, but it changes everything. One approach centers on your expertise. The other centers their reality. And that’s the whole point.

People already see you as a expert, that why both you and they are there. 

-

In practice: for every story you plan to tell, ask yourself, “What decision does this help my audience make better?” If the answer is “none,” cut it. If the answer is “it shows how smart I am,” definitely cut it.

Principle three: It has to be memorable
Three months after your keynote, what will people remember?

If your answer is “the comprehensive framework I explained in detail,” you’re in trouble. They won’t remember it. They’ll remember the moment they laughed, the metaphor that clicked, or the single sentence that made them uncomfortable, in a useful way.

When I talked about decision analytics at MeasureCamp Munich, people didn’t like it because I had the most data. It was because the message stuck: We’re optimizing for a world that won’t exist. Not “things are changing.” Not “we need to adapt.” 

That kind of sentence has a hook in it. It doesn’t let you shrug and move on.

At AllWeb in Tirana, I spoke about campaign tracking, one of the driest topics in our industry, but framed it as., There have never been more ways to go wrong and wrapped it in a story about solving murders. 

Everyone in the room felt that in their bones, because they’d gone wrong recently.

-

In practice: try to build your keynote around one sentence. A single idea that people can repeat in the hallway and remember when they get up the next morning or the morning after that. Everything else exists to support that sentence. If people can’t summarize your talk in one line, you gave them too much, and they’ll remember too little.

Principle four: It has to be uncomplicated
Complexity is easy. Simplicity is hard.

I could fill an hour with measurement protocols, governance frameworks, and attribution nuance and I’d lose most of the room before the 7th slide. The goal isn’t to prove you know complex things. The goal is to make complex things clear.

Adding a new connection between two know points.

When I spoke about data governance at the Google Conference in Milan, I didn’t try to teach governance. I tried to land one insight. That for twenty years, digital analytics tried to be everything to everybody, and what most companies have to show for it is data in silos. The solution isn’t more tools. It’s just right for somebody.

That’s simple. Not simplistic. There’s depth underneath it, but it’s clear enough that people can hold it in their heads while you build on it. That’s the craft.

-

In practice: if you can’t explain your core message to someone outside your field, it’s too complicated. Cut the jargon. Remove the nested frameworks. Find the simple truth underneath the complexity. Your audience will think you’re smarter, not dumber.

Principle five: It has to change something
This is the non-negotiable. If your keynote doesn’t change something, it’s not a keynote. It’s a theatre.

There are three ways a keynote can matter. It can change minds, and have people leave thinking differently. When I argue that we’re building a “faster horse” by using AI to optimize yesterday’s methods instead of rethinking what customers actually need, that creates a pause. The next time someone pitches an AI optimization project, they ask a better question.

It can change hearts; people leave caring about something they didn’t care about before. My Superweek talk “Infants and Guns” wasn’t about cleverness. It was about responsibility. Data ethics isn’t a compliance exercise. It’s a human one.

And it can change actions. Get people do actually do something different on Monday. When I talk about the analytics circus, the action is simple: stop waiting for management to be impressed by reports they don’t understand, and start building insights that drive decisions.

The best feedback I receive is never about slides or stage presence. It’s words like “enlightening,” “engaging,” and “deeply valuable.” That’s the language of change.

-

In practice: before you agree to speak, ask yourself what you want to change. Then structure everything, story, examples, call to action, around that change. If you can’t articulate what changes, don’t take the stage.

The compound effect
When you get all five right, something interesting happens. 

Your story makes people lean in. Your focus on them earns trust. Your framing makes the idea stick. Your simplicity makes it shareable. And your intent to change makes it matter.

The bar for conference keynotes is criminally low. Most speakers show up with the same deck they’ve delivered twenty times, swap in the event logo, and call it new. They deliver information that the audience could have read in a blog post. They finish to polite applause and are forgotten before lunch.

You can do better than that.

Your audience gave you their time and attention. Give them a story they’ll remember, an insight they’ll use, and a sentence that changes how they see their work.

Give them a keynote that actually matters.


But be your own judge if this is just me blabbering or if I actually walk my own talk.

https://www.youtube.com/watch?v=1NK1NFRLR9U&t=72s

https://www.youtube.com/watch?v=_NN8AhNUFqE&t=38s

https://www.youtube.com/watch?v=y9N32JpaYdI&t=566s 
```

---

## Article: Introducing the “fractal digital fixer”

Date: 24 Nov
Slug: `introducing-the-fractal-digital-fixer`

```md
- or what some pirates actually do for a living
Two months ago, I wrote about leaving the Navy to become a pirate. Here's what piracy actually looks like - for me at least.

Last month, a company reached out. They'd spent three months trying to find the right agency partner to help them with their platform. 

They'd talked to agencies, sat through cases, made spreadsheets comparing skill sets. 

Nothing clicked. 

They were stuck, the project was stuck, business was “unhappening”.

Two conversations later, I connected them with the right partner. 

Deal done. 

Problem solved.

And this wasn't a one-off. 

It's become the pattern.

Someone's analytics stack won't align. A vendor relationship isn't working. A vendor needs the right partners in a market. An implementation failed and nobody knows why. 

The internal team has tried all the usual “stuff” and “things”. 

Then someone mentions my name.

I show up, and more often than not manage to diagnose what's actually wrong (usually different from what is normally wrong), and either fix it with them or find the person, tool or partner who can.

Maybe not “easy-peasy”, but kind of close

Turns out, when you raise the black flag and sail fractal, you don't just gain freedom. 

You become something the market desperately needs but doesn't have a name for yet.

A fixer.

What the Navy can't teach you
Corporate life trains you to be excellent within boundaries. You learn the org chart, the approved vendor list, the budget cycle, the escalation path. 

These constraints become invisible after a while, you forget they're even there.

You learn to stay in your lane.

But something happens when you leave.

You see patterns the Navy never could. 

You've worked across enough organizations to know that "the analytics implementation problem" is almost never actually about analytics. 

It's about unclear requirements, misaligned stakeholders, or teams who picked a solution before understanding the problem, because that’s just how we do things…

You build a network the Navy never would. Your value isn't locked inside one company's hierarchy. 

You know the landscape, which agencies actually deliver, which consultants are worth their rate, which problems can be solved internally vs. when you need outside help.

You develop judgment the Navy never rewarded. 

In corporate life, playing it safe is rational. 

As a pirate, your reputation is everything. You learn to say no to bad fits and yes to problems that genuinely need solving.

The irony is of course that everything that made me valuable as “an employee”, strategic thinking, pattern recognition, execution capability, is 10x more valuable in the open market. 

I just needed to reset the constraints to see it.

The fixer's advantage
Traditional consultants sell time and methodology. Vendors sell products. Employees sell loyalty and availability.

Fixers sell something else entirely, velocity to resolution.

Organizations, vendors and agencies call when:

Their internal team is stuck

Traditional consulting isn't working

Vendor relationships have soured

They've already tried the obvious solutions

They don't want a three-month discovery process. They don't want a 50-slide deck. 

They want someone who's seen this movie before, knows where it goes, and can cut straight to what actually works.

But this only works because of the fractal position. 

I'm not selling a particular methodology or product. I'm not trying to maximize billable hours. 

My value comes from seeing across domains, analytics, implementation, vendor landscape, organizational dynamics, and connecting the dots faster than people locked into single perspectives can.

The platform example? 

I wasn't the best expert for that platform. 

I wasn't even involved in the implementation. 

But I knew what good implementations look like, I knew which partners specialize in what, and I understood what the client actually needed vs. what they said they needed.

That's the fixer's advantage. 

Not deeper expertise. Wider context.

Why this role didn't exist before
Twenty years ago, this position couldn't exist. 

The maritime chart of business technology was simple enough that internal teams could navigate it. 

The vendor landscape was manageable. 

Implementations followed predictable patterns.

Today, the seas are different.

The martech landscape alone has more than 11,000+ solutions. Every vendor claims they're "easy to implement" and "integrate with everything." 

Every consultant has a framework. 

Every implementation is supposedly "best in class."

Now they even have AI to supercharge everything.

But here's the truth nobody likes to say out loud, most organizations are drowning in choices and failing at execution.

They've got the budget and the smart people. 

What they don't have is someone who's seen enough implementations fail to know why they fail, and more importantly, how to avoid repeating the same mistakes.

The fixer role exists in the gap between what companies think they need (another consultant, another tool, another vendor) and what they actually need (someone who's charted these waters before).

The economics of being indispensable
The Navy taught me to be valuable. Piracy taught me to be indispensable.

Here's the difference:

Valuable: You're good at your job. You hit your KPIs. You're promotable. But you're also replaceable, the system is designed to keep working without you.

Indispensable: You solve problems that only exist outside the system. Problems that emerge when standard approaches fail. Problems where the stakes are high and the client has already wasted time and money on wrong turns.

The client that couldn't find the right partner? 

They'd already burned three months. 

Every week of delay meant lost revenue from campaigns they couldn't properly track. When I connected them with the right partner in one conversation, I didn't just save them time. I unlocked the value they were already trying to create.

That's indispensable.

And the economics reflect it. 

You're not competing on hourly rates or retainer fees. You're competing on outcomes and velocity. The client isn't thinking "can we get someone cheaper?" They're hopefully thinking "how fast can this person make our problem go away?"

Have a situation you need to go away, feel free to reach out, because most likely, I can fix it. 

But before you reach out, consider for 3 minutes how much this problem is currently costing you - and then let’s talk.

You can find me at steen@steen.fyi.



Previous
Delivering a keynote that actually matters
```

---

## Article: When everything feels like a priority, nothing actually is

Date: 31 Oct
Slug: `when-everything-feels-like-a-priority-nothing-actually-is`

```md
You know that feeling when you’ve got seventeen browser tabs open, three half-finished projects on your desk, and a mental list that keeps growing faster than you can cross things off? 

Yeah, that one.

Here’s the thing about too many options - they don’t actually give us freedom. 

They paralyze us. 

We end up scrolling through possibilities instead of doing anything real.

Right now I’m re-learning this the hard way, and the answer isn’t better organization or a fancier to-do app. 

It’s subtraction.

Start by asking yourself what you can just… not do. 

Not later. 

Not someday. 

Just never. 

Because honestly? 

Most of those options aren’t really opportunities; they’re distractions wearing a convincing disguise.

Pick three things. 

That’s it. 

Three things that actually move the needle on what matters to you right now. 

Everything else gets a polite “not today.”

And look, this feels terrifying at first. 

What if you choose wrong? 

What if you miss out? 

Science shows we can only make so many decisions every day then we start suffering from “decision fatigue".

Yes, that’s an actual professional term. 

So less is actually more, at least when it comes to decision making.  

Because you finally make progress. You get momentum. 

You stop living in decision fatigue and start living in actual forward motion.

The goal isn’t to make perfect choices. 

It’s to make any choice and commit to it long enough to see where it goes.

Close the tabs. 

Pick your three. 

Start there.​​​​​​​​​​​​​​​​
```

---

## Article: Why I Left My Good Job to Go Fractal

Date: 29 Sept
Slug: `why-i-left-my-good-job-to-go-fractal`

```md
A Pirate's Manifesto. 
“Why join the Navy when you can be a pirate?”
Steve Jobs

Six months ago, I decided to walk away from a more than excellent job at IIH Nordic. 

A month ago I walked out. 

Good salary, respected company, a four day workweek, clear career, co-founded it  - everything that conventional wisdom tells us to value. My colleagues thought I'd lost my mind. My partner was concerned for my sanity. 

Even I questioned the decision in those quiet 3 AM moments we all know too well.

Well, sometimes the biggest risk is not taking one at all.

The navy mindset: comfort in structure
Corporate life is seductive in its predictability. 

At IIH Nordic, I knew exactly what was expected of me. I had a title, was part of a team, a manager, and a neat little box on the org chart. 

The Navy offers structure, hierarchy, and the comfort of knowing your place in the grand machine.

For years, this felt like winning. I was doing my part, hitting my KPIs, and collecting the accolades that come with being a "high performer." But somewhere along the way, I realized I wasn't really building anything new, I was just maintaining a vision.

The Navy teaches you to follow orders, execute strategies, and optimize within existing frameworks. These are valuable skills, but they come with invisible handcuffs. 

You become excellent at playing by rules you didn't write, solving problems you didn't choose, using tools someone else selected.

The pirate's call: freedom to create
Going fractal - operating as an independent, multifaceted professional across multiple domains - is the modern equivalent of raising the black flag. 

It means rejecting the false security of employment in favor of something far more valuable. 

Autonomy over your own destiny.

Pirates don't ask permission. They identify opportunities, assemble crews, and chart their own course. They're comfortable with uncertainty because they understand something the Navy doesn't. 

In a rapidly changing world, adaptability beats predictability every time.

Why "fractal" changes everything
The term "fractal" captures something crucial about the modern economy. 

Like mathematical fractals, successful professionals today need to be self-similar at every scale, bringing the same core capabilities whether they're working on a small project or a massive transformation.

Going fractal means:

Portfolio thinking over position thinking. 
Instead of optimizing for a single role, you optimize for a diverse set of capabilities that can be combined in infinite ways.

Network effects over hierarchy. 
Your value comes not from your position in a pyramid, but from your ability to connect ideas, people, and opportunities across domains.

Value creation over value capture. 
Rather than extracting a salary from existing systems, you focus on creating new value in the marketplace.

Learning velocity over expertise depth. 
You become someone who can rapidly acquire new capabilities rather than someone who knows one thing extremely well.

The economics of independence
Let's be brutally honest about the math. 

In the short term, leaving IIH Nordic meant giving up a guaranteed paycheck, benefits, and the psychological comfort of employment. But the economics of independence follow a different logic.

As an employee, your compensation is capped by someone else's budget and risk tolerance. As a fractal professional, your compensation is limited only by the value you can create and capture. 

More importantly, you own the upside of your own success.

The corporate world is optimized for predictable, incremental value creation. 

But we live in an exponential age where the biggest opportunities come from connecting disparate domains, identifying emerging patterns, and moving faster than institutions can.

Lessons from a month of piracy
The transition hasn't been smooth yet. Independence is messy, uncertain, and occasionally terrifying. But it's also been the most intellectually stimulating and personally rewarding period of my career.

I've learned that most of what we call "job security" is actually just institutionalized risk. 

When your income depends on a single employer, you're not diversified, you're concentrated. Going fractal forces you to build real resilience through multiple revenue streams, diverse capabilities, and a broad network.

I've also discovered that the skills that made me successful in corporate environments,  strategic thinking, execution capability, and relationship building are even more valuable in the open market. 

The difference is that now I more than ever get to choose how to deploy them.

The future belongs to pirates
We're living through the beginning of the collapse of the industrial employment model. The half-life of skills is shrinking, organizational structures are flattening, and the most interesting work happens at the intersections between traditional domains.

In this environment, the Navy mindset becomes a liability. 

Companies need people who can think like owners, not employees. 

They need professionals who can navigate ambiguity, build from scratch, and take responsibility for outcomes rather than just activities.

Going fractal isn't just a career choice, it's a bet on the future of work itself.

For those still in the Navy
If you're reading this from your corporate cubicle (or home office), wondering if you should leap, here's my advice. 

Don’t. 

Wait

Think. 

And maybe start building your pirate ship while you're still in the navy.

Develop capabilities that go beyond your current role. Build relationships outside your industry. Create value in domains that interest you, even if they don't directly relate to your job. 

Most importantly, start thinking like an owner rather than an operator.

The question isn't whether the future of work will be more fractal, it's whether you'll be ready for it.

The Navy will always be there for those who prefer the comfort of orders and the predictability of hierarchy. But for those ready to chart their own course, the open seas have never been more promising.

Why become a pirate when you can join the Navy?

Because some of us were born to sail under our own flag.
```

---

## Article: Why we love revolution over evolution

Date: 2 Sept
Slug: `why-we-love-revolution-over-evolution`

```md
Yes, your brain is lazy.

That’s the hard science.

And that’s why we’re all secretly hoping for our productivity fairy godmother to wave her magic wand and fix everything. Meanwhile, the humble and overlooked janitor of incremental improvement keeps showing up, quietly making things better one small sweep at a time.

Your team’s “janitor services of incremental perfection” involve fixing tiny bugs, streamlining that annoying approval process, and actually reading meeting notes before the next meeting.

Boring? Absolutely.

Effective? Annoyingly so.

These unglamorous tweaks compound like interest on a savings account nobody wants to check.

But we’re still addicted to the “silver bullet of random reinvention.”

The quick win.

We’d rather try to reorganize the entire department than admit we just need to return emails faster. We’ll try to implement blockchain solutions for problems that require basic communication skills. We’ll try to rebrand our way out of issues that just need good old-fashioned elbow grease and 40% commitment.

The psychology of our preference for magic
Our brains are wired like impatient toddlers in a candy store.

We suffer from what psychologists call “present bias”, we dramatically overvalue immediate rewards while discounting future benefits.

The promise of revolutionary change offers instant gratification for our ego, while incremental improvement requires the psychological equivalent of eating our vegetables.

Then there’s the “planning fallacy,” our delightful tendency to underestimate how long things take and overestimate our ability to execute complex changes. We genuinely believe that this time, the complete system overhaul will go smoothly.

Yeah, right.

And the “sunk cost fallacy” just makes things worse. Once we’ve invested in the big transformation project, we’re psychologically committed to seeing it through, even when the janitor approach would deliver better results faster.

We’d rather fail spectacularly with our revolutionary vision than succeed modestly with steady improvement.

There’s also the “availability heuristic” at play.

We remember the rare stories of overnight success more vividly than the countless examples of gradual progress. Steve Jobs launching the iPhone makes headlines; Toyota’s decades of manufacturing improvements do not.

The cost of chasing unicorns
This psychological bias toward revolution creates real organizational damage.

Companies burn through resources on transformation initiatives that promise everything and deliver confusion.

Teams become change-fatigued, developing immunity to improvement efforts because they’ve seen too many “game-changing” strategies fizzle out.

Meanwhile, competitors practicing incremental improvement quietly eat market share.

Amazon didn’t revolutionize retail overnight; they just obsessively improved logistics, customer experience, and technology infrastructure one small optimization at a time. Their “janitor services” approach built an empire while others chased the next big disruption.

The irony is simple.

While we’re busy hunting unicorns and silver bullets, the janitor quietly builds the stable where real progress lives.

Those small daily improvements don’t make headlines, but they make everything else possible.

Sometimes the most radical thing you can do is sweep the same floor every single day, knowing that consistency creates the foundation for genuine innovation to eventually flourish.

About Me
Director of Data Innovation at IIH Nordic
Board Member at CDOIQ, Community Builder & International Keynote Speaker.

I connect people, data, and business outcomes.

With over 20 years of experience, I’m on a mission to make people realize the business and commercial value of data.

On Medium, I write to help others in Data, AI, Digital and Web Analytics navigate their journeys and actually make stuff happen.

Steen.fyi | LinkedIn | Spotify | YouTube 
```

---

## Article: Treating Decisions as Assets, Not To-Do Items

Date: 9 Jun
Slug: `treating-decisions-as-assets-not-to-do-items`

```md
By Steen Rasmussen: A talk with Slobodan Manić.
In the race to become faster, more agile, and more effective, maybe the issue isn’t our productivity systems. Maybe it’s the way we think about decisions. Are they simply tasks to tick off? Or can they be seen as investments, moments that create momentum, clarity, and leverage?

In this fourth session of the Urgency Series, I sat down with Slobodan “Sani” Manić, host of the No Hacks Podcast, to explore how organizations and individuals can shift their approach to decision-making. Drawing from his expertise in product strategy and UX design, Sani offered a fresh lens on how decision-making can be faster, cleaner, and more empowering if we’re willing to reframe it.

Why This Talk?
This conversation is part of an ongoing series that complements my Maven cohort focused on urgency and action. The insights stem from IIH Nordic’s transformation to a 4-day, 30-hour workweek. It was not just a schedule change, but a cultural reset in how we define urgency, productivity, and meaningful progress.

What we found wasn’t just about working fewer hours. It was about working with greater intention. And that required rethinking how we made decisions, treating them not as overhead, but as a form of capital.

If you’ve ever felt stuck in limbo, overwhelmed by choices, or paralyzed by indecision, this conversation is for you.

Who Is Slobodan “Sani” Manić?
Sani Manić is a globally recognized UX and CRO consultant, best known as the host of the No Hacks Podcast. With a career steeped in product design, user research, and experimentation, he helps companies remove friction from their digital experiences, enabling users to navigate clearer and faster journeys.

But what sets Sani apart isn’t just his UX credentials. It’s his belief in momentum. He approaches decisions like a product manager approaches features: they’re testable, trackable, and most importantly, actionable. And in our talk, that mindset came through.

The Conversation
Time Is Finite. Act Accordingly.
We opened with a simple question: What stops people from getting things done?

Sani didn’t hesitate.

“Everyone thinks their time on Earth is unlimited. And I think that’s the root of all the problems.”

It was a jarring but accurate take. He pointed out how we often delay goals, writing a book, starting a business, committing to a lifestyle change, not because we lack capability, but because we act like we have forever. We assume there will always be time. Until there isn’t.

I joked about having a classic "mañana" moment during a recent trip to Madrid, where everything felt like it could wait until tomorrow. Sani responded with a truth that lands harder the more you think about it:

“Ten years from now isn’t guaranteed. Not for you, not for your company, not even for the market.”

In other words, urgency isn’t about stress. It’s about respecting the clock.

Procrastination Isn’t the Problem. Unclear Decisions Are.
As we dug deeper, it became clear that procrastination isn’t always laziness. It’s often the byproduct of indecision, or worse, pseudo-decisions dressed up in corporate language.

Sani explained:

“People don’t commit. ‘Let’s look into it’ isn’t a decision. It’s stalling, wrapped in politeness.”

This resonated with what I’ve seen in organizations everywhere. People don’t struggle with doing the work. They struggle with deciding to do it. A vague agreement to "circle back" creates a backlog of unresolved questions. No one says yes, no one says no, and so nothing moves forward.

We agreed: a real decision, even a small one, releases energy. It turns ambiguity into action. And that clarity is often more valuable than the decision itself.

Decision Loops: Where Progress Goes to Die
One of the most dangerous patterns we unpacked was the endless “decision loop.” These are drawn-out Slack threads, repeated meetings, and six-page memos that circle a choice but never land on one.

“The longer a decision lingers, the more political and fragile it becomes,” Sani said. “Fast decisions are clean. Slow ones corrode.”

That corrosion shows up everywhere. In team morale, in innovation velocity, and in customer experience. The longer you wait, the harder it gets to make the call. We get caught in thinking traps, assuming decisions are more permanent than they are.

Sani’s suggestion was simple and actionable: define what a “yes” means, define what a “no” means, and then force a call. Even a no is a forward movement. It lets you reallocate time and energy to something better.

Reversible vs. Irreversible: Most Things Can Be Undone
I brought up Jeff Bezos’ idea of one-way vs. two-way doors in decision-making. The distinction is clear. Some choices are irreversible and deserve caution. But most aren’t. Most decisions can be tested, reversed, and iterated on.

Sani took it even further.

“Count the number of decisions in your life that were truly irreversible. For most people, it’s zero. Maybe one. Everything else is flexible.”

And yet, we treat nearly all decisions like they're permanent. We hesitate. We overanalyze. We try to perfect things before we even try them. But perfection isn't the goal. Learning is.

He added:

“If it takes you two hours to decide something that’s only going to save 30 minutes, you’ve already made a bad call.”

The message is simple: stop inflating the stakes. Make the call. Learn. Adjust. Move on.

Why the Corporate World Fears Experimentation
We shifted into a discussion on experimentation, something both of us have championed in our work. But in many organizations, experimentation is still viewed as risky rather than smart.

Sani offered a sharp insight:

“Before we had data and testing, people rose through the ranks by making good guesses. They trusted their gut. That culture’s still there, especially with leadership.”

When those leaders say “let’s test it,” it often means “prove me right.” And when the data says otherwise, the response isn’t always “thanks for the insight.” Sometimes it’s “your test must be flawed.”

Still, the healthiest companies build space for testing. They give teams freedom to fail in small ways. As Sani put it, every company should have a budget to test around and find out. The payoff is not just better decisions, but stronger muscles for deciding at all.

Try More. Judge Less.
One of the most energizing parts of the conversation was about trying new things simply because they’re new.

“Statistically, your favorite food probably hasn’t been discovered yet,” Sani said.

It sounds like a joke, but it holds real weight. Whether it's food, countries, ideas, business models, or our best experiences, might still be ahead of us. But only if we permit ourselves to experiment without overthinking.

I even confessed to ordering a pistachio milkshake with bacon, just to honor my commitment to trying. Surprisingly, it worked. Salted pistachios might just be the future.

Don’t Build Bruce in Your Head
Toward the end, I told Sani the story of Jaws. Spielberg’s mechanical shark, Bruce, broke down. So he filmed the movie from the shark’s perspective instead. The lack of visibility made the movie more suspenseful, more iconic.

“The fear was bigger than the actual shark.”

Sani loved the metaphor. Too often, we build our own “Bruce.” A mental monster that keeps us from making a move. The reality? The action is rarely as scary as the anticipation.

And once we act, even imperfectly, we regain momentum.

Final Thoughts
Sani closed with one of the most freeing insights of the session:

“You don’t matter as much as you think. That’s a good thing. Most people don’t care what you do, so try what feels right.”

It’s not nihilism. It’s liberation. It’s a reminder that action doesn’t require permission. Most people are too busy worrying about themselves to judge your choices.

So act. Decide. Adjust. Repeat.

Because decisions aren’t distractions from the work. They are the work.

Mentality, tools & Processes: Lessons from a 4-day work week. 
This urgency mindset isn’t theory, it’s practice. Tested, refined, and proven over the years inside one of Europe’s most progressive data companies.

If you’re ready to shift from analysis to action, from hesitation to leadership, sign up for Steen Rasmussen's upcoming Cohort, where he dives deep into how IIH Nordic became one of the most efficient organizations in all of Europe while working less.

Use "SLOBODANM" for 10% DISCOUNT
The Podcast
Listen to the full conversation on Spotify
```

---

## Article: The Urgency Playbook: 10 Practical Methods for Decisive Action

Date: 13 Jun
Slug: `the-urgency-playbook-10-practical-methods-for-decisive-action`

```md
The Urgency Playbook: 10 Practical Methods for Decisive Action
13 Jun
In today's business landscape, speed is a currency. Yet, many of us find ourselves trapped in a state of professional quicksand, sinking slowly into indecision, endless analysis, and the false comfort of inaction. We wait for more data, for consensus, or for the "perfect" moment, only to watch opportunities pass us by.

The gap between knowing and doing is where potential goes to die. Through a series of "Urgency Sessions," I explored this challenge with four insightful guests: marketing strategist Chris Kubby, founder of Kubco; growth mastermind Jesper Åström, founder of Elsa; strategy consultant Andi Jarvis, founder of Eximo; and user experience thinker Slobodan Manic, host of the No Hacks Podcast. This is not another theoretical article; it's a playbook drawn from our conversations, blending decisive action with human wisdom. Here are ten methods to break the cycle of delay and start acting with urgency and conviction.

1. The Principle: Inaction Isn't a Pause Button; It's a Choice with a Price Tag
The Human Barrier: We instinctively treat inaction as a neutral, safe haven. We believe we are simply "waiting" or "observing." But this is a cognitive illusion. As Andi Jarvis explained in our session, inaction is an active decision. He put it plainly: "We don't understand that inaction is actually a choice... option D is to choose to do nothing." This choice for the perceived comfort of the status quo is often driven by a deeper emotion: fear.

Insights from the Session: Chris Kubby nailed this when he said that inaction often stems from fear and uncertainty. He noted that we live in a world with "so many trains passing" that we're terrified of getting on the wrong one. But as our conversations revealed, the greatest risk isn't choosing the wrong path; it's standing still while all the paths move forward without you.

The Practical Method: To combat this, you must make the cost of inaction tangible. Before deferring a decision, ask yourself:

What is the opportunity cost? "What revenue, leads, or market share are we actively sacrificing each week we delay?"

What is the competitive cost? "What is our competitor likely to do in the four weeks we spend deliberating? Will they capture the market narrative?"

What is the data cost? As I often say, data is like ice cream, not fine wine; it melts. "How much less valuable will this insight be in a month?"

2. The Principle: Identify the Door, Is It a One-Way Trip or a Round Trip?
The Human Barrier: We treat every decision, from changing a button color to acquiring a company, with the same paralyzing gravity. We see every doorway as a point of no return. During my conversation with Chris Kubby, we discussed how teams often treat everything like a "one-way door," a high-stakes decision that, once made, cannot be undone.

Insights from the Session: Slobodan Manic provided a powerful counterpoint. He challenged the very notion of one-way doors in most aspects of life and business: "Count on the fingers of your one hand the number of times you made a decision in your life that was truly irreversible... I guarantee you it's 0, or one at most." This realization is liberating. Most of our decisions are "two-way doors", we can walk through, see what it's like, and if we don't like it, we can walk right back.

The Practical Method: Before any deliberation, triage your decision. Ask three quick questions:

Can this be undone?

What would it truly cost in time and money to go back?

How quickly could we revert?
If the answer is essentially "Yes, not much, and quickly," then it's a two-way door. Your goal isn't to find the perfect, unassailable answer. Your goal is to move, learn, and be ready to adjust.

3. The Principle: Stop Trying to Eat the Elephant Whole, Cut the Cake Smaller
The Human Barrier: We present massive, intimidating proposals and then wonder why stakeholders are hesitant. Committing a huge budget or significant resources to an unproven idea is a natural fear. It's our job to make saying "yes" feel safe.

Insights from the Session: Chris Kubby shared a fantastic story of overcoming this exact problem. His team was faced with a client who felt their proposed budget was "twice as much as what we wanted to spend." Instead of a stalemate, they de-risked the decision. Chris explained their winning approach: "Why don't we cut the cake smaller?... Why don't we just do phase one at that reduced price?" By proposing a limited, exploratory first phase, they lowered the perceived risk and built the trust needed to move forward.

The Practical Method: Instead of asking for the entire commitment, reframe your proposal to create momentum.

Propose a Pilot: Ask for a small, low-cost experiment to test the single biggest assumption in your plan.

Outline Phase One: Break the project into phases and ask only for approval for the first. Define the success criteria for that phase, making the next investment contingent on clear results.

4. The Principle: Set "Curtain Up" Deadlines, Not "Go-Live" Suggestions
The Human Barrier: Corporate deadlines have become soft. "Go-live dates" are often treated as polite suggestions that can be pushed back. This culture of flexibility, while well-intentioned, kills the pressure that creates focus.

Insights from the Session: Andi Jarvis introduced a powerful mindset shift he uses with his clients: adopting the language of the theatre. "I like to try and get them to talk about curtain up," he explained. "Curtain up Friday at 7 pm. That curtain goes up at 7 PM. Friday, and you have to be ready." The show must go on. There is no option to delay. This creates a non-negotiable commitment.

The Practical Method: When you set a deadline, frame it as a "curtain up" moment. This immediately forces the team to shift from "Is everything perfect?" to "What is the absolute minimum we need to have a show?" Distinguish between "Show Stoppers" (what the project cannot function without) and "Post-Launch Improvements." This brings ruthless clarity and ensures you launch with what truly matters.

5. The Principle: Become a "Trytarian", Trade the Need to Be Right for the Will to Learn
The Human Barrier: We are wired to defend our ideas. We fall victim to what Jesper Åström called the danger of data being used simply to "support confirmation bias." If the data doesn't fit our pre-existing belief, we question the data, not our belief.

Insights from the Session: Slobodan Manic offered a wonderful antidote with his philosophy of being a "Tritarian", someone who needs to try everything he hasn't tried before. This mindset values curiosity over certainty. It reframes action not as a definitive move, but as an experiment designed to generate new knowledge. When the goal is learning, the fear of "failure" dissipates.

The Practical Method: In meetings, stop debating subjective opinions. Start framing actions as measurable hypotheses. Use this structure to turn a stalemate into an experiment:
"What if we test the hypothesis that if we [PROPOSED ACTION], then [EXPECTED OUTCOME] will happen? We'll know if we're on the right track if we see [METRIC] change within [TIMEFRAME]." This elevates the conversation from ego to evidence.

6. The Principle: Prioritize by Impact, Not by Comfort
The Human Barrier: We are masters of productive procrastination. We fill our days with easy, low-value work to create a feeling of accomplishment, while the truly important, "needle-moving" projects get pushed aside.

Insights from the Session: Andi Jarvis shared a powerful three-word mantra he learned: "Prioritize by impact." He admitted his tendency to do the tasks he enjoys most first, observing, "I will update social media rather than update my website. Why? Because WordPress can be a bit clunky." We must consciously fight this urge.

The Practical Method: At the start of each day, identify your single most important task, your "frog." As Brian Tracy famously advised, "eat that frog" first. Before the deluge of emails and meetings hijacks your day, dedicate your sharpest energy to the one thing that matters most.

7. The Principle: Confront "Bruce" the Shark, Define the Real Worst-Case Scenario
The Human Barrier: Our imagination is our worst enemy. We build up the potential negative consequences of a decision in our minds until they become monstrous and paralyzing, like the unseen shark in Jaws.

Insights from the Session: I discussed the "Bruce" the shark story with Slobodan Manic, who connected it directly to a formal practice. He recommended Tim Ferriss's "fear-setting" exercise, explaining its power: "If I make this decision, what is the worst thing that could happen?... And you realize that... It's not that scary."

The Practical Method: Drag your fears into the light. Take a piece of paper and write down the absolute worst thing that could realistically happen. Then, brainstorm what you could do to prevent that outcome, and what you would do to repair the situation if it did happen. This simple act of definition robs the fear of its abstract, overwhelming power.

8. The Principle: Tame Your Inbox and Calendar, Schedule Your Decisions
The Human Barrier: Our workdays are often a chaotic stream of back-to-back meetings, leading to what Andi Jarvis and I discussed as chronic "decision fatigue." Important decisions get mentally bookmarked for "later", a time that never arrives.

Insights from the Session: During our chat, I shared a personal tactic: scheduling "Decision Time." As I explained, "If it's a mail I have to think about... I started it, and it's in my indecision folder... so I I decided to maybe have a slot in the calendar call later." This isn't just a quirky habit; it's a necessary system.

The Practical Method: Treat decision-making as a primary work task. Block out two 30-minute "Decision Time" slots in your calendar each day. This is protected time to work through the items you've deferred. The goal isn't to be perfect; it's to make progress and unblock your team.

9. The Principle: Escape the Average, Your Benchmark Is Greatness, Not Mediocrity
The Human Barrier: An over-reliance on competitive benchmarking can anchor our ambitions to the average. It feels safe and data-driven, but it's often a recipe for mediocrity.

Insights from the Session: Andi Jarvis articulated this perfectly. "They're benchmarking against the average," he said, "so we set this mediocre standard that we want to beat." He posed the killer question: "Imagine you... won the award for the most mediocre presentation... would you be proud of yourself?" Of course not. Yet, that's what many business strategies aim for.

The Practical Method: Use benchmarks as a starting point, not the finish line. Ask your team the "10x Question": "What would it take to achieve a 10x result here?" This question shatters incremental thinking and forces you to imagine entirely new approaches that can lead to true greatness.

10. The Principle: Get Over Yourself. No One Is Watching That Closely
The Human Barrier: The fear of embarrassment is one of the most powerful paralytics. We believe a failed project will make us look stupid, because we see ourselves at the center of the universe.

Insights from the Session: Slobodan Manic offered a profoundly liberating perspective. "It is extremely liberating once you realize that you don't matter in the world," he stated. This isn't cynical; it's freeing. "Whatever you do... most people don't care. So just do whatever feels right for you."

The Practical Method: The next time you're frozen by the fear of what others will think, remember the "Spotlight Effect", our tendency to overestimate how much others notice our mistakes vastly. Think back to a misstep a colleague made last month. Chances are, you've already forgotten. They have almost certainly forgotten yours, too. This realization grants you the freedom to be bold.

Conclusion: Urgency is a Muscle
Acting with urgency is not about being reckless; it is about making smart, timely moves in a world that punishes hesitation. These ten principles are not quick fixes; they are a training regimen. Like building muscle, developing a bias for action requires consistent practice. Start small. Pick one of these principles to apply this week. By making these small, deliberate shifts, you will begin to replace the friction of indecision with the powerful, human momentum of action.

Mentality, tools & Processes: Lessons from a 4-day work week. 
This urgency mindset isn’t theory, it’s practice. Tested, refined, and proven over the years inside one of Europe’s most progressive data companies.

If you’re ready to shift from analysis to action, from hesitation to leadership, sign up for Steen Rasmussen's upcoming Cohort, where he dives deep into how IIH Nordic became one of the most efficient organizations in all of Europe while working less.
```

---

# 5. Claude Code implementation prompt

Use this prompt with Claude Code after placing this file in the project root:

```txt
You are rebuilding STEEN.FYI as a modern responsive website. Use `steen_fyi_full_rebuild_content_for_claude_code.md` as the source of truth for routes, content, page layout, article content, navigation, and component architecture.

Build the site using the following route structure:
- `/`
- `/about`
- `/speaking`
- `/decision-laundering`
- `/articles`
- `/articles/[slug]`
- `/contact`
- `/booking`
- `/privacy-policy`

Also add redirects for old routes:
- `/speaking-1` -> `/speaking`
- `/speaking-1-1` -> `/decision-laundering`
- `/contact-us` -> `/contact`

Use the screenshot-derived layout notes to recreate page structure. Use the verbatim article bodies in section 4 for article pages. Where page microcopy is marked approximate, keep it editable and do not treat it as final copy.

Prioritize:
1. strong speaker-brand homepage
2. conversion-focused speaking and decision-laundering pages
3. clean article system using the supplied articles
4. reusable components and content data files
5. responsive mobile-first implementation
```

---

# 6. Missing or intentionally deferred content

These items were not included as full verbatim bodies in this file:

- Any article not pasted in chat or supplied as an uploaded text file.
- Some exact testimonial microcopy from the About page screenshot, because the screenshot text is small.
- Exact Privacy Policy body copy.
- Exact Booking page body/form copy, unless it is provided separately.

These can be added later without changing the site architecture.
