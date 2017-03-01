// Config variable with all URLs to check

// NOTE: To correctly select the element selector, disable JS in the browser
// first (cheerio doesn't execute the JavaScript on a page)

// NOTE: Don't trust the CSS paths from the browsers, usually browsers add the
// 'tbody' element that isn't actually in the original HTML and that will break
// the selectors (so make sure to double check them by hand)
var URLs = [
  {
    url: "https://www.digitalocean.com/pricing",
    targets: [
    {
      element: "body > section > section.Section.u-pb--remove > div.PriceBlocks-sliderContainer > div > div:nth-child(1) > div > ul > li:nth-child(1) > strong",
      value: '512MB'
    },
    {
      element: "body > section > section.Section.u-pb--remove > div.PriceBlocks-sliderContainer > div > div:nth-child(4) > div > ul > li:nth-child(3) > strong",
      value: '60GB'
    }]
  },
  {
    url: "https://www.linode.com/pricing",
    targets: [
    {
      element: "#pricing-smaller-plans > div > div:nth-child(1) > div:nth-child(2) > div > table > tr:nth-child(3) > td.plan-value > strong",
      value: '20',
    },
    {
      element: "#pricing-smaller-plans > div > div:nth-child(1) > div:nth-child(4) > div > table > tr:nth-child(1) > td.plan-value > strong",
      value: '4'
    }]
  },
  {
    url: "https://amazonlightsail.com/pricing/",
    targets: [
    {
      element: "#content > main > div.pricing > div.pricing-tiers > div:nth-child(1) > ul > li:nth-child(1) > strong",
      value: '512 MB'
    },
    {
      element: "#content > main > div.pricing > div.pricing-tiers > div:nth-child(3) > ul > li:nth-child(3) > strong",
      value: '40 GB'
    }]
  },
];

module.exports = URLs;