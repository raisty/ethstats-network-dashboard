import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';

import App from 'containers/App';

import HistoricalBlock from 'routes/pages/HistoricalBlock';
import NetworkStatistics from 'routes/pages/NetworkStatistics';
import DemoCallGraphs from 'routes/pages/DemoCallGraphs';
import PrivacyPolicy from 'routes/pages/PrivacyPolicy';

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute name="Network Statistics" component={NetworkStatistics} />
      <Route path="demo-call-graphs" component={DemoCallGraphs} />
      <Route path="privacy-policy" component={PrivacyPolicy} />
      <Route path="history/block/:blockNr" component={({ params }) => <HistoricalBlock blockNr={params.blockNr}/>} />
      <Route path="*" name="404" component={() => {
        browserHistory.replace('/');
        return null;
      }} />
    </Route>
  );
};
