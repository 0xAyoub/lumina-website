import { Link } from "react-router-dom";
import Background from "@/components/Background";

const DK    = "#1c1c1e";
const MUTED = "rgba(28,28,30,0.38)";
const BODY  = "rgba(28,28,30,0.82)";

const sections = [
  {
    numeral: "I.",
    paragraphs: [
      "Forty thousand years ago, someone knelt in a cave, dipped their hand in red ochre, and pressed it against the stone.",
      "We will never know their name, or what they meant. But we know what they wanted, because we still want it today: for someone else, someday, to feel what they felt.",
      "That is the oldest technology humans ever built. Not the tool. The urge to make another person feel something across distance and time.",
      "Everything since has been an argument about how to do it faster, cheaper, for more people at once. The campfire. The printing press. The camera. The screen in your pocket.",
      "Each one collapsed the cost of reaching another mind. And each time, something nobody predicted came out the other side.",
      "We are standing at the edge of the next collapse. We are building for what comes out of it.",
    ],
  },
  {
    numeral: "II.",
    paragraphs: [
      "For a century, telling a story with moving images was one of the most expensive things a person could attempt. A camera, a crew, actors, light, time, and money. More money than almost anyone had.",
      "A film was never just a story. It was proof that someone had assembled enormous capital and coordinated hundreds of people toward one vision without any of them dropping it before it reached the screen.",
      "That scarcity built the whole industry. Studios existed to bear the risk. Gatekeepers existed to decide which of the thousand people with a story worth telling got the handful of slots.",
      "That scarcity is disappearing in front of us. Quickly. The cost of making something that looks like it came from a real set is falling toward zero.",
      "Soon, a person with nothing but an idea and real taste will make something that looks like it came from a studio with a hundred million dollars behind it.",
      "Most people see a threat to quality. We see the opposite. This is the moment the premise gets rewritten, and we want to be among the first to write the new one.",
    ],
  },
  {
    numeral: "III.",
    paragraphs: [
      "Here is what almost everyone gets wrong.",
      "They assume that when production stops being scarce, the winners will be whoever has the best model, the fastest render, the most realistic face. They are optimizing for the wrong scarcity. They are playing the old game with cheaper tools.",
      "If everyone can make something that looks like Hollywood, then looking like Hollywood is worth nothing.",
      "What is left is the thing expensive production always hid: taste. Knowing which story is worth telling. Which frame to hold a beat longer. Where to cut. When a silence does more than a line ever could.",
      "That was never a technology problem. It will not become one now. It is the one thing that does not get commoditized when everything around it does.",
      "We are not betting that video generation will get better. Everyone believes that, and it is not a strategy. We are betting that when making something costs almost nothing, the only thing standing between forgettable content and something people love is taste, applied relentlessly.",
    ],
  },
  {
    numeral: "IV.",
    paragraphs: [
      "We spend a lot on tokens. More than makes sense for what we have to show yet. On purpose. It is closer to time travel than extravagance.",
      "Using the frontier of these models is expensive today in a way that will look strange in hindsight. In a few years, the compute we strain to afford now will cost almost nothing, the way a call across an ocean once cost a fortune.",
      "We are choosing to live a few years ahead of that curve. The only way to know what the world looks like when this is abundant and free is to go there first, at cost, and report back.",
      "We are not making cheaper versions of stories that already exist. We are looking for the ones that could not have existed before. Where a creator iterates at the speed of thought. Where an audience shapes what happens next. Where a character persists and grows instead of ending at the credits.",
      "Nobody has found that yet. We would rather spend to go find it now than wait for someone to show us later.",
    ],
  },
  {
    numeral: "V.",
    paragraphs: [
      "A new kind of storytelling is coming, not an upgrade of the old one.",
      "Cinema was not theater with a camera pointed at it, though the first films were exactly that. It took years before anyone realized the cut and the close up were their own language, capable of things the stage never could.",
      "The same thing is about to happen here. The first wave of AI stories will look like cheaper film, because that is the only reference anyone has. That is not the destination.",
      "The destination is a kind of storytelling native to this medium, the way cinema is native to the camera. It does not have a name yet, because nobody has made enough of it to name it.",
      "We do not know exactly what it becomes. Nobody does, no matter how confidently they write about it. Finding it means making a lot of things, quickly, and watching which ones make a stranger stop and stay.",
      "That is not a question you answer in a conference room. You answer it by shipping stories into the world and watching what happens when they meet someone who owes you nothing and can look away at any second.",
    ],
  },
  {
    numeral: "VI.",
    paragraphs: [
      "We respect the industry that built modern storytelling. The people who learned how to make an audience cry at the right moment, how to hold tension without losing anyone, learned something true about human beings. It does not expire because the tools changed.",
      "We are not replacing that. We are carrying it into a medium where it can reach further, cost less, and take risks the old economics never allowed, on stories and voices that never had a fair shot at the handful of slots.",
      "We are building a place where that kind of taste can work at a speed and scale it never had. Where one person with a real point of view can attempt what once required a studio. Where the audience that finds it can go deeper than any screen let them before, not as passive viewers but as people who return, who care what happens next, who want to add something of their own to a world they love.",
      "We are at the very beginning of that. What exists today is small and unglamorous by design. We are telling our own stories first, learning with our own hands what makes a stranger unable to look away, before we ask anyone to trust us with theirs.",
      "Everything larger depends on getting that first part right.",
    ],
  },
  {
    numeral: "VII.",
    paragraphs: [
      "Someone knelt in a cave forty thousand years ago and wanted a stranger they would never meet to feel something.",
      "We are still answering that want, with new tools, at the edge of what they can do, before anyone has figured out what that edge makes possible.",
      "We would rather be a little early and a little uncertain than wait until it is obvious.",
    ],
  },
];

const Manifesto = () => (
  <>
    <Background />

    <div className="glass-layer">

      {/* Top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 28px",
          flexShrink: 0,
        }}
      >
        <Link
          to="/"
          style={{ fontSize: "12px", color: MUTED, transition: "color 0.18s ease" }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = DK)}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = MUTED)}
        >
          ← back
        </Link>

        <a href="mailto:ayoub@withluminalabs.com" className="btn btn-dark">contact us</a>
      </div>

      {/* Reading column */}
      <div
        className="mf-scroll"
        style={{ flex: 1, overflowY: "auto", padding: "0 28px" }}
      >
        <div
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            padding: "32px 0 72px",
          }}
        >

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(22px, 2.8vw, 28px)",
              fontWeight: 300,
              fontOpticalSizing: "auto",
              letterSpacing: 0,
              lineHeight: 1.2,
              color: DK,
              marginBottom: "48px",
            }}
          >
            Manifesto
          </h1>

          {sections.map((section, si) => (
            <div key={si} style={{ marginBottom: "48px" }}>

              {/* Section numeral */}
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: "rgba(28,28,30,0.28)",
                  marginBottom: "16px",
                  textTransform: "uppercase",
                }}
              >
                {section.numeral}
              </p>

              {/* Paragraphs */}
              {section.paragraphs.map((p, pi) => (
                <p
                  key={pi}
                  style={{
                    fontSize: "clamp(13.5px, 1.5vw, 15px)",
                    fontWeight: pi === 0 && si === 0 ? 400 : 300,
                    lineHeight: 1.85,
                    color: pi === 0 && si === 0 ? DK : BODY,
                    letterSpacing: 0,
                    marginBottom: pi < section.paragraphs.length - 1 ? "18px" : 0,
                  }}
                >
                  {p}
                </p>
              ))}

            </div>
          ))}

        </div>
      </div>

    </div>
  </>
);

export default Manifesto;
