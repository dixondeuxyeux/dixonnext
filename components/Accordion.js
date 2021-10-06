import * as React from 'react'
import { Accordion } from '@mui/material'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { Typography } from '@material-ui/core'
import useStyles from '../utils/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function SimpleAccordion() {
  const classes = useStyles()
  return (
    <div className={classes.justify2}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.lower5}>
            Information about Dixon / Deux Yeux Photographie
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3 className={classes.justify}>
              {' '}
              My Name is Martin Dixon and for over forty years I have been
              making images for corporate, editorial, and advertising clients.
              During my personal time, I managed to produce five books over
              twenty years and spanning thirty-two countries. <br />
              <br />I came of age in the 1980s. I learned photography by
              shooting with &apos;4x5&apos; inch sheets of film and black cloths
              over my head. We learned to meter light by eye, gauging the
              sun&apos;s intensity by instinct. We learned color theory by
              shooting Kodachrome64, the most unforgiving slide film ever made.
              And we flipping loved it.
              <br />
              <br />
              The &apos;Eighties&apos; were at once exciting and terrifying
              times. Grafitti artists were handcuffed and sometimes beaten to
              death. AIDS and HIV become the talk of the day. The Roxy, The
              Tunnel, and Studio 54 were in full swing. New York City nightlife
              resembled the cult film, &quot;The Warriors.&quot; Note to self,
              be careful if you &quot;go out to play.&quot;
              <br /> <br />
              After completing my undergradute degree at The Cooper Union in
              1988 and my graduate degree from The University of Michigan in
              1991, it was time to step into the light and make my voice heard.
              My study abroad experience in Paris gave me the travel bug -and
              I&apos;ve had this intense fever ever since. Traveling makes us
              look at things differently. What we think we know is often wrong,
              or simply not culturally relevant. Have you ever seen someone
              sweep the desert or mop a pool? I have. In the Gambia I watched a
              buxom woman lose her wig while diving in the pool. I was going to
              help her but I needed my more camera. Unfortunately, my
              disobedient son dove down and retrieved her hair before I could
              grabb my medium format camera. My wry sense of humor does not shy
              away from the sillier, or uglier sides of life. Nothing is
              off-limits, nothing too taboo to discuss and film. Art demands
              courage.
              <br /> <br />
              When I tell people I don&apos;t make pretty pictures, I am basicly
              saying that I don&apos;t believe photography was meant to be cute
              and light-hearted. Certainly I make beautiful images but they pack
              a punch, and sometimes those punches hurt the soul. You don&apos;t
              need to be Bruce Willis in the &apos;Sixth Sense&apos; to see dead
              people. I have lived in various parts of Africa for ten years. You
              see death. Sometimes you see it often. I have as much respect for
              Agence France Press and Magnum photographers as I do Demarchelier,
              Leibowitz, and all the top commercial artists. We don&apos;t get
              to pick where we were born, our parents and siblings, or our
              complexions and hair. We either learn to become comfortable in our
              own skins or continue to live a tortured existence.
              <br />
              <br />
              And so I am pleased to open my archives to you, one and all. My
              book outtakes and personal have been made available. See the world
              through my eyes. Step into my shoes and walk a mile with me. You
              will find that I have a very distinct and unique photographic
              vision. Do you see what I see? Every week I will add more images
              to the product pages of this ecommerce shop. (The image watermark
              comes off when you purchase a print. I have to keep you honest).
              And my hope is that you will find something you must have. Dixon /
              Deux Yeux was created because more often than not, when I am not
              on assignment, I tend to use a Leica rangefinder. And when I began
              shooting forty-one years ago, it was with an old Leica M3 with the
              35mm Summicron bug-eyed attachment over the viewfinder. Looking at
              me back then one would have thought that I had one eye that was
              organic and the other mechanical. And I think they were right.
            </h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography className={classes.lower5}>
            Some Information about Digital Prints
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3 className={classes.justify}>
              Today&apos;s digital prints offer fantastic longevity if properly
              stored and displayed. The first rule for anyone displaying prints
              is to ensure the glass you use is to use UV-Filtered glass from a
              reputable company. The sun&apos;s harsh UV rays can reduce and
              even destroy a beautiful print in a matter of months. Visit any
              gallery from the Modern in New York to the Tate Modern in London
              and you will see they display their classic B/W and Color prints
              in subdued light with adequate ventilation and UV protective
              glass.
              <br />
              <br />
              The second rule for any artist selling work is to create demand by
              being original and inventive. People don&apos;t want want everyone
              else has. Client demand the unique, the sublime, the risky. The
              photograph &apos;Death of a Day Worker&apos; is a very powerful
              and personal image because it happened right before my eyes. A
              young Ethiopian man, working in the rainy season, slipped from
              scaffolding three stories up and landed in a mix of wet mud,
              gravel, and cement run-off. I watched in horror as his friends and
              co-workers tried in vein to dig him out and resuscitate him. I am
              not ashamed of making this image. I even shared it with a
              photographer from the local press, something I never, ever do. I
              wanted the story told and the working conditions these men endure
              made known. But business concerns and censhorship laws forced my
              image to the back page. They ran an alternate image with the body
              being carried up the hill. The caption read something to the
              effect of local man carried to hospital by well-wishers. This
              memory will never leave me. My archives were designed to make some
              of these memories accessible.
              <br />
              <br />
              Some clients in the past have told me that the saturation of their
              prints faded over time. I assured them I was using InkPress&apos;s
              Metallic Satin paper - some of the best paper on the market. When
              I inquired where they were hanging the prints, it was in full
              display of open sunlight. They had made no provisions for
              protecting the images from direct UV. So please, protect your
              investments.
              <br />
            </h3>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography className={classes.lower5}>
            Some Information about Shipping
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3 className={classes.justify}>
              I strictly use Fed-Ex and DHL carriers because I add some
              insurance for the prints against damage in transit. The images are
              gently rolled and placed inside a carton tube with end-caps. Then
              the tube is placed inside another carton with suitable padding
              like popcorn, foam, or air bags to minimize movement. Every effort
              is made to guarantee a safe and timely delivery of your product.
              <br />
            </h3>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography className={classes.lower5}>
            Some Information about Print Sizes and Signed Editions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3 className={classes.justify}>
              As a small, independent studio, I have limited the print sizes to
              &apos;12 x 19&apos; on &apos;13 x 19&apos; paper. Some larger
              landscape photographs have been printed on photographic canvas.
              They measure roughly &apos;39 inches by 27 inches&apos;. As such,
              they are priced accordingly and treated with a light UV protective
              spray. I have added a contact form below for anyone interested to
              contact me about producing larger files or having the files
              emailed to a local printer. I will review these requests on an
              order by order basis. But as I don&apos;t want to saturate the
              market with copies of my work, please understand.
              <br />
              <br />I sign each edition print on the back and incrementally
              raise the price after every sale. You will receive a signed print
              out to accompany your purchase with your unique edition number.
            </h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
