import React from 'react';
import Layout from '../../../layout/layout';
import { Typography, Button, Grid, Card, CardContent } from '@mui/material';

import './testing.scss';

function Testing() {
  return (
		<Layout title="Software Testing | nuclecode - Reliable QA and Test Automation." description="Ensure the quality and reliability of your software with nuclecode&apos;s comprehensive software testing services, including automation, performance, and security testing.">
      <div className="testing-solution-page-container page-top-space">
        <div className="container">
          
          <Typography variant="h1">Software Testing Services</Typography>
          <page-section>
          <Typography variant="body1" className="intro-text">
            Quality is paramount in everything we do, which is why we offer comprehensive software
            testing services to ensure that your website performs flawlessly in every scenario. Our
            team employs rigorous testing methodologies to identify and address any issues before they
            impact your users, delivering a polished product that exceeds expectations.
          </Typography>
          </page-section>

          <page-section className="book-a-call-button-container">
						<a href="/schedule-a-call">
							<Button className="book-a-call-button">Book a call</Button>
						</a>
					</page-section>

          <page-section className="testing-services">
            <Typography variant="h2">Our Testing Solutions</Typography>
            <Grid container spacing={4} className="service-list">
              <Grid item xs={12} md={6} lg={3}>
                <Card className="service-item">
                  <CardContent>
                    <Typography variant="h5">Automated Testing</Typography>
                    <Typography variant="body2">
                      Efficiently identify bugs with industry-standard frameworks like Selenium,
                      Cypress, and more.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Card className="service-item">
                  <CardContent>
                    <Typography variant="h5">Behavior-Driven Development (BDD)</Typography>
                    <Typography variant="body2">
                      Facilitate collaboration between stakeholders using Gherkin syntax and tools
                      like Cucumber.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Card className="service-item">
                  <CardContent>
                    <Typography variant="h5">Visual Regression Testing</Typography>
                    <Typography variant="body2">
                      Ensure visual consistency across your application with tools like Percy and
                      BackstopJS.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Card className="service-item">
                  <CardContent>
                    <Typography variant="h5">Manual Testing</Typography>
                    <Typography variant="body2">
                      Thorough, human-driven testing to catch usability issues and complex bugs.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </page-section>

          <page-section className="pricing-plans">
            <Typography variant="h2">Choose Your Plan</Typography>
            <Grid container spacing={4} className="plans">
              <Grid item xs={12} md={4} lg={4}>
                <Card className="plan basic">
                  <CardContent>
                    <Typography variant="h5">Basic</Typography>
                    <Typography variant="body2">Essential testing for small projects</Typography>
                    <Typography variant="h6" className="price">£500/month</Typography>
                    <ul>
                      <li>Manual Testing</li>
                      <li>Basic Automated Tests</li>
                      <li>Basic Performance Testing</li>
                    </ul>

                    <page-section>
                    <a href="/schedule-a-call">
                    <Button variant="contained" className="select-plan">Select Plan</Button>
                    </a>
                    </page-section>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card className="plan standard">
                  <CardContent>
                    <Typography variant="h5">Standard</Typography>
                    <Typography variant="body2">Comprehensive testing for medium-sized projects</Typography>
                    <Typography variant="h6" className="price">£1200/month</Typography>
                    <ul>
                      <li>Automated Testing</li>
                      <li>BDD Implementation</li>
                      <li>Basic Visual Regression Testing</li>
                    </ul>

                    <page-section>
                    <a href="/schedule-a-call">
                    <Button variant="contained" className="select-plan">Select Plan</Button>
                    </a>
                    </page-section>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card className="plan premium">
                  <CardContent>
                    <Typography variant="h5">Premium</Typography>
                    <Typography variant="body2">Advanced testing for large and complex projects</Typography>
                    <Typography variant="h6" className="price">£2500/month</Typography>
                    <ul>
                      <li>All Automated and Manual Testing</li>
                      <li>Advanced Visual Regression Testing</li>
                      <li>Performance & Security Testing</li>
                    </ul>

                    <page-section>
                    <a href="/schedule-a-call">
                    <Button variant="contained" className="select-plan">Select Plan</Button>
                    </a>
                    </page-section>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </page-section>

          <page-section className="cta">
            <Typography variant="h2">Ready to Enhance Your Product?</Typography>
            <Typography variant="body1">Book a consultation with our experts today and get started on improving your software’s quality.</Typography>
          </page-section>

          <page-section className="book-a-call-button-container">
						<a href="/schedule-a-call">
							<Button className="book-a-call-button">Book a call</Button>
						</a>
					</page-section>

        </div>
      </div>
    </Layout>
  );
}

export default Testing;
