import React, { PropTypes } from 'react'
import cx from 'classnames'
import {
  BeamSideHeader,
  BeamHeading,
  Heading,
  Link,
  LinkButton
} from './'

const classes = {
  root: '',
  body: {
    base: 'P(r1)',
    inactive: ' Z(-1) Pos(r)'
  }
}

const AboutIndex = ({
  active,
  children,
  pages
}) => {
  const bodyClasses = cx(
    classes.body.base,
    !active && classes.body.inactive
  )
  const videoClasses = cx(
    'Mb(r1) Mx(-1.5rem) Pos(r) H(0) Pb(r1) Pt(56.15%)',
    !active && 'Z(-1)'
  )
  return (
    <div className={classes.root}>
      <BeamSideHeader>
        <BeamHeading>About</BeamHeading>
      </BeamSideHeader>
      <div className={bodyClasses}>
        <p className='Fz(ms1) Mb(r1)'>Maker Land is a camping event in Oregon, more details coming soon!</p>
        <Heading level={2} className='Fz(ms1) Mt(r2) Mb(rh)'>
          More Info
        </Heading>
        <ul className='Mb(r2)'>
          {pages.map((page, key) => {
            if (page.data && (page.path.indexOf('/about/') !== -1)) {
              return (
                <li key={key}><Link className='Link' to={page.path}>
                  {page.data.title}
                </Link></li>
              )
            }
          })}
        </ul>
        {children}
      </div>
    </div>
  )
}

AboutIndex.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  pages: PropTypes.array
}

export default AboutIndex
