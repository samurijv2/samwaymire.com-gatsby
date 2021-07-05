import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  content,
  media, 
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  footer
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  
    return (
      <main>
        <div className={container}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <div>
          <p className={siteTitle}>{data.site.siteMetadata.title}</p>
          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link to="/" className={navLinkText}>
                  Home
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/services" className={navLinkText}>
                  Services
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/pricing" className={navLinkText}>
                  Pricing
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/FAQs" className={navLinkText}>
                  FAQs
                </Link>
              </li>  
              <li className={navLinkItem}>
                <Link to="/blog" className={navLinkText}>
                  Blog
                </Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/contact" className={navLinkText}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={content}>
          <h1>{pageTitle}</h1>
          {children}
          <footer>
            <hr></hr>
            © {new Date().getFullYear()} Waymire Analytics LLC, Built with {` `} <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
        </div>
      </main>  
    )
  }
  
  export default Layout