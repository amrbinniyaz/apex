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
								<h3>Contact US</h3>
                        	</div>
                           
                            <div class="kf_inr_breadcrumb">
								<ul>
									<li><a href="#">Home</a></li>
									<li><a href="#">contact us</a></li>
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
    		<div class="kf_location_wrap">
				<div id="map-canvas" class="map-canvas"></div>
    		</div>
    		<section>
    			<div class="container">
    				<div class="row">
    					<div class="contct_wrap">
    						<form>
		    					<div class="col-md-8">
		    						<div class="contact_heading">
		    							<h4>Sent A Message</h4>
		    						</div>
		    						<div class="row">
		    							<div class="col-md-6">
		    								<div class="contact_des">
		    									<div class="inputs_des">
		    										<span><i class="fa fa-user"></i>Name</span>
		    										<input type="text">
		    									</div>

		    									<div class="inputs_des">
		    										<span><i class="fa fa-envelope-o"></i>E-mail</span>
		    										<input type="text">
		    									</div>

		    									<div class="inputs_des">
		    										<span><i class="fa fa-file-text-o"></i>Subject</span>
		    										<input type="text">
		    									</div>
		    									<button>Submit</button>
		    								</div>
		    							</div>
		    							<div class="col-md-6">
		    								<div class="inputs_des">
		    									<span><i class="fa fa-comments-o"></i>Comemnts</span>
		    									<textarea></textarea>
		    								</div>
		    							</div>
		    						</div>
		    					</div>

		    					<div class="col-md-4">
		    						<div class="contact_heading">
		    							<h4>Contact info</h4>
		    							
		    						</div>
		    						<ul class="contact_meta">
										<li><i class="fa fa-home"></i>APEX INTERNATIONAL SCHOOL,Odumbra, Olavanna.P.O, Calicut-673 025,Kerala, India.</li>
										<li><i class="fa fa-phone"></i><a href="#">0495 2432800,0495 2432811</a></li>
										<li><i class="fa fa-envelope-o"></i><a href="#"> info@apexinternationalschool.org</a></li>
									</ul>
									<div class="contact_heading social">
		    							<h4>Get Social</h4>
		    						</div>
		    						<ul class="cont_socil_meta">
										<a href="https://www.facebook.com/apexinternationalofficial/" target="_blank" class="btn-social btn-facebook"><i class="fa fa-facebook"></i></a>
    							<a href="#" target="_blank" class="btn-social btn-google-plus"><i class="fa fa-google-plus"></i></a>
    							<a href="#" target="_blank" class="btn-social btn-youtube"><i class="fa fa-youtube"></i></a>
    							 <a href="#" target="_blank" class="btn-social btn-twitter"><i class="fa fa-twitter"></i></a>
									</ul>
		    					</div>
		    				</form>
	    				</div>
    				</div>
    			</div>
    		</section>
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