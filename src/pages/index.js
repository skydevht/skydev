import React from "react"
import Contact from "../components/contact";
import HeroSlider from "../components/heroSlider";
import Layout from "../components/layout";
import Services from "../components/services";
import Testimonial from "../components/testimonial";
export default function Home() {
  return (
    <Layout>
    <HeroSlider />
    <Services />
    <Testimonial />
    <Contact /> 
    </Layout>
    )
}
