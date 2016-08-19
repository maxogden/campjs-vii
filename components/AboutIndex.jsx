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
        <p className='Mb(r1)'>Camp out in a beautiful meadow near the Oregon coast and do hands-on projects inside a barn-turned-makerspace. <LinkButton to='/tickets/'>Tickets are available now</LinkButton></p>
        <p className='Mb(r1)'><a href="http://i.imgur.com/USliyK7.jpg"><img src="http://i.imgur.com/g77pa88.png"></img></a></p>
        <p className='Mb(r1)'>Maker land is a unique blend of expert-led workshops and self-directed, unstructured learning. Some content is scheduled, but the main area is reserved for general use/making/hacking.</p>
        <p className='Mb(r1)'>Have a workshop idea? It can be anything hands-on. Propose a workshop <Link to='/get-involved/' className='Link'>over on this page</Link>.</p>
        <Heading level={2} className='Fz(ms1) Mt(r2) Mb(rh)'>When/Where</Heading>
        <p className='Mb(r1)'>
          Campers are free to camp only 1 night or up to all 3 nights. They may arrive Friday evening (August 19th) or Saturday morning (August 20th). A welcoming presentation will take place Saturday at 11AM and campers can leave Sunday night (the 21st) or Monday morning (the 22nd).
        </p>
        <p className='Mb(r1)'>
          The activities will be at <Link className='Link' to='https://www.facebook.com/Artfarm-Barn-502122016603951/'>The Artfarm Barn</Link>, Seal Rock, OR, nestled next to a salmon spawning creek near the beach and a national forest. There is working power and wi-fi, and the barn is furnished on the inside with plenty of workspaces. There is limited water and there are two solar shower bags with a private showering area. Find out <Link to='/about/transport/' className='Link'>more about transport</Link>.
        </p>
        <p><img src="http://i.imgur.com/1Y4wQmC.jpg"></img></p>
        <p className='Mb(r1)'>
          If you are unsure about camping, we have six semi-private spaces (bunk beds) inside the Art Barn. If you would like to learn more about these or any of the other details, please contact mogden at gmail.com.
        </p>
        <Heading level={2} className='Fz(ms1) Mt(r2) Mb(rh)'>What To Bring</Heading>
        <ul className='List(d) Mstart(r1) Mb(r2)'>
          <li>Enough fresh water for yourself for the weekend (the barn is off the water grid, supply is limited)</li>
          <li>Outdoor friendly shoes</li>
          <li>Earplugs</li>
          <li>Tent or hammock to camp in <a href="https://www.pdx.edu/recreation/equipment-rental-center">(PSU also offers equipment rentals to the public!)</a></li>
          <li>Sleeping Bag</li>
          <li>Foam or inflatable camping pad to sleep on</li>
          <li>Toiletries including natural soap (e.g. Doctor Bronners)</li>
          <li>Towel(s)</li>
          <li>Instruments! Or other ways to make music. There are speakers/projector in the barn.</li>
          <li>LEDs and other things that glow at night</li>
          <li>Laptop (there is power and wifi but wifi is not very fast)</li>
          <li>Phone (there is spotty 4G signal)</li>
          <li>Associated Chargers for the above items</li>
          <li>Enough clothing for your stay, including clothing for 40-50 degrees at night</li>
          <li>Sunscreen, sunglasses and hat</li>
          <li>Baby wipes (for "hand showers")</li>
          <li>Solar shower bag (if you really need to shower)</li>
          <li>Insect repellent</li>
          <li>Board/Card Games</li>
          <li>Headphones</li>
          <li>Medications</li>
          <li>Snacks to Share</li>
          <li>A <Link to='/about/code-of-conduct/' className='Link'>Good Attitude</Link></li>
          <li>Anything else you need to survive the weekend!</li>
        </ul>
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
