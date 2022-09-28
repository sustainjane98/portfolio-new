import { NextSeo } from "next-seo";
import React from "react";
import { SkillsTemplate } from "../../../templates/skills.template";
import serverImage from "../../../assets/adi-goldstein-EUsVwEOsblE-unsplash.jpg";
import GolangIcon from "../../../assets/golang-1.svg";
import KotlinIcon from "../../../assets/kotlin-2.svg";
import SwiftIcon from "../../../assets/swift-15.svg";
import ElixirIcon from "../../../assets/elixir-1.svg";
import JavaIcon from "../../../assets/java-14.svg";

export interface Props {}

/**
 * An Backend React Component.
 * @author Lea Janina Will
 * @version 0.1
 */
const Backend: React.FC<Props> = () => {
  return (
    <>
      <NextSeo title="Backend Skills" />
      <SkillsTemplate
        header={{
          headline: {
            headline: "My backend Skills",
            subheadline: "I am a backend developer",
          },
          body: "The backend is the part of an IT system that deals with data processing in the background - the data layer. The term is used to subdivide more complex software structures.",
          src: serverImage,
          className: "bg-[#070b0e]",
        }}
        skills={{
          title: "Backend Skills",
          skills: [
            {
              title: "Golang",
              description:
                "Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.",
              href: "https://go.dev/",
              icon: <GolangIcon className="w-8 h-8" />,
              external: true,
            },
            {
              title: "Kotlin",
              description:
                "Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library, but type inference allows its syntax to be more concise. Kotlin mainly targets the JVM, but also compiles to JavaScript or native code via LLVM.",
              href: "https://kotlinlang.org/",
              icon: <KotlinIcon className="w-6 h-6" />,
              external: true,
            },
            {
              title: "Swift",
              description:
                "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community. First released in 2014, Swift was developed as a replacement for Apple's earlier programming language Objective-C, as Objective-C had been largely unchanged since the early 1980s and lacked modern language features. ",
              href: "https://swift.org",
              icon: <SwiftIcon className="w-10 h-10" />,
              external: true,
            },
            {
              title: "Elixir",
              description:
                "Elixir is a functional, concurrent, general-purpose programming language that runs on the BEAM virtual machine which is also used to implement the Erlang programming language. Elixir builds on top of Erlang and shares the same abstractions for building distributed, fault-tolerant applications. Elixir also provides productive tooling and an extensible design. The latter is supported by compile-time metaprogramming with macros and polymorphism via protocols.",
              href: "https://elixir-lang.org/",
              icon: <ElixirIcon className="w-10 h-10" />,
              external: true,
            },
            {
              title: "Java",
              description:
                "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile.",
              href: "https://www.java.com/download/manual.jsp",
              icon: <JavaIcon className="w-8 h-8" />,
              external: true,
            },
          ],
        }}
      />
    </>
  );
};

export default Backend;
