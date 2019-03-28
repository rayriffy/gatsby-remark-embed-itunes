gatsby-remark-embed-itunes
==========================

Embeding iTunes tracks/albums into your Gatsby remark

Installation
------------

```
yarn add gatsby-remark-embed-itunes
```

Usage
-----

Config `gatsby-remark-embed-itunes` in `gatsby-config.js` under `gatsby-transformer-remark` plugins

```
{
  resolve: "gatsby-transformer-remark",
  options: {
    plugins: [
      `gatsby-remark-embed-itunes`,
    ]
  }
}
```

Example
-------

```markdown
What an awesome markdown!?

`itunes: https://itunes.apple.com/jp/album/touhou-bakuon-jazz-12-hari/1437763702`

such wonderful
```

Contributing
------------

We welcome all contributions by sending PR to this repository.

Need Help ?
-----------

If you need help with anything, here're following methods:

#### Create an Issue

If you have something you want to discuss in detail, or have hit an issue which you believe others will also have in deployment or development of the system, [opening an issue](https://github.com/rayriffy/gatsby-remark-embed-itunes/issues) is the best way to get help. It creates a permanent resource for others wishing to contribute to conversation.