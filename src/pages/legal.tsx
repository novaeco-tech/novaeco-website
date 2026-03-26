import React from 'react';
import Layout from '@theme/Layout';

export default function Legal() {
  return (
    <Layout title="Legal & Imprint" description="Legal Disclaimers, Imprint, and Terms for NovaEco">
      <div className="container margin-vert--xl">
        <h1>Legal Notice & Imprint (Impressum)</h1>
        <div className="alert alert--info" role="alert">
          <strong>NovaEco</strong> is an open-source Digital Public Infrastructure (DPI) for the circular economy, commercially supported by <strong>Circular Engineering Nova GmbH</strong>.
        </div>
        <br />
        
        <h3>Information according to § 5 TMG</h3>
        <p>
          <strong>Circular Engineering Nova GmbH</strong><br />
          Munich, Bavaria, Germany<br />
          <em>(Full address and commercial registration details pending final publication)</em>
        </p>

        <h3>Contact</h3>
        <p>
          Email: <a href="mailto:contact@novaeco.tech">contact@novaeco.tech</a><br />
          Website: <a href="https://circular.engineering" target="_blank" rel="noopener noreferrer">circular.engineering</a>
        </p>

        <h3>Open Source Licensing</h3>
        <p>
          The NovaEco core infrastructure, horizontal enablers, and vertical sectors are released under the <strong>Apache License 2.0</strong>. Please refer to the <code>LICENSE</code> file in our respective GitHub repositories for detailed terms.
        </p>

        <h3>Data Privacy & Terms of Service</h3>
        <p>🚧 <em>Comprehensive Privacy Policy (GDPR) and Terms of Service documentation are currently being drafted by our legal team.</em></p>
      </div>
    </Layout>
  );
}