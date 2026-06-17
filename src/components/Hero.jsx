function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-text">
        <div className="intro-line">
          <span className="cursor" />
          whoami
        </div>

        <h1>
          Jose Rivera
        </h1>

        <span className="role">
          <span className="bracket">&lt;</span>
          Software Engineer
          <span className="bracket"> /&gt;</span>
        </span>

        <p className="description">
          Computer Science graduate building iOS and web applications with
          SwiftUI, React, JavaScript, and Git. I like turning ideas into
          fast, clean, well-tested products.
        </p>

        <div className="hero-buttons">
          <a className="primary" href="#projects">View Projects</a>
          <a className="secondary" href="#contact">Contact Me</a>
        </div>
      </div>

      <div className="hero-panel">
        <div className="panel-bar">
          <div className="dot-group">
            <span className="circle" />
            <span className="circle" />
            <span className="circle" />
          </div>
          <span className="filename">profile.json</span>
        </div>
        <div className="panel-body">
<span className="ln">1</span>{'{\n'}
<span className="ln">2</span>{'  '}<span className="key">"name"</span>{': '}<span className="str">"Jose Rivera"</span>{',\n'}
<span className="ln">3</span>{'  '}<span className="key">"role"</span>{': '}<span className="str">"Software Engineer"</span>{',\n'}
<span className="ln">4</span>{'  '}<span className="key">"focus"</span>{': ['}{'\n'}
<span className="ln">5</span>{'    '}<span className="str">"iOS"</span>{', '}<span className="str">"Web"</span>{',\n'}
<span className="ln">6</span>{'    '}<span className="str">"SwiftUI"</span>{', '}<span className="str">"React"</span>{'\n'}
<span className="ln">7</span>{'  ],\n'}
<span className="ln">8</span>{'  '}<span className="key">"status"</span>{': '}<span className="str">"open to work"</span>{',\n'}
<span className="ln">9</span>{'  '}<span className="com">// recent grad, CS</span>{'\n'}
<span className="ln">10</span>{'}'}
        </div>
      </div>
    </section>
  );
}

export default Hero;
