import { BodyComponent } from 'mjml-core';
import { MjHead } from '../Head/Head';

export class MjLayout extends BodyComponent {
  static title: string = "";

  static styles = `
    *, *::after, *::before {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-size: 16px !important;
    }
    .layout {
      margin: 0;
      padding: 0;
      background-color: aqua;
      color: #374656;
    }
  `

  // getStyles() {
  //   return {
  //     wrapperDiv: {
  //       color: this.getAttribute('stars-color'),
  //       'font-size': this.getAttribute('font-size'),
  //     },
  //     contentP: {
  //       'text-align': this.getAttribute('align'),
  //       'font-size': '20px'
  //     },
  //     contentSpan: {
  //       color: this.getAttribute('color')
  //     }
  //   }
  // }

  static setTitle (title: string): typeof this {
    this.title = title;
    return this;
}

  static renderMJML() {
    return `
      <mjml>
      <mj-head>
        <mj-title>${this.title}</mj-title>
          <mj-font name="Montserrat" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" />
          <mj-font name="Lato" href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" />
        <mj-style>${this.styles}</mj-style>
      </mj-head>
      <mj-body>
        <mj-section>
          <mj-column>
            <mj-text css-class="layout" >mj text text</mj-text>
          </mj-column>
        </mj-section>
      <mj-body>
      </mjml>`
  }
  render(): string {
    return MjHead.renderMJML();
  }

  // render() {
  //   return `
  //     <div
  //       ${this.htmlAttributes({
  //         class: this.getAttribute('css-class'),
  //         style: 'wrapperDiv'
  //       })}
  //     >
  //     <p ${this.htmlAttributes({
  //       style: 'contentP'
  //     })}>
  //       <span>★</span>
  //       <span
  //         ${this.htmlAttributes({
  //           style: 'contentSpan' // This will add the 'contentSpan' attributes from getStyles() as inline style
  //         })}
  //       >
  //         ${this.getContent()}
  //       </span>
  //       <span>★</span>
  //     </p>
  //     </div>
	// 	`
  // }
}
