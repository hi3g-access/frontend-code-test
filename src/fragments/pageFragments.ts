import { graphql } from 'gatsby';

export const query = graphql`
  fragment contentEntity on treApi_ContentEntity {
    id
    type
  }

  fragment contentPageLink on treApi_ContentPage {
    id
    href: urlPath
    text: menuTitle
  }

  fragment contentExternalLink on treApi_ContentExternalLink {
    id
    href: url
    text: linkText
  }

  fragment contentCustomAction on treApi_ContentCustomAction {
    id
    href: url
    text: linkText
    action
  }

  fragment contentPimCard on treApi_ContentPimCard {
    id
    isPim
    urlSlug
    productType
    brand
    model
    devicePromotionTitle
    showManufacturer
    content
    image {
      id
      ...contentPimImage
    }
    postpaid {
      ...contentPimPrice
    }
    banner {
      ...contentPimBanner
    }
    bindingPeriod {
      ...contentPimBindingPeriod
    }
  }

  fragment contentPimBindingPeriod on treApi_ContentPimBindingPeriod {
    duration
    unit
  }

  fragment contentPimBanner on treApi_ContentPimBanner {
    text
    backgroundColor
    textColor
  }

  fragment contentPimImage on treApi_ContentPimImage {
    id
    url
    title
    width
    height
  }

  fragment contentPimPrice on treApi_ContentPimPrice {
    upfront
    originalUpfront
    recurring
    originalRecurring
    minCost
    currency
  }

  fragment contentPromotionCard on treApi_ContentPromotionCard {
    id
    isPim
    devicePromotionTitle
    banner {
      text
      textColor
      backgroundColor
    }
    imageAbove
    image {
      id
      ... on treApi_ContentImage {
        type
        url
        description
        width
        height
      }
    }
    content
    link {
      ...contentEntity
      ...contentPageLink
      ...contentExternalLink
    }
  }

  fragment contentPromotionGrid on treApi_ContentPromotionGrid {
    id
    type
    title
    blocks {
      ...contentPimCard
      ...contentPromotionCard
    }
    initialLayout
  }

  fragment contentProductList on treApi_ContentProductList {
    id
    type
    title
    isPopularProductList: isPopular
    productListHeading: heading {
      id
      ...contentHeading
    }
    link {
      ...contentEntity
      ...contentPageLink
      ...contentExternalLink
    }
    hasBackground
  }

  fragment contentArticleItem on treApi_ContentArticleItem {
    id
    heading
    body
    link {
      ...contentEntity
      ...contentPageLink
      ...contentExternalLink
    }
    image {
      id
      url
      width
      height
      description
    }
    promoId
  }

  fragment contentCard on treApi_ContentCard {
    id
    type
    topNote
    title
    bottomNote
    icon
    url
    notificationType
    notificationMessage
    fullWidthImage {
      id
      url
      width
      height
      description
    }
    bulletList
    content
    link {
      ...contentEntity
      ...contentPageLink
      ...contentExternalLink
      ...contentCustomAction
    }
    isButton
    invertTheme
  }

  fragment contentRow on treApi_ContentRow {
    id
    rowHeading: heading {
      id
      text
      size
    }
    items {
      id
      ...contentEntity
      ...contentArticleItem
      ...contentCard
    }
    hasBackground
    mobileColumns
    tabletColumns
    laptopColumns
    desktopColumns
    hasBackground
  }

  fragment contentHeading on treApi_ContentHeading {
    id
    text
    size
  }

  fragment contentPricePlanOverview on treApi_ContentPricePlanOverview {
    id
    pricePlanTypes
  }

  fragment pageContent on treApi_ContentPage {
    id
    ...contentEntity
    canonicalUrl
    hiddenHeading {
      id
      ...contentHeading
    }
    blocks {
      id
      ...contentEntity
      ...contentHeading
      ...contentArticleItem
      ...contentCard
      ...contentProductList
      ...contentPromotionGrid
      ...contentPricePlanOverview
      ...contentRow
      ... on treApi_ContentFaqSection {
        categories {
          id
          ...contentEntity
          slug
          title
          questionsTitle
          questions {
            id
            ...contentEntity
            slug
            answerText
            questionText
            keywords
          }
          secondaryQuestions {
            id
            ...contentEntity
            slug
            answerText
            questionText
            keywords
          }
        }
      }
      ... on treApi_ContentContactUs {
        heading
        contactUsButtonText
        hideContactUsButtonText
        link {
          ...contentEntity
          ...contentPageLink
          ...contentExternalLink
        }
        contactUsCards {
          id
          type
          ...contentCard
        }
      }
      ... on treApi_ContentExperiment {
        name
        variants {
          id
          name
          component {
            id
            ...contentEntity
            ...contentHeading
          }
        }
      }
      ... on treApi_ContentDeviceDetails {
        title
        deliveryConditions
        contactDetails
        surf {
          id
          title
          body
        }

        surf_eu {
          id
          title
          body
        }
      }
    }
    index
    metaDescription
    keywords
    openGraphSettings {
      id
      ogTitle
      ogDescription
      ogUrl
      ogImage {
        id
        url
        description
        width
        height
      }
      ogImageUrl
    }
  }
`;
