import '../styles/userDashboard.css'

const UserDashboard = () => {
    return ( 
        <div className="userDashboard">
            <h1>Welcome to User DashBoard</h1>

           


            <div className="wrapper0">
                <div className="wrapper0_info">
                    <h1>Learning Lab</h1>
                    <p>The mission of the Library’s Learning Lab is to create an environment in which Greenwich Library staff and patrons can empower themselves with a practical understanding of current technology.</p>
                </div>
            </div>
            <div className="wrapper1">
                <div className="backimage1">
                    <img height={"300px"} width={"1100px"} src="https://www.greenwichlibrary.org/wp-content/uploads/2021/11/LinkedInLearning-1024x400.jpg" alt="" />
                    <div className="feature_card">
                        <div className="date">
                            <p>LEARN</p>
                        </div>
                        <div className="feature_text">
                            <h2>LinkedIn Learning</h2>
                            <p>LinkedIn Learning (formerly Lynda) is an online educational site that features thousands of courses and video tutorials where you can discover, complete, and track courses related to your industry or interests.</p>
                        </div>
                        <a href="">Get Started</a>
                    </div>
                </div>

            </div>
            <div className="wrapper2">
                <div className="backimage2">
                    {/* <img height={"300px"} width={"1100px"} src="https://www.greenwichlibrary.org/wp-content/uploads/2016/04/Pattern-BG-Learn.svg" alt="" /> */}
                    <div className="wrapper2_info">
                        <p style={{ fontSize: "40px", marginTop: "50px", marginBottom: "10px", paddingTop: "100px" }}>Learn Something New or Get Tech Help</p>
                        <p style={{ marginTop: "0px", marginBottom: "35px" }}>Register on the online calander. For more information call ()  -  </p>
                        <a href="">View Calander</a>
                    </div>
                </div>
            </div>



        </div>
     );
}
 
export default UserDashboard;