<!DOCTYPE html>
<html lang="en">

<?php include 'head.php'; ?>

<body>
	<!--KF KODE WRAPPER WRAP START-->
    <div class="kode_wrapper">
    <!-- register Modal -->
    <div class="modal fade" id="reg-box" tabindex="-1" role="dialog">
        <div class="modal-dialog">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div class="modal-content">
                <!--SIGNIN AS USER START-->
                <div class="user-box">
                    <h2>Sign up as a User</h2>
                    <!--FORM FIELD START-->
                    <div class="form">
                        <div class="input-container">
                            <input type="text" placeholder="Name">
                            <i class="fa fa-user"></i>
                        </div>
                        <div class="input-container">
                            <input type="text" placeholder="E-mail">
                            <i class="fa fa-envelope-o"></i>
                        </div>
                        <div class="input-container">
                            <input type="password" placeholder="Password">
                            <i class="fa fa-unlock"></i>
                        </div>
                        <div class="input-container">
                            <label>
                                <span class="radio">
                                    <input type="checkbox" name="foo" value="1" checked>
                                    <span class="radio-value" aria-hidden="true"></span>
                                </span>
                                <span>Remember me</span>
                            </label>
                        </div>
                        <div class="input-container">
                            <button class="btn-style">Sign Up</button>
                        </div>
                    </div>
                    <!--FORM FIELD END-->
                    <!--OPTION START-->
                    <div class="option">
                        <h5>Or Using</h5>
                    </div>
                    <!--OPTION END-->
                    <!--OPTION START-->
                    <div class="social-login">
                        <a href="#" class="google"><i class="fa fa-google-plus"></i>Google Account</a>
                        <a href="#" class="facebook"><i class="fa fa-facebook"></i>Facebook Account</a>
                    </div>
                    <!--OPTION END-->
                </div>
                <!--SIGNIN AS USER END-->
                <div class="user-box-footer">
                    Already have an account? <a href="#">Sign In</a>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
    <!-- register Modal end-->
    
    <!-- SIGNIN MODEL START -->
    <div class="modal fade" id="signin-box" tabindex="-1" role="dialog" >
        <div class="modal-dialog">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div class="modal-content">
                <div class="user-box">
                    <h2>Sign In</h2>
                    <!--FORM FIELD START-->
                    <div class="form">
                        <div class="input-container">
                            <input type="text" placeholder="E-mail">
                            <i class="fa fa-envelope-o"></i>
                        </div>
                        <div class="input-container">
                            <input type="password" placeholder="Password">
                            <i class="fa fa-unlock"></i>
                        </div>
                        <div class="input-container">
                            <label>
                                <span class="radio">
                                    <input type="checkbox" name="foo" value="1" checked>
                                    <span class="radio-value" aria-hidden="true"></span>
                                </span>
                                <span>Remember me</span>
                            </label>
                        </div>
                        <div class="input-container">
                            <button class="btn-style">Sign In</button>
                        </div>
                    </div>
                    <!--FORM FIELD END-->
                    <!--OPTION START-->
                    <div class="option">
                        <h5>Or Using</h5>
                    </div>
                    <!--OPTION END-->
                    <!--OPTION START-->
                    <div class="social-login">
                        <a href="#" class="google"><i class="fa fa-google-plus"></i>Google Account</a>
                        <a href="#" class="facebook"><i class="fa fa-facebook"></i>Facebook Account</a>
                    </div>
                    <!--OPTION END-->
                
                </div>
                <div class="user-box-footer">
                    <p>Don't have an account?<br><a href="#">Sign up as a User</a></p>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
    <!-- SIGNIN MODEL END -->
    
   
        <!--HEADER START-->
      <?php include 'header.php'; ?>
        <!--HEADER END-->
        <!--Banner Wrap Start-->
        <div class="kf_inr_banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                    	<!--KF INR BANNER DES Wrap Start-->
                        <div class="kf_inr_ban_des">
                        	<div class="inr_banner_heading">
								<h3>our blog</h3>
                        	</div>
                           
                            <div class="kf_inr_breadcrumb">
								<ul>
									<li><a href="#">Home</a></li>
									<li><a href="#">our-blog</a></li>
								</ul>
							</div>
                        </div>
                        <!--KF INR BANNER DES Wrap End-->
                    </div>
                </div>
            </div>
        </div>

        <!--Banner Wrap End-->

    	<!--Content Wrap Start-->
    	<div class="inner-content-holder">
			<div class="container">
				<div class="row">
					<!--EDUCATION BLOG PAGE START-->
					<div class="col-md-8">
						<div class="edu2_blog_page">
    							<!--EDUCATION BLOG PAGE WRAP START-->
    						<div class="edu2_blogpg_wrap">
    							<div class="blog_slider_thumb">
									<div id="owl-demo-blog" class="owl-carousel owl-theme">
										<div class="item">
											<figure>
		    									<img src="extra-images/ourblog-1.jpg" alt=""/>
		    								</figure>
										</div>
										<div class="item">
											<figure>
		    									<img src="extra-images/ourblog-2.jpg" alt=""/>
		    								</figure>
										</div>
										<div class="item">
											<figure>
		    									<img src="extra-images/ourblog-3.jpg" alt=""/>
		    								</figure>
										</div>
									</div>

									<div class="customNavigation">
										<a class="btn prev"><i class="fa fa-angle-left"></i></a>
										<a class="btn next"><i class="fa fa-angle-right"></i></a>
									</div>
								</div>

								<div class="edu2_blogpg_des">
									<figure><img src="extra-images/ourblog-des-1.jpg" alt=""></figure>
									<ul>
										<li><i class="fa fa-calendar"></i>07 Jan, 2015</li>
										<li><i class="fa fa-comments-o"></i><a href="#">69 Comments</a></li>
										<li><i class="fa fa-user"></i><a href="#">John Doe</a></li>
									</ul>
									<h5>Excepteur sint occaecat cupidatat non proident</h5>
									<p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>
									<a href="#" class="blog-readmore">read more</a>
								</div>
							</div>
							<!--EDUCATION BLOG PAGE WRAP END-->

							<!--EDUCATION BLOG PAGE WRAP START-->
							<div class="edu2_blogpg_wrap">
								<figure>
									<img src="extra-images/ourblog-2.jpg" alt=""/>
								</figure>
								<div class="edu2_blogpg_des">
									<figure><img src="extra-images/ourblog-des-1.jpg" alt=""></figure>
									<ul>
										<li><i class="fa fa-calendar"></i>07 Jan, 2015</li>
										<li><i class="fa fa-comments-o"></i><a href="#">69 Comments</a></li>
										<li><i class="fa fa-user"></i><a href="#">John Doe</a></li>
									</ul>
									<h5>Excepteur sint occaecat cupidatat non proident</h5>
									<p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>
									<a href="#" class="blog-readmore">read more</a>
								</div>
							</div>
							<!--EDUCATION BLOG PAGE WRAP END-->

							<!--EDUCATION BLOG PAGE WRAP START-->
							<div class="edu2_blogpg_wrap">
								<div class="kd-audio-post">
                                    <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/242629141&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
                                </div>
								<div class="edu2_blogpg_des">
									<figure><img src="extra-images/ourblog-des-1.jpg" alt=""></figure>
									<ul>
										<li><i class="fa fa-calendar"></i>07 Jan, 2015</li>
										<li><i class="fa fa-comments-o"></i><a href="#">69 Comments</a></li>
										<li><i class="fa fa-user"></i><a href="#">John Doe</a></li>
									</ul>
									<h5>Excepteur sint occaecat cupidatat non proident</h5>
									<p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>
									<a href="#" class="blog-readmore">read more</a>
								</div>
							</div>
							<!--EDUCATION BLOG PAGE WRAP END-->

							<!--EDUCATION BLOG PAGE WRAP START-->
							<div class="edu2_blogpg_wrap">
								<div class="kd-video-post">
                                    <iframe src="https://player.vimeo.com/video/67741947?portrait=0"></iframe>
                                </div>
								<div class="edu2_blogpg_des">
									<figure><img src="extra-images/ourblog-des-1.jpg" alt=""></figure>
									<ul>
										<li><i class="fa fa-calendar"></i>07 Jan, 2015</li>
										<li><i class="fa fa-comments-o"></i><a href="#">69 Comments</a></li>
										<li><i class="fa fa-user"></i><a href="#">John Doe</a></li>
									</ul>
									<h5>Excepteur sint occaecat cupidatat non proident</h5>
									<p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>
									<a href="#" class="blog-readmore">read more</a>
								</div>
							</div>
							<!--EDUCATION BLOG PAGE WRAP END-->
						</div>


						<div class="row">
	    					<div class="col-md-12">
								<!--KF_PAGINATION_WRAP START-->
								<div class="kf_edu_pagination_wrap">
									<ul class="pagination">
										<li>
											<a href="#" aria-label="Previous">
											<span aria-hidden="true"><i class="fa fa-angle-left"></i>PREV</span>
											</a>
										</li>
										<li class="active"><a href="#">1</a></li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li><a href="#">5</a></li>
										<li>
											<a href="#" aria-label="Next">
											<span aria-hidden="true">Next<i class="fa fa-angle-right"></i></span>
											</a>
										</li>
									</ul>
								</div>
								<!--KF_PAGINATION_WRAP END-->
							</div>
	    				</div>

					</div>
					<!--EDUCATION BLOG PAGE END-->

				    <!--KF_EDU_SIDEBAR_WRAP START-->
					<div class="col-md-4">
                        <div class="kf-sidebar">

                            <!--KF_SIDEBAR_SEARCH_WRAP START-->
                            <div class="widget widget-search">
                                <h2>Search Course</h2>
                                <form>
                                    <input type="search" placeholder="Keyword...">
                                </form>
                            </div>
                            <!--KF_SIDEBAR_SEARCH_WRAP END-->

                            <!--KF_SIDEBAR_ARCHIVE_WRAP START-->
                            <div class="widget widget-archive ">
                                <h2>Archives</h2>
                                <ul class="sidebar_archive_des">
                                    <li>
                                        <a href="#"><i class="fa fa-angle-right"></i>January</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-angle-right"></i>February</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-angle-right"></i>March</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-angle-right"></i>April</a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-angle-right"></i>May</a>
                                    </li>
                                </ul>
                            </div>
                            <!--KF_SIDEBAR_ARCHIVE_WRAP END-->


                            <!--KF SIDEBAR RECENT POST WRAP START-->
                            <div class="widget widget-recent-posts">
                                <h2>Recent Posts</h2>
                                <ul class="sidebar_rpost_des">
                                    <!--LIST ITEM START-->
                                    <li>
                                        <figure>
                                            <img src="extra-images/archive-1.jpg" alt="">
                                            <figcaption><a href="#"><i class="fa fa-search-plus"></i></a></figcaption>
                                        </figure>
                                        <div class="kode-text">
                                            <h6><a href="#">Lorem ipsum dolor sit amet sint occaecat cupidatat</a></h6>
                                            <span><i class="fa fa-clock-o"></i>10 Jan, 2016</span>
                                        </div>
                                    </li>
                                    <!--LIST ITEM START-->
                                    <!--LIST ITEM START-->
                                    <li>
                                        <figure>
                                            <img src="extra-images/archive-2.jpg" alt="">
                                            <figcaption><a href="#"><i class="fa fa-search-plus"></i></a></figcaption>
                                        </figure>
                                        <div class="kode-text">
                                            <h6><a href="#">Lorem ipsum dolor sit amet sint occaecat cupidatat</a></h6>
                                            <span><i class="fa fa-clock-o"></i>10 Jan, 2016</span>
                                        </div>
                                    </li>
                                    <!--LIST ITEM START-->
                                    <!--LIST ITEM START-->
                                    <li>
                                        <figure>
                                            <img src="extra-images/archive-3.jpg" alt="">
                                            <figcaption><a href="#"><i class="fa fa-search-plus"></i></a></figcaption>
                                        </figure>
                                        <div class="kode-text">
                                            <h6><a href="#">Lorem ipsum dolor sit amet sint occaecat cupidatat</a></h6>
                                            <span><i class="fa fa-clock-o"></i>10 Jan, 2016</span>
                                        </div>
                                    </li>
                                    <!--LIST ITEM START-->
                                </ul>
                            </div>
                            <!--KF SIDEBAR RECENT POST WRAP END-->

                            <!--KF EDU SIDEBAR COURSES CATEGORieS WRAP START-->
                            <div class="widget widget-categories">
                                <h2>categories</h2>
                                <ul>
                                    <li><a href="#"><i class="fa fa-caret-right"></i>Business &amp; Economics</a></li>
                                    <li><a href="#"><i class="fa fa-caret-right"></i>Politics &amp; History</a></li>
                                    <li><a href="#"><i class="fa fa-caret-right"></i>Medical Sciences &amp; Health</a></li>
                                    <li><a href="#"><i class="fa fa-caret-right"></i>Fine Arts</a></li>
                                    <li><a href="#"><i class="fa fa-caret-right"></i>Tourism &amp; Culture</a></li>
                                    <li><a href="#"><i class="fa fa-caret-right"></i>Sports</a></li>
                                </ul>
                            </div>
                            <!--KF EDU SIDEBAR COURSES CATEGORieS WRAP END-->

                            <!--KF SIDE BAR COURSES LIST WRAP START WRAP START-->
                            <div class="widget widget-courses-list">
                                <h2>Latest Courses</h2>
                                <ul>
                                    <li>
                                        <figure>
                                            <img src="extra-images/courseslist1.jpg" alt=""/>
                                            <a href="#">View Detail</a>
                                        </figure>
                                    </li>

                                    <li>
                                        <figure>
                                            <img src="extra-images/courseslist2.jpg" alt=""/>
                                            <a href="#">View Detail</a>
                                        </figure>
                                    </li>

                                    <li>
                                        <figure>
                                            <img src="extra-images/courseslist3.jpg" alt=""/>
                                            <a href="#">View Detail</a>
                                        </figure>
                                    </li>

                                    <li>
                                        <figure>
                                            <img src="extra-images/courseslist4.jpg" alt=""/>
                                            <a href="#">View Detail</a>
                                        </figure>
                                    </li>

                                    <li>
                                        <figure>
                                            <img src="extra-images/courseslist5.jpg" alt=""/>
                                            <a href="#">View Detail</a>
                                        </figure>
                                    </li>

                                    <li>
                                        <figure>
                                            <img src="extra-images/courseslist6.jpg" alt=""/>
                                            <a href="#">View Detail</a>
                                        </figure>
                                    </li>
                                </ul>
                            </div>
                            <!--KF SIDE BAR COURSES LIST WRAP START WRAP END-->

                            <!--KF SIDE BAR TAG CLOUD WRAP START-->
                            <div class="widget widget-tag-cloud">
                                <h2>Tags Cloud</h2>
                                <ul>
                                    <li><a href="#">Science</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Fine Arts</a></li>
                                    <li><a href="#">Research</a></li>
                                    <li><a href="#">Admissions</a></li>
                                    <li><a href="#">PHD</a></li>
                                    <li><a href="#">History &amp; Politics</a></li>
                                    <li><a href="#">Sports</a></li>
                                </ul>

                            </div>
                            <!--KF SIDE BAR TAG CLOUD WRAP END-->

                        </div>
                    </div>
					<!--KF EDU SIDEBAR WRAP END-->

				</div>
			</div>
    	</div>
        <!--Content Wrap End-->
<!--NEWS LETTERS START-->
        <div class="edu2_ft_topbar_wrap">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="edu2_ft_topbar_des">
                            <h5>Subcribe weekly newsletter</h5>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="edu2_ft_topbar_des">
                            <form>
                                <input type="email" placeholder="Enter Valid Email Address">
                                <button><i class="fa fa-paper-plane"></i>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--NEWS LETTERS END-->
        <!--FOOTER START-->
       <?php include 'footer.php'; ?>