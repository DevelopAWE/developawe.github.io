import React from 'react'
import Link from 'gatsby-link'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <p>
            We are DevelopAWE. AWE stands for App, Web, and Everything. We aim
            to do everything web or app related for you. We will design and
            develop your website, host it for you, supply domains and keep your
            site up to date for you. We can also develop Android and IOS apps to
            suit your needs if you need an app built. “We will leave you in{' '}
            <strong>
              <em>AWE</em>
            </strong>”
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <p>
            Currently we have not finished any sites to display here. Please
            check back later to see what we have done. If you would like to
            inquire about having us build a site for you please{' '}
            <a
              href="javascript:;"
              onClick={() => {
                this.props.onChangeArticle('contact')
              }}
            >
              contact
            </a>{' '}
            us. Thank you.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            We are a small web company. We focus on web design and development,
            along with hosting options and domain purchasing.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} 
          ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                disabled="true"
                placeholder="This form is currently disabled"
              />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                disabled="true"
                placeholder="This form is currently disabled"
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                disabled="true"
                placeholder="This form is currently disabled"
              />
            </div>
            <ul className="actions">
              <li>
                <input
                  type="submit"
                  value="Send Message"
                  className="special"
                  disabled="true"
                />
              </li>
              <li>
                <input type="reset" value="Reset" disabled="true" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DevelopAWE"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onChangeArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Main
