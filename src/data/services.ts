export type Service = {
  slug: string;
  navTitle: string;
  color: "clay" | "marigold" | "sage" | "berry";
  icon: string; // lucide icon name
  image: string;
  imageAlt: string;
  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  // Page content
  eyebrow: string;
  h1: string;
  intro: string;
  lede: string;
  signs: { title: string; body: string }[];
  approach: string[];
  outcomes: { title: string; body: string }[];
  pullQuote: string;
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "emdr-therapy",
    navTitle: "EMDR Therapy",
    color: "clay",
    icon: "Waves",
    image: "/images/emdr-session.jpeg",
    imageAlt:
      "April Hankins, EMDR therapist, taking notes during a session in her Canal Fulton, Ohio office",
    metaTitle: "EMDR Therapy in Canal Fulton, Ohio | April Hankins, LPCC",
    metaDescription:
      "EMDR therapy in Canal Fulton, OH with April Hankins, LPCC — an EMDRIA member helping moms process trauma so it no longer runs the show. In-person & virtual across Ohio.",
    keywords: [
      "EMDR therapy Canal Fulton Ohio",
      "EMDR therapist near me",
      "EMDR for trauma Stark County",
      "trauma therapy Canal Fulton",
    ],
    eyebrow: "EMDR Therapy",
    h1: "EMDR therapy that gets to the root — not just the surface",
    intro:
      "EMDR (Eye Movement Desensitization and Reprocessing) is an eight-phase model designed to help your brain store difficult memories the way it was always meant to — so the past stops hijacking your present.",
    lede: "You don't have to relive every hard thing out loud to heal from it. EMDR works with your body's own intuition and natural processing, blending somatic work, attachment focus, and parts work (IFS) to release what's been stuck.",
    signs: [
      {
        title: "The past keeps showing up",
        body: "Old memories, triggers, or reactions surface in daily life — especially in motherhood — even when you 'know better.'",
      },
      {
        title: "Talk therapy hit a ceiling",
        body: "You've talked it through, you understand it intellectually, and yet your body still responds like it's happening now.",
      },
      {
        title: "You want relief that lasts",
        body: "You're ready to address the root cause instead of managing symptoms one anxious week at a time.",
      },
    ],
    approach: [
      "History & goals — we get clear on what you want to shift and map the memories connected to your current triggers.",
      "Safety & resourcing — the early phases build coping skills, grounding, and a real sense of connection before we go anywhere hard.",
      "Reprocessing — using bilateral stimulation (eye movements, tones, or tapping), we help your brain integrate the memory adaptively.",
      "Body & future — we reconnect you to your body and rehearse moving through life with the charge turned down.",
    ],
    outcomes: [
      {
        title: "Triggers lose their grip",
        body: "The moments that used to send you into fight, flight, or shutdown start to feel like… just moments.",
      },
      {
        title: "You respond, not react",
        body: "More space between what happens and how you answer it — with your kids, your partner, yourself.",
      },
      {
        title: "Relief at the source",
        body: "Long-lasting change by working with the cause of your overwhelm, not only its symptoms.",
      },
    ],
    pullQuote:
      "I don't believe in fixing you, because you aren't broken. EMDR just helps the past stop running the show.",
    faqs: [
      {
        q: "Can EMDR be done virtually?",
        a: "Yes — and research has found it to be just as effective online as in person. Virtual EMDR is available throughout Ohio and Pennsylvania.",
      },
      {
        q: "Do we have to work on every memory?",
        a: "No. We focus on the memories that feel most connected to your current triggers — not a forced march through your whole history.",
      },
      {
        q: "When would we actually start EMDR?",
        a: "The first phases are focused on developing safety, building connection between us, and creating coping skills. We move at the pace your nervous system needs.",
      },
    ],
  },
  {
    slug: "emdr-intensives",
    navTitle: "EMDR Intensives",
    color: "berry",
    icon: "Zap",
    image: "/images/emdr-detail.png",
    imageAlt: "Calming EMDR intensive therapy space in Canal Fulton, Ohio",
    metaTitle: "EMDR Intensives in Ohio | Heal Faster with April Hankins, LPCC",
    metaDescription:
      "EMDR intensives with April Hankins, LPCC — focused 1, 2, or 3-day trauma work for busy moms in Canal Fulton, OH. Change and healing in days, not months. Book a free consult.",
    keywords: [
      "EMDR intensive Ohio",
      "EMDR intensive Canal Fulton",
      "intensive trauma therapy",
      "EMDR intensive for moms",
    ],
    eyebrow: "EMDR Intensives",
    h1: "Deep trauma work in days — not months of weekly sessions",
    intro:
      "An EMDR intensive is concentrated, focused reprocessing over one, two, or three days — built for the mom whose calendar doesn't have a standing weekly slot, or who's ready to go deep and not drag it out.",
    lede: "Instead of stopping just as things get going each week, we give your work room to breathe. Many people experience faster symptom reduction with results as good as — or better than — traditional weekly therapy.",
    signs: [
      {
        title: "You're ready to work deeply",
        body: "You want momentum, not a slow trickle — and you're prepared to focus.",
      },
      {
        title: "Weekly doesn't fit your life",
        body: "Travel, work, and childcare make a recurring weekly appointment nearly impossible.",
      },
      {
        title: "You feel stuck in weekly therapy",
        body: "You keep spending the first 20 minutes catching up and never quite get to the deep work.",
      },
    ],
    approach: [
      "Consult call (15 min) — we confirm an intensive is the right fit for you.",
      "Preparation session (1 hour) — we set goals, practice coping skills, and I build you a customized workbook.",
      "The intensive (1–3 days) — we process your target memories with breaks as needed, using the bilateral stimulation that feels best to you.",
      "Follow-up session — we integrate the work and plan what's next.",
    ],
    outcomes: [
      {
        title: "Change in days, not months",
        body: "Concentrated processing means you feel movement quickly instead of waiting out a long calendar.",
      },
      {
        title: "Built around your life",
        body: "Schedule a single day, back-to-back days, or spread them out — whatever your season allows.",
      },
      {
        title: "Often more cost-effective",
        body: "Deep, focused work can mean fewer total hours than months of weekly sessions.",
      },
    ],
    pullQuote:
      "Sometimes the bravest, most efficient thing is to clear the calendar and go all in on your healing.",
    faqs: [
      {
        q: "How much does an intensive cost?",
        a: "One day is $1,855, two days $2,915, and three days $3,975 — each includes your preparation session, custom workbook, intensive hours, and a follow-up session. Insurance does not cover intensive sessions.",
      },
      {
        q: "Who are intensives best for?",
        a: "People who are ready to work deeply, have scheduling conflicts with weekly therapy, need extended processing time, or feel stuck in the weekly format.",
      },
      {
        q: "What kind of bilateral stimulation is used?",
        a: "You choose what feels best — eye movements, audio tones, or tapping. It's your nervous system; you're in the driver's seat.",
      },
    ],
  },
  {
    slug: "perinatal-mental-health",
    navTitle: "Perinatal & Maternal Mental Health",
    color: "marigold",
    icon: "Baby",
    image: "/images/therapy-for-moms.png",
    imageAlt:
      "A mother sharing breakfast with her two young children — perinatal and maternal mental health support",
    metaTitle:
      "Perinatal & Postpartum Therapy in Canal Fulton, OH | April Hankins, LPCC",
    metaDescription:
      "Perinatal & maternal mental health therapy in Canal Fulton, Ohio. April Hankins, LPCC has specialized training in perinatal mental health — support for pregnancy, postpartum, matrescence & mom overwhelm.",
    keywords: [
      "perinatal therapist Canal Fulton",
      "postpartum therapy Ohio",
      "maternal mental health Stark County",
      "therapy for new moms Canal Fulton",
    ],
    eyebrow: "Perinatal & Maternal Mental Health",
    h1: "Becoming a mom cracked you open. Let's tend to what's underneath.",
    intro:
      "Matrescence — the transition into motherhood — can be beautiful and disorienting, empowering and exhausting, clarifying and deeply triggering. With specialized training in perinatal mental health, I help moms through pregnancy, postpartum, and every messy, tender season after.",
    lede: "The overwhelm you're feeling isn't a character flaw. Motherhood has a way of surfacing everything we never got to heal — and that's exactly the work we can do together.",
    signs: [
      {
        title: "The overwhelm won't quit",
        body: "Anxiety, rage, guilt, or numbness show up more than you'd ever say out loud.",
      },
      {
        title: "You feel disconnected from yourself",
        body: "Somewhere in the feeding, holding, and keeping-everyone-alive, you lost track of who you are.",
      },
      {
        title: "Your triggers surprise you",
        body: "Your kids press buttons you didn't know you had — and you want to understand why.",
      },
    ],
    approach: [
      "We make room for the full truth of motherhood — the love and the hard, without shame.",
      "We gently explore how your own childhood and nervous system shape the way you parent now.",
      "Using EMDR and parts work, we soften the triggers so you're not white-knuckling every hard moment.",
      "We rebuild trust in your own intuition as a mother — so you can parent from steadiness, not fear.",
    ],
    outcomes: [
      {
        title: "You find yourself again",
        body: "Reconnect with the person underneath the role — the one who matters too.",
      },
      {
        title: "Steadier in the hard moments",
        body: "More capacity between the trigger and your response, even on the loud days.",
      },
      {
        title: "Cycle-breaking, in action",
        body: "Give your kids the regulated, present parent you're working so hard to become.",
      },
    ],
    pullQuote:
      "This feels hard because it is hard. You're not doing it wrong — you're doing it without enough support.",
    faqs: [
      {
        q: "Do I need a diagnosis to come in?",
        a: "Not at all. You don't need to be in crisis to deserve support. Many moms come simply because they want to feel more like themselves.",
      },
      {
        q: "Can we meet virtually while I'm home with a baby?",
        a: "Yes. Virtual sessions across Ohio and Pennsylvania make it far easier to get support during the newborn and toddler seasons.",
      },
      {
        q: "Is it too late if my kids are older?",
        a: "Never. The transition into motherhood keeps echoing for years — this work helps whether your baby is six weeks or sixteen.",
      },
    ],
  },
  {
    slug: "childhood-trauma-therapy",
    navTitle: "Childhood Trauma Therapy",
    color: "sage",
    icon: "Sprout",
    image: "/images/childhood-trauma.jpeg",
    imageAlt:
      "April Hankins in her therapy office with an 'I can control' grounding poster, Canal Fulton Ohio",
    metaTitle:
      "Childhood Trauma Therapy in Canal Fulton, OH | April Hankins, LPCC",
    metaDescription:
      "Childhood trauma therapy in Canal Fulton, Ohio. April Hankins, LPCC uses EMDR to help moms heal past abuse, neglect, and hard childhoods — so old wounds stop driving today. Free consult.",
    keywords: [
      "childhood trauma therapy Canal Fulton",
      "EMDR childhood trauma Ohio",
      "generational trauma therapist",
      "cycle breaking therapy Stark County",
    ],
    eyebrow: "Childhood Trauma Therapy",
    h1: "Heal the childhood you had, so it stops parenting your kids",
    intro:
      "Unresolved childhood trauma has a way of popping up right in the middle of daily life as a mom — in the yelling you swore you'd never do, the anxiety, the 'I'm not good enough' loop. Past abuse, neglect, or simply hard early experiences don't just stay in the past.",
    lede: "Through structured, targeted EMDR sessions built for busy moms, we work with the cause of your triggers — not just the symptoms — for relief that actually lasts.",
    signs: [
      {
        title: "You parent from a reaction",
        body: "You lose it in ways that feel bigger than the moment, then drown in guilt afterward.",
      },
      {
        title: "The 'not good enough' loop",
        body: "Perfectionism and a harsh inner critic run the show, no matter how much you accomplish.",
      },
      {
        title: "You want to break the cycle",
        body: "You're determined to give your kids something different than what you got — and you need help doing it.",
      },
    ],
    approach: [
      "We get to the root of your overwhelm rather than chasing symptoms.",
      "We work directly with the cause of your triggers using EMDR.",
      "We integrate the old trauma so your body files it as 'then,' not 'now.'",
      "We address mom guilt, perfectionism, and the 'I'm not good enough' beliefs at their source.",
    ],
    outcomes: [
      {
        title: "See your cycle-breaking in action",
        body: "Notice yourself responding to your kids from calm instead of old programming.",
      },
      {
        title: "Quieter inner critic",
        body: "That relentless voice softens as the wounds underneath it heal.",
      },
      {
        title: "Root-level relief",
        body: "Lasting change because we address the cause, not just this week's stress.",
      },
    ],
    pullQuote:
      "You can be the cycle-breaker — the one who felt the pain and chose to do the healing so your kids don't have to.",
    faqs: [
      {
        q: "What if I don't remember much of my childhood?",
        a: "That's common and okay. EMDR works with the memories and body sensations that are present — we don't need a perfect timeline to make progress.",
      },
      {
        q: "Will this make me blame my parents?",
        a: "The goal isn't blame — it's freedom. We honor what was hard so it stops controlling your present, whatever you choose to do with those relationships.",
      },
      {
        q: "I function fine. Is my childhood 'bad enough' for therapy?",
        a: "If it's affecting how you feel or parent, it's worth tending to. Trauma isn't a competition, and you don't have to earn support.",
      },
    ],
  },
  {
    slug: "spiritual-trauma-therapy",
    navTitle: "Spiritual Trauma & Deconstruction",
    color: "berry",
    icon: "Feather",
    image: "/images/spiritual-trauma.jpeg",
    imageAlt:
      "April Hankins in front of a mandala mural — spiritual trauma and faith deconstruction therapy",
    metaTitle:
      "Spiritual Trauma & Faith Deconstruction Therapy in Ohio | April Hankins, LPCC",
    metaDescription:
      "Religious trauma & faith deconstruction therapy with April Hankins, LPCC in Canal Fulton, OH. A former pastor turned counselor helping you reclaim your spirituality on your terms. Virtual across Ohio & PA.",
    keywords: [
      "religious trauma therapist Ohio",
      "faith deconstruction therapy Canal Fulton",
      "spiritual trauma counseling",
      "purity culture recovery therapist",
    ],
    eyebrow: "Spiritual Trauma & Deconstruction",
    h1: "Reclaim your spirituality — on your terms",
    intro:
      "Transitioning into motherhood can be rocky for many moms, and even more so when there's a history of spiritual trauma. Anxiety, depression, and overwhelm often ride alongside deconstruction — the guilt, shame, and fear that a rigid, faith-based upbringing left behind.",
    lede: "As a former evangelical pastor who walked my own deconstruction, I get it from the inside. I don't have an agenda for your beliefs — this is about reclaiming your own voice and values, whatever that ends up looking like for you.",
    signs: [
      {
        title: "Guilt and shame run deep",
        body: "Old teachings still whisper that you're bad, wrong, or not enough — especially as a parent.",
      },
      {
        title: "You're questioning everything",
        body: "Faith, authority, sexuality, belonging — and it feels lonely, disorienting, and sometimes terrifying.",
      },
      {
        title: "You want to parent differently",
        body: "You're rewriting the narrative you'll hand your kids about faith, bodies, and worth.",
      },
    ],
    approach: [
      "We process the pain and confusion so it stops living in your body.",
      "We work to change the blame and shame — and reconnect you to your own goodness.",
      "We release the pressure and perfectionism around 'getting it right' as a parent.",
      "We do it without requiring endless talk therapy, using your body's own intuition through EMDR.",
    ],
    outcomes: [
      {
        title: "Spirituality on your terms",
        body: "Whether you keep faith, leave it, or rebuild something new — it becomes yours.",
      },
      {
        title: "Freedom from shame",
        body: "Experience your own goodness where old teachings planted blame.",
      },
      {
        title: "Room to breathe as a parent",
        body: "Less perfectionism, more presence, and a healthier story to pass on.",
      },
    ],
    pullQuote:
      "My own deconstruction wasn't a loss of faith so much as a reclaiming of my voice and values. Your path doesn't have to look like mine — and that difference is celebrated here.",
    faqs: [
      {
        q: "Do you have an agenda about what I should believe?",
        a: "No. I'm not here to talk you into or out of anything. This work is about freeing you from what harmed you so you can choose your own path — your beliefs are yours.",
      },
      {
        q: "Do you only work with people leaving religion?",
        a: "Not at all. I support people staying, leaving, and everywhere in between. The goal is healing the trauma, not a particular destination.",
      },
      {
        q: "I still feel connected to my faith community. Is that okay?",
        a: "Completely. Many clients hold real love for parts of their tradition while healing the parts that hurt. Both can be true.",
      },
    ],
  },
  {
    slug: "sexual-desire-intimacy",
    navTitle: "Sexual Desire & Intimacy",
    color: "clay",
    icon: "Flame",
    image: "/images/sexual-desire.jpeg",
    imageAlt:
      "April Hankins beside a 'we can do hard things' sign — therapy for sexual desire and intimacy",
    metaTitle:
      "Sexual Desire & Intimacy Therapy in Ohio | Purity Culture Recovery | April Hankins",
    metaDescription:
      "Reconnect with desire, pleasure & intimacy after kids, trauma, or purity culture. April Hankins, LPCC offers EMDR-informed intimacy therapy in Canal Fulton, OH — virtual across Ohio & PA.",
    keywords: [
      "purity culture recovery therapist",
      "sex therapy after kids Ohio",
      "intimacy therapy Canal Fulton",
      "low desire therapy for moms",
    ],
    eyebrow: "Sexual Desire & Intimacy",
    h1: "Find your spark again — on your own terms",
    intro:
      "So many of the moms I work with grew up in rigid, religious environments and are healing from purity culture. That can leave a complicated relationship with your body and your sexuality — and a real longing to feel alive in your own skin again.",
    lede: "We work to recover from shame-based teachings, reconnect you to desire and pleasure after kids and trauma, and help you decide how you want to talk to your own children about sexuality — differently than you were raised.",
    signs: [
      {
        title: "Purity culture left its mark",
        body: "Shame, fear, or numbness around sex and your body followed you into adulthood.",
      },
      {
        title: "Desire feels gone after kids",
        body: "Between exhaustion, touch-outs, and old messages, intimacy feels complicated or far away.",
      },
      {
        title: "You want a different story",
        body: "You're determined to raise your kids with a healthier, shame-free understanding of their bodies.",
      },
    ],
    approach: [
      "Feel sexually alive — reconnect with your sexuality on your own terms.",
      "Body image & sensuality — prioritize your desire and your pleasure.",
      "Intimacy after kids — reclaim consent, voice, and agency in your relationships.",
      "Structured, targeted sessions that get to the root — without requiring endless talk therapy.",
    ],
    outcomes: [
      {
        title: "Reclaim your desire",
        body: "Move from shame and shutdown toward curiosity, agency, and pleasure.",
      },
      {
        title: "At home in your body",
        body: "Loosen the grip of old messaging so your body can feel like yours again.",
      },
      {
        title: "A healthier legacy",
        body: "Pass on consent, voice, and body-respect instead of shame.",
      },
    ],
    pullQuote:
      "Your desire, your voice, your agency — reclaiming them isn't shameful. It's part of coming home to yourself.",
    faqs: [
      {
        q: "Is this the same as sex therapy?",
        a: "It overlaps but centers on the trauma and shame — especially from purity culture — that get in the way of desire and intimacy. We use EMDR-informed work to heal at the root.",
      },
      {
        q: "Do you work with couples?",
        a: "This work is individual, focused on your relationship with your own body, desire, and history. Many clients bring what they learn back into their partnership.",
      },
      {
        q: "I feel embarrassed even reaching out.",
        a: "That's exactly the shame we work to unwind — and you won't be judged here. Warm, honest, and collaborative is the whole vibe.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
