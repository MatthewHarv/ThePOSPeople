import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, keywords, title, schemaMarkup }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `https://www.thepospeople.co.nz/`,
        },
        {
          property: `og:site_name`,
          content: `The POS People`,
        },
        {
          property: `og:image`,
          content: `https://i.imgur.com/0PtXcRQ.png`,
        },
        {
          name: `facebook:site`,
          content: `https://www.facebook.com/pointofsalespecialists/`,
        },
        {
          name: `facebook:url`,
          content: `https://www.facebook.com/pointofsalespecialists/`,
        },
        {
          name: `instagram:url`,
          content: `https://www.instagram.com/the_pos_people/`,
        },
        {
          name: `instagram:site`,
          content: `https://www.instagram.com/the_pos_people/`,
        },
        {
          name: `linkedin:url`,
          content: `https://www.linkedin.com/company/the-pos-people/`,
        },
        {
          name: `linkedin:site`,
          content: `https://www.linkedin.com/company/the-pos-people/`,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
