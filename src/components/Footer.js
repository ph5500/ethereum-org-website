import React from "react"
import styled from "styled-components"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { getLangVersion } from "../utils/translations"

// import { IntlProvider } from "react-intl-context"

// const linkSections = ({ langVersion, langPath }) => {
//   const contentVersion = translate("version", this.$lang)
//   const langPath = translate("path", this.$lang)

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 3rem;
  padding-bottom: 4rem;
  width: 85vw;
  max-width: 1440px;
  margin: 0 auto;
`

const StyledSocial = styled.footer`
  ul {
    list-style-type: none;
  }
`

const StyledFooter_2 = styled.footer`
  ul {
    list-style-type: none;
  }
`

const StyledFooter_3 = styled.footer`
  &:hover {
    color: blue; // <Thing> when hovered
  }
`

const FooterTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const Footer = () => {
  const intl = useIntl()

  const contentVersion = getLangVersion(intl.locale)
  // const socialLinks = [
  //       {
  //         icon: 'github',
  //         to: 'https://github.com/ethereum'
  //       },
  //       {
  //         icon: 'twitter',
  //         to: 'https://twitter.com/ethereum'
  //       },
  //       {
  //         icon: 'youtube',
  //         to: 'https://youtube.com/channel/UCNOfzGXD_C9YMYmnefmPH0g'
  //       }
  //     ]
  //   },
  const socialLinks = [
    {
      icon: "github",
      to: <a href="https://github.com/ethereum"> Github</a>,
    },
    {
      icon: "twitter",
      to: <a href="https://twitter.com/ethereum">Twitter</a>,
    },
    {
      icon: "youtube",
      to: (
        <a href="https://youtube.com/channel/UCNOfzGXD_C9YMYmnefmPH0g">
          Youtube
        </a>
      ),
    },
  ]

  const linkSections = [
    {
      title: "page-individuals",
      links: [
        {
          to: `/what-is-ethereum/`,
          text:
            contentVersion > 1
              ? "page-home-section-individuals-item-one"
              : "page-home-section-individuals-item-two",
          shouldDisplay: true,
        },
        {
          to: `/use/`,
          text: "page-use",
          shouldDisplay: contentVersion < 1.1,
        },
        {
          to: `/eth/`,
          text: "page-home-section-individuals-item-four",
          shouldDisplay: true,
        },
        {
          to: `/dapps/`,
          text: "page-home-section-individuals-item-two",
          shouldDisplay: contentVersion >= 1.1,
        },
        {
          to: `/wallets/`,
          text: "page-home-section-individuals-item-five",
          shouldDisplay: contentVersion >= 1.1,
        },
        {
          to: `/learn/`,
          text:
            contentVersion > 1
              ? "page-home-section-individuals-item-three"
              : "page-learn",
          shouldDisplay: true,
        },
        {
          to: `/community/`,
          text: "page-community",
          shouldDisplay: contentVersion >= 1.2,
        },
      ],
    },
    {
      title: "page-developers",
      links: [
        {
          to: `/build/`,
          text: "get-started",
          shouldDisplay: contentVersion >= 1.1,
        },
        {
          to: "https://studio.ethereum.org/",
          text: "Ethereum Studio",
          isExternal: true,
          shouldDisplay: true,
        },
        {
          to: `/developers/`,
          text: contentVersion > 1 ? "developer-resources" : "page-developers",
          shouldDisplay: true,
        },
        {
          to: "/whitepaper/",
          text: "Ethereum Whitepaper",
          shouldDisplay: true,
        },
      ],
    },
    {
      title: "footer-ecosystem",
      links: [
        {
          to: "/foundation/",
          text: "Ethereum Foundation",
          shouldDisplay: true,
        },
        {
          to: "https://blog.ethereum.org/",
          text: "Ethereum Foundation Blog",
          isExternal: true,
          shouldDisplay: true,
        },
        {
          to: "https://esp.ethereum.foundation",
          text: "Ecosystem Support Program",
          isExternal: true,
          shouldDisplay: true,
        },
        {
          to: "/eips/",
          text: "Ethereum Improvement Proposals",
          shouldDisplay: true,
        },
        {
          to: "/assets/",
          text: "ethereum-brand-assets",
          shouldDisplay: true,
        },
        {
          to: "https://devcon.org/",
          text: "Devcon",
          isExternal: true,
          shouldDisplay: true,
        },
      ],
    },
    {
      title: "footer-about",
      links: [
        {
          to: "/about/",
          text: "About us",
          useRouter: true,
          shouldDisplay: true,
        },
        {
          to: "/languages/",
          text: "language-support",
          shouldDisplay: true,
        },
        {
          to: "/privacy-policy/",
          text: "privacy-policy",
          shouldDisplay: true,
        },
        {
          to: "/terms-of-use/",
          text: "terms-of-use",
          shouldDisplay: true,
        },
        {
          to: "/cookie-policy/",
          text: "cookie-policy",
          shouldDisplay: true,
        },
        {
          to: "mailto:press@ethereum.org",
          text: "contact",
          shouldDisplay: true,
        },
      ],
    },
  ]

  return (
    <StyledFooter>
      <FooterTop>
        <div>Last updated: Today</div>
        <div>
          {socialLinks.map((section, idx) => {
            return (
              //  <div key={idx}>
              <StyledSocial>
                <ul>
                  <li key={idx}>{section.to}</li>
                </ul>
              </StyledSocial>
            )
          })}
        </div>
      </FooterTop>

      {linkSections.map((section, idx) => {
        return (
          <div key={idx}>
            <h3>
              <FormattedMessage id={section.title} />
            </h3>
            <StyledFooter_2>
              <ul>
                {section.links
                  .filter((link) => link.shouldDisplay === true)
                  .map((link, linkIdx) => {
                    return (
                      <StyledFooter_3>
                        <li key={linkIdx}>
                          <FormattedMessage id={link.text} />
                        </li>
                      </StyledFooter_3>
                    )
                  })}
              </ul>
            </StyledFooter_2>
          </div>
        )
      })}
      {/* add dynamic links */}
      {/* <div>
        <h3>Individuals</h3>
        <ul>
          <li>What is Ethereum?</li>
          <li>What is Ethereum?</li>
          <li>What is Ethereum?</li>
          <li>What is Ethereum?</li>
          <li>What is Ethereum?</li>
        </ul>
      </div>
      <div>
        <h3>Individuals</h3>
        <ul>
          <li>What is Ethereum?</li>
          <li>What is Ethereum?</li>
          <li>What is Ethereum?</li>
          <li>What is Ethereum?</li>
          <li>What is Ethereum?</li>
        </ul>
      </div>
      <div>
        <h3>Individuals</h3>
        <ul>
          <li>What is Ethereum?</li>
          <li>What is Ethereum?</li>
          <li>What is Ethereum?</li>
          <li>What is Ethereum?</li>
          <li>What is Ethereum?</li>
        </ul>
      </div>
      <div>
        <h3>Individuals</h3>
        <ul>
          <li>What is Ethereum?</li>
          <li>What is Ethereum?</li>
          <li>What is Ethereum?</li>
          <li>What is Ethereum?</li>
          <li>What is Ethereum?</li>
        </ul>
      </div> */}
    </StyledFooter>
  )
}

export default Footer
