import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About Us" description="About Circular Engineering Nova and the NovaEco DPI">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <div style={{ textAlign: 'center' }}>
          <h1>About NovaEco</h1>
          <p>Building the open-source Digital Public Infrastructure for the circular economy.</p>
          <p>Commercially supported by <strong>Circular Engineering Nova GmbH</strong>.</p>
          <p>🚧 <em>Detailed company information and team profiles coming soon.</em></p>
        </div>
      </div>
    </Layout>
  );
}