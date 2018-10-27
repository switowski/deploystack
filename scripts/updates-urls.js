/*jshint multistr: true */
// Config variable with all URLs to check

// NOTE: To correctly select the element selector, disable JS in the browser
// first (cheerio doesn't execute the JavaScript on a page)

// NOTE: Don't trust the CSS paths from the browsers, usually browsers add the
// 'tbody' element that isn't actually in the original HTML and that will break
// the selectors (so make sure to double check them by hand)
var URLs = [
  // {
  //   url: "https://www.digitalocean.com/pricing",
  //   targets: [
  //   {
  //     element: '//*[@id="tab-compute"]/div/div[1]/div[1]/div/div/table/tbody/tr[1]/td[1]/strong',
  //     value: '1 GB'
  //   },
  //   {
  //     element: '//*[@id="tab-compute"]/div/div[1]/div[1]/div/div/table/tbody/tr[7]/td[3]',
  //     value: '160 GB'
  //   }]
  // },
  // {
  //   url: "https://www.linode.com/pricing",
  //   targets: [
  //   {
  //     element: '//*[@id="pricing-larger-plans"]/div/div[1]/div/div/table/tbody/tr[1]/td[4]',
  //     value: '25 GB SSD',
  //   },
  //   {
  //     element: '//*[@id="pricing-larger-plans"]/div/div[1]/div/div/table/tbody/tr[5]/td[2]',
  //     value: '16 GB'
  //   },
  //   {
  //     element: '//*[@id="pricing-larger-plans"]/div/div[1]/div/div/table/tbody/tr[7]/td[3]',
  //     value: '16 Cores'
  //   }]
  // },
  // {
  //   url: "https://amazonlightsail.com/pricing/",
  //   targets: [
  //   {
  //     element: '//*[@id="aws-page-content"]/main/div[1]/div/div[2]/div/div[1]/ul[2]/li[2]/div/div/div/div[2]/div[2]/div[3]/b',
  //     value: '40 GB'
  //   },
  //   {
  //     element: '//*[@id="aws-page-content"]/main/div[1]/div/div[2]/div/div[1]/ul[2]/li[2]/div/div/div/div[6]/div[2]/div[1]/b',
  //     value: '16 GB'
  //   }]
  // },
  // {
  //   url: "https://aws.amazon.com/free/faqs/?ft=n",
  //   targets: [
  //   {
  //     element: '//*[@id="aws-page-content"]/div/div/main/section/div[2]/div[9]/div/p',
  //     value: "5 GB of Amazon S3 standard storage, 20,000 Get Requests, and 2,000 Put Requests*"
  //   },
  //   {
  //     element: '//*[@id="aws-page-content"]/div/div/main/section/div[2]/div[3]/div/p',
  //     value: "750 hours of Amazon EC2 Linux or RHEL or SLES t2.micro instance usage (1 GiB of memory and 32-bit and 64-bit platform support) – enough hours to run continuously each month*"
  //   }]
  // },
  // {
  //   url: "https://www.heroku.com/pricing",
  //   targets: [
  //   {
  //     element: '//*[@id="heroku-dyno-free"]/div/p',
  //     value: "512 MB RAM │ 1 web/1 worker"
  //   },
  //   {
  //     element: '//*[@id="postgres-tier-hobby"]/ul/li[1]/label/p',
  //     value: "Free — 10K rows",
  //   }]
  // },
  // {
  //   url: "https://cloud.google.com/free/",
  //   targets: [
  //   {
  //     element: '//*[@id="cloud-site"]/section/div[4]/div[3]/div/div[1]/div/div[2]/div[1]/p[2]',
  //     value: "f1-micro instance per month"
  //   }]
  // },
  // {
  //   url: "https://www.namecheap.com/domains/registration.aspx#domain_tab_techspecs",
  //   targets: [
  //   {
  //     element: '//*[@id="ctl00_ctl00_ctl00_ctl00_base_content_web_base_content_home_content_page_content_left_ctl16_registerTLDsRepeater_ctl00_genericTLDRepeater_ctl00_lbl_regularPrice"]',
  //     value: "8.88"
  //   },
  //   {
  //     element: '//*[@id="ctl00_ctl00_ctl00_ctl00_base_content_web_base_content_home_content_page_content_left_ctl16_registerTLDsRepeater_ctl00_genericTLDRepeater_ctl243_hasPromo"]/span[2]',
  //     value: "Renewal Price $41.88",
  //   }]
  // },
  // {
  //   url: "https://www.namesilo.com/pricing.php",
  //   targets: [
  //   {
  //     element: '//*[@id="reportTable"]/tbody/tr[3]/td[2]',
  //     value: "$15.17"
  //   },
  //   {
  //     element: '//*[@id="reportTable"]/tbody/tr[257]/td[2]',
  //     value: "$5.99                                                                        $37.99",
  //   }]
  // },
  // {
  //   url: "https://www.1and1.com/buy-a-domain-name",
  //   targets: [
  //   {
  //     element: '//*[@id="org"]/div/div[4]',
  //     value: "$19.99/year"
  //   },
  //   {
  //     element: '//*[@id="com"]/div/div[2]/span',
  //     value: "$0.99/year"
  //   }]
  // },
  // {
  //   url: "https://uptimerobot.com/pricing",
  //   targets: [
  //   {
  //     element: '/html/body/div[2]/div/div[2]/div[1]/div[1]/ul/li[1]/strong',
  //     value: "5 minutes monitoring intervals"
  //   },
  //   {
  //     element: '/html/body/div[2]/div/div[2]/div[1]/div[1]/ul/li[2]',
  //     value: "50 monitors"
  //   }]
  // },
  // {
  //   url: "https://www.statuscake.com/pricing/",
  //   targets: [
  //   {
  //     element: '//*[@id="freeTablePlan"]/div[4]',
  //     value: "15 Minutes"
  //   }]
  // },
  // {
  //   url: "https://aws.amazon.com/s3/pricing/",
  //   targets: [
  //   {
  //     element: '//*[@id="element-b218c69d-ffde-498c-a993-51005c6c3c5c"]/div[2]/div/table/tbody[1]/tr[2]/td[2]',
  //     value: "$0.023 per GB"
  //   },
  //   {
  //     element: '//*[@id="element-b218c69d-ffde-498c-a993-51005c6c3c5c"]/div[2]/div/table/tbody[4]/tr[2]/td[2]',
  //     value: "$0.004 per GB"
  //   }]
  // },
  // {
  //   url: "https://www.cdn77.com/pricing",
  //   targets: [
  //   {
  //     element: '//*[@id="pricingPage"]/section[2]/div/div/div[1]/div[1]/div[1]/div[1]/div[2]/strong',
  //     value: "$0.049"
  //   },
  //   {
  //     element: '//*[@id="pricingPage"]/section[5]/div/div[1]/div/div[1]/p',
  //     value: "You are charged per byte and the cost is gradually deducted from your credit. To get started, just\n                            top up your account with $149. This credit is valid for one year from the payment date. However,\n                            every time you add funds to your credit, all of your credit becomes valid for another year."
  //   }]
  // },
  // {
  //   url: "https://www.keycdn.com/pricing",
  //   targets: [
  //   {
  //     element: '//*[@id="wrapper"]/section[2]/div/div/div/table/tbody/tr[2]/td[2]',
  //     value: "$0.04 / GB"
  //   },
  //   {
  //     element: '//*[@id="wrapper"]/section[2]/div/div/div/table/tbody/tr[5]/td[4]',
  //     value: "$0.06 / GB"
  //   }]
  // },
  // {
  //   url: "https://www.cloudflare.com/plans/",
  //   targets: [
  //   {
  //     element: '/html/body/div[3]/div/section[1]/div[2]/div/div[1]/ul/li[7]',
  //     value: "3 Page Rules included Additional rules available for purchase through the dashboard"
  //   },
  //   {
  //     element: '/html/body/div[3]/div/section[1]/section/div/div[3]/div/div[2]/span/div[3]/span[2]',
  //     value: "20"
  //   }]
  // },
  // {
  //   url: "https://sentry.io/pricing/",
  //   targets: [
  //   {
  //     element: "div.plan-cards>div:nth-child(1)>ul:nth-child(4)>li:nth-child(1)",
  //     value: "10k events/mo"
  //   },
  //   {
  //     element: "div.plan-cards>div:nth-child(2)>p",
  //     value: "$26/month"
  //   }]
  // },
  // {
  //   url: "https://rollbar.com/pricing/",
  //   targets: [
  //   {
  //     element: "div.pricing-plans-grid-cols-wrapper>div:nth-child(1)>div>div:nth-child(1)>div",
  //     value: "5,000"
  //   },
  //   {
  //     element: "div.pricing-plans-grid-cols-wrapper>div:nth-child(2)>a>div:nth-child(2)>span:nth-child(1)>span",
  //     value: "$49"
  //   },
  //   {
  //     element: "div.pricing-plans-grid-cols-wrapper>div:nth-child(2)>div>div:nth-child(2)>div",
  //     value: "180 days"
  //   }]
  // },
  // {
  //   url: "https://airbrake.io/pricing",
  //   targets: [
  //   {
  //     element: "div.wrapper>section:nth-child(2)>div>div>table>thead>tr:nth-child(2)>td:nth-child(3)>div",
  //     value: "$49/month"
  //   },
  //   {
  //     element: "div.wrapper>section:nth-child(2)>div>div>table>thead>tr:nth-child(1)>th:nth-child(2)",
  //     value: "FREE"
  //   },
  //   {
  //     element: "div.wrapper>section:nth-child(2)>div>div>table>thead>tr:nth-child(2)>td:nth-child(4)>div",
  //     value: "$99/month"
  //   },
  //   {
  //     element: "div.wrapper>section:nth-child(2)>div>div>table>tbody>tr:nth-child(4)>td:nth-child(3)",
  //     value: "30 Days"
  //   }]
  // },
  // {
  //   url: "https://mailchimp.com/pricing/entrepreneur/",
  //   targets: [
  //   {
  //     element: "p.body",
  //     value: "Up to 2,000 subscribers and 12,000 emails per month"
  //   }]
  // },
  // {
  //   url: "https://mailchimp.com/pricing/",
  //   targets: [
  //   {
  //     element: "div.pricing-pathway_container>div:nth-child(2)>div:nth-child(1)>div>h3",
  //     value: "$10 per month"
  //   }]
  // },
  // {
  //   url: "https://www.sendinblue.com/pricing/",
  //   targets: [
  //   {
  //     element: "div#carousel-plans-month>div>div:nth-child(1)>div>div>div:nth-child(1)>div>div:nth-child(1)>div:nth-child(3)>div",
  //     value: "9,000 emails / mo."
  //   },
  //   {
  //     element: "div.spacer-bottom-lg>div:nth-child(1)>div:nth-child(2)>div>p:nth-child(2)",
  //     value: "Absolutely! When you sign up for our service, you will automatically have a Free Plan with 9,000 emails per month. Your Free Plan lets you upload unlimited contacts, but does have a daily sending maximum of 300 emails per day."
  //   },
  //   {
  //     element: "div#carousel-plans-month>div>div:nth-child(1)>div>div>div:nth-child(1)>div>div:nth-child(1)>div:nth-child(3)>ul>li:nth-child(1)",
  //     value: "Unlimited Contacts"
  //   }]
  // },
  // {
  //   url: "https://aws.amazon.com/ses/pricing/",
  //   targets: [
  //   {
  //     element: "div.eight>div>div:nth-child(3)>div>p:nth-child(1)",
  //     value: "If you are an Amazon EC2 user, you can start sending with Amazon SES for free. You can send 62,000 messages per month to any recipient when you call Amazon SES from an Amazon EC2 instance directly or through AWS Elastic Beanstalk. Additionally, you can also receive 1,000 messages per month for free on Amazon SES. Many applications are able to operate entirely within this free tier limit, and it does not expire after a year."
  //   },
  //   {
  //     element: "div.eight>div>div:nth-child(9)>div>p",
  //     value: "$0.12 per GB of attachments sent."
  //   }]
  // },
  // {
  //   url: "https://www.mailgun.com/pricing",
  //   targets: [
  //   {
  //     element: "body.page-template>main>div>h1",
  //     value: "Your first 10,000 emails are free every month"
  //   }]
  // },
  // {
  //   url: "https://about.gitlab.com/products/",
  //   targets: [
  //   {
  //     element: "div.pricing-options>div>div>div:nth-child(3)>div>div:nth-child(2)>div:nth-child(2)>h4",
  //     value: "paid annually at $39"
  //   }]
  // },
  // {
  //   url: "https://github.com/pricing",
  //   targets: [
  //   {
  //     element: "div.plans-cards>div:nth-child(1)>div>h3>span:nth-child(1)",
  //     value: "$7"
  //   }]
  // },
  // {
  //   url: "https://bitbucket.org/product/pricing?tab=host-in-the-cloud",
  //   targets: [
  //   {
  //     element: "section.imkt-equalheights-parent>div>section:nth-child(2)>div>div:nth-child(2)>section:nth-child(1)>div>div>h1",
  //     value: "$2"
  //   }]
  // },
  // {
  //   url: "https://about.gitlab.com/features/pages/",
  //   targets: [
  //   {
  //     element: "section.what-is>div>div:nth-child(2)>div>div:nth-child(4)>p",
  //     value: "Host your static websites on GitLab.com for free, or on your own GitLab instance."
  //   }]
  // },
  // {
  //   url: "http://surge.sh/pricing",
  //   targets: [
  //   {
  //     element: "div.mxn1>div:nth-child(2)>a>div:nth-child(3)>span:nth-child(1)",
  //     value: "only $13/mo."
  //   }]
  // },
  // {
  //   url: "https://www.aerobatic.com/#pricing",
  //   targets: [
  //   {
  //     element: "div.pricing-plans>div:nth-child(2)>header>div>h2",
  //     value: "15"
  //   }]
  // },
  // {
  //   url: "https://www.netlify.com/pricing/",
  //   targets: [
  //   {
  //     element: "div.tier2>div:nth-child(2)>div:nth-child(1)>h4",
  //     value: "$9"
  //   },
  //   {
  //     element: "span.old-price",
  //     value: "49"
  //   },
  //   {
  //     element: "div.tier3>div:nth-child(2)>div:nth-child(1)>h4",
  //     value: "$49"
  //   }]
  // },
  // {
  //   url: "https://firebase.google.com/pricing/",
  //   targets: [
  //   {
  //     element: "th.firesite-pricing-table__header__cell--flame>p",
  //     value: "$25/month"
  //   }]
  // },
  // {
  //   url: "https://aws.amazon.com/free/",
  //   targets: [
  //   {
  //     element: "div#aws-page-content>main>section>div>div:nth-child(5)>div>div>div>div>div:nth-child(1)>div>div>div>div>div:nth-child(2)>div>p:nth-child(1)",
  //     value: "AWS Marketplace offers free and paid software products that run on the AWS Free Tier. If you qualify for the AWS Free Tier, you can use these products on an Amazon EC2 t2.micro instance for up to 750 hours per month and pay no additional charges for the Amazon EC2 instance (during the 12 months)."
  //   }]
  // },
  // {
  //   url: "https://cloud.google.com/pricing/",
  //   targets: [
  //   {
  //     element: "div.body",
  //     value: "Get $300 free credit to spend over 12 months"
  //   }]
  // },
  // {
  //   url: "https://azure.microsoft.com/en-us/",
  //   targets: [
  //   {
  //     element: "div.medium-7>div>div:nth-child(1)>p:nth-child(2)",
  //     value: "Sign up and get $200 in Azure credits."
  //   }]
  // },
];

module.exports = URLs;
