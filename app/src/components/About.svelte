<script lang="ts">
</script>

<main class="main">
  <section class="hero">
    <h1 class="first">Your next</h1>
    <h1 class="second">
      creative <span class="vfx">VFX</span> artist
    </h1>
    <h1 class="third">my work</h1>
  </section>
</main>

<img src="/wave.svg" alt="fractal" class="fractal" />

<style>
  .main {
    width: 100vw;
    height: 88vh;
    position: relative;
    overflow: hidden;
  }

  .hero {
    position: absolute;
    left: 17%;
    top: 25%;
    font-weight: 900;
  }

  .first {
    font-size: 3rem;
    background: #c1c1d4;
    background: repeating-linear-gradient(
      to right,
      hsl(240, 46%, 34%) 0%,
      #cd8bcf 20%,
      #cd8bcf 90%,
      #cd8bcf 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .second {
    font-size: 4rem;
    transform: translateX(5%);
    background: #c1c1d4;
    background: repeating-linear-gradient(to right, #c1c1d4 0%, #cd8bcf 100%);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .vfx {
    font-weight: 100;
    color: #fff;
    background: linear-gradient(to right, #868686 0, #fff 10%, #868686 20%);
    background-position: 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: 60s linear infinite forwards shine;
  }

  .third {
    font-size: 2rem;
    font-weight: 300;
    position: absolute;
    right: 0;
    color: rgba(255, 217, 0, 0.663);
    border-radius: 20px;
    padding-left: 1.1rem;
    padding-right: 1.1rem;
    padding-bottom: 0.3rem;
    line-height: 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition-duration: 0.2s;
  }

  .third:hover {
    background-color: rgba(255, 217, 0, 0.663);
    color: beige;
  }

  @keyframes shine {
    0% {
      background-position: 0;
      background-position-x: 0px;
      background-position-y: center;
    }
    100%,
    60% {
      background-position: 1800px;
    }
  }

  .fractal {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    opacity: 0.5;
  }
</style>
