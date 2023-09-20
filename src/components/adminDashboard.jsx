import '../styles/adminDashboard.css'

const AdminDashboard = () => {
    return ( 
        <div className="adminDashboard">
            <h1>Welcome to Admin DashBoard</h1>

            <div className="admin_wrapper0">
                <div>
                <img height={"300px"} width={"1000px"} src="https://www.greenwichlibrary.org/wp-content/uploads/2016/02/Pattern-BG-EXPLORE.png" alt="" />
                </div>
                <div className="info_wrapper0">
                    <div className="link">
                        <a href=""><h3 style={{backgroundColor:"white"}}>Greenwich Library to Host an Evening of <br /> Broadway Cabaret</h3></a>
                    </div>
                    <div className="para">
                        <p>By <a href="">Erika Berlin</a> on January 12, 2023</p>
                        <p>The Friends of Greenwich Library are pleased to host a special night of cabaret-style performances with How I Got to…</p> <br />
                    </div>
                    <a href="">Take a look</a>
                
                </div>
            </div>
            <div className="admin_wrapper0">
                <img height={"300px"} width={"1000px"} src="https://www.greenwichlibrary.org/wp-content/uploads/2016/02/Pattern-BG-EXPLORE.png" alt="" />
                <div className="info_wrapper0">
                    <div className="link">
                        <a href="">
                            <h3>Signature Series: In the News with <br /> Fareed Zakaria</h3>
                        </a>
                    </div>
                    <div className="para">
                        <p>By <a href="">Erika Berlin</a> on January 12, 2023</p>
                        <p>Greenwich Library's Signature Series is pleased to welcome bestselling author and journalist Fareed Zakaria to the Library's Berkley Theater on Thursday,...</p> <br />
                    </div>
                    <a href="">Take a look</a>
                </div>
            </div>
            <div className="admin_wrapper0">
                <img height={"300px"} width={"1000px"} src="https://www.greenwichlibrary.org/wp-content/uploads/2016/02/Pattern-BG-EXPLORE.png" alt="" />
                <div className="info_wrapper0">
                    <div className="link">
                        <a href="">
                            <h3>At the Library this January ...</h3>
                        </a>
                    </div>
                    <div className="para">
                        <p>By <a href="">Erika Berlin</a> on December 29, 2022</p>
                        <p>Greenwich Library has a full schedule of (free!) enrichment events throughout january. Speak with a librarian or check the online...</p> <br />
                    </div>
                    <a href="">Take a look</a>
                </div>
            </div>

        </div>
     );
}
 
export default AdminDashboard;