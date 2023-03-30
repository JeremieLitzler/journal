---
title: 'How is my digital business setup?'
description: 'In 2023, there are a lot of solutions to build your digital presence. In this article, I will share my current setup and why I use it.'
date: 2023-03-30
heroImage: /images/2023-03-30-a-laptop-and-notebook-on-a-desk.jpg
heroAlt: A laptop and a notebook on a desk
head:
  - [
      meta,
      {
        rel: canonical,
        href: https://iamjeremie.me/2023/03/how-is-setup-my-digital-business-today/,
      },
    ]
category:
  - Digital business
---

![A laptop and a notebook on a desk.](/images/2023-03-30-a-laptop-and-notebook-on-a-desk.jpg ’Photo by Nick Morrison](https://unsplash.com/@nickmorrison?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText] on [Unsplash](https://unsplash.com/s/photos/digital-business?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText]')

In 2023, there are a lot of solutions to build your digital presence. In this article, I will share my current setup and why I use it.

<!-- more -->

## For websites

I use a couple of solutions, which I pick depending on the next.

For my personal use, I use the first option more and more because of the clear win on hosting cost.

Still I use the second option also to hosting WordPress demo websites.

All my domains are registered with OVH. I had a couple registered with Infomaniak, but I’m dropping them this year.

### VuePress and Netlify through GitHub

I have been looking for a lightweight and cost-effective solution to build and host websites for a long time.

I tried simple HTML files, custom PHP application and WordPress.

Even if I use WordPress for my clients because it gives flexibility for them to update content themselves, I didn’t want using it for my usage.

As a software engineer, I wanted something quick, easy and with the less dependence possible.

I discovered VuePress as I started learning about VueJS in 2021.

At first, I used a custom theme of VuePress, based on the default theme. Then I discovered [Mr Hope’s theme](https://theme-hope.vuejs.press/) which provides all the features I need.

It allows me to:

- customize the styles, navigation, features I need
- write articles quickly in [Markdown](https://en.wikipedia.org/wiki/Markdown) which VuePress transforms into static HTML files
- deploy automatically the website with little efforts.

I have built a [template repository](https://github.com/Puzzlout/TemplateVuepress/) with a minimum setup if you’re interested. Or [contact me if you need help](../../../page/contact-me/README.md).

The **cost is limited to the custom domain name** if the `my-website.netlify.app`isn’t enough.

### WordPress, Divi and Infomaniak

I use WordPress and the Divi builder through [Infomaniak hosting](https://www.infomaniak.com/goto/fr/my-easy-site?utm_term=5ff70313bf816) for clients.

It’s very cost-effective with an annual plan starting at 80 euros per year. It includes a domain and a web hosting with the Divi builder for free.

The manager dashboard is great and more intuitive than OVH’s.

The features available really appeals to me who likes to scripts deployment. Even though I can’t do all I can on Cloudways, I can do enough to automate quite a few steps when deploying a WordPress site for a client.

Also, the fact that Divi comes for free when you purchase a hosting plan is a good plus.

In terms of cost, you will need to pay for the domain and hosting. For a `.fr`domain and the bare minimum hosting, it costs about **112 euros per year**, which may be more than OVH or GoDaddy or IONOS, but the features of Infomaniak beat them clear and square.

[Contact me if you need help](../../../page/contact-me/README.md) to get started.

### WordPress, Divi and Cloudways

I use WordPress and the Divi builder (which I purchased) and I host on a [VPS Cloudways hosting](https://www.cloudways.com/en/?id=174912) all my demo WordPress websites.

Why? Because Infomaniak is much more expensive and less performant for half a dozen WordPress sites.

It costs me only **$11.34 per month** to keep on 1 GB DigitalOcean droplet running. Cloudways take care of all the server maintenance for me.

I only need to update the WordPress sites now and then.

I have built a custom workflow to deploy those websites using bash scripts. It’s very similar to Infomaniak scripts.

I really like Cloudways because you have access to many features that are usually locked with shared hosting.

Compared to Infomaniak, the different is that you own your server and nobody else works on it. At Infomaniak

[Contact me if you need help](../../../page/contact-me/README.md) if you’re interested about the deploy scripts.

## For newsletter

At the moment, I use Substack only.

Why?

Because it’s free and customizable to reflect your brand.

There are two drawbacks so far:

- The localization isn’t great: when you speak another language than English, you can’t set everything in your language.
- Even if the membership feature is easy to set up (connecting with your Stripe account), you can only setup subscription in US dollars.

I’m hoping for an update soon to solve the first issue soon.

For the membership issue, read on.

## For memberships

I’ve got no subscribers as of March 30, 2023.

However, I have a Stripe account with products. For those who, one day, will be kind to support my work with one-time donation or a monthly/yearly subscription, it is all ready.

At the moment, my personal website, for example, is using payment links that allows anyone to pay in 4 different currencies.

If you want to follow my progress in the search of the best solution, consider subscribing.

:::center
⏬⏬⏬
:::

<!-- markdownlint-disable MD033 -->
<p class="newsletter-wrapper"><iframe class="newsletter-embed" src="https://iamjeremie.substack.com/embed" frameborder="0" scrolling="no"></iframe></p>
