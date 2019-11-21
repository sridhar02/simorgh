import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import MostReadContainer from './Canonical';
import { RequestContextProvider } from '#contexts/RequestContext';
import { ServiceContextProvider } from '#contexts/ServiceContext';

const staticMostReadURL = service => `/data/${service}/mostRead/index.json`;

const renderMostReadContainer = (service, isAmp) => (
  <RequestContextProvider
    bbcOrigin={`/${service}/articles/c0000000000o`}
    id="c0000000000o"
    isAmp={isAmp}
    pageType="article"
    service={service}
    statusCode={200}
    pathname={`/${service}`}
    variant={null}
  >
    <ServiceContextProvider service={service} variant={null}>
      <MostReadContainer endpoint={staticMostReadURL(service)} />;
    </ServiceContextProvider>
  </RequestContextProvider>
);

const stories = storiesOf('Containers|MostRead', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .addParameters({
    chromatic: { disable: true },
  });

stories.add('Canonical Most Read', ({ service }) => {
  console.log(service);
  return renderMostReadContainer(service, false);
});
