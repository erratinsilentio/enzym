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
  let youtube = "frame";

  function handleClick() {
    gallery === "gallery"
      ? (gallery = "gallery hidden")
      : (gallery = "gallery");
  }

  function handleClickTwo() {
    youtube === "frame" ? (youtube = "frame closed") : (youtube = "frame");

    setTimeout(() => {
      gallery === "gallery"
        ? (gallery = "gallery hidden")
        : (gallery = "gallery");
    }, 1000);
  }
</script>

<main class="main">
  <section class={gallery}>
    {#each movies as movie}
      <img src={movie.src} alt="movie" class="image" on:click={handleClick} />
    {/each}
  </section>
  {#if gallery === "gallery hidden"}
    <section class={youtube}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/eAAEp4jQYug"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
      <button class="close" on:click={handleClickTwo}>x</button>
    </section>
  {/if}
</main>

<style>
  .main {
    width: 100vw;
    height: 100vh;
    position: relative;
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
    border-top: 0.1px solid rgb(255, 191, 202, 0.5);
    border-bottom: 0.1px solid rgb(255, 191, 202, 0.5);
    animation: appear 1s forwards ease-in-out;
  }

  .hidden {
    animation: hide 0.5s forwards ease-in;
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

  .frame {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%);
    z-index: 10;

    margin-top: 10rem;
    width: 80vw;
    height: 60vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background-color: #09090b;
    border-top: 0.1px solid rgb(255, 191, 202, 0.5);
    border-bottom: 0.1px solid rgb(255, 191, 202, 0.5);
    animation: appear 1.5s forwards ease-in-out;
  }

  @keyframes appear {
    0% {
      height: 0vh;
      opacity: 0;
      overflow-y: hidden;
      display: none;
    }

    100% {
      height: 60vh;
    }
  }

  @keyframes close {
    0% {
      height: 60vh;
      overflow: hidden;
    }

    100% {
      height: 0px;
      opacity: 0;
      display: none;
      overflow: hidden;
    }
  }

  .closed {
    animation: close 1s forwards ease-in;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: beige;
    background-color: transparent;
    cursor: pointer;
  }
</style>
