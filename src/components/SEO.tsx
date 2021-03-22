import React from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  description?: string
  lang?: string
  keywords?: string[]
  title: string
  image?: string
}

const SEO: React.FC<Props> = ({
  description,
  lang = 'sv',
  keywords = [],
  title = '',
  image,
}) => {
  const metaDescription = description || 'Default description'
  const metaImage = image

  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | Tre`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          property: 'image',
          content: metaImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          property: 'twitter:image',
          content: metaImage,
        },
        {
          name: `twitter:creator`,
          content: 'jontgus',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
          : []
      )}
    />
  )
}

export default SEO
