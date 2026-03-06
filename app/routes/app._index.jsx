import { boundary } from "@shopify/shopify-app-react-router/server";

export default function Index() {
  const handleConnectApp = () => {
    window.open(
      "https://retail-system-overview.vercel.app/authenticate",
      "_top",
    );
  };

  return (
    <s-page heading="Shopify app template">
      <s-section heading="Connect your app">
        <s-button variant="primary" onClick={handleConnectApp}>
          Connect Now
        </s-button>
      </s-section>
    </s-page>
  );
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
