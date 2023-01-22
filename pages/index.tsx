import Head from "next/head";
import Header from "../components/Header";
import Intro from "../components/Intro";
import AnimatedSphere from "../components/AnimatedSphere";
import About from "../components/About";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div
      className="text-gray-600 bg-zinc-50 h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>Mingyang Sun</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Intro */}
      <section id="intro" className="snap-start">
        <Intro />
      </section>

      {/* Sphere */}
      <Canvas className="h-screen snap-center canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <AnimatedSphere />
      </Canvas>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
