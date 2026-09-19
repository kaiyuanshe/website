import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
      });

    const initialProps = await Document.getInitialProps(ctx);
    const antdStyles = extractStyle(cache, true);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-antd-cssinjs
            dangerouslySetInnerHTML={{ __html: antdStyles }}
          />
        </>
      ),
    };
  }

  render() {
    const locale = this.props.__NEXT_DATA__.locale || "zh-CN";

    return (
      <Html lang={locale}>
        <Head>
          <meta name="baidu-site-verification" content="codeva-a8YKhUjSbh" />
          <meta name="robots" content="index,follow" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
