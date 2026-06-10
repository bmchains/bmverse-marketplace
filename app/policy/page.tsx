export default function PolicyPage() {
  return (
    <div className="policy-container" style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '2.5rem 1rem',
      backgroundColor: '#1e1e1e',
      color: '#f0f0f0',
      fontFamily: "'BricolageGrotesque', sans-serif",
      lineHeight: 1.75
    }}>
      <style>{`
        @font-face {
          font-family: 'BricolageGrotesque';
          src: url('/fonts/BricolageGrotesque-Regular.ttf') format('truetype');
          font-weight: 400;
        }
        @font-face {
          font-family: 'BricolageGrotesque';
          src: url('/fonts/BricolageGrotesque-Bold.ttf') format('truetype');
          font-weight: 700;
        }
        @font-face {
          font-family: 'JetBrainsMono';
          src: url('/fonts/JetBrainsMono-Regular.ttf') format('truetype');
          font-weight: 400;
        }
        
        .policy-container a {
          color: #0066ff;
          text-decoration: none;
          border-bottom: 1px solid #0066ff;
        }
        .policy-container a:hover { opacity: 0.85; }
        .policy-container h1 {
          font-size: 2.25rem;
          font-weight: 700;
          margin: 0 0 0.9rem;
          padding-bottom: 0.55rem;
          border-bottom: 3px solid #0066ff;
        }
        .policy-container h2 {
          font-size: 1.52rem;
          font-weight: 600;
          margin: 2.5rem 0 1rem;
          padding-bottom: 0.4rem;
          border-bottom: 2px solid #0066ff;
        }
        .policy-container h3 {
          font-size: 1.15rem;
          font-weight: 600;
          margin: 1.75rem 0 0.75rem;
        }
        .policy-container .eyebrow {
          color: #a0a0a0;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.82rem;
          margin-bottom: 0.65rem;
        }
        .policy-container .subtitle {
          font-size: 1rem;
          color: #a0a0a0;
        }
        .policy-container nav.toc {
          background: #2a2a2a;
          border: 1px solid #3d3d3d;
          border-radius: 4px;
          padding: 1.25rem 1.5rem;
          margin-bottom: 2.5rem;
        }
        .policy-container nav.toc h2 {
          font-size: 0.85rem;
          text-transform: uppercase;
          margin: 0 0 0.75rem;
          padding-bottom: 0;
          border-bottom: none;
          color: #a0a0a0;
        }
        .policy-container nav.toc ol {
          margin: 0;
          padding-left: 1.2rem;
        }
        .policy-container nav.toc li {
          margin-bottom: 0.4rem;
          font-size: 0.95rem;
        }
        .policy-container .callout {
          border: 1px solid #3d3d3d;
          background: #2a2a2a;
          padding: 1.15rem 1.35rem;
          margin: 1.5rem 0;
          border-radius: 4px;
        }
        .policy-container .callout-title {
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          color: #0066ff;
          margin-bottom: 0.45rem;
        }
        .policy-container .col-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1rem;
          margin: 1.5rem 0;
        }
        .policy-container .col-item {
          padding: 1rem 1.15rem;
          background: #2a2a2a;
          border: 1px solid #3d3d3d;
          border-radius: 4px;
        }
        .policy-container .col-item h4 {
          margin: 0 0 0.45rem;
          font-size: 0.96rem;
        }
        .policy-container .col-item p {
          margin: 0;
          color: #a0a0a0;
          font-size: 0.92rem;
        }
        .policy-container .table-wrap {
          width: 100%;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        .policy-container table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.92rem;
        }
        .policy-container thead th {
          text-align: left;
          padding: 0.65rem 0.8rem;
          background: #1a3a5c;
          border: 1px solid #3d3d3d;
        }
        .policy-container td {
          padding: 0.65rem 0.8rem;
          border: 1px solid #3d3d3d;
          vertical-align: top;
        }
        .policy-container tbody tr:nth-child(even) { background: #2a2a2a; }
        .policy-container code {
          font-family: 'JetBrainsMono', monospace;
          font-size: 0.85em;
          background: #2a2a2a;
          padding: 0.15em 0.35em;
          border-radius: 3px;
          border: 1px solid #3d3d3d;
        }
        .policy-container footer {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #3d3d3d;
        }
        @media (max-width: 760px) {
          .policy-container { padding: 1.5rem 0.75rem; }
          .policy-container h1 { font-size: 1.7rem; }
          .policy-container h2 { font-size: 1.28rem; }
        }
      `}</style>

      <div className="eyebrow">Policy package</div>
      <h1>BMverse Ecosystem Policy Suite</h1>
      <p className="subtitle">A consolidated policy covering BMverse, ANTverse, and ETH-X, published by Beautifull Minds Foundation.</p>

      <nav className="toc">
        <h2>Table of Contents</h2>
        <ol>
          <li><a href="#section-summary">Executive summary</a></li>
          <li><a href="#section-scope">Scope and assumptions</a></li>
          <li><a href="#section-structure">Policy architecture</a></li>
          <li><a href="#section-terms">Master terms of use</a></li>
          <li><a href="#section-privacy">Privacy policy</a></li>
          <li><a href="#section-sensitive">Sensitive data and AI policy</a></li>
          <li><a href="#section-cookies">Cookie and analytics policy</a></li>
          <li><a href="#section-antverse">ANTverse digital asset policy</a></li>
          <li><a href="#section-ethx">ETH-X protocol policy</a></li>
          <li><a href="#section-community">Community standards</a></li>
          <li><a href="#section-ip">Intellectual property policy</a></li>
          <li><a href="#section-disclosures">Operational and risk disclosures</a></li>
          <li><a href="#section-checklist">Pre-publication checklist</a></li>
        </ol>
      </nav>

      <section id="section-summary">
        <h2>Executive summary</h2>
        <p>This document is designed as a <strong style={{color:'#0066ff'}}>single legal framework with product-specific layers</strong>. BMverse functions as the umbrella platform, ETH-X is presented publicly as a blockchain infrastructure layer, and the explore interface presents ANTverse and related assets as collectible or marketplace-style digital items with prices, tiers, and mutation scores.<sup><a href="#cite-1">[1]</a></sup><sup><a href="#cite-2">[2]</a></sup></p>
        <p>The policy includes strong restrictions on sensitive data, automated decision-making, NFT licensing, protocol risk, sanctions compliance, and user-generated content.</p>
        <div className="callout">
          <div className="callout-title">Important</div>
          <p>This is a publication-ready document, not a substitute for legal counsel. It is governed by the laws of the State of Delaware, United States.</p>
        </div>
      </section>

      <section id="section-scope">
        <h2>Scope and assumptions</h2>
        <p>This policy applies to the BMverse ecosystem operated by <strong>Beautifull Minds Foundation</strong>, spanning edutainment, metaverse-style experiences, wallet-linked assets, creator participation, and blockchain tooling.</p>
        <p>ANTverse is a branded product line inside the BMverse ecosystem. ETH-X is a protocol and participation layer with consensus, staking, smart contracts, governance, and cross-chain functionality.</p>

        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Layer</th><th>Publicly visible role</th><th>Main legal issues</th><th>Policy treatment in this draft</th></tr>
            </thead>
            <tbody>
              <tr><td>BMverse</td><td>Umbrella platform for edutainment, profiles, community</td><td>Terms of use, privacy, cookies, IP, moderation</td><td>Master policy applies by default</td></tr>
              <tr><td>ANTverse</td><td>Asset or collectible world</td><td>NFT sales, licenses, royalties, wallet risk</td><td>Dedicated digital asset annex</td></tr>
              <tr><td>ETH-X</td><td>Blockchain protocol with governance and staking</td><td>Protocol risk, validator behavior, sanctions</td><td>Dedicated protocol and participation annex</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section-structure">
        <h2>Policy architecture</h2>
        <p>The policy uses a <strong style={{color:'#0066ff'}}>hub-and-annex structure</strong>. This core document contains master terms, privacy, cookies, community standards, and IP rules, with separate annexes for ANTverse and ETH-X.</p>
        <div className="col-grid">
          <div className="col-item"><h4>Core documents</h4><p>Terms of use, privacy policy, cookie policy, acceptable use, community and IP rules.</p></div>
          <div className="col-item"><h4>ANTverse annex</h4><p>Minting, marketplace transactions, royalties, licenses, wallet requirements, digital asset risk.</p></div>
          <div className="col-item"><h4>ETH-X annex</h4><p>Protocol participation, governance, validator obligations, network risk, no-investment-advice wording.</p></div>
        </div>
      </section>

      <section id="section-terms">
        <h2>Master terms of use</h2>
        <h3>1. Operator</h3>
        <p>These Terms of Use govern access to and use of the BMverse ecosystem, including BMverse websites, applications, profiles, creator tools, community features, digital experiences, and associated services. The operator is <strong>Beautifull Minds Foundation</strong>, with contact email <strong>info@bmverse.us</strong>.</p>
        
        <h3>2. Acceptance</h3>
        <p>By accessing or using any part of the ecosystem, you agree to these terms, the privacy policy, cookie policy, community standards, and any product-specific annexes.</p>
        
        <h3>3. Eligibility</h3>
        <p>Our services are intended for individuals who are at least 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take reasonable steps to delete such information.</p>
        
        <h3>4. Accounts and wallets</h3>
        <p>You may need to create an account or connect a wallet. You are responsible for the security of your credentials, wallet keys, devices, backup phrases, and transaction approvals. Beautifull Minds Foundation does not control public blockchains, third-party wallet software, or irreversible on-chain transfers.</p>
        
        <h3>5. Acceptable use</h3>
        <p>You may not misuse the services, infringe intellectual property, harass others, manipulate markets, deploy malicious code, violate sanctions, or exploit minors.</p>
        
        <h3>6. Beta features</h3>
        <p>Any preview, beta, or experimental feature may be modified, suspended, or removed without notice.</p>
        
        <h3>7. Fees and taxes</h3>
        <p>You are responsible for network fees, platform charges, creator royalties, and any applicable taxes.</p>
        
        <h3>8. Third-party services</h3>
        <p>We do not control third-party services and are not responsible for their terms, security, or availability.</p>
        
        <h3>9. Disclaimers</h3>
        <p>Services are provided on an <code>as is</code> and <code>as available</code> basis. We disclaim warranties relating to uptime, asset value, token appreciation, or staking yield.</p>
        
        <h3>10. Limitation of liability</h3>
        <p>To the fullest extent permitted by law, direct damages are capped to the greater of amount paid by you in the prior 12 months or $100.</p>
        
        <h3>11. Suspension and termination</h3>
        <p>We may suspend or terminate access for breach, fraud, sanctions concerns, or legal necessity.</p>
        
        <h3>12. Governing law and dispute resolution</h3>
        <p>This Policy shall be governed by and construed in accordance with the laws of the State of Delaware, United States of America, without regard to its conflict of law principles. Any disputes arising out of or relating to this Policy shall be subject to the exclusive jurisdiction of the state and federal courts located in Delaware, United States.</p>
      </section>

      <section id="section-privacy">
        <h2>Privacy policy</h2>
        <p>Beautifull Minds Foundation is the data controller. We collect account information, wallet addresses, device data, usage events, and blockchain-visible activity for service delivery, security, analytics, compliance, and product improvement.</p>
        
        <div className="table-wrap">
          <table>
            <thead><tr><th>Data category</th><th>Examples</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td>Account and contact data</td><td>Name, username, email</td><td>Authentication, communications</td></tr>
              <tr><td>Wallet and transaction data</td><td>Wallet address, on-chain activity</td><td>Asset delivery, fraud prevention</td></tr>
              <tr><td>Usage and device data</td><td>IP address, browser type, cookies</td><td>Security, analytics</td></tr>
              <tr><td>User content</td><td>Uploads, profile text, reports</td><td>Service operation, moderation</td></tr>
            </tbody>
          </table>
        </div>
        
        <h3>Your rights</h3>
        <p>You may request access, correction, deletion, or portability of your personal data where applicable. To exercise your rights, contact us at <strong>info@bmverse.us</strong>.</p>
        
        <h3>Contact Information</h3>
        <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at: <strong>Email: info@bmverse.us</strong></p>
      </section>

      <section id="section-sensitive">
        <h2>Sensitive data and AI policy</h2>
        <p><strong>Beautifull Minds Foundation does not intentionally collect or process sensitive personal information</strong>, including genetic data, biometric data, health information, racial or ethnic origin, religious beliefs, political opinions, or other special categories of personal data, except where required by law or with the individual's explicit consent. If sensitive personal information is provided voluntarily, it will be handled in accordance with applicable privacy laws and appropriate security measures.</p>
        
        <p><strong>Genetic and Biometric Data:</strong> Beautifull Minds Foundation does not collect, process, or store genetic data or biometric identifiers for the purpose of uniquely identifying individuals.</p>
        
        <p>We do not use sensitive data to make solely automated decisions that produce legal or similarly significant effects. Any profiling or AI-assisted features are subject to human review and appropriate safeguards.</p>
        
        <div className="callout">
          <div className="callout-title">Important clarification</div>
          <p>Beautifull Minds Foundation does not currently process genetic, biometric, or health data. Any future features that would involve such data will be accompanied by explicit notice, consent flows, and additional safeguards as required by law.</p>
        </div>
      </section>

      <section id="section-cookies">
        <h2>Cookie and analytics policy</h2>
        <p>We use strictly necessary cookies for authentication and security. For analytics and personalization, we obtain consent where required by law. You can manage cookie preferences through your browser settings or our preference center.</p>
        <p>Blockchain and wallet interactions may generate public on-chain records even if you reject cookies.</p>
      </section>

      <section id="section-antverse">
        <h2>ANTverse digital asset policy</h2>
        <p><strong>1. Scope.</strong> This policy applies to ANTverse items and any related collections made available by Beautifull Minds Foundation.</p>
        <p><strong>2. Wallet requirement.</strong> You are solely responsible for private keys, gas fees, and irreversible blockchain transactions.</p>
        <p><strong>3. No promise of value.</strong> Digital assets are offered for utility, access, or collection purposes only — no guarantee of appreciation or liquidity.</p>
        <p><strong>4. License grant.</strong> Upon lawful acquisition, you receive a limited, non-exclusive license to display associated artwork while you validly control the asset.</p>
        <p><strong>5. Prohibited uses.</strong> You may not use assets in unlawful, hateful, misleading, or sanctions-evading contexts.</p>
        <p><strong>6. Royalties and resale.</strong> If royalties apply, the rate will be disclosed at the time of minting or purchase. Enforcement may depend on third-party marketplace cooperation.</p>
      </section>

      <section id="section-ethx">
        <h2>ETH-X protocol policy</h2>
        <p><strong>1. Experimental protocol warning.</strong> ETH-X is an evolving environment. Access and participation occur at your own risk.</p>
        <p><strong>2. No investment advice.</strong> Nothing in ETH-X materials constitutes investment, securities, tax, or financial advice.</p>
        <p><strong>3. Staking and participation.</strong> Rewards are not guaranteed. Lock-up periods, slashing logic, and exit timing will be disclosed in the protocol documentation.</p>
        <p><strong>4. Governance.</strong> Governance participation is a community process, not corporate voting or ownership rights.</p>
        <p><strong>5. Sanctions and restricted use.</strong> Access is prohibited for sanctioned persons, embargoed territories, and unlawful actors.</p>
      </section>

      <section id="section-community">
        <h2>Community standards</h2>
        <p>Prohibited conduct includes harassment, hate speech, doxxing, sexual exploitation, threats, impersonation, scams, spam, malware, IP infringement, and market manipulation. Enforcement may include warnings, content removal, suspension, bans, and referral to law enforcement.</p>
      </section>

      <section id="section-ip">
        <h2>Intellectual property policy</h2>
        <p>BMverse websites, code, designs, names, logos, and non-user-created assets remain the property of Beautifull Minds Foundation or its licensors. Users retain ownership of content they lawfully create but grant the Foundation a worldwide, non-exclusive, royalty-free license to host, display, and distribute that content for service operation.</p>
        <p>For copyright infringement claims, please contact <strong>info@bmverse.us</strong> with a DMCA-style notice.</p>
      </section>

      <section id="section-disclosures">
        <h2>Operational and risk disclosures</h2>
        <p>Risks include software bugs, cyber attacks, irreversible blockchain transactions, smart contract vulnerabilities, bridge failures, governance attacks, regulatory changes, and NFT illiquidity.</p>
        <div className="callout">
          <div className="callout-title">Risk warning</div>
          <p>Certain services described across BMverse, ANTverse, and ETH-X are experimental, unavailable in some jurisdictions, or subject to separate launch conditions. Digital assets and blockchain participation involve risk, and no statement on this site should be understood as a promise of value, yield, or uninterrupted availability.</p>
        </div>
      </section>

      <section id="section-checklist">
        <h2>Policy information</h2>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Item</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>Legal entity</td><td>Beautifull Minds Foundation</td></tr>
              <tr><td>Contact email</td><td>info@bmverse.us</td></tr>
              <tr><td>Governing law</td><td>Delaware, United States</td></tr>
              <tr><td>Age requirement</td><td>13+</td></tr>
              <tr><td>Genetic/biometric processing</td><td>Not collected or processed</td></tr>
              <tr><td>Marketplace status</td><td>Refer to explore page for current live/demo status</td></tr>
            </tbody>
          </table>
        </div>
        <p>This policy is effective as of the date of publication. Updates will be posted on this page.</p>
      </section>

      <footer>
        <div className="sources">
          <h2>Sources</h2>
          <ol style={{paddingLeft:'1.2rem', fontSize:'0.85rem', color:'#a0a0a0'}}>
            <li><a href="https://bmverse.us" target="_blank" rel="noopener">https://bmverse.us</a> - BMverse homepage</li>
            <li><a href="https://bmverse.us/explore/" target="_blank" rel="noopener">https://bmverse.us/explore/</a> - Explore page</li>
            <li><a href="https://x.com/bmverseio" target="_blank" rel="noopener">https://x.com/bmverseio</a> - BMverse X profile</li>
          </ol>
        </div>
        <div style={{textAlign:'center', fontSize:'0.76rem', color:'#a0a0a0', marginTop:'1.75rem'}}>
          Beautifull Minds Foundation · Policy last updated: 2026-06-10
        </div>
      </footer>
    </div>
  );
}
