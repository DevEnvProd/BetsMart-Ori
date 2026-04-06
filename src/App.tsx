/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SelfAssessment from './pages/SelfAssessment';
import BudgetTools from './pages/BudgetTools';
import WarningSigns from './pages/WarningSigns';
import Education from './pages/Education';
import HelpDirectory from './pages/HelpDirectory';
import ForFamilies from './pages/ForFamilies';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/self-assessment" element={<SelfAssessment />} />
          <Route path="/budget-tools" element={<BudgetTools />} />
          <Route path="/warning-signs" element={<WarningSigns />} />
          <Route path="/education" element={<Education />} />
          <Route path="/help-directory" element={<HelpDirectory />} />
          <Route path="/for-families" element={<ForFamilies />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}
