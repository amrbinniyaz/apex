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
    <div class="modal fade" id="signin-box" tabindex="-1" role="dialog">
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
								<h3>gallery-masonary</h3>
                        	</div>
                           
                            <div class="kf_inr_breadcrumb">
								<ul>
									<li><a href="#">Home</a></li>
									<li><a href="#">gallery-masonary</a></li>
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
    	<div class="kf_content_wrap">	
    		<div class="gallery-masonery_page gallery inner-content-holder">
    			<div class="container">
	    			<div class="row">
	    				<ul id="filterable-item-filter-1">
							<li><a data-value="all">All</a></li>
							<li><a data-value="1">Computer</a></li>
							<li><a data-value="2">Science</a></li>
							<li><a data-value="3">History</a></li>
							<li><a data-value="all">Biology</a></li>
							<li><a data-value="1">Academy</a></li>
							<li><a data-value="2">University</a></li>
							<li><a data-value="3">Campus</a></li>
						</ul>

	    				<div id="filterable-item-holder-1">
							<div class="filterable-item all 1 col-md-4 col-sm-6 col-xs-12">
								<div class="edu_masonery_thumb">
									<img src="extra-images/masonry_thumb.jpg" alt=""/>
									<div class="caption"><a href="#">Introduction of University</a></div>
									<a href="extra-images/masonry_thumb.jpg" rel="prettyPhoto[gallery2]" class="zoom"><i class="fa fa-search"></i></a>
								</div>	
							</div>
							<div class="filterable-item all 2 1 9 col-md-4 col-sm-6 col-xs-12">
								<div class="edu_masonery_thumb">
									<img src="extra-images/masonry_thumb2.jpg" alt=""/>
									<div class="caption"><a href="#">Introduction of University</a></div>
									<a href="extra-images/masonry_thumb2.jpg" rel="prettyPhoto[gallery2]" class="zoom"><i class="fa fa-search"></i></a>
								</div>	
							</div>
							<div class="filterable-item all 3 2 1 col-md-4 col-sm-6 col-xs-12">
								<div class="edu_masonery_thumb">
									<img src="extra-images/masonry_thumb3.jpg" alt=""/>
									<div class="caption"><a href="#">Introduction of University</a></div>
									<a href="extra-images/masonry_thumb3.jpg" rel="prettyPhoto[gallery2]" class="zoom"><i class="fa fa-search"></i></a>
								</div>	
							</div>
							<div class="filterable-item all 4 2 9 col-md-4 col-sm-6 col-xs-12">
								<div class="edu_masonery_thumb">
									<img src="extra-images/masonry_thumb4.jpg" alt=""/>
									<div class="caption"><a href="#">Introduction of University</a></div>
									<a href="extra-images/masonry_thumb4.jpg" rel="prettyPhoto[gallery2]" class="zoom"><i class="fa fa-search"></i></a>
								</div>	
							</div>

							<div class="filterable-item all 9 8 7 col-md-4 col-sm-6 col-xs-12">
								<div class="edu_masonery_thumb">
									<img src="extra-images/masonry_thumb6.jpg" alt=""/>
									<div class="caption"><a href="#">Introduction of University</a></div>
									<a href="extra-images/masonry_thumb6.jpg" rel="prettyPhoto[gallery2]" class="zoom"><i class="fa fa-search"></i></a>
								</div>	
							</div>
							<div class="filterable-item all 3 2 4 col-md-4 col-sm-6 col-xs-12">
								<div class="edu_masonery_thumb">
									<img src="extra-images/masonry_thumb5.jpg" alt=""/>
									<div class="caption"><a href="#">Introduction of University</a></div>
									<a href="extra-images/masonry_thumb5.jpg" rel="prettyPhoto[gallery2]" class="zoom"><i class="fa fa-search"></i></a>
								</div>	
							</div>
							<div class="filterable-item all 4 5 7 col-md-4 col-sm-6 col-xs-12">
								<div class="edu_masonery_thumb">
									<img src="extra-images/masonry_thumb9.jpg" alt=""/>
									<div class="caption"><a href="#">Introduction of University</a></div>
									<a href="extra-images/masonry_thumb9.jpg" rel="prettyPhoto[gallery2]" class="zoom"><i class="fa fa-search"></i></a>
								</div>	
							</div>
							<div class="filterable-item all 3 5 7 9 col-md-4 col-sm-6 col-xs-12">
								<div class="edu_masonery_thumb">
									<img src="extra-images/masonry_thumb8.jpg" alt=""/>
									<div class="caption"><a href="#">Introduction of University</a></div>
									<a href="extra-images/masonry_thumb8.jpg" rel="prettyPhoto[gallery2]" class="zoom"><i class="fa fa-search"></i></a>
								</div>	
							</div>
							<div class="filterable-item all 2 4 6 8 col-md-4 col-sm-6 col-xs-12">
								<div class="edu_masonery_thumb">
									<img src="extra-images/masonry_thumb7.jpg" alt=""/>
									<div class="caption"><a href="#">Introduction of University</a></div>
									<a href="extra-images/masonry_thumb7.jpg" rel="prettyPhoto[gallery2]" class="zoom"><i class="fa fa-search"></i></a>
								</div>	
							</div>
							<div class="filterable-item all 1 col-md-4 col-sm-6 col-xs-12">
								<div class="edu_masonery_thumb">
									<img src="extra-images/masonry_thumb.jpg" alt=""/>
									<div class="caption"><a href="#">Introduction of University</a></div>
									<a href="extra-images/masonry_thumb.jpg" rel="prettyPhoto[gallery2]" class="zoom"><i class="fa fa-search"></i></a>
								</div>	
							</div>
							<div class="filterable-item all 2 1 9 col-md-4 col-sm-6 col-xs-12">
								<div class="edu_masonery_thumb">
									<img src="extra-images/masonry_thumb2.jpg" alt=""/>
									<div class="caption"><a href="#">Introduction of University</a></div>
									<a href="extra-images/masonry_thumb2.jpg" rel="prettyPhoto[gallery2]" class="zoom"><i class="fa fa-search"></i></a>
								</div>	
							</div>
							<div class="filterable-item all 3 2 1 col-md-4 col-sm-6 col-xs-12">
								<div class="edu_masonery_thumb">
									<img src="extra-images/masonry_thumb3.jpg" alt=""/>
									<div class="caption"><a href="#">Introduction of University</a></div>
									<a href="extra-images/masonry_thumb3.jpg" rel="prettyPhoto[gallery2]" class="zoom"><i class="fa fa-search"></i></a>
								</div>	
							</div>
							<div class="filterable-item all 4 2 9 col-md-4 col-sm-6 col-xs-12">
								<div class="edu_masonery_thumb">
									<img src="extra-images/masonry_thumb4.jpg" alt=""/>
									<div class="caption"><a href="#">Introduction of University</a></div>
									<a href="extra-images/masonry_thumb4.jpg" rel="prettyPhoto[gallery2]" class="zoom"><i class="fa fa-search"></i></a>
								</div>	
							</div>

							<div class="filterable-item all 9 8 7 col-md-4 col-sm-6 col-xs-12">
								<div class="edu_masonery_thumb">
									<img src="extra-images/masonry_thumb6.jpg" alt=""/>
									<div class="caption"><a href="#">Introduction of University</a></div>
									<a href="extra-images/masonry_thumb6.jpg" rel="prettyPhoto[gallery2]" class="zoom"><i class="fa fa-search"></i></a>
								</div>	
							</div>
							<div class="filterable-item all 3 2 4 col-md-4 col-sm-6 col-xs-12">
								<div class="edu_masonery_thumb">
									<img src="extra-images/masonry_thumb5.jpg" alt=""/>
									<div class="caption"><a href="#">Introduction of University</a></div>
									<a href="extra-images/masonry_thumb5.jpg" rel="prettyPhoto[gallery2]" class="zoom"><i class="fa fa-search"></i></a>
								</div>	
							</div>
						</div>
					</div>
    			</div>
    			<div class="row">
    				<div class="loadmore">
    					<a href="#" class="btn-3">load more</a>
    				</div>
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