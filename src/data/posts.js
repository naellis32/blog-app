const posts = [
  {
    id: 1,
    slug: "learning-react-router",
    title: "What Finally Made React Router Click For Me",
    author: "Nathaniel Ellis",
    date: "July 14, 2026",
    excerpt:
      "Routes felt abstract until I stopped thinking of them as pages and started thinking of them as views into state.",
    content: [
      "For the first few weeks of learning React, routing felt like a separate universe from the component tree I'd gotten comfortable with. Everything I'd learned about props and state seemed to stop mattering the second URLs entered the picture.",
      "The shift happened when I stopped treating a route as a page and started treating it as a view into state. A URL is just another way of asking a question: which post, which user, which tab. Once I saw useParams as a way to read that question out of the address bar, the rest of the router API stopped feeling like magic.",
      "Nesting routes was the next hurdle. I kept trying to duplicate the navbar inside every page component before I realized the whole point of a shared layout is that it only renders once, with an outlet for whatever page is active underneath it.",
      "None of this is groundbreaking, but writing it down is the only way I actually remember it two weeks later.",
    ],
  },
  {
    id: 2,
    slug: "state-vs-props-again",
    title: "State vs. Props, One More Time",
    author: "Nathaniel Ellis",
    date: "July 17, 2026",
    excerpt:
      "I keep relearning the same lesson: state is what a component owns, props are what it's handed.",
    content: [
      "I've explained the difference between state and props to myself so many times that I decided to just write it down permanently this time.",
      "State is memory a component owns and can change on its own. Props are information a component is handed from the outside and can't modify directly. The comment form on this blog is a good example: the form owns its own draft text as local state, but the finished comment gets passed up and stored as state one level higher, in the page that actually needs to remember every comment across renders.",
      "The mistake I kept making early on was trying to store the same value in two places at once — once in the child, once in the parent — and then wondering why they drifted out of sync. The fix wasn't cleverness, it was just picking one owner for each piece of data and passing it down or lifting it up instead of duplicating it.",
      "It's a small idea. It just took building a few broken forms before it actually stuck.",
    ],
  },
  {
    id: 3,
    slug: "dark-mode-without-flicker",
    title: "Getting Dark Mode to Not Flicker on Load",
    author: "Nathaniel Ellis",
    date: "July 19, 2026",
    excerpt:
      "The hard part of a theme toggle isn't the switch — it's remembering the choice before the page even paints.",
    content: [
      "Building a light/dark toggle is easy. Making it survive a page refresh without a flash of the wrong theme is the part that actually takes some thought.",
      "The approach I landed on: check localStorage first, and if there's nothing saved yet, fall back to the user's system preference with a matchMedia query for prefers-color-scheme. That way a first-time visitor still gets a theme that matches their OS, and a returning visitor always gets exactly what they picked last time.",
      "The context itself ended up being the easy part — a single boolean, a toggle function, and a provider at the top of the tree. Almost all of the real work was deciding when that state gets read and written, not how it's stored.",
      "Small feature, disproportionate number of tabs open while building it.",
    ],
  },
];

export default posts;
