import React from 'react';
import { AnimatePresence } from 'framer-motion';
import mixpanel from 'mixpanel-browser';

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);

export const onClientEntry = () => {
  mixpanel.init('b28f49a1bca24ea71d832e00dc86feb4', { debug: true });
};

export const onRouteUpdate = ({ location }) => {
  mixpanel.track('Page view', {
    pathname: location.pathname,
  });
};

export const shouldUpdateScroll = () => false;
