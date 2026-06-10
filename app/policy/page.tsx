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

      <div className="eyebrow">Draft policy package</div>
      <h1>BMverse Ecosystem Policy Suite</h1>
      <p className="subtitle">A consolidated draft covering BMverse, ANTverse, and ETH-X, written from the current public and uploaded materials and structured for publication after legal review and completion of the marked placeholders.</p>

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
        <p>This draft is designed as a <strong style={{color:'#0066ff'}}>single legal framework with product-specific layers</strong>. BMverse appears to function as the umbrella platform, ETH-X is presented publicly as a blockchain infrastructure layer, and the explore interface presents ANTverse and related assets as collectible or marketplace-style digital items with prices, tiers, and mutation scores.<sup><a href="#cite-1">[1]</a></sup><sup><a href="#cite-2">[2]</a></sup></p>
        <p>The uploaded materials materially increase the policy burden because they repeatedly reference genetics, etymology, profiling, machine learning, personalized learning, blockchain-backed transparency, and mutation-based trait systems.<sup><a href="#cite-4">[4]</a></sup><sup><a href="#cite-5">[5]</a></sup> That means ordinary website terms are not enough: the operating documents need strong restrictions on sensitive data, automated decision-making, NFT licensing, protocol risk, sanctions compliance, and user-generated content.</p>
        <div className="callout">
          <div className="callout-title">Important</div>
          <p>This is a publication-ready draft, not a substitute for local counsel. The sections marked with bracketed placeholders such as <code>[insert legal entity]</code> or <code>[insert governing law]</code> should be completed and reviewed before use.</p>
        </div>
      </section>

      <section id="section-scope">
        <h2>Scope and assumptions</h2>
        <p>This draft assumes BMverse is an umbrella ecosystem spanning edutainment, metaverse-style experiences, wallet-linked assets, creator participation, and blockchain tooling. That assumption is grounded in the homepage, the explore page, the X profile, and the uploaded business materials.<sup><a href="#cite-1">[1]</a></sup><sup><a href="#cite-2">[2]</a></sup><sup><a href="#cite-3">[3]</a></sup><sup><a href="#cite-4">[4]</a></sup></p>
        <p>The draft also assumes ANTverse is not a completely separate company but rather a branded world, product line, or marketplace layer inside the BMverse ecosystem. The current public explore interface shows ANTverse beside BM Jewels and BM Galaxy within a common asset browsing surface, which supports one core platform policy with a dedicated digital-asset annex instead of three unrelated terms pages.<sup><a href="#cite-2">[2]</a></sup></p>
        <p>ETH-X is treated here as a protocol and participation layer, not merely a marketing label. The public site describes ETH-X using language about consensus, staking, smart contracts, governance, cross-chain functionality, and performance claims, so its policies need risk disclosures that go beyond standard web terms.<sup><a href="#cite-1">[1]</a></sup></p>

        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Layer</th><th>Publicly visible role</th><th>Main legal issues</th><th>Policy treatment in this draft</th></tr>
            </thead>
            <tbody>
              <tr><td>BMverse</td><td>Umbrella platform for edutainment, profiles, community, and product access</td><td>Terms of use, privacy, cookies, IP, moderation, disclaimers</td><td>Master policy applies by default</td></tr>
              <tr><td>ANTverse</td><td>Asset or collectible world presented in the shared explore interface</td><td>NFT sales, licenses, royalties, wallet risk, resale, user misconduct</td><td>Dedicated digital asset annex</td></tr>
              <tr><td>ETH-X</td><td>Blockchain or protocol layer with governance and staking-style features</td><td>Protocol risk, validator behavior, sanctions, governance, no-return guarantees</td><td>Dedicated protocol and participation annex</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section-structure">
        <h2>Policy architecture</h2>
        <p>The cleanest publishing model is a <strong style={{color:'#0066ff'}}>hub-and-annex structure</strong>. BMverse should publish one core legal center containing a master terms of use, privacy policy, cookie policy, community standards, and intellectual property policy, then link to ANTverse and ETH-X annexes where specialized rules apply.</p>
        <div className="col-grid">
          <div className="col-item"><h4>Core documents</h4><p>Terms of use, privacy policy, cookie policy, acceptable use, community and IP rules.</p></div>
          <div className="col-item"><h4>ANTverse annex</h4><p>Minting, marketplace transactions, royalties, licenses, wallet requirements, digital asset risk.</p></div>
          <div className="col-item"><h4>ETH-X annex</h4><p>Protocol participation, governance, validator obligations, network risk, no-investment-advice wording.</p></div>
        </div>
      </section>

      <section id="section-terms">
        <h2>Master terms of use</h2>
        <h3>Recommended publishing text</h3>
        <p><strong>1. Operator.</strong> These Terms of Use govern access to and use of the BMverse ecosystem... The operator should be identified as <code>[insert full legal entity name]</code>, with registered address, contact email, and support address inserted before publication.</p>
        <p><strong>2. Acceptance.</strong> By accessing or using any part of the ecosystem, the user agrees to these terms, the privacy policy, cookie policy, community standards, and any product-specific annexes.</p>
        <p><strong>3. Eligibility.</strong> Users must be at least <code>[insert age threshold]</code> and legally capable of entering binding agreements.</p>
        <p><strong>4. Accounts and wallets.</strong> Users are responsible for the security of their credentials, wallet keys, devices, backup phrases, and transaction approvals.</p>
        <p><strong>5. Acceptable use.</strong> Users may not misuse the services, infringe intellectual property, harass others, manipulate markets, deploy malicious code, violate sanctions, or exploit minors.</p>
        <p><strong>6. Beta features and experimental tools.</strong> Any preview, beta, demo, or experimental feature may be modified, suspended, or removed without notice.</p>
        <p><strong>7. Fees and taxes.</strong> Users are responsible for network fees, platform charges, creator royalties where applicable, and any taxes.</p>
        <p><strong>8. Third-party services.</strong> BMverse does not control third-party services and is not responsible for their terms, security, or availability.</p>
        <p><strong>9. Disclaimers.</strong> Services provided on an <code>as is</code> and <code>as available</code> basis. BMverse disclaims warranties relating to uptime, asset value, token appreciation, or staking yield.</p>
        <p><strong>10. Limitation of liability.</strong> Direct damages capped to the greater of amount paid or a modest fixed amount.</p>
        <p><strong>11. Suspension and termination.</strong> BMverse may suspend or terminate access for breach, fraud, sanctions concerns, or legal necessity.</p>
        <p><strong>12. Governing law and dispute resolution.</strong> Insert jurisdiction-specific clause after legal review.</p>
      </section>

      <section id="section-privacy">
        <h2>Privacy policy</h2>
        <p>The privacy policy should identify the controller and explain collection of account info, wallet addresses, device data, usage events, and blockchain-visible activity. The purpose section should distinguish service delivery, security, personalization, analytics, compliance, and product improvement.</p>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Data category</th><th>Examples</th><th>Purpose</th><th>Special notes</th></tr></thead>
            <tbody>
              <tr><td>Account and contact data</td><td>Name, username, email</td><td>Authentication, communications</td><td>Retention schedule stated</td></tr>
              <tr><td>Wallet and transaction data</td><td>Wallet address, on-chain activity</td><td>Asset delivery, fraud prevention</td><td>Explain public vs off-chain storage</td></tr>
              <tr><td>Usage and device data</td><td>IP address, browser type, cookies</td><td>Security, analytics</td><td>Cookie consent may apply</td></tr>
              <tr><td>Sensitive or high-risk data</td><td>Genetic, biometric, inferred traits</td><td>Only where explicitly authorized</td><td>Requires separate safeguards</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="section-sensitive">
        <h2>Sensitive data and AI policy</h2>
        <p>Recommended language: BMverse does not require users to submit genetic, biometric, or health data unless a clearly described feature specifically asks for it and the user has received necessary notices and consent prompts. BMverse does not sell sensitive personal data or use it for solely automated decisions that produce legal or similarly significant effects unless permitted by law.</p>
        <div className="callout">
          <div className="callout-title">Publication condition</div>
          <p>If BMverse is not actually processing genetic or biometric data today, the public policy should say so plainly. The current business materials describe these capabilities aspirationally, creating legal risk if the website implies live processing without operational readiness.</p>
        </div>
      </section>

      <section id="section-cookies">
        <h2>Cookie and analytics policy</h2>
        <p>The cookie policy should separate strictly necessary technologies from analytics, personalization, and advertising tools. BMverse should offer a preference center wherever law requires it and should avoid dropping non-essential cookies before consent in consent-based jurisdictions.</p>
      </section>

      <section id="section-antverse">
        <h2>ANTverse digital asset policy</h2>
        <p><strong>1. Scope.</strong> This policy applies to ANTverse items and any related collections made available by BMverse.</p>
        <p><strong>2. Wallet requirement.</strong> Users are solely responsible for private keys, gas fees, and irreversible blockchain transactions.</p>
        <p><strong>3. No promise of value.</strong> Digital assets are offered for utility, access, or collection purposes only — no guarantee of appreciation or liquidity.</p>
        <p><strong>4. License grant.</strong> Holder receives a limited license to display associated artwork while validly controlling the asset.</p>
        <p><strong>5. Prohibited uses.</strong> May not use assets in unlawful, hateful, misleading, or sanctions-evading contexts.</p>
        <p><strong>6. Royalties and resale.</strong> If royalties are intended, the policy should state the rate and enforcement mechanism.</p>
        <p><strong>7. Consumer notice.</strong> If the marketplace remains developmental, BMverse should state whether listings are live or simulated.</p>
      </section>

      <section id="section-ethx">
        <h2>ETH-X protocol policy</h2>
        <p><strong>1. Experimental protocol warning.</strong> ETH-X is an evolving environment. Access and participation occur at the user's own risk.</p>
        <p><strong>2. No investment advice.</strong> Nothing constitutes investment, securities, tax, or financial advice.</p>
        <p><strong>3. Staking and participation.</strong> Rewards are not guaranteed. Lock-up periods, slashing logic, and exit timing should be disclosed.</p>
        <p><strong>4. Governance.</strong> Governance participation is a community process, not corporate voting or ownership rights.</p>
        <p><strong>5. Sanctions and restricted use.</strong> Access prohibited for sanctioned persons, embargoed territories, and unlawful actors.</p>
      </section>

      <section id="section-community">
        <h2>Community standards</h2>
        <p>Prohibited conduct includes harassment, hate speech, doxxing, sexual exploitation, threats, impersonation, scams, spam, malware, IP infringement, and market manipulation. Enforcement may include warnings, content removal, suspension, bans, and referral to law enforcement.</p>
      </section>

      <section id="section-ip">
        <h2>Intellectual property policy</h2>
        <p>BMverse websites, code, designs, names, logos, and non-user-created assets remain BMverse property. Users retain ownership of content they lawfully create but grant BMverse a license to host, display, and distribute it for service operation. DMCA-style notice procedure should be provided.</p>
      </section>

      <section id="section-disclosures">
        <h2>Operational and risk disclosures</h2>
        <p>Risk page should cover software risk, cyber risk, irreversible blockchain transactions, smart contract bugs, bridge failures, governance attacks, regulatory change, and NFT illiquidity.</p>
        <div className="callout">
          <div className="callout-title">Recommended footer notice</div>
          <p>"Certain services described across BMverse, ANTverse, and ETH-X are experimental, unavailable in some jurisdictions, or subject to separate launch conditions. Digital assets and blockchain participation involve risk, and no statement on this site should be understood as a promise of value, yield, or uninterrupted availability."</p>
        </div>
      </section>

      <section id="section-checklist">
        <h2>Pre-publication checklist</h2>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Field to confirm</th><th>Why it matters</th><th>Current status</th></tr></thead>
            <tbody>
              <tr><td>Legal entity name and address</td><td>Required for enforceability</td><td>Placeholder</td></tr>
              <tr><td>Official contact emails</td><td>Privacy requests, abuse reports</td><td>Placeholder</td></tr>
              <tr><td>Jurisdictions served or blocked</td><td>Consumer law, sanctions</td><td>Placeholder</td></tr>
              <tr><td>Whether genetic/biometric processing is live</td><td>Changes sensitive-data obligations</td><td>Needs explicit yes/no</td></tr>
              <tr><td>Marketplace status</td><td>Live sales vs demo</td><td>Needs confirmation</td></tr>
              <tr><td>Royalty structure and license scope</td><td>Prevents disputes</td><td>Placeholder</td></tr>
              <tr><td>Dispute resolution model</td><td>Arbitration clauses vary by jurisdiction</td><td>Placeholder</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer>
        <div className="sources">
          <h2>Sources</h2>
          <ol style={{paddingLeft:'1.2rem', fontSize:'0.85rem', color:'#a0a0a0'}}>
            <li><a href="https://bmverse.us" target="_blank" rel="noopener">https://bmverse.us</a> - BMverse homepage</li>
            <li><a href="https://bmverse.us/explore/" target="_blank" rel="noopener">https://bmverse.us/explore/</a> - Explore page with ANTverse, tiers, mutation scores</li>
            <li><a href="https://x.com/bmverseio" target="_blank" rel="noopener">https://x.com/bmverseio</a> - BMverse X profile</li>
            <li>User-uploaded document - Beautifull_Minds_bp_05-20-2025.pdf</li>
            <li>User-uploaded document - Beautifull Minds Traits Algorithm Diagram (2) - Copy.pdf</li>
          </ol>
        </div>
        <div style={{textAlign:'center', fontSize:'0.76rem', color:'#a0a0a0', marginTop:'1.75rem'}}>
          Generated by Trae Work · 2026-06-10
        </div>
      </footer>
    </div>
  );
}
