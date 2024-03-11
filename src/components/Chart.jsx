import React from "react";

const Chart = () => {
  return (
    <>
      <div className="mt-4 h-[500px]">
        <div
          className="tradingview-widget-container w-full h-full"
        >
          <iframe
            scrolling="no"
            allowTransparency="true"
            frameBorder={0}
            src="https://www.tradingview-widget.com/embed-widget/advanced-chart/?locale=en#%7B%22autosize%22%3Atrue%2C%22symbol%22%3A%22CRYPTO%3ABTCUSD%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%222%22%2C%22enable_publishing%22%3Afalse%2C%22hide_top_toolbar%22%3Atrue%2C%22hide_legend%22%3Atrue%2C%22range%22%3A%225D%22%2C%22save_image%22%3Afalse%2C%22calendar%22%3Afalse%2C%22hide_volume%22%3Atrue%2C%22support_host%22%3A%22https%3A%2F%2Fwww.tradingview.com%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22utm_source%22%3A%22koinx-frontend-assignment.vercel.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22advanced-chart%22%2C%22page-uri%22%3A%22koinx-frontend-assignment.vercel.app%2F%22%7D"
            title="advanced chart TradingView widget"
            lang="en"
            vnb-frameid={686}
            style={{
              userSelect: "none",
              boxSizing: "border-box",
              display: "block",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Chart;
