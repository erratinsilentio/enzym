<script>
</script>

<header class="header">
  <section class="main">
    <p class="logo">enzym</p>
    <nav class="menu">
      <button class="nav-btn"> home </button>
      <button class="nav-btn"> about </button>
      <button class="nav-btn"> portfolio </button>
      <button class="nav-btn"> contact </button>
    </nav>
  </section>
  <span class="span" />
</header>

<style>
  .header {
    min-width: 100vw;
    height: 12vh;
    position: fixed;
    z-index: 100;
    top: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 90%;
    width: 100%;
  }

  .logo {
    font-size: 3rem;
    font-weight: 100;
    background: #c1c1d4;
    background: repeating-linear-gradient(to right, #c1c1d4 0%, #cd8bcf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    margin-left: 100px;
  }

  .menu {
    margin-right: 80px;
    width: 50vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-self: flex-end;
    margin-bottom: 1.25rem;
  }

  .nav-btn {
    background-color: #18181b;
    color: antiquewhite;
    border-radius: 15px;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
    transition-duration: 0.25s;
    cursor: pointer;
  }

  .nav-btn:hover {
    background-color: antiquewhite;
    color: black;
    opacity: 0.9;
  }

  .span {
    width: 90vw;
    height: 0.5px;
    background-color: pink;
    opacity: 0.5;
  }
</style>
