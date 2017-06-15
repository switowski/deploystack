/*jshint multistr: true */
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
      value: "€9,55"
    },
    {
      element: "tbody.expanded > tr:nth-child(11) > td:nth-child(2)",
      value: "€29,39",
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
  {
    url: "https://uptimerobot.com/pricing",
    targets: [
    {
      element: "div.plans > div:nth-child(1) > div:nth-child(2) > ul > li:nth-child(1) > strong",
      value: "5 minutes monitoring intervals"
    },
    {
      element: "div.plans > div:nth-child(1) > div:nth-child(2) > ul > li:nth-child(2)",
      value: "50 monitors"
    }]
  },
  {
    url: "https://www.statuscake.com/pricing/",
    targets: [
    {
      element: "div.FirstPricing > ul",
      value: "Slower interval rate, randomly allocated test locations, and no advanced monitoring features."
    }]
  },
  {
    // We can't get the price of storage without JS but we check other elements on the page to see if something has changed
    url: "https://aws.amazon.com/s3/pricing/",
    targets: [
    {
      element: "div.nine>main>section>div>div:nth-child(26)>div>table>tbody>tr:nth-child(2)>td:nth-child(2)",
      value: "$0.04/GB"
    },
    {
      element: "div.nine>main>section>div>div:nth-child(26)>div>table>tbody>tr:nth-child(9)>td:nth-child(2)",
      value: "$0.04/GB"
    },
    {
      element: "div.nine>main>section>div>div:nth-child(17)>div>table>tbody>tr:nth-child(2)>td:nth-child(2)",
      value: "$0.0025 per million objects listed"
    }]
  },
  {
    url: "https://www.cdn77.com/pricing",
    targets: [
    {
      element: "div.PricingTile-price>strong",
      value: "$0.049"
    },
    {
      element: "div.FAQ--first>div>div:nth-child(1)>p",
      value: "\n\
                            You are charged per byte and the cost is gradually deducted from your credit. To get started, just\n\
                            top up your account with $149. This credit is valid for one year from the payment date. However,\n\
                            every time you add funds to your credit, all of your credit becomes valid for another year.\n\
                        "
    }]
  },
  {
    url: "https://aws.amazon.com/cloudfront/pricing/",
    targets: [
    {
      element: "div.nine>main>section>div>div:nth-child(5)>div>table>tbody>tr:nth-child(2)>td:nth-child(2)",
      value: "$0.085"
    },
    {
      element: "div.nine>main>section>div>div:nth-child(9)>div>table>tbody>tr:nth-child(2)>td:nth-child(2)",
      value: "$0.0075"
    }]
  },
  {
    url: "https://www.maxcdn.com/pricing/entrepreneur/",
    targets: [
    {
      element: "div#lv-pricing-table>div:nth-child(2)>div:nth-child(1)>div>div:nth-child(2)>section:nth-child(1)>p:nth-child(1)",
      value: "$79"
    },
    {
      element: "div.icon-row>div:nth-child(1)>p:nth-child(3)",
      value: "$15/month"
    }]
  },
  {
    url: "https://www.cloudflare.com/plans/",
    targets: [
    {
      element: "div.plans-detail-card--free>ul>li:nth-child(5)",
      value: "3 Page Rules included\n\
                    Additional rules available for purchase through the dashboard"
    },
    {
      element: "section.plans-hero-tile>section>div>div:nth-child(5)>div>div:nth-child(2)>span>div:nth-child(4)>span.plans-card__price-area__amount",
      value: "20"
    }]
  },
  {
    url: "https://sentry.io/pricing/",
    targets: [
    {
      element: "div.plan-cards>div:nth-child(1)>ul:nth-child(4)>li:nth-child(1)",
      value: "10k events/mo"
    },
    {
      element: "div.plan-cards>div:nth-child(2)>p",
      value: "$26/month"
    }]
  },
  {
    url: "https://rollbar.com/pricing/",
    targets: [
    {
      element: "div.pricing-plans-grid-cols-wrapper>div:nth-child(1)>div>div:nth-child(1)>div",
      value: "5,000"
    },
    {
      element: "div.pricing-plans-grid-cols-wrapper>div:nth-child(2)>a>div:nth-child(2)>span:nth-child(1)>span",
      value: "$49"
    },
    {
      element: "div.pricing-plans-grid-cols-wrapper>div:nth-child(2)>div>div:nth-child(2)>div",
      value: "180 days"
    }]
  },
  {
    url: "https://airbrake.io/pricing",
    targets: [
    {
      element: "div.wrapper>section:nth-child(2)>div>div>table>thead>tr:nth-child(2)>td:nth-child(3)>div",
      value: "$49/month"
    },
    {
      element: "div.wrapper>section:nth-child(2)>div>div>table>thead>tr:nth-child(1)>th:nth-child(2)",
      value: "FREE"
    },
    {
      element: "div.wrapper>section:nth-child(2)>div>div>table>thead>tr:nth-child(2)>td:nth-child(4)>div",
      value: "$99/month"
    },
    {
      element: "div.wrapper>section:nth-child(2)>div>div>table>tbody>tr:nth-child(4)>td:nth-child(3)",
      value: "30 Days"
    }]
  },
  {
    url: "https://mailchimp.com/pricing/entrepreneur/",
    targets: [
    {
      element: "p.body",
      value: "Up to 2,000 subscribers and 12,000 emails per month"
    }]
  },
  {
    url: "https://mailchimp.com/pricing/",
    targets: [
    {
      element: "div.pricing-pathway_container>div:nth-child(2)>div:nth-child(1)>div>h3",
      value: "$10 per month"
    }]
  },
  {
    url: "https://www.sendinblue.com/pricing/",
    targets: [
    {
      element: "div#carousel-plans-month>div>div:nth-child(1)>div>div>div:nth-child(1)>div>div:nth-child(1)>div:nth-child(3)>div",
      value: "9,000 emails / mo."
    },
    {
      element: "div.spacer-bottom-lg>div:nth-child(1)>div:nth-child(2)>div>p:nth-child(2)",
      value: "Absolutely! When you sign up for our service, you will automatically have a Free Plan with 9,000 emails per month. Your Free Plan lets you upload unlimited contacts, but does have a daily sending maximum of 300 emails per day."
    },
    {
      element: "div#carousel-plans-month>div>div:nth-child(1)>div>div>div:nth-child(1)>div>div:nth-child(1)>div:nth-child(3)>ul>li:nth-child(1)",
      value: "Unlimited Contacts"
    }]
  },
  {
    url: "https://www.sparkpost.com/pricing/",
    targets: [
    {
      element: "div.pricingCard--info>div:nth-child(1)",
      value: "100,000emails / month"
    },
    {
      element: "div.gutter-sm>div:nth-child(2)>div>div>div>h3",
      value: "$29"
    }]
  },
  {
    url: "https://aws.amazon.com/ses/pricing/",
    targets: [
    {
      element: "div.eight>div>div:nth-child(3)>div>p:nth-child(1)",
      value: "If you are an Amazon EC2 user, you can start sending with Amazon SES for free. You can send 62,000 messages per month to any recipient when you call Amazon SES from an Amazon EC2 instance directly or through AWS Elastic Beanstalk. Additionally, you can also receive 1,000 messages per month for free on Amazon SES. Many applications are able to operate entirely within this free tier limit, and it does not expire after a year."
    },
    {
      element: "div.eight>div>div:nth-child(9)>div>p",
      value: "$0.12 per GB of attachments sent."
    }]
  },
  {
    url: "https://www.mailgun.com/pricing",
    targets: [
    {
      element: "body.page-template>main>div>h1",
      value: "Your first 10,000 emails are free every month"
    }]
  },
  {
    url: "https://about.gitlab.com/products/",
    targets: [
    {
      element: "div.pricing-options>div>div>div:nth-child(3)>div>div:nth-child(2)>div:nth-child(2)>h4",
      value: "paid annually at $39"
    }]
  },
  {
    url: "https://github.com/pricing",
    targets: [
    {
      element: "div.plans-cards>div:nth-child(1)>div>h3>span:nth-child(1)",
      value: "$7"
    }]
  },
  {
    url: "https://bitbucket.org/product/pricing?tab=host-in-the-cloud",
    targets: [
    {
      element: "section.imkt-equalheights-parent>div>section:nth-child(2)>div>div:nth-child(2)>section:nth-child(1)>div>div>h1",
      value: "$2"
    }]
  },
  {
    url: "https://about.gitlab.com/features/pages/",
    targets: [
    {
      element: "section.what-is>div>div:nth-child(2)>div>div:nth-child(4)>p",
      value: "Host your static websites on GitLab.com for free, or on your own GitLab instance."
    }]
  },
  {
    url: "http://surge.sh/pricing",
    targets: [
    {
      element: "div.mxn1>div:nth-child(2)>a>div:nth-child(3)>span:nth-child(1)",
      value: "only $13/mo."
    }]
  },
  {
    url: "https://www.aerobatic.com/#pricing",
    targets: [
    {
      element: "div.pricing-plans>div:nth-child(2)>header>div>h2",
      value: "15"
    }]
  },
  {
    url: "https://www.netlify.com/pricing/",
    targets: [
    {
      element: "div.tier2>div:nth-child(2)>div:nth-child(1)>h4",
      value: "$9"
    },
    {
      element: "span.old-price",
      value: "49"
    },
    {
      element: "div.tier3>div:nth-child(2)>div:nth-child(1)>h4",
      value: "$49"
    }]
  },
  {
    url: "https://firebase.google.com/pricing/",
    targets: [
    {
      element: "th.firesite-pricing-table__header__cell--flame>p",
      value: "$25/month"
    }]
  },
  {
    url: "https://aws.amazon.com/free/",
    targets: [
    {
      element: "div#aws-page-content>main>section>div>div:nth-child(5)>div>div>div>div>div:nth-child(1)>div>div>div>div>div:nth-child(2)>div>p:nth-child(1)",
      value: "AWS Marketplace offers free and paid software products that run on the AWS Free Tier. If you qualify for the AWS Free Tier, you can use these products on an Amazon EC2 t2.micro instance for up to 750 hours per month and pay no additional charges for the Amazon EC2 instance (during the 12 months)."
    }]
  },
  {
    url: "https://cloud.google.com/pricing/",
    targets: [
    {
      element: "div.body",
      value: "Get $300 free credit to spend over 12 months"
    }]
  },
  {
    url: "https://azure.microsoft.com/en-us/",
    targets: [
    {
      element: "div.medium-7>div>div:nth-child(1)>p:nth-child(2)",
      value: "Sign up and get $200 in Azure credits."
    }]
  },
];

module.exports = URLs;