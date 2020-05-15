import React from "react";
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { extractStyles } from 'evergreen-ui';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
        const { css, hydrationScript } = extractStyles();

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                    enhanceComponent: Component => props => sheet.collectStyles(<Component {...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                css,
                hydrationScript,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        const { css, hydrationScript } = this.props;
        return (
            <html>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <style dangerouslySetInnerHTML={{ __html: css }} />
            </Head>
            <body>
            <Main />
            {hydrationScript}
            <NextScript />
            </body>
            </html>
        );
    }
}