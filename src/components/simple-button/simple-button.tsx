import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'simple-button',
  styleUrl: 'simple-button.css',
  shadow: true
  })
export class SimpleButton {
  @Prop() buttonText: string = "OK!";

  render() {
    return (
        <div class="wrapper">
          <div class="textLabel">
            {this.buttonText}
          </div>
        </div>
    );
  }
} 