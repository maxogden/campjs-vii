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
      <div style={{margin: "20px"}}>
        <p className='Fz(ms1) Mb(r1)'>A weekend open air camping + maker event on the Oregon coast!</p>
        <p className='Mb(r1)'>Camp out in a beautiful meadow on the Oregon coast and do things like learn how to solder LEDs in a barn or make a digeridoo out of driftwood. <LinkButton to='/tickets/'>Tickets are available now</LinkButton></p>
        <p className='Mb(r1)'><a href="http://i.imgur.com/USliyK7.jpg"><img src="http://i.imgur.com/g77pa88.png"></img></a></p>
        <p className='Mb(r1)'>Maker land is a unique blend of expert-led workshops and self-directed, unstructured learning. Some content is scheduled, but the main area is reserved for general use/making/hacking.</p>
        <p className='Mb(r1)'>Have a workshop idea? It can be anything hands-on. Propose a workshop <Link to='/get-involved/' className='Link'>over on this page</Link>.</p>
        <Heading level={2} className='Fz(ms1) Mt(r2) Mb(rh)'>When/Where</Heading>
        <p className='Mb(r1)'>
          Campers can arrive Friday evening (August 19th) or Saturday morning (August 20th). A welcoming presentation will take place Saturday at 11AM and campers can leave Sunday night (the 21st) or Monday morning (the 22nd).
        </p>
        <p className='Mb(r1)'>
          The activities will be at <Link className='Link' to='https://www.facebook.com/Artfarm-Barn-502122016603951/'>The Artfarm Barn</Link>, Seal Rock, OR, nestled next to a salmon spawning creek near the beach and a national forest. There will be power and wi-fi but limited water and possibly showers but no guarantees on that yet. Find out <Link to='/about/transport/' className='Link'>more about transport</Link>.
        </p>
        <p><img src="http://i.imgur.com/qNkK2po.jpg"></img></p>
        <Heading level={2} className='Fz(ms1) Mt(r2) Mb(rh)'>What To Bring</Heading>
        <ul className='List(d) Mstart(r1) Mb(r2)'>
          <li>Enough fresh water for yourself for the weekend (the barn is off the water grid, supply is limited)</li>
          <li>Earplugs</li>
          <li>Tent or hammock to camp in <a href="https://www.pdx.edu/recreation/equipment-rental-center">(PSU also offers equipment rentals to the public!)</a></li>
          <li>Sleeping Bag</li>
          <li>Foam or inflatable camping pad to sleep on</li>
          <li>Toiletries including soap</li>
          <li>Towel(s)</li>
          <li>Baby wipes (for "showers")</li>
          <li>Computer (Prepared for offline use)</li>
          <li>Phone</li>
          <li>Associated Chargers for the above items</li>
          <li>Enough clothing for your stay, including clothing for 40s-50s at night</li>
          <li>Sunscreen, sunglasses and hat</li>
          <li>Insect repellent</li>
          <li>Board/Card Games</li>
          <li>Headphones</li>
          <li>Instruments! There are quiet hours, but otherwise we can make music.</li>
          <li>Medications</li>
          <li>Snacks to Share</li>
          <li>Additional Alchohol (Some beer and cider provided)</li>
          <li>A <Link to='/about/code-of-conduct/' className='Link'>Good Attitude</Link></li>
          <li>Anything else you need to survive the weekend</li>
        </ul>
        <p>
          <LinkButton to='http://lanyrd.com/2016/makerland/' type='secondary'>View Schedule on Lanyrd</LinkButton>
        </p>
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
