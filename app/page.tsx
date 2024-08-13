"use client";

import { useState } from "react";

const Home = () => {
  // biome-ignore lint/correctness/noEmptyPattern: <explanation>
  const [] = useState();
  // biome-ignore lint/a11y/useButtonType: <explanation>
  // biome-ignore lint/style/useSelfClosingElements: <explanation>
    return <button></button>;
};

export default Home;