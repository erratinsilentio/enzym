<script>
  import Header from "../components/Header.svelte";
  import About from "../components/About.svelte";
  import { Application } from "@splinetool/runtime";
  import { onMount } from "svelte";
  import Portfolio from "../components/Portfolio.svelte";
  import Contact from "../components/Contact.svelte";

  onMount(() => {
    const article = document.getElementById("article");
    const canvas = document.createElement("canvas");
    article.appendChild(canvas);

    const app = new Application(canvas);
    app.load("https://prod.spline.design/PSOHRGJ0t7vihQtp/scene.splinecode");
  });
</script>

<section class="section">
  <Header />
  <About />
  <Portfolio />
  <Contact />
  <article class="article" id="article" />
</section>

<style>
  .section {
    width: 100vw;
    overflow: hidden;
  }
  .article {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 15%;
    z-index: -2;
  }
</style>
