import Document, { Head, Main, NextScript, Html } from "next/document"
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )

    // SExtract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Pass styleTags as a prop
    return { ...page, styleTags }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
