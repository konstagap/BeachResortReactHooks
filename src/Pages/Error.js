import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Hero>
      <Banner title="404" subtitle="Oooops, page not found">
        <Link to="/" className="btn-primary">
          Go to home page
        </Link>
      </Banner>
    </Hero>
  );
}
