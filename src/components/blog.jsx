import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>August 16, 2020 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="https://docs.google.com/document/d/1Yu6KdUHvDdNgWPnRsm9M5tRm1FqHxRZJD_A05cW7DFY/view">Setting up my first website</a></h3>
							<p>It is rightly said that it’s “Better late than never”.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>August 24, 2020 </small> | <small> The Driving Lesson </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="https://docs.google.com/document/d/1_3F6p45s_UyvD-wRTvVAWFuW2LNWE7iohRT8nyijEAQ/view">The Driving Lesson</a></h3>
							<p>"Aditi, keep it slow when there is a turn on the left or right."</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>September 7, 2020 </small> | <small> Rich don't work for money</small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="https://docs.google.com/document/d/1ws2Cuu6llfCXvniY7SiKiycz-Y_FPWfOmBNDe64__6o/view">Notes from Rich Dad Poor Dad</a></h3>
							<p>"Money is one form of power. But what is more powerful is financial education. ”.</p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 animate-box">
					<p><a href="blog.html" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div>
			</div>
			</section>
      </div>
    )
  }
}
