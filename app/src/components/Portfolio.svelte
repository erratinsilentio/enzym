<script lang="ts">
  const movies = [
    {
      src: "/screen1.png",
      id: 1,
      link: "https://www.youtube.com/embed/TrC7mK5Ma1I",
    },
    {
      src: "/screen2.png",
      id: 2,
      link: "https://www.youtube.com/embed/0rEPcSfXQgc",
    },
    {
      src: "/screen3.png",
      id: 3,
      link: "https://www.youtube.com/embed/IbwSe1-Qu0c",
    },
    {
      src: "/screen4.png",
      id: 4,
      link: "https://www.youtube.com/embed/nzojcv-wvgw",
    },
    {
      src: "/screen5.png",
      id: 5,
      link: "https://www.youtube.com/embed/wbHIvo9C68Y",
    },
  ];

  let gallery = "gallery";

  function handleClick() {
    gallery === "gallery"
      ? (gallery = "gallery hidden")
      : (gallery = "gallery");
  }
</script>

<main class="main">
  <section class={gallery}>
    {#each movies as movie}
      <img src={movie.src} alt="movie" class="image" on:click={handleClick} />
    {/each}
  </section>
</main>

<style>
  .main {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .gallery {
    margin-top: 10rem;
    width: 80vw;
    height: 60vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background-color: #09090b;
    border-top: 0.1px solid pink;
    border-bottom: 0.1px solid pink;
  }

  .hidden {
    animation: hide 0.8s forwards;
  }

  @keyframes hide {
    0% {
      height: 70vh;
      overflow-y: hidden;
    }

    100% {
      height: 0px;
      opacity: 0;
      display: none;
    }
  }

  .image {
    width: 10vw;
    height: 50vh;
    object-fit: cover;
    object-position: center;
    transition-duration: 0.5s;
    cursor: pointer;
    clip-path: inset(2rem 0 2rem 0);
  }

  .image:hover {
    width: 18vw;
    height: 65vh;
  }

  .wave {
    position: absolute;
    width: 110vw;
    top: 187%;
  }
</style>
