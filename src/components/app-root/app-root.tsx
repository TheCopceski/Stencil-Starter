import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Trying this StencilJS out!</h1>
        </header>

        <main>
          <p> Enter your text for some random reason! </p>
          <input type="text" size={30} />
          <simple-button> Let's see what it does! </simple-button>
        </main>
      </div>
    );
  }
}
