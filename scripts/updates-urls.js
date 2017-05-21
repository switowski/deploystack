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
    },
    {
      element: "#pricing-smaller-plans > div > div:nth-child(1) > div:nth-child(6) > div > table > tr:nth-child(3) > td:nth-child(1) > strong",
      value: '192'
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
  {
    url: "https://aws.amazon.com/free/faqs/?ft=n",
    targets: [
    {
      element: "div.nine > main > section > div:nth-child(2) > div:nth-child(8) > div > p",
      value: "30 GB of Amazon Elastic Block Storage in any combination of General Purpose (SSD) or Magnetic, plus 2 million I/Os (with EBS Magnetic) and 1 GB of snapshot storage***"
    },
    {
      element: "div.nine > main > section > div:nth-child(2) > div:nth-child(3) > div > p",
      value: "750 hours of Amazon EC2 Linux or RHEL or SLES t2.micro instance usage (1 GiB of memory and 32-bit and 64-bit platform support) – enough hours to run continuously each month*"
    }]
  },
  {
    url: "https://www.heroku.com/pricing",
    targets: [
    {
      element: "li#heroku-dyno-free > div > p",
      value: "512 MB RAM │ 1 web/1 worker"
    },
    {
      element: "#postgres-tier-hobby > ul > li:nth-child(1) > label > p",
      value: "Free — 10K rows",
    }]
  },
  {
    url: "https://www.namecheap.com/domains/registration.aspx#domain_tab_techspecs",
    targets: [
    {
      element: "tbody.expanded > tr:nth-child(2) > td:nth-child(2)",
      value: "€9,56"
    },
    {
      element: "tbody.expanded > tr:nth-child(11) > td:nth-child(2)",
      value: "€29,41",
    }]
  },
  {
    url: "https://www.namesilo.com/pricing.php",
    targets: [
    {
      element: "div#tab_content_registrations > table > tr:nth-child(3) > td:nth-child(2)",
      value: "$8.99"
    },
    {
      element: "div#tab_content_registrations > table > tr:nth-child(239) > td:nth-child(2)",
      value: "$6.99                                                                        $37.99",
    }]
  },
  {
    url: "http://www.1and1.com/buy-a-domain-name#price-overview",
    targets: [
    {
      element: "#tlds-list > div > ul > li:nth-child(117) > div.status-cell > div > span.price-text-before > span > span > span",
      value: "$14.99"
    },
    {
      element: "#tlds-list > div > ul > li:nth-child(426) > div.status-cell > div > span.price-text-before > span > span > span",
      value: "$69.99"
    }]
  },
];

module.exports = URLs;