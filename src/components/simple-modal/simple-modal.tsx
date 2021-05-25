import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'simple-modal',
	styleUrl: 'simple-modal.css',
	shadow: true
})
export class SimpleModal {
	@Prop({
		mutable: true,
		reflect: true,
	})
	@Prop() isOpen: boolean
	@Prop() modalTitle: string = 'Aceitar';
	@Prop() modalText: string = 'Aceitar';

	private handleClose = () => {
		this.isOpen = false;
	}

	render() {
		return (
			<div class={this.isOpen ? 'wrapper is-open' : 'wrapper'}>
				<div class="overlay" onClick={this.handleClose}>
					<div class="modal">
						<div class="header">
							<h6>Here's what happens!!</h6>
						</div>
						<div class="body">
							{this.modalText}
						</div>
						<div class="footer">
							<simple-button button-Text="Maassaa!" onClick={this.handleClose}></simple-button>
							<simple-button button-Text="Afude!!" onClick={this.handleClose}></simple-button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}