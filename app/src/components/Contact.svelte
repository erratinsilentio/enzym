<main class="main">
  <form class="form">
    <div class="container">
      <label>Contact me</label>
      <input
        type="text"
        name="name"
        class="text"
        placeholder="name"
        minlength="3"
        maxlength="30"
      />
      <input type="email" name="email" class="text" placeholder="email" />
      <textarea
        name="message"
        class="text area"
        placeholder="message..."
        minlength="20"
        maxlength="500"
      />
    </div>
  </form>
</main>

<style>
  .main {
    max-width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #fda4af;
  }

  .form {
    width: 98.35vw;
    height: 97vh;
    background-color: #18181b;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    /* outline: 1px solid yellow; */
  }

  .text {
    width: 580px;
    height: 40px;
    margin: 5px;
  }

  .area {
    height: 250px;
  }

  input,
  .area {
    border: none;
    background-color: #27272a;
    border: 1px solid #fecdd3;
    border-radius: 5px;
    padding: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: #ffe4e6;
    font-size: 1rem;
  }

  .area {
    padding: 1rem;
    overflow-y: scroll;
  }

  label {
    color: #fecaca;
    font-size: 2rem;
    margin-bottom: 10px;
    margin-top: 30px;
  }
</style>
