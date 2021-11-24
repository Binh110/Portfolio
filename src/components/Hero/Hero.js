import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My personal PortfolioWebsite
      </SectionTitle>
      <SectionText>
        lorem ipsum dolor sit
      </SectionText>
      <Button onClick={()=> window.location='http://google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;